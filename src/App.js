import React, {useState} from 'react';
import Apartments from './Apartments';
import Interested from './Interested';
import Categories from './Categories';
import data from './data';
const allCategories = ['all',...new Set(data.map((one)=> one.category))];

function App() {
  const[apartments, setApartments] = useState(data);
  const[inApartments, setInApartments] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category=='all') {
      setApartments(data);
      return;
    }
    const newItems = data.filter((one) => one.category===category);
    setApartments(newItems);
  }

  const removeApartment = (id) => {
    const newApartments = apartments.filter((apartment) => apartment.id != id);
    setApartments(newApartments);
  };
  const removeAllIn = () => {
    setInApartments([]);
  };
  const addInterestedApartment = (id) => {
    if(inApartments.filter((inA)=>inA.id == id).length >0) {
      console.log("error");
      return;
    } 
    const inApart = apartments.filter((apartment) => apartment.id == id)[0];
    setInApartments(inApartments => [...inApartments, inApart]);
  };
  const removeInApartment = (id) => {
    const newInApart = inApartments.filter((inAp) => inAp.id != id);
    setInApartments(newInApart);
  }
  if(apartments.length == 0) {
    return (
      <main>
      <div className="title">
            <h2> No Apamtments left</h2>
            <div className="underline"></div>
            <Categories categories={categories} filterItems={filterItems} />
            <button className="btn" onClick={()=> setApartments(data)}>Refresh</button>
        </div>
        <div>
    <Interested inApartments={inApartments} removeAllIn={removeAllIn} removeInApartment={removeInApartment}/>
    </div>
        </main>

    );
  }
  return (<main>
  <section className="menu section">
  <div className="title">
            <h2> Our Apamtments</h2>
            <div className="underline"></div>
        </div>
    <Categories categories={categories} filterItems={filterItems} />
    <Apartments apartments={apartments} removeApartment={removeApartment} addInterestedApartment={addInterestedApartment} />
    </section>
    <div>
    <Interested inApartments={inApartments} removeAllIn={removeAllIn} removeInApartment={removeInApartment}/>
    </div>

  </main>);
}

export default App;
