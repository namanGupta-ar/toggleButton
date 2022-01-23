

var circle = document.getElementById('innerdiv');

var box = document.getElementById('outerdiv');
var para = document.getElementsByTagName('p');
box.addEventListener('click',function()
{   

    if(circle.style.left === '1px')
    {
        circle.style.left = "59px";
        document.body.style.backgroundColor = "black";
        circle.style.backgroundColor = "white";
        box.style.borderColor = "white";
        // document.getElementByTagName('p').style.color = "white";
        para[0].style.color = "white";
    }
    else
    {   
        document.body.style.backgroundColor = "white";
        circle.style.left = "1px";
        circle.style.backgroundColor = "black";
        box.style.borderColor = "black";
        para[0].style.color = "black";
    }
});