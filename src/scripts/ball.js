import ball_names from dictionaries/bowling_balls/ball_names.json
import ball_images from dictionaries/bowling_balls/ball_images

class BowlingBall {

    constructor(bowlingBall) {
        this.bowlingBall = ball_names.BowlingBalls.bowlingBall
        this.name = bowlingBall.Name
        this.condition = bowlingBall.Condition
    };

    name(bowlingBall) {
        return this.name; 
    };

    condition(bowlingBall) {
        return this.condition
    }

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

    const arsenal = function (bowlingBall) {
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


export.modules 
