import { MENU_FORMS } from "@/config/forms";

export const findMenu = (slug: string) => {
    const menu = MENU_FORMS.find((m) => m.slug === slug);
    return menu;
}