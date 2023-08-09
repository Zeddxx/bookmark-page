import React, { useState} from 'react'

const Questions = () => {

    const QnA = [
        {
            question : "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
        },
        {
            question : "How can I request a new browser?",
            answer: "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
        },
        {
            question : "Is there a mobile app?",
            answer: "ed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
        },
        {
            question : "What about other Chromium browsers?",
            answer: "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
        }
    ]

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
    }

  return (
    // Questions And Answers
    <div className='max-w-xl flex flex-col h-auto'>
        {QnA.map((ques, index) => (
        <div className="w-full text-start cursor-pointer" key={ques.question}>
                <h6 className={`text-lg font-[400] py-4 border-t-2 border-gray-300 flex justify-between duration-300 items-center`} onClick={() => handleQuestionClick(index)}>{ques.question} <span className={`rotate-0 duration-300 ${index === selectedQuestionIndex ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={` ${index === selectedQuestionIndex ? '#fa5757' : '#5267DF'}`} strokeWidth="3" d="M1 1l8 8 8-8"/></svg></span></h6>
                <p className={`h-0 overflow-hidden duration-300 ease-in text-grayish-blue ${index === selectedQuestionIndex ? `pb-4 h-[auto]` : ''}`}>{ques.answer}</p>
        </div>
        ))}
    </div>
  )
}

export default Questions
