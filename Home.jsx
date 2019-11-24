import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Footer from './footer'
import Table from './table'

class Home extends Component {
    
    dasher = event => {
        console.log("55555555555");
        
        ReactDom.render(<Table prof ={this.props.my_compte}/>,document.getElementById('root'));
        console.log("6666666666666");
        
                      };
    render() { 
        return  (
                 <div className="container text-center">   
                  <h1>  Bienvenu  dans notre application   </h1>
                  <h4>  votre mail :   {this.props.my_compte.mail }   </h4>
                  <h4>   votre mot de passe : {this.props.my_compte.password }   </h4>  
                  <button onClick ={this.dasher}> Les Notes</button>
                  <Footer/>
                 </div> 
        );
    }
}
export default Home;