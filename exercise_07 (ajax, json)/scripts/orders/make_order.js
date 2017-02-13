class MakeOrder {
    makeOrder(json) {
        $.ajax({
            url: "php/make_order.php",
            type: "POST",
            data: JSON.stringify(json),
            success: function(response) {
                addElementToDOM(JSON.parse(response));
            }
        });
    }
}
