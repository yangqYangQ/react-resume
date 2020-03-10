import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';

import styles from '../assets/topbar.module.scss';

class Topbar extends Component {
    render() {
        const {i18n} = this.props;

        return (
            <div className={styles.page}>
                <div className="wrapper">
                    <span className="logo">Resume</span>
                    <div className="switch-lang">
                        <span onClick={() => i18n.changeLanguage('zh_CN')}>简体中文</span>
                        <span onClick={() => i18n.changeLanguage('en')}>English</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Topbar);