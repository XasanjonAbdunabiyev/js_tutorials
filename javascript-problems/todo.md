Function argument sifatida matn qabul qiladi  va matndagi unikal harflarni topib arrayga solib qaytarishi kere. split(“”) methodni ishlatmasdan. 

const myArr = []
function findUnicalLatter(latter) {
    if (typeof latter !== "string") return;
    for (let i = 0; i < latter.length; i++)  myArr.push(latter[i]);
    return myArr;
}


