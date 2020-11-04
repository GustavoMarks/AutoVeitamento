import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class NewWindow extends Component {

    openNewWindow = ()=>{
        window.open("/cadastroAluno", '_blank');
    }

    render(){
        return(
            <div>
                <h1>{this.props.location.state.testando}</h1>
            </div>
        );
    }
}

export default withRouter(NewWindow);