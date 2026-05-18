# PackSentry

PackSentry is a security-focused dependency analysis tool for the npm ecosystem.

It helps developers identify suspicious, risky, low-trust, and potentially malicious npm packages before installation.

PackSentry performs lightweight supply-chain analysis directly from the command line with zero configuration.

---

## Features

- Package risk analysis
- Typosquatting detection
- Known malicious package detection
- Dangerous install script analysis
- Suspicious shell command detection
- Dependency trust evaluation
- Package popularity analysis
- Package age analysis
- Security scoring engine
- Local project dependency scanning
- Fast CLI workflow

---

## Installation

### Global Installation

```bash
npm install -g packsentry
```

### Using NPX

```bash
npx packsentry express
```

---

## Usage

### Analyze a Package

```bash
packsentry express
```

### Detect Suspicious Packages

```bash
packsentry axois
```

### Scan Local Project Dependencies

```bash
packsentry scan .
```

---

## Example Output

### Trusted Package

```txt
PACKSENTRY REPORT
----------------------------

Package: express
Description: Fast, unopinionated, minimalist web framework
Latest Version: 5.2.1
Weekly Downloads: 104948193
Last Modified: 2026-05-11T18:50:00.386Z

Risk Level: LOW
Security Score: 95/100
```

### Suspicious Package Detection

```txt
PACKSENTRY REPORT
----------------------------

Package: axois
Description: security holding package
Latest Version: 0.0.1-security
Weekly Downloads: 1534
Last Modified: 2022-04-11T16:25:50.920Z

Risk Level: HIGH
Security Score: 28/100

POSSIBLE TYPOSQUATTING DETECTED
Did you mean: axios
```

---

## Security Checks

PackSentry currently analyzes:

- typosquatting similarity
- dangerous install scripts
- suspicious shell commands
- package popularity
- package metadata
- package age
- ecosystem trust signals
- malicious package indicators
- dependency trust signals

---

## Risk Levels

| Risk Level | Description                                 |
| ---------- | ------------------------------------------- |
| LOW        | Trusted and widely used package             |
| MEDIUM     | Caution recommended                         |
| HIGH       | Potentially suspicious or malicious package |

---

## Local Project Scanning

PackSentry can analyze dependencies from a local Node.js project.

```bash
packsentry scan .
```

This helps developers audit dependencies before installation or deployment.

---

## Architecture

```txt
src/
|-- analyzers/
|-- cli/
|-- data/
|-- scanners/
`-- index.js
```

---

## Tech Stack

- Node.js
- ES Modules
- Axios
- Chalk
- Ora
- Jaro-Winkler
- CLI Table

---

## Planned Features

- dependency tree analysis
- lockfile analysis
- GitHub repository reputation analysis
- maintainer trust scoring
- JSON output mode
- CI/CD integration
- advanced malware heuristics
- VS Code extension

---

## Development

```bash
git clone https://github.com/ManakRaj-7/packsentry.git

cd packsentry

npm install
```

---

## License

MIT

---

## Author

Manak Raj

GitHub:
[https://github.com/ManakRaj-7](https://github.com/ManakRaj-7)

npm:
[https://www.npmjs.com/package/packsentry](https://www.npmjs.com/package/packsentry)

---

## Purpose

PackSentry was created to improve transparency and security within the npm ecosystem by helping developers make safer dependency decisions.
