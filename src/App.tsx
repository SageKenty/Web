import './App.css';
import React,{useState,useRef,useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Blog from './components/Blog';


function App() {
    
  return (
    <>
      <Header />
      <main className="pt-10 w-screen">
        <Hero />
        <Works />
        <Blog />

      </main>
    </>
  );
}

export default App;