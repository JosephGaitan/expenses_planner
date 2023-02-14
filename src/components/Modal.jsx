import { useState } from "react"
import CerrarBtn from "../img/cerrar.svg"
import Mensaje from "./Mensaje"


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [nombre,setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')


    const ocultarModal = () => {
        
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

        guardarGasto({nombre, cantidad, categoria})
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
                    New Expense
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
                        <option value="Savings">Savings </option>
                        <option value="Food">Food </option>
                        <option value="Home">Home </option>
                        <option value="Other">Other Expenses</option>
                        <option value="Leisure">Leisure </option>
                        <option value="Health">Health </option>
                        <option value="Subscriptions">Subscriptions </option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value="Add an expense"
                />
            </form>

        </div>
    )
}

export default Modal