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

describe('Calulator', function () {

    describe('basic functionlity', function () {
        checkResult("", 0);
        checkResult("42", 42);
    })
    describe('comma-seperated', function () {
        checkResult("1,2", 3);
        checkResult("1,2,3,4", 10);
    })

    describe('new-line', function () {
        checkResult("1\n2\n3", 6);
    })

    describe('mixed-seperator', function () {
        checkResult("1\n2,3", 6);
    })

    // describe('custom-delimiter', () => {
    //     checkResult("//;\n1;2", 3)
    // })

    function checkResult(expression, result) {
        it('Should evaluate"' + expression.replace(/\n/g, "/n") + '" to ' + result, function () {
            expect(calculator.add(expression)).toBe(result);
        })
    }
});

