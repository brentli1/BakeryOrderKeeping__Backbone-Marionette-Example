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
        'update' : '.js-update',
        'create' : '.js-create'
    },

    triggers: {
        'click @ui.cancel' : 'goBack',
        // FIXME:  add in form validation before update call
        'click @ui.update' : 'saveOrder',
        'click @ui.create' : 'saveOrder'
    },

    onGoBack: function() {
        BakeryApp.router.navigate('/orders', {trigger: true});
    },

    onSaveOrder: function() {
        BakeryApp.orderContr.saveOrder(this.model, this);
    }
});

// Edit order item view
BakeryApp.EditOrderView = Marionette.ItemView.extend({
    onShow: function() {
        // Set the order type UI
        var selected = this.model.get('orderType');
        $('.js-type').val(selected);
    },

    tagName: 'div',

    className: 't-center mw-960 m-center pad-md w-100 d-f fd-r order-details--main',

    template: BakeryApp.templates.order_edit,

    templateHelpers: function() {
        return {
            not_paid: _.bind(function() {
                return this.model.get('paid') === 'no';
            }, this),
            not_baked: _.bind(function() {
                return this.model.get('baked') === 'no';
            }, this),
            not_ready: _.bind(function() {
                return this.model.get('readyForPickup') === 'no';
            }, this),
            not_pickedup: _.bind(function() {
                return this.model.get('pickedUp') === 'no';
            }, this)
        }
    }
});

// Button View
BakeryApp.OrderEditBtn = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'w-100 t-center',
    template: BakeryApp.templates.order_edit_btns
});

BakeryApp.OrderCreateBtn = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'w-100 t-center',
    template: BakeryApp.templates.order_create_btns
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


