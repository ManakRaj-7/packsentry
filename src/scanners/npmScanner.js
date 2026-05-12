import axios from "axios";

import { detectTyposquatting }
from "../analyzers/typoAnalyzer.js";

import { analyzeScripts }
from "../analyzers/scriptAnalyzer.js";

import { calculateRisk }
from "../analyzers/riskAnalyzer.js";

export async function scanPackage(packageName) {

    try {

        const response = await axios.get(
            `https://registry.npmjs.org/${packageName}`
        );

        const data = response.data;

        const latestVersion =
            data["dist-tags"]?.latest;

        const weeklyDownloadsResponse =
            await axios.get(
                `https://api.npmjs.org/downloads/point/last-week/${packageName}`
            );

        const weeklyDownloads =
            weeklyDownloadsResponse.data.downloads;

        const latestPackageData =
            data.versions[latestVersion];

        const scripts =
            latestPackageData.scripts || {};

        const typoCheck =
            detectTyposquatting(packageName);

        const scriptCheck =
            analyzeScripts(scripts);

        const risk =
            calculateRisk({
                weeklyDownloads,
                hasDangerousScript:
                    scriptCheck.dangerous,
                typosquattingDetected:
                    typoCheck.suspicious
            });

        return {
            success: true,
            name: data.name,
            description: data.description,
            latestVersion,
            weeklyDownloads,
            modified: data.time.modified,
            risk,
            typoCheck,
            scriptCheck
        };

    } catch (error) {

        return {
            success: false,
            error: "Package not found"
        };
    }
}