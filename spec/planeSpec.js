describe('Plane', function (){

  var plane;

  beforeEach(function(){
    plane = new Plane();
});

  it("should be in flight by default", function(){
    expect(plane.flying()).toEqual(true);
  });
});
