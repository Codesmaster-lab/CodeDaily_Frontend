import React, { Component } from 'react';
import axios from 'axios';
import QuestionService from '../services/QuestionService';
import { Link } from 'react-router-dom';

class ListQuestionComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state={
            question_array:[]
        }
       
    }



 // After component is mounted   
componentDidMount(){
  QuestionService.getQuestions().then((resp)=>{
      this.setState({question_array : resp.data});        // to set the response got into the array
  });
}

updatedata(event){
var ifds=event.target.value;
var lonk="/update-status/"+ifds;

console.log(lonk);
axios.put(lonk).then(()=>console.log());
window.location.reload(false);

}


//table table-striped table-bordered
    render() {
        return (
          
            <div>
                <Link to="/Add"><button type="button" class="btn btn-primary" >Add (+)</button></Link>
               <h2 className="text-center">Questions List</h2>                   
                <div className="row">
                    <table className="table table-hover">                   
                       <thead>
                           <tr>
                                <th>Ques_ID</th>
                                <th>Ques_Name</th>
                                <th>Ques_Link</th>
                                <th>Ques_Difficulty</th>
                                <th>Ques_Status</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                this.state.question_array.map(                                 // mapping with key element id
                                    question_array =>                                          // to iterate through the array question_array
                                    <tr key={question_array.id}>
                                        <td>{question_array.id}</td>
                                        <td>{question_array.name}</td>
                                        <td><a href={question_array.link} target="_blank"> {question_array.link}</a></td>
                                        <td>{question_array.diff}</td>
                                        <td>{question_array.status}</td>
                                        <td>
                                         
                                         <button style={{marginLeft: "10px"}} className="btn btn-success btn-sm" onClick={this.updatedata.bind(this)} value={question_array.id}>Done</button>
                                         <Link to={{pathname: "/Update"}}><button style={{marginLeft: "10px"}} className="btn btn-primary btn-sm">Update</button></Link>
                                         
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListQuestionComponent;