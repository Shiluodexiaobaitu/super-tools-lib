const repeat = (obj) => {
    
    if (Object.values(obj).length !== new Set(Object.values(obj)).size){
        console.log('重复')
    }else{
        console.log('no')
    }

}

const object = {
    repeat
}

export default object;