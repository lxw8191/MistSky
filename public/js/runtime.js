var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);
var e=new Date("12/19/2022 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),
    a=(t/1496e5).toFixed(6),r=new Date("12/19/2022 00:00:00"),
    n=(now-r)/1e3/60/60/24,o=Math.floor(n),i=(now-r)/1e3/60/60-24*o,s=Math.floor(i);1==String(s).length&&(s="0"+s);
    var l=(now-r)/1e3/60-1440*o-60*s,c=Math.floor(l);1==String(c).length&&(c="0"+c);
    var d=(now-r)/1e3-86400*o-3600*s-60*c,g=Math.round(d);1==String(g).length&&(g="0"+g);
    let b="";b=s<18&&s>=9?`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> 本站居然运行了 ${o} 天 ${s} 小时 ${c} 分 ${g} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀`:`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> 本站居然运行了 ${o} 天 ${s} 小时 ${c} 分 ${g} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=b)}setInterval((()=>{createtime()}),1e3);