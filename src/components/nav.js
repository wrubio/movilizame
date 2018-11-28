import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavStyle extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            type: props.separator,
            active: [true, false, false, false, false]
        }
    }

    onNavbar (e) {
        e.stopPropagation();
        const element = e.target;
        const valHref = element.getAttribute('href');
        const subValHref = valHref.substring(1);
        this.props.showInformation(subValHref);
        let array = [];
        this.state.active.map((value, i) => {
            if (i === parseInt(subValHref)) array[i] = true;
            else array[i] = false;
        })
        this.setState({ active: array })
    }

    render () {
        return (
            <nav className="navbar navbar-light bg-light padd-bott">

                <div className={ this.state.type === 'topMenu' ? 'show collapse navbar-collapse' : 'hide' }>
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-1">
                            <a className="navbar-brand" href="#">Movilizame</a>
                        </div>
                        <div className="col-lg-4">
                            <ul className="h-menu">
                                <li><a href="#0">Arte</a></li>
                                <li><a href="#1">Cómics & ilustración</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-4">
                            <form className="form-inline form-position">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className={ this.state.type === 'infoMenu' ? 'show container' : 'hide' }>
                    <ul className="h-menu">
                        <li className={ this.state.active[0] ? 'active' : null }>
                            <a href="#0" onClick={(e) => this.onNavbar(e)} >Campaña</a>
                        </li>
                        <li className={ this.state.active[1] ? 'active' : null }>
                            <a href="#1" onClick={(e) => this.onNavbar(e)}>Preguntas Frecuentas</a>
                        </li>
                        <li className={ this.state.active[2] ? 'active' : null }>
                            <a href="#2" onClick={(e) => this.onNavbar(e)}>Actualizaciones <span className="badge badge-light">4</span></a>
                        </li>
                        <li className={ this.state.active[3] ? 'active' : null }>
                            <a href="#3" onClick={(e) => this.onNavbar(e)}>Comentarios <span className="badge badge-light">4</span></a>
                        </li>
                        <li className={ this.state.active[4] ? 'active' : null }>
                            <a href="#4" onClick={(e) => this.onNavbar(e)}>Comunidad</a>
                        </li>
                    </ul>
                </div>

                <div className={ this.state.type === 'footerMenu' ? 'show container' : 'hide' }>
                    <ul className="h-menu">
                        <li><a href="#0">Arte</a></li>
                        <li><a href="#1">Cómics & ilustración</a></li>
                        <li><a href="#2">Diseño & tecnología</a></li>
                        <li><a href="#3">Cine</a></li>
                        <li><a href="#4">Comida & creaciones</a></li>
                        <li><a href="#4">Juegos</a></li>
                        <li><a href="#4">Música</a></li>
                        <li><a href="#4">Publicaciones</a></li>
                    </ul>
                </div>

                <div className={ this.state.type === 'footerEnd' ? 'show container' : 'hide' }>
                    <ul className="h-menu">
                        <li><a href="#0">Confianza y seguridad</a></li>
                        <li><a href="#1">Términos de uso</a></li>
                        <li><a href="#2">Política de privacidad</a></li>
                        <li><a href="#3">Política de cookies</a></li>
                    </ul>
                </div>

            </nav>
        )
    }
} 

NavStyle.propTypes  = {
    separator: PropTypes.string
}

export default NavStyle;