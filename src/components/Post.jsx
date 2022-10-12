import React from "react";



function Post({title, content, author}){


    return(
        <div>
     
           <h3>{title}</h3> 
            <p>{content}</p>
            <h4>{author}</h4>

            
        </div>
    )
}

export default Post;