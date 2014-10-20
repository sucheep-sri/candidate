/*
In put the 3 of 'X' by index at x1, x2, x3 and input stating and ending point by index at start and end
/////////////////
[1,1][1,2][1,3][1,4][1,5]
[2,1][2,2][2,3][2,4][2,5]
[3,1][3,2][3,3][3,4][3,5]
[4,1],[4,2][4,3][4,4],[4,5]
[5,1],[5,2],[5,3],[5,4],[5,5]
////////////////
*/
/*********************** INPUT******************/
var x1 = [2,3]; // !!! change first X here !!!
var x2 = [3,3]; // !!! change second X here !!!
var x3 = [1,4]; // !!! change third X  here !!!
var start = [2,4];  // !!! change starting point here !!!
var end = [1,3];  // !!! change ending point here !!!
/*********************** INPUT******************/





var indexMetrix = [];
var inputMetrix = [];
var vTemp = [];
var step = 0;
var endFound = false;
var xFound = true;
var answerArr = [];
var answer = 0;

createIndexMetrix();
createInputMetrix();
traverse();
findShortest();

console.log(inputMetrix);
console.log("Here S is the starting point and E is the Ending point. Shortest path is " + answer);


function traverse()
{
	for(var i =parseInt(start[0]); i>0; i--) // go up
	{	
			//console.log("UP");
			goLeft(i, step);
			goRight(i, step);

		step++;
	}
	step = 0;
	//console.log("                         ------------------------- END UP -----------------------");
	for(var i =parseInt(start[0]); i<=5; i++) // go down
	{	
			//console.log("DOWN");
			goLeft(i, step);
			goRight(i,step);

		step++;
	}
}


function goLeft(i, step)
{
	var tempIndex = [];
	var stepTemp = [];
	var tempIndex = start;
	stepTemp = step;
	for(var j =parseInt(start[1]); j>0; j--) //go left
	{
		tempIndex = [i,j];
		checkX(tempIndex);
		//console.log("    LEFT  at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
			//console.log("BREAK THIS ROW !" + j);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		up_firstLevel(i, j, stepTemp);
		down_firstLevel(i, j, stepTemp);

		stepTemp++;
	}
}
function goRight(i,step)
{
	var tempIndex = [];
	var stepTemp = [];
	var tempIndex = start;
	stepTemp = step;
	for(var j =parseInt(start[1]); j<=5; j++) // go right
	{
		tempIndex = [i,j];
		checkX(tempIndex);
		//console.log("    RIGHT  at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
			//console.log("BREAK THIS ROW !" + j);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		up_firstLevel(i, j, stepTemp);
		down_firstLevel(i, j, stepTemp);

		stepTemp++;
	}
}

function up_firstLevel(row, col, step)
{
	var tempIndex = [];
	var stepTemp = [];
	stepTemp = step;
	for(var i = row; i>0; i--)
	{
		tempIndex = [i, col];
		checkX(tempIndex);
		//console.log("          UP    at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
			//console.log("BREAK THIS COLUMN !" + i);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		left_secondLevel(i, col, stepTemp);
		right_secondLevel(i, col, stepTemp);
		stepTemp++;
	}
}
function down_firstLevel(row, col, step)
{
	var tempIndex = [];
	var stepTemp = [];
	stepTemp = step;
	for(var i = row; i<=5; i++)
	{
		tempIndex = [i, col];
		checkX(tempIndex);
		//console.log("          DOWN  at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
			//console.log("BREAK THIS COLUMN !" + i);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		left_secondLevel(i, col, stepTemp);
		right_secondLevel(i, col, stepTemp);
		stepTemp++;
	}
}

function left_secondLevel(row, col, step)
{
	var tempIndex = [];
	var stepTemp = [];
	stepTemp = step;
	for(var j = col; j>0; j--)
	{
		tempIndex = [row, j];
		checkX(tempIndex);
		//console.log("                    LEFT  at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
		//	console.log("BREAK THIS ROW !" + j);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		stepTemp++;
	}
}
function right_secondLevel(row, col, step)
{
	var tempIndex = [];
	var stepTemp = [];
	stepTemp = step;
	for(var j = col; j<=5; j++)
	{
		tempIndex = [row, j];
		checkX(tempIndex);
		//console.log("                    RIGHT  at : " + tempIndex + " step : " + stepTemp );
		if(xFound)
		{
			//console.log("BREAK THIS ROW !" + j);
			break;
		}
		checkEndPoint(tempIndex, stepTemp);
		stepTemp++;
	}
}

function checkEndPoint(tempIndex, step)
{
	if(tempIndex.toString() == end.toString()) //if end found
	{
		//console.log("***************************Found end point ! Step : " + step + " END POINT AT : " +tempIndex);
		answerArr.push([step]);
	}
}
function findShortest()
{
	answer = Math.min.apply(Math, answerArr);
}
function checkX(tempIndex)
{
	if(tempIndex.toString() == x1.toString())
	{
	//	console.log(" !!!!! Found X1 at : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() == x2.toString())
	{
	//	console.log(" !!!!! Found X2 at : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() == x3.toString())
	{
	//	console.log(" !!!!! Found X3 at : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() != x1.toString() && tempIndex.toString() != x2.toString() && tempIndex.toString() != x3.toString())
	{
		xFound = false;
	}
}
function createIndexMetrix()
{
	for(var i =0; i<=4; i++) 
	{
		indexMetrix[i] = [];
		for(var j=1; j<=5; j++) 
		{
			if(parseInt(i)+1)
			indexMetrix[i].push([i+1, j]);
		}
	}
}
function createInputMetrix()
{
	for(var i =0; i<=indexMetrix.length-1; i++)
	{
		inputMetrix[i] = [];
		for(var j =0; j<=indexMetrix.length-1; j++)
		{
			if(indexMetrix[i][j].toString() == x1.toString() || indexMetrix[i][j].toString() == x2.toString() || indexMetrix[i][j].toString() == x3.toString())
			{
				inputMetrix[i][j] = ["X"];
			}
			else if(indexMetrix[i][j].toString() == start.toString())
			{
				inputMetrix[i][j] = ["S"];
			}
			else if(indexMetrix[i][j].toString() == end.toString())
			{
				inputMetrix[i][j] = ["E"];
			}
			else
			{
				inputMetrix[i][j] = [1];
			}
		}
	}
}