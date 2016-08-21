import {alphabetical} from './sort';
import {count} from "./characters";

export function method1(s1:string,s2:string):boolean {
	return alphabetical(s1) === alphabetical(s2);
}

export function method2(s1:string,s2:string):boolean {

	// Return in case of an stupid case
	if(s1===s2)
		return true;
	if(!s1 || !s2 || s1.length != s2.length)
		return false;

	// It's impossible (if not slow) to do a quick comparison without gathering the full profile of one string:
	var s1Count = count(s1);

	for(let s of s2)
	{
		let v = s1Count[s];
		if(!v) return false;
		s1Count[s] = v-1;
	}

	// Due to the nature of the above comparison,
	// since the string lengths are the same, any difference will cause one character pair to be missing/extra and ultimately return false when not found.

	return true;
}