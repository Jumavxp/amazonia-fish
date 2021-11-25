//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Plantas from './pages/plantas';
import Peces from './pages/peces/peces';
import Acuarios from './pages/Acuarios/Acuarios';
import Productos from './pages/Productos';
import Filtros from './pages/Acuarios/Filtros'
import Limpieza from './pages/Acuarios/Limpieza';


const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            
            <Route path={["/plantas"]}>
              <Layout>
                <Switch>
                  <Route path="/plantas">
                    <Plantas/>
                  </Route>
                </Switch>
              </Layout>
            </Route>

            <Route path={["/peces"]}>
              <Layout>
                <Switch>
                  <Route path="/peces">
                    <Peces/>
                  </Route>
                </Switch>
              </Layout>
            </Route>

            <Route path={["/acuario" , "/acuario/filtros", "/acuario/limpieza"]}>
              <Layout>
                <Switch>

                  <Route path="/acuario/limpieza">
                    <Limpieza/>
                  </Route>

                  <Route path="/acuario/filtros">
                    <Filtros/>
                  </Route>

                  <Route path="/acuario">
                    <Acuarios/>
                  </Route>
                  

                </Switch>
              </Layout>
            </Route>

            <Route path={["/productos"]}>
              <Layout>
                <Switch>
                  <Route path="/productos">
                    <Productos/>
                  </Route>
                </Switch>
              </Layout>
            </Route>

            <Route path="/:id"> Error 404 Pagina no disponible</Route>

            <Route  path={['/']}>
              <Layout>
                <Switch>
                  <Route path="/">
                    <Home/>
                  </Route>
                </Switch>
              </Layout>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
