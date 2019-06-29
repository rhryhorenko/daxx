import React, { Fragment } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductList from '../containers/Productlist';
import SinglePost from '../containers/Singlepost';
import NavBar from '../components/Navbar';
import configureStore from '../store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/home" component={ProductList} />
            <Route exact path="/product/:id" component={SinglePost} />
            <Redirect to="/" />
            <ProductList />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
