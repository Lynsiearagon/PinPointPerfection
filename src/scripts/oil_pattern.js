import OilPatterns from "/../../dictionaries/oil_pattern/oil_pattern_list.js"
import oil_pattern_images from "../../dictionaries/oil_pattern/oil_pattern_images"
import { Type } from "ajv/dist/compile/util"

class OilPattern {

    constructor(oilPattern) {
        this.oilPattern = OilPatterns[oilPattern]
        this.patternName = this.oilPattern[Name]
        this.distance = this.oilPattern[Distance]
        this.volume = this.oilPattern[Volume]
        this.type = this.oilPattern[Type]
    };

    // Short pattern < 37 ft   --- shiny and urethane 
    // Medium pattern > 37 && < 41  --- hybrid (between dull & shiney) 
    // Long pattern > 41  --- strong bb read lane early and provide smoother predictable reaction


    showOilPattern(oilPattern) {
        let splitName = [];
        if (this.patternName.length > 1) { 
            let nameParts = this.patternName.split(" ");
        }

        for (let i = 0; i < nameParts.length; i++) {
            splitName.push(nameParts[i].toLowerCase());
        };

        let pngName = splitName.join("_").concat(".png")
        let patternImgTag = document.getElementById("oil-pattern-image")
        return patternImgTag.src = `../../dictionaries/oil_pattern/oil_pattern_images/${pngName}`
    };
}

export default OilPattern