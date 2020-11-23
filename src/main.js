let html = document.querySelector('#html');
//给页面加上样式
let style = document.querySelector("#style");

let string = `
   /*我是heeeyueee
    *接下来我要给我的简历加上样式了
    *我要加的样式是:
    */
    body{
        color:red;
    }
   /*来吧，展示
    *先准备好一个div
    */
   #div1{
       position:relative;
       border: 1px solid red;
       width:200px;
       height:200px;
   }
   /*接下来，我要把div变为八卦图
   *为什么要变我也不知道
   *看俺老孙变也
   */
  #div1{
      border-radius:50%;
      box-shadow:0px 0px 3px rgba(0, 0, 0, .5);
      border:none;
  }
  /*太极分阴阳两极
   *一阳一阴
   *黑白大法
   *走你
   */
  #div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  }
  #div1::before{
    content:'';
    display:block;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    width:100px;
    height:100px;
    border-radius:50%;
  }
  #div1::after{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#FFFFFF;background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    width:100px;
    height:100px;
    border-radius:50%;
  }
`

let n = 0;
let string2 = '' //replace方法不行，添加一个string2，把string处理之后放入string2
let step = () => {
    setTimeout(() => {
        //string2 += string[n] === "\n" ? "<br>" : string[n];
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step()
        } else {
            return
        }
    }, 0)
}
step();