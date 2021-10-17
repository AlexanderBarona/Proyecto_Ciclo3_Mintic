import React from "react"
class VentaList extends React.Component{
    render(){
        const ventas = this.props.ventas;
        const ventaRow = ventas.map((st,index)=>{
            return <tr key={index}>
                <td>{st.idVenta}</td>
                <td>{st.valorTotal}</td>
                <td>{st.fecha}</td>
                <td>{st.nombreCliente}</td>
                <td>{st.nId}</td>
                <td>{st.state}</td>
                <td><button type="button">editar</button></td>
                <td><button type="button">eliminar</button></td>
            </tr>    
        });
        return (
            <div className="lista">
              <table>
                <thead>
                  <th>
                    <td>Id</td>
                    <td>Valor total</td>
                    <td>Fecha</td>
                    <td>Nombre del cliente</td>
                    <td>Numero de identificación</td>
                    <td>Estado</td>
                  </th>
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