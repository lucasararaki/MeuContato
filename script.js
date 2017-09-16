var imagens = new Array("img/bem-vindo-1.jpg",
                        "img/bem-vindo-2.jpg",
                        "img/bem-vindo-3.jpg",
                        "img/bem-vindo-4.jpg",
                        "img/bem-vindo-5.jpg");

var num_img = 4;
var img_atual =0;

function changeImg(){
   if (img_atual < (num_img - 1) ) {
     img_atual = img_atual + 1;
   }
   else {
     img_atual = 0;
   }

   document.getElementById("mainCarrousel").src = imagens[img_atual];
   var x = setTimeout ("changeImg()", 3000);
}

window.onload = function () {
   changeImg();
};
