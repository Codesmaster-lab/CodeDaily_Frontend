import React, { Component } from 'react';
import QuestionDoneService from '../services/QuestionServiceDoneview';
import { Link } from 'react-router-dom';
class ListDoneQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            question_done_array:[]
        }
    }

    componentDidMount(){
        QuestionDoneService.getDoneQuestions().then((resp)=>{
            this.setState({question_done_array : resp.data});        // to set the response got into the array
        });
      }

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
                                this.state.question_done_array.map(                                 // mapping with key element id
                                    question_done_array =>                                          // to iterate through the array question_array
                                    <tr key={question_done_array.id}>
                                        <td>{question_done_array.id}</td>
                                        <td>{question_done_array.name}</td>
                                        <td><a href={question_done_array.link} target="_blank"> {question_done_array.link}</a></td>
                                        <td>{question_done_array.diff}</td>
                                        <td>{question_done_array.status}</td>
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


export default ListDoneQuestionComponent;