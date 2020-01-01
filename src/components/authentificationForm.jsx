import React, { Component } from 'react';
import Footer from './footer';
 

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
              //Retourne la page d'accueil (authentification)
                            
                        <div >
                                  <div > 
                                  <div > 
                                      <h1 > SIGN IN </h1>
                                  </div>  
                                    
                                  <div className="container text-center"> 
                                        <input   onChange={this.handleChange1} type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
                                        <input  onChange={this.handleChange2} type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
                          
                                           <button onClick={this.handleSubmit} type="submit" className="btn btn-primary text-uppercase"> Se connecter </button>
                                      </div>
                                   
                                  </div>                                   
                                              
                                      <div>
                                   < Footer/>
                                    </div>
                        </div>
                           
                        );
        }
}
 
export default AuthentificationForm;
