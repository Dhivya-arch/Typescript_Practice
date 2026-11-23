// There are 4 ways to create 
/* 1.Direct obj creation
2.Through type
3.Type alias
4.Using classes

4th one is used mostly */

// 1
let order={
    productname:"ots",
    expDate:"24May",
    getExpdateFromToday:function() {
        console.log("calculated exp date from Now",order.expDate)
        console.log("product is:",order["productname"]);
    
    }
//    or
//    getExpdateFromToday:() => {
//    console.log("calculated exp date from Now",order.expDate)
//      }
}

// Accessing elements and methods. 1.dot notation 2. array like notation
console.log(order.getExpdateFromToday);
console.log(order["getExpdateFromToday"]());

// 2.inline Type
let orderType: {
    productname: string;
    expDate:string;
    getExpdateFromToday: () => void;

}=

{
    productname:"ots",
    expDate:"24May",
    getExpdateFromToday: function() {
        console.log("calculated exp date from Now",order.expDate)
        console.log("product is:",order["productname"]);
    
    }}