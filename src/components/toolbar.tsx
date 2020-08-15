import React, {useEffect, useState} from 'react';
import {Resizable} from 're-resizable';
import {Link, useLocation} from 'react-router-dom';

import './toolbar.less';

type ItemKey = string;

type ItemProps = {
    active: ItemKey,
    id: ItemKey,
    setActive: (key: ItemKey) => void
};

const Item = (({children, active, setActive, id}) => {
    let className = 'item';
    if (active === id)
        className += ' item-active';

    return (
        <div className={className} onClick={() => setActive(id)}>
            {children}
        </div>
    );
}) as React.FC<ItemProps>;

export const Toolbar = (() => {
    const {pathname} = useLocation();
    const [active, setActive] = useState(pathname);

    useEffect(() => setActive(pathname), [pathname]);

    const items = [{
        path: '/list',
        label: 'Просмотр'
    }, {
        path: '/list/new',
        label: 'Создание'
    }, {
        path: '/about',
        label: 'О программе'
    }];

    return (
        <Resizable defaultSize={{width: '300px', height: '100%'}} minWidth={150} maxWidth={500}>
            <div className="toolbar">
                {items.map(item => (
                    <Item active={active} setActive={setActive} id={item.path} key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </Item>
                ))}
            </div>
        </Resizable>
    );
}) as React.FC;