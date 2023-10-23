const Utils = {
  calculateNumber: function (type, a, b) {
    a = Math.round(a);
    b = Math.round(b);
    if (b === 0 && type === 'DIVIDE') { return 'Error'; }
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      return Math.round(a) / Math.round(b);
    }
  }
};
module.exports = Utils;
