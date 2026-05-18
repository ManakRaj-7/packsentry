import { maliciousPackages }
from "../data/maliciousPackages.js";

export function checkKnownMalicious(packageName) {

    return maliciousPackages.includes(
        packageName.toLowerCase()
    );
}