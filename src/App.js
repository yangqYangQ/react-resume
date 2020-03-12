import React, {Component} from 'react';
import {connect} from 'react-redux';
import AV from "leancloud-storage";
import {Spin} from 'antd';
import Topbar from 'components/Topbar';
import ResumeEditor from 'components/ResumeEditor';
import ResumePreview from 'components/ResumePreview';
import {ACTION} from "configs/mainReducer";

import 'utils/AVInit';

import 'normalize.css/normalize.css';
import 'assets/reset.css';
import styles from 'assets/app.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        props.initResume && props.initResume();   //初始化 resume 结构
    }

    componentDidMount() {
        const {setUser} = this.props;
        const user = this.getCurrentUser();

        setUser(user);
        this.fetchResume(user);
    }

    getCurrentUser = () => {
        const {id, attributes: {username}} = AV.User.current() || {attributes: {}};
        return {
            userId: id || '',
            username: username || ''
        };
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
        return (
            <div className={styles.page}>
                <Spin spinning={this.props.loading}>
                    <header>
                        <Topbar/>
                    </header>
                    <main>
                        <ResumeEditor/>
                        <ResumePreview/>
                    </main>
                </Spin>
            </div>
        );
    }
}

export default connect(
    ({loading}) => ({loading}),
    {
        initResume: () => ({type: ACTION.INIT_RESUME_DATA}),
        setUser: (user) => ({type: ACTION.SET_USER, payload: {...user}}),
        setResumeId: (resumeId) => ({type: ACTION.SET_RESUME_ID, payload: {resumeId}}),
        setResume: (resumeData) => ({type: ACTION.SET_RESUME, payload: {resumeData}}),
        setLoading: (loading) => ({type: ACTION.SET_LOADING, payload: {loading}})
    }
)(App);