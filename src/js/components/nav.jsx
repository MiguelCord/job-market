import React from 'react';
import PropTypes from 'prop-types';
import '../../css/main.scss';

class Nav extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log(this.props.signIn, this.props.onClick);
        return (
            <nav>
                <a className="logo" href="#">Nostro</a>
                <a className="nav-item" href="#">Find Jobs</a>
                <a className="nav-item" href="#">Contact</a>
                <a className="nav-item" href="#">About</a>
            </nav>
        );
    }
}

Nav.propTypes = {
    onClick: PropTypes.func,
    signIn: PropTypes.bool
};

export default Nav;
