import './App.css';
import img0 from './images/rey_ataulfo.png'
import img1 from './images/rey_ervigio.png'

function App() {
  
  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML)+1;
    e.target.style.backgroundColor='green';
  };
  
  return (
      <>
        <div className='box' onClick={incrementar}>1</div>
        <button >Accept</button>
        <div>
          <img src={img0} />
        </div>
        <input className='field'/>

      </>
  );
}

export default App;
