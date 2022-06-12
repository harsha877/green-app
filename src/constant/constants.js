// Database collection names

import { exp } from "react-native/Libraries/Animated/Easing";

export const GREEN_DB_COLLECTION_QUIZES = 'quiz';
export const GREEN_DB_COLLECTION_CUSTOMER = 'customer';

//Stack Navagation Screen Names
export const USER_CUSTOM_QUIZ_HOMESCREEN = "Quizzes";
export const USER_CUSTOM_QUIZ_QUESTIONSCREEN = "Question";
export const USER_CUSTOM_QUIZ_RESULTSCREEN = "Quiz Result";

//todo need to decide on this variable
export const GREEN_DB_COLLECTION_QUIZES_COLUMNS = ['CustomerID', 'Numberofquestions', 'QuizName', 'Action'];


//screen Constants
export const CUSTOM_QUESTION_HEAD_TAG = 'Enter the Questionnaire';
export const CUSTOM_QUESTION_NEXT_TAG = 'click on Next to continue adding questions';
export const CUSTOM_QUESTION_SUBMIT_TAG = 'click on Submit to end the survey';


//templates

export const QUIZ_TEMPLATE = {
  customerID: '',
  customerName: '',
  quizName: '',
  searchKey: '',
  length: 0,
  questions: []
};

export const QUESTION_TEMPLATE = {
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  weight: [],
}