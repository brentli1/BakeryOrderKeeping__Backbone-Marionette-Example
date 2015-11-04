BakeryApp.OrderListContr = Marionette.Object.extend({
    initialize: function() {
        this.initializeRoutes(BakeryApp.router, this);
    },

    initializeRoutes: function(router) {
        router.on('route:home', function() {
            router.navigate('orders', {
                trigger: true,
                replace: true
            });
        });

        router.on('route:showOrderList', _.bind(function() {
            this.getOrderData();
        }, this));
    },

    getOrderData: function() {
        // Show new layout + show loader in orders_body
        BakeryApp.ordersLayout = new BakeryApp.OrderListLayout();
        BakeryApp.mainRegion.show(BakeryApp.ordersLayout);
        BakeryApp.ordersLayout.orders_header.show(new BakeryApp.OrderListHeaderView);
        // Show Loader
        BakeryApp.ordersLayout.orders_body.show(new BakeryApp.LoaderView);

        BakeryApp.orders = new BakeryApp.OrderCollection();
        BakeryApp.orders.fetch({
            success: _.bind(function(){
                this.showOrders(BakeryApp.orders);
            }, this),
            error: function(c,r) {
                console.log('error', r);
            }
        });
    },

    showOrders: function() {
        var ordersView = new BakeryApp.OrderCollectionView({
            collection: BakeryApp.orders
        });
        BakeryApp.ordersLayout.orders_body.show(ordersView);
    }
});
