import React from "react";
class VentaForm extends React.Component{
    onStatusChange=(evt)=>{
        const venta = this.props.venta;
        const newVenta = {...venta,state:evt.target.value};
        console.log('cambio el estado',evt.target.value,venta,newVenta);
        this.props.onFormChange(newVenta);
    }

    
    render(){
        const venta = this.props.venta;
        return (
            <div className="formulario" onSubmit={this.props.onSaveVenta} id='form'>
                <form className='f'>
                    <div>
                        <label >Id</label>
                        <input type="text" value={venta._id} disabled/>
                    </div>
                    <div>
                        <label >Valor Total</label>
                        <input type="number" value={venta.valorTotal}disabled/>
                    </div>
                    <div>
                        <label >Fecha</label>
                        <input type="text" value={venta.fecha} disabled/>
                    </div>
                    <div>
                        <label>Nombre del cliente</label>
                        <input type="text" value={venta.nombreCliente}disabled/>
                    </div>
                    <div>
                        <label>Numero de identificacion</label>
                        <input type="number" value={venta.nId}disabled/>
                    </div>
                    <div>
                        <label>Modificar estado</label>
                        <select name="estado" onChange={this.onStatusChange}>
                            <option value="en proceso">en proceso</option>
                            <option value="cancelado">cancelado</option>
                            <option value="entregado">entregado</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="guardar"/>
                        <input type="button" value="Limpiar" onClick={this.props.onClearVenta}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default VentaForm;