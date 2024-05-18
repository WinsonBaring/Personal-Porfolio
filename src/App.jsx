// App.js
import React from 'react';
import Header from "sections/Header";
import Intro from "sections/Intro";
import About from "sections/About";
import Skills from "sections/Skills";
import Projects from "sections/Projects";
import Contact from 'sections/Contact';
import Footer from 'sections/Footer';
import Experience from './sections/Experience';

function App() {
    return (
          <html className=''>
            <article className='m-10 mx-[7rem]'>

            <Header/> 
            <Intro/> 
            <section className='flex flex-col w-full items-center space-y-[10rem]'>
              <About/>
              <Skills/>
              <Projects/>
              <Experience/>
              <Contact/>
            </section>
            </article>
              <Footer/>
          </html>

    );
}
export default App;