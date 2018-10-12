function nullPunkt(a, b, c) {
  var tallUnderKvadratrot = Math.pow(b, 2) - 4 * a * c;
  if (tallUnderKvadratrot < 0) {
    return false;
  } else {
    var pluss = (-b+Math.sqrt(tallUnderKvadratrot))/(2*a);
    var minus = (-b-Math.sqrt(tallUnderKvadratrot))/(2*a);

    return([pluss, minus]);
  }
}
