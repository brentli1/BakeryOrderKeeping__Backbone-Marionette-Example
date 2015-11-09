// BakeryApp Item view for single order
BakeryApp.OrderItemView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'order--wrap w-100',
    template: BakeryApp.templates.order
});

// BakeryApp Collection view for multiple orders
BakeryApp.OrderCollectionView = Marionette.CollectionView.extend({
    initialize: function() {
        this.listenTo(BakeryApp.OrderCollections,'sort',this.render,this);
    },
    tagName: 'ul',
    className: 'orders--wrap w-100',
    childView: BakeryApp.OrderItemView
});

// BakeryApp Layout View for orders list
BakeryApp.OrderListLayout = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'w-100 d-f f-1 fd-c',
    template: BakeryApp.templates.order_layout,
    regions: {
        orders_header: '#orders-header',
        orders_body: '#orders-body',
        orders_create: '#orders-create'
    }
});

// BakeryApp Orders List Header
BakeryApp.OrderListHeaderView = Marionette.ItemView.extend({
    template: BakeryApp.templates.order_header
});

// BakeryApp Loader
BakeryApp.LoaderView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'm-center',
    template: BakeryApp.templates.loader
});

// BakeryApp Create Btn
BakeryApp.CreateBtn = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'm-center',
    template: BakeryApp.templates.order_create_btn
});
