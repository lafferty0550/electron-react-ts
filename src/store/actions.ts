import uniqid from 'uniqid';

import {ACTION_TYPES} from './reducer';
import {Attributes, Person, StorageState} from './types';
import {storage} from './store';

export const useActions = (state: StorageState, dispatch: Function) => ({
    // load a person with id in URL
    loadCurrent: (id: string) => {
        for (const person of state.persons)
            if (person.id === id) {
                dispatch({type: ACTION_TYPES.SET_CURRENT, person});
                break;
            }
    },
    add: (attributes: Attributes) => {
        const person: Person = {id: uniqid(), attributes};
        storage.set('persons', [...state.persons, person]);
        dispatch({type: ACTION_TYPES.ADD_PERSON, person});
    },
    update: (updated: Person) => {
        const newPersons = state.persons.map(person => {
            if (person.id === updated.id)
                return updated;
            return person;
        });
        storage.set('persons', newPersons);
        dispatch({type: ACTION_TYPES.UPDATE_PERSONS, persons: newPersons});
    },
    remove: (id: string) => {
        const newPersons: Array<Person> = [];
        for (const person of state.persons)
            if (person.id !== id)
                newPersons.push(person);
        storage.set('persons', newPersons);
        dispatch({type: ACTION_TYPES.UPDATE_PERSONS, persons: newPersons});
    },
    setCurrent: (person: Person) => {
        dispatch({type: ACTION_TYPES.SET_CURRENT, person});
    }
});