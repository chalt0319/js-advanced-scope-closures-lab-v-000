function produceDrivingRange(range) {
  return function (first, last) {
    let firstrange = parseInt(first.split("th")[0], 10)
    let lastrange = parseInt(last.split("th")[0], 10)
    if (lastrange - firstrange < range) {
      return `within range by ${lastrange - firstrange}`
    } else {
      let outOfRange = (lastrange - firstrange) - range
      return `${outOfRange} blocks out of range`
    }
  }
}

function produceTipCalculator(decimal) {
  return function (tip) {
    return tip * decimal
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
