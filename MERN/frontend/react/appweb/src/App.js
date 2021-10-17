import axios from 'axios';
import React from 'react';
import'./App.css';
import VentaForm from './componentes/VentaForm';
import VentaList from './componentes/VentaList';


class App extends React.Component{
  constructor(props){
    super(props);
    const emptyVenta = {idVenta:'',valorTotal:'',fecha:'',nombreCliente:'',nId:'',state:''};
    const initVentas = [
      {Id:3,valorTotal:50000,nombreCliente:'juan',nId:395049,state:'en proceso'}
    ];
    this.state = {
      ventas :initVentas,
      selectedVentas: emptyVenta
    };
    this.onFormChange = this.onFormChange.bind(this);
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

  
  render(){
    return(
      <div className="container"> 
      <VentaList ventas={this.state.ventas}/>
      <VentaForm venta={this.state.selectedVentas} onFormChange={this.onFormChange}/>
      </div>
    );
  }
}
export default App;
