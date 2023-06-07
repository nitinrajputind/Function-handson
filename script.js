// Question :1
function question(){
    console.log("This is Zero peremeter Function");
}
question();

// Question :2
function question2(a,b){
    let sum = a+b;
    console.log(sum);
}
question2(3,4);

// Question :3

const arrow=()=>{
    console.log("This is arrow function ");
}
arrow();

// question :4
// Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Question :5 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Question :6
var x = 21;
a();
b();

function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//question :7
const fact=(num)=>{
    ans=1
    if(num>0){
        for (let i=1; i<=num;i++){
            ans=ans*i
        }
        console.log(ans)
    }
    else{
        console.log("enter a postive no")
    }
}

fact(5)

/* =============================================     Day :- 2    ======================================================== */

// question: 1
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 13));