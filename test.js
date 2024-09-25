// let data = "<ul>";
// var ar = [10, 20, 30, 40, "cu"];
// for (var i = 0; i < ar.length; i++) {
//     data += "<li>" + ar[i] + "</li>";

// }
// ar.push => insert at end
// ar.pop => remove form end
// ar.unshift => remove from start
// ar.shift => insert at start

// SLICE
// it is used to fetch the elements from an array and without making changes on the original array

// a = ar.slice(2, 5);
// console.log(a);

//SPLICE
// it is used or add or remove an element from an array and also making changes on the original array


// b = ar.splice(4, 0, 50);  // staring index,count
// console.log(b);
// console.log(ar);

// indexof, lastindexof, includes, find, findindex, findlast, findlastindex, sort, reverse, tospliced, tosorted, toreversed


//Questions

// task_1 find out the minimum and maximum from an array?
// task_2 find out the second largest element from an array?
// task_3 check if the array is sorted or not if it is sorted then print desc or asc
// task_4 find the sum of the three largest elements
// task_5 move all the zeroes at the end of the array
// task_6 find the count of every element in an array
// task_7 find the single missing number from a sequence in an array
// task_8 find the multiple missing element from an array
// task_9 remove the duplicates form an array
// task_10 print the elements according to the columns given by the user (with space)
 
// a = ar.push("me");
// data += "<li>" + ar[5] + "</li>";
// data += "</ul>";
// console.log(data);
// document.getElementById("hrll").innerHTML = data;


//Anom

// function abc(n){
//     console.log(n*2);
// }

let abc = function(x){
    console.log(x*2);
};

function hello(name){
    console.log(name);
    name(9);
    console.log(typeof(name));
}  

let m = "university";
hello(abc);