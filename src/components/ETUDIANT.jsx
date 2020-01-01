import React, { Component } from 'react';
import axios from 'axios';


class ETUDIANT extends Component {
    
        state={ 
                  moyen :0 ,
                  note_cc :0,
                  note_ci :0,
                  note_cf :0 ,    
           }
        /////////////////////////////////////////// ///////////////////////////////////////////
        componentDidMount(){this.setState({
                  note_cc :this.props.item.Note_cc,
                  note_ci :this.props.item.Note_ci,
                  note_cf :this.props.item.Note_cf , 
                  moyen:this.props.item.MY_moyen 
        })  } 
        /////////////////////////////////////////// ///////////////////////////////////////////
           ecrire1 = event => {
                             if(event.currentTarget.value===''){
                                        this.setState({note_cc :0})
                                        this.setState({moyen :
                                          ( 
                                            parseFloat( this.state.note_ci, 10)+
                                            parseFloat( this.state.note_cf, 10))*(1/3)
                                                });
                             }else{   
                              this.setState({ note_cc: event.currentTarget.value});

                                    this.setState({moyen : 0});
                                    this.setState({  
                                      moyen : (
                                      ( 
                                        parseFloat(event.currentTarget.value, 10) +
                                        parseFloat( this.state.note_ci, 10)+
                                        parseFloat( this.state.note_cf, 10))*(1/3)
                                                ) });
                                this.setState({ note_cc: event.currentTarget.value});

                                                this.done();     
                                                }

                                              

                                                  };
          /////////////////////////////////////////// ///////////////////////////////////////////
          ecrire2 = event => {
                              if(event.currentTarget.value===''){
                                this.setState({note_ci :0})
                                this.setState({moyen :
                                  ( parseFloat(  this.state.note_cc, 10) +
                                   parseFloat(  this.state.note_cf, 10)
                                  )*(1/3) });
                               }else{
                                this.setState({ note_ci: event.currentTarget.value});
                                 this.setState({moyen : 0});
                                   this.setState({  
                                     moyen : (
                                     ( parseFloat(this.state.note_cc, 10) +
                                       parseFloat(event.currentTarget.value, 10)+
                                       parseFloat( this.state.note_cf, 10))*(1/3)
                                               ) });
                                this.setState({ note_ci: event.currentTarget.value});

 
                                               this.done();            
                                }   

                              };
        /////////////////////////////////////////// ///////////////////////////////////////////
        /*<td> <button onClick={this.done} className="btn btn-sm btn-primary text-uppercase" > ok </button></td>*/

          ecrire3 = event => {
                                if(event.currentTarget.value ===''){
                                  this.setState({note_cf :0})
                                  this.setState({moyen :
                                    ( parseFloat(  this.state.note_cc, 10) +
                                    parseFloat(  this.state.note_ci, 10)
                                    )*(1/3) });
                                  }else{
                                   this.setState({ note_cf: event.currentTarget.value});
                                   
                                       this.setState({moyen : 0});
                                         this.setState({  
                                             moyen : (
                                              ( parseFloat(this.state.note_cc, 10) +
                                               parseFloat(this.state.note_ci, 10)+
                                                parseFloat(event.currentTarget.value, 10))*(1/3)
                                                ) }); 
                                                
                                    this.setState({ note_cf: event.currentTarget.value});
 
                                                this.done();                 
                                  }   
                                };       
       /////////////////////////////////////////// ///////////////////////////////////////////
              done () {     

                      const infos = {
                                 CC: this.state.note_cc,
                                 CI: this.state.note_ci,
                                 CF: this.state.note_cf,
                                 MOYEN:this.state.moyen
                                    }                                   
                    axios.post('http://localhost:5000/student/update/' + this.props.item._id, infos)
                         .then(res => console.log(res.data));
                               }
         
    render() { 

        return  (
         
                    <tr>
                            <td>{this.props.item.matricule}</td>
                            <td>{this.props.item.nom}</td>
                            <td>{this.props.item.prenom}</td>  
                            <td><input type="Number" step="0.5" min ="0" max="20" class="form-control" id="noteCC" placeholder= {this.state.note_cc}  onChange={this.ecrire1}   ></input></td>
                            <td><input type="Number" step="0.5" min ="0" max="20" class="form-control" id="noteCI" placeholder={this.state.note_ci}   onChange={this.ecrire2}  ></input></td>
                            <td><input type="Number" step="0.5" min ="0" max="20" class="form-control" id="noteCF" placeholder={this.state.note_cf}   onChange={this.ecrire3}  ></input></td>
                            <td><h1> {this.state.moyen.toFixed(2)} </h1> </td>

                    </tr>
        
        );
    }
   
}
 
export default ETUDIANT;
