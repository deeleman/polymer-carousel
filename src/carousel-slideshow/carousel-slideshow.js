Polymer('carousel-slideshow', {
    slides: [],
    containerWidth: '600px',
    selectedSlideChanged: function(previousSlide, newSlide) {
        if(previousSlide) {
            previousSlide.setAttribute('class', '');
        }
        if(newSlide) {
            newSlide.setAttribute('class', 'carousel-slide-active');
        }
        this.containerWidth = newSlide.width + 'px';
    },
    play: function() {
        this.isPaused = false;
    },
    stop: function() {
        this.isPaused = true;
    },
    ready: function() {
        var slidesNodeList = this.querySelectorAll('img');
        this.slides = Array.prototype.slice.call(slidesNodeList, 0);
        this.selectedSlide = this.slides[0];
    }
});
