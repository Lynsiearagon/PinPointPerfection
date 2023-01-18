import OilPatterns from "../../dictionaries/oil_pattern/oil_pattern_list.js"
// import ball from "src\scripts\ball.js"
import oil_pattern from "./oil_pattern.js"
// import user_attributes from "src\scripts\user_attributes.js"
// import arsenal from "src\scripts\arsenal.js"


/*  The form should take in a user's input: oil pattern,attrs selected, bowling balls entered;

    The form should then locate the oilPattern (obj) in the oil_pattern.js using the inputted string value;
    The form should store that object's Distance information
    The form should then display/populate that pattern's image in the div#pattern-img 

    The form should locate and grab a bowling ball obj from the ball.js using the inputted string value; 
    The form should push the bowling ball object into the bowler's arsenal
    The form should also store an array (somewhere) of bowlingBall names (not full obj) for later use

    The form should sort through the bowling balls a user entered
    The form should show a photo of the calculated bowling ball result 

    The form should not refresh the page when a new oil pattern is selected
    The form shold not refresh the page when "Get Your Results!" is clicked 
    The form should not refresh the page when a new bowling ball is displayed 
    
*/


class Form {

    constructor (userInput) {
        // this.oilPattern = new OilPattern(userInput);
        // this.userAttrs = new UserAttributes(userInput); 
        // this.bowlingBall = new BowlingBall(userInput);
        // this.arsenal = new Arsenal();
        this.populatePatternDropdown();
        this.showOilPattern(this.OilPattern)
        this.clickSubmit(click);

    };

    // new BowlingBall(userInput) 
    // userInput = storm ball 

    populatePatternDropdown() {
        
        let patterns = OilPatterns

        const select = document.getElementById("oil-pattern-dropdown")
        const patternArr = Object.keys(patterns)
        
        for (let i = 0; i < patternArr.length; i++) {
            const option = document.createElement("option");
            option.value = patternArr[i]
           
            option.innerText = patternArr[i]
            select.appendChild(option);
        }
    };



    



    
    clickSubmit(event) {
        const resultsButton = document.getElementById("get-results-button");

        resultsButton.addEventListener("submit", event => { 
            event.preventDefault();
        })
    };
     

    // searchBowlingBalls() {
        
    // }

    // addBallToArsenal(bowlingBall) {
    //     const bowlingBall

    //     if (!bowlingBall) {
    //         return this.arsenal
    //     } else {
    //         this.arsenal.push(bowlingBall)
    //     } 
    //     return this.arsenal
    // };

    // deleteBallFromArsenal(bowlingBall) {
    //     if (this.arsenal.includes(bowlingBall)) {
    //         idx = this.arsenal.indexOf(bowlingBall)
    //         return this.arsenal.splice(idx, 1); 
    //     }; 
    // };


    // SortBowlingBalls(arsenal) {

    //     const conditionHierarchy = {
    //         "Light": 0,
    //         "Light-Medium": 1,
    //         "Medium": 2,
    //         "Medium-Heavy": 3,
    //         "Heavy": 4
    //     };

    //     if (arsenal.length <= 1) return arsenal

    //     const mid = Math.floor(arsenal.length)
  
    // }


    // showRecommendation() {


    // }
    
}

export default Form


