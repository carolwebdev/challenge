var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite um valor maior ou igual a 20.\n", function (size) {

    function hourGlassOddNumberUp(size) {
        size++;
        console.log('#'.repeat(size));
        for (let index = 1; (index) < (size / 2) - 1; index++) {
            console.log(
                '#' + ' '.repeat(index - 1) + '#' + ' '.repeat(size - (index * 2) - 2) + '#' + ' '.repeat(index - 1) + "#"
            );
        }

        console.log('#' + ' '.repeat((size / 2) - 2) + "##" + ' '.repeat((size / 2) - 2) + '#')

        for (let index = ((size / 2) + 1); (index) < (size - 2); index++) {
            console.log(
                '#' + " ".repeat((size) - (index) - 2) + '#' + '#'.repeat(-size - (index * -2)) + '#' + " ".repeat((size) - (index) - 2) + "#"
            );
        }
        console.log('#'.repeat((size))+'\n');
    }

    function hourglassEvenNumberUp(size) {
        size++;
        console.log('#'.repeat(size));
        for (let index = 1; (index) < ((size / 2) - 1); index++) {
            console.log(
                '#' + ' '.repeat(index - 1) + '#' + ' '.repeat(size - (index * 2) - 2) + '#' + ' '.repeat(index - 1) + "#"
            );
        }

        console.log('#' + ' '.repeat((size / 2) - 1) + "#" + ' '.repeat((size / 2) - 1) + '#')


        for (let index = ((size / 2)); (index) < (size - 2); index++) {
            console.log(
                '#' + " ".repeat((size) - (index) - 2) + '#' + '#'.repeat(-size - ((index * -2) - 1)) + '#' + " ".repeat((size) - (index) - 2) + "#"
            );
        }
        console.log('#'.repeat((size))+'\n');
    }

    function hourglassOddNumberDown(size) {
        size++;
        console.log('#'.repeat(size));
        for (let index = 1; (index) < (size / 2) - 1; index++) {
            console.log(
                '#' + ' '.repeat(index - 1) + ' ' + '#'.repeat(size - (index * 2) - 2) + ' ' + ' '.repeat(index - 1) + "#"
            );
        }

        console.log('#' + ' '.repeat((size / 2) - 2) + "##" + ' '.repeat((size / 2) - 2) + '#')

        for (let index = ((size / 2) + 1); (index) < (size - 2); index++) {
            console.log(
                '#' + ' '.repeat((size) - (index) - 2) + '#' + ' '.repeat(-size - (index * -2)) + '#' + ' '.repeat((size) - (index) - 2) + "#"
            );
        }
        console.log('#'.repeat((size))+'\n');
    }

    function hourglassEvenNumberDown(size) {
        size++;
        console.log('#'.repeat(size));
        for (let index = 1; (index) < ((size / 2) - 1); index++) {
            console.log(
                '#' + ' '.repeat(index - 1) + ' ' + '#'.repeat(size - (index * 2) - 2) + ' ' + ' '.repeat(index - 1) + "#"
            );
        }

        console.log('#' + ' '.repeat((size / 2) - 1) + "#" + ' '.repeat((size / 2) - 1) + '#')


        for (let index = ((size / 2)); (index) < (size - 2); index++) {
            console.log(
                '#' + ' '.repeat((size) - (index) - 2) + '#' + ' '.repeat(-size - ((index * -2) - 1)) + '#' + ' '.repeat((size) - (index) - 2) + "#"
            );
        }
        console.log('#'.repeat((size))+'\n');
    }


    if (size % 2 == 0 && size >= 20) {
        hourglassEvenNumberDown(size);
        hourglassEvenNumberUp(size);

    }
    if (size % 2 != 0 && size >= 20) {
        hourglassOddNumberDown(size);
        hourGlassOddNumberUp(size);

    }
    if (size < 20) {
        console.log("O número digitado é menor do que vinte. Digite um número maior ou igual a vinte.")
    }
});
