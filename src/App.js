import Users from "./Components/cards";
import "./App.css";
import "./index.css";
import React, { Component } from "react";
import companylogo from './images/Lets Grow More.png'; 
import Footer from './Components/footer'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    this.setState({ loading: true});

    setTimeout( async function () {
          document.getElementById("info").style.display = "none";
          const response = await fetch("https://reqres.in/api/users?page=1");
          const jsonresponse = await response.json();
          console.log(jsonresponse);
          this.setState({ users_data: jsonresponse["data"], loading: false });
        }.bind(this),
        2000
      );
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark nav-pad m-3">
          <div className="container">
            {/* <h3 className="navbar-brand brand" contentEditable="false">Let's Grow More</h3> */}
            <div className="imgBox">
              <img src={companylogo} alt="LGM Brand"/>
            </div>
            <div id="btnBox">
              <button onClick={this.showUsers}>Get Users</button>
            </div>
          </div>
        </nav>
        <Users loading={this.state.loading} users={this.state.users_data} />
        <div id="info">
          <div>Click on &nbsp;<span className="getUsertxt"> "Get Users" </span>&nbsp; to fetch the data!<br/></div>
        </div>
        <Footer/>
      </div>
      
     
    );
  }
}

export default App;
