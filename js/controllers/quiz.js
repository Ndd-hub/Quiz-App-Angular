(function() {
    angular.module("celebrityFacts")
    .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService) {
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.dataService = DataService;
      vm.activeQuestion = 0;
      vm.questionAnswered = questionAnswered;
      vm.setActiveQuestion = setActiveQuestion;
      vm.selectAnswer = selectAnswer;
      vm.finaliseAnswers = finaliseAnswers;
      vm.error = false;
      vm.finalise = false;

      var numQuestionsAnswered = 0;

      function setActiveQuestion(index) {
        //increment to the next question but I cannot simply increment using ++ as if I go to a previous answered question it will skip to next immediate question not to the next immediate unanswered question
        //check if incrementing will land to an answered question
        // also this function will only be called when not all the questions have been answered

        if(index === undefined) {
          var breakOut = false;
          var quizLength = DataService.quizQuestions.length-1; //bcoz we are now referencing everything to activeQuestion and the index starts from 0

          while(!breakOut) {
            vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

            if(vm.activeQuestion === 0)
            {
              vm.error = true;
            }

            if(DataService.quizQuestions[vm.activeQuestion].selected === null) {    //if question not answered
              breakOut = true;
            }
          }
        }
        else {
          vm.activeQuestion = index;
        }
      }

      function questionAnswered() { //check if the current question has been answered & if it has then we want to increment the total no. of questions that have been answered and then check if all the questions have been answered
        var quizLength = DataService.quizQuestions.length;

        if(DataService.quizQuestions[vm.activeQuestion].selected !== null) //means question have been answered
        {
          numQuestionsAnswered++;
          if(numQuestionsAnswered >= quizLength) //check if all the questions have been answered
          {
            //check all the questions have been answered
            for(var i=0; i<quizLength; i++)
            {
              if(DataService.quizQuestions[i].selected === null) {
                //we have an unanswered question
                setActiveQuestion(i);
                return;
              }
            }
            //all questions have been answered and return inside the for loop was never executed
            vm.error = false; //if error is display then remove it
            vm.finalise = true;
            return;
          }
        }

        vm.setActiveQuestion();

      }

      function selectAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
      }

      function finaliseAnswers() {
        //reset everything we have done in this controller
        vm.finalise = false;
        numQuestionsAnswered = 0;
        vm.activeQuestion = 0;
        quizMetrics.markQuiz();
        quizMetrics.changeState("quiz", false);
        quizMetrics.changeState("results", true);

      }

    }


})();
