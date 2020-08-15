import React from 'react';

import {Person} from '../store/types';
import {Card} from './card';
import {Button} from './button';

import './delete.less';

type Props = {
    current: Person,
    accept: (id: string) => void,
    cancel: () => void
};

export const Delete = (({current, accept, cancel}) => (
    <div className='delete-page'>
        <Card person={current} hideBack={true}/>
        <div className='delete-page__msg'>Вы уверены, что хотите удалить данного человека?</div>
        <div className="delete-page__actions">
            <Button onClick={() => accept(current.id)}>Да</Button>
            <Button onClick={cancel}>Нет</Button>
        </div>
    </div>
)) as React.FC<Props>;