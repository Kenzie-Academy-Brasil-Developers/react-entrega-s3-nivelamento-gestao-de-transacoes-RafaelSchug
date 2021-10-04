import { useState } from "react";

const FormControl = ({transactions, setTransactions}) => {


    const [type, setType] = useState('entrada');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('form')
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <select onChange={(e) => setType(e.target.value)}>
                    <option defaultValue value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
                <input type="text" placeholder='Nome' />
                <input type="number" placeholder='Quantidade'/>
                <input type="input" placeholder='Valor' />
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default FormControl;