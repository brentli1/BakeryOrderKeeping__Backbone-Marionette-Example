var BakeryApp = new Marionette.Application({
    onStart: function() {
        // Initialize router
        BakeryApp.router = new BakeryApp.Router();

        // Initialize Controllers
        BakeryApp.orderListContr = new BakeryApp.OrderListContr();
        BakeryApp.orderContr = new BakeryApp.OrderContr();

        // Start Backbone History
        Backbone.history.start();
    }
});

// Add main region
BakeryApp.addRegions({
    mainRegion: '#main-region'
});

// BakeryApp Router
BakeryApp.Router = Backbone.Router.extend({
    routes: {
        ''                : 'home',
        'orders'          : 'showOrderList',
        'orders/edit/:id' : 'showOrderEdit',
        'orders/new'      : 'createNewOrder'
      }
});