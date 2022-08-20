import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <div className="Header">
        DevAJ...
      </div>
      <div className="form-container">
      <div className="form-box">
          <h1>Registration-form</h1>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          First Name:
        </Form.Label>
        <Col sm={10}>
          <input type="fname" placeholder="First Name" className="text"/>
        </Col>
      </Form.Group>
      <br/>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Last Name:
        </Form.Label>
        <Col sm={10}>
          <input type="lname" placeholder="Last Name" className="text" />
        </Col>
      </Form.Group>
      <br/>
        <Form.Group as={Row} className="radio">
          <Form.Label as="legend" column sm={2}>
            Gender:
          </Form.Label>
          <Col sm={10}>
            <div className="check">
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            </div>
          </Col>
        </Form.Group>
        <br/>
        <Form.Group as={Row} className="radio">
          <Form.Label as="legend" column sm={2}>
            Your skills:
          </Form.Label>
        {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="check" >
          <Form.Check
            inline
            label="HTML"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="CSS"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="React JS"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="Node JS"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}
      </Form.Group>
      <br/>
      <Button type="Submit" className="submit">
        <b>Submit</b>
      </Button>
      <Button type="Reset" className="Reset">
        <b>Reset</b>
      </Button>
    </Form>
    </div>
    <div className="form-box">
          <h1>Output</h1>
        </div>
    </div>
    </div>
    /*
      
      
        
          <form>
            <lable style={{paddingRight:"100px"}}>First Name: 
               <input type="text"/>
            </lable><br/><br/>
            <lable style={{paddingRight:"80px"}}>Middle Name:
            <input type="text"/>
            </lable><br/><br/>
            <lable style={{paddingRight:"105px"}}>last Name:
            <input type="text"/>
            </lable><br/><br/>
            <lable style={{paddingRight:"120px"}}>Email id:
            <input type="text"/>
            </lable><br/><br/>
            <label style={{paddingRight:"95px"}}>Gender:</label>
            <input type="radio" name="Gender" value="Male" style={{}}/>Male
            <input type="radio" name="Gender" value="Female" style={{paddingRight:"95px"}}/>Female

           { /*<p>Department</p>
            <form>
            <input type="radio" id="CO"/>
            <label for="CO" >CO</label>
            <input type="radio" id="CE"/>
            <label for="CE">CE</label>
            <input type="radio" id="IT"/>
            <label for="IT">It</label>
  </form>}
            
          </form>
        </div>
        <div className="form-box">
          <h1>Output</h1>
        </div>
      </div>
      
  </div>*/
  );
}

export default App;
