// Task1
// Parking Dilemma

const cars = [2,6,7,10];

const k = 3;

const CPR = (cars, k) => {
    cars.sort((a,b) => a-b);
    console.log(cars)
    let maxSumSeen = Infinity;
    for (let i=0; i < cars.length; i++) {
        if (i >= (k-1)) {
            maxSumSeen = Math.min((cars[i] - cars[i-(k-1)]), maxSumSeen);
        }
    }
    return maxSumSeen;
};


console.log(CPR(cars, k))


// Task2
// Country count
const checkNeighbourCountry = (A, B, i, j, N, M) => {
    if(B[i][j] === -1) return;
    B[i][j] = -1;
    if(i+1 < N) {
      if(A[i+1][j] === A[i][j]) {
        checkNeighbourCountry(A, B, i+1, j, N, M);
      }
    }
    if(i-1 >= 0) {
      if(A[i-1][j] === A[i][j]) {
        checkNeighbourCountry(A, B, i-1, j, N, M);
      }
    }
    if(j+1 < M) {
      if(A[i][j+1] === A[i][j]) {
        checkNeighbourCountry(A, B, i, j+1, N, M);
      }
    }
    if(j-1 >= 0) {
      if(A[i][j-1] === A[i][j]) {
        checkNeighbourCountry(A, B, i, j-1, N, M);
      }
    }
  }
  
  const numberOfCountry = (A) => {
    let sum = 0;
    const N = A.length;
    const M = A[0].length;
    if (N === 0 || M === 0) return 0;
    const B = A.map(inner => inner.slice()); 
    for (let i=0; i<N; i++) {
      for (let j=0; j<M; j++) {
         if (B[i][j] >= 0) {
          checkNeighbourCountry(A, B, i, j, N, M);
          sum += 1;
        }
      }
    }
    return sum;
  }
  
  console.log('Country: ', numberOfCountry([
    [5,4,4],
    [4,3,4],
    [3,2,4],
    [2,2,2],
    [3,3,4],
    [1,4,4],
    [4,1,1]
  ]
  ))
  
  
  