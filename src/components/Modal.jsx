import { useState, useEffect } from "react"
import CerrarBtn from "../img/cerrar.svg"
import Mensaje from "./Mensaje"


const Modal = ({ 
    setModal,
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar, 
    setGastoEditar
}) => {



    const [nombre,setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')
  

    useEffect( () => {
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    }, [] )

    const ocultarModal = () => {
        setGastoEditar({})
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('')) {
            setMensaje('All the fields are mandatory')
            
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }


    return (
        <div className="modal ">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn}
                    alt='close'
                    onClick={ocultarModal}
                />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                
                {mensaje && <Mensaje tipo="error">
                                {mensaje}
                            </Mensaje>}

                <legend>
                    {gastoEditar.nombre ? 'Editing Expense' : 'New Expense'}
                </legend>
                <div className="campo">
                    <label htmlFor="nombre">
                        Expense Name:
                    </label>
                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Add the name of the expense"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">
                        Amount:
                    </label>
                    <input 
                        id="cantidad"
                        type="number"
                        placeholder="Add the amount to be spent. E.g: 300$"
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>
                
                <div className="campo">
                    <label htmlFor="categoria">
                        Category
                    </label>
                    <select 
                        id="categoria" value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">--Select a category-- </option>
                        <option value="savings">Savings </option>
                        <option value="food">Food </option>
                        <option value="home">Home </option>
                        <option value="other">Other Expenses</option>
                        <option value="leisure">Leisure </option>
                        <option value="health">Health </option>
                        <option value="subscriptions">Subscriptions </option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value={gastoEditar.nombre ? 'Save Changes' : 'Add a new expense'}
                />
            </form>

        </div>
    )
}

export default Modal