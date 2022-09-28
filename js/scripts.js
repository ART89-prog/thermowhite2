// Маска ввода
$(() => {
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	$('body').on('click', '.modal_link', function (e) {
	    e.preventDefault()

	    $.fancybox.close(true)

	    $.fancybox.open({
	        src: $(this).data('content'),
	        type: 'inline',
	        touch: false
	    })
	})

})
  
