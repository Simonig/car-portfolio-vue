const sortFunctions = {
    priceAsc: (cars) => cars.sort((a, b) => a.pricing.price - b.pricing.price),
    priceDesc: (cars) => cars.sort((a, b) => b.pricing.price - a.pricing.price),
    psAsc: (cars) => cars.sort((a, b) => a.car.ps - b.car.ps),
    psDesc: (cars) => cars.sort((a, b) => b.car.ps - a.car.ps),
    alphabeticalAsc: (cars) => cars.sort((a, b) => a.teaser.title.localeCompare(b.teaser.title)),
    alphabeticalDesc: (cars) => cars.sort((a, b) => b.teaser.title.localeCompare(a.teaser.title)),

}

export default (cars, sortBy) => sortFunctions[sortBy](cars);