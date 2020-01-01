import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Footer from './footer'
import Table from './table'

class Home extends Component {
    //prof ={this.props.my_compte}
    dasher1= event =>{        
        ReactDom.render(<Table a ={1} b = {1}/>,document.getElementById('root'));        
                      };

    dasher2= event =>{        
        ReactDom.render(<Table a ={1} b = {2}/>,document.getElementById('root'));        
                      };
    dasher3= event =>{        
        ReactDom.render(<Table a ={2} b = {1}/>,document.getElementById('root'));        
                      };

    dasher4= event =>{        
        ReactDom.render(<Table a ={2} b = {2}/>,document.getElementById('root'));        
                      };                   
    render() { 
        return  (
               <div>
                 <div className="container text-center">   
                                <h1>  Bienvenu  dans notre application   </h1>
                                <h4>  votre mail :   {this.props.my_compte.mail }   </h4>
                                <h4>   votre mot de passe : {this.props.my_compte.password }   </h4>  
          <button onClick ={ this.dasher1} className="btn btn-sm btn-primary text-uppercase" > 1 CP groupe 1</button>
          <button onClick ={ this.dasher2} className="btn btn-sm btn-primary text-uppercase" > 1 CP groupe 2</button>
          <button onClick ={ this.dasher3} className="btn btn-sm btn-primary text-uppercase" > 2 CP groupe 1</button>
          <button onClick ={ this.dasher4} className="btn btn-sm btn-primary text-uppercase" > 2 CP groupe 2</button>


                  
                 </div>
                 <div>
                     <Footer/>
                 </div>
                 </div>
                 );
    }
}
export default Home;