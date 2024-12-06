$(document).ready(function () {
	$("#main-search-bar").keyup(function () {
		var filter = $(this).val(),
			count = 0;

		$("main article").each(function () {
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).fadeOut();
			} else {
				$(this).show();
				count++;
			}
		});
	});
});
