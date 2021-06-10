$("html").hover(function() {
    $(".firstquest").show();
});

$(".ques1butt").click(function() {
    let first = $(".ques1In").val();
    $(".ans1").append("<p>" + first + " best friends and like ");
    $(".fruitquest").show();

});

$(".fruitbutt").click(function() {
    let fruit = $(".fruitIn").val();
    $(".ans1").append(fruit + " better");
    $(".ans1").show();
});

$(".fruitbutt").click(function() {
    let first = $(".ques1In").val();
    let fruit = $(".fruitIn").val();
    if (first <= 3 && fruit === "Games") {
        $(".ans1").append(". Also, you have a Mango personality!");
    } else if (first <= 3 && fruit === "Playing Sports") {
        $(".ans1").append(". Also, you have a Dragon Fruit personality!");
    } else if (first > 3 && fruit === "Games") {
        $(".ans1").append(". Also, you have a Broccoli personality!");
    } else if (first > 3 && fruit === "Playing Sports") {
        $(".ans1").append(". Also, you have a Yellow Pepper personality!");
    }
});