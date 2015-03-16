# polymer-carousel
A reusable Polymer component for rendering (still not responsive) image slideshows

### Documentation in progress
The current project lacks from a  decent documetnation yet. In the meantime, refer to the code in order to understand its functionality and follow the instructions below to setup a working environment for it, building or even packaging the component.

### Yet to be done
The following is a list of stuff still required before going gold:

* The component should expose public `width`and `height` properties and honor them where defined. Resizing itself on a fluid way otherwise.
* Images should adapt themselves to the container and not all the way around.
* Support for mobile gestures such as `swipeLeft` and `swipeRight`.
* Replace the *fade in* transition by horizontal/vertical sliding
* Polyfill transitions with jQuery animate (or any other CSS transitions polifyll library) for MSIE9

### Installation and deployment

#### Installing dependencies

All dependencies are managed by means of NPM, except for the basic platform files for building Polymer applications. These are managed by means of Bower using Gulp as a friednly interface.

Please open a terminal window and proceed with installation by means of the following command:

````
$ npm install
`````

##### Working against the component

In order to ease the development tasks for maintaining the component you can run the dev tools provided:

```
$ gulp dev
````

Basically all Polymer dependencies will be downloaded through Bower and the JavaScript and SCSS files will be build and watched for changes.


##### Building the component

In a similar fashion as we did previously, you just need to execute the following and... Profit! The component and its subcomponents can be then consumed form the `/components/carousel-slideshow` folder.

```
$ gulp build
````

##### Packaging the component

The component and all its dependencies can be bundled in a single file to ease its distribution. For doing so, make sure a convenient gulp task will build and package the component for you by executing the following command:

```
$ gulp package
````

The component and all its dependencies including the files required for bootstrapping the component will be bundled into a single file for your convenience, located at `/components/packaged/polymer-carousel.html`. If you want to check the component live a demo has been added for your convenience, and can be viewed at `/demo/index.html`. Feel free to take a look into it by spawning a web server of your choice at the root folder. Eg

```
$ git clone https://github.com/deeleman/polymer-carousel.git
$ cd polymer-carousel
$ npm install
$ gulp package
$ python -m SimpleHTTPServer 8080
```

The contents will be available for your viewing pleasure at `http://localhost:8080` then.

###### Please note: This a very early work and is not meant for release.

Copyright (C) 2015, Paul Deeleman <deeleman@gmail.com>
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
