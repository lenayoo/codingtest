//1. 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

function printMinNum() {
  let numbers = []
  for (i = 0; i < 3; i++) {
    let i = parseInt(Math.random() * 10)
    numbers.push(i)
  }
  console.log(numbers)
  const minNum = Math.min(...numbers)
  return minNum
}

const result1 = document.querySelector('.result-1')

result1.innerHTML = 'Answer 1: ' + printMinNum()
