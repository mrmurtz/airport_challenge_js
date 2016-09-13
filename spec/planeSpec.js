describe('Plane', function (){

  var plane;

  beforeEach(function(){
    plane = new Plane();
});

  it("should be in flight by default", function(){
    expect(plane.flying()).toEqual(true);
  });

  it("should change to false when landed", function(){
    plane.land();
    expect(plane.flying()).toEqual(false);
  });

  it("should change to true when take_off", function(){
    plane.take_off();
    expect(plane.flying()).toEqual(true);
  });
});
