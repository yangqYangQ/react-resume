import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withTranslation} from 'react-i18next';
import AV from "leancloud-storage";
import {message} from 'antd';

import Button from './Button';
import PersonalInfo from './Svg/PersonalInfo';
import Experience from './Svg/Experience';
import Education from './Svg/Education';
import Projects from './Svg/Projects';
import Skill from './Svg/Skill';
import Preview from './Svg/Preview';
import EmptyDataSvg from './Svg/EmptyData';
import ProgressBar from './ProgressBar';
import {ACTION} from 'configs/mainReducer';

import styles from 'assets/resumePreview.module.scss';

class ResumePreview extends Component {
    archiveResume = () => {
        const {resume} = this.props;

        if (resume.id) {
            this.updateResume();
        } else {
            this.addResume();
        }
    };

    addResume = () => {
        const {resume, setResumeId, setLoading, t} = this.props;

        setLoading(true);

        const user = AV.User.current();

        const Resume = AV.Object.extend('Resume');
        const resu = new Resume();

        this.setResumeAVValues(resu, resume);

        const acl = new AV.ACL();
        acl.setReadAccess(user, true);
        acl.setWriteAccess(user, true);

        resu.setACL(acl);
        resu.save().then((reponse) => {
            message.success(t('saveSucceed'));
            setResumeId(reponse.id);
        }, (error) => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    updateResume = () => {
        const {resume, setLoading, t} = this.props;

        setLoading(true);

        const resu = AV.Object.createWithoutData('Resume', resume.id);

        this.setResumeAVValues(resu, resume);

        resu.save().then(() => {
            message.success(t('updateSucceed'));
        }, (error) => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    setResumeAVValues = (avObj, {personalInfo, projects, skills, experience, education}) => {
        avObj.set('personalInfo', personalInfo);
        avObj.set('projects', projects);
        avObj.set('skills', skills);
        avObj.set('experience', experience);
        avObj.set('education', education);
    };

    render() {
        const {resume: {personalInfo, projects, skills, experience, education}, user, t} = this.props;

        return (
            <div className={styles.page}>
                <div className='actions'>
                    {
                        user.id ? <Button content={t('save')} type='primary' onClick={this.archiveResume}/> : null
                    }
                    <Button content={t('download')} left={10}/>
                </div>

                {
                    (
                        (!personalInfo || !personalInfo.name) &&
                        (!projects || projects.length === 0) &&
                        (!skills || skills.length === 0) &&
                        (!experience || experience.length === 0) &&
                        (!education || education.length === 0)
                    ) ?
                        <div className='empty-container'>
                            <EmptyDataSvg/>
                            <span>{t('emptyContentWarning')}</span>
                        </div> : null
                }

                {
                    (personalInfo && personalInfo.name) ?
                        <>
                            <h1>{personalInfo.name}{t('vita')}</h1>
                            <section className='personalInfo'>
                                <div className='resume-section-total-heading'>
                                    <PersonalInfo/>
                                    <h2>{t('resume.personalInfo._')}</h2>
                                </div>
                                <div className='padding-5'>
                                    <span className='brief-info'>{personalInfo.city}</span>
                                    <span className='brief-info'>{personalInfo.birth}</span>
                                    <span className='brief-info'>{personalInfo.job}</span>
                                    <span className='brief-info'>{personalInfo.degree}</span>
                                </div>
                                <div className='padding-5'>
                                    <label>{`${t('resume.personalInfo.mobile')}：`}</label>
                                    <a href={`tel:${personalInfo.mobile}`}>
                                        <span>{personalInfo.mobile}</span>
                                    </a>
                                </div>
                                <div className='padding-5'>
                                    <label>{`${t('resume.personalInfo.QQ')}：`}</label>
                                    <span>{personalInfo.QQ}</span>
                                </div>
                                <div className='padding-5'>
                                    <label>{`${t('resume.personalInfo.e-mail')}：`}</label>
                                    <a href={`mailto:${personalInfo['e-mail']}`}>
                                        <span>{personalInfo['e-mail']}</span>
                                    </a>
                                </div>
                                <div className='padding-5'>
                                    <label>{`${t('resume.personalInfo.github')}：`}</label>
                                    <a href={personalInfo['github']} target='_blank'
                                       rel="noopener noreferrer"
                                    >
                                        <span>{personalInfo['github']}</span>
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
                                <h2>{`${t('resume.projects._')}：`}</h2>
                            </div>
                            <ol>
                                {
                                    projects.map(({details, link, name}, index) =>
                                        <li key={index} className='padding-5'>
                                            <div className='resume-item'>
                                                <span>{name}</span>
                                                <span>
                                                    <a href={`${link}`} title={t('preview')} target='_blank'
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
                                <h2>{t('resume.skills._')}</h2>
                            </div>
                            <ol className='skill-items'>
                                {
                                    skills.map(({level, name}, index) =>
                                        <li key={index} className='padding-5'>
                                            <span className='skill-item-text'>{name}</span>
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
                                <h2>{t('resume.experience._')}</h2>
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
                                <h2>{t('resume.education._')}</h2>
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

export default compose(
    withTranslation(),
    connect(
        ({user, resume}) => ({user, resume}),
        {
            setResumeId: (resumeId) => ({
                type: ACTION.SET_RESUME_ID,
                payload: {resumeId}
            }),
            setLoading: (loading) => ({
                type: ACTION.SET_LOADING,
                payload: {loading}
            })
        }
    )
)(ResumePreview);