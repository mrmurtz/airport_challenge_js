describe('Airport', function(){
  var airport;

beforeEach(function(){
  airport = new Airport();
  plane = jasmine.createSpyObj('plane', ['flying']);
});

it("should land a plane at an airport", function(){
  airport.land(plane);
  expect(airport.planes()).toContain(plane);
});

it("should take off a plane", function(){
  airport.land(plane);
  airport.take_off(plane);
  expect(airport.planes()).not.toContain(plane);
});
});
