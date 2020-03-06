import React  from "react";
import { Provider, connect } from "react-redux";

import store from "./store";
import "./App.css";
import Root from "./containers/Root";
import {getProductsAction} from './actions/products/productActions'

class App extends React.Component {
  componentDidMount(){
    getProductsAction();
    store.subscribe( () => console.log('updated State', store.getState())); 
  }
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
