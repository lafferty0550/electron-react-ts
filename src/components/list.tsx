import React from 'react';

import {Card} from './card';
import {Person} from '../store/types';

import './list.less';

type Props = {
    list: Array<Person>,
    setCurrent: (person: Person) => void
};

export const List = (({list, setCurrent}) => (
    <div className='list'>
        {list.map(person => (
            <Card person={person} setCurrent={() => setCurrent(person)} key={person.id}/>
        ))}
    </div>
)) as React.FC<Props>;