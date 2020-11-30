var compareVersion = function(version1, version2) {
    let ret = 0
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let shorter = v1
    let longer = v2
    let tag = 0
    let i = 0
    if(v1.length > v2.length){
        shorter = v2
        longer = v1
        tag = -1
    }else tag = 1
    for (; i < shorter.length; i++) {
        if(parseInt(shorter[i])>parseInt(longer[i])){
            ret = 1
            break
        }
        else if(parseInt(shorter[i])<parseInt(longer[i])){
            ret = -1
            break
        }
    }
    if(tag!=0 && ret == 0){
        let last = longer.slice(i)
        last = last.sort((a,b)=>b-a);
        if(last[0]>0)
        ret = -1
    }
    return ret * tag
};

console.log(compareVersion('0.1','1.0'))