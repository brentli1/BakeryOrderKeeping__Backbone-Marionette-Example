// BakeryApp Order Model
BakeryApp.OrderItem = Backbone.Model.extend({});

// BakeryApp Order Collection of OrderItems
BakeryApp.OrderCollection = Backbone.Collection.extend({
    model: BakeryApp.OrderItem,
    url: function() {
        return '/assets/php/ajax/orders';
    }
});