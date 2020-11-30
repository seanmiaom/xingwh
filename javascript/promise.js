

class TrackablePromise extends Promise {
	constructor (executor) {
		const notifyHandlers = [];
		super((resolve, reject) => {
			return executor(resolve, reject ,(status) =>{
				notifyHandlers.map((handler) => handler(status));
			})
		})
		this.notifyHandlers = notifyHandlers;
	}

	notify(notifyHandler) {
		this.notifyHandlers.push(notifyHandlers);
	}
}

let p = new TrackablePromise((resolve, reject, notify) => {
	function countDown(x) {
		if(x > 0) {
			notify(`$(20 * x)% remaining`)
			setTimeout(() => {countDown(x - 1)}, 1000)
		} 
		else {
    		resolve(5)
		}
	}
	countDown(5)
})

p.notify((x) => {console.log(x)})
// const testPromise = function(props){
// 	return new Promise((res,rej)=>{
// 		if(props)
// 			res();
// 		else
// 			rej()
// 	})
// } 
// testPromise(false).then(()=>{
// 	console.log('then1')
// }).finally(()=>{
// 	console.log('finally1');
// }).then(()=>{
// 	console.log('then2')
// }).catch(()=>{
// 	console.log('catch1')
// }).finally(()=>{
// 	console.log('finally2');
// }).catch(()=>{
// 	console.log('catch2')
// })
// //回调按照编码顺序
// //finally和then可以执行若干次
// //reject只能执行一次
// let a = testPromise(true).then(()=>{
// 	console.log('then1')
// })
