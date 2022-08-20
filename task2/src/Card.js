import React, {useState,useEffect} from 'react'
import { FormText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  const [user,setUser] = useState([]);
  const fetchData =()=>{/*
    fetch("https://reqres.in/api/users?page=1")
    .then((response) =>{
      return response.json();
    }).then((data)=>{
      console.log(data);
      let apdata = data.results
      setUser(apdata)
    })
  */
 const response=fetch("https://reqres.in/api/users?page=1")
 const data=response.json();
 console.log(data.data[1])}
  useEffect(()=>{
      fetchData();
  },[])
  return(
    <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
  )
}
export default Card;