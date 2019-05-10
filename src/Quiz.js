import React, * as react from 'react';
import QuizQuestion from './QuizQuestion.js'
let quizData = require('./quiz_data.json');

class Quiz extends react.Component{
    constructor(props){
        super(props);
        this.state = { quiz_position : 1 }
    }
    render(){
        return(
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        )
    }
}
export default Quiz;