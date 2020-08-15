import {StorageState} from './types';

export const useSelectors = (state: StorageState) => ({
    persons: state.persons
});