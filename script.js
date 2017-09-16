// carrosel do banner
var imagens = new Array("img/carrosel/carrosel1.jpg",
                        "img/carrosel/carrosel2.jpg",
                        "img/carrosel/carrosel3.jpg",
                        "img/carrosel/carrosel4.jpg",
                        "img/carrosel/carrosel5.jpg");

var num_img = 4;
var img_atual =0;

function changeImg(){
   if (img_atual < (num_img - 1) ) {
     img_atual++;
   }
   else {
     img_atual = 0;
   }

   document.getElementById("mainCarrousel").src = imagens[img_atual];
   var x = setTimeout ("changeImg()", 3000);
}

// slider dos recursos
var sliderImg = new Array("img/prints/tela1.png",
                          "img/prints/tela2.png",
                          "img/prints/tela3.png",
                          "img/prints/tela4.png",
                          "img/prints/tela5.png",
                          "img/prints/tela6.png",
                          "img/prints/tela7.png",)

var slider_qtd = 6
var img_start =0;

function changeImgSlider(){
   if (img_start < (slider_qtd - 1) ) {
     img_start++;
   }
   else {
     img_start = 0;
   }

   document.getElementById("slider").src = sliderImg[img_start];
   var x = setTimeout ("changeImgSlider()", 3000);
}

window.onload = function () {
   changeImg();
   changeImgSlider();
};
