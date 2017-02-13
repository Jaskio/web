function addVote(json) {
    $.ajax({
        url: "php/add_vote.php",
        type: "POST",
        data: JSON.stringify(json)
    });
}
