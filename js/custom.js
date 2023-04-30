$(function(){
  //slick.js
  $('.my_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //gototop button
  /*
  window 에서 스크롤을 
  100px 이상 내리면  .gototop 버튼에 .active class 추가
  100px 이하 라면 .gototop 버튼에 .active class 삭제
  */
$(window).scroll(function(){
  if($(window).scrollTop()>500){
    $('.gototop').addClass('active')
  }else{
    $('.gototop').removeClass('active')
  }
})
//active 추가삭제
$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('.gnb,.sns').toggleClass('on');
})
})
