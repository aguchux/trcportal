
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { apiFetcher } from '@/axios';
import { useRouter } from 'next/router';
import { PageAttrs } from '@/models/pages.model';
import { SettingsAttrs } from '@/models/settings.model';

export const useWebsite = () => {
    const { isReady } = useRouter();
    const [settings, setSettings] = useState<SettingsAttrs[]>([])


    const getSettings = async (): Promise<SettingsAttrs[]> => {
        try {
            const response = await apiFetcher.get<ResponseData>('/settings');
            const { data } = response;
            if (!data.success) return [];
            const { settings } = data.data;
            return settings as SettingsAttrs[];
        } catch (error) {
            return [];
        }
    }

    const getPages = async (): Promise<PageAttrs[]> => {
        try {
            const response = await apiFetcher.get<ResponseData>('/pages');
            const { data } = response;
            if (!data.success) return [];
            const { pages } = data.data;
            if (!pages) return [];
            return pages as PageAttrs[];
        } catch (error) {
            return [];
        }
    }

    const getPage = async (slug: string): Promise<PageAttrs> => {
        try {
            const response = await apiFetcher.get<ResponseData>(`/pages/${slug}`);
            const { data } = response;
            if (!data.success) return {} as PageAttrs;
            const { pages } = data.data;
            if (!pages) return {} as PageAttrs;
            return pages as PageAttrs;
        } catch (error) {
            return {} as PageAttrs;
        }
    }


    const getInfo = (keyName: string): SettingsAttrs => {
        try {
            apiFetcher.get<ResponseData>(`/settings/info/${keyName}`).then((response) => {
                const { data } = response;
                if (!data.success) return {} as SettingsAttrs;
                const { pages } = data.data;
                if (!pages) return {} as SettingsAttrs;
                return pages as SettingsAttrs;
            });
            return {} as SettingsAttrs;
        } catch (error) {
            return {} as SettingsAttrs;
        }
    }


    const { data: website, isLoading: websiteIsLoading, isRefetching: websiteIsRefetching, isPending: websiteIsPending } = useQuery({
        queryKey: ['website'],
        queryFn: () => getSettings().then((data) => data),
        enabled: isReady,
        staleTime: Number(process.env.CATCHE_STALE_TIME || 1000 * 60 * 10)
    });

    const { data: pages, isLoading: pagesIsLoading, isRefetching: pagesIsRefetching, isPending: pagesIsPending } = useQuery({
        queryKey: ['pages'],
        queryFn: () => getPages().then((data) => data),
        enabled: isReady,
        staleTime: Number(process.env.CATCHE_STALE_TIME || 1000 * 60 * 10)
    });

    useEffect(() => {
        if (website) {
            setSettings(website);
        }
    }, [website])

    const siteInfo = (keyName: string): string => {
        const setting = settings.find((setting) => setting.keyName === keyName);
        if (!setting) return '';
        return setting.keyValue;
    }

    return {
        busy: websiteIsLoading || websiteIsRefetching || websiteIsPending || pagesIsLoading || pagesIsRefetching || pagesIsPending,
        pages,
        website,
        getPage,
        siteInfo,
        getInfo
    }
}