import React,{Component} from "react";

class Field extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {change,id,section,value} = this.props;
        let type="text";
        if(id==="courseStartDate" || id==="toDate" || id==="fromDate"){
            type="date";
        }
        else if(id==="email"){
            type="email";
        }
        else if(id==="phone"){
            type="number";
        }
        return(
            <div>
                <label htmlFor={id}>{id}</label>
                <input 
                onChange={change({section},{id})}
                value={value}
                type={type}
                id={id}
                />
            </div>
        )
    }
}

export default Field;