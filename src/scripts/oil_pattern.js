import OilPatterns from "../../dictionaries/oil_pattern/oil_pattern_list.js"
// import oil_pattern_images from "../dictionaries/oil_pattern/oil_pattern_images"

class OilPattern {

    constructor(oilPattern) {
        this.oilPattern = OilPatterns[oilPattern]
        this.patternName = this.oilPattern[Name]
        this.distance = this.oilPattern[Distance]
        this.volume = this.oilPattern[Volume]
        this.length = this.oilPattern[Length]
    };

    // Short pattern < 37 ft   --- shiny and urethane 
    // Medium pattern > 37 && < 41  --- hybrid (between dull & shiney) 
    // Long pattern > 41  --- strong bb read lane early and provide smoother predictable reaction


    showOilPattern(patternName) {
        let image = document.getElementById("oil-pattern-image");
        let nameParts = this.patternName.split(" ");
        let splitName = [];

        if (nameParts.length === 1) { 
            return image.src = `../dictionaries/oil_pattern/oil_pattern_images/${nameParts}.png`;
        } else {
            for (let i = 0; i < nameParts.length; i++) {
                splitName.push(nameParts[i].toLowerCase());
            }
            let pngName = splitName.join("_").concat(".png");
            return image.src = `../dictionaries/oil_pattern/oil_pattern_images/${pngName}`;
        };
    };
}

export default OilPattern