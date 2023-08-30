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
      <div className="p-20 bg-black flex flex-col justify-start items-start gap-12 bg-slate-50">
        <h1 className="text-5xl text-white">{slug}</h1>
      </div>

      <div className="flex bg-black flex-row px-10 py-20 justify-center items-center">
        {packages === null ? (
          <p>Loading...</p>
        ) : (
          <>

            <div

              className="max-w-2xl rounded-t-lg rounded-b-md border border-t-4 border-blue-500 px-8 py-4 shadow-lg"
            >
              <div className="flex flex-row items-center justify-between border-b pb-4">

                {
                  packages.github === "undefined" ? (

                    <h1 className="text-2xl font-semibold text-green-200 bg-green-900 rounded-3xl py-2 px-2 hover:bg-green-700">
                      {packages.name}
                    </h1>

                  ) : (
                    <a href={packages.github} target={"_blank"}>
                      <h1 className="text-2xl font-semibold text-green-200 bg-green-900 rounded-3xl py-2 px-2 hover:underline hover:bg-green-700">
                        {packages.name}
                      </h1>
                    </a>
                  )
                }



                <div className="flex flex-col items-center text-green-200 bg-green-900 rounded-3xl py-2 px-2">
                  <p className="text-sm">Last updated</p>
                  <p className="text-lg font-bold">{packages.date}</p>
                </div>
              </div>

              <p className="border-b border-slate-100 py-4 text-white">
                {packages.description}
              </p>
              <p className="text-white py-4 flex justify-center">
                Github Stats
              </p>
              <div class="flex flex-row items-center justify-between py-4 text-xs" >
                <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-star text-base text-[#f5c842]"></i><span className="text-white text-lg font-semibold">{packages.starsCount}</span></p>

                <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-code-commit text-base text-[#d142f5]"></i><span className="text-white text-lg font-semibold">{packages.forksCount}</span></p>

                <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-user-group text-base text-[#426ff5]"></i><span className="text-white text-lg font-semibold">{packages.subscribersCount}</span></p>
              </div>

              {
                packages.issues === "undefined" ? (
                  <div class="flex flex-row items-center justify-start gap-2 hover:gap-3 py-4">
                    <p class="text-white">Welp... Can't seems to find its github page</p>
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
              <div className="grid grid-cols-3 place-items-start items-center overflow-auto gap-6">
                {packages.dependencies.length === 0 ? (<p>No dependencies found</p>) :
                  (
                    packages.dependencies.map((i, k) => {
                      if (i.includes('@')) {

                        return (
                          <a href={`/package-dependencies/${i.split("/")[0].slice(1)}`} key={k}>
                            <p

                              class="col-span-1 bg-green-200 rounded-3xl py-2 px-2 font-semibold text-black hover:underline hover:bg-green-100"
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

                              class="col-span-1 bg-green-200 rounded-3xl py-2 px-2 font-semibold text-black hover:underline hover:bg-green-100"
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
