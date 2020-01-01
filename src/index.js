import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"
import AuthentificationForm from './components/authentificationForm';
import Home from './components/Home';
import axios from 'axios';


class App extends React.Component {

    state={
      comptes :[]
       
          }
         
///////////////////////////////////////////////////////////////////////////////
                    componentDidMount(){
                        axios.get('http://localhost:5000/teacher/')
                           .then( teachers => {
                                                  this.setState({ comptes : teachers.data })   
                                             })
                           .catch(function (error) { console.log(error);})
                                         }     
///////////////////////////////////////////////////////////////////////////////

  logini=(email,pswd) => {
                  const comptes = [...this.state.comptes];
                   comptes.map(compte =>{
                     if(compte.mail === email && compte.password === pswd){
                         ReactDom.render(<Home my_compte={compte} />,document.getElementById('root'));
                   }
           })
         };
 ///////////////////////////////////////////////////////////////////////////////
      render(){
                  return (
                              <div>
                                  
                                          <AuthentificationForm fonction1={this.logini} />      
                                  
                              </div>
                         );
              }
  }
  
  const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
