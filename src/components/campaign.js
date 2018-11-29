import React, { Component } from 'react';

class Campaign extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <h4><b>Movilizame</b></h4>

                    <div className="mt-4"></div>
                    
                    <div className="about-us">
                        <p>“Buscamos que las personas se muevan de forma inteligente a través de recomendaciones de un experto en movilidad y se sientan acompañadas durante el viaje con información relevante de su ruta”.</p>
                    </div>

                    <div className="mt-3"></div>

                    <div className="img-top">
                        <img src="./medias/img/top.png" alt="img info movilizame" />
                    </div>
                    
                    <div className="mt-5"></div>

                    <div className="more-information">
                        <h4><b>Riesgos y desafíos</b></h4>

                        <div className="mt-3"></div>

                        <p>Movilizame se enfrenta a los siguientes retos con el usuario final:</p>

                        <ul>
                            <li>Ahorrar tiempo</li>
                            <li>Movilidad basada en un contexto</li>
                            <li>Comparacion de medios de transporte</li>
                            <li>Diferentes opciones de transporte</li>
                        </ul>

                        <div className="mt-4"></div>

                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRAHheXTxnITMxJTyaxdKPlgEpjTJ2CVW-XHdKuCU0zu1nxRVlql1Fti8rm0Y0DQVhtpBsXLBoySBuD/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="436" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <h4>Apoyar</h4>

                    <div className="mt-5"></div>

                    <div className="row">
                        
                        <div className="col-12">
                            <div className="support-us side-box">
                                <h6><b>Contribuir sin recompensa</b></h6>
                                <div className="mt-4"></div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="50.000" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroup-sizing-default">$ COP</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="side-box">
                                <h6><b>Contribuir COP 100.000 o mas:</b></h6>
                                <div className="mt-4"></div>
                                <h6><b>Con tu donacion</b></h6>
                                <p className="p-sm-size">
                                    Por cada 100.000 COP donados movilizame aportará el 80% a la campaña <b>"por una ciudad con menos de gases contaminantes"</b>, la cual
                                    tiene como prioridad apoyar las inicitiavas de disminución de los gases contaminantes emitidos por
                                    los medios de transporte.
                                </p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Puntos por donacion:</b></h6>
                                <p className="p-sm-size green-color">3000 en la APP</p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Fecha de entrega:</b></h6>
                                <p className="p-sm-size green-color">Julio 2019</p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Donadores:</b></h6>
                                <p className="p-sm-size green-color">2</p>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="side-box">
                                <h6><b>Contribuir COP 400.000 o mas:</b></h6>
                                <div className="mt-4"></div>
                                <h6><b>Con tu donacion</b></h6>
                                <p className="p-sm-size">
                                    Por cada 400.000 COP donados movilizame aportará el 50% a la campaña <b>"por una ciudad con menos de gases contaminantes"</b>, la cual
                                    tiene como prioridad apoyar las inicitiavas de disminución de los gases contaminantes emitidos por
                                    los medios de transporte y además el 40% se aporará a la campaña <b>"más ciclorutas y menos carros"</b>.
                                </p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Puntos por donacion:</b></h6>
                                <p className="p-sm-size green-color">
                                    Tu nombre en las nuevas rutas <br/>
                                    5000 puntos en la APP
                                </p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Fecha de entrega:</b></h6>
                                <p className="p-sm-size green-color">Julio 2019</p>

                                <div className="mt-3"></div>

                                <h6 className="p-sm-size gray-color"><b>Donadores:</b></h6>
                                <p className="p-sm-size green-color">10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Campaign;