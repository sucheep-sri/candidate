var input = ['a', 'b', 'ccc', 'ddd'];
var tempAllCharArr = [];
var allCharArr = [];
var eachCharArr = [];

var tempChar = "";
var found = 0;
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


for(var i =0; i<=allCharArr.length-1; i++)
{
	for(var j = 0; j<=eachCharArr.length-1; j++)
	{
		if(eachCharArr[j].indexOf(allCharArr[i]) > -1)
		{
			found++;
		}
	}
	if(found == eachCharArr.length)
	{
		//console.log("found ="+found+": " +allCharArr[i]+ " in all array");
		charPresent.push(allCharArr[i]);
	}
	found = 0;
}
if(charPresent.length == 0)
{
	console.log(input.length + " // have no character is present in all " + input.length + " string");
}
else
{
	console.log(input.length + " // " + charPresent + " are present in all " + input.length + " string");
}

