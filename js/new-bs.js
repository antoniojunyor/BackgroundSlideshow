$(".new-bs li:first-child").addClass("active");
$(".new-bs-next").on("click", function() {
	var current = $(".new-bs li.active");
	$(".new-bs li").removeClass("active");
	$(current).next().addClass("active");
})