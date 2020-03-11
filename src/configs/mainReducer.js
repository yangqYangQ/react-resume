import React from 'react';
import Experience from '../components/Svg/Experience';
import PersonalInfo from '../components/Svg/PersonalInfo';
import Projects from '../components/Svg/Projects';
import Skill from '../components/Svg/Skill';
import Education from '../components/Svg/Education';

const defaultState = {
    selected: 'personalInfo',
    config: [
        {
            field: 'personalInfo',
            component: <PersonalInfo/>,
            keys: ['name', 'city', 'birth', 'job', 'degree', 'mobile', 'QQ', 'e-mail', 'github']
        },

        {
            field: 'projects',
            component: <Projects/>,
            type: 'array',
            keys: ['name', 'link', 'details']
        },

        {
            field: 'skills',
            component: <Skill/>,
            type: 'array',
            keys: ['name', 'level']
        },

        {
            field: 'experience',
            component: <Experience/>,
            type: 'array',
            keys: ['company', 'date', 'details']
        },

        {
            field: 'education',
            component: <Education/>,
            type: 'array',
            keys: ['school', 'date']
        }
    ]
};

export const ACTION = {
    SET_SELETED_TAB: 'setSelectedTab',

    UPDATE_RESUME_DATA: 'updateResume',
    INIT_RESUME_DATA: 'initResume',

    ADD_ITEM: 'addItemInArray',
    DELETE_ITEM: 'deleteItemInArray',

    SET_RESUME_ID: 'setResumeId',
    SET_RESUME: 'setResume',

    SET_USER: 'setUser',

    SET_LOADING: 'setLoading'
};

export default (state = defaultState, action) => {
    const {resume, config} = state;

    const {
        selected, field, index, key, value,
        resumeId, userId: id, username: name,
        resumeData, loading
    } = action.payload || {};

    switch (action.type) {
        case ACTION.SET_SELETED_TAB:
            return {
                ...state,
                selected
            };

        case ACTION.INIT_RESUME_DATA:
            let initResume = {};
            config.forEach(item => {
                if (item.type === 'array') {
                    initResume[item.field] = [];
                } else {
                    initResume[item.field] = {};
                    item.keys.forEach(key => {
                        initResume[item.field][key] = '';
                    });
                }
            });

            return {
                ...state,
                resume: initResume
            };

        case ACTION.UPDATE_RESUME_DATA:
            if (resume[field] instanceof Array) {
                return {
                    ...state,
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
                };
            } else {
                return {
                    ...state,
                    resume: {
                        ...resume,
                        [field]: {
                            ...resume[field],
                            [key]: value
                        }
                    }
                };
            }

        case ACTION.ADD_ITEM:
            let newItem = {};

            config.find(item => item.field === field)
                .keys.forEach(key => {
                newItem[key] = '';
            });

            return {
                ...state,
                resume: {
                    ...resume,
                    [field]: [
                        ...resume[field],
                        newItem
                    ]
                }
            };

        case ACTION.DELETE_ITEM:
            return {
                ...state,
                resume: {
                    ...resume,
                    [field]: [
                        ...resume[field].slice(0, index),
                        ...resume[field].slice(index + 1)
                    ]
                }
            };

        case ACTION.SET_RESUME_ID:
            return {
                ...state,
                resume: {
                    ...resume,
                    id: resumeId
                }
            };

        case ACTION.SET_RESUME:
            return {
                ...state,
                resume: {
                    ...resume,
                    ...resumeData
                }
            };

        case ACTION.SET_USER:
            return {
                ...state,
                user: {id, name}
            };

        case ACTION.SET_LOADING:
            return {
                ...state,
                loading
            };

        default:
            return {...state};
    }
}