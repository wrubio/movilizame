import React, { Component } from 'react';
import './App.css';

// External imports

// Components
import Contribution from './components/contribution';
import NavStyle from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        
        <NavStyle separator={false} />
        
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

          <NavStyle separator={true} />

        </section>
      </div>
    );
  }
}

export default App;
