const DisplayInfo = ({transactions}) => {
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
                            <tr>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{quantity < 0 ? quantity * -1 : quantity}</td>
                                <td>{quantity < 0 ? "Saída" : "Entrada"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>    
        
        </div>
        
    )
}

export default DisplayInfo;