// Testing the main file
describe(".ajax(done, before)", function() {
  
  it("should be defined", function() {
    expect(typeof base.ajax).to.equal('function');
  });
  
  it("calls before", function(next) {
    u('form.login').ajax(function(err, body, xhr){
      expect(!!xhr).to.equal(true);
      next();
    });
    
    var event = document.createEvent("Event");
    event.initEvent("submit", false, true); 
    // args: string type, boolean bubbles, boolean cancelable
    u('form.login').first().dispatchEvent(event);
  });
});
