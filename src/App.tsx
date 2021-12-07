import React from 'react';
import './App.css';
import Story1 from './views/story1';

export default class App extends React.Component<any,any> {

  render(){
    return (
      <div className="App">
        <Story1 />
      </div>
    );
  }
}
