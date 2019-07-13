

class Clue {
  constructor() {
    this.usedCategories = []
  }
  generateRandomId(min, max) {
    return Math.floor(Math.random() * max) + min
  }

  getCategory(dataObj, id) {
    let dataArray = Object.keys(dataObj).reduce((acc, category) => {
      if (this.usedCategories.includes(category) !== true) {
        acc.push(category)
      }
      return acc
    }, [])
    let category = dataArray.splice(id, 1)[0]
    this.usedCategories.push(category)
    return category
    
  }
}

export default Clue;