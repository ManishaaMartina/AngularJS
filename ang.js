(function(){
angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.fName;
$scope.lName;
$scope.Phoneno;
$scope.repeat;
$scope.users = [
{id:1, fName:'Krishna', lName:"Dhandayutham",Phoneno:"12345", Address:"12345" },
{id:2, fName:'Mohan',  lName:"Babu", Phoneno:"12345", Address:"12345" },
{id:3, fName:'Ramesh',  lName:"chidambaram", Phoneno:"12345",Address:"12345" }
];
$scope.users1 = [
{state:'Tamilnadu', country:'India' },
{state:'Tamilnadu', country:'India' },
{state:'Tamilnadu', country:'India' }
];
$scope.show = function() {
   var input={};
   input = {
     id : $scope.id,
        fName : $scope.fName,
        lName : $scope.lName,
        Phoneno : $scope.Phoneno,
        Address : $scope.Address
   }
    console.log(input);
};
$scope.showall = function() {
   $scope.shw = $scope.users.valueOf();
};

$scope.joining = function() {

   $scope.join = $scope.users.concat($scope.users1);
};

$scope.copyinarray = function() {

   $scope.copyarray = $scope.users.copyWithin(2,1);
};

$scope.filterbyfname = function()
{
    var s = $scope.users;
    $scope.filterdatum1 = s.filter(filterProcess);
}
function filterProcess(s)
{
    return s.id <= $scope.filterdatum;
}
$scope.deleteItem=function(index,obj)
{
    console.log(JSON.stringify(obj));
   $scope.users.splice(index, 1);
};

$scope.deleteItemFunc=function(fname)
{
    for(var i=0;i<$scope.users.length;i++)
    {
        if($scope.users[i].fName==fname)
        {
             $scope.users.splice(i, 1);
        }
    }
};

$scope.editItem = function(index)
{
    var a = index;
    console.log(a);
    $scope.edit=true;
    $scope.eid=$scope.users[index].id;
    $scope.efName=$scope.users[index].fName;
    $scope.elName=$scope.users[index].lName;
    $scope.ePhoneno=$scope.users[index].Phoneno;
    $scope.eAddress=$scope.users[index].Address;   
};

$scope.saveChanges = function(eid)
    {
       console.log(eid);
      for(var i=0;i<$scope.users.length;i++)
    {
        if($scope.users[i].id==eid)
        {
             $scope.users[i].id=$scope.eid;
             $scope.users[i].fName=$scope.efName;
             $scope.users[i].lName=$scope.elName;
             $scope.users[i].Phoneno=$scope.ePhoneno;
             $scope.users[i].Address=$scope.eAddress;
        }
    }
    }

$scope.createItemFunc = function(){
       var obj = {
        id : $scope.id,
        fName : $scope.fName,
        lName : $scope.lName,
        Phoneno : $scope.Phoneno,
        Address : $scope.Address
    }
     $scope.users.push(obj);
};
$scope.fillfunc = function(){
       var obj = {
        id : $scope.id,
        fName : $scope.fName,
        lName : $scope.lName,
        Phoneno : $scope.Phoneno,
        Address : $scope.Address
    }
     $scope.fillvalue = $scope.users.fill(obj);
};
$scope.createuser = function(id){
    $scope.formhide = true;
};
});
})();