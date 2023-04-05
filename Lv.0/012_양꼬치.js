function solution(n, k) {
    var answer = 0;
    
    let free = parseInt(n/10);
    k=k-free;
    answer = (12000*n) + (2000*k);
    
    return answer;
}