function convertToObject(name, description, dependencies, github, issues, date, license, starsCount, forksCount, subscribersCount) {
    return {
        name,
        description,
        dependencies,
        github,
        issues,
        date,
        license,
        starsCount,
        forksCount,
        subscribersCount
    };
}

export default convertToObject;