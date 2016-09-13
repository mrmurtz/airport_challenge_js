describe('Airport', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
    spyOn(weather, 'isSafe').and.returnValue(true);
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
  });

  it("should land a plane at an airport", function(){
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it("instruct the plane to land", function(){
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("should take off a plane", function(){
    airport.land(plane);
    airport.take_off(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it("should instruct a plane to take_off", function(){
    airport.land(plane);
    airport.take_off(plane);
    expect(plane.take_off).toHaveBeenCalled();
  });

  it('should have a capacity of 10', function(){
    expect(airport._capacity).toEqual(10);
  });



  it('should raise error is airport is full and trying to land a plane', function(){
      for (var i = 0; i < 10; i++) {
        airport.land(plane);
      }
      expect(function(){airport.land(plane);}).toThrowError('Cannot land, airport is full');
  });
});

describe('BadWeather', function(){

  beforeEach(function(){
    weather = new Weather();
    spyOn(weather, 'isSafe').and.returnValue(false);
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
  });

  it("should raise an error if weather is stormy", function(){
    airport.land(plane);
    expect(function(){airport.take_off(plane);}).toThrowError('Cannot take off in stormy weather');
  });
});
