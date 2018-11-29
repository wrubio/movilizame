import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

class Fquestions extends Component {

    constructor (props) {
        super(props);
        this.state = {
          showAnswer: [false,false, false, false, false]
        }
    }

    questionClick = (e) => {
        const targetElement = e.target;
        let numQuestion;
        if (targetElement.hasAttribute('data-question')) {
            numQuestion = parseInt(targetElement.getAttribute('data-question'));
        } else {
            const fatherelement = targetElement.closest('.side-box');
            numQuestion = parseInt(fatherelement.getAttribute('data-question'));
        }
        let newArray = [];
        this.state.showAnswer.map((value, i) => {
            if (i === numQuestion) newArray[i] = !value;
            else newArray[i] = value;
        })
        this.setState({ showAnswer: newArray })
    }

    render () {
        return (
            <div>
                <h4><b>Preguntas frecuentes</b></h4>
                <div className="mt-4"></div>

                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-8">
                        
                        <div className="side-box bg-gray" data-question="0" onClick={(e) => this.questionClick(e)}>
                            <div className="b-question">
                                <div className="q-text">pregunta 01</div>
                                <div className="q-arrow">
                                    <FontAwesomeIcon icon={this.state.showAnswer[0] ? faCaretUp : faCaretDown } />
                                </div>
                            </div>
                            <div className={ `clear b-answer ${this.state.showAnswer[0] ?  'down-transition' : 'up-transition'}` }>
                                <div className="mt-4"></div>
                                <p className="gray-color p-md-size">Respuesta pregunta 01</p>
                            </div>
                        </div>

                        <div className="side-box bg-gray" data-question="1" onClick={(e) => this.questionClick(e)}>
                            <div className="b-question">
                                <div className="q-text">pregunta 02</div>
                                <div className="q-arrow">
                                    <FontAwesomeIcon icon={this.state.showAnswer[1] ? faCaretUp : faCaretDown } />
                                </div>
                            </div>
                            <div className={ `clear b-answer ${this.state.showAnswer[1] ?  'down-transition' : 'up-transition'}` }>
                                <div className="mt-4"></div>
                                <p className="gray-color p-md-size">Respuesta pregunta 02</p>
                            </div>
                        </div>

                        <div className="side-box bg-gray" data-question="2" onClick={(e) => this.questionClick(e)}>
                            <div className="b-question">
                                <div className="q-text">pregunta 03</div>
                                <div className="q-arrow">
                                    <FontAwesomeIcon icon={this.state.showAnswer[2] ? faCaretUp : faCaretDown } />
                                </div>
                            </div>
                            <div className={ `clear b-answer ${this.state.showAnswer[2] ?  'down-transition' : 'up-transition'}` }>
                                <div className="mt-4"></div>
                                <p className="gray-color p-md-size">Respuesta pregunta 03</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Fquestions;