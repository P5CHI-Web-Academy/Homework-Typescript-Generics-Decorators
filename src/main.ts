interface MyType<T> {
    [key: string]: T;
}

function Log(target: any, key: string) {
    console.log('@Name: ', key);
    console.log('@Parameters: ', arguments);
}

class MyMap<T> {
    private collection: Array< MyType<string | number> > = [];

    @Log
    public setItem(key: string, item: string | number){
        this.collection[key] = item;
    }

    @Log
    public getItem(key: string){
        return this.collection[key];
    }

    @Log
    public clear(){
        this.collection = [];
    }
    
    @Log
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