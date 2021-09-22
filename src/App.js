//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListQuestionComponent from './components/ListQuestionComponent';
import ListAllQuestionComponent from  './components/ListAllQuestionComponent';
import ListDoneQuestionComponent from './components/ListDoneQuestionComponent';
import AddQuestion from './components/AddQuestion';
import EditQuestionComponent from './components/EditQuestionComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
         <div className="container">
             <Switch>
             <Route exact path="/"><ListQuestionComponent/></Route> 
             <Route path="/All" ><ListAllQuestionComponent/></Route>
             <Route path="/Add" ><AddQuestion /></Route>
             <Route path="/Done"><ListDoneQuestionComponent/></Route>
             <Route path="/Update"><EditQuestionComponent/></Route>
            
             </Switch>
         </div>
        <FooterComponent/>
        </Router>
    </div>
  );
}

export default App ;
