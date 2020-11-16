var getTableDataAJAX = function() {

	var getTableData = new XMLHttpRequest();

	getTableData.onreadystatechange = function() {
		if(getTableData.readyState === 4) {
			var tableInfo     = JSON.parse(getTableData.responseText);
			var tableHeading  = tableInfo.tableHeading;
			var tableCellsPets   = tableInfo.tableCellsPets;
			var tableCellsPeople   = tableInfo.tableCellsPeople;
			var tableCellsPeople1   = tableInfo.tableCellsPeople1;
			var tableCellsPeople2   = tableInfo.tableCellsPeople2;
			var tableCellsPeople3   = tableInfo.tableCellsPeople3;
			var tableCellsPeople4   = tableInfo.tableCellsPeople4;
			var tableCellsPeople5   = tableInfo.tableCellsPeople5;
			var tableCellsPeople6   = tableInfo.tableCellsPeople6;
			var tableCellsPeople7   = tableInfo.tableCellsPeople7;
			var tableCellsPeople8   = tableInfo.tableCellsPeople8;
			var tableCellsPeople9   = tableInfo.tableCellsPeople9;










			var createTable = function() {
				//Create Table and Heading Rows 
				var newTable = document.createElement('table');
				var tableHeadingRow = document.createElement('tr');
				var tableHeader = document.createElement('th');
				tableHeadingRow.appendChild(tableHeader);

				//Create first row with header and data
				var tableRowFirst = document.createElement('tr');
				var tableRowFirstHead = document.createElement('th');
				tableRowFirst.appendChild(tableRowFirstHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var petData = document.createElement('td');

					// append Heading to table
					tableRowFirst.appendChild(petData);

					//set new heading text content to json information
					petData.textContent = tableCellsPets[i];
				};

				var tableRowSecond = document.createElement('tr');
				var tableRowSecondHead = document.createElement('th');
				tableRowSecond.appendChild(tableRowSecondHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData = document.createElement('td');

					// append Heading to table
					tableRowSecond.appendChild(peopleData);

					//set new heading text content to json information
					peopleData.textContent = tableCellsPeople[i];
				};



				var tableRowthird = document.createElement('tr');
				var tableRowthirdHead = document.createElement('th');
				tableRowthird.appendChild(tableRowthirdHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData1 = document.createElement('td');

					// append Heading to table
					tableRowthird.appendChild(peopleData1);

					//set new heading text content to json information
					peopleData1.textContent = tableCellsPeople1[i];
				};




				var tableRowforth = document.createElement('tr');
				var tableRowforthHead = document.createElement('th');
				tableRowforth.appendChild(tableRowforthHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData2 = document.createElement('td');

					// append Heading to table
					tableRowforth.appendChild(peopleData2);

					//set new heading text content to json information
					peopleData2.textContent = tableCellsPeople2[i];
				};



				var tableRowfifth = document.createElement('tr');
				var tableRowfifthHead = document.createElement('th');
				tableRowfifth.appendChild(tableRowfifthHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData3 = document.createElement('td');

					// append Heading to table
					tableRowfifth.appendChild(peopleData3);

					//set new heading text content to json information
					peopleData3.textContent = tableCellsPeople3[i];
				};



				var tableRowsixth = document.createElement('tr');
				var tableRowsixthHead = document.createElement('th');
				tableRowsixth.appendChild(tableRowsixthHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData4 = document.createElement('td');

					// append Heading to table
					tableRowsixth.appendChild(peopleData4);

					//set new heading text content to json information
					peopleData4.textContent = tableCellsPeople4[i];
				};




				var tableRowseventh = document.createElement('tr');
				var tableRowseventhHead = document.createElement('th');
				tableRowseventh.appendChild(tableRowseventhHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData5 = document.createElement('td');

					// append Heading to table
					tableRowseventh.appendChild(peopleData5);

					//set new heading text content to json information
					peopleData5.textContent = tableCellsPeople5[i];
				};



				var tableRoweighth = document.createElement('tr');
				var tableRoweighthHead = document.createElement('th');
				tableRoweighth.appendChild(tableRoweighthHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData6 = document.createElement('td');

					// append Heading to table
					tableRoweighth.appendChild(peopleData6);

					//set new heading text content to json information
					peopleData6.textContent = tableCellsPeople6[i];
				};




				var tableRownineth = document.createElement('tr');
				var tableRowninethHead = document.createElement('th');
				tableRownineth.appendChild(tableRowninethHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData7 = document.createElement('td');

					// append Heading to table
					tableRownineth.appendChild(peopleData7);

					//set new heading text content to json information
					peopleData7.textContent = tableCellsPeople7[i];
				};




				var tableRowtenth = document.createElement('tr');
				var tableRowtenthHead = document.createElement('th');
				tableRowtenth.appendChild(tableRowtenthHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData8 = document.createElement('td');

					// append Heading to table
					tableRowtenth.appendChild(peopleData8);

					//set new heading text content to json information
					peopleData8.textContent = tableCellsPeople8[i];
				};



				var tableRoweleventh = document.createElement('tr');
				var tableRoweleventhHead = document.createElement('th');
				tableRoweleventh.appendChild(tableRoweleventhHead);

				for (i = 1; i < tableCellsPets.length; i++) {
					//create new heading
					var peopleData9 = document.createElement('td');

					// append Heading to table
					tableRoweleventh.appendChild(peopleData9);

					//set new heading text content to json information
					peopleData9.textContent = tableCellsPeople9[i];
				};





				// Add classes to elements
				newTable.classList.add('jsTable');
				tableHeader.classList.add('jsTableHead');
				tableRowFirstHead.classList.add('jsTableRowHead');
				tableRowSecondHead.classList.add('jsTableRowHead');
				tableRowthirdHead.classList.add('jsTableRowHead');
				tableRowforthHead.classList.add('jsTableRowHead');
				tableRowfifthHead.classList.add('jsTableRowHead');
				tableRowsixthHead.classList.add('jsTableRowHead');
				tableRowseventhHead.classList.add('jsTableRowHead');
				tableRoweighthHead.classList.add('jsTableRowHead');
				tableRowninethHead.classList.add('jsTableRowHead');
				tableRowtenthHead.classList.add('jsTableRowHead');
				tableRoweleventhHead.classList.add('jsTableRowHead');










				//Add text content and colspan attribute to tableHeader
				tableHeader.textContent = tableHeading;
				tableHeader.setAttribute("colspan", "6");

				//Add text content to row headings
				tableRowFirstHead.textContent = tableCellsPets[0]
				tableRowSecondHead.textContent = tableCellsPeople[0];
				tableRowthirdHead.textContent = tableCellsPeople1[0];
				tableRowforthHead.textContent = tableCellsPeople2[0];
				tableRowfifthHead.textContent = tableCellsPeople3[0];
				tableRowsixthHead.textContent = tableCellsPeople4[0];
				tableRowseventhHead.textContent = tableCellsPeople5[0];
				tableRoweighthHead.textContent = tableCellsPeople6[0];
				tableRowninethHead.textContent = tableCellsPeople7[0];
				tableRowtenthHead.textContent = tableCellsPeople8[0];
				tableRoweleventhHead.textContent = tableCellsPeople9[0];










				//Append table to DOM
				document.body.appendChild(newTable);

				//Append rows to new table
				newTable.appendChild(tableHeadingRow);
				newTable.appendChild(tableRowFirst);
				newTable.appendChild(tableRowSecond);
				newTable.appendChild(tableRowthird);
				newTable.appendChild(tableRowforth);
				newTable.appendChild(tableRowfifth);
				newTable.appendChild(tableRowsixth);
				newTable.appendChild(tableRowseventh);
				newTable.appendChild(tableRoweighth);
				newTable.appendChild(tableRownineth);
				newTable.appendChild(tableRowtenth);
				newTable.appendChild(tableRoweleventh);









			}();
		};
	};
	getTableData.open("GET", "petsandpeople.json", true);
	getTableData.send();
};

var wrapperDiv = document.querySelector('div');
var AJAXbutton = document.getElementById('button');

AJAXbutton.addEventListener('click', getTableDataAJAX);