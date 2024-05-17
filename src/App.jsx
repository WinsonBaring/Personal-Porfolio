// App.js
import React from 'react';
import Header from "sections/Header";
import Intro from "sections/Intro";
import Technical_Skills from "sections/Technical Skills";
function App() {
  const clicker = ()=>{
    alert('clicked')
}
  const background ={
    backgroundColor:"red"
  }
    return (
          <html className='m-10 mx-20'>
            <Header/> 
            <Intro/> 
            <Technical_Skills/>
          </html>

    );
}
export default App;