import React, { useState } from 'react';
import '../static/css/GenericHeader.css';
import { CSSTransition } from 'react-transition-group';
import ImageCloud from '../components/ImageCloud';
import ImageDisplayer from './ImageDisplayer';

const duration = 1000;


function GenericHeader(props) {
    const [inProp, setInProp] = useState(false);
    return (
        <>
            <CSSTransition in={inProp} timeout={duration} classNames={"GenHeader"}>
                {state => (
                    <div className="GenHeader">
                        <ImageDisplayer imageId={props.imageId} />
                        <button className="headButton" onClick={() => setInProp(!inProp)}>{props.header}</button>
                    </div>
                )}
            </CSSTransition>
        </>
    )
}

export default GenericHeader;