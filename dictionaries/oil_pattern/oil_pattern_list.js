import * as boardwalk from "./oil_pattern_images/boardwalk.png";
import * as eiffelTower from "./oil_pattern_images/eiffel_tower.png";
import * as redSquare from "./oil_pattern_images/red_square.png";


const OilPatterns = {

  "Boardwalk": {
    "name": "Boardwalk (50 UL)",
    "distance": "35 feet",
    "volume": "23.9 mL",
    "length": "Short",
    "image": boardwalk
  },

  "Eiffel Tower": {
    "name": "Eiffel Tower",
    "distance": "48 feet",
    "volume": "25.95 mL",
    "length": "Long",
    "image": eiffelTower
  },

  "Red Square": {
    "name": "Red Square",
    "distance": "40 feet",
    "volume": "25.16",
    "length": "Medium",
    "image": redSquare
  }

}

export default OilPatterns;