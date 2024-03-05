import React, { useState } from "react";
import { IoArrowUndoCircle } from "react-icons/io5";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

// yha mene saari Images Import ki Hai Assets Componants sai
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';


function Details(){
    const [selectImages,setImages] = useState(0);
    // Esme Mene Apni Saari Image or image ki length Store ki hai
    const [allImages,setAllImages] = useState([image1, image2, image3])

    // Left Button Click Function..
    function LeftSideHandler(){
        if(selectImages > 0){
            setImages(selectImages - 1)
        }else{
            setImages(allImages.length - 1)
        }
    }

    // Right Button Click Function
    function RightSideHandler(){
        if(selectImages < allImages.length-1){
            setImages(selectImages +1)
        }else{
            setImages(0)
        }
    }
    
    return (
        <div>
            
            <div className="ImagesToursdiv">
                <img className="ImagesTours" src={allImages[selectImages]}/>
            </div>

            <div className="ArrowButtons">
                <button onClick={LeftSideHandler}> <IoArrowUndoCircle/> </button>
                <button onClick={RightSideHandler}> <IoArrowRedoCircleSharp/> </button>
            </div>

        </div>
    )
}

export default Details;