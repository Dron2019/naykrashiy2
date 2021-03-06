// class Scrooth {
//     constructor({
//         element = window,
//         strength = 20,
//         acceleration = 3.5,
//         deceleration = 0.9
//     } = {}) {
//         this.self = this;
//         this.element = element;
//         this.distance = strength;
//         this.acceleration = acceleration;
//         this.deceleration = deceleration;
//         this.running = false;

//         this.element.addEventListener('wheel', this.scrollHandler.bind(this));
//         this.element.addEventListener('mousewheel', this.scrollHandler.bind(this));
//         this.scroll = this.scroll.bind(this);

//         document.addEventListener('mousedown', function(e) {
//             function clickedOnScrollbar(mouseX) {
//                 if (document.documentElement.clientWidth <= mouseX) {
//                     return true
//                 }
//                 return false;
//             }
//             if (clickedOnScrollbar(e.clientX)) this.running = false;
//         }.bind(this))
//     }

//     scrollHandler(e) {
//         if (!this.running) {
//             this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//             this.running = true;
//             this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//             this.isDistanceAsc = true;
//             this.scroll();
//         } else {
//             this.isDistanceAsc = false;
//             this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//         }
//     }

//     scroll() {
//         if (this.running) {
//             Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
//             this.top += this.currentDistance;
//             this.element.scrollTo(0, this.top);

//             this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//             ((Math.abs(this.currentDistance) < 0.1) && this.isDistanceAsc === false) ||
//             this.top > ($(document).height() - document.documentElement.clientHeight) ||
//                 this.top <= 0 ? this.running = false : 1;

//             requestAnimationFrame(this.scroll);
//         }
//     }

// }


// // const bodyy = new Scrooth();



// var keys = {
//     37: 1,
//     38: 1,
//     39: 1,
//     40: 1
// };

// function preventDefault(e) {
//     e = e || window.event;
//     if (e.preventDefault)
//         e.preventDefault();

//     e.returnValue = false;
//     // window.navigator.vendor == 'Google Inc.' ? console.clear() : null;
// }

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

// function disableScroll() {
//     if (window.addEventListener) // older FF
//         window.addEventListener('DOMMouseScroll', preventDefault, {
//         passive: false
//     });
//     document.addEventListener('wheel', preventDefault, {
//         passive: false
//     }); // Disable scrolling in Chrome
//     window.onwheel = preventDefault; // modern standard
//     window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//     window.ontouchmove = preventDefault; // mobile
//     document.onkeydown = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     document.removeEventListener('wheel', preventDefault, {
//         passive: false
//     }); // Enable scrolling in Chrome
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }

// window.addEventListener('DOMContentLoaded', disableScroll);