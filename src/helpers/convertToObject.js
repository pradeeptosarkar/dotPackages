function convertToObject(name, description, dependencies, github, issues, date, starsCount, forksCount, subscribersCount) {
    return {
        name,
        description,
        dependencies,
        github,
        issues,
        date,
        starsCount,
        forksCount,
        subscribersCount
    };
}

export default convertToObject;