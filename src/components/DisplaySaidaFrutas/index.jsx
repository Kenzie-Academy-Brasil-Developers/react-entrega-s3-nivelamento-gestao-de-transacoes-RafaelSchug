const DisplaySaidaFrutas = ({transactions}) => {
    return (
        <div>
            <h3>Saída de Frutas:</h3>
            <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>          
            <tbody>
                {transactions.filter(item => item.quantity < 0).map(({name, price, quantity}, index)=> {
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{quantity * -1}</td>
                            <td>$ {price}</td>
                        </tr>
                    )
                })} 
            </tbody>
            </table>
        </div>
    )
}

export default DisplaySaidaFrutas;