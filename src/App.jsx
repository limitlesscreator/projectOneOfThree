import './App.css';
import React, {Component} from 'react'

class App extends Component {

    state = {
        count: 0,
        posts: [],
        loading: true,
        comments: [],
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    componentDidMount() {
        console.log('componentDidMount ')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data, loading: false}))

        this.timerId = setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(data => this.setState({comments: data}))
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')

    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerId)
    }


    render() {
        console.log('render', this.state.count)
        return (
            <div>
                {/*<div style={{width: '300px', margin: '200px auto'}}>*/}
                {/*    <button onClick={this.handleClick}>+</button>*/}
                {/*    <span style={{margin: '0px 10px', fontSize: "50px"}}>{this.state.count}</span>*/}
                {/*    <button onClick={this.decrement}>-</button>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                <div>
                    {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} was loaded</h3>}
                </div>
            </div>
        );
    }
}

export default App;
