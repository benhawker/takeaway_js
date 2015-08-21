describe("order", function() {
  var order;
  var menu;

  beforeEach(function() {
    menu = new Menu();
    order = new Order();
  });


  describe("viewing the menu", function() {
    it("User can see the menu printed", function() {
      expect(order.showMenu(menu)).toEqual(jasmine.objectContaining({"Pizza": 1,"Pasta": 1, "Water": 1 }))
    });
  });

  describe("adding items to order", function() {
    it("User can add a single item to their order", function() {
      order.addItemsToOrder("Pizza", 1);
      // expect(order.currentOrder).toContain("Pizza");
      expect(order.currentOrder).toEqual(jasmine.objectContaining({"Pizza": 1}))
    });
  });

  
  // [1,2,3,4].include?(4)
  // array.includes(searchElement[, fromIndex])
  // console.log(array.includes(4[, -1]))
  

});




//     //to be completed
//     it("User can add items with multiple quantities to their order", function() {
//       order.addItemsToOrder("Pizza", 2);
//       expect(order.currentOrder).toEqual("//Pizza x 2")
//     });
//   });


//   describe("Checkout", function() {
//     it("user can request checkout and is presented with the correct total amount", function() {
//       order.addItemsToOrder("Pizza", 1);
//       order.calculcateTotal();
//       expect(order.total).toEqual("1");
//     });

//     it("user is presented with success message when correct amount is tendered", function() {
//       order.addItemsToOrder("Pizza", 1);
//       order.calculcateTotal();
//       order.checkout(1);
//       expect(checkout)
//     });






// });

// //   it("should be able to play a Song", function() {
// //     player.play(song);
// //     expect(player.currentlyPlayingSong).toEqual(song);

// //     //demonstrates use of custom matcher
// //     expect(player).toBePlaying(song);
// //   });

// //   describe("when song has been paused", function() {
// //     beforeEach(function() {
// //       player.play(song);
// //       player.pause();
// //     });

// //     it("should indicate that the song is currently paused", function() {
// //       expect(player.isPlaying).toBeFalsy();

// //       // demonstrates use of 'not' with a custom matcher
// //       expect(player).not.toBePlaying(song);
// //     });

// //     it("should be possible to resume", function() {
// //       player.resume();
// //       expect(player.isPlaying).toBeTruthy();
// //       expect(player.currentlyPlayingSong).toEqual(song);
// //     });
// //   });

// //   // demonstrates use of spies to intercept and test method calls
// //   it("tells the current song if the user has made it a favorite", function() {
// //     spyOn(song, 'persistFavoriteStatus');

// //     player.play(song);
// //     player.makeFavorite();

// //     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
// //   });

// //   //demonstrates use of expected exceptions
// //   describe("#resume", function() {
// //     it("should throw an exception if song is already playing", function() {
// //       player.play(song);

// //       expect(function() {
// //         player.resume();
// //       }).toThrowError("song is already playing");
// //     });
// //   });
// // });
