import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavStyle extends Component {
    constructor (props) {
        super();
    }
    render () {
        return (
            <nav className="navbar navbar-light bg-light">
                contenido aca
                
                <div className="tab-menu">
                
                </div>
            </nav>
        )
    }
} 

NavStyle.propTypes  = {
    separator: PropTypes.bool
}

export default NavStyle;