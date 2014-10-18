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
var x1 = [2,3]; // !!! change first X here !!!
var x2 = [3,3]; // !!! change second X here !!!
var x3 = [1,4]; // !!! change third X  here !!!
var start = [2,4];  // !!! change starting point here !!!
var end = [1,3];  // !!! change ending point here !!!
///////////////////////////////////////////////////////////////////////////////////////////////////////

var indexMetrix = [];
var inputMetrix = [];
var tempIndex = start;
var vTemp = [];
var sTemp = [];
var step = 0;
var endFound = false;
var xFound = true;
var answerArr = [];
var answer = 0;

createIndexMetrix();
createInputMetrix();
traverse();
findShortest();
console.log("Here S is the starting point and E is the Ending point. Shortest path is " + answer);


function traverse()
{
	for(var i =parseInt(start[0]); i>0; i--) // go up
	{
		for(var j =parseInt(start[1]); j>0; j--) //go left
		{
			tempIndex = [i,j];
			console.log("-------------------------------check row at : " + i + "-------------------------------");
			checkX(tempIndex);
			checkEndPoint(tempIndex, step);
			console.log("At : " + tempIndex + " step : " + step );
			if(xFound)
			{
				console.log("BREAK THIS ROW !" + i);
				break;
			}
			else
			{
				if(endFound == true && xFound == false)
				{
					console.log("************ Found Shortest !" + answer);
				}
					if(j<start[1])// check vertical
					{
						checkInsideVertical(step, i, j);
					}	
				step++;
			}
		}
		step = 0;
		step++;
	}
	if(tempIndex.toString() != end.toString()) 
	{
		step = 0;
		console.log("GO down ! ");
		for(var i =parseInt(start[0]); i<=5; i++) // go down
		{
			for(var j =parseInt(start[1]); j<=5; j++) // go right
			{
				tempIndex = [i,j];
				console.log("-------------------------------check row at : " + i + "-------------------------------");
				checkX(tempIndex);
				checkEndPoint(tempIndex, step);
				console.log("At : " + tempIndex + " step : " + step );
				if(xFound)
				{
					console.log("BREAK THIS ROW !" + i);
					break;
				}
				else
				{
					if(endFound == true && xFound == false)
					{
						console.log("************ Found Shortest !" + answer);
					}
						if(j>start[1])
						{
							checkInsideVertical(step, i, j);
						}	
					step++;
				}
			}
			step = 0;
			step++;
		}
	}		
}
function checkInsideVertical(step, i, j)
{
	sTemp = step;
	for(var k = i-1; k>0; k--) // check vertical up
	{
		sTemp++;
		vTemp = [k,j];
		checkX(vTemp);
		checkEndPoint(vTemp, sTemp);
		console.log("At : " + vTemp + " step : " + sTemp );
		if(xFound)
		{
			onsole.log("BREAK THIS Column !" + k);
			break;
		}
		else
		{
			if(endFound == true && xFound == false)
			{
				console.log("************ Found Shortest !" + answer);
			}
			if(k < i)
			{
				checkInsideHorizontal(step, k, j)
			}	
		}
	}
	sTemp = step;
	for(var k = i+1; k<=5; k++) // check vertical down
	{
		sTemp++;
		vTemp = [k,j];
		checkX(vTemp);
		checkEndPoint(vTemp, sTemp);
		console.log("At : " + vTemp + " step : " + sTemp );
		if(xFound)
		{
			onsole.log("BREAK THIS Column !" + k);
			break;
		}
		else
		{
			if(endFound == true && xFound == false)
			{
				console.log("************ Found Shortest ! " + answer);
			}
			if(k > i)
			{
				checkInsideHorizontal(step, k, j)
			}
		}
	}
}
function checkInsideHorizontal(step, k, j)
{
	sTemp = step;
	for(var l = j-1; l>0; l--) // check vertical up
	{
		sTemp++;
		vTemp = [k,l];
		checkX(vTemp);
		checkEndPoint(vTemp, sTemp);
		console.log("At : " + vTemp + " step : " + sTemp );
		if(endFound == true && xFound == false)
		{
			console.log("************ Found Shortest !" + answer);
		}
	}
	sTemp = step;
	for(var l = j+1; l<=5; l++) // check vertical down
	{
		sTemp++;
		vTemp = [k,l];
		checkX(vTemp);
		checkEndPoint(vTemp, sTemp);
		console.log("At : " + vTemp + " step : " + sTemp );
		if(endFound == true && xFound == false)
		{
			console.log("************ Found Shortest ! " + answer);
		}
	}
}

function checkX(tempIndex)
{
	if(tempIndex.toString() == x1.toString())
	{
		console.log("///////////////////////////////////////////Found X1 AT : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() == x2.toString())
	{
		console.log("///////////////////////////////////////////Found X2 AT : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() == x3.toString())
	{
		console.log("///////////////////////////////////////////Found X3 AT : "+tempIndex); 
		xFound = true;
	}
	if(tempIndex.toString() != x1.toString() && tempIndex.toString() != x2.toString() && tempIndex.toString() != x3.toString())
	{
		xFound = false;
	}
}

function checkEndPoint(tempIndex, step)
{
	if(tempIndex.toString() == end.toString()) //if end found
	{
		console.log("*******************************************Found end point ! Step : " + step + " END POINT AT : " +tempIndex);
		answerArr.push([step]);
		endFound = true;
	}
	else
	{
		endFound = false;
	}
}
function findShortest()
{
	answer = Math.min.apply(Math, answerArr);
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
				indexMetrix[i][j] = ["X"];
			}
			else if(indexMetrix[i][j].toString() == start.toString())
			{
				indexMetrix[i][j] = ["S"];
			}
			else if(indexMetrix[i][j].toString() == end.toString())
			{
				indexMetrix[i][j] = ["E"];
			}
			else
			{
				indexMetrix[i][j] = [1];
			}
		}
	}
}