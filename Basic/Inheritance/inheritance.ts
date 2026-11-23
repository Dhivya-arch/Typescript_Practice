class Car{
 protected colour:string;
public yom:number;

constructor(colour:string,yom:number){
    this.colour=colour;
    this.yom=yom;
}

display(){
console.log("parent display");
}

parentOnlyMathod(){
    console.log("Parent only");
}


}

class Hyndai extends Car{

  private  modelName:string;

    constructor(modelName:string,colour:string,yom:number)
    {
        super(colour,yom);
        this.modelName=modelName;
        
    }

    getAllDetails():void{
        console.log("getAll Details");
    }

    display(): void {
        super.display();
        console.log("Child class display")
    }

}

let childObj=new Hyndai("amaze","red",2010);
childObj.display();
childObj.parentOnlyMathod();

