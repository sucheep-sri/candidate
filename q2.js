/*
Choose index in metrix that have to be '0'
/////////////////
[1,1][1,2][1,3]
[2,1][2,2][2,3]
[3,1][3,2][3,3]
////////////////
for example, want index [2,3] to be 0 : var input = [2,3]
and the others index will be '-1'
*/
/*********************** INPUT******************/
var input = [1,2]; // !!! change index of 0 here !!!
/*********************** INPUT******************/

var indexMetrix = [];
var inputMetrix = [];
var output = [];

var mainTemp = 0;
var temp = [];
var sum = 0;
//hold metrix with contain index
for(var i =0; i<=2; i++) // control row
{
	indexMetrix[i] = [];
	for(var j=1; j<=3; j++) // show row
	{
		indexMetrix[i].push([i+1, j]);
	}
}

//hold metrix with contain 0 and -1 && get input
for(var i =0; i<=indexMetrix.length-1; i++)
{
	inputMetrix[i] = [];
	for(var j =0; j<=indexMetrix.length-1; j++)
	{
		if(indexMetrix[i][j].toString() == input.toString())
		{
			inputMetrix[i][j] = [0];
			mainTemp = indexMetrix[i][j];

		}
		else
		{
			inputMetrix[i][j] = [-1];
		}
	}
}

for(var i=0; i<=indexMetrix.length-1; i++)
{
	output[i] = [];
	for(var j=0; j<= indexMetrix.length-1; j++)
	{
		for(var k=0;k<=mainTemp.length-1; k++)
		{
			//console.log("i : " + i + " j : " + j + " k : " + k);
			temp.push([Math.abs(mainTemp[k] - indexMetrix[i][j][k])]);
			sum = parseInt(sum) + parseInt(temp[k]);
			//console.log(temp[k] + " at K : " + k +" sum :"+sum+ " and maintTemp : " + mainTemp[k]  + " indexMetrix : " + indexMetrix[i][j][k] + " i j k" + j+ j + k);
		}
		output[i].push([sum]);
		temp = [];
		sum = 0;		
	}
}
console.log("INPUT");
console.log(inputMetrix);
console.log("OUTPUT");
console.log(output);