let dl=document.querySelector('dl');
let right=document.querySelector('.right');
let info=[
    {name:'凡',tel:'18335287674',spall:'fan'},
    {name:'发亮',tel:'18333468094',spall:'faliang'},
    {name:'高亚东',tel:'15756783456',spall:'gaoyadong'},
    {name:'鑫荣',tel:'18398767865',spall:'xinrong'},
    {name:'一菲',tel:'17000986790',spall:'yifei'},
    {name:'刘盼',tel:'13434657658',spall:'liupan'},
    {name:'木木',tel:'18426784567',spall:'mumu'},
    {name:'张嗄',tel:'18878657788',spall:'zhaga'},
    {name:'里强',tel:'18234567826',spall:'liqiang'},
    {name:'张与',tel:'18335287890',spall:'zhangyu'},
    {name:'都慧慧',tel:'18335282345',spall:'duhuihui'},
    {name:'金海',tel:'18333456674',spall:'jinhai'},
    {name:'刘琴',tel:'18335678674',spall:'liuqin'},
    {name:'一番',tel:'18335777674',spall:'yifan'},
    {name:'唱唱',tel:'18387657674',spall:'changchang'},
    {name:'盼盼',tel:'18309827674',spall:'panpan'},
    {name:'老马',tel:'18389767674',spall:'laoma'},
    {name:'叶慧',tel:'183378907674',spall:'yehui'},
    {name:'糊糊',tel:'18332378674',spall:'huhu'},
    {name:'雨雨',tel:'18377511674',spall:'yuyu'}
]
render(info)
//创建一个函数放数据

function render(data) {
    dl.innerHTML='';
    right.innerHTML='';
    let obj = {};      //新建一个对象让放每个字母组成的一组数

    data.forEach((Element, intex) => {    //遍历传进来的对象
        let first = Element.spall.charAt(0).toUpperCase();    //处理首字母，首字母大写
        //把每个字母定义成数组的一个属性，看你定义的数组中有没有这个属性，有的话把他放这个数组的后面，没有的话相当于给他添加一个属性。属性值是一个数组。
        if (!obj[first]) {
            obj[first] = [];

        }
        obj[first].push(Element); //放进去的是对象  obj是对象，first是obj的一个属性，属性值是一个对象

    })


    let char = Object.keys(obj).sort();    //获取指定对象的属性名（首字母），并对首字母排序
    char.forEach((Element) => {    //遍历   Element指他的每一个首字母,是obj的一个属性，属性值是数组
        dl.innerHTML += `
    <dt>${Element}</dt>
    `
        obj[Element].forEach((value) => {  //value是一个obj里Element的属性值，是一个对象
            dl.innerHTML += `<dd><a href="tel=${value.tel}">${value.name}</a></dd>`
        })
        right.innerHTML+=`<li>${Element}</li>`

    })
}

//搜索
    let sec=document.querySelector('.secbag>input');
    sec.onkeyup=function () {
        let value = this.value.trim();
        let data1 = info.filter(function (element) {
            return element.spall.includes(value)||element.name.includes(value)||element.tel.includes(value);
        })
        render(data1);
    }
render(info);

//提示
let dt=document.querySelectorAll('dt')
console.log(dt.offsetHeight);
let tishi=document.querySelector('.tishi');
console.log(tishi.offsetHeight);
let lxr=document.querySelector('.lxr')
console.log(lxr.offsetHeight)
let secbag=document.querySelector('.secbag')
console.log(secbag.offsetHeight)
//滚动
window.onscroll=function () {
    let arr=[];
    let height=lxr.offsetHeight+secbag.offsetHeight+tishi.offsetHeight;
    console.log(height);
   dt.forEach((element)=>{arr.push(element.offsetTop);})
    arr.forEach((value,index)=>{
        console.log(document.documentElement.scrollTop)
       if (document.documentElement.scrollTop+height>=value){
           tishi.innerText='';
           tishi.innerText=dt[index].innerText;
       }

    })

}