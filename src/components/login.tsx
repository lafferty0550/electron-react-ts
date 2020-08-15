import React, {useState} from 'react';

import {Button} from './button';
import {ProgressBar} from './progress-bar';

import './login.less';

type Props = {
    login: () => void
};

export const Login = (({login}) => {
    const [showLoading, setShowLoading] = useState(false);
    const [percentage, setPercentage] = useState(0);

    let className = 'login-form__bar';
    if (!showLoading)
        className += ' hidden';

    return (
        <div className="login">
            <div className="login-form">
                <div className="login-form__title">Войти в аккаунт</div>
                <ProgressBar className={className} percentage={percentage}/>
                <div className="login-form__form">
                    <input type="text" placeholder='Логин'/>
                    <input type="password" placeholder='Пароль'/>
                </div>
                <div className="login-form__actions">
                    <Button onClick={() => {
                        login();
                        setShowLoading(true);
                        // simulate loading...
                        setPercentage(100);
                    }}>Вход</Button>
                </div>
            </div>
        </div>
    );
}) as React.FC<Props>;