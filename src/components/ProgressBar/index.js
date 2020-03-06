import React, {Component} from 'react';
import classNames from 'classnames';
import './index.module.scss';

class ProgressBar extends Component {
    render() {
        const {value, size, label = true} = this.props;

        const barClass = classNames('progress-bar', {
            partial: value < 1,
            small: size === 'small'
        });

        return (
            <div style={{width: `${value * 100}%`}}
                 className={barClass}
            >
                {label ? value : null}
            </div>
        );
    }
}

export default ProgressBar;