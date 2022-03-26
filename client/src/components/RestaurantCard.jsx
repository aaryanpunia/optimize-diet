import React from 'react';
import "../static/css/RestaurantCard.css";


function RestaurantCard(props) {
    var price_emj = <h1>💰</h1>
    var kcal_emj = <h1>😋</h1>
    const { name, avg_price, avg_kcal } = props;
    if (avg_price > 0 && avg_price < 10) {
        price_emj = '💰'
    } else if (avg_price >= 10 && avg_price < 20) {
        price_emj = '💰 💰'
    } else {
        price_emj = '💰 💰 💰'
    }
    if (avg_kcal > 0 && avg_kcal < 600) {
        kcal_emj = '😋'
    } else if (avg_kcal >= 600 && avg_kcal < 1000) {
        kcal_emj = '😋 😋'
    } else {
        kcal_emj = '😋 😋 😋'
    }

    return (
        <div className="restContainer">
            <span className="restName">{name}</span>
            <span className="restKcal">{avg_kcal + " kcal  "}{kcal_emj}</span>
            <span className="restPrice">{"$" + avg_price + "  "}{price_emj}</span>
        </div>
    );
}

export default RestaurantCard;