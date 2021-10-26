import React from "react";
//imagenes
import IconUpdate from '../img/IconUpdate.ico'
import IconDelete from '../img/IconDelete.ico'

class VentaList extends React.Component{
  render(){
      const ventas = this.props.ventas;
      const ventaRow = ventas.map((st, index)=>{
        return <tr key={index}>
          <td>{st._id}</td>
          <td>{st.valorTotal}</td>
          <td>{st.fecha}</td>
          <td>{st.nombreCliente}</td>
          <td>{st.nId}</td>
          <td>{st.state}</td>
          <td>
            <button type="button" onClick={()=>this.props.onEditVenta(st)}><img src={IconUpdate} className="imagen"
            alt="editar"/></button>
            <button type="button" onClick={()=>this.props.onDeleteVenta(st._id)}><img src={IconDelete} className="imagen"
            alt="eliminar"/></button>
          </td>
        </tr>    
      });
    return(
      <div className="lista">
        <table>
          <thead className='encabezado'>
            <tr>
              <td>Id</td>
              <td>Valor total</td>
              <td>Fecha</td>
              <td>Nombre del cliente</td>
              <td>Numero de identificación</td>
              <td>Estado</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {ventaRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VentaList;