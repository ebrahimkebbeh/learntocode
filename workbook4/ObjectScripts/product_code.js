function parsepartCode(text){
    colon = text.indexOf(":")
    dash = text.indexOf("-")

    supplierCode = text.slice(0, colon)
    productNumber = text.slice(colon + 1, dash)

    size = text.slice(dash + 1)

    return {
        supplierCode: supplierCode,
        productNumber, productNumber,
        size, size
    }

}

let partcode1 = "xyz:1234-l";
let part1 = parsepartCode(partcode1)

console.log(
    "supplier: " + part1.supplierCode +
    "product number: " + part1.productNumber +
    "size: " + part1.size
);