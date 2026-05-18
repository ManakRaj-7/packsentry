export function calculateSecurityScore(data) {

    let score = 100;

    if (data.downloads < 5000) {
        score -= 25;
    }

    if (data.typoCheck?.suspicious) {
        score -= 40;
    }

    if (data.scriptCheck?.dangerous) {
        score -= 30;
    }

    if (data.ageCheck?.suspicious) {
        score -= 20;
    }

    if (data.hasPostInstall) {
        score -= 25;
    }

    if (score < 0) {
        score = 0;
    }

    return score;
}