
import OilPatterns from "../../dictionaries/oil_pattern/oil_pattern_list.js"
import BowlingBalls from "../../dictionaries/bowling_ball/ball_names.js"
// import ball from "src\scripts\ball.js"
import OilPattern from "./oil_pattern.js"
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
        this.changePatternImage()
        // this.clickSubmit(click);
        // this.autoCompleteBallSearchBar();
    };

    // new BowlingBall(userInput) 
    // userInput = storm ball 

    populatePatternDropdown() {
        const select = document.getElementById("oil-pattern-dropdown")
        const patternArr = Object.keys(OilPatterns)
        
        for (let i = 0; i < patternArr.length; i++) {
            const option = document.createElement("option");
            option.value = patternArr[i]
           
            option.innerText = patternArr[i]
            select.appendChild(option);
        };
    };

    changePatternImage (oilPattern) {
        document.getElementById("oil-pattern-dropdown").addEventListener("click", () => {
            showOilPattern(oilPattern.Name);
        })
    };

    // autoCompleteBallSearchBar(input) {
    //     const ballArr = Object.keys(BowlingBalls)
    //     const searchBar = document.getElementsByClassName("autocomplete")

    //     // const currentFocus;

    //     input.addEventListener("input", function(e) {
    //         var a, b, i, val = this.value; 

    //         closeAllLists();

    //         if (!val) { return false; }
    //         currentFocus = -1

    //         a = document.createElement("DIV");
    //         a.setAttribute("id", this.id + "autocomplete-list");
    //         a.setAttribute("class", "autocomplete-items");
    //         this.parentNode.appendChild(el);

    //         for (let i = 0; i < ballArr.length; i++) {
    //             if (ballArr[i].substring(0, val.length).toUpperCase() === val.toUpperCase()) {
    //                 b = document.createElement("DIV");
    //                 b.innerHTML = "<strong>" + ballArr[i].substring(0, val.length) + "</strong>";
    //                 b.innerHTML += ballArr[i].substring(val.length);
    //                 b.innerHTML += "<input type='hidden' value='" + ballArr[i] + "'>";
    //                     b.addEventListener(click, function(e) {
    //                         input.value = this.getElementByTagName("input")[0].value;
    //                         closeAllLists();
    //                     });
    //                 a.appendChild(b)
    //             };
    //         };
    //     });
    // };
    
    // closeAllLists(ele) {

    //     const el = document.getElementsByClassName("autocomplete-items")
        
    //     for (let i = 0; i < el.length; i++) {
    //         if (ele !== x[i] && ele !== input) {
    //             el[i].parentNode.removeChild(el[i])
    //         }
    //     }
    //     document.addEventListener("click", function(e) {
    //         closeAllLists(e.target)
    //     });
    // };




    // clickSubmit(event) {
    //     const resultsButton = document.getElementById("get-results-button");

    //     resultsButton.addEventListener("submit", event => { 
    //         event.preventDefault();
    //     })
    // };
     

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


