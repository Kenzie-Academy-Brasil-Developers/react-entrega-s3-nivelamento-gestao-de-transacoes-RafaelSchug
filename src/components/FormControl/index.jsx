import { useState } from "react";

const FormControl = ({transactions, setTransactions}) => {


    const [type, setType] = useState('entrada');
    const [input, setInput] = useState({name:'', price:'', quantity:''});

    const handleSubmitForm = (event) => {

        event.preventDefault();

        if(type === 'entrada'){
            setTransactions([...transactions, input])
        } else {
            setTransactions([...transactions, {...input, quantity: input.quantity * -1}])
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <select onChange={(e) => setType(e.target.value)}>
                    <option defaultValue value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
                <input type="text" placeholder='Nome' onChange={e => setInput({...input, name: e.target.value})} value={input.name}/>
                <input type="number" placeholder='Quantidade' onChange={e => setInput({...input, quantity: Number(e.target.value)})} value={input.quantity}/>
                <input type="input" placeholder='Valor' onChange={e => setInput({...input, price: Number(e.target.value)})} value={input.price}/>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default FormControl;