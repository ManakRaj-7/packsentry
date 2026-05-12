# PackSentry

> Trust your dependencies.

PackSentry is a dependency security and package intelligence tool for the npm ecosystem.

It helps developers analyze npm packages for:
- package popularity
- maintenance activity
- suspicious install scripts
- package risk levels
- ecosystem trust signals

---

# Features

- Scan npm packages
- Weekly download analysis
- Risk level detection
- Detect suspicious install scripts
- CLI-based workflow
- Fast npm registry scanning

---

# Installation

## Global Install

```bash
npm install -g packsentry
```

## Run with NPX

```bash
npx packsentry express
```

---

# Usage

## Scan a Package

```bash
packsentry express
```

## Example

```bash
packsentry lodash
```

---

# Example Output

```txt
PACKSENTRY REPORT
----------------------------

Package: express
Description: Fast, unopinionated web framework
Latest Version: 5.1.0
Weekly Downloads: 32000000
Last Modified: 2026-05-10

Risk Level: LOW
```

---

# Risk Levels

| Level | Meaning |
|---|---|
| LOW | Trusted and widely used |
| MEDIUM | Some caution recommended |
| HIGH | Potentially suspicious package |

---

# Current Detection Rules

PackSentry currently checks:

- weekly npm downloads
- package metadata
- install scripts
- maintenance activity

---

# Roadmap

## Version 1
- Basic npm package scanning
- Risk analysis
- CLI reports

## Version 2
- Multiple package scanning
- JSON output
- Better risk engine

## Version 3
- GitHub integration
- Security scoring
- VS Code extension

## Version 4
- CI/CD integration
- AI package auditing
- Enterprise dashboard

---

# Tech Stack

- Node.js
- ES Modules
- Axios
- Chalk
- Ora

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

---

# License

MIT License

---

# Author

Manak Raj

---

# Vision

PackSentry aims to make the npm ecosystem safer and more transparent for developers around the world.