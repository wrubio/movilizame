import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faHeart } from '@fortawesome/free-solid-svg-icons'

class Contribution extends Component {
    render() {
        return (
            <div className="contribution-status">
                <h3>COP $15.000.0000</h3>
                <p className="gray-color">Contribuido de 2.000.000 COP</p>

                <div className="mt-2"></div>

                <h4 className="green-color">19</h4>
                <p className="gray-color">Patrocinadores</p>

                <div className="mt-2"></div>

                <h4 className="green-color">120</h4>
                <p className="gray-color">Días más</p>

                <div className="mt-4"></div>

                <button type="button" className="btn btn-success btn-lg btn-block">Patrocina este proyecto</button>

                <div className="mt-3"></div>

                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-outline-secondary btn-block"><FontAwesomeIcon icon={faHeart} /> Recordarme</button>
                    </div>  
                    <div className="col-6">
                        <ul className="h-menu">
                            <li className="right"><span className="fa-icon gray-color"><FontAwesomeIcon icon={faFacebook} /></span></li>
                            <li className="right"><span className="fa-icon gray-color"><FontAwesomeIcon icon={faTwitterSquare} /></span></li>
                            <li className="right"><span className="fa-icon gray-color"><FontAwesomeIcon icon={faEnvelope} /></span></li>
                            <li className="right"><span className="fa-icon gray-color"><FontAwesomeIcon icon={faCode} /></span></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <p className="gray-color p-sm-size"><b>Todo o nada.</b> Este proyecto sólo será financiado si alcanza la meta antes del mié, 26 de diciembre de 2018 11:00 EST.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contribution;