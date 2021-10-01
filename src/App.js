import React from 'react';
import './App.css';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from './assets/images/logo.png';
import Display from './components/Display';

const {useState, useEffect} = React;

function App() {

  const [breakLength, setBreakLength] = useState('5');

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={Logo} alt="Logo-personal" className="img-fluid" width="70"></img>
        </div>
        <section className="watch">
          <Display breakLength={breakLength}/>
        </section>
        <div className="footer row">
          <h1 className="col-6 text-start ps-5">25 + 5 Clock</h1>
          <p className="col-6 text-end pe-5">Designed and coded by Ronald Labrador - &copy; 2021</p>
        </div>
      </header>
    </div>
  );
}

export default App;
