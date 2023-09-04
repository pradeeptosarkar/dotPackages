import convertToObject from "./convertToObject";
import convert_date from "./convert_date";

export default function encodeGithubStats(obj) {

    let starsCount_c = "", forksCount_c = "", subscribersCount_c = "";
    const name_c = obj.collected.metadata.name === undefined ? "undefined" : obj.collected.metadata.name;
    const description_c = obj.collected.metadata.description === undefined ? "undefined" : obj.collected.metadata.description;
    const dependencies_c = obj.collected.metadata.dependencies === undefined ? [] : Object.keys(obj.collected.metadata.dependencies);
    const date_c = obj.collected.metadata.date === undefined ? "undefined" : convert_date(obj.collected.metadata.date);
    //const maintainers_c = obj.collected.metadata.author.nametainers === undefined ? [] : Object.keys(obj.collected.metadata.maintainers);
    
    const license_c = obj.collected.metadata.license === undefined ? "undefined" : obj.collected.metadata.license;
    
    if (obj.collected.github === undefined) {
      starsCount_c = "undefined";
      forksCount_c = "undefined";
      subscribersCount_c = "undefined";
    } else {
      starsCount_c = obj.collected.github.starsCount === undefined ? "undefined" : obj.collected.github.starsCount;
      forksCount_c = obj.collected.github.forksCount === undefined ? "undefined" : obj.collected.github.forksCount;
      subscribersCount_c = obj.collected.github.subscribersCount === undefined ? "undefined" : obj.collected.github.subscribersCount;
    }

    const repository_c = obj.collected.metadata.links.repository === undefined ? "undefined" : obj.collected.metadata.links.repository;
    const bugs_c = obj.collected.metadata.links.bugs === undefined ? "undefined" : obj.collected.metadata.links.bugs;

    let data = convertToObject(
      name_c, description_c, dependencies_c, repository_c, bugs_c, date_c, license_c, starsCount_c, forksCount_c, subscribersCount_c
    )

    return data;

}