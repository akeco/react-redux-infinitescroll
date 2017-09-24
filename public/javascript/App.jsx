import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/index';
import Main from './components/Main';

var store = createStore(reducers);
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Main/>
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
);