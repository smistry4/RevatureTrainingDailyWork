var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("You got ".concat(discount, "% discount"));
var points;
var membership;
membership = 'silver';
switch (membership) {
    case 'bronze':
        points = 100;
        break;
    case 'silver':
        points = 500;
        break;
    case 'gold':
        points = 1000;
        break;
    default:
        points = 0;
        break;
}
console.log("You got additional ".concat(points, " points as a ").concat(membership, " member."));
