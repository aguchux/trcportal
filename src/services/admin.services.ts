
import { apiFetcher } from "@/axios";

export const login = async (email: string, password: string): Promise<ResponseData> => {
    const logon = await apiFetcher.post('/login', {
        email,
        password
    });
    return logon.data as ResponseData;
    }

export const logout = async (): Promise<ResponseData> => {
    const logoff = await apiFetcher.post('/logout');
    return logoff.data as ResponseData;
}

export const me = async (): Promise<ResponseData> => {
    const me = await apiFetcher.get('/me');
    return me.data as ResponseData;
    }


export const currAdmin = async (): Promise<ResponseData> => {
    const info = await apiFetcher.get('/info');
    return info.data as ResponseData;
}

