export function analyzeScripts(scripts = {}) {

    const dangerousScripts = [
        "postinstall",
        "preinstall"
    ];

    for (const script of dangerousScripts) {

        if (scripts[script]) {

            return {
                dangerous: true,
                script
            };
        }
    }

    return {
        dangerous: false
    };
}