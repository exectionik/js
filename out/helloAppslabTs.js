function isTriangle(a, b, c) {
    var checker = false;
    if (a * a == b * b + c * c || b * b == a * a + c * c || a * a + b * b == c * c)
        checker = true;
    if (a + b > c && a + c > b && c + b > a)
        checker = true;
    return (checker);
}
console.log(isTriangle(3, 4, 5));
//# sourceMappingURL=helloAppslabTs.js.map