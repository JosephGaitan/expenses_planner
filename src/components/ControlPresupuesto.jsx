import { useState, useEffect } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ 
    gastos,
    setGastos, 
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto 
}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })

    }

    const [porcentaje, setProcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    const handleResetApp = () => {
        const confirmar = confirm('Do you really wish to delete the budget and all the expenses registered?')

        if(confirm) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    } 


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
        
        const totalDisponible = presupuesto - totalGastado;

        const nuevoPorcentaje = ((( presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);

        

        setGastado(totalGastado);
        setDisponible(totalDisponible);

        setTimeout(() => {
            setProcentaje(nuevoPorcentaje) 
        }, 1000);

    }, [gastos]) 

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor : porcentaje >= 100 ? '#DC2626' : '#3B82F6' ^ porcentaje >= 70 ? '#FE9001' : '#3B82F6' ,
                        trailColor : '#F5F5F5',
                        textColor: porcentaje >= 100 ? '#DC2626' : '#3B82F6' ^ porcentaje >= 70 ? '#FE9001' : '#3B82F6' ,
                        
                    })}
                    value={porcentaje}
                    text=  {`${porcentaje}% spent`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type='button'
                    onClick={handleResetApp}
                >
                    Click here to delete all expenses
                </button>
                <p>
                    <span> 
                        Budget: 
                    </span>
                    {" "}
                    {formatearCantidad(presupuesto)}
                </p>

                <p className={`${disponible <=0 ? 'negativo' : '' ^ porcentaje >= 70 && porcentaje < 100 ? 'critico' : '' }`}>
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