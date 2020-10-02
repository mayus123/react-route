import React from "react";
import Axios from 'axios';
import {config} from "../../config";
import {Link} from "react-router-dom";


const Home = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getList();
  }, [])

const getList = async() =>{
  try{

    let response = await Axios.get(`${config.api_host}/users?page=1`)
    setList(response.data.data)
  } catch{
    console.log("error");
  }
}
  return (
    <React.Fragment>
      <div className="container">
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Details</th>
              <th>Avatar</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>  
            </tr>
          </thead>
          <tbody>
            {list.map((list, index) =>
              <tr key={list.id}>
                <td>{index+1}</td>
                <td>
                  <Link to={`DetailUser/${list.id}`}>
                    {/* <button className="btn btn-primary">Details</button> */}
                    <p className="btn btn-primary">Details</p>
                  </Link>
                </td>
                <td>
                  <img className="rounded-circle" src={list.avatar} alt=""/>
                </td>
                <td>{list.email}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Home;
