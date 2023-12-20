
"use client"

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { apiFetcher } from '@/axios';

export const useAuth = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [admin, setAdmin] = useState<IAdmin | null>(null);
    const [busy, setBusy] = useState<boolean>(false);

    const token = getCookie('token');

    useEffect(() => {
        if (!token) {
            setLoggedIn(false)
            return;
        };
        setLoggedIn(true)
    }, [token]);

    const authLogin = async (logon: TLogin): Promise<Boolean> => {
        const { email, password, remember } = logon;
        try {
            setBusy(true);
            const login = await apiFetcher.post('/login', {
                email,
                password
            });
            const { data } = login;
            if (!data.success) return false;
            const { token } = data.data;
            if (!token) return false;
            return true;
        } catch (error) {
            return false;
        } finally {
            setBusy(false);
        }
    }

    const authLogout = async (): Promise<Boolean> => {
        try {
            setBusy(true);
            const logout = await apiFetcher.post('/logout');
            const { data } = logout;
            if (!data.success) return false;
            return true;
        } catch (error) {
            return false;
        } finally {
            setBusy(false);
        }
    }

    const authMe = async (): Promise<IAdmin | null> => {
        if (!token) {
            return null;
        };
        try {
            setBusy(true);
            const result = await apiFetcher.get(`/info?token=${token}`);
            const { data } = result;
            if (!data.success) return null;
            return data.data;
        } catch (error) {
            return null;
        } finally {
            setBusy(false);
        }
    }

    useEffect(() => {
        apiFetcher<ResponseData>('/info?token=' + token)
            .then((response) => {
                const { data } = response;
                if (!data.success) return;
                setAdmin(data.data);
                setLoggedIn(true)
            }).catch((error) => {
                setLoggedIn(false)
            })
        setLoggedIn(true)
    }, [token]);


    return {
        busy,
        admin,
        authLogin,
        authLogout,
        authMe,
        loggedIn,
    }
}