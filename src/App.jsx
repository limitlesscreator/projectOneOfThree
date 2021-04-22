import './App.css';
import React, {Component} from 'react'
import {Posts} from "./Components/Posts";
import {Form} from "./Components/Form";
import {MyForm} from "./Components/MyForm";


export class App extends Component {

    render() {


        return (
            <div>
                <MyForm/>
            </div>
        )
    }
}

