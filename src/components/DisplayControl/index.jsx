const DisplayControl = ({display, setDisplay}) => {

    const changeDisplay = (str) => {
        setDisplay(str);
    }

    return (
        <div>
           {display === 'entradas' &&  <button onClick={() => changeDisplay('saídas')}>Exibir Saídas</button>}
           {display === 'saídas' &&  <button onClick={() => changeDisplay('entradas')}>Exibir Entradas</button>}
        </div>
    )
}

export default DisplayControl;