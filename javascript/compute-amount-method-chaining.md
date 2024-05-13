#### write a function to calculate the total amount when the below function chain is given
computeAmount().lacs(15).crore(3).crore(2).lacs(20).thousand(50).value()

```javascript
function computeAmount(){

	let totalValue = 0;
  
  const obj = {
    lacs: function(currVal){
      totalValue += currVal * 100000
      return obj
  	},
    crore: function(currVal){
      totalValue += currVal * 10000000
      return obj
  	},
    thousand: function(currVal){
      totalValue += currVal * 1000
      return obj
  	},
    value: ()=> totalValue
  }
  
  return obj
}

console.log(computeAmount().lacs(15).crore(3).crore(2).lacs(20).thousand(50).value())
```