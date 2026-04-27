import './App.css';
import React,{useState,useRef,useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';

function App() {
    
  return (
    <>
      <Header />
      <main className="pt-10 w-screen">
        <Hero />
        <Works />
      </main>
    </>
  );
}

export default App;