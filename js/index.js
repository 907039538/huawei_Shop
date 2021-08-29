window.onload = function () {
    // 顶部广告图点击删除
    const ad = document.querySelector(".ad-wrapper")
    const del = document.querySelector(".delete")
    del.onclick = function () {
        ad.style.display = "none"
    }
    // 轮播图
    const bigImg = document.querySelectorAll(".bigImg")
    const imgArr = []
    for (let i = 0; i < bigImg.length; i++) {
        imgArr[i] = bigImg[i].src
    }
    // console.log(imgArr);
    // console.log(bigImg);
    const pre = document.querySelector(".left-arrow")
    const next = document.querySelector(".right-arrow")
    let i = 0
    // 下一张
    next.onclick = function () {
        i++
        // 统一设置op为0 , 并加过渡
        bigImg.forEach(item => {
            // 利用透明度把图片隐藏,通过过渡效果提高体验
            item.style.opacity = 0
            item.style.transition = `.5s`
        })
        bigImg[i].style.opacity = 1
        if (i >= bigImg.length - 1) {
            i = 0
        }
    }
    // 上一张
    pre.onclick = function () {
        i--
        bigImg.forEach(item => {
            item.style.opacity = 0
            item.style.transition = `.5s`
        })
        if (i < 0) {
            i = bigImg.length - 1
        }
        bigImg[i].style.opacity = 1

    }
    // 移入轮播点换图
    let timer;
    const spotList = document.querySelectorAll(".spotList")
    for (let i = 0; i < spotList.length; i++) {
        spotList[i].onmouseover = function () {
            // 关闭上一个自动轮播
            clearInterval(timer)
            bigImg.forEach(item => {
                item.style.opacity = 0
                item.style.transition = `.5s`
            })
            bigImg[i].style.opacity = 1
            // setLi(i)
            spotList.forEach(item => {
                item.style.backgroundColor = "rgba(0, 0, 0, 0)"
            })
            spotList[i].style.backgroundColor = "rgba(255, 255, 255, 1)"

        }
        spotList[i].onmouseout = function () {
            // 开始轮播
            inter();
            // spotList.forEach(item => {
            //     item.style.backgroundColor = "rgba(255, 255, 255, 0)"
            // })
        }
    }
    // 自动轮播
    // 开始轮播
    inter()
    spotList[0].style.backgroundColor = "rgba(255, 255, 255, 1)"
    // 自动轮播函数
    function inter() {
        timer = setInterval(function () {
            i++
            if (i > bigImg.length - 1) {
                spotList[bigImg.length - 1].style.backgroundColor = ""
                spotList[0].style.backgroundColor = "rgba(255, 255, 255, 1)"
                i = 0
            }
            // 统一设置op为0 , 并加延迟
            bigImg.forEach(item => {
                item.style.opacity = 0
                item.style.transition = `.5s`
            })
            bigImg[i].style.opacity = 1
            spotList.forEach(item => {
                    item.style.backgroundColor = ""
                })
            spotList[i].style.backgroundColor = "rgba(255, 255, 255, 1)"
        }, 5000)
    }
    // 轮播点背景设置函数
    // function setLi(i) {
    //     spotList.forEach(item => {
    //         item.style.backgroundColor = "rgba(0, 0, 0, 0)"
    //     })
    //     spotList[i].style.backgroundColor = "rgba(255, 255, 255, 1)"
    //     console.log(i);

    // }
}