import { useRef } from 'react';
import './App.css';
import img0 from './images/rey_ataulfo.png'
import img1 from './images/rey_ervigio.png'

function App() {
  
  const changeCoin = 266;
  const refBox = useRef();

  // Funciones NORMALES
  /* 
  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML)+1;
    //e.target.style.backgroundColor='green';
  };
  
  function convert() {
    refBox.current.innerHTML=Number(refBox.current.innerHTML)*changeCoin;
  }

  function change(e) {
    e.target.src=img1;
  }

  function read(e) {
    refBox.current.innerHTML=e.target.value; 
  }
  */

  // Funcion FLECHA

  const incrementar =(e) => {
    e.target.innerHTML = Number(e.target.innerHTML)+1;
    //e.target.style.backgroundColor='green';
  };
  
  const convert = () => {
    refBox.current.innerHTML=Number(refBox.current.innerHTML)*changeCoin;
  }

  // se utiliza el metodo "includes() *Sirve para buscar un nombre de referencia sobre la imagen que se encuentra en ese momento"
  const change = (e) => {
    if(e.target.src.includes('ataulfo')){
      e.target.src=img1;
    }else {
      e.target.src=img0
    }
  }

  const read = (e) => {
    refBox.current.innerHTML=e.target.value; 
  }

  return (
      <>
        <div ref={refBox} className='box' onClick={incrementar}>1</div>
        <button onClick={convert} >Accept</button>
        <div>
          <img onClick={change} src={img0} />
        </div>
        <input onChange={read} className='field'/>

      </>
  );
}

export default App;
