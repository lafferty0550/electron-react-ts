import React, {createContext, ReducerAction, useReducer} from 'react';

import {useSelectors} from './selectors';
import {initialState, reducer} from './reducer';
import {StorageState} from './types';
import {useActions} from './actions';

type StorageContext = {
    state: StorageState,
    actions: ReturnType<typeof useActions>
};

const initialContext: StorageContext = {
    state: {...initialState},
    actions: {
        add: () => null,
        loadCurrent: () => null,
        update: () => null,
        remove: () => null,
        setCurrent: () => null
    }
};

const initialDispatchContext = (action: ReducerAction<any>) => {};

type StorageDispatchContext = typeof initialDispatchContext;

export const StorageContext = createContext<StorageContext>(initialContext);
export const StorageDispatchContext = createContext<StorageDispatchContext>(initialDispatchContext);

export const StorageProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const selectors = useSelectors(state);
    const actions = useActions(state, dispatch);
    const contextValue = {state: {...state}, actions: {...actions}, selectors: {...selectors}};

    return (
        <StorageContext.Provider value={contextValue}>
            <StorageDispatchContext.Provider value={dispatch}>
                {children}
            </StorageDispatchContext.Provider>
        </StorageContext.Provider>
    )
};