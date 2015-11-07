// Edit order item view
BakeryApp.EditOrderView = Marionette.ItemView.extend({
    tagName: 'div',

    className: 't-center mw-960 m-center pad-md w-100 d-f fd-r order-details--main',

    template: BakeryApp.templates.order_edit,

    ui: {
        'cancel' : '.js-cancel',
        'update' : '.js-update',
        'fname'  : '.js-fname',
        'lname'  : '.js-lname',
        'email'  : '.js-email'
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
        BakeryApp.orderContr.updateOrder(this.model);
    },

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
