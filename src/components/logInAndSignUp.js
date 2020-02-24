//login and signup component

// username   password
//  yangq      yangq
//  test       test
import React, {Component} from 'react';
import AV from 'leancloud-storage';

class logInAndSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: 'login',
            formData: {
                username: '',
                password: ''
            }
        };
    }

    changeActionType = ({target: {value: actionType}}) => {
        this.setState({actionType});
    };

    signUp = (e) => {
        e.preventDefault();

        const {formData} = this.state;
        var user = new AV.User();
        user.setUsername(formData.username);
        user.setPassword(formData.password);
        user.signUp().then((user) => {
            // 注册成功
            this.props.setCurrentUser && this.props.setCurrentUser();
        }, (error) => {
            // 注册失败（通常是因为用户名已被使用）
            window.alert(error);
        });
    };

    inputChange = (key, value) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [key]: value
            }
        });
    };

    logIn = (e) => {
        e.preventDefault();

        const {formData: {username, password}} = this.state;
        AV.User.logIn(username, password).then((user) => {
            // 登录成功
            this.props.setCurrentUser && this.props.setCurrentUser();
        }, (error) => {
            // 登录失败（可能是密码错误）
            window.alert(error);
        });
    };

    render() {
        const {actionType, formData} = this.state;

        return (
            <section id="logInAndSignUp">
                <div>
                    <TabItem type={'login'} onChange={this.changeActionType} checked={actionType === 'login'}/>
                    <TabItem type={'signup'} onChange={this.changeActionType} checked={actionType === 'signup'}/>
                </div>

                <Form actionType={actionType}
                      formData={formData}
                      onSubmit={actionType === 'login' ? this.logIn : this.signUp}
                      inputChange={this.inputChange}
                />
            </section>
        );
    }
}

export default logInAndSignUp;

// login or signup form
class Form extends Component {
    render() {
        const {actionType, formData, onSubmit, inputChange} = this.props;
        return (
            <div className={actionType}>
                <form onSubmit={onSubmit}>
                    <div className="formRow">
                        <label>
                            用户名
                            <input type="text" name='username'
                                   value={formData.username}
                                   onChange={(event) => inputChange('username', event.target.value)}
                            />
                        </label>
                    </div>
                    <div className="formRow">
                        <label>
                            密码
                            <input type='password' name='password'
                                   value={formData.password}
                                   onChange={(event) => inputChange('password', event.target.value)}
                            />
                        </label>
                    </div>
                    <div className="formActions">
                        <input type="submit" value={actionType === 'login' ? '登录' : '注册'}/>
                    </div>
                </form>
            </div>
        );
    }
}

//login or signup tab
class TabItem extends Component {
    render() {
        const {type, checked, onChange} = this.props;
        return (
            <label>
                <input type='radio' name='type' value={type}
                       checked={checked}
                       onChange={onChange}
                />
                {type === 'login' ? '登录' : '注册'}
            </label>
        );
    }
}