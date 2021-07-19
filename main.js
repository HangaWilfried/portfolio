var input = document.getElementsByTagName('input'),
submt = document.getElementById('envoi');
for(var i=0; i<input.length; i++){
    input[i].addEventListener('blur',function(){
        if(this.value.length == 0){
            submt.disabled = true;
        }
        else if(submt.disabled == true){
            submt.disabled = false;
        }
    })
}