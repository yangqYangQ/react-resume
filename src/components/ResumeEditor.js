import React, {Component} from 'react';
import {Input} from 'antd';
import Experience from './Svg/Experience';
import PersonalInfo from './Svg/PersonalInfo';
import Projects from './Svg/Projects';
import Skill from './Svg/Skill';
import Education from './Svg/Education';

import styles from '../assets/resumeEditor.module.scss';

const {TextArea} = Input;

class ResumeEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'personalInfo',
            resume: {
                config: [
                    {field: 'personalInfo', title: '个人信息', component: <PersonalInfo/>},
                    {field: 'projects', title: '我的项目', component: <Projects/>},
                    {field: 'skills', title: '我的技能', component: <Skill/>},
                    {field: 'experience', title: '工作经历', component: <Experience/>},
                    {field: 'education', title: '教育经历', component: <Education/>}
                ],

                personalInfo: {
                    city: '',
                    birth: '',
                    job: '',
                    degree: '',
                    mobile: '',
                    QQ: '',
                    'e-mail': '',
                    Github: ''
                },

                projects: [{
                    project: '',
                    link: '',
                    description: ''
                }],

                skills: [{
                    skill: '',
                    description: ''
                }],

                experience: [{
                    company: '',
                    date: '',
                    mainJob: ''
                }],

                education: [{
                    school: '',
                    date: ''
                }]
            }
        };
    }

    getTabContent = (field) => {
        const {resume} = this.state;
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
                          onChange={e => this.inputChange(e, field, i, key)}
                />
            </div>
        );
    };

    inputChange = (e, field, index, key) => {
        const {value} = e.target;
        const {resume} = this.state;

        if (resume[field] instanceof Array) {
            this.setState({
                resume: {
                    ...resume,
                    [field]: [
                        ...resume[field].slice(0, index),
                        {
                            ...resume[field][index],
                            [key]: value
                        },
                        ...resume[field].slice(index + 1)
                    ]
                }
            });
        } else {
            this.setState({
                resume: {
                    ...resume,
                    [field]: {
                        ...resume[field],
                        [key]: value
                    }
                }
            });
        }
    };

    render() {
        const {resume, selected} = this.state;
        const {config = []} = resume;
        return (
            <div className={styles.page}>
                <nav>
                    <ul>
                        {
                            config.map((tab, index) =>
                                <li key={index}
                                    title={tab.title}
                                    className={tab.field === selected ? 'active' : ''}
                                    onClick={() => this.setState({selected: tab.field})}
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

export default ResumeEditor;