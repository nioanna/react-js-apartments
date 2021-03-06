import React , {useState} from 'react'

function Apartment({id, image, info, price, name, street, removeApartment,addInterestedApartment,contact}) {
    const [readMore,setReadMore] = useState(false);
    return (
        <article className="single-apartment">
    <img src={image} alt={name} />
    <footer>
        <div className="apartment-info">
            <h4>{name}</h4>
            <h4 className="apartment-price">${price}</h4>
        </div>
        <div className="apartment-contact">
        <p>{street}</p>
        <form action="/contact" method="GET">
        <button className="info-btn" onClick={()=> contact(id)}>Contact</button>
        </form>
        </div>

        <p>
        {
            readMore?info:`${info.substring(0,200)}...`
        }
        <button onClick={()=> setReadMore(!readMore)}>
        {readMore?'show less':'read more'}
        </button>

        </p>
        <button className="delete-btn" onClick={()=> removeApartment(id)}>not interested</button>
        <button className="delete-btn" onClick={()=> addInterestedApartment(id)}>interested</button>
    </footer>
        </article>
    )
}

export default Apartment
