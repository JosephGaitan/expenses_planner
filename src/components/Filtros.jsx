import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter by category</label>
          <select 
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          
          >
            <option value="">--All the categories-- </option>
            <option value="savings">Savings </option>
            <option value="food">Food </option>
            <option value="home">Home </option>
            <option value="other">Other Expenses</option>
            <option value="leisure">Leisure </option>
            <option value="health">Health </option>
            <option value="subscriptions">Subscriptions </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
