WebFont.load({
    google: {
        families: ['Open Sans:300,400,700:cyrillic']
    }
});

// var wow = new WOW({
//     boxClass: 'wow', // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset: 0, // distance to the element when triggering the animation (default is 0)
//     mobile: true, // trigger animations on mobile devices (default is true)
//     live: true, // act on asynchronously loaded content (default is true)
//     callback: function(box) {
//         // the callback is fired every time an animation is started
//         // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null, // optional scroll container selector, otherwise use window,
//     resetAnimation: true, // reset animation on end (default is true)
// });
// wow.init();

$(document).ready(function($) {

  $.fn.datepicker.language['ua'] =  {
      days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер","П'ятниця","Субота"],
      daysShort: ['Нед','Пон','Вів','Сер','Чет','Пят','Суб'],
      daysMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
      months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
      today: 'Сьогодні',
      clear: 'Очистити',
      dateFormat: 'dd.mm.yyyy',
      timeFormat: 'hh:ii',
      firstDay: 1
  };

  $('select').styler({
    onFormStyled: function() {
      $('.jq-selectbox__dropdown ul').mCustomScrollbar({
    theme:"dark"
});
    }
  });

    $('.phone').mask('+38 (000) 000-00-00')
    $('body').on('focus', '.phone', function(event) {
        if ($(this).val() == '') {
            $(this).val('+38 (0')
        }
    })
    $('body').on('blur', '.phone', function(event) {
        if ($(this).val() == '+38 (0') {
            $(this).val('')
        }
    });



  $('.review-star').on('click',  function(event) {
    event.preventDefault();
    $Sclass = $(this).data('star')
    $(this).parent().removeClass('s1 s2 s3 s4 s5').addClass( 's'+ $Sclass)
    $('[name=starscol]').val($Sclass)
  });

  $('body').on('blur', '.field', function(event) {
    if ($(this).val() != '') {
            $(this).addClass('filled')
        } else {
            $(this).removeClass('filled')
        }
  });
  

    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


    opnsFancy = {
        touch: false,
        baseClass: "modal",
        beforeLoad: function(instance, slide) {
        
        },
        afterLoad: function(instance, current){
          
        },
        afterClose: function(instance, slide) {
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                ' <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M20.002.907l-.91-.91L10 9.092.907-.002l-.91.909L9.092 10l-9.093 9.093.909.909L10 10.909l9.093 9.093.909-.91L10.909 10z" fill="#fff"/>' +
                '</svg>' +
                "</button>",

        },
    }
    $('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });
   
    $('.field--date').datepicker({
      minDate: new Date(),
      language: 'ua',
      offset: 0,
      minView: 'days',
      view: 'days'
      // showOtherMonths: false,
  })
   
    

    var sliderCan = new Swiper('.reviews-slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        simulateTouch: false,
        pagination: {
          el: '.reviews-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.reviews-next',
          prevEl: '.reviews-prev',
        },
        breakpoints: {
            789: {
                simulateTouch: true,
                spaceBetween: 30,
                slidesPerView: 1,
            },
        }
    });

    $('.faq-item__head').on('click', function(event) {
        event.preventDefault();
        $parentThis = $(this).parent()
        $contentThis = $parentThis.find('.faq-item__content')
        $parentThis.toggleClass('active').siblings().removeClass('active');
        $('.faq-item__head').not(this).parent().find('.faq-item__content').slideUp();
        $contentThis.find('p').addClass('animated slow fadeIn');
        $contentThis.slideToggle()
    });


     $(window).scroll(function(){
     if ($(this).scrollTop() > 800) {
       $('.link--top').fadeIn();
        } else {
          $('.link--top').fadeOut();
       }
     }); 
     
     $('.link--top').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 600);
       return false;
     });

     $('.form').on('click', '.field-type__selected', function(event) {
       event.preventDefault();
       $('.field-type__selected').not(this).removeClass('active')
       $(this).toggleClass('active');

      $list = $(this).parent().find('.field-type__list')
      $('.field-type__list').not($list).slideUp()
      $list.slideToggle()


     });
     if ($('.reg-form').length) {
      $idPlace = $('.reg-form').find('.field--place').attr('id')
         new google.maps.places.Autocomplete((document.getElementById($idPlace)), {types: ['geocode'],});
     }
    
     $('.add-adr').on('click', function(event) {
       event.preventDefault();
       $wher = $(this).parent().find('.form-block__append')
       $fieldLenght = $(this).parent().find('.form-block').length + 1
       $field = $(this).parent().find('.form-block').eq(0).clone()
       $oldName = $($field).find('input').attr('name').replace(/[^a-z_]/g, '')
       $($field).find('input').attr('name', $oldName+'['+$fieldLenght+']').attr('id', $oldName+'_'+$fieldLenght).val('').removeClass('filled')
       $($field).find('label').attr('for', $oldName+'_'+$fieldLenght)
       $field.appendTo($wher)

       new google.maps.places.Autocomplete((document.getElementById($oldName+'_'+$fieldLenght)), {types: ['geocode'],});


     });

     $('.add-con').on('click', function(event) {
       event.preventDefault();
       $wher = $(this).parent().find('.form-block__append')
       $fieldLenght = $(this).parent().find('.form-block').length + 1
       $field = $(this).parent().find('.form-block').eq(0).clone()
       // $oldName = $($field).find('input').attr('name').replace(/[^a-z_]/g, '')
       $($field).find('input').attr('name', 'contact['+$fieldLenght+'][phone]').attr('id', 'contact['+$fieldLenght+']').val('').removeClass('filled')
       $($field).find('label').attr('for', 'contact['+$fieldLenght+']')
       $field.appendTo($wher)
       // console.log($oldName)
     });

     $('body').on('click', '.field-type__list li', function(event) {
       event.preventDefault();
       $(this).addClass('active').siblings().removeClass('active')
       $thisSvg = $(this).find('.field-type__svg svg').clone()
       $thisType = $(this).attr('data-type')
       $thisName = $(this).attr('data-name')
       $thisLabel = $(this).find('.field-type__text').text()
       $selected = $(this).parents('.field-type').find('.selected-svg')
       $selected.find('svg').remove()
       $selected.append($thisSvg)
       $selectedLabel = $(this).parents('.form-block').find('label').text($thisLabel)
       $selectedType = $(this).parents('.form-block').find('input')
       $selectedType.attr('type', $thisType)
       $selectedTypeId = $selectedType.attr('id')
       $selectedType.attr('name', $selectedTypeId+'['+$thisName+']')
       if ($thisType == 'tel') {
        $selectedType.addClass('phone').attr('maxlength', '19');
      } else {
        $selectedType.removeClass('phone').attr('maxlength', '80');
      }
      $('.field-type__selected').removeClass('active')
      $(this).parent().slideUp()
       
       // console.log($selectedType)


     });

  //   var sliderB = new Swiper('.get-items', {
  //       speed: 800,
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //       slidesPerColumn: 2,
  //       slidesPerColumnFill: 'row',
  //       simulateTouch: false,
  // pagination: {
  //   el: '.get-p',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.get-next',
  //   prevEl: '.get-prev',
  // },
  //       breakpoints: {
  //           789: {
  //               slidesPerColumnFill: 'column',
  //               simulateTouch: true,
  //               spaceBetween: 10,
  //               slidesPerView: 1,
  //           },
  //       }
  //   });
