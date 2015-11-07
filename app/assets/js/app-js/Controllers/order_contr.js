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
        var layoutView = new BakeryApp.OrderDetailsLayout({
                model: this.order
            }),
            orderView = new BakeryApp.EditOrderView({
                model: this.order
            }),
            orderBtnView = new BakeryApp.OrderEditBtn({
                model: this.order
            });
        BakeryApp.mainRegion.show(layoutView);
        layoutView.getRegion('contentRegion').show(orderView);
        layoutView.getRegion('buttonRegion').show(orderBtnView);
    },

    toggleFormElements: function(disable, view) {
        if(disable) {
            view.getRegion('loaderRegion').show(new BakeryApp.LoaderView());
            $('input').prop('disabled', true);
            $('select').prop('disabled', true);
            $('div.order--btn').addClass('order--btn_disabled');
            $('div.order--btn').addClass('order--btn_disabled');
        }
        view.getRegion('loaderRegion').show(new BakeryApp.SuccessCheckView());
        $('input').prop('disabled', false);
        $('select').prop('disabled', false);
        $('div.order--btn').removeClass('order--btn_disabled');
        $('div.order--btn').removeClass('order--btn_disabled');
    },

    updateOrder: function(model, view) {
        this.toggleFormElements(true, view);
        var $fname = $('.js-fname').val(),
            $lname = $('.js-lname').val(),
            $email = $('.js-email').val();
        model.set('orderFName', $fname);
        model.set('orderLName', $lname);
        model.set('orderEmail', $email);

        model.save(null, {
            success: _.bind(function(model, response){
                this.toggleFormElements(false, view);
            }, this)
        });
    }
});