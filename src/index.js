import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"
import AuthentificationForm from './components/authentificationForm';

//import Home from './components/Home';
import Table from './components/table';


class App extends React.Component {

    state={
      
       comptes :[
        { id: 1,mail : "yasser", password :"yasser",tab:[{id_annee :2,id_group :5},{id_annee :2,id_group :7}]},
        { id: 2,mail : "taki", password :"taki",tab:[{id_annee :1,id_group :1},{id_annee :1,id_group :2}] },
        { id: 3, mail : "bch", password :"bch" ,tab:[{id_annee :3,id_group :7},{id_annee :3,id_group :8}]}
                ],
          }

        logini=(email,pswd) => {

            const comptes = [...this.state.comptes];
              comptes.map(compte =>{
                       if(compte.mail === email && compte.password === pswd){
                       ReactDom.render(<Table my_compte={compte} />,document.getElementById('root'));
              }
            })
              

                                };
      render() {
      return (
        <div>
            <ul>
              <AuthentificationForm fonction1={this.logini} />      
            </ul>
        
        </div>
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
