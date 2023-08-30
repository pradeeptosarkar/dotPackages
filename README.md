## Introduction
Numerous developers utilize the abundant packages available within the third-party package ecosystem for their respective projects. Nevertheless, the task of handling these packages can become burdensome, exhausting, and, at its worst, expose one's project to potential attacks.

I created this project with the intention of assisting developers in more effectively managing their packages, thereby facilitating smooth and secure development devoid of malware.

---

## What it does :interrobang:

The main and fundamental objective of dotPackages is to assist you in monitoring and overseeing the NPM packages and dependencies of your Node project. dotPackages provides information about Github statistics, the most recent update date, and the connections to the Github repository and issues related to each package. Its purpose is to aid you in recognizing possible inconsistencies and security vulnerabilities that may arise from outdated packages.

This will prove advantageous for not only the project's creator and maintainers but also for contributors and users involved.
---

## How I built it ❤️

This application was built with:

- React Js

- Tailwind css

- Node Js

- Javascript

- NPM API

- GitHub API

---

## Challenges I ran into 🐞

Numerous obstacles were encountered throughout the journey, with the central difficulty residing in the integration of the project's diverse endpoints, ensuring their harmonious collaboration.

---

## What I learnt 🤔

Regarding the technical aspects, I acquired the skill of executing chained API calls using JavaScript, which involves the intricacies of working with its renowned Promises feature. Additionally, I gained knowledge about date formatting and the conversion of date values from milliseconds after Jan 1, 1970, 0:00 UTC, to human-readable formats such as "25, Sep, 2022." Furthermore, I encountered challenges during the integration of the front-end and backend components. Striving for a minimalist and functional UI/UX, I put forth significant effort. It's worth noting the valuable assistance I found in documentation and resources from Google, related to the technologies I employed.

---

**Public API endpoints I have used**:
* https://raw.githubusercontent.com/:username/:repo/:branch/package.json
* https://api.npms.io/v2/:package/