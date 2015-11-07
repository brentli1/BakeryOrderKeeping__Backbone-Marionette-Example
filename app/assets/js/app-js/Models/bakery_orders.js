// BakeryApp Order Model
BakeryApp.OrderItem = Backbone.Model.extend({
    urlRoot: '/assets/php/ajax/orders/edit/'
});

// BakeryApp Order Collection of OrderItems
BakeryApp.OrderCollection = Backbone.Collection.extend({
    model: BakeryApp.OrderItem,

    // sort_key: 'id', // default sort key

    // comparator: function(item) {
    //     return !item.get(this.sort_key);
    // },

    // sortByField: function(fieldName) {
    //     this.sort_key = fieldName;
    //     this.sort();
    // },

    url: function() {
        return '/assets/php/ajax/orders';
    }
});
