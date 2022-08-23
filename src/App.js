import React from "react";

import Post from "./Post";
import Header from "./Header";

const posts = [
    { title: 'Título 1', subtitle: 'Subtitulo 1', likes: 102 },
    { title: 'Título 2', subtitle: 'Subtitulo 2', likes: 1653 },
    { title: 'Título 3', subtitle: 'Subtitulo 3', likes: 102355 }
];

function App(){
    function handleRefresh() {
        console.log('Clicou');
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
                    key={post.title}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle
                    }}
                />
            ))}
        </>
    )
}

export default App;