import './App.css';
import {useState} from 'react';
import DisplaySaidaFrutas from './components/DisplaySaidaFrutas';
import DisplayEntradaFrutas from './components/DisplayEntradaFrutas';
import FormControl from './components/FormControl';
import DisplayInfo from './components/DisplayInfo';
import DisplayControl from './components/DisplayControl';

function App() {

  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])

  const [display, setDisplay] = useState('entradas');

  return (
    <div className="App">
      <header className="App-header">
        <FormControl transactions={transactions} setTransactions={setTransactions}></FormControl>
        <DisplayControl display={display} setDisplay={setDisplay}></DisplayControl>
        {display === 'saídas' && <DisplaySaidaFrutas transactions={transactions}></DisplaySaidaFrutas>}
        {display === 'entradas' && <DisplayEntradaFrutas transactions={transactions}></DisplayEntradaFrutas>}
        <DisplayInfo transactions={transactions}></DisplayInfo>
      </header>
    </div>
  );
}

export default App;
