import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";

function App(){

    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Título 1', subtitle: 'Subtitulo 1', likes: 102, read: false },
        { id: Math.random(), title: 'Título 2', subtitle: 'Subtitulo 2', likes: 1653, read: true },
        { id: Math.random(), title: 'Título 3', subtitle: 'Subtitulo 3', likes: 50, read: false }
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(), 
                title: `Título ${posts.length + 1}`, 
                subtitle: `Subtitulo ${posts.length + 1}`, 
                likes: 50 
            },
        ]);
    };

    function handleRemovePost(postId){
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
    };
    
    function handleReadPost(postId){
        setPosts((prevState) => (prevState.map(post => (
            post.id === postId ? {...post, read: true} : post
        ))))
    };

    return(
        <>
            <Header>
                <h2> 
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post 
                    onRead={handleReadPost}
                    onRemove={handleRemovePost}
                    key={post.title}
                    post={post}
                />
            ))}
        </>
    )
}

export default App;