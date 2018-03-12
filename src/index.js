module.exports = function longestConsecutiveLength(array) 
{

	if(array.length == 0)
	{
		return 0;
	}

	if(array.length == 1)
	{
		return 1;
	}

	let MaxLength = 1;
	let Temp= 1;

	for(let i = 0; i < array.length; i++)
	{
		if((array[i] + 1 == array[i+1]))
		{
			Temp++;
			MaxLength = Math.max(MaxLength,Temp);
		}
		else 
		{
			if(array[i] != array[i+1])
			{
				Temp = 1;
			}
		}
	}

	return MaxLength;

}
