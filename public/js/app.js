$(function(){
    'use strict';

    // debug
    // var script = document.createElement('script');
    // script.setAttribute('src', 'http://localhost:35729/livereload.js');
    // document.body.appendChild(script);

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
                    $('.items').append('<li class="item"><a href="'+ e.url +'"><img src="'+ e.img +'"alt="'+ e.alt +'"/></a><a href="'+ e.url +'"><h3 class="title">'+ e.title +'</h3></a><p>'+ e.content +'</p></li>')
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

        // Create a div containrer
        slides.wrapAll('<div id="slidesHolder"></div>');
        slides.css({ 'float' : 'left' });
        // Calculate div width
        $('#slidesHolder').css('width', slideWidth * numberOfSlides);

        // create nav buttons
        for (var i = 0; i < numberOfSlidesBlock; i++) {
                $('.buttons').append('<li><a  class="navButtons" href="#" id="'+ i +'"></a></li>');
        }

        // Pre-select starting block bullet
        selectedBullet();

        // Arrow events handler
        $('.navButtons').bind('click', function() {
            // Remove all selections
            $('.navButtons').removeClass('selected');
            $(this).addClass('selected');
            // Add current selection
            currentPosition = $(this).attr('id');
            moveSlide();
        });

        // managing blocks rotation
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

        // Animate blocks
        function moveSlide() {
        	$('#slidesHolder').animate({'marginLeft' : slidesBlockWidth*(-currentPosition)});
            selectedBullet();
        }

        // Bullets selection
        function selectedBullet() {
            // Remove all selections
            $('.navButtons').removeClass('selected');
            // Add current selection
            var currentBullet = $('#'+currentPosition);
            $(currentBullet).addClass('selected');
        }

        // Tell the buttons what to do when clicked
		$('.nav').bind('click', function() {
            console.log($(this).attr('id'));
			//determine new direction
            if(($(this).attr('id')=='rightNav')){
                direction = "right";
            }else{
                direction = "left"
            }
            changePosition();
		});
    }
    retriveContents();
});
