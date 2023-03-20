import { writable, derived} from 'svelte/store';


export const occData = writable([]);
export const occArrays = derived(occData, ($occData) => {
  if ($occData.occupations) {
    return $occData.occupations.map(occupation => occupation);
  }
  return [];
});


export const stateData = writable([]);
export const stateArrays = derived(stateData, ($stateData) => {
  if ($stateData.states) {
    return $stateData.states.map(state => state.name + (' ') + state.abbreviation);
  }
  return [];
});

export const storeBase = writable(null);
export const promise = writable(null);
export const storeUser = writable(null);