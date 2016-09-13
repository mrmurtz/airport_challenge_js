describe('Weather', function(){
  // var weather;


  beforeEach(function(){
    weather = new Weather();
  });

  it("should be sunny", function(){
    spyOn(Math, 'random').and.returnValue(0.7);
    expect(weather.isSafe()).toEqual(true);
  });

  it("should return false in poor conditions", function(){
    spyOn(Math, 'random').and.returnValue(0.3);
      expect(weather.isSafe()).toEqual(false);
  });
});
