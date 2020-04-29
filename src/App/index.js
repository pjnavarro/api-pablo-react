import React, {Fragment} from 'react';
import{
          BrowserRouter as Router,
          Switch,
          Route
      } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import Home from './home';
import Countries from '../pages/Countries';
import Persons from '../pages/Persons';
import Cars from '../pages/Cars';
import Clubs from '../pages/Clubs';
import Provinces from '../pages/Provinces';

const Index = () => (
    <Fragment>
      <Router>
        <Header/>
          <main>
            <Switch>
              <Route path="/persons" component ={Persons}/>
              <Route path="/countries" component ={Countries}/>
              <Route path="/clubs" component ={Clubs}/>
              <Route path="/cars" component ={Cars}/>
              <Route path="/provinces" component ={Provinces}/>
              <Route path="/" component ={Home}/>
            </Switch>
          </main>
        <Footer/>
      </Router>
    </Fragment>
)
export default Index;