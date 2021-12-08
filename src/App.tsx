import React from 'react';
import './App.css';
import Story from './views/story';
import Home from './views/home';
import { stories } from './data/stories';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component<any,any> {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
         {stories.map(story => 
          <Route 
            path={story.path}
            element={<Story story={story}/>}
           />)}
        </Routes>
      </div>
    );
  }
}
