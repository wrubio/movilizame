import React, { Component } from 'react';
import './App.css';

// External imports

// Components
import Contribution from './components/contribution';
import NavStyle from './components/nav';
// Information components
import Campaign from './components/campaign';
import Fquestions from './components/fquestions';
import Update from './components/update';
import Comments from './components/comments';
import Community from './components/community';

class App extends Component {
  
  constructor (props) {
      super(props);
      this.state = {
        display: [true, false, false, false, false]
      }
  }

  showInformation = (numMenu) => {
    let newArray = [];
    this.state.display.map((value, i) => {
      if (i === parseInt(numMenu)) newArray[i] = true;
      else newArray[i] = false;
    })
    this.setState({ display: newArray })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        
        <NavStyle separator={'topMenu'} />
        
        <section className="mt-5">
          <div className="container">

            <div className="row">
              <div className="col-lg-2">
                <div className="company-logo">Movilizate</div>
                <div className="company-name">de: Movilizame S.A.S.</div>
                <div className="projects">Proyectos: 1</div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-10">
                <h1>MOVILÍZAME - Movilidad inteligente en tu ciudad.</h1>
                <p className="subtitle">Con movilizate puedes seleccionar asdasdasdas asdas asd asd asdasd asdasdasdasda</p>
              </div>
            </div>

            <div className="app-information mt-5">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <div className="main-video">
                    <iframe width="100%" height="420" src="https://www.youtube.com/embed/Q3JBvLOzL0o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <Contribution />
                </div>
              </div>
            </div>

          </div>

          <NavStyle separator={'infoMenu'} showInformation={this.showInformation} />

          <div className="mt-5"></div>

          <div className="more-information container">
            <div className={this.state.display[0] ? 'fadeIn' : 'fadeOut'}><Campaign /></div>
            <div className={this.state.display[1] ? 'fadeIn' : 'fadeOut'}><Fquestions /></div>
            <div className={this.state.display[2] ? 'fadeIn' : 'fadeOut'}><Update /></div>
            <div className={this.state.display[3] ? 'fadeIn' : 'fadeOut'}><Comments /></div>
            <div className={this.state.display[4] ? 'fadeIn' : 'fadeOut'}><Community /></div>
          </div>

          <div className="mt-5"></div>

        </section>

        <footer>
          <NavStyle separator={'footerMenu'} />
          <div className="mt-4"></div>
          <div className="footer-container container">
            asdasdas
          </div>
          <div className="mt-4"></div>
          <NavStyle separator={'footerEnd'} />
        </footer>
        
      </div>
    );
  }
}

export default App;
