import ball from src/scripts/ball.js
import oil_pattern from src/scripts/oil_pattern.js
import user_attributes from src/scripts/user_attributes.js


class Recommendation {

    constructor (userInput) {
        this.oilPattern = new OilPattern(userInput);
        this.userAttrs = new UserAttributes(userInput); 
        this.bowlingBall = new BowlingBall(userInput);
    };

    // new BowlingBall(userInput) 
    // userInput = storm ball 


    


}

// export default Recommendation

