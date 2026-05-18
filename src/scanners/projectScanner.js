import fs from "fs";

export function scanLocalProject() {

    const packageJson =
        JSON.parse(
            fs.readFileSync(
                "./package.json",
                "utf-8"
            )
        );

    const dependencies =
        packageJson.dependencies || {};

    return Object.keys(dependencies);
}