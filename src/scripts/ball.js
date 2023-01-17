import ball_names from dictionaries/bowling_ball/ball_names.js
import ball_images from dictionaries/bowling_balls/ball_images

class BowlingBall {

    constructor(bowlingBall) { //user input = storm ball
        this.bowlingBall = ball_names.BowlingBalls[bowlingBall]
        this.name = this.bowlingBall.Name
        this.condition = this.bowlingBall.Condition
    };

    showAllBallInfo(bowlingBall) {
        return bowlingBall
    };

    showBallImage(bowlingBall) {
        let splitName = [];
        let nameParts = this.bowlingBall.Name.split(" ");

        for (let i = 0; i < nameParts.length; i++) {
            splitName.push(nameParts[i].toLowerCase());
        };

        let pngName = splitName.join("_").concat(".png")
        let ballImgTag = document.getElementById("ball-image")
        return ballImgTag.src = dictionaries/bowling_balls/ball_images/pngName
    };

    arsenal(bowlingBall) {
        let bowlerArsenal = []

        if (!bowlingBall) {
            return bowlerArsenal
        } else {
            bowlerArsenal.push(bowlingBall)
        } 
        return bowlerArsenal
    };

    deleteBallFromArsenal(bowlingBall) {
        if (this.arsenal().includes(bowlingBall)) {
            idx = this.arsenal().indexOf(bowlingBall)
            return this.arsenal.splice(idx, 1); 
        }; 
    };



};


modules.export = BowlingBall
