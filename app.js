$(".shopping-list").append("<li class='item'</li>")

$(".item").remove()


// on click 

$('.add-item').on("click", (e) => {
	console.log('There has been a click')
	$("<p>").addClass("test-class").text("new text when button is hit").appendTo($("body"))
})


