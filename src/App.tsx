import React from 'react';
import './App.css';
import Story from './views/story';
import Home from './views/home';
import Stories from './views/stories';
import About from './views/about';
import Nav from './views/nav';
import { stories } from './data/stories';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component<any,any> {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
            <>
              <Nav />
              <Home/>
            </>
            } />
          <Route 
            path="/stories" 
            element={
              <>
                <Nav />
                <Stories />
              </>
            } />
          <Route 
            path="/about" 
            element={
              <>
                <Nav />
                <About />
              </>
            } />
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
