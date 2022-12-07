import React from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

export default function App() {
  //llamamos los componentes en App para poder visualizarlo
  //app le pasa una prop greeting a ItemListContainer
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  );
}

