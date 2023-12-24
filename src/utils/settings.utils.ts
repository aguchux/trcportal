import { PageAttrs } from '@/models/pages.model';
import { SettingsAttrs } from '@/models/settings.model';

export const siteInfo = (settings: SettingsAttrs[], keyName: string) => {
    const setting = settings.find((setting: SettingsAttrs) => setting.keyName === keyName);
    return setting?.keyValue;
}

export const filterHomeMenus = (menus: PageAttrs[]): PageAttrs[] => {
    const filteredMenus = menus.filter((menu) => menu.parent?.toString() === 'home');
    return filteredMenus;
}

export const filterMenus = (menus: PageAttrs[], slug: string): PageAttrs[] => {
    const filteredMenus = menus.filter((menu) => menu.parent?.toString() === slug);
    return filteredMenus;
}