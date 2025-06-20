
const useState = initialValue => {
    let val= initialValue
   const state = () => {
    return val;
   }
   const setState = newValue => {
        val = newValue
   }
   return [state, setState]
}

const [foo, setFoo ] = useState('0')
console.log(foo())
setFoo(1)
console.log(foo())



