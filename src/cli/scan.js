#!/usr/bin/env node

import chalk from "chalk";
import ora from "ora";

import { scanPackage } from "../scanners/npmScanner.js";

const packageName = process.argv[2];

if (!packageName) {

    console.log(
        chalk.red("Please provide a package name")
    );

    process.exit(1);
}

const spinner = ora(
    `Scanning ${packageName}...`
).start();

const result = await scanPackage(packageName);

spinner.stop();

if (!result.success) {

    console.log(
        chalk.red("Package not found")
    );

    process.exit(1);
}

const riskColor =
    result.risk === "HIGH"
        ? chalk.red.bold
        : result.risk === "MEDIUM"
        ? chalk.yellow.bold
        : chalk.green.bold;

console.log("\n");

console.log(
    chalk.cyan.bold("PACKSENTRY REPORT")
);

console.log(
    chalk.gray("----------------------------")
);

console.log(
    chalk.green("Package: "),
    result.name
);

console.log(
    chalk.green("Description: "),
    result.description || "No description"
);

console.log(
    chalk.green("Latest Version: "),
    result.latestVersion
);

console.log(
    chalk.green("Weekly Downloads: "),
    result.weeklyDownloads
);

console.log(
    chalk.green("Last Modified: "),
    result.modified
);

console.log(
    chalk.green("Risk Level: "),
    riskColor(result.risk)
);

if (result.typoCheck?.suspicious) {

    console.log(
        chalk.red.bold(
            "\n⚠ POSSIBLE TYPOSQUATTING DETECTED"
        )
    );

    console.log(
        chalk.yellow(
            `Did you mean: ${result.typoCheck.originalPackage}`
        )
    );
}

if (result.scriptCheck?.dangerous) {

    console.log(
        chalk.red.bold(
            "\n⚠ WARNING: Dangerous install script detected"
        )
    );

    console.log(
        chalk.yellow(
            `Detected Script: ${result.scriptCheck.script}`
        )
    );
}

console.log("\n");