import React, {Component} from 'react';
import {Input} from 'antd';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withTranslation} from 'react-i18next';
import {ACTION} from '../configs/mainReducer';
import AddSvg from './Svg/Add';
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
            return items.concat(
                <button className='btn btn-dashed'
                        key='add-button'
                        onClick={() => addItemInArray(field)}
                >
                    <span className='action-plus'><AddSvg/></span>
                    <span>{this.props.t('add')}</span>
                </button>
            );
        } else {
            return this.iteratorObj(field, resume[field]);
        }
    };

    iteratorObj = (field, item, i) => {
        return Object.entries(item).map(([key, value], index) =>
            <div className="resumeField" key={index}>
                <label>{this.props.t(`resume.${field}.${key}`)}</label>
                <TextArea value={value} autoSize
                          onChange={e => this.props.updateResume(field, i, key, e.target.value)}
                />
            </div>
        );
    };

    render() {
        const {selected, switchTab, config = [], t} = this.props;

        return (
            <div className={styles.page}>
                <nav>
                    <ul>
                        {
                            config.map((tab, index) =>
                                <li key={index}
                                    title={t(`resume.${tab.field}._`)}
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

export default compose(
    withTranslation(),
    connect(
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
    )
)(ResumeEditor);