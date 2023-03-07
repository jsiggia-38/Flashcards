import './QuestionCard.css'
import { FLASHCARDS } from './QuestionCards';

const QuestionCard = (props) => {
    
    return (

        <div className = "QuestionCard">

            <div className = "QuestionCardInner">

                <div className = "QuestionCardFront">
                    <p>{FLASHCARDS[props.index].question}</p>
                    <p>Cartoon: {FLASHCARDS[props.index].show}</p>
                </div>

                <div className = "QuestionCardBack">
                    <p>{FLASHCARDS[props.index].answer}</p>
                </div>



            </div>



        </div>



    )

}

export default QuestionCard;