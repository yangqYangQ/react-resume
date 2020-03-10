//带涟漪的按钮

import React, {Component} from 'react';
import styles from './index.module.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            deltaX: 0,
            deltaY: 0
        };
        this.myRef = React.createRef();
    }

    buttonClick = ({clientX, clientY}) => {
        const {x, y} = this.myRef.current.getBoundingClientRect();
        const deltaX = clientX - x - 5;
        const deltaY = clientY - y - 5;
        this.setState({
            show: true,
            deltaX,
            deltaY
        });

        this.props.onClick && this.props.onClick();
    };

    hideRiffle = () => {
        this.setState({show: false});
    };

    get buttonStyle() {
        const {width = 72, height = 32, type = 'default'} = this.props;

        const buttonStyles = {
            'primary': {
                minWidth: width,
                height,
                color: '#fff',
                backgroundColor: '#5f6caf'
            },

            'default': {
                minWidth: width,
                height
            }
        };

        return buttonStyles[type];
    }

    get spanStyle() {
        const {deltaX, deltaY} = this.state;
        const {type = 'default'} = this.props;

        const spanStyles = {
            'primary': {
                left: deltaX,
                top: deltaY,
                backgroundColor: 'rgba(98, 108, 175, 0.3)'
            },

            'default': {
                left: deltaX,
                top: deltaY
            }
        };

        return spanStyles[type];
    }

    render() {
        const {show} = this.state;
        const {content = '', left = 0} = this.props;

        return (
            <div className={styles.wrapper} style={{marginLeft: left}}>
                <button onClick={this.buttonClick}
                        ref={this.myRef}
                        style={this.buttonStyle}
                >
                    {content}
                </button>

                {show ? <span style={this.spanStyle} onAnimationEnd={this.hideRiffle}></span> : null}
            </div>
        );
    }
}