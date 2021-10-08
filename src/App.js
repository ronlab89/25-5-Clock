import React from 'react';
import './App.css';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from './assets/images/logo.png';
import Display from './components/Display';
import LengthControls from './components/LengthControls';
import audio from './assets/audio/beep.mp3';

const {useState} = React;

function App() {

  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [timeDisplay, setTimeDisplay] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [audioBreak, setAudioBreak] = useState(new Audio(audio));

  const playAudioBreak = () => {
    setAudioBreak(new Audio(audio));
    audioBreak.currentTime = 0;
    audioBreak.play();
  }

  const timerClock = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  const changeTime = (amount, type) => {
    if(type === "break") {
      if(breakLength <= 60 && amount < 0) {
        return;
      }
      setBreakLength((prev) => prev + amount);
    }else {
      if(sessionLength <= 60 && amount < 0) {
        return;
      }
      setSessionLength((prev) => prev + amount);
      if(!timerOn) {
        setTimeDisplay(sessionLength + amount);
      }
    }
  }

  const playTime = (e) => {
    e.preventDefault();
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVar = onBreak;
    if(!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if(date > nextDate) {
          setTimeDisplay(prev => {
            if(prev <= 0 && !onBreakVar) {
              playAudioBreak();
              onBreakVar = true;
              setOnBreak(true);
              return breakLength;
            }else if(prev <= 0 && onBreakVar) {
              playAudioBreak();
              onBreakVar = false;
              setOnBreak(false);
              return sessionLength;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    if(timerOn){
      clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  }

  const onReset = (e) => {
    e.preventDefault();
    setTimeDisplay(25 * 60);
    setBreakLength(5 * 60);
    setSessionLength(25 * 60);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={Logo} alt="Logo-personal" className="img-fluid" width="70"></img>
        </div>
        <section className="watch">
        <div className="screen row g-0 p-2">
          <Display 
            meddle={breakLength}
            session={sessionLength}
            reset={onReset}
            timeDisplay={timeDisplay}
            time={timerClock}
            play={playTime}
            ifBreak={onBreak}
            />
          <div className="row g-0">
          <LengthControls 
            title={"Break Length"}
            changeTime={changeTime}
            type={"break"}
            time={breakLength}
            formatTime={timerClock}
            />
            <LengthControls
              title={"Session Length"}
              changeTime={changeTime}
              type={"session"}
              time={sessionLength}
              formatTime={timerClock}
            />
            </div>
          </div>
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
