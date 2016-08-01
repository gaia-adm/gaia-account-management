export default function routes($stateProvider) {
  $stateProvider
    .state('authenticated.users', {
      abstract: true,
      template: '<div class="users" ui-view />'
    })
    .state('authenticated.users.main', {
      url: '/users',
      authRequired: true,
      template: require('./users-main.html'),
      controller: 'UsersMainController',
      controllerAs: 'users'
    });
}
routes.$inject = ['$stateProvider'];
