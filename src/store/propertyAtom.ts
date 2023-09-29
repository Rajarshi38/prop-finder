import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { FilterParams } from "../interfaces";
import { fetchAllProperties } from "../service/service";

export const filterAtom = atom<FilterParams | null>(null);

export const allPropertiesAtom = atom(async (get) => {
  const filters = get(filterAtom);
  if (!filters) {
    return await fetchAllProperties();
  }
  return await fetchAllProperties(filters);
});

export const lodableProperties = loadable(allPropertiesAtom);
