## Implement an in-memory search

#### Implement an in-memory search engine where multiple documents could be stored under a particular namespace and search on them and sort the search results by passing the orderBy parameter.

````javascript
const searchEngine = new InMemorySearch();
searchEngine.addDocuments('Movies', 
                    {name: 'Avenger', rating: 8.5, year: 2017}, 
                    {name: 'Black Adam', rating: 8.7, year: 2022}, 
                    {name: 'Jhon Wick 4', rating: 8.2, year: 2023}, 
                    {name: 'Black Panther', rating: 9.0, year: 2022}
                   );
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: false}));
````

#### Solution:

````javascript
class InMemorySearch{
  constructor(){
    this.entities = new Map()
  }
  
  addDocuments(nameSpace, ...documents){
    const existing = this.entities.get(nameSpace)
    
    if(!existing){
      this.entities.set(nameSpace, [...documents])
    }else{
      this.entities.set(nameSpace, [...existing, ...documents])
    }
  }
  
  search(nameSpace, filterFn, orderBy){
    const docs = this.entities.get(nameSpace)
    
    const filtered = docs.filter((e)=> filterFn(e))
    
    if(orderBy){
      const {key, asc} = orderBy
      
      return filtered.sort((a,b)=> {
        if(asc){
          return a[key]-b[key]
        }else{
          return b[key]-a[key]
        }
      })
    }
    return filtered
  }
}

````