import React, {Component} from 'react';
import {Input} from 'antd';
import {connect} from 'react-redux';
import Experience from './Svg/Experience';
import PersonalInfo from './Svg/PersonalInfo';
import Projects from './Svg/Projects';
import Skill from './Svg/Skill';
import Education from './Svg/Education';
import {ACTION} from '../configs/mainReducer';
import styles from '../assets/resumeEditor.module.scss';

const {TextArea} = Input;

class ResumeEditor extends Component {
    state = {
        config: [
            {field: 'personalInfo', title: '个人信息', component: <PersonalInfo/>},
            {field: 'projects', title: '我的项目', component: <Projects/>},
            {field: 'skills', title: '我的技能', component: <Skill/>},
            {field: 'experience', title: '工作经历', component: <Experience/>},
            {field: 'education', title: '教育经历', component: <Education/>}
        ]
    };

    getTabContent = (field) => {
        const {resume} = this.props;
        if (resume[field] instanceof Array) {
            return resume[field].map((item, index) =>
                <div className="subItem" key={index}>
                    {this.iteratorObj(field, item, index)}
                    <hr/>
                </div>
            );
        } else {
            return this.iteratorObj(field, resume[field]);
        }
    };

    iteratorObj = (field, item, i) => {
        return Object.entries(item).map(([key, value], index) =>
            <div className="resumeField" key={index}>
                <label>{key}</label>
                <TextArea value={value} autoSize
                          onChange={e => this.props.updateResume(field, i, key, e.target.value)}
                />
            </div>
        );
    };

    render() {
        const {config = []} = this.state;
        const {selected, switchTab} = this.props;

        return (
            <div className={styles.page}>
                <nav>
                    <ul>
                        {
                            config.map((tab, index) =>
                                <li key={index}
                                    title={tab.title}
                                    className={tab.field === selected ? 'active' : ''}
                                    onClick={() => switchTab(tab.field)}
                                >
                                    {tab.component}
                                </li>
                            )
                        }
                    </ul>
                </nav>

                <ul className="panel">
                    {
                        config.map((tab, index) =>
                            <li key={index}
                                className={tab.field === selected ? 'active' : ''}
                            >
                                {this.getTabContent(tab.field)}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    ({selected, resume}) => ({selected, resume}),
    {
        switchTab: (selected) => ({
            type: ACTION.SET_SELETED_TAB,
            selected
        }),
        updateResume: (field, index, key, value) => ({
            type: ACTION.UPDATE_RESUME_DATA,
            payload: {field, index, key, value}
        })
    }
)(ResumeEditor);