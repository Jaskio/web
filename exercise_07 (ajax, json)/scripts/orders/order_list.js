class OrderList {
    orderList() {
        $.ajax({
            url: "php/list_orders.php",
            type: 'GET',
            success: function(orders) {
                var myOrders = JSON.parse(orders);
                myOrders.forEach(function(order) {
                    addElementToDOM(order);
                });
            }
        });
    }
}
