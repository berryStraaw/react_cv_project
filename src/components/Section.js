import React,{Component} from "react";
import uniqid from "uniqid";
import Field from "./Field";


class Section extends Component{
    constructor(props){
        super(props);
    }
      
    renderFields(){
        const {section,change,state} = this.props
        let fieldArr=[];
        Object.entries(state).forEach(([key,value])=>{
            fieldArr.push(<Field change={change} id={key} section={section} value={value}/>);
        })
        return fieldArr;
    }
    render(){
        //const {section,change,state} = this.props
        return(
            //Section receiving state, change
            //Field<change,id,section,value>
            <div>
              {this.renderFields()}  
            </div>
            
        )
    }
}

export default Section;