import React from 'react';
import "../static/css/GenericResult.css";
import GenericCard from '../components/GenericCard';
import RestaurantCard from '../components/RestaurantCard';
import dummyData from "../test/ClientTest.json"

function GenericResult(props) {
    return (
        <div className="ResultContainer">
            {dummyData.restaurants.map((d) => (
                <GenericCard text={<RestaurantCard name={d.name} avg_kcal={d.kcal_avg} avg_price={d.price_avg} />} style={{ width: '21em' }} />
            ))}
        </div>
    );
}

export default GenericResult;