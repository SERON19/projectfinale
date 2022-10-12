import React, { useState } from "react";
import NewPost from "./NewPost";

const Login = () => {
  const [posts, setPosts] =useState([])
  const [show, setShow] = useState(false);

  function handleClick(){
    
    setShow(show=>!show)
    function handleNewPost(newFormData){
      const serverOptions={
          method:"POST",
          headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
          },
          body:JSON.stringify(newFormData
          )
          }
          fetch('http://localhost:5000/news', serverOptions)
          .then(r=>r.json())
          .then(addedPost=>setPosts(posts=>[...posts, addedPost]))
      }
  }
    return(
        <div className="login">
        <form> 
        
        <label>
          Username:<br></br>
          <input type="text" placeholder="username" />
        </label><br></br>
        <label>
          Pasword:<br></br>
          <input type="text" placeholder="password" />
        </label><br></br>
         
        <button onClick={handleClick}>Submit</button>
         
      </form>
      
      </div>
    )
}
export default Login;