// Layout View for Edit/Add Order
BakeryApp.OrderDetailsLayout = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'w-100',
    template: BakeryApp.templates.order_details_layout,
    regions: {
        contentRegion : '#content-region',
        loaderRegion  : '#loader-region',
        buttonRegion  : '#button-region'
    },
    ui: {
        'cancel' : '.js-cancel',
        'update' : '.js-update'
    },

    triggers: {
        'click @ui.cancel' : "goBack",
        // FIXME:  add in form validation before update call
        'click @ui.update' : "updateOrder"
    },

    onGoBack: function() {
        BakeryApp.router.navigate('/orders', {trigger: true});
    },

    onUpdateOrder: function() {
        BakeryApp.orderContr.updateOrder(this.model, this);
    }
});

// Edit order item view
BakeryApp.EditOrderView = Marionette.ItemView.extend({
    tagName: 'div',

    className: 't-center mw-960 m-center pad-md w-100 d-f fd-r order-details--main',

    template: BakeryApp.templates.order_edit,

    templateHelpers: function() {
        return {
            not_paid: _.bind(function() {
                if(this.model.get('paid') === 'no') { return true; }
                return;
            }, this),
            not_baked: _.bind(function() {
                if(this.model.get('baked') === 'no') { return true; }
                return;
            }, this),
            not_ready: _.bind(function() {
                if(this.model.get('readyForPickup') === 'no') { return true; }
                return;
            }, this),
            not_pickedup: _.bind(function() {
                if(this.model.get('pickedUp') === 'no') { return true; }
                return;
            }, this),
        }
    }
});

// Button View
BakeryApp.OrderEditBtn = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'w-100 t-center',
    template: BakeryApp.templates.order_edit_btns
});

// Checkmark View
BakeryApp.SuccessCheckView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'w-100 t-center pos-r',
    template: BakeryApp.templates.success_check,
    initialize: function() {
        _.delay(_.bind(function() {
            this.remove();
        }, this), 2000);
    }
});


