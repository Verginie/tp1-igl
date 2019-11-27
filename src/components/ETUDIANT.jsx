import React, { Component } from 'react';


//<td><button onClick ={this.cc}> ok </button> </td>
/*moyen : (
  (this.state.moyen * 3 - parseFloat(this.state.note_ci, 10)) + 
  parseFloat(event.currentTarget.value, 10)
         ) *(1/3) });*/
class ETUDIANT extends Component {
    
        state={
          note_cc :0,
          note_ci :0,
          note_cf :0,
          moyen :0        
           }

        /////////////////////////////////////////// ///////////////////////////////////////////

           ecrire1 = event => {
            if(event.currentTarget.value===''){
            this.setState({moyen :
              ( 
              parseFloat(this.state.note_ci, 10)+
              parseFloat(this.state.note_cf, 10))*(1/3)
            });
            }else{
              this.setState({ note_cc: event.currentTarget.value});
              this.setState({moyen : 0});
              this.setState({  
                moyen : (
                 ( parseFloat(event.currentTarget.value, 10) +
                  parseFloat(this.state.note_ci, 10)+
                  parseFloat(this.state.note_cf, 10))*(1/3)
                          ) }); 
                 
            }           
          };
          /////////////////////////////////////////// ///////////////////////////////////////////
          ecrire2 = event => {
            if(event.currentTarget.value===''){
              this.setState({moyen :
                ( parseFloat(this.state.note_cc, 10) +
                parseFloat(this.state.note_cf, 10))*(1/3)
               });
              }else{
                this.setState({ note_ci: event.currentTarget.value});
                this.setState({moyen : 0});
                this.setState({  
                  moyen : (
                   ( parseFloat(this.state.note_cc, 10) +
                    parseFloat(event.currentTarget.value, 10)+
                    parseFloat(this.state.note_cf, 10))*(1/3)
                            ) });  
                   
              }   
                     };
        /////////////////////////////////////////// ///////////////////////////////////////////

          ecrire3 = event => {
            if(event.currentTarget.value ===''){
              this.setState({moyen :
                ( parseFloat(this.state.note_cc, 10) +
                parseFloat(this.state.note_ci, 10)
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
                   
              }   
                      };
           
         
       /////////////////////////////////////////// ///////////////////////////////////////////
     
         
    render() { 

        return  (
        <div className="container text-center">   
                    <tr size ='255'>
                        <th scope="row">{this.props.item.matricule}</th>
                            <td>{this.props.item.nom}</td>
                            <td>{this.props.item.prenom}</td>  
                            <td><input type="Number" step="0.5" min ="0" max="20" class="form-control" id="noteCC" placeholder=""   onChange={this.ecrire1}   ></input></td>
                            <td><input type="Number" step="0.5" min ="0" max="20" class="form-control" id="noteCI" placeholder=""   onChange={this.ecrire2}  ></input></td>
                            <td><input type="Number" step="0.5"  min ="0" max="20" class="form-control" id="noteCF" placeholder=""  onChange={this.ecrire3}  ></input></td>
                            <td><h1> {this.state.moyen.toFixed(2)} </h1> </td>
  
                        <td>--</td>
        
                    </tr>
          
        </div> 
        );
    }
   
}
 
export default ETUDIANT;
