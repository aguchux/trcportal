import { AdminAttrs } from '@/models/admins.model';
import { PageAttrs } from '@/models/pages.model';
import { SettingsAttrs } from '@/models/settings.model';
import { TestimoniesAttrs } from '@/models/testimonies.model';
import { atom, createStore } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const jotaiStore = createStore();

export const busyAtom = atom<boolean>(false);
export const menusAtom = atomWithStorage<PageAttrs[]>("menus", [] as PageAttrs[]);
export const settingsAtom = atomWithStorage<SettingsAttrs[]>("settings", [] as SettingsAttrs[]);
export const testimoniesAtom = atomWithStorage<TestimoniesAttrs[]>("testimonies", [] as TestimoniesAttrs[]);
export const loggedInAtom = atomWithStorage<boolean>('loggedIn', false);
export const adminAtom = atomWithStorage<AdminAttrs>('admin', {} as AdminAttrs);

export default jotaiStore;