import axios from "axios";

export async function scanPackage(packageName) {
    try {

        const response = await axios.get(
            `https://registry.npmjs.org/${packageName}`
        );

        const data = response.data;

        const latestVersion = data["dist-tags"]?.latest;

        const weeklyDownloadsResponse = await axios.get(
            `https://api.npmjs.org/downloads/point/last-week/${packageName}`
        );

        const weeklyDownloads = weeklyDownloadsResponse.data.downloads;

        const latestPackageData = data.versions[latestVersion];

        const scripts = latestPackageData.scripts || {};

        const hasPostInstall =
            scripts.postinstall || scripts.preinstall;

        let risk = "LOW";

        if (weeklyDownloads < 1000) {
            risk = "MEDIUM";
        }

        if (hasPostInstall) {
            risk = "HIGH";
        }

        return {
            success: true,
            name: data.name,
            description: data.description,
            latestVersion,
            weeklyDownloads,
            modified: data.time.modified,
            risk,
            hasPostInstall: !!hasPostInstall
        };

    } catch (error) {

        return {
            success: false,
            error: "Package not found"
        };

    }
}