
const log = target =>  {
    console.log('Name: ', target.name);
    console.log('Parameters: ', new target().items);
}

@log
class GenericMap < T extends number | string > {
    private items: object[]
  
    constructor() {
        this.items = [];
    }
  
    setItem(key: string, item: T): void {
        let tmp = {};
        tmp[key] = item;
  
        this.items.push(tmp);
    }
  
    getItem(key: string): T {
        let ret = null;
  
        for (let i = 0; i < this.items.length; i++) {
            let curr = this.items[i];
  
            if (curr[key]) {
                return curr[key];
            }
        }
  
    return null;
    }
  
    clear() {
        this.items.length = 0;
    }
  
    printMap() {
        this.items.forEach((item) => {
            let key: string[] = Object.keys(item);
  
            console.log('{ "' + key[0] + '": ', item[key[0]], '}');
        });
    }
}
  
const numb = new GenericMap < number > ();
numb.setItem('BMW', 7);
numb.setItem('VAZ', 2106);
numb.printMap();
numb.clear();
numb.printMap();
  
const strMap = new GenericMap < string > ();
strMap.setItem('color', 'Black');
strMap.setItem('State', 'MD');
strMap.printMap();



