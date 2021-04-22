import React, {Component} from 'react'


export class MyForm extends Component {

    constructor() {
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.firstNameRef = React.createRef();
        this.secondNameRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.firstNameRef)
        this.firstNameRef.current.focus();
    }


    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            if (this.state.card.length === 16){
                this.secondNameRef.current.focus();
            }
        })
    }

    render() {
        const {card, email} = this.state

        return (
            <div>
                <div><input type="text"
                            placeholder={'card'}
                            name={'card'}
                            value={card}
                            onChange={this.handleChange}
                            ref={this.firstNameRef}
                />
                </div>
                <br/>
                <div><input value={email}
                            type='email'
                            placeholder={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            ref={this.secondNameRef}
                />
                </div>
            </div>
        )
    }

}
