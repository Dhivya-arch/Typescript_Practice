
//number array
let nums: number[]=[1, 2, 3, 4, 5];

// console.log(nums);

// Multiple types
let multi: (number|boolean|string)[]=[false,2,5,true,true];

let fruits:Array<String|number> = ["Apple", "Banana", "Mango", 10, 20];

multi.push(30);

console.log(multi);


// ForLoops for-in loops
console.log("For-in loop:");
for(let i in nums){
    console.log(`${nums[i]}`);
        
}

// for -of loop
console.log("For-of loop:");
for(let i of nums){
    console.log(i);
}

//shift
let firstElement=nums.shift();
console.log("After shift operation:",nums);
console.log(`After shift :${nums}`);

console.log("First element removed:", firstElement);

// unshift
multi.unshift(50,100);
console.log("After unshift operation:",multi);

// Slice --After Slice original array remains same
let slicedArray=multi.slice(4,5);
console.log("After slice operation:",slicedArray);
console.log("Original array after slice operation:",multi);

    
// Splice 
let SplicedArray:(number|boolean|string)[]=multi.splice(5,1,"Apple","Banana");
console.log("After splice operation:",multi);
console.log("Spliced elements:",SplicedArray);  

// Concat
let concatArray=nums.concat(nums);
console.log("After concat operation:",concatArray);

// indexOf includes toString

// filter 
let filteredArray=nums.filter(data=>data%2==0);
console.log("Filtered array:",filteredArray);

// forEach
console.log("Filtered elements:");
filteredArray.forEach(element=>{
    console.log(element);
});

// map
nums.map(data=>data*3).forEach(element=>{
    console.log("After map operation and forEach:",element);
});

nums.map(data=>data*1);
console.log("After map operation:",nums);

// reduce
// nums.reduce()

// some
let result=multi.some(val=> val==true);
console.log("Result of some operation:",result);

// every
let result2:boolean=nums.every(val=>val>0); 
console.log("Result of every operation:",result2);
