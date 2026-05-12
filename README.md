# PackSentry

> npm package security scanner and dependency threat analyzer.

PackSentry helps developers identify:
- typosquatting attacks
- suspicious npm packages
- dangerous install scripts
- risky dependencies
- low-trust packages

---

# Features

✅ npm package scanning  
✅ Risk scoring engine  
✅ Typosquatting detection  
✅ Dangerous script detection  
✅ Weekly download analysis  
✅ Dependency trust signals  
✅ Fast CLI workflow

---

# Installation

npm install -g packsentry

---

# Usage

packsentry express

packsentry axois

---

# Example Safe Package

[show express output]

---

# Example Malicious / Suspicious Package

[show axois detection]

---

# Risk Levels

LOW
MEDIUM
HIGH

---

# Security Checks

PackSentry currently analyzes:

- package popularity
- install scripts
- typo similarity
- package metadata
- ecosystem trust signals

---

# Roadmap

## v1.1
- Typosquatting detection
- Improved risk engine

## v1.2
- GitHub reputation analysis
- Maintainer trust scoring

## v1.3
- JSON output support
- CI/CD integration

## v2.0
- AI-powered dependency auditing
- VS Code extension

---

# Tech Stack

- Node.js
- ES Modules
- Axios
- Chalk
- Ora
- Jaro-Winkler similarity

---

# Author

Manak Raj