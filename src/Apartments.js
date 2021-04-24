import React from 'react';
import Apartment from './Apartment';

const Apartments = ({apartments,removeApartment,addInterestedApartment}) => {
    return <section>
        <div>
            {apartments.map((apartment)=> {
                return <Apartment key={apartment.id} removeApartment={removeApartment} addInterestedApartment={addInterestedApartment} {...apartment}></Apartment>
            })}
        </div>
    </section>
}
export default Apartments;