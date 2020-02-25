import React, {Component} from 'react';
import Button from './Button';

import styles from '../assets/topbar.module.css';

class Topbar extends Component {
    render() {
        return (
            <div className={styles.page}>
                <div className="wrapper">
                    <span className="logo">Resume</span>
                    <div className="actions">
                        <Button content='保存' type='primary'/>
                        <Button content='预览' left={10}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;