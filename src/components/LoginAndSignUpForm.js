// login or signup form

import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {Form, Input, Button, message} from 'antd';
import AV from "leancloud-storage";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ACTION} from "configs/mainReducer";
import {getCodeLangKey} from 'utils/common'

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20},
};
const tailLayout = {
    wrapperCol: {offset: 10, span: 14},
};


class CustomForm extends Component {
    onFinish = (values) => {
        //actionType is 'login' or 'signUp'
        const {actionType} = this.props;

        this[actionType](values);
    };

    login = ({username, password}) => {
        const {t, setUser, onClose} = this.props;

        AV.User.logIn(username, password).then((user) => {
            // 登录成功
            message.success(t('loginSucceed'));

            onClose && onClose();

            const {id: userId, attributes: {username}} = user || {attributes: {}};

            setUser({userId, username});

            this.fetchResume({userId, username});
        }, ({code}) => {
            // 登录失败（可能是密码错误）
            message.error(t(getCodeLangKey(code)));
        });
    };

    signUp = ({username, password}) => {
        var user = new AV.User();

        user.setUsername(username);
        user.setPassword(password);

        const {t, setUser, onClose} = this.props;

        user.signUp().then((user) => {
            // 注册成功
            message.success(t('signUpSucceed'));

            onClose && onClose();

            const {id: userId, attributes: {username}} = user || {attributes: {}};

            setUser({userId, username});

            this.fetchResume({userId, username});
        }, ({code}) => {
            // 注册失败（通常是因为用户名已被使用）
            message.error(t(getCodeLangKey(code)));
        });
    };

    fetchResume = ({userId}) => {
        if (userId) {
            const {setLoading} = this.props;
            setLoading(true);

            const query = new AV.Query('Resume');

            query.find().then((resumes) => {
                if (resumes.length > 0) {
                    const {setResumeId, setResume} = this.props;
                    let {id, attributes} = resumes[0];

                    setResumeId(id);
                    setResume(attributes);
                }
            }).finally(() => {
                setLoading(false);
            });
        }
    };

    render() {
        const {t} = this.props;

        return (
            <Form
                {...layout}
                onFinish={this.onFinish}
            >
                <Form.Item
                    label={t('username')}
                    name='username'
                    rules={[{required: true, message: t('usernameRequired')}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label={t('password')}
                    name='password'
                    rules={[{required: true, message: t('passwordRequired')}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        htmlType='submit'
                        type='primary'
                    >
                        {t('submit')}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default compose(
    withTranslation(),
    connect(
        null,
        {
            setUser: (user) => ({type: ACTION.SET_USER, payload: {...user}}),
            setResumeId: (resumeId) => ({type: ACTION.SET_RESUME_ID, payload: {resumeId}}),
            setResume: (resumeData) => ({type: ACTION.SET_RESUME, payload: {resumeData}}),
            setLoading: (loading) => ({type: ACTION.SET_LOADING, payload: {loading}})
        }
    )
)(CustomForm);