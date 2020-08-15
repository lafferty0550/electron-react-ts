import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {StorageContext} from '../store/context';

// take person id from url params and get its info
export const useCurrent = () => {
    const {state, actions} = useContext(StorageContext);
    const [current, setCurrent] = useState(state.current);
    const {id} = useParams();

    useEffect(() => {
        if (!current)
            actions.loadCurrent(id);
    }, []);
    useEffect(() => {
        if (state.current)
            setCurrent(state.current);
    }, [state.current]);

    return {current, setCurrent};
};