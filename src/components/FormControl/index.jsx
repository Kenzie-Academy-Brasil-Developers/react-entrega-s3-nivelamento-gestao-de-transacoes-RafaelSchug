import { useEffect, useState } from "react";
import './style.css';

const FormControl = ({transactions, setTransactions}) => {


    const [type, setType] = useState('entrada');
    const [input, setInput] = useState({name:'', price:'', quantity:''});
    const [error, setError] = useState(false);

    const handleSubmitForm = (event) => {

        event.preventDefault();

        const checkInputFields = Object.values(input).every(item => item !== '' && item !== 0);

        if(checkInputFields){
            
            if(type === 'entrada'){
                setTransactions([...transactions, input])
            } else {
                setTransactions([...transactions, {...input, quantity: input.quantity * -1}])
            }
            
            setInput({name:'', price:'', quantity:''})

        } else {
            setError(true);
        }
    }

    useEffect(() => {
        const checkInputFields = Object.values(input).every(item => item !== '' && item !== 0);

        if(error && checkInputFields){
            setError(false);
        }
        
    }, [input, error])

    return (
        <div className='form__container'>
            <h3>Controle de entrada/saída</h3>
            <form onSubmit={handleSubmitForm}>
                {error && <span>Preencha todos os campos<br/>Quantidade/Valor precisam ser maiores que 0</span>}
                <div>
                    <label htmlFor="">Tipo:</label>
                    <select onChange={(e) => setType(e.target.value)}>
                        <option defaultValue value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder='Nome' onChange={e => setInput({...input, name: e.target.value})} value={input.name}/>
                </div>
               <div>
                   <label htmlFor="">Quantidade</label>
                   <input type="number" placeholder='Quantidade' onChange={e => setInput({...input, quantity: Number(e.target.value)})} value={input.quantity}/>
               </div>
                <div>
                    <label htmlFor="">Valor</label>
                    <input type="input" placeholder='Valor' onChange={e => setInput({...input, price: Number(e.target.value)})} value={input.price}/>
                </div>
                <div>
                    <button type='submit'>Adicionar</button>
                </div>
            </form>
        </div>
    )
}

export default FormControl;