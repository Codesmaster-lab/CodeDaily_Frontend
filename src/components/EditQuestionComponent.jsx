import React, { Component ,useState,useParams} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



class EditQuestionComponent extends Component {
    constructor(props) {
        super(props);
this.state={
    id:'',
    name:'',
    link:'',
    status:'',
    diff:''
};
this.changeId=this.changeId.bind(this);
this.changeName=this.changeName.bind(this);
this.changeLink=this.changeLink.bind(this);
this.changeStatus=this.changeStatus.bind(this);
this.changeDiff=this.changeDiff.bind(this);


}


changeId=(event)=>{
    this.setState({id:event.target.value});
}

changeName=(event)=>{
    this.setState({name:event.target.value});
}

changeLink=(event)=>{
    this.setState({link:event.target.value});
}

changeStatus=(event)=>{
    this.setState({status:event.target.value});
}

changeDiff=(event)=>{
    this.setState({diff:event.target.value});
}


saveQuestion=(e)=>{

    e.preventDefault();
    let QuestoAdd={
        id:this.state.id,
        name:this.state.name,
        link:this.state.link,
        status:this.state.status,
        diff:this.state.diff
    };
    
    console.log(JSON.stringify(QuestoAdd));


    axios.put('https://codedaily.herokuapp.com/update',JSON.stringify(QuestoAdd),{
        headers: {
          'Content-Type': 'application/json'
        }
      });

    

    
    
}

 

    render() {
        
        return (               
            <div  >              
             <div className="container">
                 <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3">
                         <br/><h3 className="text-center">Update Question</h3>
                         <div className="card-body">
                             <form className="form-group">
                             <label>
                                     Question Id : 
                                 </label>
                                 <input placeholder="Ques_Id" name="Ques_id " className="form-control" values={this.state.id} onChange={this.changeId}></input>
                                 <br/>
                             <label>
                                     Question Name : 
                                 </label>
                                 <input placeholder="Ques_Name" name="Ques_name " className="form-control" values={this.state.name} onChange={this.changeName}></input>
                                 <br/><label>
                                     Question Link: 
                                 </label>
                                 <input placeholder="Ques_Link" name="Ques_link " className="form-control" values={this.state.link} onChange={this.changeLink}></input>
                                <br/> <label>
                                     Question Status: 
                                 </label>
                                 <input placeholder="Ques_Status" name="Ques_status " className="form-control" values={this.state.status} onChange={this.changeStatus}></input>
                            
                                <br/> <label>
                                     Question Difficulty: 
                                 </label>
                                 <input placeholder="Ques_Diff" name="Ques_diff " className="form-control" values={this.state.diff} onChange={this.changeDiff}></input>
                             <br/>
                            <button className="btn btn-success" onClick={this.saveQuestion}>Submit</button>
                                  </form>
                         </div>
                     </div>
                 </div>
             </div>
             <br/><br/><br/>
           </div>
        );
    }
}



export default EditQuestionComponent;









