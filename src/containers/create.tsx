import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';

import {Create} from '../components/create';
import {StorageContext} from '../store/context';
import {Attribute, AttributeChanges, Attributes} from '../store/types';

export const CreatePageContainer = (() => {
    const [redirect, setRedirect] = useState(false);
    const [attributes, setAttributes] = useState([] as Attributes);
    const {actions} = useContext(StorageContext);

    const changeAttribute = (index: number, changes: AttributeChanges) => {
        const newAttributes = [...attributes];
        newAttributes[index] = {...newAttributes[index], ...changes};
        setAttributes(newAttributes);
    };

    const removeAttribute = (index: number) => {
        const newAttributes = [...attributes.slice(0, index), ...attributes.slice(index + 1)];
        setAttributes(newAttributes);
    };

    const addAttribute = (attribute: Attribute) =>
        setAttributes([...attributes, attribute]);

    const save = () => {
        actions.add(attributes);
        setRedirect(true);
    };

    if (redirect)
        return <Redirect to='/list'/>;

    return <Create save={save} addAttribute={addAttribute} attributes={attributes} changeAttribute={changeAttribute}
                   removeAttribute={removeAttribute}/>;
}) as React.FC;