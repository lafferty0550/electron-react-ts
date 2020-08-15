import {StorageState} from './types';
import {storage} from './store';

export const ACTION_TYPES = {
    ADD_PERSON: 'ADD_PERSON',
    SET_CURRENT: 'SET_CURRENT',
    DELETE_PERSON: 'DELETE_PERSON',
    UPDATE_PERSONS: 'UPDATE_PERSONS'
};

export const initialState: StorageState = {
    persons: storage.get('persons', []),
    current: null
};

export const reducer = (state = initialState, action: any): StorageState => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PERSON:
            return {...state, persons: [...state.persons, action.person]};
        case ACTION_TYPES.SET_CURRENT:
            return {...state, current: action.person};
        case ACTION_TYPES.UPDATE_PERSONS:
            return {...state, persons: action.persons};
        case ACTION_TYPES.DELETE_PERSON:
            return {...state, persons: action.persons};
        default:
            return initialState;
    }
};