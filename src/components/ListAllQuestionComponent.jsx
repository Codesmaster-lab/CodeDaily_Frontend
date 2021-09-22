import React, { Component } from 'react';
import QuestionService from '../services/QuestionServiceAllview';

import { Link } from 'react-router-dom';
class ListAllQuestionComponent extends Component {
   // static history: PropTypes.object.isRequired;  
    constructor(props) {
        super(props);
       
        this.state={
            question_array:[]
        }
        
       // this.addQuestion = this.addQuestionF.bind(this);
    }
    
 // After component is mounted   
componentDidMount(){
  QuestionService.getAllQuestions().then((resp)=>{
      this.setState({question_array : resp.data});        // to set the response got into the array
  });
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

export default ListAllQuestionComponent;