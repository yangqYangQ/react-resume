import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {compose} from 'redux';
import AV from "leancloud-storage";
import {message, Modal} from 'antd';
import {ACTION} from "configs/mainReducer";
import LoginAndSignUpForm from './LoginAndSignUpForm';

import styles from 'assets/topbar.module.scss';

class Topbar extends Component {
    state = {
        actionType: 'login',
        modelVisible: false
    };

    logOut = () => {
        const {t, initResume, setUser, setResumeId} = this.props;

        AV.User.logOut();
        message.success(t('logoutSucceed'));

        setUser({userId: '', username: ''});
        initResume();
        setResumeId('');
    };

    loginOrSignUpButtonClick = (actionType) => {
        this.setState({
            actionType,
            modelVisible: true
        });
    };

    modelCancel = () => {
        this.setState({modelVisible: false});
    };

    render() {
        const {t, i18n, user} = this.props;
        const {actionType, modelVisible} = this.state;

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
                                        <span onClick={() => this.loginOrSignUpButtonClick('login')}>
                                            {t('login')}
                                        </span>
                                        <span onClick={() => this.loginOrSignUpButtonClick('signUp')}>
                                            {t('signUp')}
                                        </span>
                                    </>
                            }
                        </div>

                        <div className='switch-lang'>
                            <span onClick={() => i18n.changeLanguage('zh_CN')}>简体中文</span>
                            <span onClick={() => i18n.changeLanguage('en')}>English</span>
                        </div>
                    </div>

                    <Modal title={t(actionType)}
                           visible={modelVisible}
                           onCancel={this.modelCancel}
                           footer={null}
                           width={420}
                    >
                        <LoginAndSignUpForm actionType={actionType} onClose={this.modelCancel}/>
                    </Modal>
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