# PackSentry

PackSentry is a security-focused npm package analysis tool designed to help developers identify suspicious, risky, and potentially malicious dependencies before installing them.

It provides lightweight dependency intelligence directly from the command line.

---

# Features

- npm package security scanning
- Typosquatting detection
- Dangerous install script analysis
- Dependency trust analysis
- Package popularity analysis
- Package age analysis
- Risk scoring engine
- Known malicious package detection
- Local project dependency scanning
- Fast CLI workflow

---

# Installation

## Global Installation

```bash
npm install -g packsentry
```

## Using NPX

```bash
npx packsentry express
```

---

# Usage

## Scan a Package

```bash
packsentry express
```

## Detect Suspicious Packages

```bash
packsentry axois
```

## Scan Local Project Dependencies

```bash
packsentry scan .
```

---

# Example Output

## Trusted Package

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

---

## Suspicious Package Detection

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

# Security Analysis

PackSentry currently analyzes:

- typosquatting similarity
- dangerous install scripts
- suspicious shell commands
- package popularity
- package metadata
- ecosystem trust signals
- package age
- known malicious package indicators
- dependency trust signals

---

# Risk Levels

| Risk Level | Description                                 |
| ---------- | ------------------------------------------- |
| LOW        | Trusted and widely used package             |
| MEDIUM     | Some caution recommended                    |
| HIGH       | Potentially suspicious or malicious package |

---

# Project Scanning

PackSentry can scan dependencies from a local Node.js project.

```bash
packsentry scan .
```

This helps developers audit dependencies before deployment or installation.

---

# Tech Stack

- Node.js
- ES Modules
- Axios
- Chalk
- Ora
- Jaro-Winkler
- CLI Table

---

# Architecture

```txt
src/
|-- analyzers/
|-- cli/
|-- data/
|-- scanners/
`-- index.js
```

---

# Version

Current Release:

```txt
v1.3.0
```

---

# Roadmap

## Planned Features

- dependency tree scanning
- GitHub reputation analysis
- maintainer trust scoring
- JSON output mode
- CI/CD integration
- lockfile analysis
- advanced malware heuristics
- VS Code extension

---

# Contributing

Contributions, security improvements, and pull requests are welcome.

## Development Setup

```bash
git clone https://github.com/ManakRaj-7/packsentry.git

cd packsentry

npm install
```

---

# License

MIT License

---

# Author

Manak Raj

GitHub:
[https://github.com/ManakRaj-7](https://github.com/ManakRaj-7)

npm:
[https://www.npmjs.com/package/packsentry](https://www.npmjs.com/package/packsentry)

---

# Purpose

PackSentry was created to make the npm ecosystem safer, more transparent, and easier to trust for developers worldwide.
