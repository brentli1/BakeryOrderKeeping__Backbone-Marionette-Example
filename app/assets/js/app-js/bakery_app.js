var BakeryApp = new Marionette.Application({
    onStart: function() {
        router = new BakeryApp.Router();
        // BakeryApp.orderController = new BakeryApp.OrderController();

        Backbone.history.start();
        this.getData();
    },
    getData: function() {
        var orders = new BakeryApp.OrderCollection();
        orders.fetch({
            success: function(data){
                console.log(data);
            },
            error: function(x,response) {
                console.log('error', response);
            }
        });
    }
});

// BakeryApp Router
BakeryApp.Router = Backbone.Router.extend({
    routes: {
        ''          : 'home',
        'orders'    : 'showOrders'
      }
});