// * * * * GSAP OBJECT
// Create Animations
// Configure Settings
// Register plugins, eases, and effects
// Global control over all animations

// Part One - Create Animations
// 3 Main methods for creating tweens (change a single property of a single object over time) and adding them to timelines
// gsap.to()
// gsap.from()
// gsap.fromTo()

//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second. 
// gsap.to(".box", {rotation: 27, x: 100, duration: 1});

// * * * * INIT PIECES
// init = function () {
//     gsap.to(".husky", {x: 750, duration: 3});
// };

// * * * * DOCUMENT READY
$(() => {
    // init();

    //rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second. 


    var tl = gsap.timeline();
    //sequenced one-after-the-other
    tl.to(".husky", {rotation: -50, x: 100, duration: 3}) //notice that there's no semicolon!
    tl.to(".husky", {rotation: 50, x: -125, duration: 2})
    tl.to(".husky", {duration: 3, rotation: 360})
    tl.to(".husky", {rotation: -50, x: 100, duration: 1});


}); // * * * * END OF DOCUMENT READY

