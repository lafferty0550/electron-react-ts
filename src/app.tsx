import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {Toolbar} from './components/toolbar';
import {CreatePageContainer} from './containers/create';
import {ListContainer} from './containers/list';
import {EditContainer} from './containers/edit';
import {StorageProvider} from './store/context';
import {DeleteContainer} from './containers/remove';
import {About} from './components/about';
import {Login} from './components/login';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

import './index.less';
import './app.less';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);


    if (!isAuth)
        return (
            <Login login={() => {
                // simulate loading...
                setTimeout(() => setIsAuth(true), 1000);
            }}/>
        );

    return (
        <div className='layout'>
            <Toolbar/>
            <StorageProvider>
                <div className="content">
                    <Switch>
                        <Route exact={true} path='/list' component={ListContainer}/>
                        <Route exact={true} path='/list/:id/edit' component={EditContainer}/>
                        <Route exact={true} path='/list/:id/delete' component={DeleteContainer}/>
                        <Route exact={true} path='/list/new' component={CreatePageContainer}/>
                        <Route exact={true} path='/about' component={About}/>
                        <Redirect to='/list'/>
                    </Switch>
                </div>
            </StorageProvider>
        </div>
    )
}

ReactDom.render(<Router><App/></Router>, mainElement);