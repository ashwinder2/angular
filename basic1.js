var myapp = angular.module('myname',[]);
myapp.controller("myctrl",function($scope)
{
var emp=[
    {name:"ash", salary:50000, DOB:new Date("july 11 1998"), gender:"female"},
    {name:"tappu", salary:40000, DOB:new Date("january 5 1998"), gender:"male"},
    {name:"bidde", salary:80000, DOB:new Date("june 7 1998"), gender:"female"},
    {name:"jethalal", salary:60000, DOB:new Date("may 6 1998"), gender:"male"}
]
$scope.employee=emp;
$scope.columName="name";
$scope.order=false
$scope.changeColumn=function(column){
    if($scope.columName== column){
        $scope.order=(($scope.order)? false:true);
    }
    else{
        $scope.columName=column;
        $scope.order="false"
    }
}
$scope.changeArrow=function(column){
    if($scope.columName==column){
        return($scope.order?"arrow-down":"arrow-up")
    }
    else{
        return '';
    }
}
});
