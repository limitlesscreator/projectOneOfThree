import './App.css';
import React, {Component} from 'react'
import {Posts} from "./Components/Posts";


export class App extends Component {
    state = {
        posts: [
            {id: 'abc1', name: 'JS Basics'},
            {id: 'abc2', name: 'JS Advanced'},
            {id: 'abc3', name: 'React JS'},
        ],
    };

    removePost = () => {
    console.log('App.jsx setState update')
    }

    deletePost = (id) => {
        let posts = this.state.posts
        console.log(posts)
        let filteredState = posts.filter(post => post.id !== id)
        this.setState({posts: filteredState})
        console.log(filteredState)
    }



    render() {
        const {posts} = this.state

        return (
            <div>
                <Posts posts={posts} cb={this.removePost} deletePost={this.deletePost} />
            </div>
        )
    }
}

