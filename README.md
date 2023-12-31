<!-- ## Special Instructions regarding contribution and HacktoberFest 
- Ensure to read the [Contribution Guide](https://github.com/pradeeptosarkar/dotPackages/blob/main/CONTRIBUTING.md) first
- Contribute only when you have new feature to add or a major update to existing features. In any case raise an issue first with suitable ideas
***
-->
![Banner](./public/dotPackages%20banner.png)

This project is a submission to MLH Fellowship Fall Batch Orientation Hackathon by Pradeepto Sarkar (POD FALL 23.10.A member).

*Do consider giving a :star: to the repository if you like the concept.!* 

## Introduction 😄
Numerous developers utilize the abundant packages available within the third-party package ecosystem for their respective projects. Nevertheless, the task of handling these packages can become burdensome, exhausting, and, at its worst, expose one's project to potential attacks.

I created this project with the intention of assisting developers in more effectively managing their packages, thereby facilitating smooth and secure development devoid of malware.

---

## What it does 😦

The main and fundamental objective of dotPackages is to assist you in monitoring and overseeing the NPM packages and dependencies of your Node project. dotPackages provides information about Github statistics, the most recent update date, and the connections to the Github repository and issues related to each package. Its purpose is to aid you in recognizing possible inconsistencies and security vulnerabilities that may arise from outdated packages.

This will prove advantageous for not only the project's creator and maintainers but also for contributors and users involved.

---

## How I built it 😍

This application was built with:

- React Js
- Tailwind css
- Node Js
- Javascript
- NPM API
- GitHub API

---

## Challenges I ran into 😖

Numerous obstacles were encountered throughout the journey, with the central difficulty residing in the integration of the project's diverse endpoints, ensuring their harmonious collaboration. Apart from this the public APIs used have issues of thier own which hampered the development and debugging process multiple times.

---

## What I learnt 🤓

Regarding the technical aspects, I acquired the skill of executing chained API calls using JavaScript, which involves the intricacies of working with its renowned Promises feature. Additionally, I gained knowledge about date formatting and the conversion of date values from milliseconds after Jan 1, 1970, 0:00 UTC, to human-readable formats such as "25, Sep, 2022." Furthermore, I encountered challenges during the integration of the front-end and backend components. Striving for a minimalist and functional UI/UX, I put forth significant effort. It's worth noting the valuable assistance I found in documentation and resources from Google, related to the technologies I employed.

---

## Scope for further development 😛

The current version is able to fetch and display the most important details about the NPM packages. In the future I wish to include more functionalities such as viewing the source code in a built-in editor right in your own browser, improving aesthetics and incorporating more data analytics of the used packages.

This project is open to any improvements or contributions from the community. To do so, one may raise an issue or drop an email at pradeeptosarkarmail@gmail.com.

---

## Getting Started

### Prerequisites

The project needs npm installed. If you don't have it already, install it using below comamnd:

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pradeeptosarkar/dotpackages.git
   ```
2. Install the required NPM packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```
### Public API endpoints I have used:
* https://raw.githubusercontent.com/:username/:repo/:branch/package.json
* https://api.npms.io/v2/:package/
