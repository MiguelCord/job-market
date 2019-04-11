import React from 'react';
import PropTypes from 'prop-types';
import '../../css/main.scss';

class Button extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <button
                className={this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string
};

export default Button;
