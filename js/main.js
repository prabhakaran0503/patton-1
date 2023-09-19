 var n=prompt("enter the value");

for(i=1;i<=n;i++){
    
    for(j=1;j<=i;j++){
        later=String.fromCharCode(j+64);
        document.write(" ");
        document.write(later)
    }
    document.write("<br>");
}