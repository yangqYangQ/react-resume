import React, {Component} from 'react';
import classNames from 'classnames';
import './index.module.scss';

class ProgressBar extends Component {
    get value() {
        const value = +this.props.value;

        if (Number.isNaN(value) || value < 0) {
            return '0%';
        }

        if (value > 1) {
            return '100%';
        }

        return `${(value * 100).toFixed(0)}%`;
    };

    render() {
        const {size, label = true} = this.props;
        const value = this.value;

        const barClass = classNames('progress-bar', {
            partial: value !== '100%',
            small: size === 'small'
        });

        return (
            <div style={{width: value}}
                 className={barClass}
            >
                {label ? value : null}
            </div>
        );
    }
}

export default ProgressBar;