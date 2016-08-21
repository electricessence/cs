
/**
 * Returns a range of numbers based upon the first value and the step value.
 * @param first
 * @param count
 * @param step
 * @returns {number[]}
 */

export function range(
	first:number,
	count:number,
	step:number = 1):number[]
{
	var result = new Array(count);
	for(let i = 0; i<count; i++)
	{
		result[i] = first;
		first += step;
	}

	return result;
}

export default range;