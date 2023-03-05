c = 16;
var to = document.querySelector("#conta");
ok(c);
function ok(c){
  to.textContent =  c;
c = c - 1;  
 if(c <= 17 && c >= 0){
  setTimeout(ok, 1000, c);
            if(c <= 4 && c >= 0){
              to.classList.replace('sisi', 'alerta');
            }
 }else{
   to.textContent = "vamos!";
   location.href = "https://google.com.ar";
 }
}