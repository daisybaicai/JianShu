import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIconFontStyle } from './statics/iconfont/iconfont.js';
import Header from './common/header/index'
import store from './store/index'
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux' 
import Home from './page/home'
import Detail from './page/detail'
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle>
        </GlobalStyle>
        <GlobalIconFontStyle>
        </GlobalIconFontStyle>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
