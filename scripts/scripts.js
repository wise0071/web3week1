//alert("whats up");
//alert for pop up
console.log("hello");

//tell the first paragraph p1 to listen for a click

document.getElementById("p1").addEventListener("click", function(){
    //change text of p2 once clicked
    document.getElementById("p2").textContent = "you clicked on the first paragraph";
});