import Gasto from "./Gasto"

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
    return(
        <div className="listado-gastos contenedor">
            <h2>
                {gastos.length ? 'Expenses' : 'There are not expenses yet'}
            </h2>

            {gastos.map( gasto => (
                <Gasto 
                eliminarGasto={eliminarGasto}
                setGastoEditar={setGastoEditar}
                key={gasto.id}
                gasto={gasto}
                />
            ))}
        
        </div>
    )
}

export default ListadoGastos