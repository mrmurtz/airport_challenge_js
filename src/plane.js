function Plane() {
  this._flying = true;
}

Plane.prototype = {

  flying: function(){
    return this._flying;
  },

  land: function(){
    this._flying = false;
  },

  take_off: function(){
    this._flying = true;
  }

};
