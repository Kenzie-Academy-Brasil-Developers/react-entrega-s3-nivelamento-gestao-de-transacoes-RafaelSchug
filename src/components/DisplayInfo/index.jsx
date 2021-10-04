const DisplayInfo = ({transactions}) => {

    const qtdTotalFrutasVendidas = transactions.reduce((acc, item)=> item.quantity < 0 ? acc + item.quantity * -1 : acc, 0);
    const qtdTotalEntradaFrutas = transactions.reduce((acc, item)=> item.quantity > 0 ? acc + item.quantity : acc, 0);
    const valorTotalSaidas = transactions.reduce((acc, item) => item.quantity < 0 ? acc + (item.price * (item.quantity * -1)) : acc, 0);

    return (
        <div>
            <h3>Todas as movimentações:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                    </tr>
                </thead>    
                <tbody>
                    {transactions.map(({name, price, quantity}, index) => {
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{quantity < 0 ? quantity * -1 : quantity}</td>
                                <td>{quantity < 0 ? "Saída" : "Entrada"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>    
        
            <ul>
                <li>Quantidade total de frutas vendidas: {qtdTotalFrutasVendidas}</li>
                <li>Quantitade total de entrada de frutas: {qtdTotalEntradaFrutas}</li>
                <li>Valor total de saída: $ {valorTotalSaidas}</li>
            </ul>
        </div>
        
    )
}

export default DisplayInfo;