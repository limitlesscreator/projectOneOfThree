import React, {Component} from 'react'

export function Post(props){
    const {name, cb,deletePost, id} = props;

    return(
        <div>
            <h2 onClick={cb}>{name}
            <button onClick={() => {deletePost(id)}}>delete</button>
            </h2>
        </div>
    )
}