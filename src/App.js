import './App.css';
import {useState} from 'react';
import DisplaySaidaFrutas from './components/DisplaySaidaFrutas';
import DisplayEntradaFrutas from './components/DisplayEntradaFrutas';
import FormControl from './components/FormControl';
import DisplayInfo from './components/DisplayInfo';

function App() {

  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])

  return (
    <div className="App">
      <header className="App-header">
        <DisplaySaidaFrutas></DisplaySaidaFrutas>
        <DisplayEntradaFrutas></DisplayEntradaFrutas>
        <FormControl transactions={transactions} setTransactions={setTransactions}></FormControl>
        <DisplayInfo transactions={transactions}></DisplayInfo>
      </header>
    </div>
  );
}

export default App;
