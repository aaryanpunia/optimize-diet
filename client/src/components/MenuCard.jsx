import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "../static/css/MenuCard.css";


function MenuCard(props) {
    const duration = 1000;
    const [inProp, setInProp] = useState(false);
    return (
        <CSSTransition in={inProp} timeout={duration} classNames={"gen-menu-item"}>
            <div className="gen-menu-item" onMouseDown={() => setInProp(!inProp)}>
                <span className="item-name">{props.item.name}</span>
                <div className="item-nutrition">
                    {props.item.nutrition.items.map((item) => (
                        <div className="nutrition-container">
                            <span>{item.calories}</span>
                            <span>{item.protein_g}</span>
                        </div>
                    ))}
                </div>
            </div>
        </CSSTransition>
    )
}

export default MenuCard;