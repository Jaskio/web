class RemoveOrder {
    removeOrder(removeID) {
        var jsonObject = {
            id: removeID
        };
        $.ajax({
            url: "php/remove_order.php",
            type: 'POST',
            data: JSON.stringify(jsonObject),
        });
    }

    slideElement(id) {
        $("#" + id).closest('.order-element').addClass("slide-out");
        $("#" + id).hide(500, function() {
            $("#" + id).closest('.order-element').remove();
        });
    }
}
