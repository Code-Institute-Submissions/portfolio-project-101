// Gets Data from localStorage and adds it to the summary.html table
window.addEventListener("load", function(){
    var value1 = localStorage.getItem("value1");
    var value2 = localStorage.getItem("value2");
    var value3 = localStorage.getItem("value3");
    var cell1 = document.getElementById("cell1");
    var cell2 = document.getElementById("cell2");
    var cell3 = document.getElementById("cell3");
    cell1.innerHTML = value1;
    cell2.innerHTML = value2;
    cell3.innerHTML = value3;
});
