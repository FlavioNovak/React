import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

import { Home } from './views/Home';
import { ListarCliente } from './views/Clientes/Listar';
import { ListarPedidos } from './views/Pedido/Listar';
import { ListarServicos } from './views/Servico/Listar';
import { Menu } from './Components/Menu'

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path= "/" element ={<Home/>}></Route>
          <Route path= "/listar-cliente" element ={<ListarCliente/>}></Route>
          <Route path= "/listar-pedido" element ={<ListarPedidos/>}></Route>
          <Route path= "/listar-servico" element={<ListarServicos/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
