


$('.add-item').on("click", (e) => {
	console.log('There has been a click')
	e.preventDefault();
    const listItem = $(".item-input").val();
	const itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
  	// if item is an empty string then post a message saying it needs to be updated
  	if(listItem === "") {
  		// or message that says please enter a value 
  		return null
  	} else {
  		 // else prepend it 
	  	$(".shopping-list").prepend(itemHtml);
	  	$(".item-input").val("");
  	}

  	
})

$('.shopping-list').on("click", '.item-remove', (e) => {
	$(e.currentTarget).parent().remove();
})

$('.shopping-list').on("click", 'item-check', (e) => {
	  $(event.currentTarget).toggleClass('complete');
})

