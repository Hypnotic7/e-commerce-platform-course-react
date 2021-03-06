import React from 'react';
import { Switch, Route } from 'react-router-dom';

//CSS
import './App.css';

//COMPONENTS
import Header from './components/header/header.component';

//PAGES
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignOutPage from './pages/sign-in-sign-up/sign-in-sign-up.component';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignOutPage} />
      </Switch>      
    </div>
  )
}

export default App;
