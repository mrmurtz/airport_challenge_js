describe('Airport', function(){
  var airport;

beforeEach(function(){
  airport = new Airport();
  plane = jasmine.createSpyObj(['plane']);

});

it("should land a plane at an airport", function(){
  airport.land(plane);
  expect(airport.planes()).toContain(plane);
});
});
