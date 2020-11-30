
(function(points) {
	let ret = 1;
	if(points.length==0) return 0;
	points = points.sort((a,b)=>a[0]-b[0])
	let current = points[0];
	for(let i = 1; i < points.length; i++){
		if(points[i][1]<current[1])
			current[1] = points[i][1];
		if(points[i][0]>current[1]){
			ret++;
			current = points[i];
		}
	}
	console.log('结果',ret)
	return ret;
})([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]])
