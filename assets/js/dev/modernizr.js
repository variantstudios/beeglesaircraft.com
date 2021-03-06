// This custom modernizr build includes tests for: flexbox, css grids, media queries and also includes the HTML5 shiv
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexboxlegacy-mediaqueries-setclasses-shiv !*/
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, a, i, s;
    for (var l in S)
      if (S.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = S[l]),
          t.name &&
						(e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, 'function') ? t.fn() : t.fn, a = 0; a < e.length; a++)
          (i = e[a]),
          (s = i.split('.')),
          1 === s.length
            ? (Modernizr[s[0]] = o)
            : (!Modernizr[s[0]] ||
									Modernizr[s[0]] instanceof Boolean ||
									(Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
            (Modernizr[s[0]][s[1]] = o)),
          C.push((o ? '' : 'no-') + s.join('-'));
      }
  }
  function a(e) {
    var t = E.className,
      n = Modernizr._config.classPrefix || '';
    if ((x && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
      t = t.replace(r, '$1' + n + 'js$2');
    }
    Modernizr._config.enableClasses &&
			((t += ' ' + n + e.join(' ' + n)), x ? (E.className.baseVal = t) : (E.className = t));
  }
  function i() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : x
        ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
        : t.createElement.apply(t, arguments);
  }
  function s() {
    var e = t.body;
    return e || ((e = i(x ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function l(e, n, r, o) {
    var a,
      l,
      u,
      c,
      f = 'modernizr',
      d = i('div'),
      m = s();
    if (parseInt(r, 10)) for (; r--; ) (u = i('div')), (u.id = o ? o[r] : f + (r + 1)), d.appendChild(u);
    return (
      (a = i('style')),
      (a.type = 'text/css'),
      (a.id = 's' + f),
      (m.fake ? m : d).appendChild(a),
      m.appendChild(d),
      a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(t.createTextNode(e)),
      (d.id = f),
      m.fake &&
				((m.style.background = ''),
				(m.style.overflow = 'hidden'),
				(c = E.style.overflow),
				(E.style.overflow = 'hidden'),
				E.appendChild(m)),
      (l = n(d, e)),
      m.fake
        ? (m.parentNode.removeChild(m), (E.style.overflow = c), E.offsetHeight)
        : d.parentNode.removeChild(d),
      !!l
    );
  }
  function u(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function c(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, '');
  }
  function f(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  function d(e, t, n) {
    var o;
    for (var a in e) if (e[a] in t) return n === !1 ? e[a] : ((o = t[e[a]]), r(o, 'function') ? f(o, n || t) : o);
    return !1;
  }
  function m(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return '-' + t.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }
  function p(t, n, r) {
    var o;
    if ('getComputedStyle' in e) {
      o = getComputedStyle.call(e, t, n);
      var a = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (a) {
        var i = a.error ? 'error' : 'log';
        a[i].call(a, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function h(t, r) {
    var o = t.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(m(t[o]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var a = []; o--; ) a.push('(' + m(t[o]) + ':' + r + ')');
      return (
        (a = a.join(' or ')),
        l('@supports (' + a + ') { #modernizr { position: absolute; } }', function(e) {
          return 'absolute' == p(e, null, 'position');
        })
      );
    }
    return n;
  }
  function g(e, t, o, a) {
    function s() {
      f && (delete j.style, delete j.modElem);
    }
    if (((a = r(a, 'undefined') ? !1 : a), !r(o, 'undefined'))) {
      var l = h(e, o);
      if (!r(l, 'undefined')) return l;
    }
    for (var f, d, m, p, g, v = [ 'modernizr', 'tspan', 'samp' ]; !j.style && v.length; )
      (f = !0), (j.modElem = i(v.shift())), (j.style = j.modElem.style);
    for (m = e.length, d = 0; m > d; d++)
      if (((p = e[d]), (g = j.style[p]), u(p, '-') && (p = c(p)), j.style[p] !== n)) {
        if (a || r(o, 'undefined')) return s(), 'pfx' == t ? p : !0;
        try {
          j.style[p] = o;
        } catch (y) {}
        if (j.style[p] != g) return s(), 'pfx' == t ? p : !0;
      }
    return s(), !1;
  }
  function v(e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + ' ' + N.join(i + ' ') + i).split(' ');
    return r(t, 'string') || r(t, 'undefined')
      ? g(s, t, o, a)
      : ((s = (e + ' ' + T.join(i + ' ') + i).split(' ')), d(s, t, n));
  }
  function y(e, t, r) {
    return v(e, n, n, t, r);
  }
  var C = [],
    S = [],
    b = {
      _version: '3.6.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e]);
        }, 0);
      },
      addTest: function(e, t, n) {
        S.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function(e) {
        S.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = b), (Modernizr = new Modernizr());
  var E = t.documentElement,
    x = 'svg' === E.nodeName.toLowerCase();
  x ||
		!(function(e, t) {
		  function n(e, t) {
		    var n = e.createElement('p'),
		      r = e.getElementsByTagName('head')[0] || e.documentElement;
		    return (n.innerHTML = 'x<style>' + t + '</style>'), r.insertBefore(n.lastChild, r.firstChild);
		  }
		  function r() {
		    var e = C.elements;
		    return 'string' == typeof e ? e.split(' ') : e;
		  }
		  function o(e, t) {
		    var n = C.elements;
		    'string' != typeof n && (n = n.join(' ')),
		    'string' != typeof e && (e = e.join(' ')),
		    (C.elements = n + ' ' + e),
		    u(t);
		  }
		  function a(e) {
		    var t = y[e[g]];
		    return t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t;
		  }
		  function i(e, n, r) {
		    if ((n || (n = t), f)) return n.createElement(e);
		    r || (r = a(n));
		    var o;
		    return (
		      (o = r.cache[e]
		        ? r.cache[e].cloneNode()
		        : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)),
		      !o.canHaveChildren || p.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
		    );
		  }
		  function s(e, n) {
		    if ((e || (e = t), f)) return e.createDocumentFragment();
		    n = n || a(e);
		    for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
		    return o;
		  }
		  function l(e, t) {
		    t.cache ||
					((t.cache = {}),
					(t.createElem = e.createElement),
					(t.createFrag = e.createDocumentFragment),
					(t.frag = t.createFrag())),
		    (e.createElement = function(n) {
		      return C.shivMethods ? i(n, e, t) : t.createElem(n);
		    }),
		    (e.createDocumentFragment = Function(
		      'h,f',
		      'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
							r().join().replace(/[\w\-:]+/g, function(e) {
							  return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
							}) +
							');return n}'
		    )(C, t.frag));
		  }
		  function u(e) {
		    e || (e = t);
		    var r = a(e);
		    return (
		      !C.shivCSS ||
						c ||
						r.hasCSS ||
						(r.hasCSS = !!n(
						  e,
						  'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
						)),
		      f || l(e, r),
		      e
		    );
		  }
		  var c,
		    f,
		    d = '3.7.3',
		    m = e.html5 || {},
		    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
		    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
		    g = '_html5shiv',
		    v = 0,
		    y = {};
		  !(function() {
		    try {
		      var e = t.createElement('a');
		      (e.innerHTML = '<xyz></xyz>'),
		      (c = 'hidden' in e),
		      (f =
							1 == e.childNodes.length ||
							(function() {
							  t.createElement('a');
							  var e = t.createDocumentFragment();
							  return (
							    'undefined' == typeof e.cloneNode ||
									'undefined' == typeof e.createDocumentFragment ||
									'undefined' == typeof e.createElement
							  );
							})());
		    } catch (n) {
		      (c = !0), (f = !0);
		    }
		  })();
		  var C = {
		    elements:
					m.elements ||
					'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
		    version: d,
		    shivCSS: m.shivCSS !== !1,
		    supportsUnknownElements: f,
		    shivMethods: m.shivMethods !== !1,
		    type: 'default',
		    shivDocument: u,
		    createElement: i,
		    createDocumentFragment: s,
		    addElements: o
		  };
		  (e.html5 = C), u(t), 'object' == typeof module && module.exports && (module.exports = C);
		})('undefined' != typeof e ? e : this, t);
  var w = (function() {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function(e) {
        var n = t(e);
        return (n && n.matches) || !1;
      }
      : function(t) {
        var n = !1;
        return (
          l('@media ' + t + ' { #modernizr { position: absolute; } }', function(t) {
            n =
								'absolute' ==
								(e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
          }),
          n
        );
      };
  })();
  (b.mq = w), Modernizr.addTest('mediaqueries', w('only all'));
  var _ = 'Moz O ms Webkit',
    N = b._config.usePrefixes ? _.split(' ') : [];
  b._cssomPrefixes = N;
  var T = b._config.usePrefixes ? _.toLowerCase().split(' ') : [];
  b._domPrefixes = T;
  var z = { elem: i('modernizr') };
  Modernizr._q.push(function() {
    delete z.elem;
  });
  var j = { style: z.elem.style };
  Modernizr._q.unshift(function() {
    delete j.style;
  }),
  (b.testAllProps = v),
  (b.testAllProps = y),
  Modernizr.addTest('cssgridlegacy', y('grid-columns', '10px', !0)),
  Modernizr.addTest('cssgrid', y('grid-template-rows', 'none', !0)),
  Modernizr.addTest('flexbox', y('flexBasis', '1px', !0)),
  Modernizr.addTest('flexboxlegacy', y('boxDirection', 'reverse', !0)),
  o(),
  a(C),
  delete b.addTest,
  delete b.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);
