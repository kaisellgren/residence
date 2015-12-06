Array.prototype.pushAll = function (iterable) {
  for (const value of iterable) {
    this.push(value)
  }
}
