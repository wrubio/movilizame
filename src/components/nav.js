import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavStyle extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            type: props.separator
        }
    }

    render () {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className={ this.state.type ? 'show container' : 'hide' }>
                    <ul className="h-menu">
                        <li><a href="#campain">Campaña</a></li>
                        <li><a href="#question">Preguntas Frecuentas</a></li>
                        <li><a href="#updates">Actualizaciones</a>  <span className="badge badge-light">4</span></li>
                        <li><a href="#comments">Comentarios</a>  <span className="badge badge-light">4</span></li>
                        <li><a href="#comunity">Comunidad</a> </li>
                    </ul>
                </div>
            </nav>
        )
    }
} 

NavStyle.propTypes  = {
    separator: PropTypes.bool
}

export default NavStyle;