$('[name=langselect]').on('change',function(event) {
  event.preventDefault();
  $Lang = $(this).find(':selected').attr('data-href')
  window.location.href = $Lang
  });
    

  $('.form-ajax').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        $.ajax({
            type: "POST",
            url: form_url,
            data: th,
            success: function(data) {
                $.fancybox.close()
                popup = "#thanks"
                $.fancybox.open({
                    src: popup,
                    type: 'inline',
                    opts: opnsFancy,
                });
                setTimeout(function() {
                    _form.trigger("reset");
                }, 3000);
                setTimeout(function() {
                    $.fancybox.close();
                }, 15000)
            }
        });
        event.preventDefault();
    });
   

    // var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    // $('.form').each(function() {
    //     var form = $(this),
    //         btn = form.find('.btn-pay');
    //     form.find('.field').addClass('empty_field');

    //     function checkInput() {
    //         form.find('.field').each(function() {
    //             if ($(this).val() != '') {
    //                 $(this).removeClass('empty_field');
    //                 if ($(this).hasClass('email')) {
    //                     mailfield = $(this)
    //                     if (pattern.test(mailfield.val())) {
    //                         mailfield.removeClass('empty_field');
    //                     } else {
    //                         mailfield.addClass('empty_field');
    //                     }
    //                 }
    //             } else {
    //                 $(this).addClass('empty_field');
    //             }
    //         });
    //     }

    //     function lightEmpty() {
    //         form.find('.empty_field').addClass('error');
    //         setTimeout(function() {
    //             form.find('.empty_field').removeClass('error');
    //         }, 1000);
    //     }
    //     setInterval(function() {
    //         checkInput();
    //         var sizeEmpty = form.find('.empty_field').length;
    //         if (sizeEmpty > 0) {
    //             if (btn.hasClass('disabled')) {
    //                 return false
    //             } else {
    //                 btn.addClass('disabled')
    //             }
    //         } else {
    //             btn.removeClass('disabled')
    //         }

    //     }, 500);
    //     btn.click(function() {
    //         if ($(this).hasClass('disabled')) {
    //             lightEmpty();
    //             return false
    //         } else {
    //             form.submit(function(event) {
    //                 var th = $(this);

                    
    //                 event.preventDefault();
    //             });
    //         }
    //     });
    // });

