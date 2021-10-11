import React from 'react';
import './App.css';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from './assets/images/logo.png';
import Display from './components/Display';
import LengthControls from './components/LengthControls';
import audio from './assets/audio/beep2.mp3';


const {useState} = React;

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeDisplay, setTimeDisplay] = useState(1500);
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
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds
    return minutes + ":" + seconds;
  };

  const changeTime = (amount, type, newAmount) => {
    if (type === "break") {
      if (breakLength >= 2 && breakLength <= 60 && newAmount === -1) {
        setBreakLength((prev) => prev + newAmount);
      }
      if (breakLength >= 1 && breakLength < 60 && newAmount === 1) {
        setBreakLength((prev) => prev + newAmount);
      }
    }else {
      if(sessionLength >= 2  && sessionLength <= 60 && newAmount === -1) {
        setSessionLength((prev) => prev + newAmount);
      }
      if(sessionLength >= 1 && sessionLength < 60 && newAmount === 1) {
        setSessionLength((prev) => prev + newAmount);
      }
      if(!timerOn) {
        if (sessionLength >= 2 && sessionLength <= 60 && amount === -60) {
          setTimeDisplay((sessionLength * 60) + amount);
        }
        if (sessionLength >= 1 && sessionLength < 60 && amount === 60) {
          setTimeDisplay((sessionLength * 60) + amount);
        }
      }
    }
  }

  const playTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVar = onBreak;
    console.log(second, date, nextDate, timerOn, onBreak);
    if(!timerOn) {
      console.log(breakLength, sessionLength);
      let interval = setInterval(() => {
        date = new Date().getTime();
        if(date > nextDate) {
          setTimeDisplay(prev => {
            if(prev <= 0 && !onBreakVar) {
              playAudioBreak();
              setOnBreak(true);
              onBreakVar = true;
              return breakLength * 60;
            }
            if(prev <= 0 && onBreakVar) {
              playAudioBreak();
              setOnBreak(false);
              onBreakVar = false;
              return sessionLength * 60;
            }
            
            return prev - 1;
          });
          nextDate += second;
        }
      }, 1000);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }
    if(timerOn){
      clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  }

  const onReset = () => {
    setTimeDisplay(1500);
    setBreakLength(5);
    setSessionLength(25);
    if (playTime()) {
      clearInterval(localStorage.getItem("interval-id"));
    }
    audioBreak.pause();
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
            reset={onReset}
            timeDisplay={timeDisplay}
            time={timerClock}
            play={playTime}
            onBreak={onBreak}
            />
          <div className="row g-0">
          <LengthControls 
            title={"Break Length"}
            idTitle={"break-label"}
            idDecrement={"break-decrement"}
            idIncrement={"break-increment"}
            idLength={"break-length"}
            changeTime={changeTime}
            type={"break"}
            time={breakLength}
            formatTime={timerClock}
            />
            <LengthControls
              title={"Session Length"}
              idTitle={"session-label"}
              idDecrement={"session-decrement"}
              idIncrement={"session-increment"}
              idLength={"session-length"}
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
