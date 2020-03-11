import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {compose} from 'redux';
import AV from "leancloud-storage";
import {message} from 'antd';

import styles from '../assets/topbar.module.scss';
import {ACTION} from "../configs/mainReducer";

class Topbar extends Component {
    logOut = () => {
        const {t, initResume, setUser, setResumeId} = this.props;

        AV.User.logOut();
        message.success(t('logoutSucceed'));

        setUser({userId: '', username: ''});
        initResume();
        setResumeId('');

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    render() {
        const {t, i18n, user} = this.props;

        return (
            <div className={styles.page}>
                <div className="wrapper">
                    <span className="logo">{t('resumeText')}</span>

                    <div className="-item-right">
                        <div className="user actions">
                            {
                                user.id ?
                                    <>
                                        <span>{user.name}</span>
                                        <span onClick={this.logOut}>{t('logout')}</span>
                                    </> :
                                    <>
                                        <span>{t('signUp')}</span>
                                        <span>{t('login')}</span>
                                    </>
                            }
                        </div>

                        <div className='switch-lang'>
                            <span onClick={() => i18n.changeLanguage('zh_CN')}>简体中文</span>
                            <span onClick={() => i18n.changeLanguage('en')}>English</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    withTranslation(),
    connect(
        ({user}) => ({user}),
        {
            initResume: () => ({type: ACTION.INIT_RESUME_DATA}),
            setUser: (user) => ({type: ACTION.SET_USER, payload: {...user}}),
            setResumeId: (resumeId) => ({type: ACTION.SET_RESUME_ID, payload: {resumeId}})
        }
    )
)(Topbar);