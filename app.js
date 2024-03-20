const checkbox = document.getElementById('checkbox');
const tablesSection = document.querySelector('.tablesSection');
const inventoryItems = [];

function checkIfExists(item, inventoryItems) {
	for (var i = 0; i < inventoryItems.length; i++) {
		if(item == inventoryItems[i]) {
			return true;
		}
	}
}

inputForm.addEventListener('submit', function (e) {
	e.preventDefault();

	
	const item = document.getElementById('item').value;

	
	const quantity = document.getElementById('quantity').value;

	
	if(item.length == 0 || quantity.length == 0) {
		alert("Fill out the form first");
	}

	
	else {

		
		if (checkIfExists(item, inventoryItems)) {
			alert('Item already taken');
		}

		
		else {
			inventoryItems.push(item);
			const trElement = document.createElement('tr');
			const tdElementForItemName = document.createElement('td');
			const tdElementForQty = document.createElement('td');
			const quantityInput = document.createElement('input');
			quantityInput.type = 'number';
			quantityInput.value = quantity;
			tdElementForQty.appendChild(quantityInput);
			tdElementForItemName.textContent = item;
			trElement.appendChild(tdElementForItemName);
			trElement.appendChild(tdElementForQty);
			document.querySelector('table').appendChild(trElement);
		}
	}
})


checkbox.addEventListener('change', function(e) {
	e.preventDefault();
	if(checkbox.checked == true) {
		tablesSection.style.display = "block";
	}
	else {
		tablesSection.style.display = "none";
	}
})






