var indexMetrix = [];

for(var i =0; i<=4; i++) // control row
{
	indexMetrix[i] = [];
	for(var j=1; j<=5; j++) // show row
	{
		indexMetrix[i].push([i+1, j]);
	}
}

console.log(indexMetrix);