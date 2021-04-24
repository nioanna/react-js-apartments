import React from "react";
import close from './span/close.png'
const List = ({ inApartments,removeInApartment }) => {
  return (
    <>
      {
        inApartments.map((inApartment) => {
        const { id, image, name, price } = inApartment;
        return <article key={id} className="in_apart">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <div style={{display:"contents"}}>
              <p>${price}</p>
              <img src={close} alt="close" onClick={()=>removeInApartment(id)} style={{ float:"right", width:"15px",height:"15px"}}  />
              </div>
              
            </div>
            

          </article>
      })}
    </>
  );
};

export default List;
