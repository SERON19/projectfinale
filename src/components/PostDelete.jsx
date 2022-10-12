import React from "react";


function PostDelete({posts, onDeleteClick}) {
    let id = 0;

    function handleDeleteClick() {

        id--;
        onDeleteClick(id);
      }
  return (
    <div className="dlt">
        <button  onClick={handleDeleteClick} > Delete</button>
      </div>
  )
}

export default PostDelete;