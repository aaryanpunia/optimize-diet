import React from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";

function ImageCloud(props) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "aaryanpuns"
        }
    });

    const myImage = cld.image(props.dataId)

    myImage.resize(fill().width(props.width).height(props.height));

    return (
        <div className="ImageContainer">
            <AdvancedImage cldImg={myImage} />
        </div>
    )

}

export default ImageCloud;