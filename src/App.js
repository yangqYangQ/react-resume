import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topbar from './components/Topbar';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';
import {ACTION} from "./configs/mainReducer";

import 'normalize.css/normalize.css';
import './assets/reset.css';
import styles from './assets/app.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        props.initResume && props.initResume();
    }

    render() {
        return (
            <div className={styles.page}>
                <header>
                    <Topbar/>
                </header>
                <main>
                    <ResumeEditor/>
                    <ResumePreview/>
                </main>
            </div>
        );
    }
}

export default connect(null, {initResume: () => ({type: ACTION.INIT_RESUME_DATA})})(App);