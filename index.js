setInterval(() => {
    d= new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    Hrotation=30*h + m/2;    
    Mrotation=6*m;
    Srotation=6*s;
    
    Hours.style.transform = `rotate(${Hrotation}deg)`;
    Mins.style.transform = `rotate(${Mrotation}deg)`;
    Secs.style.transform = `rotate(${Srotation}deg)`;
    
},1000);