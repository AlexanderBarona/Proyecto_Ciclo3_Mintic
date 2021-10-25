import React from 'react';
import'./App.css';
import {Ventas} from './componentes/Ventas';
import {Login} from './componentes/Login';

class App extends React.Component{
  URL = 'http://localhost:3000';
  constructor(props){
    super(props);
    console.log('constructor:',window.location.pathname);

  
    this.state = {
      isVentasVisible:window.location.pathname === '/ventas'
    }
  }

  showVentas = ()=>{
    console.log('showventas');
    this.setState({isVentasVisible:false});
  }


  
  render(){
    console.log(window.location.pathname);
    let contenToShow = <div>pagina incorrecta</div>
    if(this.state.isVentasVisible){
      window.history.pushState({},'','/ventas');
      contenToShow=<Ventas/>;
    }
    return(
      <div className="container"> 
        <div>
          <button type="button" onClick={this.showVentas}>Ventas</button>
          <a href='/ventas'>ventas</a>
          <Login/>
          {contenToShow}
        </div>
      </div>
    );
  }
}
export default App;
