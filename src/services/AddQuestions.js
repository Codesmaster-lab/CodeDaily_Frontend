import axios from 'axios';

const QUES_RESTAPI_TO_ADD='/addQuestion';

class AddQuestionService{

    postQuestion(question){
        return (axios.post(QUES_RESTAPI_TO_ADD, question)) ;
    }
}

export default new AddQuestionService();
