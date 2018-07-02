const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a,b,c);
alert(result);

function solveQuadr(a,b,c) {
    const d = calcD(a,b,c);
    
    if(d>0) {
        const x1 = (- b - Math.sqrt(d))/(2 * a);
        const x2 = (- b + Math.sqrt(d))/(2 * a);
        return 'x1 = ' + x1,' x2= ' + x2;
    }
    if(d==0) {
        x = -b / 2 * a;
        return 'x = ' + x;
    }
    if(d<0) {
        
    }
}
function calcD(a,b,c) {
    return b * b - 4 * a * c;
}
