import axios from 'axios';

const QUES_RESTAPI_TO_RETREIVE_DONE='https://codedaily.herokuapp.com/findbystatus/done';

class QuestionDoneService{

    getDoneQuestions(){
        return (axios.get(QUES_RESTAPI_TO_RETREIVE_DONE)) ;
    }
}

export default new QuestionDoneService();
