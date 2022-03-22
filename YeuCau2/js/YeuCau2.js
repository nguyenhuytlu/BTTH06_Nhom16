const array =[];

//tạo mảng
function tao_mang(){
    array.splice(0,array.length)
    document.getElementById("array_arrange").innerHTML = array
    document.getElementById("add-Position").value = " "
    document.getElementById("add-Number").value= " "
    let arr = []
    for(let i=0; i<Math.floor(Math.random() * 30)+5; i++) {
        arr.push(Math.floor(Math.random()*91)+10);
    }
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i])
        }
      }
    document.getElementById("array1").innerHTML = array
}

//sắp xếp tăng dần
function sap_tang(){
    if(array.length != 0){
        document.getElementById("array_arrange").innerHTML = array.sort((a, b) => a - b)
    }
    else{
        alert('Vui lòng tạo mảng')
    }
}

//sắp xếp giảm dần
function sap_giam(){
    if(array.length != 0){
        array.sort((a, b) => a - b)
        document.getElementById("array_arrange").innerHTML = array.reverse()
    }
    else{
        alert('Vui lòng tạo mảng')
    }
}

//thêm giá trị vào mảng
function them(){
    var i = document.getElementById("add-Position").value
    var y = document.getElementById("add-Number").value

    if(i>array.length){
        document.getElementById("add-Position").value = array.length+1
        
        if(array.indexOf(y)===-1){
            array.splice(i,0,y)
        }
    }
    else if(i<0){
        document.getElementById("add-Position").value = '0'
        
        if(array.indexOf(y)===-1){
            array.unshift(y)
        }

    }

    else {
        if(array.indexOf(y)===-1){
            array.splice(i,0,y)
        }
    }
    document.getElementById("array_arrange").innerHTML = array
}