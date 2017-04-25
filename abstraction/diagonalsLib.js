function numberOfDiagonals(numberOfSides) {
    var totalDiagonals;
    totalDiagonals = 0.5 * numberOfSides * (numberOfSides - 3);
    return totalDiagonals;
}