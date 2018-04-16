interface Type<T>{
    [key:string]:T
}


function log(target:any,methodname:string, propertyKey: string | symbol){
    console.log(`method ${methodname} and params ${target[methodname].length}`);
}


class myMap<T>{
    private map:Array<string|number>=[];
    
    public @log setItem( key:string,item:string|number){
        this.map[key]=item;
        console.log(`Item is setted`);
    }

    
    public @log getItem( key:string){
        return `Selected item is ${this.map[key]}`;
    }
   
    public @log clean(){
        this.map=[];
        console.log(`Map is empty`);
    }
   
    public @log printMap(){

        console.log(`Map consist of next elements: `);
        for(let key in this.map){
            console.log(`${this.map[key]}`);
        }
    }

}

let mymap = new myMap<string|number>();
mymap.setItem('name','Dmitri');
mymap.setItem('age',22);
console.log(mymap.getItem('name'));
mymap.printMap();
mymap.clean();





