import React, { useEffect, useState } from "react";
import encodeGithubStats from "../helpers/encodeGithubStats";

function PackageInfo({ item }) {

  const [encodedPackage, setEncodedPackage] = useState(null);

  useEffect(() => {
    const load = async () => {
      const results = await encodeGithubStats(item);
      setEncodedPackage(results)
    }

    load();
  }, [])


  return (
    <>
      {encodedPackage === null ? (
        <p>Loading</p>
      ) : (
        <div
          className="max-w-2xl rounded-t-lg rounded-b-md border border-t-4 border-slate-100 border-t-green-400 px-8 py-4 shadow-lg"
        >
          <div className="flex flex-row items-center justify-between border-b pb-4">

            {
              encodedPackage.github === "undefined" ? (

                <h1 className="text-2xl font-semibold text-green-900 bg-green-200 rounded-3xl py-2 px-2">
                  {encodedPackage.name}
                </h1>

              ) : (
                <a href={encodedPackage.github} target={"_blank"}>
                  <h1 className="text-2xl font-semibold text-green-900 bg-green-200 rounded-3xl py-2 px-2 hover:underline">
                    {encodedPackage.name}
                  </h1>
                </a>
              )
            }



            <div className="flex flex-col items-end">
              <p className="text-sm text-white">Last updated</p>
              <p className="text-lg font-bold text-white">{encodedPackage.date}</p>
            </div>
          </div>

          <p className="border-b border-slate-100 py-4 text-white">
            {encodedPackage.description}
          </p>
          <p className="text-white py-4 flex justify-center">
            Github Stats
          </p>


          <div class="flex flex-row items-center justify-between py-4 text-xs text-white" >
            <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-star text-base text-[#ffffff]"></i><span className="text-white text-lg font-semibold">{encodedPackage.starsCount}</span></p>

            <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-code-commit text-base text-[#ffffff]"></i><span className="text-white text-lg font-semibold">{encodedPackage.forksCount}</span></p>

            <p className="flex flex-row items-center gap-1"><i className="fa-solid fa-user-group text-base text-[#ffffff]"></i><span className="text-white text-lg font-semibold">{encodedPackage.subscribersCount}</span></p>
          </div>


          {
            encodedPackage.issues === "undefined" ? (
              <div class="flex flex-row items-center justify-start gap-2 hover:gap-3 py-4">
                <p class="text-white ">Welp... Can't seems to find its github page</p>
              </div>
            ) : (
              <a href={`${encodedPackage.issues}`} target="_blank" className="cursor-pointer">
                <div class="flex flex-row items-center justify-start gap-2 hover:gap-3 py-4">
                  <p class="text-red-600 font-semibold">See all issues</p>
                  <i class="fa-solid fa-arrow-right text-base text-red-600"></i>
                </div>
              </a>
            )
          }



          <p className=" mt-4 pb-3 text-white">Dependencies:</p>
          <div className="grid grid-cols-3 place-items-start items-center overflow-auto gap-6">
            {encodedPackage.dependencies === "undefined" ? (<p>No dependencies found</p>) :
              (
                encodedPackage.dependencies.map((i, k) => {
                  if (i.includes('@')) {

                    return (
                      <a href={`/package-dependencies/${i.split("/")[0].slice(1)}`} key={k}>
                        <p

                          class="col-span-1 bg-green-200 rounded-3xl py-2 px-2 font-semibold text-black hover:underline"
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

                          class="col-span-1 bg-green-200 rounded-3xl py-2 px-2 font-semibold text-black hover:underline"
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
      )}

    </>


  );
}

export default PackageInfo;
