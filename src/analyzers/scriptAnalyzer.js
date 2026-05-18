const dangerousPatterns = [

    "curl",
    "wget",
    "powershell",
    "bash",
    "eval",
    "child_process",
    "chmod",
    "nc ",
    "rm -rf"

];

export function analyzeScripts(scripts = {}) {

    const scriptText =
        JSON.stringify(scripts).toLowerCase();

    const foundPatterns =
        dangerousPatterns.filter(pattern =>
            scriptText.includes(pattern)
        );

    return {

        dangerous:
            foundPatterns.length > 0,

        foundPatterns
    };
}