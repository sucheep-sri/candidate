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
var x1 = [3,3]; // !!! change first X here !!!
var x2 = [4,4]; // !!! change second X here !!!
var x3 = [5,3]; // !!! change third X  here !!!
var start = [4,5];  // !!! change starting point here !!!
var end = [4,2];  // !!! change ending point here !!!
var indexMetrix = [];
var inputMetrix = [];

var tempIndex = start;
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


//while(tempIndex != end)
//{
	/*for(var i =parseInt(start[0]); i<=5; i++)
	{
		/*for(var j =parseInt(start[1]); j<=5; j++)
		{
			tempIndex = [i,j];
			if(tempIndex.toString() != x1.toString() || tempIndex.toString() != x2.toString() || tempIndex.toString() != x3.toString())
			{
				step++;
			}
			if(tempIndex.toString() == x1.toString() )
			{
				step = 0;
				j=0;
			}
			if(tempIndex.toString() == x2.toString() )
			{
				step = 0;
				j=0;
			}
			if(tempIndex.toString() == x3.toString() )
			{
				step = 0;
				j=0;
			}
		}
		console.log("tempIndex of plus : " + tempIndex);
	}*/

	for(var i =parseInt(start[0]); i>0; i--)
	{
		step = parseInt(start[0])-parseInt(i);

		for(var j =parseInt(start[1]); j>0; j--)
		{
			tempIndex = [i,j];

			//step = doTraverse(step, tempIndex, x1, x2, x3, i, j);

			if(j < parseInt(start[0]) && i < parseInt(start[1]))
			{
				for(var k = i; k>0; k--)
				{
					tempIndex = [i,k];
					console.log(" step : " + step +"each column at : "+tempIndex);
				}
			}
			if(tempIndex.toString() != x1.toString() || tempIndex.toString() != x2.toString() || tempIndex.toString() != x3.toString())
			{
				step++;
				console.log(" step : " + step +" at index : " + tempIndex);
			}
			if(tempIndex.toString() == x2.toString())
			{
				step = 0;
				j = 0;
				tempIndex = [];
				//console.log("found x2 at step: " + step);
			}
			if(tempIndex.toString() == end.toString())
			{
				tempIndex = [i,j];
				console.log("Found and step : " + step );
				//break;
			}

		}
		//console.log("tempIndex of minus : " + tempIndex);
	}
	//console.log("step of minus : " + step);
//}

//console.log("S to E is : " + step);

function doTraverse(step, tempIndex, x1, x2, x3, i, j)
{
	var Step = step
	/*if(j < parseInt(start[0]) && i < parseInt(start[1]))
	{
		for(var k = i; k>0; k--)
		{
			tempIndex = [i,k];
			Step++;
		}
	}*/

	if(tempIndex.toString() != x1.toString() || tempIndex.toString() != x2.toString() || tempIndex.toString() != x3.toString())
	{
		Step++;
		console.log(" step : " + step +" at index : " + tempIndex);
	}
	if(tempIndex.toString() == x2.toString())
	{
		Step = 0;
		j = 0;
		tempIndex = [];
		//console.log("found x2 at step: " + step);
	}
	if(tempIndex.toString() == end.toString())
	{
		tempIndex = [i,j];
		console.log("Found and step : " + Step );
		//break;
	}
	return Step;
}