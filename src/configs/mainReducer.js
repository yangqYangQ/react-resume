const defaultState = {
    selected: 'personalInfo',
    resume: {
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

export const ACTION = {
    SET_SELETED_TAB: 'setSelectedTab',
    UPDATE_RESUME_DATA: 'updateResume'
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
        default:
            return {...state};
    }
}