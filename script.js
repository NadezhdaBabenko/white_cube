var prevs = document.getElementsByClassName("prev");
Array.from(prevs).forEach(function(elem) {
    elem.addEventListener("click", minusSliderFunc);
});

var nexts = document.getElementsByClassName("next");
Array.from(nexts).forEach(function(elem) {
    elem.addEventListener("click", plusSliderFunc);
});

var slider4dotsP = document.getElementById("slider4dots");
var slider4dots = slider4dotsP.getElementsByClassName("slider-dots_item");
for (var i = 0; i < slider4dots.length; i++)
{
    slider4dots[i].addEventListener("click", dotSliderFunc);
    slider4dots[i].currentSlide = i + 1;
}

var slider7dotsP = document.getElementById("slider7dots");
var slider7dots = slider7dotsP.getElementsByClassName("slider-dots_item");
for (var i = 0; i < slider7dots.length; i++)
{
    slider7dots[i].addEventListener("click", dotSliderFunc);
    slider7dots[i].currentSlide = i + 1;
}

var slider10dotsP = document.getElementById("slider10dots");
var slider10dots = slider10dotsP.getElementsByClassName("slider-dots_item");
for (var i = 0; i < slider10dots.length; i++)
{
    slider10dots[i].addEventListener("click", dotSliderFunc);
    slider10dots[i].currentSlide = i + 1;
}

var slider13dotsP = document.getElementById("slider13dots");
var slider13dots = slider13dotsP.getElementsByClassName("slider-dots_item");
for (var i = 0; i < slider13dots.length; i++)
{
    slider13dots[i].addEventListener("click", dotSliderFunc);
    slider13dots[i].currentSlide = i + 1;
}

var slider22dotsP = document.getElementById("slider22dots");
var slider22dots = slider22dotsP.getElementsByClassName("slider-dots_item");
for (var i = 0; i < slider22dots.length; i++)
{
    slider22dots[i].addEventListener("click", dotSliderFunc);
    slider22dots[i].currentSlide = i + 1;
}

function minusSliderFunc(evt)
{
    var activeDots = event.target.parentElement.parentElement.getElementsByClassName("slider-dots_item active");
    var slideIndex=activeDots[0].currentSlide-1;
    var slides = event.target.parentElement.getElementsByClassName("item");
    var dots = event.target.parentElement.parentElement.getElementsByClassName("slider-dots_item");
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    evt.target.currentSlide=slideIndex+1;
}

function plusSliderFunc(evt)
{
    var activeDots = event.target.parentElement.parentElement.getElementsByClassName("slider-dots_item active");
    var slideIndex=activeDots[0].currentSlide+1;
    var slides = event.target.parentElement.getElementsByClassName("item");
    var dots = event.target.parentElement.parentElement.getElementsByClassName("slider-dots_item");
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    evt.target.currentSlide=slideIndex+1;
}

window.setInterval(sliderTimer, 5000);

function sliderTimer()
{
    var nexts = document.getElementsByClassName("next");
    Array.from(nexts).forEach(function(elem) {
        eventFire(elem, 'click');
    });
}

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function dotSliderFunc(evt)
{
    var slideIndex=evt.target.currentSlide;
    var slides = event.target.parentElement.parentElement.getElementsByClassName("item");
    var dots = event.target.parentElement.parentElement.getElementsByClassName("slider-dots_item");
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    evt.target.currentSlide=slideIndex+1;
}

// ввод номера телефона
$(function() {
    $('#block_2_input_phone').inputmask({   alias: "phone", "clearIncomplete": true });
  });
  $(function() {
    $('#phone_pop_up').inputmask({   alias: "phone", "clearIncomplete": true });
  });

  $(function() {
    $('#block_18_input_phone').inputmask({   alias: "phone", "clearIncomplete": true });
  });
  $(function() {
    $('#block_23_input_phone').inputmask({   alias: "phone", "clearIncomplete": true });
  });
  $(function() {
    $('#tel_online').inputmask({   alias: "phone", "clearIncomplete": true });
  });



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


