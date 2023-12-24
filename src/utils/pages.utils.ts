import { PageAttrs } from "@/models/pages.model";

export const getPageInfo = (menus: PageAttrs[], slug: string) => {
    const thisPageInfo = menus.find((menu) => menu.slug === slug);
    return thisPageInfo;
}