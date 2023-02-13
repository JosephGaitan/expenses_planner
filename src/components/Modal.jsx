import CerrarBtn from "../img/cerrar.svg"

const Modal = ({ setModal, animarModal }) => {

    const ocultarModal = () => {
        setModal(false)
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

            <form className={`formulario ${animarModal ? 'animar' : ''}`}>
                <legend>
                    New Expense
                </legend>
            </form>

        </div>
    )
}

export default Modal