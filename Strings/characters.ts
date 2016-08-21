export function hasRepeats(source: string): boolean
{
	var seen: any = {};
	for(let s of source)
	{
		if(s in seen) return true;
		seen[s] = true;
	}

	return false;
}

export function hasNoRepeats(source: string): boolean
{

	return !hasRepeats(source);
}

export function from(source: string): string[]
{

	var seen: any = {}, result: string[] = [];
	for(let s of source)
	{
		if(!(s in seen))
		{
			seen[s] = true;
			result.push(s);
		}
	}

	return result;
}

export function count(source: string): {[char: string]: number}
{

	var c: any = {};
	for(let s of source)
	{
		let v = c[s];
		if(!v && v!==0) v = 0;
		c[s] = v + 1;
	}

	return c;
}

export function sameSet(s1: string, s2: string): boolean
{
	var a1 = from(s1), a2 = from(s2);
	a1.sort();
	a2.sort();
	return a1.join('')==a2.join('');
}