var orderList = new OrderList();
orderList.orderList();
var btnAudio = new ButtonAudio();
var order = new MakeOrder();
var removeOrder = new RemoveOrder();

$(document).on('click', '.remove-btn', function() {
    var id = $(this).attr("id");
    removeOrder.removeOrder(id);
    var audio = document.getElementById('delete-order-audio');
    btnAudio.limitPlayback(audio);
    removeOrder.slideElement(id);
});

$('#order-btn').click(function() {
    var json = {
        name : document.getElementById("name-input").value,
        food : document.getElementById("order-input").value
    };
    order.makeOrder(json);
    $("#name-input, #order-input").val('');
    var audio = document.getElementById('add-order-audio');
    btnAudio.limitPlayback(audio);
});
