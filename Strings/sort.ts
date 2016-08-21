import {array} from './to';

export function alphabetical(source: string): string
{
	return source &&
		array(source)
			.sort()
			.join('');
}