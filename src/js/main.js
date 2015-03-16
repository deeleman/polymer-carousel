function Carousel($carousel) {
    "use strict";

    var PLAYBACK_INTERVAL = 5000;
	var self = this,
		prevButton = $carousel.querySelector('.carousel-nav .carousel-nav-skip-prev'),
		nextButton = $carousel.querySelector('.carousel-nav .carousel-nav-skip-next'),
		navBrowser = $carousel.querySelector('.carousel-nav .carousel-nav-browser');

    self.slides = $carousel.getElementsByClassName('carousel-slide');
    self.activeSlideIndex = 0;

    self.slidesWrapper = $carousel.querySelector('.carousel-shell .carousel-slides-wrapper');
    self.slidesWrapper.addEventListener('mouseover', self.stop.bind(self), false);
    self.slidesWrapper.addEventListener('mouseout', self.play.bind(self), false);

    navBrowser.addEventListener('mouseover', self.stop.bind(self), false);
    navBrowser.addEventListener('mouseout', self.play.bind(self), false);
    navBrowser.addEventListener('click', function () {
        self.stop();
        self.refresh();
    }, false);

    prevButton.addEventListener('click', self.prev.bind(self), false);
    nextButton.addEventListener('click', self.next.bind(self), false);

    var populateBrowser = (function (self, slidesLength, container) {
        self.browserShortcutLinks = [];
        var createNode = function(index) {
            var browserNodeLink = document.createElement('a'),
            browserNodeListItem = document.createElement('li');

            browserNodeLink.innerHTML = 'Slide ' + (index + 1);
            browserNodeLink.setAttribute('href', '#slide' + index);
            browserNodeLink.setAttribute('class', '');
            browserNodeLink.setAttribute('data-rel', 'slide-' + index);

            self.browserShortcutLinks.push(browserNodeLink);

            browserNodeListItem.appendChild(browserNodeLink);
            container.appendChild(browserNodeListItem);
            browserNodeLink.addEventListener('click', self.gotoSlideIndex.bind(self, index), false);
        };

        for (var i = 0; i < slidesLength; i++) {
            createNode(i);
        }
    }(self, self.slides.length, navBrowser));

    self.gotoSlideIndex(self.activeSlideIndex);

    self.paused = false;
    self.refresh = function () {
        clearTimeout(self.refreshId);
        self.refreshId = setTimeout(function () {
            if(!self.paused) {
                self.next();
            }
            self.refresh();
        }, PLAYBACK_INTERVAL);
    };
    self.refresh();
}

Carousel.prototype.next = function () {
    var self = this;
    self.activeSlideIndex += 1;
    if(self.activeSlideIndex >= self.slides.length) {
        self.activeSlideIndex = 0;
    }
    self.gotoSlideIndex(self.activeSlideIndex);
};

Carousel.prototype.prev = function () {
    var self = this;
    self.activeSlideIndex -= 1;
    if(self.activeSlideIndex < 0) {
        self.activeSlideIndex = self.slides.length-1;
    }
    self.gotoSlideIndex(self.activeSlideIndex);
};

Carousel.prototype.gotoSlideIndex = function (index) {
    var self = this;
    self.activeSlideIndex = index;
    for (var i = 0; i < self.slides.length; i++) {
        self.slides[i].className = self.slides[i].className.replace(/(?:^|\s)carousel-slide-active(?!\S)/g , '');
        self.browserShortcutLinks[i].className = self.browserShortcutLinks[i].className.replace(/(?:^|\s)carousel-nav-page-active(?!\S)/g , '');
    }
    self.browserShortcutLinks[index].className = self.browserShortcutLinks[index].className + 'carousel-nav-page-active';
    self.slides[index].className = self.slides[index].className + ' carousel-slide-active';

    // Polifyll the above with jQuery.animate() when time allows it to improve support for IE9+ & Mozilla
    self.slidesWrapper.style.width = 'auto';
    if(self.slides[index].width > 0) {
        self.slidesWrapper.style.width = self.slides[index].width + 'px';
    }
};

Carousel.prototype.stop = function() {
    this.paused = true;
    clearTimeout(this.refreshId);
};

Carousel.prototype.play = function() {
    this.paused = false;
    this.refresh();
};

(function (document) {
	"use strict";
	var carousels = document.getElementsByClassName('carousel');

	var instanceCarousel = function ($carousel) {
		var carousel = new Carousel($carousel);
	};

	for (var i = 0; i < carousels.length; i++) {
        instanceCarousel(carousels[i]);
	}

}(document));
