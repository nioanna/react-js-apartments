import React from 'react';
import List from './List';
const Interested = ({inApartments,removeAllIn,removeInApartment}) => {
    return (
        <section className="interested">
            <h3> {inApartments.length} apartments interested</h3>
            <List inApartments={inApartments} removeInApartment={removeInApartment} />
            <button onClick={()=> removeAllIn()}>
                Clear All
            </button>
        </section>
    )
}

export default Interested
