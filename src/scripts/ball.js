import ball_names from "dictionaries/bowling_ball/ball_names.js";


class BowlingBall {

    // Established attributes of bowling ball class
    constructor(bowlingBall) { 
        this.bowlingBall = ball_names.BowlingBalls[bowlingBall]
        this.name = bowlingBall.name
        this.condition = bowlingBall.condition
        this.image = bowlingBall.image
    };


    // Return all bowling ball object information
    showBowlingBall(bowlingBall) {
        return bowlingBall;
    };


    // Return bowling ball image
    showBallImage(bowlingBall) {
        return this.bowlingBall.image;
    };

};


export default BowlingBall;
