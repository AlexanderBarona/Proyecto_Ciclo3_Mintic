import React from "react";
class VentaForm extends React.Component{
    render(){
        const venta = this.props.venta;
        return (
            <div className="formulario">
                <form>
                    <div>
                        <label >Id</label>
                        <input type="number" value={venta.idVenta} onChange={()=>this.props.onFormChange}/>
                    </div>
                    <div>
                        <label >Valor Total</label>
                        <input type="number" value={venta.valorTotal}onChange={()=>this.props.onFormChange}/>
                    </div>
                    <div>
                        <label >Fecha</label>
                        <input type="date" value={venta.fecha}onChange={()=>this.props.onFormChange}/>
                    </div>
                    <div>
                        <label>Nombre del cliente</label>
                        <input type="text" value={venta.nombreCliente}onChange={()=>this.props.onFormChange}/>
                    </div>
                    <div>
                        <label>Numero de identificacion</label>
                        <input type="number" value={venta.nId}onChange={()=>this.props.onFormChange}/>
                    </div>
                    <div>
                        <label>Estado</label>
                        <input type="text" value={venta.state}onChange={()=>this.props.onFormChange}/>
                    </div>
                        <input type="submit" value="crear"/>
                        <input type="reset" value="Limpiar"/>
                </form>
            </div>
        );
    }
}

export default VentaForm;