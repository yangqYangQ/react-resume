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
            title: '个人信息',
            component: <PersonalInfo/>,
            keys: ['name', 'city', 'birth', 'job', 'degree', 'mobile', 'QQ', 'e-mail', 'Github']
        },

        {
            field: 'projects',
            title: '我的项目',
            component: <Projects/>,
            type: 'array',
            keys: ['project', 'link', 'description']
        },

        {
            field: 'skills',
            title: '我的技能',
            component: <Skill/>,
            type: 'array',
            keys: ['skill', 'level']
        },

        {
            field: 'experience',
            title: '工作经历',
            component: <Experience/>,
            type: 'array',
            keys: ['company', 'date', 'mainJob']
        },

        {
            field: 'education',
            title: '教育经历',
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
    ADD_ITEM: 'addItemInArray'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ACTION.SET_SELETED_TAB:
            return {
                ...state,
                selected: action.selected
            };
        case ACTION.UPDATE_RESUME_DATA:
            const {field, index, key, value} = action.payload;
            const {resume} = state;
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
        case ACTION.INIT_RESUME_DATA:
            let initResume = {};
            state.config.forEach(item => {
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
        case ACTION.ADD_ITEM:
            let newItem = {};

            state.config.find(item => item.field === action.field)
                .keys.forEach(key => {
                newItem[key] = '';
            });

            return {
                ...state,
                resume: {
                    ...state.resume,
                    [action.field]: [
                        ...state.resume[action.field],
                        newItem
                    ]
                }
            };

        default:
            return {...state};
    }
}