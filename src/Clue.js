


class Clue {
  constructor(data) {
    this.data = data
    this.usedCategories = [];
    // this.id = 0
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
    let category = dataArray.splice(this.id, 1)[0];
    
    this.id = this.generateRandomId(1, dataArray.length)
    this.usedCategories.push(category)
    
    return category
  }
  
  getClues(dataArray) {
    let clues = dataArray.filter(clue => {
      return clue.categoryId === this.id
    })
    return [this.getQuestion(clues, 100), this.getQuestion(clues, 200), this.getQuestion(clues, 300), this.getQuestion(clues, 400)]
  }

  getQuestion(cluesArray, value) {
    let cluePointArray = cluesArray.filter(clue => clue.pointValue === value)
    let index = this.generateRandomId(0, cluePointArray.length)
    return cluePointArray.splice(index, 1)
  }

  createBoardColumnObj() {
    return {
      category: this.getCategory(this.data.categories),
      clues: this.getClues(this.data.clues).flat()
    }
  }
}

export default Clue;