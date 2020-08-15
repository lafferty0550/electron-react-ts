import React from 'react';

import './progress-bar.less';

type Props = {
    className: string,
    percentage: number
};

export const ProgressBar = (({className, percentage}) => (
    <div className={`progress-bar ${className}`}>
        <div className="filter" style={{width: `${percentage}%`}}/>
    </div>
)) as React.FC<Props>;