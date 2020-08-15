import React, {useState} from 'react';

import {Attribute, Person} from '../store/types';
import {Button} from './button';
import {Card} from './card';

import './edit.less';

type Props = {
    current: Person,

    changeAttribute: (index: number, changes: any) => void,
    addAttribute: (attribute: Attribute) => void,
    removeAttribute: (index: number) => void,
    save: () => void
};

export const Edit = (({current, changeAttribute, addAttribute, removeAttribute, save}) => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    return (
        <div className='edit-page'>
            <Card person={current} hideBack={true} removeAttribute={removeAttribute}
                  changeAttribute={(index, changes) => changeAttribute(index, changes)}/>
            <div className="create-page__form">
                <span className='create-page__form-key'>Название атрибута</span>
                <input type="text" value={key} onChange={e => setKey(e.target.value)}/>
                <span className='create-page__form-value'>Значение атрибута</span>
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="create-page__actions">
                <Button onClick={() => {
                    if (key && value)
                        addAttribute({key, value});
                    if (!key && !value) {
                        setKey('');
                        setValue('');
                    }
                }}>Добавить атрибут</Button>
                <Button onClick={save}>Сохранить</Button>
            </div>
        </div>
    );
}) as React.FC<Props>;