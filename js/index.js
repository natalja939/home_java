const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a,b,c);
alert(result);

function solveQuadr(a,b,c) {
    const d = calcD(a,b,c);
    let x1, x2;
    if (d > 0) {
       x1 = (-b + Math.sqrt(d)) / (2*a);
       x2 = (-b - Math.sqrt(d)) / (2*a);
    return 'x1 =' + x1 + ', x2 = ' + x2;
    } else if (d == 0) {
        x1 = -b / (2*a);
        return 'x1 =' + x1;
    } 
    else if (d < 0) {
    return 'There is no valid roots';
    }
}
function calcD(a,b,c) {
    return b * b - 4 * a * c;
}
