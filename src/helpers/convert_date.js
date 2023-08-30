const convert_date = (date) => {
    const display_date = new Date(Date.parse(date));
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return display_date.toLocaleDateString("en-GB", options);
}

export default convert_date;