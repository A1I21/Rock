
let min =0
export function getRandomInt(min: number, max: number) {
	// 1
	return Math.round(Math.random() * (max - min)) + min;
}
