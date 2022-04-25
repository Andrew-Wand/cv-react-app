
import { Component } from 'react';
import Header from './components/Header';
import './App.css';
import GeneralInfo from './components/Gen-Info';
import Experience from './components/Experience';
import Education from './components/Edu-Info'
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.generalInfoHandler = this.generalInfoHandler.bind(this);
    this.educationHandler = this.educationHandler.bind(this);
    this.experienceHandler = this.experienceHandler.bind(this);


    this.state = {
      general_info: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
      },

      education: {
        school_name: '',
        major_name: '',
        date: '',
      },

      experience: {
        company_name: '',
        position_title: '',
        date: {
          from : '',
          to : '',
        },

      },

    };
  }


  // Deals with gen info state
  generalInfoHandler() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;

    this.setState({
        general_info: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phoneNumber,
        }
    })
  }


// Deals with experience state
  experienceHandler() {
    let companyName = document.getElementById('company-name').value;
    let positionTitle = document.getElementById('position-title').value;
    let fromExperience = document.getElementById('from-experience').value;
    let toExperience = document.getElementById('to-experience').value;



    this.setState ({
      experience: {
        company_name: companyName,
        position_title: positionTitle,
        date: {
          from : fromExperience,
          to : toExperience,
        },
   
  }
    });

}

// Deals with Education state
educationHandler() {
    let schoolName = document.getElementById('school-name').value;
    let majorName = document.getElementById('major-name').value;
    let dateStudy = document.getElementById('date-study').value;
    



    this.setState ({
      education: {
        school_name: schoolName,
        major_name: majorName,
        date: dateStudy,
      },
    });
}

// Function for preview button
preview() {
  let modal = document.getElementById('modal');
  modal.style.overflowY = 'scroll';
  let modal2 = document.getElementById('modal2');
  modal2.style.top = '200px';
  document.body.style.overflow = 'hidden';
  modal.classList.remove('hide');
}





  render() {
    return (
      <div>
        <Header />

        <div>
          <button onClick={this.preview} id='preview'>Preview</button>
        </div>

        <GeneralInfo clickHandler = {this.generalInfoHandler} />

        <Experience clickHandler = {this.experienceHandler}/>

        <Education clickHandler = {this.educationHandler}/>

        <Modal info={this.state} />
      </div>

    
    )
   
  }
}

export default App;
