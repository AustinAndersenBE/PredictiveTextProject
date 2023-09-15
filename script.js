const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
input.addEventListener('input', searchHandler);

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const results = [];
	const lowerStr = str.toLowerCase();
	for (const element of fruit){
		const lowerCaseElement = element.toLowerCase();
		if(lowerCaseElement.includes(lowerStr)) {
			results.push(element);
		}
	}
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results);
}

function showSuggestions(results) {

	suggestions.innerHTML = '';

	if (results.length > 0) {

		for (const element of results) {
			const li = document.createElement('li');
			li.textContent = element;

			li.addEventListener('mouseover', function() {
				li.classList.add('highlighted');
			});

			li.addEventListener('mouseout', function() {
				li.classList.remove('highlighted');
			});

			li.addEventListener('click', useSuggestion);

			suggestions.appendChild(li);
		}
	}
}

function useSuggestion(e) {
	const selectedText = e.target.textContent;
	input.value = selectedText;
	suggestions.innerHTML = '';
}
