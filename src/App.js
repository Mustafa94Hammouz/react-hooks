import React, { Component } from 'react';
import ChangeColor from './components/colorHook/hook';
import './app.scss';


class App extends Component {
  static copyStyle() {
    const element = document.querySelector('.header');
    const style = element.style.cssText;
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute('value', style);
    dummy.select();
    document.execCommand('copy');
    alert('style copied ');
    document.body.removeChild(dummy);
  }

  constructor(props) {
    super(props);
    this.state = {
      color1: '',
      color2: '',
    };
    this.colorHandler = this.colorHandler.bind(this);
  }

  colorHandler(hex1, hex2) {
    this.setState({
      color1: hex1,
      color2: hex2,
    });
  }

  render() {
    const { color1, color2 } = this.state;
    const styles = {
      containerStyle: {
        background: `linear-gradient(to right bottom, ${color1}, ${color2})`,
      },
    };
    return (
      <div className="App">
        <header className="header" style={styles.containerStyle}>
          <ChangeColor className="changeButton" colorHandler={this.colorHandler} bgColor1={color1} bgColor2={color2} />
          <button type="button" className="copyStyleBtn" onClick={() => App.copyStyle()}> Copy Style</button>
        </header>
      </div>
    );
  }
}

export default App;
