var obj1 = {"name": "dinesh" ,"age": "24"}
var obj2 = {"age": "24" , "name": "dinesh"}

var flag = true
for (var ex in obj1)
{
    if(obj1[ex]!==obj2[ex])
    {
        flag = false;
        break
    }
}
flag?console.log("Equal"):console.log("not equal");

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag,result[i].flags.png);
    }    
};

//! Question 3:- USING API URL PRINT COUNTRIES NAMES,REGIONS,SUB REGION AND POPULATIONS

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload =function(){
    var data1=request1.response
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
};