import React, { Component } from 'react';
import './App.css';
import Edu from './edu'
import Exp from './exp'
import Skills from './skills'

class App extends Component {
  state={
    eduName:['Umm Al-Qura University','Misk Academy & General Assembly','Udacity'],
    eduPoint:['Electric, Electronics, and Communication Engineering.','Data Science Immersive Boot-camp.','Machine Learning Engineer NanoDegree.'],
    eduDesc:['Electronic Devices, Signal modeling and processing, Microprocessors...','Python Programming, Machine Learning Modeling, Data Visualization, Data Mining, and Presentation Skills...','Machine Learning Modeling, Model Interpretation, Model Evaluation, AB Testing, Model Explanation...'],
    eduImage:['https://drive.uqu.edu.sa/_/main/images/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.png','http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png','https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png']
  }
  render() {
    const edu= this.state.eduName.map((item,index)=>{
      return <Edu eduName={item} eduPoint={this.state.eduPoint[index]} eduDesc={this.state.eduDesc[index]} eduImage={this.state.eduImage[index]} key={index}/>
    })
    return (
      <div className=''>
        <header className='bg-dark text-white navbar'>
          {/* <img src={logo} className=''/> */}
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link activate' href='#'>Education</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link activate' href='#'>Projects</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link activate' href='#'>Skills</a>
            </li>
          </ul>
          <div className='text-right'>
            <input className='rounded my-lg-0' type='search' placeholder='Search...'/>
            <button className='rounded btn btn-outline-success btn-sm ml-2'>Search</button>
          </div>
        </header>
        <section className='text-white port'>
        <h2 className=''>PORTFOLIO</h2>   
        </section>
        <section>
        <h1 className='text-center mt-5'>Education</h1>
          {edu}
        </section>
        <hr/>
        <section>
        <h1 className='text-center mt-5'>Projects</h1>

        </section>
      </div>
    );
  }
}

export default App;
