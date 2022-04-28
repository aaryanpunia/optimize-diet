import React from 'react';
import { useParams } from 'react-router-dom';
import dummyData from '../test/RestaurantTest.json';
import GenericHeader from '../components/GenericHeader';
import '../static/css/Restaurant.css';
import MenuCard from '../components/MenuCard';

function Restaurant(props) {
    let { id } = useParams();
    return (
        <>
            <GenericHeader header={dummyData['name']} imageId={dummyData["public_img_id"]} />
            <div className="restaurant-menu">
                <div className="restaurant-scroll">
                    {dummyData['menu'].map(item => (
                        <MenuCard item={item}></MenuCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Restaurant;