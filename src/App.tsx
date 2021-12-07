import React from 'react';
import './App.css';
import Story from './views/story';
import { stories } from './data/stories';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component<any,any> {

  render(){
    return (
      <div className="App">
        <Routes>
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
