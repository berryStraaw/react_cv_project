//import './App.css';
import React, { Component } from "react";
import Section from "./components/Section";
import InfoField from "./infoField";
//import uniqid from "uniqid";


class App extends Component {
  constructor(){
    super();

    //states
    this.state={
      personalDetails:{
        name:"",
        email:"",
        phone:"",
      },
      educationDetails:{
        schoolName:"",
        courseTitle:"",
        courseStartDate:"",
      },
      experienceDetails:{
        companyName:"",
        positionTitle:"",
        tasks:"",
        fromDate:"",
        toDate:"",
      },
      edit:true
    }
  }


  handleChange = (section,field)=>(e) => {
    this.setState({
      [section.section] : {
        ...this.state[section.section],
        [field.id]: e.target.value,
      },
    });
  };


  onSubmitTask=(e)=>{
    e.preventDefault();
    if(this.state.edit){
      this.setState({
        edit:false
      })
    }
    else{
      this.setState({
        edit:true
      })
    }
  };

  renderSections(){
    let sectionsArr=[];
    Object.entries(this.state).forEach(([key,value])=>{
      if(key!=='edit'){
      sectionsArr.push(<Section section={key} change={this.handleChange} state={value}/>);
      }
    })
    return sectionsArr;
  }

  displayInfo(){
    let infoArr=[];
    Object.entries(this.state).forEach(([key,value])=>{
      if(key!=='edit'){
        Object.entries(this.state[key]).forEach(([key1,value1])=>{
          infoArr.push(<InfoField key={key1} value={value1}/>)
      })
      }
    })
    return infoArr;
  }
  checkMode(){
    if(this.state.edit){
      return (
        <div className="edit">
          <form onSubmit={this.onSubmitTask}>
            {this.renderSections()}  
            <button type="submit">
              Add details
            </button>
          </form>
  
        </div>
      );
    }

    else{
      return (
        <div className="view">
            {this.displayInfo()}
            <button onClick={this.onSubmitTask}>
              Edit
            </button>
        </div>
      );
    }
  }

  render(){
    let display;
    display=this.checkMode();

    return (
      <div className="App">
          {display}  
      </div>
    );
  }
}

export default App;
