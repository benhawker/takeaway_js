describe("order", function() {
  var order;
  var menu;

  beforeEach(function() {
    menu = new Menu();
    order = new Order();
  });


  describe("viewing the menu", function() {
    it("User can see the menu printed", function() {
      expect(order.showMenu(menu)).toEqual(jasmine.objectContaining({"Pizza": 1,"Pasta": 2, "Water": 3 }))
    });
  });

  describe("adding items to order", function() {
    it("User can add a single item to their order correctly", function() {
      order.addItemsToOrder("Pizza", 1);
      // expect(order.currentOrder).toContain("Pizza");
      expect(order.currentOrder).toEqual(jasmine.objectContaining({"Pizza": 1}))
    });

    it("User can add multiple items to their order corectly", function() {
      order.addItemsToOrder("Water", 3);
      expect(order.currentOrder).toEqual(jasmine.objectContaining({"Water": 3}))

    });

    it("raises an error if the requested item is not on the menu", function() {
      expect( function(){order.addItemsToOrder("NotOnMenu", 1); } ).toThrow(new Error("That dish is not on the menu."));
    });
  });


  describe("calulcates the total order", function() {
    it("displays the correct order total to the user", function() {
      order.addItemsToOrder("Water", 3);
      order.addItemsToOrder("Pizza", 2);
      order.sumOrder();
      expect(order.orderTotal).toEqual(11)
    });
  });


  describe("User can request checkout", function() {
    it("user can request checkout and is presented with the correct total amount", function() {
      order.addItemsToOrder("Pizza", 1);
      order.sumOrder();
      // currently set to return 30 by default.
      order.checkout(1);
      expect(order.checkout(1)).toEqual("Bill paid"); 
    }); 

    it("user can request checkout and is presented with message if incorrect amount is tendered", function() {
      order.addItemsToOrder("Pizza", 1);
      order.sumOrder();
      // currently set to return 30 by default.
      order.checkout(30);
      expect(order.checkout("wrong number")).toEqual("Please pay correct amount"); 
    }); 
  }); 



});










