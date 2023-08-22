import oil_pattern from "../../dictionaries/oil_pattern/oil_pattern_list.js";

    /* 
    Pattern distances:
    Short pattern < 37 ft  --- use shiny and urethane balls
    Medium pattern > 37 ft && < 41 ft --- hybrid balls (between dull & shiney)
    Long pattern > 41 ft --- use dull bowling balls
    */


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