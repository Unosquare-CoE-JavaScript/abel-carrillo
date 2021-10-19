angular.module('noteriousApp', [])
    .controller('MainCtrl', ['$scope', 'BoardService', function ($scope, BoardService) {
        $scope.boards = BoardService.getBoards();
       
        $scope.deleteBoard = function(id) {
            console.log('ID', id);
        }
    }])
    .factory('BoardService', function () {
        var boards = [
            {"id": "0", "title": "Board 00", "content": "Content pending."},
            {"id": "1", "title": "Board 01", "content": "Content pending."},
            {"id": "2", "title": "Board 02", "content": "Content pending."},
            {"id": "3", "title": "Board 03", "content": "Content pending."},
            {"id": "4", "title": "Board 04", "content": "Content pending."}
        ];

        var getBoards = function () {
            return boards;
        };

        return {
            getBoards: getBoards
        }
    });