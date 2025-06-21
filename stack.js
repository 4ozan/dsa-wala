class Stack {
    constructer () {
    this._storage = {}
    this._leghth = 0;
    }

push(value){
this._index[this._storage] = value
this._leghth++;
}

pop(){
const lastValueIndex = this._leghth -1;
if(valIndex > 0) {
    const lastVal = this._storage[lastValueIndex]
    delete this._storage[lastValueIndex]
    this._leghth --
    return lastVal;
}
return false;
}

peek() {
const lastValueIndex = this._leghth - 1
const lastVal = this._storage[lastValueIndex]
return lastVal
}
}