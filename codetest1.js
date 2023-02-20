function solution(num){
    const coins = [500, 100, 50, 10]
	let answer= 0;
    let change = 1000 - num;

    coins.forEach((coin) => {
        answer = answer + Math.floor(change/ coin);
        change = change % coin;
    })

	return answer;
}
let num1 = 160;
console.log(solution(num1))