// var input = document.querySelector(".phone");
// window.intlTelInput(input, {
//   initialCountry: "auto",
//   allowDropdown: false,
//   customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//             return "";
//         },
//         // autoHideDialCode: false,
//         placeholderNumberType: 'MOBILE',
//         defaultCountry: "ua",
//         preferredCountries: ["ua", "ru"],
//   geoIpLookup: function(callback) {
//     $.get('https://api.sypexgeo.net/json/',  function(resp) {
//       var countryCode = resp.country.iso;
//       callback(countryCode);
//     });
//   },
//         nationalMode: !1,
//   utilsScript: "js/utils.js" // just for formatting/placeholders etc
// });

// $("[type=tel]").on('keypress', function(event) {
//                 event = event || window.event;
//                 // console.log(event.charCode)
//                 if (event.charCode && (event.charCode < 43 || event.charCode > 57))
//                     return false;
//             });

// phone = $("input[type='tel']")
//     var iti = $("input[type='tel']").intlTelInput({
//         allowDropdown: false,
//         // onlyCountries: ["ru", "ua", "az", "by", "am", "kz", "kg", "md", "tj", "tm", "uz", "us", "gb", "at", "al", "ad", "be", "bg", "va", "hu", "de", "gr", "dk", "ie", "is", "es", "it", "lv", "lt", "li", "lu", "mk", "mt", "mc", "nl", "no", "pl", "pt", "ro", "sm", "rs", "sk", "sl", "fi", "fr", "hr", "me", "cz", "ch", "se", "ee"],
//         initialCountry: "auto",
//         customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//             return "";
//         },
//         defaultCountry: "ua",
//         preferredCountries: ["ua", "ru"],
//         nationalMode: !1,
//         geoIpLookup: function(callback) {
//     $.get('https://api.sypexgeo.net/json/',  function(resp) {
//       var countryCode = resp.country.iso;
//       callback(countryCode);
//     });
//   },
//         // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/14.0.6/js/utils.js",
//     });
// $.get('https://api.sypexgeo.net/json/',  function(resp) {
//       var country = resp.country.name_ru;
//       // console.log(country)
//       $('[name=country]').val(country)
//     });

if (isMobile == false) {
        

   } else {


   }


   var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label  = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
    console.log(e)
    if( fileName )
      label.querySelector( '.paragraph' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});

// var searchInput = 'adress_ru_1';
// var autocomplete;
    
  
    // google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //     var near_place = autocomplete.getPlace();
    //     document.getElementById('loc_lat').value = near_place.geometry.location.lat();
    //     document.getElementById('loc_long').value = near_place.geometry.location.lng();
    
    //     document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
    //     document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    // });
 $('.link--toggle').on('click', function(event) {
   event.preventDefault();
   $(this).toggleClass('active');
   $('.section-mobile').toggleClass('open');
   if($(this).hasClass('active')) {
//     $('.section-mobile').find
//     $('select').styler({
//     onFormStyled: function() {
//       $('.jq-selectbox__dropdown ul').mCustomScrollbar({
//     theme:"dark"
// });
//     }
//   });
   }
 });
    
});