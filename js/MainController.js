var MovieController = function MovieController($scope) {

    var self = this;
    self.favorites = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        popular: true,
        category: 'thriller'
    }, {
        title: 'Inception',
        year: '2010',
        popular: false,
        category: 'action'
    }, {
        title: 'The Matrix',
        year: '1999',
        popular: true,
        category: 'thriller'
    }, {
        title: 'Saving Private Ryan',
        year: '1998',
        popular: true,
        category: 'thriller'
    }, {
        title: 'The Aviator',
        year: '2004',
        popular: false,
        category: 'drama'
    }];
    //console.log(self.favorites);
};

angular
    .module('app')
    .controller('MovieController', MovieController);