// всплытие рамок
var frame1=document.getElementById('frame1');
frame1.addEventListener('click', function(){
    var pop_up_window_frame1=document.getElementById('pop_up_window_frame1');
    pop_up_window_frame1.style.visibility='visible';
});

var kitchens_block_17_point_1=document.getElementById('kitchens_block_17_point_1');
kitchens_block_17_point_1.addEventListener('click', function(){
    var pop_up_window_frame1=document.getElementById('pop_up_window_frame1');
    pop_up_window_frame1.style.visibility='visible';
});

var pop_up_close_frames=document.getElementsByClassName('pop_up_close_frames');
for(i=0; i<pop_up_close_frames.length; i++){
    pop_up_close_frames[i].addEventListener('click', function(){
        var pop_up_window_frames=document.getElementsByClassName('pop_up_window_frames');
            for(i=0; i<pop_up_window_frames.length; i++){
        pop_up_window_frames[i].style.visibility='hidden';
            }
    });
}

var frame2=document.getElementById('frame2');
frame2.addEventListener('click', function(){
    var pop_up_window_frame2=document.getElementById('pop_up_window_frame2');
    pop_up_window_frame2.style.visibility='visible';
});

var kitchens_block_17_point_2=document.getElementById('kitchens_block_17_point_2');
kitchens_block_17_point_2.addEventListener('click', function(){
    var pop_up_window_frame2=document.getElementById('pop_up_window_frame2');
    pop_up_window_frame2.style.visibility='visible';
});

var frame3=document.getElementById('frame3');
frame3.addEventListener('click', function(){
    var pop_up_window_frame3=document.getElementById('pop_up_window_frame3');
    pop_up_window_frame3.style.visibility='visible';
});

var kitchens_block_17_point_3=document.getElementById('kitchens_block_17_point_3');
kitchens_block_17_point_3.addEventListener('click', function(){
    var pop_up_window_frame3=document.getElementById('pop_up_window_frame3');
    pop_up_window_frame3.style.visibility='visible';
});

var frame4=document.getElementById('frame4');
frame4.addEventListener('click', function(){
    var pop_up_window_frame4=document.getElementById('pop_up_window_frame4');
    pop_up_window_frame4.style.visibility='visible';
});

var kitchens_block_17_point_4=document.getElementById('kitchens_block_17_point_4');
kitchens_block_17_point_4.addEventListener('click', function(){
    var pop_up_window_frame4=document.getElementById('pop_up_window_frame4');
    pop_up_window_frame4.style.visibility='visible';
});

var frame5=document.getElementById('frame5');
frame5.addEventListener('click', function(){
    var pop_up_window_frame5=document.getElementById('pop_up_window_frame5');
    pop_up_window_frame5.style.visibility='visible';
});

var kitchens_block_17_point_5=document.getElementById('kitchens_block_17_point_5');
kitchens_block_17_point_5.addEventListener('click', function(){
    var pop_up_window_frame5=document.getElementById('pop_up_window_frame5');
    pop_up_window_frame5.style.visibility='visible';
});

var frame6=document.getElementById('frame6');
frame6.addEventListener('click', function(){
    var pop_up_window_frame6=document.getElementById('pop_up_window_frame6');
    pop_up_window_frame6.style.visibility='visible';
});

var kitchens_block_17_point_6=document.getElementById('kitchens_block_17_point_6');
kitchens_block_17_point_6.addEventListener('click', function(){
    var pop_up_window_frame6=document.getElementById('pop_up_window_frame6');
    pop_up_window_frame6.style.visibility='visible';
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
});

var message=document.getElementById('message');
message.addEventListener('mouseover', function(){
    message.style.border='1px solid #393e46';
});
message.addEventListener('mouseout', function(){
    message.style.border='1px solid #9ea0a3';
});