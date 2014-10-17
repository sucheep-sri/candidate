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
var x2 = [4,4]; // !!! change second X here !!!
var x3 = [5,3]; // !!! change third X  here !!!
var start = [4,5];  // !!! change starting point here !!!
var end = [4,2];  // !!! change ending point here !!!
var indexMetrix = [];
var inputMetrix = [];

var tempIndex = start;
var vTemp = [];
var sTemp = [];
var step = 0;
var block = 0;

for(var i =0; i<=4; i++) 
{
	indexMetrix[i] = [];
	for(var j=1; j<=5; j++) 
	{
		if(parseInt(i)+1)
		indexMetrix[i].push([i+1, j]);
	}
}

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

	for(var i =parseInt(start[0]); i>0; i--) // go left in horizontal !
	{
		console.log("*****check i at : " + i);
		for(var j =parseInt(start[1]); j>0; j--)
		{
			tempIndex = [i,j];
			console.log("*****check  at : " + tempIndex);
			if(tempIndex.toString() == end.toString()) //if end found
			{
				console.log("Found end point ! Step : "+step);
			}

			if(tempIndex.toString() != end.toString()) // if end unfound
			{
				if(j<start[1])// check vertical
				{
					sTemp = step;
					for(var k = i-1; k>0; k--) // check vertical up
					{
						sTemp++;
						vTemp = [k,j];
						console.log("At : " + vTemp + " step : " + sTemp);
						if(tempIndex.toString() == end.toString()) //if end found
						{
							console.log("Found end point ! Step : "+step);
						}
					}
					sTemp = step;
					for(var l = i+1; l<=5; l++) // check vertical down
					{
						sTemp++;
						vTemp = [l,j];
						console.log("At : " + vTemp + " step : " + sTemp);
						if(tempIndex.toString() == end.toString()) //if end found
						{
							console.log("Found end point ! Step : "+step);
						}
					}
				}	
			}

			step++;
		}
		step = 0;
		step++;
	}
	if(tempIndex.toString() != end.toString())// go right in horizontal !
	{
		step = 0;
		console.log("GO RIGHT ! ");
		for(var i =parseInt(start[0]); i<=5; i++) 
		{
			for(var j =parseInt(start[1]); j<=5; j++)
			{
				tempIndex = [i,j];
				console.log("At : " + tempIndex + " step : " + step);

				if(tempIndex.toString() == end.toString()) //if end found
				{
					console.log("Found end point ! Step : "+step);
				}
				else if(tempIndex.toString() != end.toString()) // if end unfound
				{
					if(j>start[1])
					{
						sTemp = step;
						for(var k = i-1; k>0; k--) // check vertical up
						{
							sTemp++;
							vTemp = [k,j];
							console.log("At : " + vTemp + " step : " + sTemp);
							if(tempIndex.toString() == end.toString()) //if end found
							{
								console.log("Found end point ! Step : "+step);
							}
						}
						sTemp = step;
						for(var l = i+1; l<=5; l++) // check vertical down
						{
							sTemp++;
							vTemp = [l,j];
							console.log("At : " + vTemp + " step : " + sTemp);
							if(tempIndex.toString() == end.toString()) //if end found
							{
								console.log("Found end point ! Step : "+step);
							}
						}
					}	
				}
				step++;
			}
			step = 0;
			step++;
		}
	}		

	

//console.log("S to E is : " + step);

function checkX(tempIndex, x1, x2, x3)
{
	/*if(tempIndex.toString() == x1.toString())
	{
		return false;
	}*/
	if(tempIndex.toString() == x2.toString())
	{
		return false;
	}
	else
	{
		return true;
	}
	/*if(tempIndex.toString() == x3.toString())
	{
		return false;
	}*/
	
}