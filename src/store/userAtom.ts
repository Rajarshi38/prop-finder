import { atomWithStorage } from "jotai/utils";
import { User } from "../interfaces";

// const userAtom = atom<User | null>(null);
const userAtom = atomWithStorage<User | null>("user", null);

export default userAtom;
