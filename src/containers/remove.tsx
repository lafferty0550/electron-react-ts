import React, {useContext, useState} from 'react';
import {Delete} from '../components/delete';
import {StorageContext} from '../store/context';
import {Redirect} from 'react-router-dom';
import {useCurrent} from '../hooks/useCurrent';

export const DeleteContainer = (() => {
    const {actions} = useContext(StorageContext);
    const [redirect, setRedirect] = useState(false);
    const {current} = useCurrent();

    const accept = (id: string) => {
        actions.remove(id);
        setRedirect(true);
    };

    if (redirect)
        return <Redirect to='/list'/>;

    if (current)
        return <Delete current={current} accept={accept} cancel={() => setRedirect(true)}/>;
    return null;
}) as React.FC;