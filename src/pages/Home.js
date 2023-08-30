import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import PackageInfo from "../components/PackageInfo";

function Home() {
  const [repos, setRepos] = useState([]);
  const [finished, setFinished] = useState(false);
  const githubLink = useRef();
  const branch = useRef();

  let arr = [];

  async function handleSubmit() {
    setRepos([]);
    setFinished(false);
    let username, repo;
    username = githubLink.current.value.split("/")[3];
    repo = githubLink.current.value.split("/")[4];

    const url = `https://raw.githubusercontent.com/${username}/${repo}/${branch.current.value}/package.json`;
    const resp = await fetch(url);
    if (resp.status !== 200) {
      alert("Please insert github repo link in right format");
      return;
    }
    localStorage.setItem("githubLink", githubLink.current.value);
    localStorage.setItem("branch", branch.current.value);

    const body = await resp.json();
    //const dependencies_array = Object.keys(body.dependencies)
    //setDependencies(dependencies_array);
    Object.keys(body.dependencies).map(async (item) => {
      if (item.includes("@")) {
        let p = item.split("/")[0].slice(1);
        const url = "https://api.npms.io/v2/package/" + p;
        const resp = await fetch(url);
        const body = await resp.json();
        if (!arr.includes(body.collected.metadata.name)) {
          arr.push(body.collected.metadata.name);
          setRepos((current) => [...current, body]);
        }
      } else if (!item.includes("@")) {
        const url = "https://api.npms.io/v2/package/" + item;
        const resp = await fetch(url);
        const body = await resp.json();
        if (!arr.includes(body.collected.metadata.name)) {
          arr.push(body.collected.metadata.name);
          setRepos((current) => [...current, body]);
        }
      }
    });

    setFinished(true);
  }

  const finishLine = async () => {
    await handleSubmit();
    const res = await Promise.all(repos);
    console.log(res);
  };

  useEffect(() => {
    if (
      localStorage.getItem("githubLink") !== null &&
      localStorage.getItem("branch") !== null
    ) {
      githubLink.current.value = localStorage.getItem("githubLink");
      branch.current.value = localStorage.getItem("branch");
      finishLine();
      return;
    }
  }, []);

  return (
    <>
      <div className="p-10 bg-black flex flex-col items-center justify-start items-start gap-12">
        <h1 className="text-5xl text-white">dotPackages</h1>
        <h2 className="text-4xl text-white font-mono">NPM Packages Manager</h2>
        <p className="text-lg text-white text-center font-mono mx-40">
        Do you possess knowledge about the npm packages you've incorporated? Are you familiar with their functionalities, update history, problems, and interdependencies?
          <br />
          dotRead serves as an all-observant tool for your npm packages, designed to assist you in recognizing packages that might be risky or outdated.
        </p>
        <p className="text-xl text-white mt-4 font-mono text-center">
          Developed by{" "}
          <a
            href="https://github.com/pradeeptosarkar"
            target={"_blank"}
            className="text-blue-700 hover:text-blue-300"
          >
            Pradeepto Sarkar
          </a>{" "}
          for {" "}
          <div className="inline-block hover:text-blue-300">
          <span className="text-red-500 font-extrabold">M</span><span className="text-blue-600 font-extrabold">L</span><span className="text-yellow-400 font-extrabold">H</span>
          </div>
          
          {" "}Fellowship - Software Engineering Track: Orientation Hackathon, Fall 2023. Github link is{" "}
          <a
            href=""
            target={"_blank"}
            className="text-orange-700 hover:text-orange-300"
          >
            here
          </a>
        </p>

        <div className=" container mx-auto flex flex-col  items-center mt-8">
          <p className="mb-8 text-sm text-white">
            Insert a link to your Github repo with package.json file as well as
            branch name.
          </p>
          <div className="flex flex-col sm:flex-col lg:flex-col gap-8">
            <div className="flex flex-col flex-start gap-2 text-white">
              <label for="githubLink">Name of the GitHub Repository</label>
              <input
                type="text"
                ref={githubLink}
                className="outline ouline-100 border-x-8 border-y-4 border-green-200 shadow-green-200 shadow-md p-2 rounded-2xl w-[300px] lg:w-[500px] text-black"
                name="githubLink"
                id=""
                placeholder="https://github.com/pradeeptosarkar/dotRead"
              />
            </div>
            <div className="flex flex-col flex-start gap-2 text-white">
              <label for="branch">Name of the Branch</label>
              <input
                type="text"
                ref={branch}
                className="outline ouline-100 border-x-8 border-y-4 border-green-200 shadow-green-200 shadow-md p-2 rounded-2xl w-[300px] lg:w-[500px] text-black"
                name="branch"
                id=""
                placeholder="main"
              />
            </div>

            <button
              className="p-4 text-green-100 bg-green-600 rounded-lg hover:bg-green-700 active:bg-green-900"
              onClick={() => finishLine()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="px-10 pb-20 bg-black pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-white">
        {finished ? (
          repos.map((item, index) => (
            <PackageInfo item={item} key={index} />
            // <h1 key={index}>{JSON.stringify(item)}</h1>
          ))
        ) : (
          <p className="text-white">Packages you have used will appear here.</p>
        )}
      </div>
    </>
  );
}

export default Home;
