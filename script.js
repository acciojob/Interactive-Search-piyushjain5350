function activeSearch(){
	let searchComponent = document.getElementById('searchComponent');
	let searchInput = document.getElementById('searchInput');

	if(searchComponent && searchInput)
	{
		searchComponent.classList.add('active');
		searchInput.focus();
	}
}