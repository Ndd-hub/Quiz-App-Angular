(function () {
  angular.module("celebrityFacts").controller("listCtrl", ListController);

  ListController.$inject = ['quizMetrics', 'DataService']; //$inject we call it and set it equal to an array. Inside this array we just list all the dependencies

  function ListController(quizMetrics, DataService) { //This allows us to then bind to the properties on the factory (quizMetrics) like we would with any other properties
    var vm = this;

    vm.quizMetrics = quizMetrics; //takes the quizObj that was returned
    vm.data = DataService.celebsData;
    vm.activeCeleb = {}; //holds the object of the currently active celeb
    vm.changeActiveCeleb = changeActiveCeleb;
    vm.activateQuiz = activateQuiz;
    vm.search = "";

    function changeActiveCeleb(index){
      vm.activeCeleb = index;
    }
    function activateQuiz() {
      quizMetrics.changeState("quiz", true);//not vm.quizMetrics bececause we are still inside the function and we can access quizMetrics directly
      //we are calling the function we add to our factory from inside this function in our controller
    }

  };


})();
