import React, {Component} from 'react';
import Topbar from './components/Topbar';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';

import 'normalize.css/normalize.css';
import './assets/reset.css';
import styles from './assets/app.module.scss';

class App extends Component {
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

export default App;