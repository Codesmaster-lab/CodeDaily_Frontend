import axios from 'axios';

const QUES_RESTAPI_TO_RETREIVE_UNDONE='http://codedaily.herokuapp.com/findbystatus/not-done';

class QuestionService{

    getQuestions(){
        return (axios.get(QUES_RESTAPI_TO_RETREIVE_UNDONE)) ;
    }
}

export default new QuestionService();
