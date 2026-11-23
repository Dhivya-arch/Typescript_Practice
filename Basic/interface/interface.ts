interface Animal{

sound:string;

showSound() :void;

}

let dogObj:Animal={

    sound:"Woof",
    showSound:function(){
        console.log(dogObj.sound);
    }
    
}

// Type 2 implementing using class
class Dog implements Animal{

    sound: string="bark";
    showSound(): void {

    }
    
    

}