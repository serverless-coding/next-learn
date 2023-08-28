// 修改标题
{
    let myHeading = document.querySelector("h1")
    if (myHeading != null) {
        myHeading.textContent = "Flomo Notes"

        console.log("站点标题:", myHeading.textContent)
    }
}
// js 基础
{
    let a = 1
    let b = 1
    if (a === b) {
        console.log("a==b:", a === b)
    }

    function add(a, b) {
        return a + b
    }
    console.log("a+b=", add(a, b))
}

// 事件
let res = 1
{

    let h = document.querySelector("html")
    if (h != null) {
        h.addEventListener("click", function () {
            if (res % 3 === 0) {
                console.log("点点点")
            }
            res++
            if (res % 5 != 0) {
                return
            }
            let myname = prompt("请输入你的名字")
            if (myname === null) {
                return
            }
            localStorage.setItem("name", myname)
            let myHeading = document.querySelector("h1")
            if (myHeading === null) {
                return
            }
            myHeading.textContent = "FlomoNotes." + myname
        })
    }
}
// 网页组成文件的解析顺序 https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works
{

}