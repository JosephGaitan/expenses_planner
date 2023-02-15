import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    
    if (!presupuesto || presupuesto < 0) {
      setMensaje("That is not a valid Budget");

      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
    
  };

  //contenedor-presupuesto contenedor sombra
  return (
    <div className="contenedor-presupuesto contendor contenedorEDIT sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Define your budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Please add your budget"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input value="ADD" type="submit" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
