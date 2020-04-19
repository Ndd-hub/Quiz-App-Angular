(function() {
    angular.module("celebrityFacts")
    .factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ['DataService']; //my answers are comming from DataService

    function QuizMetrics(DataService) {
      //in a factoy you do some work and return the object (data), and your controller will have access to this object (hence communicating between the controllers)
      var quizObj = {
        quizActive: false,
        resultsActive: false,
        changeState: changeState,
        correctAnswers: [],
        markQuiz: markQuiz,
        numCorrect: 0
      };
      return quizObj;

      function changeState(metric, state) {   //we can change state of the quiz or the result
        if(metric === "quiz"){
        quizObj.quizActive = state;
        }
        else if(metric === "results") {
          quizObj.resultsActive = state;
        }
        else {
          return false;
        }
      }

      function markQuiz() { //loop through all of the questions in the quiz and compare the answer the user slelected against the correct answer and if correct than we set the correct flag. So we can use the correct flag in the results.js to see which questions are correct.
        quizObj.correctAnswers = DataService.correctAnswers;
        for(var i=0; i<DataService.quizQuestions.length; i++) {
          if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
            DataService.quizQuestions[i].correct = true;
            quizObj.numCorrect++;
          }
          else {
            DataService.quizQuestions[i].correct = false;
          }
        }
      }
    }

})();
