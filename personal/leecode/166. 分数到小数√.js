var fractionToDecimal = function(numerator, denominator) {
	let ret = ""
	let int ="" ;
	if(numerator) return 0
	if (numerator * denominator < 0) int += '-'
	numerator = Math.abs(numerator)
	denominator = Math.abs(denominator)
	let remainder = numerator%denominator
	if(numerator<denominator){
		int+="0."
	}else{
		int+=parseInt(numerator/denominator)
		if(remainder != 0)int+='.'
	}
	let double = ""
	let isReapet = false;
	let index = 0
	let remainders = [remainder];
	let posi = -1;
	while(remainder != 0 && index < 100){
			remainder*=10
		
		index++
		posi = remainders.indexOf(remainder%denominator)
		if(posi!=-1){
			isReapet = true;
			double = double.substring(0,posi)+'('+double.substring(posi)
			double += Math.floor(remainder / denominator)
			break;
		}
		double += Math.floor(remainder / denominator)
		
		remainder = remainder%denominator
		remainders.push(remainder)
	}
	ret = int +   double+ (isReapet?')':'')
	return ret
};


console.log(fractionToDecimal(2,1))