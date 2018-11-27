import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faHeart } from '@fortawesome/free-solid-svg-icons'

class Contribution extends Component {
    render() {
        return (
            <div className="contribution-status">
                <h3>COP $15.000.0000</h3>
                <p>Contribuido de 2.000.000 COP</p>
                <div className="mt-2"></div>
                <h4>19</h4>
                <p>Patrocinadores</p>
                <div className="mt-2"></div>
                <h4>120</h4>
                <p>Días más</p>
                <div className="mt-4"></div>
                <button type="button" className="btn btn-success btn-lg btn-block">Patrocina este proyecto</button>
                <div className="mt-3"></div>
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-outline-secondary btn-block"><FontAwesomeIcon icon={faHeart} /> Recordarme</button>
                    </div>  
                    <div className="col-6">
                        <ul>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /></li>
                            <li><FontAwesomeIcon icon={faCode} /></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <p>Todo o nada. Este proyecto sólo será financiado si alcanza la meta antes del mié, 26 de diciembre de 2018 11:00 EST.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contribution;