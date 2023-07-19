//1. 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

function printMinNum() {
  let numbers = []
  for (i = 0; i < 3; i++) {
    let i = parseInt(Math.random() * 10)
    numbers.push(i)
  }
  const minNum = Math.min(...numbers)
  return minNum
}

const result1 = document.querySelector('.result-1')

result1.innerHTML = 'Answer 1: ' + printMinNum()

// 2. 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

function canCreateTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return 'YES'
  } else {
    return 'NO'
  }
}

const result2 = document.querySelector('.result-2')

result2.innerHTML = 'Answer 2: ' + canCreateTriangle(3, 9, 15)

// 3. 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

function numOfPencilPackage(n) {
  let answer

  if (n % 12 !== 0) {
    answer = Math.ceil(n / 12)
  } else {
    answer = n / 12
  }

  return answer
}

const result3 = document.querySelector('.result-3')
result3.innerHTML = 'Answer 3: ' + numOfPencilPackage(18)

// 4. 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function sumNum(n) {
  let answer = 0

  for (let i = 1; i < n + 1; i++) {
    answer += i
  }

  return answer
}

sumNum(6)
sumNum(10)

const result4 = document.querySelector('.result-4')
result4.innerHTML = 'Answer 4: ' + sumNum(10)

//  5. 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function findMinNum(...n) {
  let answer

  answer = Math.min(...n)

  return answer
}

findMinNum(5, 3, 7, 11, 2, 15, 17)

const result5 = document.querySelector('.result-5')
result5.innerHTML = 'Answer 5: ' + findMinNum(5, 3, 7, 11, 2, 15, 17)

function sumAll(...n) {
  let answer = 0

  n.forEach((element) => {
    answer += element
  })

  return answer
}

sumAll(17, 7, 5, 5, 8, 7, 12, 15, 7, 5)

// 6.7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
function findOddNum(arr) {
  let answer = []

  let oddNum = []

  arr.forEach((num) => {
    if (num % 2 === 1) {
      oddNum.push(num)
    }
  })

  const minOdd = Math.min(...oddNum)
  const sumOdd = oddNum.reduce((acc, curr) => acc + curr, 0)

  answer.push(sumOdd, minOdd)
  return answer
}

const result6 = document.querySelector('.result-6')
result6.innerHTML = 'Answer 6: ' + findOddNum([12, 77, 38, 41, 53, 92, 85])

// 7.날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

function findIlegalPark(n, arr) {
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    if (Number(String(arr[i]).charAt(1)) === n) {
      answer.push(arr[i])
    }
  }
  return answer.length
}

console.log(findIlegalPark(3, [25, 23, 11, 47, 53, 17, 33]))

const result7 = document.querySelector('.result-7')
result7.innerHTML =
  'Answer 7: ' + findIlegalPark(3, [25, 23, 11, 47, 53, 17, 33])
