import React, {Component} from 'react'
import s from './ReactTimer.module.css'

export class ReactTimer extends Component {


    state = {
        count: 0,
        button: false
    }
    startCount = () => {
        let value = this.state.count
        value++
        this.setState({count: value})
    }

    changeButton = () => {
        let status = this.state.button
        this.setState({button: !status})
    }
    resetCount = () => {
        let status = this.state.button
        this.setState({button: !status})
        let value = this.state.count
        value = 0
        this.setState({count: value})
    }

    componentDidUpdate(){
        console.log(this.state.button)
        this.state.button === true ? setTimeout(this.startCount, 1000) :  console.log(this.state.button)
    }

    render() {

        return (
            <div>
                <div className={s.title}>React Timer</div>
                <div className={s.counter}>{this.state.count}</div>
                <div className={s.flexBlocks}>
                    <button onClick={this.changeButton}
                            className={s.buttonCounter}>{this.state.button === false ? 'start' : 'stop'}</button>
                    <button onClick={this.resetCount} className={s.buttonCounter}>reset</button>
                </div>
            </div>
        )
    }
}
