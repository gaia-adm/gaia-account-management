export default function routes($stateProvider) {
  $stateProvider
    .state('accounts', {
      url: '/accounts',
      authRequired: true,
      views: {
        nav: {
          template: '<div nav></div>'
        },
        main: {
          template: require('./accountList.html'),
          controller: 'AccountListController',
          controllerAs: 'accounts'
        }
      }
    });
}
