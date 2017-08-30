import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx';
import TextBox from '../containers/TextBox.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <TextBox />
      </div>
    );
  }
}

export default App;
