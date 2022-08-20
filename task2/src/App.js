import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Button} from 'react-bootstrap'
import logolgm from './logolgm.jpg'
import Card from './Card'
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logolgm}
              width="80"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            <b>LetsGrowMore</b><n/>
            </Navbar.Brand>
          </Container>
        <Button variant="outline-warning" style={{marginRight:"40px",outline:"none",width:"100px"}}><b>Get User</b></Button>
      </Navbar>
  
  <Card/>
  </div>
    </div>
  );
}
ReactDOM.render(
  <App/>
,document.getElementById('root'));

export default App;
