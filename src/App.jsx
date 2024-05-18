// App.js
import React from 'react';
import Header from "sections/Header";
import Intro from "sections/Intro";
import About from "sections/About";
import Skills from "sections/Skills";
import Projects from "sections/Projects";

function App() {
    return (
          <html className='m-10 mx-20'>
            <Header/> 
            <Intro/> 
            <section className='flex flex-col w-full items-center space-y-[15rem]'>
              <About/>
              <Skills/>
              <Projects/>
            </section>
          </html>

    );
}
export default App;