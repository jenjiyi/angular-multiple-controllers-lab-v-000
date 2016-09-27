function StaffController() {
  var vm = this;
  vm.name = 'Some Dude';
  vm.email = 'someone@me.com';
  vm.phone = '11111111';
}

angular
  .module('app')
  .controller("StaffController", StaffController);
