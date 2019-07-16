class Clue {
  constructor(data) {
    this.data = data;
    this.roundCategories = [];
  }
  shuffleArray() {
    let idArray = Object.values(this.data.categories).sort(
      () => Math.random() - 0.5
    );

    this.roundCategories = idArray
    return idArray
  }
    
  getCategory() {
    let mutatedArray = this.shuffleArray().splice(0, 4);
    let categoryNames = Object.keys(this.data.categories);
    return mutatedArray.reduce((acc, id) => {
      categoryNames.forEach((el, index) => {
        if (index + 1 == id) {
          acc.push({
            category: el,
            categoryId: id
          })
        }
      })
      return acc
    }, [])
  }
  
  getRoundOneClues() {
    let categoryIds = this.getCategory();
    let clues = categoryIds.reduce((acc, category) => {
      this.data.clues.forEach(el => {
        if (el.categoryId === category.categoryId) {
          acc.push(el);
        }
      })
      return acc
    }, [])

    let boardObjects = []
    categoryIds.forEach(category => {
      let questionArray = [
        this.getQuestion(clues, 100, category.categoryId),
        this.getQuestion(clues, 200, category.categoryId),
        this.getQuestion(clues, 300, category.categoryId),
        this.getQuestion(clues, 400, category.categoryId)
      ];
      boardObjects.push({
        category: category.category,
        clues: questionArray.flat()
      })
    })
    return boardObjects
  }

  getQuestion(cluesArray, value, id) {
    
    let cluePointArray = cluesArray.filter(clue => clue.pointValue === value && clue.categoryId === id)
    return cluePointArray.splice(0, 1)
  }

  getRoundTwoClues() {
    let mutatedArray = this.roundCategories
    let roundClues = mutatedArray.splice(0, 4)
    let categoryNames = Object.keys(this.data.categories);
    let test = roundClues.reduce((acc, id) => {
      categoryNames.forEach((el, index) => {
        if (index + 1 === id) {
          acc.push({
            category: el,
            categoryId: id
          });
        }
      });
      return acc;
    }, []);

    let clues = test.reduce((acc, category) => {
      this.data.clues.forEach(el => {
        if (el.categoryId === category.categoryId) {
          acc.push(el);
        }
      });
      return acc;
    }, []);
    

    let boardObjects = [];
    test.forEach(category => {
      let questionArray = [
        this.getQuestion(clues, 100, category.categoryId),
        this.getQuestion(clues, 200, category.categoryId),
        this.getQuestion(clues, 300, category.categoryId),
        this.getQuestion(clues, 400, category.categoryId)
      ];
      boardObjects.push({
        category: category.category,
        clues: questionArray.flat()
      });
    });
    return boardObjects;

  }

  getRoundThreeClue() {
    let mutatedArray = this.roundCategories;
    let roundClues = mutatedArray.splice(0, 1);
    let categoryNames = Object.keys(this.data.categories);
    let test = roundClues.reduce((acc, id) => {
      categoryNames.forEach((el, index) => {
        if (index + 1 == id) {
          acc.push({
            category: el,
            categoryId: id
          });
        }
      });
      return acc;
    }, []);

    let clues = test.reduce((acc, category) => {
      this.data.clues.forEach(el => {
        if (el.categoryId === category.categoryId) {
          acc.push(el);
        }
      });
      return acc;
    }, []);
    
    let boardObjects = [];
    test.forEach(category => {
      let questionArray = [
        this.getQuestion(clues, 400, category.categoryId)
      ];
      boardObjects.push({
        category: category.category,
        clues: questionArray.flat()
      });
    });
    return boardObjects
  }
  
  makeBoardObject() {
    let roundOne = this.getRoundOneClues();
    let roundTwo = this.getRoundTwoClues();
    let roundThree = this.getRoundThreeClue();
    roundTwo = roundTwo.map(obj => {
      let array = obj.clues
      array.forEach(clue => {
        clue.pointValue += clue.pointValue
      })
      return obj
    })
    return [roundOne, roundTwo, roundThree]
  }

}

export default Clue;