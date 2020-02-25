//带涟漪的按钮

import React, {Component} from 'react';
import styles from './index.module.css';

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
    };

    hideRiffle = () => {
        this.setState({show: false});
    };

    get buttonStyle() {
        const {width = 72, height = 32, type = 'default'} = this.props;

        const buttonStyles = {
            'primary': {
                width,
                height,
                color: '#fff',
                backgroundColor: '#02af5f'
            },

            'default': {
                width,
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
                backgroundColor: 'rgba(2, 175, 95, 0.3)'
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