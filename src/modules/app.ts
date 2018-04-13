
const log = target =>  {
    console.log('Name: ', target.name);
    console.log('Parameters: ', new target().array);
}

@log
class Map<T> {

    private array: Array<T> = [];

    public setItem = (key: string, item: T) => {
       (typeof key === 'string') ?  this.array[key] = item :  console.error('Key must be a string');  
    }

    public getItem = (key: string) => {
      return this.array[key];
    }

    public clear = () => this.array = [];
    

    public printMap = () => {
        for(let i in this.array) {
            console.log(this.array[i]);
        }
    }

}

const map = new Map<string | number>();
map.setItem('name','Mihai');
map.setItem('age', 20);
map.setItem('birth', 7991);
map.printMap();
