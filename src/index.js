import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import reducer from 'configs/mainReducer';

import common_en from 'translations/en/common';
import common_zh from 'translations/zh-CN/common';


const store = createStore(reducer);

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: 'zh_CN',                         // language to use
    defaultNS: 'common',                  //Default namespace used if not passed to translation function
    resources: {
        en: {
            common: common_en             // 'common' is our custom namespace
        },
        zh_CN: {
            common: common_zh
        }
    }
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <App/>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
