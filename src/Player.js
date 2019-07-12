class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  incrementScore(points) {
    return this.score += points;
  }
  
  decrementScore(points) {
    return this.score -= points;
  }
}

export default Player;