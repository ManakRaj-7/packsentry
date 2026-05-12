import jaroWinkler from "jaro-winkler";

import { popularPackages }
from "../data/popularPackages.js";

export function detectTyposquatting(packageName) {

    let bestMatch = "";
    let highestScore = 0;

    for (const pkg of popularPackages) {

        const score =
            jaroWinkler(packageName, pkg);

        if (score > highestScore) {

            highestScore = score;
            bestMatch = pkg;
        }
    }

    if (
        highestScore >= 0.85 &&
        bestMatch !== packageName
    ) {

        return {
            suspicious: true,
            originalPackage: bestMatch,
            similarity: highestScore
        };
    }

    return {
        suspicious: false
    };
}