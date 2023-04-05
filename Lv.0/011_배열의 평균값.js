function solution(numbers) {
    var answer = 0;
    let hap=0;
    
    for(let i=0;i<numbers.length;i++){
        hap+=numbers[i];
    }
    
    answer=hap/numbers.length;
    
    return answer;
}