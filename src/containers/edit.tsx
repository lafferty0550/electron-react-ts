import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';

import {Edit} from '../components/edit';
import {useCurrent} from '../hooks/useCurrent';
import {StorageContext} from '../store/context';
import {Attribute, AttributeChanges} from '../store/types';

export const EditContainer = (() => {
    const {actions} = useContext(StorageContext);
    const [redirect, setRedirect] = useState(false);
    const {current, setCurrent} = useCurrent();

    if (current) {
        const changeAttribute = (index: number, changes: AttributeChanges) => {
            const newAttributes = [...current.attributes];
            newAttributes[index] = {...newAttributes[index], ...changes};
            setCurrent({...current, attributes: newAttributes});
        };

        const removeAttribute = (index: number) => {
            const newAttributes = [...current.attributes.slice(0, index), ...current.attributes.slice(index + 1)];
            setCurrent({...current, attributes: newAttributes});
        };

        const addAttribute = (attribute: Attribute) =>
            setCurrent({...current, attributes: [...current.attributes, attribute]});

        const save = () => {
            actions.update(current);
            setRedirect(true);
        };

        if (redirect)
            return <Redirect to='/list'/>;

        return <Edit current={current} changeAttribute={changeAttribute} addAttribute={addAttribute} save={save}
                     removeAttribute={removeAttribute}/>;
    }
    return null;
}) as React.FC;