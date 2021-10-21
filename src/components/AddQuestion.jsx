import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class AddQuestion extends Component {
    constructor(props) {
        super(props);
this.state={
    name:'',
    link:'',
    status:'',
    diff:''
};

this.changeName=this.changeName.bind(this);
this.changeLink=this.changeLink.bind(this);
this.changeStatus=this.changeStatus.bind(this);
this.changeDiff=this.changeDiff.bind(this);

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
        name:this.state.name,
        link:this.state.link,
        status:this.state.status,
        diff:this.state.diff
    };
    
    console.log(JSON.stringify(QuestoAdd));

    axios.post('https://codedaily.herokuapp.com/addQuestion',JSON.stringify(QuestoAdd),{
        headers: {
          'Content-Type': 'application/json'
        }
      });

      <Link to="https://codedaily.herokuapp.com/"/>

    
    
}

 

    render() {
        return (               
            <div  >              
             <div className="container">
                 <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3">
                         <br/><h3 className="text-center">Add Question</h3>
                         <div className="card-body">
                             <form className="form-group">
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



export default AddQuestion;









