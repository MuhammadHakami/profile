import React, { Component } from 'react';
import './App.css';
import Edu from './edu'
import Exp from './exp'
import Skills from './skills'
// import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      eduName:['Umm Al-Qura University','Misk Academy & General Assembly','Udacity','Udacity','Misk Academy & General Assembly'],
      eduPoint:['Electric, Electronics, and Communication Engineering.','Data Science Immersive Boot-camp.','Machine Learning Engineer NanoDegree.','Introduction to self-driving cars NanoDegree.','Full Stake web devolopment Immersive 3 months full time Boot-camp.'],
      eduDesc:['Electronic Devices, Signal modeling and processing, Microprocessors...','Python Programming, Machine Learning Modeling, Data Visualization, Data Mining, and Presentation Skills...','Machine Learning Modeling, Model Interpretation, Model Evaluation, AB Testing, Model Explanation...','Preformance Programming Using C++, Kelman Filter, Statistics, Linear Algebra, Calculus and Controls...','HTML, CSS, JavaScript, Ruby on Rails, React, Redux, NodeJs, ManjoDB, Presentation Skills...'],
      eduImage:['uqu.png','ga.png','udacity.png','udacity.png','ga.png'],
      expImage:['download.png','transfer_learning.png','houses.png','salary.png','text.png'],
      expTitle:['Time Series Market Prediction.','Classification of Flower Images Using Transfer Learning in PyTorch.','Advance Regression and Classification Competition.','Prediction of Customer Review Score based upon the Review text.','Data Science Salary Investigation.'],
      expDesc1:['Made ARIMA and LSTM models to predict one step of future price.','Classified 102 types of flowers using VGG model and Transfer Learning.','Two offline Kaggle Competitions in General Assembly bootcamp with uncleaned housing data.','Used Natural Language Processing(NPL) with Multinomial Naïve Bayes algorithm and Random Forest.','Scraped Salaries of Data Science job postings from Indeed and classified the salaries into high and low.'],
      expDesc2:['Scored 0.21 R2 score with ARIMA as benchmark and 0.75 R2 with LSTM.','Managed to score 84% training and test accuracy with adjusted VGG model.','Achieved 24.5k RMSE/0.37 F1(with serious imbalance class) and won the as the first in both.','Achieved 97 F1 score in predicting customer rating based upon the review text.','Achieved 91% accuracy with Random Forest and included a report at the end.'],
      expUrl:['https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Market_Prediction/time_series.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Transfer_learning/transfer_learning_project.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Housing_advance_methods/Advance%20Regression%20and%20Classification.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Data_Scientists_Salary_classification/Date_Science_salary_invistigation.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/NLP/NLP%20Project%20.ipynb'],
      skillsPro: ['python.png','cpp.png','julia.png','sql.png','bash.png','pandas.png','numpy.png','matplotlib.png','scipy.png','seaborn.png','sklearn.png','statsmodel.png','keras.png','pytorch.png','git.png','github.png','request.png','beatifulsoup.png','selenium.png','web.png','react.png','node.png','ruby.png','rails.png'],
      skillsFam: ['java.png','hadoop.png','spark.png','hive.png','flask.png','tensorflow.png','aws.png','matlab.png'],
      urlPro: 0,
      url:['https://github.com/MuhammadHakami/Machine_Learning_Projects','https://www.linkedin.com/in/muhammad-hakami-b28a75166/','engmuhammadhakami@gmail.com'],
      value:'',
      searchBar:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(event){
    this.setState({value:event.target.value})
  }
  // componentDidMount(){
  //   axios({
  //     method: 'GET',
  //     url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=SciPy&format=json',
  //   })
  //   .then(response => {
  //     console.log(response.data.query.search[1].snippet)
  //     this.setState({urlPro:response.data.query.search[1].snippet})
  //   })
  //   .catch(response => {console.log(response)})
  // }
  render() {
    const edu = this.state.eduName.map((item,index)=>{
      return <Edu eduName={item} eduPoint={this.state.eduPoint[index]} eduDesc={this.state.eduDesc[index]} eduImage={this.state.eduImage[index]} key={index}/>
    })
    const exp = this.state.expTitle.map((item,index)=>{
      return <Exp key={index} expTitle={item} expImage={this.state.expImage[index]} expUrl={this.state.expUrl[index]} expDesc1={this.state.expDesc1[index]} expDesc2={this.state.expDesc2[index]}/>
    })
    return (
      <div className=''>
        <header className='bg-dark text-white navbar fixed-top'>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link activate' href='#education'>Education</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link activate' href='#projects'>Projects</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link activate' href='#skills'>Skills</a>
            </li>
          </ul>
          <div className='text-right'>
            <input className='rounded my-lg-0' type='search' placeholder='Search...' value={this.state.change} onChange={this.handleChange}/>
            <a href={'https://en.wikipedia.org/wiki/'+this.state.value} target="_blank" rel="noopener noreferrer"><button className='rounded btn btn-outline-success btn-sm ml-2'>Search</button></a>
          </div>
        </header>
        <section className='text-white port'>
        <h2 className=''>PORTFOLIO</h2>   
        </section>
        <section className='container'>
        <h1 className='text-center mt-5' id='education'>Education</h1>
          {edu}
        </section>
        <hr className='big-hr'/>
        <section className='container mt-5'>
        <h1 className='text-center' id='projects'>Projects</h1>
          {exp}
        </section>
        <hr className='big-hr'/>
        <section className='container'>
          <h1 className='text-center' id='skills'>Skills</h1>
          <Skills skillsPro={this.state.skillsPro} skillsFam={this.state.skillsFam}/>
        </section>
        <footer>
        <div className='bg-secondary text-center icons'><a href={this.state.url[0]} target="_blank" rel="noopener noreferrer"><i className="fab fa-github mr-2"></i></a><a href={this.state.url[1]} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin mr-2 ml-2"></i></a><a href={'mailto:'+this.state.url[2]} target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square ml-2"></i></a></div>
        <div className='bg-dark text-center text-white p-5'>© 2019 Muhammad Hakami. All rights reserved.</div>
        </footer>
      </div>
    );
  }
}

export default App;
