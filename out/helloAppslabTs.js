function equality(a, b, c) {
    var helper = 0;
    if (a == b)
        helper++;
    if (a == c)
        helper++;
    if (b == c)
        helper++;
    if (helper == 1)
        helper++;
    return (helper);
}
console.log(equality(1, 1, 1));
//# sourceMappingURL=helloAppslabTs.js.map