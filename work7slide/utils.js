function bubbleSort(str) {
        let arr = str.split(',')
        let sortLog = []
        for (let i = 0; i < arr.length - 1;i++){
            for (let j = 0; j < arr.length - i - 1; j++){
            sortLog.push([arr.concat(),[j,j+1]])
            sortLog.push([arr.concat(),[j,j+1]])
            sortLog.push([arr.concat(),[j,j+1]])
            sortLog.push([arr.concat(),[j,j+1]])
                if (arr[j] > arr[j + 1]){
                    [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
            sortLog.push([arr.concat(),[j,j+1]])
                }
            }  
        }
    sortLog.push([arr.concat(),[-1,-1]])
        return sortLog
    }
    function showLog(logValues,showElement){
        let str = ''
        let{
            done,
            value: [row,pos]
        } =logValues.next()

        for (const key in row){
            let color = pos.index0f(Number(key)) >-1?'color:black;' : ''
            str += '<span style = "font-size:'+row[key]*30+'px;'+
                color + '">'+row[key]+'</span>'
        }
        showElement.innerHTML =str
        if (pos[0] !=-1)
        setTimeout("showLog(logvalues,showDiv)",500)

    }
function insertSort(str) {
    let arr = str.split(',')
    let nsLog= []
    for (let i = 1;i < arr.length; i++){
        for (let j = i;j > 0; j--){
            nsLog.push([arr.concat(), [j,j + 1]])
            nsLog.push([arr.concat(), [j,j + 1]])
            nsLog.push([arr.concat(), [j,j + 1]])
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1],arr[j]] = [arr[j], arr[j - 1]]
             nsLog.push([arr.concat(), [j,j + 1]])
            }
        }
    }
    nsLog.push([arr.concat(), [-1,-1]])

return nsLog
}
function showLog(logValues, showElement) {
    let str = ''
    let {
        done,
        value: [row, pos]
    } = logValues.next()
for (const key in row) {
    let color = pos.indexOf(Number(key)) > -1 ? 'color:black;' : ''
    str += '<span style="font-size:' + row[key] * 20 + 'px;' + color + '">' + row[key] + '</span>'
    
}
showElement.innerHTML = str
    if (pos[0] != -1)
    setTimeout("showLog(logValues,showDiv)",500)
    }