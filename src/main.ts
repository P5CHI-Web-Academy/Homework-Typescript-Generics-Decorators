interface MyType<T> {
    [key: string]: T;
}

function Log(target) {
    console.log('@Name: ', target.name);
    console.log('@Parameters: ', new target().collection);
}

@Log
class MyMap<T> {
    private collection: Array< MyType<string | number> > = [];
    public setItem(key: string, item: string | number){
        this.collection[key] = item;
    }
    public getItem(key: string){
        return this.collection[key];
    }
    public clear(){
        this.collection = [];
    }
    public printMap(){
        let message: string = 'Printed Collection: ';
        for(let key in this.collection){
            message += `${this.collection[key]} `;
        }
        console.log(message)
    }
}

 let map = new MyMap<string | number>();
 map.setItem('key', 'value');
 map.setItem('key1', 2);
 map.setItem('key2', 3);
 console.log(map.getItem('key1'));
 map.printMap();
 map.clear();
 map.printMap();