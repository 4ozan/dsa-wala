class Node {
    constructor(value, left = null,  right = null){
        this.value = value
        this.left = left
        this.right = right
    }
}

class tree {
    constructor(value) {
     this.root = null
    }
   add(value){
    if( this.root = null ) {
        this.root = newNode(value)
          return;
    }
     let current = this.root
     while(true){
    if(current.value > value) {
    if(current.Left){
        current = current.left;
    }else{
        current.Left = newNode(value)
        return;
    } 
    }else{
        if(current.right){
            current = current.right
        }else{
            current.right = newNode(value)
            return;
        }
    }
   }
}
   }

   

const tree= new Tree()
tree.add(2)
tree.add(23)
tree.add(20)