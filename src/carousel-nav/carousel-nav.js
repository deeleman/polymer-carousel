Polymer('carousel-nav', {
    selectedSlideIndex: 0,
    isPaused: false,
    next: function() {
        this.selectedSlideIndex += 1;
        if(this.selectedSlideIndex >= this.slides.length) {
            this.selectedSlideIndex = 0;
        }
        this.selectedSlide = this.slides[this.selectedSlideIndex];
    },
    prev: function() {
        this.selectedSlideIndex -= 1;
        if(this.selectedSlideIndex < 0) {
            this.selectedSlideIndex = this.slides.length-1;
        }
        this.selectedSlide = this.slides[this.selectedSlideIndex];
    },
    gotoSlide: function(event, detail, sender) {
        this.selectedSlide = sender.templateInstance.model.slide;
        // TODO: Find an elegant way to fetch the index from the current selected model
        for (var i = 0; i < this.slides.length; i++) {
            if(this.slides[i] === this.selectedSlide) {
                this.selectedSlideIndex = i;
            }
        }
    },
    timeoutThread : null,
    refresh: function() {
        var self = this;
        clearTimeout(this.timeoutThread);
        self.timeoutThread = setTimeout(function () {
            self.next();
            self.refresh();
        }, self.refreshRatio);
    },
    isPausedChanged: function(wasPaused, isPaused) {
        if(this.isPaused) {
            clearTimeout(this.timeoutThread);
        } else {
            this.refresh();
        }
    },
    ready: function() {
        this.refresh();
    }
});
