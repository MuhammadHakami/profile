import React, { Component } from 'react';
import './App.css';
import Edu from './edu'
import Exp from './exp'
import Skills from './skills'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      eduName:['Umm Al-Qura University','Misk Academy & General Assembly','Udacity'],
      eduPoint:['Electric, Electronics, and Communication Engineering.','Data Science Immersive Boot-camp.','Machine Learning Engineer NanoDegree.'],
      eduDesc:['Electronic Devices, Signal modeling and processing, Microprocessors...','Python Programming, Machine Learning Modeling, Data Visualization, Data Mining, and Presentation Skills...','Machine Learning Modeling, Model Interpretation, Model Evaluation, AB Testing, Model Explanation...'],
      eduImage:['https://drive.uqu.edu.sa/_/main/images/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.png','http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png','https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png'],
      expImage:['/assets/download.png','/assets/transfer_learning.png','/assets/houses.png','/assets/salary.png','/assets/text.png'],
      expTitle:['Time Series Market Prediction.','Classification of Flower Images Using Transfer Learning in PyTorch.','Advance Regression and Classification Competition.','Prediction of Customer Review Score based upon the Review text.','Data Science Salary Investigation.'],
      expDesc1:['Made ARIMA and LSTM models to predict one step of future price.','Classified 102 types of flowers using VGG model and Transfer Learning.','Two offline Kaggle Competitions in General Assembly bootcamp with uncleaned housing data.','Used Natural Language Processing(NPL) with Multinomial Naïve Bayes algorithm and Random Forest.','Scraped Salaries of Data Science job postings from Indeed and classified the salaries into high and low.'],
      expDesc2:['Scored 0.21 R2 score with ARIMA as benchmark and 0.75 R2 with LSTM.','Managed to score 84% training and test accuracy with adjusted VGG model.','Achieved 24.5k RMSE/0.37 F1(with serious imbalance class) and won the as the first in both.','Achieved 97 F1 score in predicting customer rating based upon the review text.','Achieved 91% accuracy with Random Forest and included a report at the end.'],
      expUrl:['https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Market_Prediction/time_series.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Transfer_learning/transfer_learning_project.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Housing_advance_methods/Advance%20Regression%20and%20Classification.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Data_Scientists_Salary_classification/Date_Science_salary_invistigation.ipynb','https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/NLP/NLP%20Project%20.ipynb'],
      skillsPro: ['https://res.cloudinary.com/practicaldev/image/fetch/s--FXoaI-ms--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://notebooks.azure.com/Content/landing-page/pythonintro.png','https://broadviewnetworks.ca/wp-content/uploads/2018/02/sql.png','https://cdn1.macworld.co.uk/cmsdata/features/3608274/Terminalicon2_thumb800.png','https://pythonawesome.com/content/images/2018/05/pandas-logo.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/NumPy_logo.svg/1200px-NumPy_logo.svg.png','http://pyviz.org/assets/matplotlib_wm.png','https://www.fullstackpython.com/img/logos/scipy.png','http://pyviz.org/assets/seaborn.png','https://avatars0.githubusercontent.com/u/365630?s=400&v=4','https://cdn.journaldev.com/wp-content/uploads/2018/02/python-statsmodels.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1519940502/keras.png','https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png','https://cdn.iconscout.com/icon/free/png-256/git-16-1175195.png','https://media.moddb.com/images/members/1/374/373702/profile/github-bb449e0ffbacbcb7f9c703db8.png','http://docs.python-requests.org/en/v1.0.0/_static/requests-sidebar.png','https://funthon.files.wordpress.com/2017/05/bs.png?w=1200','https://selenium-python.com/wp-content/uploads/2017/11/cropped-logo-mini.png','https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png','https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png','https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png'],
      skillsFam: ['https://dwglogo.com/wp-content/uploads/2017/09/c_logo.png','https://www.bytecode.com.bd/wp-content/uploads/2017/07/java-logo-300x150.png','https://cdn-images-1.medium.com/max/1600/1*1gx5I6RbBoJieKjT-mzRzA.png','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1280px-Apache_Spark_logo.svg.png','http://www.godatafy.com/wp-content/uploads/2015/09/hive-pig.png','https://2.bp.blogspot.com/-DVuoJmAoO_I/WqFFIPRuyVI/AAAAAAABgbM/gxqVYKxMclQlJKWkkd6K0GbMtpxA1PsygCLcBGAs/s1600/FlaskLogo.png','http://soyoungpark.github.io/assets/images/tensorflowtraffic/tf.png','http://www.stickpng.com/assets/images/586aaf811fdce414493f5105.png'],
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
  componentDidMount(){
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=SciPy&format=json',
    })
    .then(response => {
      console.log(response.data.query.search[1].snippet)
      this.setState({urlPro:response.data.query.search[1].snippet})
    })
    .catch(response => {console.log(response)})
  }
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
        {/* <section className='mt-5 text-center'>
          <h1>Personal Information</h1>
        </section>
        <hr className='big-hr'/> */}
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
