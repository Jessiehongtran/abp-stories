import React from 'react';
import './App.css';
import Story from './views/story';
import Home from './views/home';
import Test from './views/test';
import { stories } from './data/stories';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component<any,any> {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="test" element={<Test />} />
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
