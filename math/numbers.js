const LCM = function(A,B){
			for (let m = 1;; m++){
				if ((A*m)%B === 0){return A*m}
			}
		}

const gcd = function(com1, com2){
  let cdmax = 1;
    for (let fAA = factorize(com1) , fAB = factorize(com2); fAA.length > 0 && fAB.length > 0;) {
			if (fAA[fAA.length - 1] === fAB[fAB.length - 1]) {
            cdmax = fAA[fAA.length - 1]
						return cdmax;
          } 
      if (fAA[fAA.length - 1] < fAB[fAB.length - 1]) {
        fAB.pop();
        }else{
          fAA.pop()
          }  
    }   
  }
  
	
		const EGCD = function(A,B){
			if (A * B === 0){return A + B;} 
			if (A < B){[A,B] = [B,A]}
				return EGCD (B,A%B)
		}

  const factorize = function(num) {
      let factors = [];
      for (let n = 1; n <= num; n++) {
        if (num % n === 0) {
          factors.push(n)
        }
      }
      return factors;
    }
    