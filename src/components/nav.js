import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavStyle extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            type: props.separator
        }
    }

    onNavbar (e) {
        e.stopPropagation();
        const element = e.target;
        const valHref = element.getAttribute('href');
        this.props.showInformation(valHref);
    }

    render () {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className={ this.state.type ? 'show container' : 'hide' }>
                    <ul className="h-menu">
                        <li><a href="#campaign" onClick={(e) => this.onNavbar(e)} >Campaña</a></li>
                        <li><a href="#question" onClick={(e) => this.onNavbar(e)}>Preguntas Frecuentas</a></li>
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