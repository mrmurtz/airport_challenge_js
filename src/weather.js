function Weather() {

}

Weather.prototype.isSafe = function () {

  if (Math.random() < 0.5) {
    return false;
  }
  else {
    return true;
  }
};
