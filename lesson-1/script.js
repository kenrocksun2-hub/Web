var btn = document.querySelector('#btn')



function click_btn(params) {
	var p1 = document.querySelector('#p1')
	var isactive = p1.dataset.active

	if (isactive == 'true') p1.setAttribute('data-active', false);
	else p1.setAttribute('data-active', true)
	// console.log(data);

}



btn.onclick = click_btn;