const DisplayEntradaFrutas = ({transactions}) => {
    return (
        <div>
            <h3>Entrada de Frutas:</h3>
           <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>          
            <tbody>
                {transactions.filter(item => item.quantity > 0).map(({name, price, quantity}, index)=> {
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>$ {price}</td>
                        </tr>
                    )
                })} 
            </tbody>
            </table>
        </div>
    )
}

export default DisplayEntradaFrutas;