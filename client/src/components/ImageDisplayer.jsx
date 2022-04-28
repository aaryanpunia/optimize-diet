import React, { useState } from 'react';
import ImageCloud from './ImageCloud';
import "../static/css/ImageDisplayer.css";

function ImageDisplayer(props) {
    let images = props.imageId;
    const [count, incr] = useState(0);
    const [image, setImage] = useState(images[count]);
    return (
        <button className="Img-Display" onClick={() => {
            incr((count + 1) % images.length);
            setImage(images[count]);
        }}>
            <ImageCloud dataId={image} height={200} width={200} />
        </button>
    )
}

export default ImageDisplayer;