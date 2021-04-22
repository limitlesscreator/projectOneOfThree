import React from "react";

export class UncontrolledForm extends React.Component {

    constructor() {
        super();

        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.cardRef.current.value.length < 16){
            alert('invalid card number');
            return;
        }

        this.cardRef.current.value = ''
        this.emailRef.current.value = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div><input type="text"
                                placeholder={'card'}
                                name={'card'}
                                ref={this.cardRef}
                    />
                    </div>
                    <br/>
                    <div><input ref={this.emailRef}
                                type='email'
                                placeholder={'email'}
                                name={'email'}

                    />
                    </div>
                </div>
                <button>Send</button>
            </form>

        )
    }
}
