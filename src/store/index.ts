import { AdminAttrs } from '@/models/admins.model';
import { atom, createStore } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const jotaiStore = createStore();

export const busyAtom = atom<boolean>(false);
export const loggedInAtom = atomWithStorage<boolean>('loggedIn', false);
export const adminAtom = atomWithStorage<AdminAttrs>('admin', {} as AdminAttrs);

export default jotaiStore;