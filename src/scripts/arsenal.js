class Arsenal {
  
  // arsenal is an array of bowling ball names
  constructor() {
    this.arsenal = []
  };
  

  // Show arsenal
  showArsenal() {
    return this.arsenal
  };


  // Delete bowling ball from arsenal
  removeBallFromArsenal(bowlingBall) {
    
    for (let i = 0; i < this.arsenal.length; i++) {
      if (this.arsenal[i] === bowlingBall.name) {
        this.arsenal.delete(arsenal[i])
      }
    }

    return this.arsenal;
  };


  // Add bowling ball to arsenal
  addBallToArsenal(bowlingBall) {
    this.arsenal.push(bowlingBall);
  };


}

export default Arsenal; 