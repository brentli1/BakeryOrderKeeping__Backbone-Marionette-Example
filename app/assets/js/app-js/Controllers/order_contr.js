BakeryApp.OrderContr = Marionette.Object.extend({
    initialize: function() {
        this.initializeRoutes(BakeryApp.router, this);
    },

    initializeRoutes: function(router) {
        router.on('route:showOrderEdit', _.bind(function(id) {
            this.getOrder(id);
        }, this));

        router.on('route:createNewOrder', _.bind(function() {
            // do magic
        }, this));
    },

    getOrder: function(id) {
        // If orders are not there, get them
        if(!BakeryApp.orders) {
            // Show Preloader
            BakeryApp.mainRegion.show(new BakeryApp.LoaderView);
            // Get data
            BakeryApp.orders = new BakeryApp.OrderCollection();
            BakeryApp.orders.fetch({
                success: _.bind(function(){
                    this.order = BakeryApp.orders.get(id);
                    this.showOrder();
                }, this)
            });
        } else {
            this.order = BakeryApp.orders.get(id);
            this.showOrder();
        }
    },

    showOrder: function() {
        var orderView = new BakeryApp.EditOrderView({
            model: this.order
        });
        BakeryApp.mainRegion.show(orderView);
    }
});