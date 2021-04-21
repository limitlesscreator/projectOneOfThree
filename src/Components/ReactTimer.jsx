import React, {Component} from 'react'
import s from './ReactTimer.module.css'

export class ReactTimer extends Component {

    state = {
        count: 0,
        isCounting: false
    }


    componentDidMount() {
        const userCount  = localStorage.getItem('timer')
        if (userCount) {
            this.setState({count: +userCount})
        }
    }
    componentDidUpdate() {
        localStorage.setItem('timer', this.state.count)
    }
    componentWillUnmount() {
        clearInterval(this.counterId)
    }

    handleStart = () => {
        this.setState({isCounting: true})
        this.counterId = setInterval( () => {this.setState({count: this.state.count + 1})},1000)
    }

    handleStop = () => {
        this.setState({isCounting: false})
        clearInterval(this.counterId)
    }

    handleReset = () => {
        this.setState({isCounting: false, count: 0})
        clearInterval(this.counterId)
    }

    render() {

        return (
            <div>
                <div className={s.title}>React Timer</div>
                <div className={s.counter}>{this.state.count}</div>
                <div className={s.flexBlocks}>
                    {!this.state.isCounting ? (
                        <button onClick={this.handleStart} className={s.buttonCounter}>start</button>) : (
                        <button onClick={this.handleStop} className={s.buttonCounter}>stop</button>
                    )}
                    <button onClick={this.handleReset} className={s.buttonCounter}>reset</button>


                </div>

            </div>
        )
    }
}
