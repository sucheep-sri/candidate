/*********************** INPUT******************/
var server1 = 8;
var server2 = 16;
var server3 = 8;
var server4 = 32;
var server5 = 0;
var server6 = 0;
var server7 = 0;
var server8 = 0;
var task1 = 18;
var task2 = 4;
var task3 = 8;
var task4 = 4;
var task5 = 6;
var task6 = 6;
var task7 = 8;
var task8 = 8;
/*********************** INPUT******************/

var server = [];
var task = [];
var taskAvailable = [];
var result;

toArray();
console.log("INPUT :");
console.log("Servers capacity limits: "+server);
console.log("Tasks capacity needs: "+task);
console.log("OUTPUT :");
sortArray();
doSchedule();
console.log(result);


function doSchedule()
{
	if(checkBasic())
	{
		for(var i =0; i<=server.length; i++)
		{
			if(parseInt(server[i]) > 0)
			{
				if(checkCanMinus(server[i], task))
				{
					for(var j=0; j<=task.length; )
					{
						//console.log(" J "+j);
						if(parseInt(server[i]) >= parseInt(task[j]) && parseInt(server[i]) > 0)
						{
							//console.log(server[i]+" - "+task[j]+" from index of task : "+j);
							server[i] = parseInt(server[i]) - parseInt(task[j]);
							//console.log("= "+server[i]);
							task.splice(j,1);
							//console.log("task available");
							//console.log("task length : " + task.length);
						}
						else {j++;}
					}
				}
			}
		}
		//console.log(task);
		if(task.length > 0)
		{
			if(checkTaskAllZero())
			{
				result = true;
			}
			else
			{
				result = false
			}
		}
		if(task.length == 0)
		{
			result = true;
		}
		else
		{
			result = false;
		}
	}
	else
	{
		result = false;
	}
}
function toArray()
{
		server.push(server1);
		server.push(server2);
		server.push(server3);
		server.push(server4);
		server.push(server5);
		server.push(server6);
		server.push(server7);
		server.push(server8);
		task.push(task1);
		task.push(task2);
		task.push(task3);
		task.push(task4);
		task.push(task5);
		task.push(task6);
		task.push(task7);
		task.push(task8);
}
function checkBasic()
{
	if(compareCoverage() == false)
	{
		return false;
	}
	else
	{
		if(compareMax() == false)
		{
		 return false;
		}
		else
		{
		 return true;	
		}
	}
}
function compareCoverage()
{
	var Server =0, Task =0;
	for(var i=0; i<=7; i++)
	{
		Server += parseInt(server[i]);
		Task += parseInt(task[i]);
	}
	if(Task > Server)
	{
		return false;
	}
	else
	{
		return true;
	}
}
function compareMax()
{
	var taskMax;
	var serverMax;

 	serverMax =	Math.max.apply(Math, server);
 	taskMax =	Math.max.apply(Math, task);
 	if(parseInt(serverMax) < parseInt(taskMax))
 	{
 		return false;
 	}
 	else
 	{
 		return true;
 	}
}
function sortArray()
{
	server.sort(function(a, b){return b-a});
	task.sort(function(a, b){return b-a});
}

function checkCanMinus(server, task)
{
	for(var i =0; i<=task.length; i++)
	{
		if(parseInt(server) >= parseInt(task[i]))
		{
			return true;
		}
	}
	return false;
}

function checkTaskAllZero()
{
	for(var i=0; i<=task.length; i++)
	{
		if(task[i] == 0)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}