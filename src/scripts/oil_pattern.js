import oil_pattern from "../../dictionaries/oil_pattern/oil_pattern_list.js";


    // Short pattern < 37 ft   --- shiny and urethane 
    // Medium pattern > 37 && < 41  --- hybrid (between dull & shiney) 
    // Long pattern > 41  --- strong bb read lane early and provide smoother predictable reaction


class OilPattern {

    constructor(oilPattern) {
        this.oilPattern = oil_pattern.OilPatterns[oilPattern.name];
        this.patternName = oilPattern.name;
        this.distance = oilPattern.distance;
        this.volume = oilPattern.volume;
        this.length = oilPattern.length;
        this.patternImage = oilPattern.image;
    };


    showOilPattern(oilPattern) {
        return oilPattern.image;
    };
}

export default OilPattern;