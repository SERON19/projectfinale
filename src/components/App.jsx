import React from "react";
import PostsContainer from "./PostsContainer";
import NavBar from "./NavBar";

import { Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";



 
const App = ({post, onDeletePost}) => {

 return(
<div>
<NavBar />
<Routes>
      <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
          
        
         
        <Route  path="/"element={< Home />} />
         
        </Routes>


         
         
       

<PostsContainer />

        </div>



 )
 }
 export default App;