import React, {Component} from 'react'


export class MyForm extends Component {

    state = {
        email: '',
        subscription: false,
    }

    // validateEmail = () => {
    //     if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
    //         alert('email is not valid')
    //     }
    // }
    handleCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = () => {
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
        const isValidCheckBox = this.state.subscription;
        if (!isValidEmail) {
            alert('plese check your email')
            return;
        }
         else if(!isValidCheckBox){
            alert('you should accept all terms and conditions')
            return;
        }
        this.setState({email: '',subscription: false})
        alert('thank you for subscription!')


    }
    render()
    {
        const {email, subscription} = this.state

        return (
            <div>
                <div><input type="email" placeholder={'email'} name={'email'} value={email}
                            onChange={this.handleChange} onBlur={this.validateEmail}/></div>
                <br/>
                <div><input type="checkbox" name={'subscription'} checked={subscription}
                            onChange={this.handleCheckbox}/>I agreew with terms and conditions
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        )
    }

}

