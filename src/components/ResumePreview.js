import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonalInfo from './Svg/PersonalInfo';
import Experience from './Svg/Experience';
import Education from './Svg/Education';
import Projects from './Svg/Projects';
import Skill from './Svg/Skill';
import Preview from './Svg/Preview';
import ProgressBar from './ProgressBar';
import styles from '../assets/resumePreview.module.scss';

class ResumePreview extends Component {
    render() {
        const {resume: {personalInfo, projects, skills, experience, education}} = this.props;

        return (
            <div className={styles.page}>
                {
                    (personalInfo && personalInfo.name) ?
                        <>
                            <h1>{personalInfo.name}的个人简历</h1>
                            <section className='personalInfo'>
                                <div className='resume-section-total-heading'>
                                    <PersonalInfo/>
                                    <h2>个人信息</h2>
                                </div>
                                <div className='padding-5'>
                                    <span className='brief-info'>{personalInfo.city}</span>
                                    <span className='brief-info'>{personalInfo.birth}</span>
                                    <span className='brief-info'>{personalInfo.job}</span>
                                    <span className='brief-info'>{personalInfo.degree}</span>
                                </div>
                                <div className='padding-5'>
                                    <label>手机：</label>
                                    <a href={`tel:${personalInfo.mobile}`}>
                                        <span>{personalInfo.mobile}</span>
                                    </a>
                                </div>
                                <div className='padding-5'>
                                    <label>QQ：</label>
                                    <span>{personalInfo.QQ}</span>
                                </div>
                                <div className='padding-5'>
                                    <label>邮箱：</label>
                                    <a href={`mailto:${personalInfo['e-mail']}`}>
                                        <span>{personalInfo['e-mail']}</span>
                                    </a>
                                </div>
                                <div className='padding-5'>
                                    <label>Github：</label>
                                    <a href={personalInfo['Github']} target='_blank'
                                       rel="noopener noreferrer"
                                    >
                                        <span>{personalInfo['Github']}</span>
                                    </a>
                                </div>
                            </section>
                        </> : null
                }

                {
                    (projects && projects.length > 0) ?
                        <section className='projects'>
                            <div className='resume-section-total-heading'>
                                <Projects/>
                                <h2>项目经历</h2>
                            </div>
                            <ol>
                                {
                                    projects.map(({details, link, project}, index) =>
                                        <li key={index} className='padding-5'>
                                            <div className='resume-item'>
                                                <span>{project}</span>
                                                <span>
                                                    <a href={`${link}`} title='预览' target='_blank'
                                                       rel="noopener noreferrer">
                                                        <Preview/>
                                                    </a>
                                                </span>
                                            </div>
                                            <p>{details}</p>
                                        </li>
                                    )
                                }
                            </ol>
                        </section> : null
                }

                {
                    (skills && skills.length > 0) ?
                        <section className='skills'>
                            <div className='resume-section-total-heading'>
                                <Skill/>
                                <h2>技能</h2>
                            </div>
                            <ol className='skill-items'>
                                {
                                    skills.map(({level, skill}, index) =>
                                        <li key={index} className='padding-5'>
                                            <span className='skill-item-text'>{skill}</span>
                                            <div className='skill-item-progress'>
                                                <ProgressBar value={level} size='small'/>
                                            </div>
                                        </li>
                                    )
                                }
                            </ol>
                        </section> : null
                }

                {
                    (experience && experience.length > 0) ?
                        <section className='experience'>
                            <div className='resume-section-total-heading'>
                                <Experience/>
                                <h2>工作经历</h2>
                            </div>
                            <ol>
                                {
                                    experience.map(({company, date, details}, index) =>
                                        <li key={index} className='padding-5'>
                                            <div className='resume-item'>
                                                <span>{company}</span>
                                                <span>{date}</span>
                                            </div>
                                            <p>{details}</p>
                                        </li>
                                    )
                                }
                            </ol>
                        </section> : null
                }

                {
                    (education && education.length > 0) ?
                        <section className='education'>
                            <div className='resume-section-total-heading'>
                                <Education/>
                                <h2>教育背景</h2>
                            </div>
                            <ol>
                                {
                                    education.map(({school, date}, index) =>
                                        <li key={index} className='padding-5'>
                                            <div className='resume-item'>
                                                <span>{school}</span>
                                                <span>{date}</span>
                                            </div>
                                        </li>
                                    )
                                }
                            </ol>
                        </section> : null
                }
            </div>
        );
    }
}

export default connect(
    ({resume}) => ({resume})
)(ResumePreview);