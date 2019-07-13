import data from "./data";


class Clue {
  constructor() {
    this.usedCategories = [];
    this.id = 0
    
  }
  generateRandomId(min, max) {
    return Math.floor(Math.random() * max) + min
  }
  
  getCategory(dataObj) {
    let dataArray = Object.keys(dataObj).reduce((acc, category) => {
      if (this.usedCategories.includes(category) !== true) {
        acc.push(category)
      }
      return acc
    }, [])
    
    this.id = this.generateRandomId(0, dataArray.length)
    
    let category = dataArray.splice(this.id, 1)[0]
    this.usedCategories.push(category)
    
    return category
  }
  
  getClues(dataArray) {
    let categoryClues = dataArray.filter(clue => {
      return clue.categoryId === this.id
    })
    console.log(categoryClues)
  }
}

export default Clue;