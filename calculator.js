var calculator = {
    add: function (expression) {
        var pieces = this.getPieces(expression);
        return this.calculateSum(pieces);

    },
    getPieces: function (expression) {
        return expression.split(/,|\n/g);
    },
    calculateSum: function (pieces) {
        var sum = 0;

        for (var i = 0; i < pieces.length; i++) {
            sum += parseInt(pieces[i] || 0)
        }
        return sum;
    }
}

module.exports = calculator;