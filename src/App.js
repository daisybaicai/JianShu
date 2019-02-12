import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIconFontStyle } from './statics/iconfont/iconfont.js';
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux' 
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle>
        </GlobalStyle>
        <GlobalIconFontStyle>
        </GlobalIconFontStyle>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
