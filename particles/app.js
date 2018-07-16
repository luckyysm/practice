/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */

function particles (dom){
  // console.log(dom);
  particlesJS(dom, {
    particles: {
      color: '#254690',
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: .6,
      size: 2,
      size_random: true,
      nb: 100,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#264a9a',
        opacity: .6,
        width: 2,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 1.2
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push', // "push" or "remove"
          nb: 4
        }
      }
    },
    /* Retina Display Support */
    retina_detect: false
  });
};
particles('particles-js');
// particles('particles-right');
