import {gsap} from '../lib/gsap-public/gsap-public/src/gsap-core.js';
//top nav
gsap.from(".top-nav",{opacity: 0, y: -100, duration: 0.26});

gsap.from(".front-wave",{opacity: 0, y: 100, duration: 0.36});
gsap.from(".back-wave",{opacity: 0, x: 30, duration: 0.66,delay:0.57});
gsap.from(".pattern7x7",{opacity: 0, y: 10,x:50, duration: 0.46,delay:0.7});