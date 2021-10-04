const DisplayEntradaFrutas = ({transactions}) => {
    return (
        <div>
            <h3>Entradas de Frutas:</h3>
            <ul>
            {transactions.filter(item => item.quantity > 0).map(({name, price, quantity}, index)=> {
                return (
                    <li key={index}>Nome: {name}, Qtd: {quantity}, Valor: {price}</li>
                )
            })}           
        </ul>
        </div>
    )
}

export default DisplayEntradaFrutas;