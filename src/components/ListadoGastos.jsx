import Gasto from "./Gasto";
import { useState } from "react";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  setFiltro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length ? "Expenses" : "There are not expenses in this category"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              setFiltro={setFiltro}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Expenses" : "There are not expenses yet"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              setFiltro={setFiltro}
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
