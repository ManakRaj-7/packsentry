export function calculateRisk(data) {

    let riskScore = 0;

    if (data.downloads < 5000) {
        riskScore += 2;
    }

    if (data.hasPostInstall) {
        riskScore += 4;
    }

    if (data.typoCheck?.suspicious) {
        riskScore += 5;
    }

    if (data.scriptCheck?.dangerous) {
        riskScore += 4;
    }

    if (riskScore >= 7) {
        return "HIGH";
    }

    if (riskScore >= 4) {
        return "MEDIUM";
    }

    return "LOW";
}