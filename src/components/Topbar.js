import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import Button from './Button';

import styles from '../assets/topbar.module.scss';

class Topbar extends Component {
    render() {
        const {i18n} = this.props;

        return (
            <div className={styles.page}>
                <div className="wrapper">
                    <span className="logo">Resume</span>
                    <div className="actions">
                        {/*<Button content='保存' type='primary'/>*/}
                        {/*<Button content='预览' left={10}/>*/}
                        <button onClick={() => i18n.changeLanguage('zh_CN')}>zh_CN</button>
                        <button onClick={() => i18n.changeLanguage('en')}>en</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Topbar);