import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { data } from './data';


function App() {
  return (
    <div className="App">
      <Header/>
      {data.map(el =>{
        return <Section key={el.id} 
        titulo={el.titulo} 
        detalle={el.detalle} 
        btn2={el.btn2} 
        btn1={el.btn1} 
        imagen={el.imagen}/>
      })}
    </div>
  );
}

export default App;
