import React, {Component} from "react";

export default class PaginaCriador extends Component {
    componentDidMount(){
        window.require('electron').remote.getCurrentWindow().maximize()
        window.location.assign('https://github.com/JsBatista/');
    }
    render(){
        return(
            <div></div>
			);
    }
}