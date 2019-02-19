module.exports = function (r) {
  return r.reduce(function (p, c) {
    return Object.assign(p, c);
  }, {});
};
