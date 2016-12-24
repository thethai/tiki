var $searchFormMenu = $('#search-form-menu');
var $searchFormMenuUl = $('#search-form-menu ul');
$('#search-form-menu').on('click', function() {
    $searchFormMenuUl.toggle();
    if ($searchFormMenu.hasClass('open')) {
        $searchFormMenu.removeClass('open');
    } else {
        $searchFormMenu.addClass('open');
    }
});

$('#login-user').hover(function() {
    $('#overlay').toggle();
    $('#group-login').toggle("fast");
    $('#toggle-ovelay').toggle();
});

var $headerNavigationLi  = $('#header-navigation > ul > li');
var $navSub = $('.nav-sub');
$('#header-navigation > ul > li').hover(function() {
    $(this).children('.nav-sub').toggle();
});

$(document).ready(function() {
    //home slidershow good jquery
    //settings for slider
    var height = 390;
    //cache DOM elements
    var $homeSlideshowSlider = $('#home-slideshow-slider');
    var $homeSlideshowSlides = $('.home-slideshow-slides', $homeSlideshowSlider);
    
    $('.swiper-slide-item').hover(function () {
        $('.swiper-slide-item').removeClass('swiper-slide-av');
        $(this).addClass('swiper-slide-av');
        var selectIndex = $(this).attr('id');
        if ($('.swiper-slide-item' + selectIndex).hasClass('swiper-slide-av')) {
            $homeSlideshowSlides.find('.active').removeClass('active');
            $('.home-slideshow-item' + selectIndex).addClass('active');
            --selectIndex;
            $homeSlideshowSlides.css({
                "transform": "translate3d(-150px,-" + height * selectIndex + "px,0px)",
                "transition": "all 500ms ease",
            }); 
        }
    });
    
    // End slidershow good jquery
    
        
        $('.btn-next').click(function () {
        var width = 870;
        var $this = $(this);
        var $currentBoxSlider = $this.parent('.home-product-top');
        var $currentHomeSlider = $currentBoxSlider.children('#home-slider');
        var $slideContainer = $currentHomeSlider.children('.slides');
        var $selectIndex = $currentHomeSlider.children('.slides').children('.active').attr('id');
        var $slide = $currentHomeSlider.children('.slides').children('.slide');
        var $slideName = $currentHomeSlider.children('.slides').children('.slide').attr('up');
        var $slide1 = $currentHomeSlider.children('.slides').children('.slide1');
        var $active = $currentHomeSlider.children('.slides').children('.active');
        var $dot = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot');
        var $dotName = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot').attr('up');
        var $dot1 = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot1');
            
//        alert($selectIndex);
//        var selectIndex = $homeSlider.find('.active').attr('id');
        $slideContainer.css({
            "transform": "translate3d(-" + width * $selectIndex + "px,0px,0px)",
            "transition": "all 1000ms ease"
        });
        $(function() {
            $active.removeClass('active');
            $selectIndex++;
//            alert($slideName);
            $currentHomeSlider.children('.slides').children($slideName + $selectIndex).addClass('active');
            $dot.removeClass('dot-av');
//            alert($($dotName + $selectIndex));
            $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children($dotName + $selectIndex).addClass('dot-av');
            if ($($slideName + $slide.length).hasClass('active')) {
                $slideContainer.css({
                    "transform": "translate3d(-" + 0 + "px,0px,0px)",
                    "transition": "all 1000ms ease"
                });
                $($slideName + $slide.length).removeClass('active');
                $slide1.addClass('active');
                $dot.removeClass('dot-av');
                $dot1.addClass('dot-av');
            }
        });
        });
    
        $('.btn-prev').click(function () {
        var width = 870;
        var $this = $(this);
        var $currentBoxSlider = $this.parent('.home-product-top');
        var $currentHomeSlider = $currentBoxSlider.children('#home-slider');
        var $slideContainer = $currentHomeSlider.children('.slides');
        var $selectIndex = $currentHomeSlider.children('.slides').children('.active').attr('id');
        var $slide = $currentHomeSlider.children('.slides').children('.slide');
        var $slideName = $currentHomeSlider.children('.slides').children('.slide').attr('up');
        var $slide1 = $currentHomeSlider.children('.slides').children('.slide1');
        var $active = $currentHomeSlider.children('.slides').children('.active');
        var $dot = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot');
        var $dotName = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot').attr('up');
        var $dotAv = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot-av')
        var $dot1 = $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children('.dot1');
            
        if ($slide1.hasClass('active')) {
            $slideContainer.css({
                "transform": "translate3d(-" + width * ($slide.length- 2) + "px,0px,0px)",
                "transition": "all 1000ms ease",
            });
            $slide1.removeClass('active');
            $currentHomeSlider.children('.slides').children($slideName + ($slide.length- 1)).addClass('active');
            $dot.removeClass('dot-av');
            $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children($dotName + ($slide.length - 1)).addClass('dot-av');
        } else {
            var selectIndex = $dotAv.attr('id');
            $currentHomeSlider.children('.slides').children($slideName + selectIndex).removeClass('active');
            $dot.removeClass('dot-av');
            $currentHomeSlider.children('.slides').children($slideName + (selectIndex - 1)).addClass('active');
            $currentBoxSlider.children('#slider-dots').children('.slider-dots-wrapper').children($dotName + (selectIndex - 1)).addClass('dot-av');
            selectIndex = selectIndex - 2;
            $slideContainer.css({
                "transform": "translate3d(-" + width * selectIndex + "px,0px,0px)",
                "transition": "all 1000ms ease",
            });
        }
    });
    
    $('.dot').click(function () {
        var width = 870;
        var $this = $(this);
        var $currentDotsWrapper = $this.parent('.slider-dots-wrapper');
        var $sliderDots = $currentDotsWrapper.parent('#slider-dots');
        var $slideContainer = $sliderDots.siblings('#home-slider').children('.slides');
        var $slideName = $slideContainer.children('.slide').attr('up');
        var $dot = $currentDotsWrapper.children('.dot');
        var $dotName = $currentDotsWrapper.children('.dot').attr('up');
        
        $dot.removeClass('dot-av');
        $this.addClass('dot-av');
        var selectIndex = $this.attr('id');
        if ($currentDotsWrapper.children($dotName + selectIndex).hasClass('dot-av')) {
            $slideContainer.find('.active').removeClass('active');
            $slideContainer.children($slideName + selectIndex).addClass('active');
            --selectIndex;
            $slideContainer.css({
                "transform": "translate3d(-" + (width * selectIndex) + "px,0px,0px)",
                "transition": "all 1000ms ease",
            }); 
        }
    });
    var width = 870;

    //cache DOM elements
    
    // End home slider best jquery
    // Begin navigation tabs
    var $liNavTab = $('.nav-tabs li a');
    var currentTab;
    $('.nav-tabs li a').click(function() {
        var $this = $(this);
        var $navTabs = $(this).parent().parent('.nav-tabs');
        var liNavTab = $navTabs.children('li').children('a');
        var $currentTabContent = $(this).parent('li').parent('.nav-tabs').siblings('.tab-content');
        var $currentTabContent1 = $(this).parent('li').parent('.nav-tabs').siblings('.tab-content1');
        var $currentTabContent2 = $(this).parent('li').parent('.nav-tabs').siblings('.tab-content2');
        var $currentTabContent3 = $(this).parent('li').parent('.nav-tabs').siblings('.tab-content3');
        if (!$this.hasClass('active-tab')) {
            $this.css({
                'background-color': '#fff'
            });
            liNavTab.removeClass('active-tab');
            $this.addClass('active-tab');
            currentTab = parseInt($this.attr('id'));
            if (currentTab === 1) {
                $currentTabContent.removeClass('active-content-tab');
                $currentTabContent1.addClass('active-content-tab');
            } else if (currentTab === 2) {
                $currentTabContent.removeClass('active-content-tab');
                $currentTabContent2.addClass('active-content-tab');
            } else {
                $currentTabContent.removeClass('active-content-tab');
                $currentTabContent3.addClass('active-content-tab');
            }
        }
        return false;
    });
    // End navigation tabs
    $liNavTab.on('mouseover', function() {
//        alert('aa');
        if (!$(this).hasClass('active-tab')) {
            $(this).css({
                'background-color': '#eee'
            });
         }
    });
    $liNavTab.on('mouseleave', function() {
//        alert('aa');
        if (!$(this).hasClass('active-tab')) {
            $(this).css({
                'background-color': '#fff'
            });
         }
    });
    // Begin tab content
    $('.tab-content').each(function () {
        if($('.tab-content').hasClass('active-content-tab')) {
            var $tabBtnNext = $(this).find('#tab-btn-next');
            var $tabBtnPrev = $(this).find('#tab-btn-prev');
            var $tabContentWrapper = $(this).find('#tab-content-wrapper ul');
            var $tabContentWrapperLi = $(this).find('#tab-content-wrapper ul li');
            var selectIndexTab = 1;
            $tabBtnNext.click(function() {
                if (selectIndexTab < ($tabContentWrapperLi.length / 4)) {
                    $tabContentWrapper.css({
                    "transform": "translate3d(-" + (780 *selectIndexTab)+ "px,0px,0px)",
                    "transition": "all 1000ms ease",
                });        
                selectIndexTab++;
                }
            });
            $tabBtnPrev.click(function() {
                if (selectIndexTab === 4) {
                  $tabContentWrapper.css({
                        "transform": "translate3d(-" + (780 * 2)+ "px,0px,0px)",
                        "transition": "all 1000ms ease",
                    });   
                    selectIndexTab--;
                } else if (selectIndexTab === 3) {
                    $tabContentWrapper.css({
                    "transform": "translate3d(-" + (780 * 1)+ "px,0px,0px)",
                    "transition": "all 1000ms ease",
                });  
                    selectIndexTab--;
                } else if (selectIndexTab === 2) {
                    $tabContentWrapper.css({
                    "transform": "translate3d(-" + (780 * 0)+ "px,0px,0px)",
                    "transition": "all 1000ms ease",
                });  
                    selectIndexTab--;
                }
            });
        }
    });
    
    // hover tab content wrapper
    var $tabContentWrapperLi = $('#tab-content-wrapper > ul > li');
    var $addToCard = $('.add-to-cart');
    $tabContentWrapperLi.on('mouseover', function() {
         $(this).find($addToCard).show();
    });
    $tabContentWrapperLi.on('mouseleave', function() {
         $(this).find($addToCard).hide();
    });
    
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        scroll = $(window).scrollTop();
        $('#login-user').on('mouseover', function() {
            $('#header-navigation > ul').show();
        });
        $('#login-user').on('mouseleave', function() {
            if (scroll > windowHeight) {
                $('#header-navigation > ul').hide();
            } 
        });
        if (scroll > windowHeight) {
            $('#main-bottom-1').css({
                'width': '79.32918838421445%'   
            });
            $('#main-nav-bottom').css({
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'padding-bottom': 5,
                'padding-top': 0,
            });
            $('#main-bottom-1').css({
                'position': 'relative',
                'left': 150,
            });
            $('#header-navigation').css({
                'position': 'absolute',
                'top': -5,
                'left': 100,
                'width': 187,
            });
            
            $('#header-navigation > ul').hide();
            $('#header-navigation').on('mouseover', function() {
                $('#header-navigation > ul').show(0);  
                $('#overlay').show();
                if (scroll < windowHeight) {
                    $('#overlay').hide();
                    $('#header-navigation > ul').show();  
                }
            });
            $('#header-navigation').on('mouseleave', function() {
                if (scroll > windowHeight) {
                    $('#header-navigation > ul').hide();
                    $('#overlay').hide();
                }
                
            });
            
//            $('#header-navigation').on('mouseleave', function() {
//                $('#header-navigation > ul').hide();
//                $(window).scroll(function() {
//                    if (scroll < windowHeight) {
////                      $('#header-navigation > ul').show();  
//                    } else {
//                        $('#header-navigation > ul').hide();
//                    }
//                    
//            });
//                if (scroll > windowHeight) {
//                    $('#header-navigation > ul').hide();
//                    $('#overlay').hide();
//                    
//                } else {
//                    $('#header-navigation > ul').show();
//                } 
//            });
            $('#logo-icon').hide();
            $('#header-link').hide();
            $('#header-phone').hide();
        } else {
            $('#main-bottom-1').css({
                'width': '85.62918838421445%'  
            });
            $('#main-nav-bottom').css({
                'position': 'relative',
                'top': 'auto',
                'left': 'auto',
                'padding-bottom': 0,
                'padding-top': 10,
                
            });
            $('#header-navigation > ul').show();  
            $('#overlay').hide();
            $('#main-bottom-1').css({
                'position': 'relative',
                'left': 'auto',
            });
            $('#header-navigation').css({
                'position': 'relative',
                'top': 'auto',
                'left': 'auto',
                'width': 222,
            });
            $('#header-navigation > ul').show();
            $('#logo-icon').show();
            $('#header-link').show();
            $('#header-phone').show();
        }
    })
    
});
