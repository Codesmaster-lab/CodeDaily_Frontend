import axios from 'axios';

const QUES_RESTAPI_TO_RETREIVE_ALL='/getall';

class QuestionService{

    getAllQuestions(){
        return (axios.get(QUES_RESTAPI_TO_RETREIVE_ALL)) ;
    }
}

export default new QuestionService();
