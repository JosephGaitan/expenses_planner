import { useState, useEffect } from "react"

const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })

    }

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
        console.log('totalGastado')
    }, [gastos]) 

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Graphic here</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span> 
                        Budget: 
                    </span>
                    {" "}
                    {formatearCantidad(presupuesto)}
                </p>

                <p>
                    <span> 
                        Available:
                    </span>
                    {" "}
                    {formatearCantidad(disponible)}
                </p>

                <p>
                    <span> 
                        SPENT:  
                    </span>
                    {" "}
                    {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto