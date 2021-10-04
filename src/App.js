import React from 'react';
import './App.css';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from './assets/images/logo.png';
import Display from './components/Display';

const {useState, useEffect} = React;

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [time, setTime] = useState(1500);
  const [timeMinutes, setTimeMinutes] = useState();
  const [timeSeconds, setTimeSeconds] = useState();

  const timerClock = () => {
    setTimeMinutes((Math.floor(time / 60)) < 10 ? '0' + (Math.floor(time / 60)) : (Math.floor(time / 60)));
    setTimeSeconds((Math.floor(time - timeMinutes * 60)) < 10 ? '0' + (Math.floor(time - timeMinutes * 60)) : (Math.floor(time - timeMinutes *
      60)));
  }

  // la const time lo pongo a decrementar cada 1000 ms con un setTime

  const onReset = (e) => {
    e.preventDefault();
    setTime(1500);
    setTimeMinutes(25);
    setTimeSeconds('00');
    setBreakLength(5);
    setSessionLength(25);
  }

  const decrementBreak = (e) => {
    e.preventDefault();
    if(breakLength >= 2 && breakLength <= 60) {
      setBreakLength((prev) => prev - 1);
    }
  }

  const incrementBreak = (e) => {
    e.preventDefault();
    if(breakLength >= 1 && breakLength < 60) {
      setBreakLength((prev) => prev + 1);
    }
  }

  const decrementSession = (e) => {
    e.preventDefault();
    if(sessionLength >= 2 && sessionLength <= 60) {
      setSessionLength((prev) => prev - 1);
      setTimeMinutes((prev) => prev - 1);
    }
  }

  const incrementSession = (e) => {
    e.preventDefault();
    if(sessionLength >= 1 && sessionLength < 60) {
      setSessionLength((prev) => prev + 1);
      setTimeMinutes((prev) => prev + 1);
    }
  }

  const playTime = (e) => {
    e.preventDefault();
    console.log('funcionando el Play');
    setInterval(() => {
      setTimeMinutes(prev => prev -1);
    }, 1000);
  }

  useEffect(() => {
    timerClock();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={Logo} alt="Logo-personal" className="img-fluid" width="70"></img>
        </div>
        <section className="watch">
          <Display 
            meddle={breakLength}
            session={sessionLength}
            reset={onReset}
            timeMinutes={timeMinutes}
            timeSeconds={timeSeconds}
            dBreak={decrementBreak}
            iBreak={incrementBreak}
            dSession={decrementSession}
            iSession={incrementSession}
            play={playTime}
            />
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
