import React from "react";
class VentaForm extends React.Component{
    render(){
        const venta = this.props.venta;
        return (
            <div className="formulario">
                <form>
                    <div>
                        <label >Id</label>
                        <input type="number" value={venta.Id} onChange={()=>this.props.onFormChange} disabled/>
                    </div>
                    <div>
                        <label >Valor Total</label>
                        <input type="number" value={venta.valorTotal}onChange={()=>this.props.onFormChange}disabled/>
                    </div>
                    <div>
                        <label >Fecha</label>
                        <input type="date" value={venta.fecha}onChange={()=>this.props.onFormChange} disabled/>
                    </div>
                    <div>
                        <label>Nombre del cliente</label>
                        <input type="text" value={venta.nombreCliente}onChange={()=>this.props.onFormChange}disabled/>
                    </div>
                    <div>
                        <label>Numero de identificacion</label>
                        <input type="number" value={venta.nId}onChange={()=>this.props.onFormChange}disabled/>
                    </div>
                    <div>
                        <label>Estado</label>
                        <input type="text" value={venta.state}onChange={()=>this.props.onFormChange} disabled/>
                    </div>
                    <div>
                        <label>Estado2</label>
                        <select name="estado">
                            <option value="0">en proceso</option>
                            <option value="1">cancelado</option>
                            <option value="2">entregado</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="crear"/>
                        <input type="button" value="Limpiar" onClick={this.props.onClearVenta}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default VentaForm;