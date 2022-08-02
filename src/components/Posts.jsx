import { useState } from "react";
import Button from "./Button";

 function getData(){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then(res =>{
        return res.json();
      })
}


export default function Posts(){

    const [posts,setPosts] = useState([]);

    const handleFetchData = async () =>{
        try{
            const data = await getData();
            setPosts(data);
        }
         catch(err){
           console.timeLog(err);
         }
    }


    return(
        <div>
            <h3>Posts</h3>
            <button onClick={handleFetchData}>GET POSTS</button>
            <div>
                <ul>
                    {posts.map((post) =>{
                        return(
                            <li>{post.title}</li>
                        )
                       
                    })}
                </ul>
            </div>
        </div>
    )
    
}