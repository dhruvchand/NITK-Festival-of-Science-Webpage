var img = ["bg0.jpg","bg1.jpg","bg2.jpg","bg3.jpg"];
var quotes = [["Stay Hungry, Stay Foolish","Steve Jobs"],["I think and therefore, I am.","Descartes"]];
var i = 1;
var j = 1;
function init()
{
    setTimeout(function(){initSlider();},10000);
}

function initSlider()
{
   $('#slider').animate({'opacity':0},2000,function()
                        {
                             $('#slider').css({'background-image':'url(img/'+img[i]+')','background-size':'cover'});
                             $('#caption span').html(quotes[j][0]);
                             $('#caption p').html(quotes[j][1]);
                             $('#slider').animate({'opacity':1},2000,function(){
                                i=i<(img.length-1)?i+1:0;
                                j=j<(quotes.length-1)?j+1:0;
                                 setTimeout(function(){initSlider();},10000);
                             });
                        });
   
}

