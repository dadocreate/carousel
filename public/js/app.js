$(function(){
    'use strict';

    // debug
    var script = document.createElement('script');
    script.setAttribute('src', 'http://localhost:35729/livereload.js');
    document.body.appendChild(script);

    function retriveContents(){
        $.ajax({
            url: "basic_carousel.json",
            //force to handle it as text
            dataType: "text",
            success: function(data) {
                //data downloaded so we call parseJSON function
                //and pass downloaded data

                var json = $.parseJSON(data);
                console.log(JSON.stringify(json));

                //now json variable contains data in json format
                //let's display a few items
                $.each(json.data.carousel.items, function(i, e) {
                    $('.items').append('<li class="item"><a href="'+ e.url +'"><img src="'+ e.img +'"alt="'+ e.alt +'"/></a><a href="'+ e.url +'"><h3>'+ e.title +'</h3></a><p>'+ e.content +'</p></li>')
                });

                initCarousel();
            }
        });

    }

    function initCarousel(){
        var currentPosition = 0;
        var slideWidth = 235;
        var slides = $('.item');
        var numberOfSlides = slides.length;
        var numberOfSlidesBlock = numberOfSlides / 4;
        var slidesBlockWidth = slideWidth * 4;
        var direction;

        slides.wrapAll('<div id="slidesHolder"></div>');
        slides.css({ 'float' : 'left' });
        $('#slidesHolder').css('width', slideWidth * numberOfSlides);

        // create nav buttons
        for (var i = 0; i < numberOfSlidesBlock; i++) {
            $('.buttons').append('<li><a  class="navButtons" href="#" id="'+ i +'">'+ i +'</a></li>');
        }

        $('.navButtons').bind('click', function() {
            $('.navButtons').removeClass('selected');
            $(this).addClass('selected');

            console.log($(this).attr('id'));
            currentPosition = $(this).attr('id');
            moveSlide();
        });

        function changePosition() {
            if(direction == "right"){
                if (currentPosition >= numberOfSlidesBlock - 1) {
                    currentPosition = 0;
                }else{
                    currentPosition++;
                }
            }else if(direction == "left"){
                if(currentPosition == 0){
                    currentPosition = numberOfSlidesBlock - 1;
                }else{
                    currentPosition--;
                }
            }
        	moveSlide();
        }

        function moveSlide() {
        	$('#slidesHolder').animate({'marginLeft' : slidesBlockWidth*(-currentPosition)});
        }

        //tell the buttons what to do when clicked
		$('.nav').bind('click', function() {
            console.log($(this).attr('id'));
			//determine new position
            if(($(this).attr('id')=='#rightNav')){
                direction = "right";
            }else{
                direction = "left"
            }
            changePosition();
		});
    }

    retriveContents();


});
