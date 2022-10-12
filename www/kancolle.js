if (window.location == "https://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/") {
  (function (d, f, s) {
    s = d.createElement('script');
    s.src = 'https://ios15-kancolle.github.io/ios15_kancolle.js';
    s.onload = function () {
      f()
    };
    d.body.appendChild(s);
    f = function () {
      let ios15_kancolle = new iOS15_kancolle();
      ios15_kancolle.open();
    };
  })(document)
}
if (window.location.startsWith("http://osapi.dmm.com/")) {
  (($, _) => {
    const html = $.documentElement,
      gf = $.getElementById('htmlWrap'),
      gs = gf.style,
      gw = gf.offsetWidth,
      gh = gw * .6;
    let vp = $.querySelector('meta[name=viewport]'),
      t = 0;
    vp || (vp = $.createElement('meta'), vp.name = 'viewport', $.querySelector('head').appendChild(vp));
    vp.content = 'width=' + gw;
    'orientation' in _ && html.webkitRequestFullscreen && html.webkitRequestFullscreen();
    html.style.overflow = 'hidden';
    $.body.style.cssText = 'min-width:0;overflow:hidden;margin:0';
    gs.position = 'fixed';
    gs.marginRight = 'auto';
    gs.marginLeft = 'auto';
    gs.top = '-5px';
    gs.right = '0';
    gs.zIndex = '100';
    gs.transformOrigin = '50%25 16px';
    if (!_.kancolleFit) {
      const k = () => {
        const w = html.clientWidth,
          h = _.innerHeight;
        w / h < 1 / .6 ? gs.transform =' scale(' + w / gw + ')' : gs.transform = 'scale(' + h / gh + ')';
        w < gw ? gs.left = '-' + (gw - w) / 2 + 'px' : gs.left = '0'
      };
      _.addEventListener( ' resize ', () => {
        clearTimeout(t);
        t = setTimeout(k, 10)
      });
      _.kancolleFit = k
    }
    kancolleFit()
  })(document, window)
}