export function array(source: string): string[]
{
	var result:string[] = new Array(source.length);
	for(let i=0;i<source.length;i++)
		result[i] = source[i];
	return result;
}

export function charArray(source: string): number[]
{
	var result:number[] = new Array(source.length);
	for(let i=0;i<source.length;i++)
		result[i] = source.charCodeAt(i);
	return result;
}