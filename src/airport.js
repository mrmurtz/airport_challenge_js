function Airport(weather, capacity) {
  this._weather = weather;
  this._planes = [];
  this._capacity = capacity || 10;
}

Airport.prototype = {
  planes: function() {
  return this._planes;
},


land: function (plane) {
  if (this._planes.length < this._capacity) {
    this._planes.push(plane);
    plane.land();
  }
  else {
    throw new Error('Cannot land, airport is full');
  }
},

take_off: function (plane) {

  if (this._weather.isSafe() === true) {
    plane.take_off();
    this._planes.pop(plane);
  }
  else {
    throw new Error('Cannot take off in stormy weather');
  }
}
};
