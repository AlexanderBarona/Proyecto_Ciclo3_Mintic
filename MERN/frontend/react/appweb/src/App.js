import axios from 'axios';
import React from 'react';
import'./App.css';
import VentaForm from './componentes/VentaForm';
import VentaList from './componentes/VentaList';


class App extends React.Component{
  constructor(props){
    super(props);
    this.emptyVenta = {Id:'',valorTotal:'',fecha:'',nombreCliente:'',nId:'',state:''};
    const initVentas = [
      {Id:3,valorTotal:50000,fecha:'10/10/2010',nombreCliente:'juan',nId:395049,state:'en proceso'}
    ];
    this.state = {
      ventas :initVentas,
      selectedVentas: this.emptyVenta
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditVenta = this.onEditVenta.bind(this);
    this.onDeleteVenta = this.onDeleteVenta.bind(this);
    this.onClearVenta = this.onClearVenta.bind(this);
  }

  componentDidMount(){
    const URL = 'http://localhost:3001'
    axios.get(URL+'/ventas').then((resp)=>{
      console.log('Esta es la respuesta de listar estudiantes',resp);
      this.setState({ventas:resp.data});
    }).catch(err =>{
      console.log('Hubo un error',err);
    });
  }

  onFormChange(){
    console.log('cambio el formulario');
  }

  onEditVenta(venta){
    console.log('quiero editar un estudiante',venta);
    this.setState({selectedVentas:venta});
  }

  onDeleteVenta(ventaId){
    console.log('quiero eliminar un estudiante',ventaId);
  }

  onClearVenta(){
    console.log('limpiar');
    this.setState({selectedVentas: this.emptyVenta});
  }

  
  render(){
    return(
      <div className="container"> 
      <VentaList ventas={this.state.ventas} 
      onEditVenta={this.onEditVenta}
      onDeleteVenta={this.onDeleteVenta}
      />
      <VentaForm venta={this.state.selectedVentas} 
      onFormChange={this.onFormChange}
      onClearVenta = {this.onClearVenta}
      />
      </div>
    );
  }
}
export default App;
