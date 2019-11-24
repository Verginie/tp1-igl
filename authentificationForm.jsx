import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Table from './table';
import Footer from './footer';
import Home from './Home'
  

class AuthentificationForm extends Component {
    state = { 
        email_tapped :" ",
        password_tapped :" "
     }

     handleChange1 = event => {
        this.setState({ email_tapped: event.currentTarget.value });
      };
      handleChange2 = event => {
        this.setState({ password_tapped: event.currentTarget.value });
      };
     handleSubmit = event => {
        event.preventDefault();
        this.props.fonction1(this.state.email_tapped,this.state.password_tapped);
      };

      render() { 
        return  (
            
        <Router>
             
                <Route path="/dashboard" exact render={
                    ()=>{
                        return(<Home/>);//élément à retourner dans le path /dashboard
                    }
                }
                />
                <Route path="/" exact render={
                    ()=>{
                        return( //Retourne la page d'accueil (authentification)
                            <div className="container text-center">  
                            <form className="mx-auto text-center">
                              <div className="form-group">
                                <input   onChange={this.handleChange1} type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
                                <input  onChange={this.handleChange2} type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
                              </div> 
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary text-uppercase"> Se connecter </button>
                            </form>
                                   </div> 
                           
                        );
                    }
                }
                />
                
                
           
        </Router>    
         
        );
    }
   
}
 
export default AuthentificationForm;