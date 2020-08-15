import React, {MouseEvent} from 'react';

import './button.less';

type Props = {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
};

export const Button = (({children, onClick}) => (
    <div className="button" onClick={onClick}>{children}</div>
)) as React.FC<Props>;