import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";

function App(){

    const [posts, setPost] = useState([
        { id: Math.random(), title: 'Título 1', subtitle: 'Subtitulo 1', likes: 102 },
        { id: Math.random(), title: 'Título 2', subtitle: 'Subtitulo 2', likes: 1653 },
        { id: Math.random(), title: 'Título 3', subtitle: 'Subtitulo 3', likes: 50 }
    ]);

    function handleRefresh() {
        setPost((prevState) => [
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
        setPost((prevState) => (
            prevState.filter(post => post.id === postId)
        ));
    }

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
                    onRemove={handleRemovePost}
                    key={post.title}
                    likes={post.likes}
                    post={{
                        id: post.id,
                        title: post.title,
                        subtitle: post.subtitle
                    }}
                />
            ))}
        </>
    )
}

export default App;