import React, {Component} from 'react';
import {Input} from 'antd';
import {connect} from 'react-redux';
import {ACTION} from '../configs/mainReducer';
import styles from '../assets/resumeEditor.module.scss';

const {TextArea} = Input;

class ResumeEditor extends Component {

    getTabContent = (field) => {
        const {resume, addItemInArray} = this.props;
        if (resume[field] instanceof Array) {
            const items = resume[field].map((item, index) =>
                <div className="subItem" key={index}>
                    {this.iteratorObj(field, item, index)}
                    <hr/>
                </div>
            );
            return items.concat(<button onClick={() => addItemInArray(field)}>新增</button>);
        } else {
            return this.iteratorObj(field, resume[field]);
        }
    };

    addSubItem = (field) => {
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
        const {selected, switchTab, config = []} = this.props;

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
    ({selected, resume, config}) => ({selected, resume, config}),
    {
        switchTab: (selected) => ({
            type: ACTION.SET_SELETED_TAB,
            selected
        }),
        updateResume: (field, index, key, value) => ({
            type: ACTION.UPDATE_RESUME_DATA,
            payload: {field, index, key, value}
        }),
        addItemInArray: (field) => ({type: ACTION.ADD_ITEM, field})
    }
)(ResumeEditor);