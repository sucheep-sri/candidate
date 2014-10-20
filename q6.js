/*********************** INPUT******************/
var input = 10;  // !!! change input here !!!
/*********************** INPUT******************/






var output = [];
doSwap();
console.log("INPUT : " + input);
console.log(output);

function doSwap()
{
	var first, second, third;
	for(var i =0; i<=input; i++)
	{	
		for(var j =0; j<=input; j++)
		{
			for(var k=0; k<=input; k++)
			{
				if(i+j+k == input)
				{
					if(output.length == 0) {output.push([i,j,k]);}
					else if(output.length>0)
					{
						if(checkSwap(output, i, j, k))
						{
							output.push([i,j,k]);
						}
					}
				}
			}
		}
	}
}

function checkSwap(item, i, j, k)
{
	var temp = [];
	temp.push([i,j,k]);
	temp.push([i,k,j]);
	temp.push([k,i,j]);
	temp.push([k,j,i]);
	temp.push([j,i,k]);
	temp.push([j,k,i]);
	for(var a =0; a<=temp.length-1; a++)
	{
		for(var b =0; b<=item.length-1; b++)
		{
			if(temp[a].toString() == item[b].toString())
			{	
				return false;
			}
		}
	}
	return true;
}

