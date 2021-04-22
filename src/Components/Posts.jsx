import React, {Component} from 'react'
import {Post} from './Post'


export function Posts(props) {

    const {cb, deletePost} = props

    return (
        <div>
            {
                props.posts.map(post => (
                    <Post key={post.id} name={post.name} cb={cb} deletePost={deletePost} id={post.id}/>))
            }
        </div>
    )
}

