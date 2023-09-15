import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import encodeGithubStats from "../helpers/encodeGithubStats";

function PackageDependencies() {
  const { slug } = useParams();
  const [packages, setPackages] = useState(null);


  useEffect(() => {

    const fetch_details = async () => {
      const url = `https://api.npms.io/v2/package/${slug}`
      const resp = await fetch(url);
      const body = await resp.json();
      return body
    }
    fetch_details().then(async res => {
      const results = await encodeGithubStats(res);
      setPackages(results);
    })

  }, [])


  return (
    <div>
      <div className="p-20 bg-gradient-to-r from-gray-900 from-20% via-gray-800 via-gray-700 via-gray-800 to-gray-900 to-20% flex flex-col justify-start items-start gap-12 bg-black">
        <h1 className="text-5xl text-purple-400">{slug}</h1>
      </div>

      <div className="flex bg-gradient-to-r from-gray-900 from-20% via-gray-800 via-gray-700 via-gray-800 to-gray-900 to-20% flex-row px-10 py-20 justify-center items-center">
        {packages === null ? (
          <p>Loading...</p>
        ) : (
          <>

            <div

              className="max-w-2xl rounded-t-lg rounded-b-md border border-t-4 border-purple-500 px-8 py-4 shadow-lg"
            >
              <div className="flex flex-row items-center justify-between pb-4">

                {
                  packages.github === "undefined" ? (

                    <h1 className="text-2xl font-semibold text-black bg-violet-400 rounded-3xl py-2 px-2 hover:bg-violet-700">
                      {packages.name}
                    </h1>

                  ) : (
                    <a href={packages.github} target={"_blank"}>
                      <h1 className="text-2xl font-semibold text-black bg-violet-400 rounded-3xl py-2 px-2 hover:underline hover:bg-violet-700">
                        {packages.name}
                      </h1>
                    </a>
                  )
                }



                <div className="flex flex-col items-center text-black bg-violet-400 rounded-3xl py-2 px-2">
                  <p className="text-sm">Last updated</p>
                  <p className="text-lg font-bold">{packages.date}</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                 <p className="flex flex-row items-center gap-1"><i className="fa-solid text-base text-[#ffffff] fa-scale-balanced"></i><span className="text-white text-lg font-semibold">License</span></p>
                 <p className="text-white pb-4">{packages.license}</p>
                 
              </div>

              <p className="border-y border-slate-100 py-4 text-white text-center">
                {packages.description}
              </p>
              <p className="text-white py-4 flex justify-center">
                Github Stats
              </p>
              <div class="grid grid-cols-3 gap-4 py-4 text-xs text-white">
              <div class="flex flex-col items-center gap-1">
                <i class="fa-solid fa-star text-base text-[#f5c842]"></i>
                <span class="text-white text-lg font-semibold">{packages.starsCount}</span>
              </div>

              <div class="flex flex-col items-center gap-1">
                <i class="fa-solid fa-code-commit text-base text-[#d142f5]"></i>
                <span class="text-white text-lg font-semibold">{packages.forksCount}</span>
              </div>

              <div class="flex flex-col items-center gap-1">
                <i class="fa-solid fa-user-group text-base text-[#426ff5]"></i>
                <span class="text-white text-lg font-semibold">{packages.subscribersCount}</span>
              </div>
            </div>

              {
                packages.issues === "undefined" ? (
                  <div class="flex flex-row items-center justify-start gap-2 hover:gap-3 py-4">
                    <p class="text-white">Welp... Can't seem to find its github page</p>
                  </div>
                ) : (
                  <a href={`${packages.issues}`} target="_blank" className="cursor-pointer">
                    <div class="flex flex-row items-center justify-start gap-2 hover:gap-3 py-4">
                      <p class="text-red-600 font-semibold">See all issues</p>
                      <i class="fa-solid fa-arrow-right text-base text-red-600"></i>
                    </div>
                  </a>
                )
              }



              <p className=" mt-4 pb-3 text-white">Dependencies:</p>
              <div className="grid grid-cols-3 place-items-start justify-items-center gap-10">
                {packages.dependencies.length === 0 ? (<p>No dependencies found</p>) :
                  (
                    packages.dependencies.map((i, k) => {
                      if (i.includes('@')) {

                        return (
                          <a href={`/package-dependencies/${i.split("/")[0].slice(1)}`} key={k}>
                            <p

                              class="col-span-1 bg-violet-300 rounded-3xl py-2 px-2 font-semibold text-black overflow-visible hover:underline hover:bg-violet-200"
                            >
                              {i}
                            </p>
                          </a>
                        )
                      }
                      else {
                        return (
                          <a href={`/package-dependencies/${i}`} key={k}>
                            <p

                              class="col-span-1 bg-violet-300 rounded-3xl py-2 px-2 font-semibold text-black overflow-visible hover:underline hover:bg-violet-200"
                            >
                              {i}
                            </p>
                          </a>
                        )
                      }

                    })
                  )
                }

              </div>
            </div>

          </>
        )}
      </div>

    </div>
  );
}

export default PackageDependencies;
