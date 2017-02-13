function addElementToDOM(jsonObject) {
$("#orders-list").append("<div class='order-element'> " +
                            "<span>Name: " +
                                "<span class='list-span'>" +jsonObject.name+ "</span><br>" +
                                    "Food: " +
                                    "<span class='list-span'>" +jsonObject.food+ "</span>" +
                                "</span>" +
                                "<button id='" +jsonObject.id+ "' class='remove-btn'>Delete</button>" +
                         "</div>");
}
