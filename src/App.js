import React from "react";

import Post from "./Post";
import Header from "./Header";

function App(){
    return(
        <>
            <Header>
                <h2> Posts da semana</h2>
            </Header>

            <hr />

            <Post 
                likes = {20}
                post = {{
                    title: "Post 1",
                    subtitle: "Sub 1"
                }}
            />
            <Post 
                likes = {156}
                post = {{
                    title: "Post 2",
                    subtitle: "Sub 2"
                }}
            />
            <Post 
                likes = {50}
                post = {{
                    title: "Post 3",
                    subtitle: "Sub 3"
                }}
            />
        </>
    )
}

export default App;