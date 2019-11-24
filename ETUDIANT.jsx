import React, { Component } from 'react';

class ETUDIANT extends Component {
    
        state={
          note_cc :0,
          note_ci :0,
          note_cf :0,
          moyen :0        
           }
           ecrire1 = event => {
            this.setState({ note_cc: event.currentTarget.value });
            this.props.item.Note_cc=event.currentTarget.value;       
                      };
          ecrire2 = event => {
            this.setState({ note_ci: event.currentTarget.value });

            this.props.item.Note_ci=event.currentTarget.value;
            
          };
        
          ecrire3 = event => {
            this.setState({ note_cf: event.currentTarget.value });
      
            this.props.item.Note_cf =event.currentTarget.value;
          };   
    render() { 

        return  (
        <div className="container text-center">   
                    <tr size ='255'>
                        <th scope="row">{this.props.item.matricule}</th>
                            <td>{this.props.item.nom}</td>
                            <td>{this.props.item.prenom}</td>
                           
                            <td><input type="number" max="20" class="form-control" id="noteCC" placeholder="------"   value={this.state.note_cc}  onChange={this.ecrire1}   ></input></td>
                            <td><input type="number" max="20" class="form-control" id="noteCI" placeholder="-----"   value={this.state.note_ci}  onChange={this.ecrire2}  ></input></td>
                            <td><input type="number" max="20" class="form-control" id="noteCF" placeholder="-----"   value={this.state.note_cf}  onChange={this.ecrire3}  ></input></td>
                            <td><input type="number" max="20" class="form-control" id="moyen" placeholder="------"  value={this.props.MY_moyen}></input>  </td>

                        <td>--</td>
        
                    </tr>
          
        </div> 
        );
    }
   
}
 
export default ETUDIANT;