
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { apiFetcher } from '@/axios';
import { useRouter } from 'next/router';

export const useAuth = () => {
    const { isReady } = useRouter();
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const queryClient = useQueryClient();

    const token = getCookie('token');

    useEffect(() => {
        if (!token) {
            setLoggedIn(false)
            queryClient.clear();
            return;
        };
        setLoggedIn(true)
    }, [token]);

    const authLogin = async (logon: TLogin): Promise<Boolean> => {
        const { email, password, remember } = logon;
        try {
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
        }
    }

    const authLogout = async (): Promise<Boolean> => {
        try {
            const logout = await apiFetcher.post('/logout');
            const { data } = logout;
            if (!data.success) return false;
            return true;
        } catch (error) {
            return false;
        }
    }

    const authMe = async (): Promise<IAdmin | null> => {
        if (!token) {
            return null;
        };
        try {
            const result = await apiFetcher.get(`/info?token=${token}`);
            const { data } = result;
            if (!data.success) return null;
            return data.data;
        } catch (error) {
            return null;
        }
    }

    const { data: admin, isLoading, isRefetching, isPending } = useQuery({
        queryKey: ['admin'],
        queryFn: () => authMe().then((data) => data),
        enabled: isReady && !!token,
        staleTime: Number(process.env.CATCHE_STALE_TIME || 1000 * 60 * 10)
    });

    return {
        busy: isLoading || isPending,
        admin,
        authLogin,
        authLogout,
        authMe,
        loggedIn,
    }
}