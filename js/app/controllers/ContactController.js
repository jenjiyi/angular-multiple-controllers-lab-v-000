function ContactController() {
  var vm = this;
  vm.name = 'Some Dude';
  vm.email = 'someone@dude.com';
  vm.phone = '22222222';

  this.changeName = function () {
    vm.name = 'Another Dude'
  }
}

angular
  .module('app')
  .controller("ContactController", ContactController);
