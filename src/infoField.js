import React,{Component} from "react";

class InfoField extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {key,value} = this.props;
        return(
            <div id={key}>
                <span>{key}</span>
                <span>{value}</span>
          </div>
        )
    }
}

export default InfoField;