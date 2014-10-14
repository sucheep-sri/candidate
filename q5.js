var input = ['ab', 'ad', 'af'];
var tempAllCharArr = [];
var allCharArr = [];
var eachCharArr = [];

var tempChar = "";
var isPresent = true;
var charPresent = [];


for(var i =0; i<=input.length-1; i++)
{	
	tempChar += input[i];
	eachCharArr.push(input[i].split('')); // add all chars in one element to eachChar
}
tempAllCharArr = tempChar.split('');  // add all chars of all element to allChar

//clear exist character
for(var i =0; i<=tempAllCharArr.length-1; i++)
{
	if(i==0) {allCharArr.push(tempAllCharArr[i]);}
	else
	{
		if(allCharArr.indexOf(tempAllCharArr[i]) == -1)
		{
			allCharArr.push(tempAllCharArr[i]);
		}
	}
}

//
for(var i =0; i<=allCharArr.length-1; i++)
{
	for(var j = 0; j<=eachCharArr.length-1; j++)
	{
		for(var k =0; k<=eachCharArr[j].length-1; k++)
		{
			if(allCharArr[i]==eachCharArr[j][k])
			{

			}
			console.log(i+":i "+allCharArr[i] + "= " +eachCharArr[j][k] + " J:"+j + " K:"+k);
		}
	}
}
