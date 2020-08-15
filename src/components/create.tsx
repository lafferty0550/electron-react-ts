import React, {useState} from 'react';

import {Button} from './button';
import {Card} from './card';
import {Attribute, AttributeChanges, Attributes} from '../store/types';

import './create.less';

type Props = {
    attributes: Attributes,

    addAttribute: (attribute: Attribute) => void,
    changeAttribute: (index: number, changes: AttributeChanges) => void,
    removeAttribute: (index: number) => void,

    save: () => void
};

export const Create = (({save, addAttribute, attributes, changeAttribute, removeAttribute}) => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    return (
        <div className="create-page">
            <Card person={{id: '', attributes}} hideBack={true} changeAttribute={changeAttribute} removeAttribute={removeAttribute}/>
            <div className="create-page__form">
                <span className='create-page__form-key'>Название атрибута</span>
                <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
                <span className='create-page__form-value'>Значение атрибута</span>
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="create-page__actions">
                <Button onClick={() => {
                    if (key && value) {
                        addAttribute({key, value});
                        setKey('');
                        setValue('');
                    }
                }}>Добавить атрибут</Button>
                <Button onClick={save}>Сохранить</Button>
            </div>
        </div>
    );
}) as React.FC<Props>;