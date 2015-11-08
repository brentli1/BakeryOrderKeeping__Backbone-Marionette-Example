// BakeryApp Order Model
BakeryApp.OrderItem = Backbone.Model.extend({
    defaults: {
        orderType: 'null',
        paid: 'no',
        baked: 'no',
        readyForPickup: 'no',
        pickedUp: 'no'
    },

    methodUrl:  function(method){
        if(method == "create"){
            return "/assets/php/ajax/orders/create";
        } else if(method == "update"){
            return "/assets/php/ajax/orders/edit/" + this.attributes.id;
        }
        return false;
    },

    sync: function(method, model, options) {
        if (model.methodUrl && model.methodUrl(method.toLowerCase())) {
            options = options || {};
            options.url = model.methodUrl(method.toLowerCase());
        }
        Backbone.sync(method, model, options);
    }
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
