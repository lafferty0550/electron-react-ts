import React from 'react';
import {Avatar} from './icons/avatar';

import './card.less';
import {Link} from 'react-router-dom';
import {Attribute, AttributeChanges, Person} from '../store/types';
import {Bin} from './bin';

type Props = {
    person: Person,
    hideBack?: boolean,

    setCurrent?: () => void,
    changeAttribute?: (index: number, changes: AttributeChanges) => void,
    removeAttribute?: (index: number) => void
};

export const Card = (({
                          hideBack, setCurrent, changeAttribute,
                          removeAttribute, person
                      }) => (
    <div className='card'>
        {!hideBack && (
            <div className="card-back">
                <Link to={`/list/${person.id}/edit`} className="card-back__button"
                      onClick={setCurrent}>Редактировать</Link>
                <Link to={`/list/${person.id}/delete`} className="card-back__button" onClick={setCurrent}>Удалить</Link>
            </div>
        )}
        {person.id && <div className="card__title">Пользователь №{person.id}</div>}
        <Avatar/>
        <div className="card__attributes">
            <div className="card__attributes-title">
                Список атрибутов
            </div>
            <div className='card__attributes-list'>
                {person.attributes.map((attribute: Attribute, index: number) => (
                    <div className='card__attribute' key={index}>
                        {changeAttribute ? (
                            <>
                                <input className="card__attribute-key" value={attribute.key}
                                       onChange={e => changeAttribute(index, {key: e.target.value})}/>
                                <input className="card__attribute-value" value={attribute.value}
                                       onChange={e => changeAttribute(index, {value: e.target.value})}/>
                                {removeAttribute && <Bin className='attribute__remove' onClick={() => removeAttribute(index)}>Удалить</Bin>}
                            </>
                        ) : (
                            <>
                                <div className="card__attribute-key">{attribute.key}:</div>
                                <div className="card__attribute-value">{attribute.value}</div>
                                {removeAttribute && <div onClick={() => removeAttribute(index)}>Удалить</div>}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
)) as React.FC<Props>;