import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Login, Board, MyBoard, MyPage } from './Router';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/All" component={All} />
        <Route path="/My" component={My} />
        <Route path="/Help" component={Help} />
        <Route path="/Kip" component={Kip} />
        <Route path="/Rank" component={Rank} />
    </Switch>
);


export default Router;