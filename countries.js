/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    console.log(countries);
    let countriesSelect = `<option value="">Please select</option>`

    countries.forEach(country => {
        countriesSelect += `<option value="${country.toLowerCase()}">${country}</option>`
    })

    return countriesSelect;
}
