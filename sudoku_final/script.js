const container = document.getElementById("container");
const button = document.getElementById("button");
const message = document.getElementById("message");


for(let i=0; i<81; i++){
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    container.appendChild(input);

    if(
    ((i%9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
    ((i%9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
    ((i%9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i<53)) ||
    ((i%9 == 0 || i % 9 == 1 || i % 9 == 2) && i >53) ||
    ((i%9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)) {
        input.classList.add("color");
    }
}


var sudoku = [	[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,],
				[,,,,,,,,]];

button.addEventListener('click', Validimi);

function Validimi(){

	const inputs = document.getElementsByTagName("input");
	// console.log(inputs[0].value);
	var value = 0;
	for(let i = 0; i<9;i++){
		for(let j = 0; j<9; j++){
			sudoku[i][j] = inputs[value++].value;
			
		}
	}



	
	if(!isValidConfig(sudoku)) {
	
		message.textContent ="Nuk eshte e Sakte!!!";
		message.style.color = "red";
		button.style.backgroundColor = "red";
	}
	else{
		 
		message.textContent = "Sakte!";  
		message.style.color = "green";
		button.style.backgroundColor = "green";
	}

}

function isValidConfig(arr)
	{
		for(let i = 0; i < 9; i++)
	{
		for(let j = 0; j < 9; j++)
		{
			
			
			if (!isValid(arr, i, j))
				return false;
		}
	}
	return true;
	}


function notInRow(arr,row)
	{
	let st = new Set();

	for(let i = 0; i < 9; i++)
	{
		
		
		if (st.has(arr[row][i]) || arr[row][i]>9 || arr[row][i] < 1)
			return false;

		if (arr[row][i] != '.')
			st.add(arr[row][i]);
	}
	return true;
	}
	

	function notInCol(arr,col)
	{
		let st = new Set();

	for(let i = 0; i < 9; i++)
	{
	
		
		if (st.has(arr[i][col]) || arr[i][col]>9 || arr[i][col] < 1)
			return false;

		if (arr[i][col] != '')
			st.add(arr[i][col]);
	}
	return true;
	}
	
	
	function notInBox(arr,startRow,startCol)
	{
		let st = new Set();

	for(let row = 0; row < 3; row++)
	{
		for(let col = 0; col < 3; col++)
		{
			let curr = arr[row + startRow][col + startCol];

			
			if (st.has(curr) || curr>9 || curr<1)
				return false;

			
			if (curr != '')
				st.add(curr);
		}
	}
	return true;
	}
	
	
	
	function isValid(arr,row,col)
	{
		return notInRow(arr, row) && notInCol(arr, col) &&
		notInBox(arr, row - row % 3, col - col % 3);
	}
	
	
	