import { useState } from "react";
import axios from "axios";

function PictureUpload(){

    const [image,setImage] = useState();
    
    function onImageUpload(){
        setImage();
    }

    return <form>
    <input type="file" name="profilepic" accept="image/*"></input>
    <input type="submit" value="Upload" onClick={onImageUpload}></input>
  </form>
}

export default PictureUpload;