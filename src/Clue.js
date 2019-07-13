


class Clue {
  constructor(data) {
    this.data = data
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
    let clues = dataArray.filter(clue => {
      return clue.categoryId === this.id
    })
  ///filter and include in array based off of point values///
  }
  createBoardColumnObj() {
    let obj = {
      category: this.getCategory(this.data.categories),
      clues: this.getClues(this.data.clues)
    }
console.log(JSON.stringify(obj, null, 2))
  }
}

export default Clue;