//product search functionality

var productcontainer = document.getElementById("product-container")
var search=document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("click",function(){
    var click =event.target.value.toUpperCase()

    for(count=0; count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(click)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})