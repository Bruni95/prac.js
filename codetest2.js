function solution(str){
	let answer= 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'O') {
            count++;
            answer += count;
        }else {
            count = 0;
        }
    }
	return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO";