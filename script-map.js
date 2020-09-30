//   всплытие popup
var open_pop_up=document.getElementsByClassName('open_pop_up');
for(i=0; i<open_pop_up.length; i++){
    open_pop_up[i].addEventListener('click', function(){
        var pop_up_window=document.getElementById('pop_up_window');
        pop_up_window.style.visibility='visible';
    });
};

var pop_up_close=document.getElementById('pop_up_close');
pop_up_close.addEventListener('click', function(){
    pop_up_window.style.visibility='hidden';
});

// ввод номера телефона
  $(function() {
    $('#tel_online').inputmask({   alias: "phone", "clearIncomplete": true });
  });

// онлайн консультант всплытие формы
let consultant_form = document.getElementById('online_consultant_form');
let consultant = document.getElementById('online_consultant');
let close_button = document.getElementById('online_consultant_close');
visible = false;
consultant.addEventListener('click', function(){
    console.log(visible);
    if(visible == false){
        consultant.style.bottom='400px';
        consultant_form.style.bottom='0';
        visible = true;
        close_button.style.visibility = "visible";
    }else{
        consultant.style.bottom='0px';
        consultant_form.style.bottom='-400px';
        close_button.style.visibility = "hidden";
        visible = false; 
    }
});

// онлайн консультант подсвечивание инпутов
var inputs_consultant=document.getElementsByClassName('inputs_consultant');
for(i=0; i<inputs_consultant.length; i++){
    inputs_consultant[i].addEventListener('focus', function(){
        this.style.border='1px solid #3CB371';
    });
    inputs_consultant[i].addEventListener('blur', function(){
        this.style.border='1px solid #393e46';
    });
};

for(i=0; i<inputs_consultant.length; i++){
    inputs_consultant[i].addEventListener('mouseover', function(){
        this.style.border='1px solid #393e46';
    });
    inputs_consultant[i].addEventListener('mouseout', function(){
        this.style.border='1px solid #9ea0a3';
    });
};

var message=document.getElementById('message');
message.addEventListener('focus', function(){
    message.style.border='1px solid #3CB371';
});
message.addEventListener('blur', function(){
    message.style.border='1px solid #393e46';
})

var message=document.getElementById('message');
message.addEventListener('mouseover', function(){
    message.style.border='1px solid #393e46';
});
message.addEventListener('mouseout', function(){
    message.style.border='1px solid #9ea0a3';
});