import React, {useContext} from 'react';

import {List} from '../components/list';
import {StorageContext} from '../store/context';

export const ListContainer = (() => {
    const {state, actions} = useContext(StorageContext);

    return <List list={state.persons} setCurrent={actions.setCurrent}/>;
}) as React.FC;