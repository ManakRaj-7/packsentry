export function analyzePackageAge(createdDate) {

    const created =
        new Date(createdDate);

    const now =
        new Date();

    const ageDays =
        Math.floor(
            (now - created)
            / (1000 * 60 * 60 * 24)
        );

    if (ageDays < 30) {

        return {
            suspicious: true,
            ageDays
        };
    }

    return {
        suspicious: false,
        ageDays
    };
}