import React, { useState } from "react";
import Home from "./Home";

const NewPost = ({onSubmission}) => {
    const[newPostForm, setNewPostForm]= useState({title:"", content:"",author:""})
    



;

    function handleOnChange(event){
        event.preventDefault()
        setNewPostForm(newPostForm=>({...newPostForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            onSubmission(newPostForm)
            setNewPostForm({title:"",content:"", author:""} )
           return <Home />
            
        }

return(
    <div>

    <form onSubmit={handleSubmit} className="fm">
    Title:<br></br>
<input onChange={handleOnChange} name="title" value={newPostForm.title} placeholder="Topic" /><br></br>
Username:<br></br>
<input onChange={handleOnChange} name="author" value={newPostForm.author} placeholder="your username" /><br></br>
Content:<br></br>
<textarea  onChange={handleOnChange} name="content" value={newPostForm.content} placeholder="Type the news..." rows={10} /><br></br>
<input type="submit" value="Publish" />

</form>

</div>
)


    }
    export default NewPost;
    