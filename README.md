# PackSentry

> Trust your dependencies.

PackSentry is a dependency security and package intelligence CLI for the npm ecosystem.

Analyze npm packages instantly from your terminal and detect:
- suspicious install scripts
- risky packages
- ecosystem trust signals
- package popularity
- maintenance activity

---

## Installation

### Run with NPX

```bash
npx packsentry express
```

### Global Install

```bash
npm install -g packsentry
```

---

## Usage

### Scan a Package

```bash
packsentry express
```

### Scan Another Package

```bash
packsentry lodash
```

---

## Example Output

```txt
PACKSENTRY REPORT
----------------------------

Package: express
Description: Fast, unopinionated, minimalist web framework
Latest Version: 5.2.1
Weekly Downloads: 99678203
Last Modified: 2026-05-11T18:50:00.386Z
Risk Level: LOW
```

---

## Features

- npm package scanning
- Weekly download analysis
- Risk level detection
- Suspicious install script detection
- Fast npm registry analysis
- CLI-based workflow

---

## Risk Levels

| Level | Meaning |
|---|---|
| LOW | Trusted and widely used |
| MEDIUM | Some caution recommended |
| HIGH | Potentially suspicious package |

---

## Current Checks

PackSentry currently analyzes:

- npm package metadata
- weekly downloads
- maintenance activity
- install scripts
- ecosystem trust indicators

---

## Tech Stack

- Node.js
- ES Modules
- Axios
- Chalk
- Ora

---

## Installation Example

```bash
npx packsentry express
```

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## Links

- GitHub Repository:
  https://github.com/ManakRaj-7/packsentry

- npm Package:
  https://www.npmjs.com/package/packsentry

---

## License

MIT

---

## Author

Manak Raj

---

## Vision

PackSentry aims to make the npm ecosystem safer, more transparent, and easier to trust for developers around the world.