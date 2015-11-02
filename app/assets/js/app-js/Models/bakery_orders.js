// BakeryApp Order Model
BakeryApp.OrderItem = Backbone.Model.extend({
    defaults: {
        'id': null,
        'return2' : null
    }
});

// BakeryApp Order Collection of OrderItems
BakeryApp.OrderCollection = Backbone.Collection.extend({
    model: BakeryApp.OrderItem,
    url: function() {
        return 'http://localhost:8888/assets/php/ajax/orders';
      }
});