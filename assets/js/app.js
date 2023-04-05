/*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
  }(this, (function () {
    "use strict";
  
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
  
    function e(e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e
    }
  
    function i() {
      return (i = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
      }).apply(this, arguments)
    }
  
    function n(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var o, s, r = function (t) {
        do {
          t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
      },
      a = function (t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          var i = t.getAttribute("href");
          e = i && "#" !== i ? i.trim() : null
        }
        return e
      },
      l = function (t) {
        var e = a(t);
        return e && document.querySelector(e) ? e : null
      },
      c = function (t) {
        var e = a(t);
        return e ? document.querySelector(e) : null
      },
      d = function (t) {
        if (!t) return 0;
        var e = window.getComputedStyle(t),
          i = e.transitionDuration,
          n = e.transitionDelay,
          o = Number.parseFloat(i),
          s = Number.parseFloat(n);
        return o || s ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(i) + Number.parseFloat(n))) : 0
      },
      u = function (t) {
        t.dispatchEvent(new Event("transitionend"))
      },
      h = function (t) {
        return (t[0] || t).nodeType
      },
      p = function (t, e) {
        var i = !1,
          n = e + 5;
        t.addEventListener("transitionend", (function e() {
          i = !0, t.removeEventListener("transitionend", e)
        })), setTimeout((function () {
          i || u(t)
        }), n)
      },
      f = function (t, e, i) {
        Object.keys(i).forEach((function (n) {
          var o, s = i[n],
            r = e[n],
            a = r && h(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(s).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + s + '".')
        }))
      },
      m = function (t) {
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
          var e = getComputedStyle(t),
            i = getComputedStyle(t.parentNode);
          return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
        }
        return !1
      },
      g = function () {
        return function () {}
      },
      v = function (t) {
        return t.offsetHeight
      },
      y = function () {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
      },
      b = function (t) {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
      },
      _ = "rtl" === document.documentElement.dir,
      w = (o = {}, s = 1, {
        set: function (t, e, i) {
          void 0 === t.bsKey && (t.bsKey = {
            key: e,
            id: s
          }, s++), o[t.bsKey.id] = i
        },
        get: function (t, e) {
          if (!t || void 0 === t.bsKey) return null;
          var i = t.bsKey;
          return i.key === e ? o[i.id] : null
        },
        delete: function (t, e) {
          if (void 0 !== t.bsKey) {
            var i = t.bsKey;
            i.key === e && (delete o[i.id], delete t.bsKey)
          }
        }
      }),
      k = function (t, e, i) {
        w.set(t, e, i)
      },
      x = function (t, e) {
        return w.get(t, e)
      },
      T = /[^.]*(?=\..*)\.|.*/,
      S = /\..*/,
      E = /::\d+$/,
      C = {},
      A = 1,
      I = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      },
      O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  
    function L(t, e) {
      return e && e + "::" + A++ || t.uidEvent || A++
    }
  
    function z(t) {
      var e = L(t);
      return t.uidEvent = e, C[e] = C[e] || {}, C[e]
    }
  
    function M(t, e, i) {
      void 0 === i && (i = null);
      for (var n = Object.keys(t), o = 0, s = n.length; o < s; o++) {
        var r = t[n[o]];
        if (r.originalHandler === e && r.delegationSelector === i) return r
      }
      return null
    }
  
    function P(t, e, i) {
      var n = "string" == typeof e,
        o = n ? i : e,
        s = t.replace(S, ""),
        r = I[s];
      return r && (s = r), O.has(s) || (s = t), [n, o, s]
    }
  
    function D(t, e, i, n, o) {
      if ("string" == typeof e && t) {
        i || (i = n, n = null);
        var s = P(e, i, n),
          r = s[0],
          a = s[1],
          l = s[2],
          c = z(t),
          d = c[l] || (c[l] = {}),
          u = M(d, a, r ? i : null);
        if (u) u.oneOff = u.oneOff && o;
        else {
          var h = L(a, e.replace(T, "")),
            p = r ? function (t, e, i) {
              return function n(o) {
                for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode)
                  for (var a = s.length; a--;)
                    if (s[a] === r) return o.delegateTarget = r, n.oneOff && $.off(t, o.type, i), i.apply(r, [o]);
                return null
              }
            }(t, i, n) : function (t, e) {
              return function i(n) {
                return n.delegateTarget = t, i.oneOff && $.off(t, n.type, e), e.apply(t, [n])
              }
            }(t, i);
          p.delegationSelector = r ? i : null, p.originalHandler = a, p.oneOff = o, p.uidEvent = h, d[h] = p, t.addEventListener(l, p, r)
        }
      }
    }
  
    function j(t, e, i, n, o) {
      var s = M(e[i], n, o);
      s && (t.removeEventListener(i, s, Boolean(o)), delete e[i][s.uidEvent])
    }
    var $ = {
        on: function (t, e, i, n) {
          D(t, e, i, n, !1)
        },
        one: function (t, e, i, n) {
          D(t, e, i, n, !0)
        },
        off: function (t, e, i, n) {
          if ("string" == typeof e && t) {
            var o = P(e, i, n),
              s = o[0],
              r = o[1],
              a = o[2],
              l = a !== e,
              c = z(t),
              d = e.startsWith(".");
            if (void 0 === r) {
              d && Object.keys(c).forEach((function (i) {
                ! function (t, e, i, n) {
                  var o = e[i] || {};
                  Object.keys(o).forEach((function (s) {
                    if (s.includes(n)) {
                      var r = o[s];
                      j(t, e, i, r.originalHandler, r.delegationSelector)
                    }
                  }))
                }(t, c, i, e.slice(1))
              }));
              var u = c[a] || {};
              Object.keys(u).forEach((function (i) {
                var n = i.replace(E, "");
                if (!l || e.includes(n)) {
                  var o = u[i];
                  j(t, c, a, o.originalHandler, o.delegationSelector)
                }
              }))
            } else {
              if (!c || !c[a]) return;
              j(t, c, a, r, s ? i : null)
            }
          }
        },
        trigger: function (t, e, i) {
          if ("string" != typeof e || !t) return null;
          var n, o = y(),
            s = e.replace(S, ""),
            r = e !== s,
            a = O.has(s),
            l = !0,
            c = !0,
            d = !1,
            u = null;
          return r && o && (n = o.Event(e, i), o(t).trigger(n), l = !n.isPropagationStopped(), c = !n.isImmediatePropagationStopped(), d = n.isDefaultPrevented()), a ? (u = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : u = new CustomEvent(e, {
            bubbles: l,
            cancelable: !0
          }), void 0 !== i && Object.keys(i).forEach((function (t) {
            Object.defineProperty(u, t, {
              get: function () {
                return i[t]
              }
            })
          })), d && u.preventDefault(), c && t.dispatchEvent(u), u.defaultPrevented && void 0 !== n && n.preventDefault(), u
        }
      },
      H = function () {
        function t(t) {
          t && (this._element = t, k(t, this.constructor.DATA_KEY, this))
        }
        return t.prototype.dispose = function () {
          (function (t, e) {
            w.delete(t, e)
          })(this._element, this.constructor.DATA_KEY), this._element = null
        }, t.getInstance = function (t) {
          return x(t, this.DATA_KEY)
        }, e(t, null, [{
          key: "VERSION",
          get: function () {
            return "5.0.0-beta1"
          }
        }]), t
      }(),
      W = "alert",
      N = function (t) {
        function i() {
          return t.apply(this, arguments) || this
        }
        n(i, t);
        var o = i.prototype;
        return o.close = function (t) {
          var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);
          null === i || i.defaultPrevented || this._removeElement(e)
        }, o._getRootElement = function (t) {
          return c(t) || t.closest(".alert")
        }, o._triggerCloseEvent = function (t) {
          return $.trigger(t, "close.bs.alert")
        }, o._removeElement = function (t) {
          var e = this;
          if (t.classList.remove("show"), t.classList.contains("fade")) {
            var i = d(t);
            $.one(t, "transitionend", (function () {
              return e._destroyElement(t)
            })), p(t, i)
          } else this._destroyElement(t)
        }, o._destroyElement = function (t) {
          t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert")
        }, i.jQueryInterface = function (t) {
          return this.each((function () {
            var e = x(this, "bs.alert");
            e || (e = new i(this)), "close" === t && e[t](this)
          }))
        }, i.handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this)
          }
        }, e(i, null, [{
          key: "DATA_KEY",
          get: function () {
            return "bs.alert"
          }
        }]), i
      }(H);
    $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', N.handleDismiss(new N)), b((function () {
      var t = y();
      if (t) {
        var e = t.fn[W];
        t.fn[W] = N.jQueryInterface, t.fn[W].Constructor = N, t.fn[W].noConflict = function () {
          return t.fn[W] = e, N.jQueryInterface
        }
      }
    }));
    var F = function (t) {
      function i() {
        return t.apply(this, arguments) || this
      }
      return n(i, t), i.prototype.toggle = function () {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.button");
          e || (e = new i(this)), "toggle" === t && e[t]()
        }))
      }, e(i, null, [{
        key: "DATA_KEY",
        get: function () {
          return "bs.button"
        }
      }]), i
    }(H);
  
    function R(t) {
      return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
  
    function q(t) {
      return t.replace(/[A-Z]/g, (function (t) {
        return "-" + t.toLowerCase()
      }))
    }
    $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function (t) {
      t.preventDefault();
      var e = t.target.closest('[data-bs-toggle="button"]'),
        i = x(e, "bs.button");
      i || (i = new F(e)), i.toggle()
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn.button;
        t.fn.button = F.jQueryInterface, t.fn.button.Constructor = F, t.fn.button.noConflict = function () {
          return t.fn.button = e, F.jQueryInterface
        }
      }
    }));
    var B = {
        setDataAttribute: function (t, e, i) {
          t.setAttribute("data-bs-" + q(e), i)
        },
        removeDataAttribute: function (t, e) {
          t.removeAttribute("data-bs-" + q(e))
        },
        getDataAttributes: function (t) {
          if (!t) return {};
          var e = {};
          return Object.keys(t.dataset).filter((function (t) {
            return t.startsWith("bs")
          })).forEach((function (i) {
            var n = i.replace(/^bs/, "");
            n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = R(t.dataset[i])
          })), e
        },
        getDataAttribute: function (t, e) {
          return R(t.getAttribute("data-bs-" + q(e)))
        },
        offset: function (t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft
          }
        },
        position: function (t) {
          return {
            top: t.offsetTop,
            left: t.offsetLeft
          }
        }
      },
      U = {
        matches: function (t, e) {
          return t.matches(e)
        },
        find: function (t, e) {
          var i;
          return void 0 === e && (e = document.documentElement), (i = []).concat.apply(i, Element.prototype.querySelectorAll.call(e, t))
        },
        findOne: function (t, e) {
          return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
        },
        children: function (t, e) {
          var i;
          return (i = []).concat.apply(i, t.children).filter((function (t) {
            return t.matches(e)
          }))
        },
        parents: function (t, e) {
          for (var i = [], n = t.parentNode; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) this.matches(n, e) && i.push(n), n = n.parentNode;
          return i
        },
        prev: function (t, e) {
          for (var i = t.previousElementSibling; i;) {
            if (i.matches(e)) return [i];
            i = i.previousElementSibling
          }
          return []
        },
        next: function (t, e) {
          for (var i = t.nextElementSibling; i;) {
            if (this.matches(i, e)) return [i];
            i = i.nextElementSibling
          }
          return []
        }
      },
      Y = "carousel",
      V = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      Q = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      X = {
        TOUCH: "touch",
        PEN: "pen"
      },
      K = function (t) {
        function o(e, i) {
          var n;
          return (n = t.call(this, e) || this)._items = null, n._interval = null, n._activeElement = null, n._isPaused = !1, n._isSliding = !1, n.touchTimeout = null, n.touchStartX = 0, n.touchDeltaX = 0, n._config = n._getConfig(i), n._indicatorsElement = U.findOne(".carousel-indicators", n._element), n._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, n._pointerEvent = Boolean(window.PointerEvent), n._addEventListeners(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.next = function () {
          this._isSliding || this._slide("next")
        }, s.nextWhenVisible = function () {
          !document.hidden && m(this._element) && this.next()
        }, s.prev = function () {
          this._isSliding || this._slide("prev")
        }, s.pause = function (t) {
          t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (u(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, s.cycle = function (t) {
          t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, s.to = function (t) {
          var e = this;
          this._activeElement = U.findOne(".active.carousel-item", this._element);
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding) $.one(this._element, "slid.bs.carousel", (function () {
              return e.to(t)
            }));
            else {
              if (i === t) return this.pause(), void this.cycle();
              var n = t > i ? "next" : "prev";
              this._slide(n, this._items[t])
            }
        }, s.dispose = function () {
          t.prototype.dispose.call(this), $.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, s._getConfig = function (t) {
          return t = i({}, V, t), f(Y, t, Q), t
        }, s._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
          }
        }, s._addEventListeners = function () {
          var t = this;
          this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (function (e) {
            return t._keydown(e)
          })), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (function (e) {
            return t.pause(e)
          })), $.on(this._element, "mouseleave.bs.carousel", (function (e) {
            return t.cycle(e)
          }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }, s._addTouchEventListeners = function () {
          var t = this,
            e = function (e) {
              t._pointerEvent && X[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
            },
            i = function (e) {
              t._pointerEvent && X[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                return t.cycle(e)
              }), 500 + t._config.interval))
            };
          U.find(".carousel-item img", this._element).forEach((function (t) {
            $.on(t, "dragstart.bs.carousel", (function (t) {
              return t.preventDefault()
            }))
          })), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (function (t) {
            return e(t)
          })), $.on(this._element, "pointerup.bs.carousel", (function (t) {
            return i(t)
          })), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (function (t) {
            return e(t)
          })), $.on(this._element, "touchmove.bs.carousel", (function (e) {
            return function (e) {
              e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
            }(e)
          })), $.on(this._element, "touchend.bs.carousel", (function (t) {
            return i(t)
          })))
        }, s._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
            case "ArrowLeft":
              t.preventDefault(), this.prev();
              break;
            case "ArrowRight":
              t.preventDefault(), this.next()
          }
        }, s._getItemIndex = function (t) {
          return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }, s._getItemByDirection = function (t, e) {
          var i = "next" === t,
            n = "prev" === t,
            o = this._getItemIndex(e),
            s = this._items.length - 1;
          if ((n && 0 === o || i && o === s) && !this._config.wrap) return e;
          var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }, s._triggerSlideEvent = function (t, e) {
          var i = this._getItemIndex(t),
            n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
          return $.trigger(this._element, "slide.bs.carousel", {
            relatedTarget: t,
            direction: e,
            from: n,
            to: i
          })
        }, s._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            for (var e = U.find(".active", this._indicatorsElement), i = 0; i < e.length; i++) e[i].classList.remove("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && n.classList.add("active")
          }
        }, s._updateInterval = function () {
          var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
          if (t) {
            var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
          }
        }, s._slide = function (t, e) {
          var i, n, o, s = this,
            r = U.findOne(".active.carousel-item", this._element),
            a = this._getItemIndex(r),
            l = e || r && this._getItemByDirection(t, r),
            c = this._getItemIndex(l),
            u = Boolean(this._interval);
          if ("next" === t ? (i = "carousel-item-start", n = "carousel-item-next", o = "left") : (i = "carousel-item-end", n = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
          else if (!this._triggerSlideEvent(l, o).defaultPrevented && r && l) {
            if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
              l.classList.add(n), v(l), r.classList.add(i), l.classList.add(i);
              var h = d(r);
              $.one(r, "transitionend", (function () {
                l.classList.remove(i, n), l.classList.add("active"), r.classList.remove("active", n, i), s._isSliding = !1, setTimeout((function () {
                  $.trigger(s._element, "slid.bs.carousel", {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                  })
                }), 0)
              })), p(r, h)
            } else r.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, $.trigger(this._element, "slid.bs.carousel", {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c
            });
            u && this.cycle()
          }
        }, o.carouselInterface = function (t, e) {
          var n = x(t, "bs.carousel"),
            s = i({}, V, B.getDataAttributes(t));
          "object" == typeof e && (s = i({}, s, e));
          var r = "string" == typeof e ? e : s.slide;
          if (n || (n = new o(t, s)), "number" == typeof e) n.to(e);
          else if ("string" == typeof r) {
            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
            n[r]()
          } else s.interval && s.ride && (n.pause(), n.cycle())
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            o.carouselInterface(this, t)
          }))
        }, o.dataApiClickHandler = function (t) {
          var e = c(this);
          if (e && e.classList.contains("carousel")) {
            var n = i({}, B.getDataAttributes(e), B.getDataAttributes(this)),
              s = this.getAttribute("data-bs-slide-to");
            s && (n.interval = !1), o.carouselInterface(e, n), s && x(e, "bs.carousel").to(s), t.preventDefault()
          }
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return V
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.carousel"
          }
        }]), o
      }(H);
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", K.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", (function () {
      for (var t = U.find('[data-bs-ride="carousel"]'), e = 0, i = t.length; e < i; e++) K.carouselInterface(t[e], x(t[e], "bs.carousel"))
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn[Y];
        t.fn[Y] = K.jQueryInterface, t.fn[Y].Constructor = K, t.fn[Y].noConflict = function () {
          return t.fn[Y] = e, K.jQueryInterface
        }
      }
    }));
    var G = "collapse",
      J = {
        toggle: !0,
        parent: ""
      },
      Z = {
        toggle: "boolean",
        parent: "(string|element)"
      },
      tt = function (t) {
        function o(e, i) {
          var n;
          (n = t.call(this, e) || this)._isTransitioning = !1, n._config = n._getConfig(i), n._triggerArray = U.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
          for (var o = U.find('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
            var a = o[s],
              c = l(a),
              d = U.find(c).filter((function (t) {
                return t === e
              }));
            null !== c && d.length && (n._selector = c, n._triggerArray.push(a))
          }
          return n._parent = n._config.parent ? n._getParent() : null, n._config.parent || n._addAriaAndCollapsedClass(n._element, n._triggerArray), n._config.toggle && n.toggle(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.toggle = function () {
          this._element.classList.contains("show") ? this.hide() : this.show()
        }, s.show = function () {
          var t = this;
          if (!this._isTransitioning && !this._element.classList.contains("show")) {
            var e, i;
            this._parent && 0 === (e = U.find(".show, .collapsing", this._parent).filter((function (e) {
              return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
            }))).length && (e = null);
            var n = U.findOne(this._selector);
            if (e) {
              var s = e.find((function (t) {
                return n !== t
              }));
              if ((i = s ? x(s, "bs.collapse") : null) && i._isTransitioning) return
            }
            if (!$.trigger(this._element, "show.bs.collapse").defaultPrevented) {
              e && e.forEach((function (t) {
                n !== t && o.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null)
              }));
              var r = this._getDimension();
              this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
                t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
              })), this.setTransitioning(!0);
              var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                l = d(this._element);
              $.one(this._element, "transitionend", (function () {
                t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), $.trigger(t._element, "shown.bs.collapse")
              })), p(this._element, l), this._element.style[r] = this._element[a] + "px"
            }
          }
        }, s.hide = function () {
          var t = this;
          if (!this._isTransitioning && this._element.classList.contains("show") && !$.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
            var e = this._getDimension();
            this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            var i = this._triggerArray.length;
            if (i > 0)
              for (var n = 0; n < i; n++) {
                var o = this._triggerArray[n],
                  s = c(o);
                s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
              }
            this.setTransitioning(!0), this._element.style[e] = "";
            var r = d(this._element);
            $.one(this._element, "transitionend", (function () {
              t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), $.trigger(t._element, "hidden.bs.collapse")
            })), p(this._element, r)
          }
        }, s.setTransitioning = function (t) {
          this._isTransitioning = t
        }, s.dispose = function () {
          t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
        }, s._getConfig = function (t) {
          return (t = i({}, J, t)).toggle = Boolean(t.toggle), f(G, t, Z), t
        }, s._getDimension = function () {
          return this._element.classList.contains("width") ? "width" : "height"
        }, s._getParent = function () {
          var t = this,
            e = this._config.parent;
          h(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = U.findOne(e);
          var i = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
          return U.find(i, e).forEach((function (e) {
            var i = c(e);
            t._addAriaAndCollapsedClass(i, [e])
          })), e
        }, s._addAriaAndCollapsedClass = function (t, e) {
          if (t && e.length) {
            var i = t.classList.contains("show");
            e.forEach((function (t) {
              i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
            }))
          }
        }, o.collapseInterface = function (t, e) {
          var n = x(t, "bs.collapse"),
            s = i({}, J, B.getDataAttributes(t), "object" == typeof e && e ? e : {});
          if (!n && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), n || (n = new o(t, s)), "string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]()
          }
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            o.collapseInterface(this, t)
          }))
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return J
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.collapse"
          }
        }]), o
      }(H);
    $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
      "A" === t.target.tagName && t.preventDefault();
      var e = B.getDataAttributes(this),
        i = l(this);
      U.find(i).forEach((function (t) {
        var i, n = x(t, "bs.collapse");
        n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent, n._parent = n._getParent()), i = "toggle") : i = e, tt.collapseInterface(t, i)
      }))
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn[G];
        t.fn[G] = tt.jQueryInterface, t.fn[G].Constructor = tt, t.fn[G].noConflict = function () {
          return t.fn[G] = e, tt.jQueryInterface
        }
      }
    }));
    var et = "top",
      it = "bottom",
      nt = "right",
      ot = "left",
      st = [et, it, nt, ot],
      rt = st.reduce((function (t, e) {
        return t.concat([e + "-start", e + "-end"])
      }), []),
      at = [].concat(st, ["auto"]).reduce((function (t, e) {
        return t.concat([e, e + "-start", e + "-end"])
      }), []),
      lt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  
    function ct(t) {
      return t ? (t.nodeName || "").toLowerCase() : null
    }
  
    function dt(t) {
      if ("[object Window]" !== t.toString()) {
        var e = t.ownerDocument;
        return e && e.defaultView || window
      }
      return t
    }
  
    function ut(t) {
      return t instanceof dt(t).Element || t instanceof Element
    }
  
    function ht(t) {
      return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }
    var pt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (t) {
        var e = t.state;
        Object.keys(e.elements).forEach((function (t) {
          var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            o = e.elements[t];
          ht(o) && ct(o) && (Object.assign(o.style, i), Object.keys(n).forEach((function (t) {
            var e = n[t];
            !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
          })))
        }))
      },
      effect: function (t) {
        var e = t.state,
          i = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
        return Object.assign(e.elements.popper.style, i.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
          function () {
            Object.keys(e.elements).forEach((function (t) {
              var n = e.elements[t],
                o = e.attributes[t] || {},
                s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                  return t[e] = "", t
                }), {});
              ht(n) && ct(n) && (Object.assign(n.style, s), Object.keys(o).forEach((function (t) {
                n.removeAttribute(t)
              })))
            }))
          }
      },
      requires: ["computeStyles"]
    };
  
    function ft(t) {
      return t.split("-")[0]
    }
  
    function mt(t) {
      return {
        x: t.offsetLeft,
        y: t.offsetTop,
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
  
    function gt(t, e) {
      var i, n = e.getRootNode && e.getRootNode();
      if (t.contains(e)) return !0;
      if (n && ((i = n) instanceof dt(i).ShadowRoot || i instanceof ShadowRoot)) {
        var o = e;
        do {
          if (o && t.isSameNode(o)) return !0;
          o = o.parentNode || o.host
        } while (o)
      }
      return !1
    }
  
    function vt(t) {
      return dt(t).getComputedStyle(t)
    }
  
    function yt(t) {
      return ["table", "td", "th"].indexOf(ct(t)) >= 0
    }
  
    function bt(t) {
      return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
  
    function _t(t) {
      return "html" === ct(t) ? t : t.assignedSlot || t.parentNode || t.host || bt(t)
    }
  
    function wt(t) {
      if (!ht(t) || "fixed" === vt(t).position) return null;
      var e = t.offsetParent;
      if (e) {
        var i = bt(e);
        if ("body" === ct(e) && "static" === vt(e).position && "static" !== vt(i).position) return i
      }
      return e
    }
  
    function kt(t) {
      for (var e = dt(t), i = wt(t); i && yt(i) && "static" === vt(i).position;) i = wt(i);
      return i && "body" === ct(i) && "static" === vt(i).position ? e : i || function (t) {
        for (var e = _t(t); ht(e) && ["html", "body"].indexOf(ct(e)) < 0;) {
          var i = vt(e);
          if ("none" !== i.transform || "none" !== i.perspective || i.willChange && "auto" !== i.willChange) return e;
          e = e.parentNode
        }
        return null
      }(t) || e
    }
  
    function xt(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
  
    function Tt(t, e, i) {
      return Math.max(t, Math.min(e, i))
    }
  
    function St(t) {
      return Object.assign(Object.assign({}, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), t)
    }
  
    function Et(t, e) {
      return e.reduce((function (e, i) {
        return e[i] = t, e
      }), {})
    }
    var Ct = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e, i = t.state,
            n = t.name,
            o = i.elements.arrow,
            s = i.modifiersData.popperOffsets,
            r = ft(i.placement),
            a = xt(r),
            l = [ot, nt].indexOf(r) >= 0 ? "height" : "width";
          if (o && s) {
            var c = i.modifiersData[n + "#persistent"].padding,
              d = mt(o),
              u = "y" === a ? et : ot,
              h = "y" === a ? it : nt,
              p = i.rects.reference[l] + i.rects.reference[a] - s[a] - i.rects.popper[l],
              f = s[a] - i.rects.reference[a],
              m = kt(o),
              g = m ? "y" === a ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
              v = p / 2 - f / 2,
              y = c[u],
              b = g - d[l] - c[h],
              _ = g / 2 - d[l] / 2 + v,
              w = Tt(y, _, b),
              k = a;
            i.modifiersData[n] = ((e = {})[k] = w, e.centerOffset = w - _, e)
          }
        },
        effect: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            o = i.element,
            s = void 0 === o ? "[data-popper-arrow]" : o,
            r = i.padding,
            a = void 0 === r ? 0 : r;
          null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && gt(e.elements.popper, s) && (e.elements.arrow = s, e.modifiersData[n + "#persistent"] = {
            padding: St("number" != typeof a ? a : Et(a, st))
          })
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      },
      At = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
  
    function It(t) {
      var e, i = t.popper,
        n = t.popperRect,
        o = t.placement,
        s = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = function (t) {
          var e = t.x,
            i = t.y,
            n = window.devicePixelRatio || 1;
          return {
            x: Math.round(e * n) / n || 0,
            y: Math.round(i * n) / n || 0
          }
        }(s),
        d = c.x,
        u = c.y,
        h = s.hasOwnProperty("x"),
        p = s.hasOwnProperty("y"),
        f = ot,
        m = et,
        g = window;
      if (l) {
        var v = kt(i);
        v === dt(i) && (v = bt(i)), o === et && (m = it, u -= v.clientHeight - n.height, u *= a ? 1 : -1), o === ot && (f = nt, d -= v.clientWidth - n.width, d *= a ? 1 : -1)
      }
      var y, b = Object.assign({
        position: r
      }, l && At);
      return a ? Object.assign(Object.assign({}, b), {}, ((y = {})[m] = p ? "0" : "", y[f] = h ? "0" : "", y.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + u + "px)" : "translate3d(" + d + "px, " + u + "px, 0)", y)) : Object.assign(Object.assign({}, b), {}, ((e = {})[m] = p ? u + "px" : "", e[f] = h ? d + "px" : "", e.transform = "", e))
    }
    var Ot = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = i.gpuAcceleration,
            o = void 0 === n || n,
            s = i.adaptive,
            r = void 0 === s || s,
            a = {
              placement: ft(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: o
            };
          null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), It(Object.assign(Object.assign({}, a), {}, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: r
          })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), It(Object.assign(Object.assign({}, a), {}, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1
          })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
            "data-popper-placement": e.placement
          })
        },
        data: {}
      },
      Lt = {
        passive: !0
      },
      zt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            i = t.instance,
            n = t.options,
            o = n.scroll,
            s = void 0 === o || o,
            r = n.resize,
            a = void 0 === r || r,
            l = dt(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return s && c.forEach((function (t) {
              t.addEventListener("scroll", i.update, Lt)
            })), a && l.addEventListener("resize", i.update, Lt),
            function () {
              s && c.forEach((function (t) {
                t.removeEventListener("scroll", i.update, Lt)
              })), a && l.removeEventListener("resize", i.update, Lt)
            }
        },
        data: {}
      },
      Mt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
  
    function Pt(t) {
      return t.replace(/left|right|bottom|top/g, (function (t) {
        return Mt[t]
      }))
    }
    var Dt = {
      start: "end",
      end: "start"
    };
  
    function jt(t) {
      return t.replace(/start|end/g, (function (t) {
        return Dt[t]
      }))
    }
  
    function $t(t) {
      var e = t.getBoundingClientRect();
      return {
        width: e.width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top
      }
    }
  
    function Ht(t) {
      var e = dt(t);
      return {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
      }
    }
  
    function Wt(t) {
      return $t(bt(t)).left + Ht(t).scrollLeft
    }
  
    function Nt(t) {
      var e = vt(t),
        i = e.overflow,
        n = e.overflowX,
        o = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(i + o + n)
    }
  
    function Ft(t, e) {
      void 0 === e && (e = []);
      var i = function t(e) {
          return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : ht(e) && Nt(e) ? e : t(_t(e))
        }(t),
        n = "body" === ct(i),
        o = dt(i),
        s = n ? [o].concat(o.visualViewport || [], Nt(i) ? i : []) : i,
        r = e.concat(s);
      return n ? r : r.concat(Ft(_t(s)))
    }
  
    function Rt(t) {
      return Object.assign(Object.assign({}, t), {}, {
        left: t.x,
        top: t.y,
        right: t.x + t.width,
        bottom: t.y + t.height
      })
    }
  
    function qt(t, e) {
      return "viewport" === e ? Rt(function (t) {
        var e = dt(t),
          i = bt(t),
          n = e.visualViewport,
          o = i.clientWidth,
          s = i.clientHeight,
          r = 0,
          a = 0;
        return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
          width: o,
          height: s,
          x: r + Wt(t),
          y: a
        }
      }(t)) : ht(e) ? function (t) {
        var e = $t(t);
        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
      }(e) : Rt(function (t) {
        var e = bt(t),
          i = Ht(t),
          n = t.ownerDocument.body,
          o = Math.max(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
          s = Math.max(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
          r = -i.scrollLeft + Wt(t),
          a = -i.scrollTop;
        return "rtl" === vt(n || e).direction && (r += Math.max(e.clientWidth, n ? n.clientWidth : 0) - o), {
          width: o,
          height: s,
          x: r,
          y: a
        }
      }(bt(t)))
    }
  
    function Bt(t) {
      return t.split("-")[1]
    }
  
    function Ut(t) {
      var e, i = t.reference,
        n = t.element,
        o = t.placement,
        s = o ? ft(o) : null,
        r = o ? Bt(o) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;
      switch (s) {
        case et:
          e = {
            x: a,
            y: i.y - n.height
          };
          break;
        case it:
          e = {
            x: a,
            y: i.y + i.height
          };
          break;
        case nt:
          e = {
            x: i.x + i.width,
            y: l
          };
          break;
        case ot:
          e = {
            x: i.x - n.width,
            y: l
          };
          break;
        default:
          e = {
            x: i.x,
            y: i.y
          }
      }
      var c = s ? xt(s) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (r) {
          case "start":
            e[c] = Math.floor(e[c]) - Math.floor(i[d] / 2 - n[d] / 2);
            break;
          case "end":
            e[c] = Math.floor(e[c]) + Math.ceil(i[d] / 2 - n[d] / 2)
        }
      }
      return e
    }
  
    function Yt(t, e) {
      void 0 === e && (e = {});
      var i = e,
        n = i.placement,
        o = void 0 === n ? t.placement : n,
        s = i.boundary,
        r = void 0 === s ? "clippingParents" : s,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        u = i.altBoundary,
        h = void 0 !== u && u,
        p = i.padding,
        f = void 0 === p ? 0 : p,
        m = St("number" != typeof f ? f : Et(f, st)),
        g = "popper" === d ? "reference" : "popper",
        v = t.elements.reference,
        y = t.rects.popper,
        b = t.elements[h ? g : d],
        _ = function (t, e, i) {
          var n = "clippingParents" === e ? function (t) {
              var e = Ft(_t(t)),
                i = ["absolute", "fixed"].indexOf(vt(t).position) >= 0 && ht(t) ? kt(t) : t;
              return ut(i) ? e.filter((function (t) {
                return ut(t) && gt(t, i) && "body" !== ct(t)
              })) : []
            }(t) : [].concat(e),
            o = [].concat(n, [i]),
            s = o[0],
            r = o.reduce((function (e, i) {
              var n = qt(t, i);
              return e.top = Math.max(n.top, e.top), e.right = Math.min(n.right, e.right), e.bottom = Math.min(n.bottom, e.bottom), e.left = Math.max(n.left, e.left), e
            }), qt(t, s));
          return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
        }(ut(b) ? b : b.contextElement || bt(t.elements.popper), r, l),
        w = $t(v),
        k = Ut({
          reference: w,
          element: y,
          strategy: "absolute",
          placement: o
        }),
        x = Rt(Object.assign(Object.assign({}, y), k)),
        T = "popper" === d ? x : w,
        S = {
          top: _.top - T.top + m.top,
          bottom: T.bottom - _.bottom + m.bottom,
          left: _.left - T.left + m.left,
          right: T.right - _.right + m.right
        },
        E = t.modifiersData.offset;
      if ("popper" === d && E) {
        var C = E[o];
        Object.keys(S).forEach((function (t) {
          var e = [nt, it].indexOf(t) >= 0 ? 1 : -1,
            i = [et, it].indexOf(t) >= 0 ? "y" : "x";
          S[t] += C[i] * e
        }))
      }
      return S
    }
    var Vt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name;
        if (!e.modifiersData[n]._skip) {
          for (var o = i.mainAxis, s = void 0 === o || o, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, u = i.rootBoundary, h = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, m = i.allowedAutoPlacements, g = e.options.placement, v = ft(g), y = l || (v !== g && f ? function (t) {
              if ("auto" === ft(t)) return [];
              var e = Pt(t);
              return [jt(t), e, jt(e)]
            }(g) : [Pt(g)]), b = [g].concat(y).reduce((function (t, i) {
              return t.concat("auto" === ft(i) ? function (t, e) {
                void 0 === e && (e = {});
                var i = e,
                  n = i.placement,
                  o = i.boundary,
                  s = i.rootBoundary,
                  r = i.padding,
                  a = i.flipVariations,
                  l = i.allowedAutoPlacements,
                  c = void 0 === l ? at : l,
                  d = Bt(n),
                  u = d ? a ? rt : rt.filter((function (t) {
                    return Bt(t) === d
                  })) : st,
                  h = u.filter((function (t) {
                    return c.indexOf(t) >= 0
                  }));
                0 === h.length && (h = u);
                var p = h.reduce((function (e, i) {
                  return e[i] = Yt(t, {
                    placement: i,
                    boundary: o,
                    rootBoundary: s,
                    padding: r
                  })[ft(i)], e
                }), {});
                return Object.keys(p).sort((function (t, e) {
                  return p[t] - p[e]
                }))
              }(e, {
                placement: i,
                boundary: d,
                rootBoundary: u,
                padding: c,
                flipVariations: f,
                allowedAutoPlacements: m
              }) : i)
            }), []), _ = e.rects.reference, w = e.rects.popper, k = new Map, x = !0, T = b[0], S = 0; S < b.length; S++) {
            var E = b[S],
              C = ft(E),
              A = "start" === Bt(E),
              I = [et, it].indexOf(C) >= 0,
              O = I ? "width" : "height",
              L = Yt(e, {
                placement: E,
                boundary: d,
                rootBoundary: u,
                altBoundary: h,
                padding: c
              }),
              z = I ? A ? nt : ot : A ? it : et;
            _[O] > w[O] && (z = Pt(z));
            var M = Pt(z),
              P = [];
            if (s && P.push(L[C] <= 0), a && P.push(L[z] <= 0, L[M] <= 0), P.every((function (t) {
                return t
              }))) {
              T = E, x = !1;
              break
            }
            k.set(E, P)
          }
          if (x)
            for (var D = function (t) {
                var e = b.find((function (e) {
                  var i = k.get(e);
                  if (i) return i.slice(0, t).every((function (t) {
                    return t
                  }))
                }));
                if (e) return T = e, "break"
              }, j = f ? 3 : 1; j > 0 && "break" !== D(j); j--);
          e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    };
  
    function Qt(t, e, i) {
      return void 0 === i && (i = {
        x: 0,
        y: 0
      }), {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x
      }
    }
  
    function Xt(t) {
      return [et, nt, it, ot].some((function (e) {
        return t[e] >= 0
      }))
    }
    var Kt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            i = t.name,
            n = e.rects.reference,
            o = e.rects.popper,
            s = e.modifiersData.preventOverflow,
            r = Yt(e, {
              elementContext: "reference"
            }),
            a = Yt(e, {
              altBoundary: !0
            }),
            l = Qt(r, n),
            c = Qt(a, o, s),
            d = Xt(l),
            u = Xt(c);
          e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: d,
            hasPopperEscaped: u
          }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": u
          })
        }
      },
      Gt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            o = i.offset,
            s = void 0 === o ? [0, 0] : o,
            r = at.reduce((function (t, i) {
              return t[i] = function (t, e, i) {
                var n = ft(t),
                  o = [ot, et].indexOf(n) >= 0 ? -1 : 1,
                  s = "function" == typeof i ? i(Object.assign(Object.assign({}, e), {}, {
                    placement: t
                  })) : i,
                  r = s[0],
                  a = s[1];
                return r = r || 0, a = (a || 0) * o, [ot, nt].indexOf(n) >= 0 ? {
                  x: a,
                  y: r
                } : {
                  x: r,
                  y: a
                }
              }(i, e.rects, s), t
            }), {}),
            a = r[e.placement],
            l = a.x,
            c = a.y;
          null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
        }
      },
      Jt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            i = t.name;
          e.modifiersData[i] = Ut({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
          })
        },
        data: {}
      },
      Zt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            o = i.mainAxis,
            s = void 0 === o || o,
            r = i.altAxis,
            a = void 0 !== r && r,
            l = i.boundary,
            c = i.rootBoundary,
            d = i.altBoundary,
            u = i.padding,
            h = i.tether,
            p = void 0 === h || h,
            f = i.tetherOffset,
            m = void 0 === f ? 0 : f,
            g = Yt(e, {
              boundary: l,
              rootBoundary: c,
              padding: u,
              altBoundary: d
            }),
            v = ft(e.placement),
            y = Bt(e.placement),
            b = !y,
            _ = xt(v),
            w = "x" === _ ? "y" : "x",
            k = e.modifiersData.popperOffsets,
            x = e.rects.reference,
            T = e.rects.popper,
            S = "function" == typeof m ? m(Object.assign(Object.assign({}, e.rects), {}, {
              placement: e.placement
            })) : m,
            E = {
              x: 0,
              y: 0
            };
          if (k) {
            if (s) {
              var C = "y" === _ ? et : ot,
                A = "y" === _ ? it : nt,
                I = "y" === _ ? "height" : "width",
                O = k[_],
                L = k[_] + g[C],
                z = k[_] - g[A],
                M = p ? -T[I] / 2 : 0,
                P = "start" === y ? x[I] : T[I],
                D = "start" === y ? -T[I] : -x[I],
                j = e.elements.arrow,
                $ = p && j ? mt(j) : {
                  width: 0,
                  height: 0
                },
                H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                W = H[C],
                N = H[A],
                F = Tt(0, x[I], $[I]),
                R = b ? x[I] / 2 - M - F - W - S : P - F - W - S,
                q = b ? -x[I] / 2 + M + F + N + S : D + F + N + S,
                B = e.elements.arrow && kt(e.elements.arrow),
                U = B ? "y" === _ ? B.clientTop || 0 : B.clientLeft || 0 : 0,
                Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][_] : 0,
                V = k[_] + R - Y - U,
                Q = k[_] + q - Y,
                X = Tt(p ? Math.min(L, V) : L, O, p ? Math.max(z, Q) : z);
              k[_] = X, E[_] = X - O
            }
            if (a) {
              var K = "x" === _ ? et : ot,
                G = "x" === _ ? it : nt,
                J = k[w],
                Z = Tt(J + g[K], J, J - g[G]);
              k[w] = Z, E[w] = Z - J
            }
            e.modifiersData[n] = E
          }
        },
        requiresIfExists: ["offset"]
      };
  
    function te(t, e, i) {
      void 0 === i && (i = !1);
      var n, o, s = bt(e),
        r = $t(t),
        a = ht(e),
        l = {
          scrollLeft: 0,
          scrollTop: 0
        },
        c = {
          x: 0,
          y: 0
        };
      return (a || !a && !i) && (("body" !== ct(e) || Nt(s)) && (l = (n = e) !== dt(n) && ht(n) ? {
        scrollLeft: (o = n).scrollLeft,
        scrollTop: o.scrollTop
      } : Ht(n)), ht(e) ? ((c = $t(e)).x += e.clientLeft, c.y += e.clientTop) : s && (c.x = Wt(s))), {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height
      }
    }
    var ee = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
  
    function ie() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      return !e.some((function (t) {
        return !(t && "function" == typeof t.getBoundingClientRect)
      }))
    }
  
    function ne(t) {
      void 0 === t && (t = {});
      var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        o = e.defaultOptions,
        s = void 0 === o ? ee : o;
      return function (t, e, i) {
        void 0 === i && (i = s);
        var o, r, a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign(Object.assign({}, ee), s),
            modifiersData: {},
            elements: {
              reference: t,
              popper: e
            },
            attributes: {},
            styles: {}
          },
          l = [],
          c = !1,
          d = {
            state: a,
            setOptions: function (i) {
              u(), a.options = Object.assign(Object.assign(Object.assign({}, s), a.options), i), a.scrollParents = {
                reference: ut(t) ? Ft(t) : t.contextElement ? Ft(t.contextElement) : [],
                popper: Ft(e)
              };
              var o, r, c = function (t) {
                var e = function (t) {
                  var e = new Map,
                    i = new Set,
                    n = [];
                  return t.forEach((function (t) {
                    e.set(t.name, t)
                  })), t.forEach((function (t) {
                    i.has(t.name) || function t(o) {
                      i.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (n) {
                        if (!i.has(n)) {
                          var o = e.get(n);
                          o && t(o)
                        }
                      })), n.push(o)
                    }(t)
                  })), n
                }(t);
                return lt.reduce((function (t, i) {
                  return t.concat(e.filter((function (t) {
                    return t.phase === i
                  })))
                }), [])
              }((o = [].concat(n, a.options.modifiers), r = o.reduce((function (t, e) {
                var i = t[e.name];
                return t[e.name] = i ? Object.assign(Object.assign(Object.assign({}, i), e), {}, {
                  options: Object.assign(Object.assign({}, i.options), e.options),
                  data: Object.assign(Object.assign({}, i.data), e.data)
                }) : e, t
              }), {}), Object.keys(r).map((function (t) {
                return r[t]
              }))));
              return a.orderedModifiers = c.filter((function (t) {
                return t.enabled
              })), a.orderedModifiers.forEach((function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  o = t.effect;
                if ("function" == typeof o) {
                  var s = o({
                    state: a,
                    name: e,
                    instance: d,
                    options: n
                  });
                  l.push(s || function () {})
                }
              })), d.update()
            },
            forceUpdate: function () {
              if (!c) {
                var t = a.elements,
                  e = t.reference,
                  i = t.popper;
                if (ie(e, i)) {
                  a.rects = {
                    reference: te(e, kt(i), "fixed" === a.options.strategy),
                    popper: mt(i)
                  }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                  }));
                  for (var n = 0; n < a.orderedModifiers.length; n++)
                    if (!0 !== a.reset) {
                      var o = a.orderedModifiers[n],
                        s = o.fn,
                        r = o.options,
                        l = void 0 === r ? {} : r,
                        u = o.name;
                      "function" == typeof s && (a = s({
                        state: a,
                        options: l,
                        name: u,
                        instance: d
                      }) || a)
                    } else a.reset = !1, n = -1
                }
              }
            },
            update: (o = function () {
              return new Promise((function (t) {
                d.forceUpdate(), t(a)
              }))
            }, function () {
              return r || (r = new Promise((function (t) {
                Promise.resolve().then((function () {
                  r = void 0, t(o())
                }))
              }))), r
            }),
            destroy: function () {
              u(), c = !0
            }
          };
        if (!ie(t, e)) return d;
  
        function u() {
          l.forEach((function (t) {
            return t()
          })), l = []
        }
        return d.setOptions(i).then((function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t)
        })), d
      }
    }
    var oe = ne(),
      se = ne({
        defaultModifiers: [zt, Jt, Ot, pt]
      }),
      re = ne({
        defaultModifiers: [zt, Jt, Ot, pt, Gt, Vt, Zt, Ct, Kt]
      }),
      ae = Object.freeze({
        __proto__: null,
        popperGenerator: ne,
        detectOverflow: Yt,
        createPopperBase: oe,
        createPopper: re,
        createPopperLite: se,
        top: et,
        bottom: it,
        right: nt,
        left: ot,
        auto: "auto",
        basePlacements: st,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: rt,
        placements: at,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: lt,
        applyStyles: pt,
        arrow: Ct,
        computeStyles: Ot,
        eventListeners: zt,
        flip: Vt,
        hide: Kt,
        offset: Gt,
        popperOffsets: Jt,
        preventOverflow: Zt
      }),
      le = "dropdown",
      ce = new RegExp("ArrowUp|ArrowDown|Escape"),
      de = _ ? "top-end" : "top-start",
      ue = _ ? "top-start" : "top-end",
      he = _ ? "bottom-end" : "bottom-start",
      pe = _ ? "bottom-start" : "bottom-end",
      fe = _ ? "left-start" : "right-start",
      me = _ ? "right-start" : "left-start",
      ge = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      },
      ve = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
      },
      ye = function (t) {
        function o(e, i) {
          var n;
          return (n = t.call(this, e) || this)._popper = null, n._config = n._getConfig(i), n._menu = n._getMenuElement(), n._inNavbar = n._detectNavbar(), n._addEventListeners(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.toggle = function () {
          if (!this._element.disabled && !this._element.classList.contains("disabled")) {
            var t = this._element.classList.contains("show");
            o.clearMenus(), t || this.show()
          }
        }, s.show = function () {
          if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
            var t = o.getParentFromElement(this._element),
              e = {
                relatedTarget: this._element
              };
            if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
              if (!this._inNavbar) {
                if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                var i = this._element;
                "parent" === this._config.reference ? i = t : h(this._config.reference) && (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])), this._popper = re(i, this._menu, this._getPopperConfig())
              }
              var n;
              "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (n = []).concat.apply(n, document.body.children).forEach((function (t) {
                return $.on(t, "mouseover", null, (function () {}))
              })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(t, "shown.bs.dropdown", e)
            }
          }
        }, s.hide = function () {
          if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
            var t = o.getParentFromElement(this._element),
              e = {
                relatedTarget: this._element
              };
            $.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(t, "hidden.bs.dropdown", e))
          }
        }, s.dispose = function () {
          t.prototype.dispose.call(this), $.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
        }, s.update = function () {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }, s._addEventListeners = function () {
          var t = this;
          $.on(this._element, "click.bs.dropdown", (function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle()
          }))
        }, s._getConfig = function (t) {
          return t = i({}, this.constructor.Default, B.getDataAttributes(this._element), t), f(le, t, this.constructor.DefaultType), t
        }, s._getMenuElement = function () {
          return U.next(this._element, ".dropdown-menu")[0]
        }, s._getPlacement = function () {
          var t = this._element.parentNode;
          if (t.classList.contains("dropend")) return fe;
          if (t.classList.contains("dropstart")) return me;
          var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t.classList.contains("dropup") ? e ? ue : de : e ? pe : he
        }, s._detectNavbar = function () {
          return null !== this._element.closest(".navbar")
        }, s._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: [{
              name: "preventOverflow",
              options: {
                altBoundary: this._config.flip,
                rootBoundary: this._config.boundary
              }
            }]
          };
          return "static" === this._config.display && (t.modifiers = [{
            name: "applyStyles",
            enabled: !1
          }]), i({}, t, this._config.popperConfig)
        }, o.dropdownInterface = function (t, e) {
          var i = x(t, "bs.dropdown");
          if (i || (i = new o(t, "object" == typeof e ? e : null)), "string" == typeof e) {
            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]()
          }
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            o.dropdownInterface(this, t)
          }))
        }, o.clearMenus = function (t) {
          if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
            for (var e = U.find('[data-bs-toggle="dropdown"]'), i = 0, n = e.length; i < n; i++) {
              var s = o.getParentFromElement(e[i]),
                r = x(e[i], "bs.dropdown"),
                a = {
                  relatedTarget: e[i]
                };
              if (t && "click" === t.type && (a.clickEvent = t), r) {
                var l, c = r._menu;
                if (e[i].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && c.contains(t.target) || $.trigger(s, "hide.bs.dropdown", a).defaultPrevented)) "ontouchstart" in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
                  return $.off(t, "mouseover", null, (function () {}))
                })), e[i].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), c.classList.remove("show"), e[i].classList.remove("show"), $.trigger(s, "hidden.bs.dropdown", a)
              }
            }
        }, o.getParentFromElement = function (t) {
          return c(t) || t.parentNode
        }, o.dataApiKeydownHandler = function (t) {
          if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ce.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
            var e = o.getParentFromElement(this),
              i = this.classList.contains("show");
            if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void o.clearMenus();
            if (i && "Space" !== t.key) {
              var n = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(m);
              if (n.length) {
                var s = n.indexOf(t.target);
                "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < n.length - 1 && s++, n[s = -1 === s ? 0 : s].focus()
              }
            } else o.clearMenus()
          }
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return ge
          }
        }, {
          key: "DefaultType",
          get: function () {
            return ve
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.dropdown"
          }
        }]), o
      }(H);
    $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ye.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ye.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ye.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ye.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
      t.preventDefault(), t.stopPropagation(), ye.dropdownInterface(this, "toggle")
    })), $.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
      return t.stopPropagation()
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn[le];
        t.fn[le] = ye.jQueryInterface, t.fn[le].Constructor = ye, t.fn[le].noConflict = function () {
          return t.fn[le] = e, ye.jQueryInterface
        }
      }
    }));
    var be = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
      },
      _e = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
      },
      we = function (t) {
        function o(e, i) {
          var n;
          return (n = t.call(this, e) || this)._config = n._getConfig(i), n._dialog = U.findOne(".modal-dialog", e), n._backdrop = null, n._isShown = !1, n._isBodyOverflowing = !1, n._ignoreBackdropClick = !1, n._isTransitioning = !1, n._scrollbarWidth = 0, n
        }
        n(o, t);
        var s = o.prototype;
        return s.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t)
        }, s.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            this._element.classList.contains("fade") && (this._isTransitioning = !0);
            var i = $.trigger(this._element, "show.bs.modal", {
              relatedTarget: t
            });
            this._isShown || i.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function (t) {
              return e.hide(t)
            })), $.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
              $.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
                t.target === e._element && (e._ignoreBackdropClick = !0)
              }))
            })), this._showBackdrop((function () {
              return e._showElement(t)
            })))
          }
        }, s.hide = function (t) {
          var e = this;
          if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !$.trigger(this._element, "hide.bs.modal").defaultPrevented) {
            this._isShown = !1;
            var i = this._element.classList.contains("fade");
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), i) {
              var n = d(this._element);
              $.one(this._element, "transitionend", (function (t) {
                return e._hideModal(t)
              })), p(this._element, n)
            } else this._hideModal()
          }
        }, s.dispose = function () {
          [window, this._element, this._dialog].forEach((function (t) {
            return $.off(t, ".bs.modal")
          })), t.prototype.dispose.call(this), $.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, s.handleUpdate = function () {
          this._adjustDialog()
        }, s._getConfig = function (t) {
          return t = i({}, be, t), f("modal", t, _e), t
        }, s._showElement = function (t) {
          var e = this,
            i = this._element.classList.contains("fade"),
            n = U.findOne(".modal-body", this._dialog);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && v(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
          var o = function () {
            e._config.focus && e._element.focus(), e._isTransitioning = !1, $.trigger(e._element, "shown.bs.modal", {
              relatedTarget: t
            })
          };
          if (i) {
            var s = d(this._dialog);
            $.one(this._dialog, "transitionend", o), p(this._dialog, s)
          } else o()
        }, s._enforceFocus = function () {
          var t = this;
          $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", (function (e) {
            document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
          }))
        }, s._setEscapeEvent = function () {
          var t = this;
          this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
            t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
          })) : $.off(this._element, "keydown.dismiss.bs.modal")
        }, s._setResizeEvent = function () {
          var t = this;
          this._isShown ? $.on(window, "resize.bs.modal", (function () {
            return t._adjustDialog()
          })) : $.off(window, "resize.bs.modal")
        }, s._hideModal = function () {
          var t = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
            document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), $.trigger(t._element, "hidden.bs.modal")
          }))
        }, s._removeBackdrop = function () {
          this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
        }, s._showBackdrop = function (t) {
          var e = this,
            i = this._element.classList.contains("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), document.body.appendChild(this._backdrop), $.on(this._element, "click.dismiss.bs.modal", (function (t) {
                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
              })), i && v(this._backdrop), this._backdrop.classList.add("show"), !i) return void t();
            var n = d(this._backdrop);
            $.one(this._backdrop, "transitionend", t), p(this._backdrop, n)
          } else if (!this._isShown && this._backdrop) {
            this._backdrop.classList.remove("show");
            var o = function () {
              e._removeBackdrop(), t()
            };
            if (this._element.classList.contains("fade")) {
              var s = d(this._backdrop);
              $.one(this._backdrop, "transitionend", o), p(this._backdrop, s)
            } else o()
          } else t()
        }, s._triggerBackdropTransition = function () {
          var t = this;
          if (!$.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
            var i = d(this._dialog);
            $.off(this._element, "transitionend"), $.one(this._element, "transitionend", (function () {
              t._element.classList.remove("modal-static"), e || ($.one(t._element, "transitionend", (function () {
                t._element.style.overflowY = ""
              })), p(t._element, i))
            })), p(this._element, i), this._element.focus()
          }
        }, s._adjustDialog = function () {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          (!this._isBodyOverflowing && t && !_ || this._isBodyOverflowing && !t && _) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !_ || !this._isBodyOverflowing && t && _) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, s._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, s._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, s._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            U.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (e) {
              var i = e.style.paddingRight,
                n = window.getComputedStyle(e)["padding-right"];
              B.setDataAttribute(e, "padding-right", i), e.style.paddingRight = Number.parseFloat(n) + t._scrollbarWidth + "px"
            })), U.find(".sticky-top").forEach((function (e) {
              var i = e.style.marginRight,
                n = window.getComputedStyle(e)["margin-right"];
              B.setDataAttribute(e, "margin-right", i), e.style.marginRight = Number.parseFloat(n) - t._scrollbarWidth + "px"
            }));
            var e = document.body.style.paddingRight,
              i = window.getComputedStyle(document.body)["padding-right"];
            B.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(i) + this._scrollbarWidth + "px"
          }
          document.body.classList.add("modal-open")
        }, s._resetScrollbar = function () {
          U.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (t) {
            var e = B.getDataAttribute(t, "padding-right");
            void 0 !== e && (B.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
          })), U.find(".sticky-top").forEach((function (t) {
            var e = B.getDataAttribute(t, "margin-right");
            void 0 !== e && (B.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
          }));
          var t = B.getDataAttribute(document.body, "padding-right");
          void 0 === t ? document.body.style.paddingRight = "" : (B.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
        }, s._getScrollbarWidth = function () {
          var t = document.createElement("div");
          t.className = "modal-scrollbar-measure", document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e
        }, o.jQueryInterface = function (t, e) {
          return this.each((function () {
            var n = x(this, "bs.modal"),
              s = i({}, be, B.getDataAttributes(this), "object" == typeof t && t ? t : {});
            if (n || (n = new o(this, s)), "string" == typeof t) {
              if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
              n[t](e)
            }
          }))
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return be
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.modal"
          }
        }]), o
      }(H);
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
      var e = this,
        n = c(this);
      "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), $.one(n, "show.bs.modal", (function (t) {
        t.defaultPrevented || $.one(n, "hidden.bs.modal", (function () {
          m(e) && e.focus()
        }))
      }));
      var o = x(n, "bs.modal");
      if (!o) {
        var s = i({}, B.getDataAttributes(n), B.getDataAttributes(this));
        o = new we(n, s)
      }
      o.show(this)
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn.modal;
        t.fn.modal = we.jQueryInterface, t.fn.modal.Constructor = we, t.fn.modal.noConflict = function () {
          return t.fn.modal = e, we.jQueryInterface
        }
      }
    }));
    var ke = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  
    function Se(t, e, i) {
      var n;
      if (!t.length) return t;
      if (i && "function" == typeof i) return i(t);
      for (var o = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), r = (n = []).concat.apply(n, o.body.querySelectorAll("*")), a = function (t, i) {
          var n, o = r[t],
            a = o.nodeName.toLowerCase();
          if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
          var l = (n = []).concat.apply(n, o.attributes),
            c = [].concat(e["*"] || [], e[a] || []);
          l.forEach((function (t) {
            (function (t, e) {
              var i = t.nodeName.toLowerCase();
              if (e.includes(i)) return !ke.has(i) || Boolean(t.nodeValue.match(xe) || t.nodeValue.match(Te));
              for (var n = e.filter((function (t) {
                  return t instanceof RegExp
                })), o = 0, s = n.length; o < s; o++)
                if (i.match(n[o])) return !0;
              return !1
            })(t, c) || o.removeAttribute(t.nodeName)
          }))
        }, l = 0, c = r.length; l < c; l++) a(l);
      return o.body.innerHTML
    }
    var Ee = "tooltip",
      Ce = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ae = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ie = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)"
      },
      Oe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: _ ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: _ ? "right" : "left"
      },
      Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        },
        popperConfig: null
      },
      ze = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      },
      Me = function (t) {
        function o(e, i) {
          var n;
          if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          return (n = t.call(this, e) || this)._isEnabled = !0, n._timeout = 0, n._hoverState = "", n._activeTrigger = {}, n._popper = null, n.config = n._getConfig(i), n.tip = null, n._setListeners(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.enable = function () {
          this._isEnabled = !0
        }, s.disable = function () {
          this._isEnabled = !1
        }, s.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }, s.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                i = x(t.delegateTarget, e);
              i || (i = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
            } else {
              if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
              this._enter(null, this)
            }
        }, s.dispose = function () {
          clearTimeout(this._timeout), $.off(this._element, this.constructor.EVENT_KEY), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this)
        }, s.show = function () {
          var t = this;
          if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
          if (this.isWithContent() && this._isEnabled) {
            var e = $.trigger(this._element, this.constructor.Event.SHOW),
              i = function t(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                  var i = e.getRootNode();
                  return i instanceof ShadowRoot ? i : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
              }(this._element),
              n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (e.defaultPrevented || !n) return;
            var o = this.getTipElement(),
              s = r(this.constructor.NAME);
            o.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o.classList.add("fade");
            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
              l = this._getAttachment(a);
            this._addAttachmentClass(l);
            var c = this._getContainer();
            k(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED), this._popper = re(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
            var u, h, f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            f && (u = o.classList).add.apply(u, f.split(" ")), "ontouchstart" in document.documentElement && (h = []).concat.apply(h, document.body.children).forEach((function (t) {
              $.on(t, "mouseover", (function () {}))
            }));
            var m = function () {
              var e = t._hoverState;
              t._hoverState = null, $.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
            };
            if (this.tip.classList.contains("fade")) {
              var g = d(this.tip);
              $.one(this.tip, "transitionend", m), p(this.tip, g)
            } else m()
          }
        }, s.hide = function () {
          var t = this;
          if (this._popper) {
            var e = this.getTipElement(),
              i = function () {
                "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), $.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
              };
            if (!$.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
              var n;
              if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (n = []).concat.apply(n, document.body.children).forEach((function (t) {
                  return $.off(t, "mouseover", g)
                })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                var o = d(e);
                $.one(e, "transitionend", i), p(e, o)
              } else i();
              this._hoverState = ""
            }
          }
        }, s.update = function () {
          null !== this._popper && this._popper.update()
        }, s.isWithContent = function () {
          return Boolean(this.getTitle())
        }, s.getTipElement = function () {
          if (this.tip) return this.tip;
          var t = document.createElement("div");
          return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
        }, s.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
        }, s.setElementContent = function (t, e) {
          if (null !== t) return "object" == typeof e && h(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }, s.getTitle = function () {
          var t = this._element.getAttribute("data-bs-original-title");
          return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
        }, s.updateAttachment = function (t) {
          return "right" === t ? "end" : "left" === t ? "start" : t
        }, s._getPopperConfig = function (t) {
          var e = this,
            n = {
              name: "flip",
              options: {
                altBoundary: !0
              }
            };
          return this.config.fallbackPlacements && (n.options.fallbackPlacements = this.config.fallbackPlacements), i({}, {
            placement: t,
            modifiers: [n, {
              name: "preventOverflow",
              options: {
                rootBoundary: this.config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: "." + this.constructor.NAME + "-arrow"
              }
            }, {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: function (t) {
                return e._handlePopperPlacementChange(t)
              }
            }],
            onFirstUpdate: function (t) {
              t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
            }
          }, this.config.popperConfig)
        }, s._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }, s._getContainer = function () {
          return !1 === this.config.container ? document.body : h(this.config.container) ? this.config.container : U.findOne(this.config.container)
        }, s._getAttachment = function (t) {
          return Oe[t.toUpperCase()]
        }, s._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach((function (e) {
            if ("click" === e) $.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
              return t.toggle(e)
            }));
            else if ("manual" !== e) {
              var i = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                n = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
              $.on(t._element, i, t.config.selector, (function (e) {
                return t._enter(e)
              })), $.on(t._element, n, t.config.selector, (function (e) {
                return t._leave(e)
              }))
            }
          })), this._hideModalHandler = function () {
            t._element && t.hide()
          }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = i({}, this.config, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle()
        }, s._fixTitle = function () {
          var t = this._element.getAttribute("title"),
            e = typeof this._element.getAttribute("data-bs-original-title");
          (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }, s._enter = function (t, e) {
          var i = this.constructor.DATA_KEY;
          (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, i, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
            "show" === e._hoverState && e.show()
          }), e.config.delay.show) : e.show())
        }, s._leave = function (t, e) {
          var i = this.constructor.DATA_KEY;
          (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, i, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
            "out" === e._hoverState && e.hide()
          }), e.config.delay.hide) : e.hide())
        }, s._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1
        }, s._getConfig = function (t) {
          var e = B.getDataAttributes(this._element);
          return Object.keys(e).forEach((function (t) {
            Ae.has(t) && delete e[t]
          })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = i({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
            show: t.delay,
            hide: t.delay
          }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), f(Ee, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t
        }, s._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          return t
        }, s._cleanTipClass = function () {
          var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ce);
          null !== e && e.length > 0 && e.map((function (t) {
            return t.trim()
          })).forEach((function (e) {
            return t.classList.remove(e)
          }))
        }, s._handlePopperPlacementChange = function (t) {
          var e = t.state;
          e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            var e = x(this, "bs.tooltip"),
              i = "object" == typeof t && t;
            if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, i)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
              e[t]()
            }
          }))
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return Le
          }
        }, {
          key: "NAME",
          get: function () {
            return Ee
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.tooltip"
          }
        }, {
          key: "Event",
          get: function () {
            return ze
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.tooltip"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return Ie
          }
        }]), o
      }(H);
    b((function () {
      var t = y();
      if (t) {
        var e = t.fn[Ee];
        t.fn[Ee] = Me.jQueryInterface, t.fn[Ee].Constructor = Me, t.fn[Ee].noConflict = function () {
          return t.fn[Ee] = e, Me.jQueryInterface
        }
      }
    }));
    var Pe = "popover",
      De = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      je = i({}, Me.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      $e = i({}, Me.DefaultType, {
        content: "(string|element|function)"
      }),
      He = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      },
      We = function (t) {
        function i() {
          return t.apply(this, arguments) || this
        }
        n(i, t);
        var o = i.prototype;
        return o.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, o.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(U.findOne(".popover-header", t), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
        }, o._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }, o._getContent = function () {
          return this._element.getAttribute("data-bs-content") || this.config.content
        }, o._cleanTipClass = function () {
          var t = this.getTipElement(),
            e = t.getAttribute("class").match(De);
          null !== e && e.length > 0 && e.map((function (t) {
            return t.trim()
          })).forEach((function (e) {
            return t.classList.remove(e)
          }))
        }, i.jQueryInterface = function (t) {
          return this.each((function () {
            var e = x(this, "bs.popover"),
              n = "object" == typeof t ? t : null;
            if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), k(this, "bs.popover", e)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
              e[t]()
            }
          }))
        }, e(i, null, [{
          key: "Default",
          get: function () {
            return je
          }
        }, {
          key: "NAME",
          get: function () {
            return Pe
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover"
          }
        }, {
          key: "Event",
          get: function () {
            return He
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.popover"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return $e
          }
        }]), i
      }(Me);
    b((function () {
      var t = y();
      if (t) {
        var e = t.fn[Pe];
        t.fn[Pe] = We.jQueryInterface, t.fn[Pe].Constructor = We, t.fn[Pe].noConflict = function () {
          return t.fn[Pe] = e, We.jQueryInterface
        }
      }
    }));
    var Ne = "scrollspy",
      Fe = {
        offset: 10,
        method: "auto",
        target: ""
      },
      Re = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      },
      qe = function (t) {
        function o(e, i) {
          var n;
          return (n = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, n._config = n._getConfig(i), n._selector = n._config.target + " .nav-link, " + n._config.target + " .list-group-item, " + n._config.target + " .dropdown-item", n._offsets = [], n._targets = [], n._activeTarget = null, n._scrollHeight = 0, $.on(n._scrollElement, "scroll.bs.scrollspy", (function (t) {
            return n._process(t)
          })), n.refresh(), n._process(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.refresh = function () {
          var t = this,
            e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? e : this._config.method,
            n = "position" === i ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map((function (t) {
            var e = l(t),
              o = e ? U.findOne(e) : null;
            if (o) {
              var s = o.getBoundingClientRect();
              if (s.width || s.height) return [B[i](o).top + n, e]
            }
            return null
          })).filter((function (t) {
            return t
          })).sort((function (t, e) {
            return t[0] - e[0]
          })).forEach((function (e) {
            t._offsets.push(e[0]), t._targets.push(e[1])
          }))
        }, s.dispose = function () {
          t.prototype.dispose.call(this), $.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, s._getConfig = function (t) {
          if ("string" != typeof (t = i({}, Fe, "object" == typeof t && t ? t : {})).target && h(t.target)) {
            var e = t.target.id;
            e || (e = r(Ne), t.target.id = e), t.target = "#" + e
          }
          return f(Ne, t, Re), t
        }, s._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, s._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, s._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, s._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();
          if (this._scrollHeight !== e && this.refresh(), t >= i) {
            var n = this._targets[this._targets.length - 1];
            this._activeTarget !== n && this._activate(n)
          } else {
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
          }
        }, s._activate = function (t) {
          this._activeTarget = t, this._clear();
          var e = this._selector.split(",").map((function (e) {
              return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
            })),
            i = U.findOne(e.join(","));
          i.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), U.parents(i, ".nav, .list-group").forEach((function (t) {
            U.prev(t, ".nav-link, .list-group-item").forEach((function (t) {
              return t.classList.add("active")
            })), U.prev(t, ".nav-item").forEach((function (t) {
              U.children(t, ".nav-link").forEach((function (t) {
                return t.classList.add("active")
              }))
            }))
          }))), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: t
          })
        }, s._clear = function () {
          U.find(this._selector).filter((function (t) {
            return t.classList.contains("active")
          })).forEach((function (t) {
            return t.classList.remove("active")
          }))
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            var e = x(this, "bs.scrollspy");
            if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
              e[t]()
            }
          }))
        }, e(o, null, [{
          key: "Default",
          get: function () {
            return Fe
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.scrollspy"
          }
        }]), o
      }(H);
    $.on(window, "load.bs.scrollspy.data-api", (function () {
      U.find('[data-bs-spy="scroll"]').forEach((function (t) {
        return new qe(t, B.getDataAttributes(t))
      }))
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn[Ne];
        t.fn[Ne] = qe.jQueryInterface, t.fn[Ne].Constructor = qe, t.fn[Ne].noConflict = function () {
          return t.fn[Ne] = e, qe.jQueryInterface
        }
      }
    }));
    var Be = function (t) {
      function i() {
        return t.apply(this, arguments) || this
      }
      n(i, t);
      var o = i.prototype;
      return o.show = function () {
        var t = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
          var e, i = c(this._element),
            n = this._element.closest(".nav, .list-group");
          if (n) {
            var o = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
            e = (e = U.find(o, n))[e.length - 1]
          }
          var s = null;
          if (e && (s = $.trigger(e, "hide.bs.tab", {
              relatedTarget: this._element
            })), !($.trigger(this._element, "show.bs.tab", {
              relatedTarget: e
            }).defaultPrevented || null !== s && s.defaultPrevented)) {
            this._activate(this._element, n);
            var r = function () {
              $.trigger(e, "hidden.bs.tab", {
                relatedTarget: t._element
              }), $.trigger(t._element, "shown.bs.tab", {
                relatedTarget: e
              })
            };
            i ? this._activate(i, i.parentNode, r) : r()
          }
        }
      }, o._activate = function (t, e, i) {
        var n = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
          s = i && o && o.classList.contains("fade"),
          r = function () {
            return n._transitionComplete(t, o, i)
          };
        if (o && s) {
          var a = d(o);
          o.classList.remove("show"), $.one(o, "transitionend", r), p(o, a)
        } else r()
      }, o._transitionComplete = function (t, e, i) {
        if (e) {
          e.classList.remove("active");
          var n = U.findOne(":scope > .dropdown-menu .active", e.parentNode);
          n && n.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
        }
        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && U.find(".dropdown-toggle").forEach((function (t) {
          return t.classList.add("active")
        })), t.setAttribute("aria-expanded", !0)), i && i()
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.tab") || new i(this);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        }))
      }, e(i, null, [{
        key: "DATA_KEY",
        get: function () {
          return "bs.tab"
        }
      }]), i
    }(H);
    $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
      t.preventDefault(), (x(this, "bs.tab") || new Be(this)).show()
    })), b((function () {
      var t = y();
      if (t) {
        var e = t.fn.tab;
        t.fn.tab = Be.jQueryInterface, t.fn.tab.Constructor = Be, t.fn.tab.noConflict = function () {
          return t.fn.tab = e, Be.jQueryInterface
        }
      }
    }));
    var Ue = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      },
      Ye = {
        animation: !0,
        autohide: !0,
        delay: 5e3
      },
      Ve = function (t) {
        function o(e, i) {
          var n;
          return (n = t.call(this, e) || this)._config = n._getConfig(i), n._timeout = null, n._setListeners(), n
        }
        n(o, t);
        var s = o.prototype;
        return s.show = function () {
          var t = this;
          if (!$.trigger(this._element, "show.bs.toast").defaultPrevented) {
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            var e = function () {
              t._element.classList.remove("showing"), t._element.classList.add("show"), $.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
                t.hide()
              }), t._config.delay))
            };
            if (this._element.classList.remove("hide"), v(this._element), this._element.classList.add("showing"), this._config.animation) {
              var i = d(this._element);
              $.one(this._element, "transitionend", e), p(this._element, i)
            } else e()
          }
        }, s.hide = function () {
          var t = this;
          if (this._element.classList.contains("show") && !$.trigger(this._element, "hide.bs.toast").defaultPrevented) {
            var e = function () {
              t._element.classList.add("hide"), $.trigger(t._element, "hidden.bs.toast")
            };
            if (this._element.classList.remove("show"), this._config.animation) {
              var i = d(this._element);
              $.one(this._element, "transitionend", e), p(this._element, i)
            } else e()
          }
        }, s.dispose = function () {
          this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
        }, s._getConfig = function (t) {
          return t = i({}, Ye, B.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), f("toast", t, this.constructor.DefaultType), t
        }, s._setListeners = function () {
          var t = this;
          $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function () {
            return t.hide()
          }))
        }, s._clearTimeout = function () {
          clearTimeout(this._timeout), this._timeout = null
        }, o.jQueryInterface = function (t) {
          return this.each((function () {
            var e = x(this, "bs.toast");
            if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
              if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
              e[t](this)
            }
          }))
        }, e(o, null, [{
          key: "DefaultType",
          get: function () {
            return Ue
          }
        }, {
          key: "Default",
          get: function () {
            return Ye
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.toast"
          }
        }]), o
      }(H);
    return b((function () {
      var t = y();
      if (t) {
        var e = t.fn.toast;
        t.fn.toast = Ve.jQueryInterface, t.fn.toast.Constructor = Ve, t.fn.toast.noConflict = function () {
          return t.fn.toast = e, Ve.jQueryInterface
        }
      }
    })), {
      Alert: N,
      Button: F,
      Carousel: K,
      Collapse: tt,
      Dropdown: ye,
      Modal: we,
      Popover: We,
      ScrollSpy: qe,
      Tab: Be,
      Toast: Ve,
      Tooltip: Me
    }
  })),
  function (t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("object" == typeof module && module.exports) {
      var e = require("jquery");
      t(e), module.exports = e
    } else t(jQuery)
  }((function (t) {
    function e(t) {
      this.init(t)
    }
    e.prototype = {
      value: 0,
      size: 100,
      startAngle: -Math.PI,
      thickness: "auto",
      fill: {
        gradient: ["#3aeabb", "#fdd250"]
      },
      emptyFill: "rgba(0, 0, 0, .1)",
      animation: {
        duration: 1200,
        easing: "circleProgressEasing"
      },
      animationStartValue: 0,
      reverse: !1,
      lineCap: "butt",
      insertMode: "prepend",
      constructor: e,
      el: null,
      canvas: null,
      ctx: null,
      radius: 0,
      arcFill: null,
      lastFrameValue: 0,
      init: function (e) {
        t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited")
      },
      initWidget: function () {
        this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
        var e = this.canvas;
        if (e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d"), window.devicePixelRatio > 1) {
          var i = window.devicePixelRatio;
          e.style.width = e.style.height = this.size + "px", e.width = e.height = this.size * i, this.ctx.scale(i, i)
        }
      },
      initFill: function () {
        var e, i = this,
          n = this.fill,
          o = this.ctx,
          s = this.size;
        if (!n) throw Error("The fill is not specified!");
        if ("string" == typeof n && (n = {
            color: n
          }), n.color && (this.arcFill = n.color), n.gradient) {
          var r = n.gradient;
          if (1 == r.length) this.arcFill = r[0];
          else if (r.length > 1) {
            for (var a = n.gradientAngle || 0, l = n.gradientDirection || [s / 2 * (1 - Math.cos(a)), s / 2 * (1 + Math.sin(a)), s / 2 * (1 + Math.cos(a)), s / 2 * (1 - Math.sin(a))], c = o.createLinearGradient.apply(o, l), d = 0; d < r.length; d++) {
              var u = r[d],
                h = d / (r.length - 1);
              t.isArray(u) && (h = u[1], u = u[0]), c.addColorStop(h, u)
            }
            this.arcFill = c
          }
        }
  
        function p() {
          var n = t("<canvas>")[0];
          n.width = i.size, n.height = i.size, n.getContext("2d").drawImage(e, 0, 0, s, s), i.arcFill = i.ctx.createPattern(n, "no-repeat"), i.drawFrame(i.lastFrameValue)
        }
        n.image && (n.image instanceof Image ? e = n.image : (e = new Image).src = n.image, e.complete ? p() : e.onload = p)
      },
      draw: function () {
        this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
      },
      drawFrame: function (t) {
        this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
      },
      drawArc: function (t) {
        if (0 !== t) {
          var e = this.ctx,
            i = this.radius,
            n = this.getThickness(),
            o = this.startAngle;
          e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - n / 2, o - 2 * Math.PI * t, o) : e.arc(i, i, i - n / 2, o, o + 2 * Math.PI * t), e.lineWidth = n, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
        }
      },
      drawEmptyArc: function (t) {
        var e = this.ctx,
          i = this.radius,
          n = this.getThickness(),
          o = this.startAngle;
        t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, o, o - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, o + 2 * Math.PI * t, o), e.lineWidth = n, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
      },
      drawAnimated: function (e) {
        var i = this,
          n = this.el,
          o = t(this.canvas);
        o.stop(!0, !1), n.trigger("circle-animation-start"), o.css({
          animationProgress: 0
        }).animate({
          animationProgress: 1
        }, t.extend({}, this.animation, {
          step: function (t) {
            var o = i.animationStartValue * (1 - t) + e * t;
            i.drawFrame(o), n.trigger("circle-animation-progress", [t, o])
          }
        })).promise().always((function () {
          n.trigger("circle-animation-end")
        }))
      },
      getThickness: function () {
        return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
      },
      getValue: function () {
        return this.value
      },
      setValue: function (t) {
        this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw()
      }
    }, t.circleProgress = {
      defaults: e.prototype
    }, t.easing.circleProgressEasing = function (t) {
      return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t
    }, t.fn.circleProgress = function (i, n) {
      var o = "circle-progress",
        s = this.data(o);
      if ("widget" == i) {
        if (!s) throw Error('Calling "widget" method on not initialized instance is forbidden');
        return s.canvas
      }
      if ("value" == i) {
        if (!s) throw Error('Calling "value" method on not initialized instance is forbidden');
        if (void 0 === n) return s.getValue();
        var r = arguments[1];
        return this.each((function () {
          t(this).data(o).setValue(r)
        }))
      }
      return this.each((function () {
        var n = t(this),
          s = n.data(o),
          r = t.isPlainObject(i) ? i : {};
        if (s) s.init(r);
        else {
          var a = t.extend({}, n.data());
          "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), (r = t.extend(a, r)).el = n, s = new e(r), n.data(o, s)
        }
      }))
    }
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
  }("undefined" != typeof window ? window : this, (function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
      if (t && e) {
        var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
        return -1 == n.indexOf(e) && n.push(e), this
      }
    }, e.once = function (t, e) {
      if (t && e) {
        this.on(t, e);
        var i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0, this
      }
    }, e.off = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = i.indexOf(e);
        return -1 != n && i.splice(n, 1), this
      }
    }, e.emitEvent = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        i = i.slice(0), e = e || [];
        for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
          var s = i[o];
          n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
        }
        return this
      }
    }, e.allOff = function () {
      delete this._events, delete this._onceEvents
    }, t
  })),
  function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function (i) {
      return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
  }("undefined" != typeof window ? window : this, (function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t
    }
  
    function n(t, e, o) {
      if (!(this instanceof n)) return new n(t, e, o);
      var s, c = t;
      return "string" == typeof t && (c = document.querySelectorAll(t)), c ? (this.elements = (s = c, Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? l.call(s) : [s]), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (c || t))
    }
  
    function o(t) {
      this.img = t
    }
  
    function s(t, e) {
      this.url = t, this.element = e, this.img = new Image
    }
    var r = t.jQuery,
      a = t.console,
      l = Array.prototype.slice;
    (n.prototype = Object.create(e.prototype)).options = {}, n.prototype.getImages = function () {
      this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function (t) {
      "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && c[e]) {
        for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
          var o = i[n];
          this.addImage(o)
        }
        if ("string" == typeof this.options.background) {
          var s = t.querySelectorAll(this.options.background);
          for (n = 0; n < s.length; n++) {
            var r = s[n];
            this.addElementBackgroundImages(r)
          }
        }
      }
    };
    var c = {
      1: !0,
      9: !0,
      11: !0
    };
    return n.prototype.addElementBackgroundImages = function (t) {
      var e = getComputedStyle(t);
      if (e)
        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
          var o = n && n[2];
          o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
        }
    }, n.prototype.addImage = function (t) {
      var e = new o(t);
      this.images.push(e)
    }, n.prototype.addBackground = function (t, e) {
      var i = new s(t, e);
      this.images.push(i)
    }, n.prototype.check = function () {
      function t(t, i, n) {
        setTimeout((function () {
          e.progress(t, i, n)
        }))
      }
      var e = this;
      return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function (e) {
        e.once("progress", t), e.check()
      })) : void this.complete()
    }, n.prototype.progress = function (t, e, i) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, n.prototype.complete = function () {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
        var e = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[e](this)
      }
    }, (o.prototype = Object.create(e.prototype)).check = function () {
      return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth
    }, o.prototype.confirm = function (t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, o.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, o.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (s.prototype = Object.create(o.prototype)).check = function () {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, n.makeJQueryPlugin = function (e) {
      (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (t, e) {
        return new n(this, t, e).jqDeferred.promise(r(this))
      })
    }, n.makeJQueryPlugin(), n
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function (i) {
      return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
  }(window, (function (t, e) {
    "use strict";
  
    function i(i, s, a) {
      (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
      }), a.fn[i] = function (t) {
        if ("string" != typeof t) return u = t, this.each((function (t, e) {
          var n = a.data(e, i);
          n ? (n.option(u), n._init()) : (n = new s(e, u), a.data(e, i, n))
        })), this;
        var e, n, l, c, d, u, h = o.call(arguments, 1);
        return l = h, d = "$()." + i + '("' + (n = t) + '")', (e = this).each((function (t, e) {
          var o = a.data(e, i);
          if (o) {
            var s = o[n];
            if (s && "_" != n.charAt(0)) {
              var u = s.apply(o, l);
              c = void 0 === c ? u : c
            } else r(d + " is not a valid method")
          } else r(i + " not initialized. Cannot call methods, i.e. " + d)
        })), void 0 !== c ? c : e
      }, n(a))
    }
  
    function n(t) {
      !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
      s = t.console,
      r = void 0 === s ? function () {} : function (t) {
        s.error(t)
      };
    return n(e || t.jQuery), i
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
  }("undefined" != typeof window ? window : this, (function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
      if (t && e) {
        var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
        return -1 == n.indexOf(e) && n.push(e), this
      }
    }, e.once = function (t, e) {
      if (t && e) {
        this.on(t, e);
        var i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0, this
      }
    }, e.off = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = i.indexOf(e);
        return -1 != n && i.splice(n, 1), this
      }
    }, e.emitEvent = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        i = i.slice(0), e = e || [];
        for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
          var s = i[o];
          n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
        }
        return this
      }
    }, e.allOff = function () {
      delete this._events, delete this._onceEvents
    }, t
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
  }(window, (function () {
    "use strict";
  
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e
    }
  
    function e(t) {
      var e = getComputedStyle(t);
      return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }
    var i, n = "undefined" == typeof console ? function () {} : function (t) {
        console.error(t)
      },
      o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      s = o.length,
      r = !1;
    return function n(a) {
      if (function () {
          if (!r) {
            r = !0;
            var o = document.createElement("div");
            o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style.boxSizing = "border-box";
            var s = document.body || document.documentElement;
            s.appendChild(o);
            var a = e(o);
            i = 200 == Math.round(t(a.width)), n.isBoxSizeOuter = i, s.removeChild(o)
          }
        }(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
        var l = e(a);
        if ("none" == l.display) return function () {
          for (var t = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
            }, e = 0; e < s; e++) t[o[e]] = 0;
          return t
        }();
        var c = {};
        c.width = a.offsetWidth, c.height = a.offsetHeight;
        for (var d = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < s; u++) {
          var h = o[u],
            p = l[h],
            f = parseFloat(p);
          c[h] = isNaN(f) ? 0 : f
        }
        var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          _ = c.borderTopWidth + c.borderBottomWidth,
          w = d && i,
          k = t(l.width);
        !1 !== k && (c.width = k + (w ? 0 : m + b));
        var x = t(l.height);
        return !1 !== x && (c.height = x + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c
      }
    }
  })),
  function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
  }(window, (function () {
    "use strict";
    var t = function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n
      }
    }();
    return function (e, i) {
      return e[t](i)
    }
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function (i) {
      return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
  }(window, (function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t
        },
        modulo: function (t, e) {
          return (t % e + e) % e
        }
      },
      n = Array.prototype.slice;
    i.makeArray = function (t) {
      return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    }, i.removeFrom = function (t, e) {
      var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
      for (; t.parentNode && t != document.body;)
        if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
      return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
      t = i.makeArray(t);
      var o = [];
      return t.forEach((function (t) {
        if (t instanceof HTMLElement) {
          if (!n) return void o.push(t);
          e(t, n) && o.push(t);
          for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
        }
      })), o
    }, i.debounceMethod = function (t, e, i) {
      i = i || 100;
      var n = t.prototype[e],
        o = e + "Timeout";
      t.prototype[e] = function () {
        var t = this[o];
        clearTimeout(t);
        var e = arguments,
          s = this;
        this[o] = setTimeout((function () {
          n.apply(s, e), delete s[o]
        }), i)
      }
    }, i.docReady = function (t) {
      var e = document.readyState;
      "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
      return t.replace(/(.)([A-Z])/g, (function (t, e, i) {
        return e + "-" + i
      })).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
      i.docReady((function () {
        var s = i.toDashed(n),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          l = document.querySelectorAll(".js-" + s),
          c = i.makeArray(a).concat(i.makeArray(l)),
          d = r + "-options",
          u = t.jQuery;
        c.forEach((function (t) {
          var i, s = t.getAttribute(r) || t.getAttribute(d);
          try {
            i = s && JSON.parse(s)
          } catch (i) {
            return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + i))
          }
          var a = new e(t, i);
          u && u.data(t, n, a)
        }))
      }))
    }, i
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
  }(window, (function (t, e) {
    "use strict";
  
    function i(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }
    var n = document.documentElement.style,
      o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      } [o],
      a = {
        transform: s,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay"
      },
      l = i.prototype = Object.create(t.prototype);
    l.constructor = i, l._create = function () {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: "absolute"
      })
    }, l.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, l.getSize = function () {
      this.size = e(this.element)
    }, l.css = function (t) {
      var e = this.element.style;
      for (var i in t) e[a[i] || i] = t[i]
    }, l.getPosition = function () {
      var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = t[e ? "left" : "right"],
        o = t[i ? "top" : "bottom"],
        s = parseFloat(n),
        r = parseFloat(o),
        a = this.layout.size; - 1 != n.indexOf("%") && (s = s / 100 * a.width), -1 != o.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, l.layoutPosition = function () {
      var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[o];
      e[s] = this.getXValue(a), e[r] = "";
      var l = n ? "paddingTop" : "paddingBottom",
        c = n ? "top" : "bottom",
        d = n ? "bottom" : "top",
        u = this.position.y + t[l];
      e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, l.getXValue = function (t) {
      var e = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, l.getYValue = function (t) {
      var e = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, l._transitionTo = function (t, e) {
      this.getPosition();
      var i = this.position.x,
        n = this.position.y,
        o = t == this.position.x && e == this.position.y;
      if (this.setPosition(t, e), !o || this.isTransitioning) {
        var s = t - i,
          r = e - n,
          a = {};
        a.transform = this.getTranslate(s, r), this.transition({
          to: a,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        })
      } else this.layoutPosition()
    }, l.getTranslate = function (t, e) {
      return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, l.goTo = function (t, e) {
      this.setPosition(t, e), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
      this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, l._nonTransition = function (t) {
      for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, l.transition = function (t) {
      if (parseFloat(this.layout.options.transitionDuration)) {
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
      } else this._nonTransition(t)
    };
    var c = "opacity," + s.replace(/([A-Z])/g, (function (t) {
      return "-" + t.toLowerCase()
    }));
    l.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        t = "number" == typeof t ? t + "ms" : t, this.css({
          transitionProperty: c,
          transitionDuration: t,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(r, this, !1)
      }
    }, l.onwebkitTransitionEnd = function (t) {
      this.ontransitionend(t)
    }, l.onotransitionend = function (t) {
      this.ontransitionend(t)
    };
    var d = {
      "-webkit-transform": "transform"
    };
    l.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = d[t.propertyName] || t.propertyName;
        delete e.ingProperties[i],
          function (t) {
            for (var e in t) return !1;
            return !0
          }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
      }
    }, l.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function (t) {
      var e = {};
      for (var i in t) e[i] = "";
      this.css(e)
    };
    var u = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    return l.removeTransitionStyles = function () {
      this.css(u)
    }, l.stagger = function (t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, l.removeElem = function () {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, l.remove = function () {
      return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
        this.removeElem()
      })), void this.hide()) : void this.removeElem()
    }, l.reveal = function () {
      delete this.isHidden, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: t.hiddenStyle,
        to: t.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, l.onRevealTransitionEnd = function () {
      this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function (t) {
      var e = this.layout.options[t];
      if (e.opacity) return "opacity";
      for (var i in e) return i
    }, l.hide = function () {
      this.isHidden = !0, this.css({
        display: ""
      });
      var t = this.layout.options,
        e = {};
      e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: t.visibleStyle,
        to: t.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: e
      })
    }, l.onHideTransitionEnd = function () {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, l.destroy = function () {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, i
  })),
  function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function (i, n, o, s) {
      return e(t, i, n, o, s)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
  }(window, (function (t, e, i, n, o) {
    "use strict";
  
    function s(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++d;
        this.element.outlayerGUID = o, (u[o] = this)._create(), this._getOption("initLayout") && this.layout()
      } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
  
    function r(t) {
      function e() {
        t.apply(this, arguments)
      }
      return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    var a = t.console,
      l = t.jQuery,
      c = function () {},
      d = 0,
      u = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
      containerStyle: {
        position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)"
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)"
      }
    };
    var h = s.prototype;
    n.extend(h, e.prototype), h.option = function (t) {
      n.extend(this.options, t)
    }, h._getOption = function (t) {
      var e = this.constructor.compatOptions[t];
      return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
    }, h._create = function () {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
      this.items = this._itemize(this.element.children)
    }, h._itemize = function (t) {
      for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
        var s = new i(e[o], this);
        n.push(s)
      }
      return n
    }, h._filterFindItemElements = function (t) {
      return n.filterFindElements(t, this.options.itemSelector)
    }, h.getItemElements = function () {
      return this.items.map((function (t) {
        return t.element
      }))
    }, h.layout = function () {
      this._resetLayout(), this._manageStamps();
      var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;
      this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, h._init = h.layout, h._resetLayout = function () {
      this.getSize()
    }, h.getSize = function () {
      this.size = i(this.element)
    }, h._getMeasurement = function (t, e) {
      var n, o = this.options[t];
      o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, h.layoutItems = function (t, e) {
      t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, h._getItemsForLayout = function (t) {
      return t.filter((function (t) {
        return !t.isIgnored
      }))
    }, h._layoutItems = function (t, e) {
      if (this._emitCompleteOnItems("layout", t), t && t.length) {
        var i = [];
        t.forEach((function (t) {
          var n = this._getItemLayoutPosition(t);
          n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
        }), this), this._processLayoutQueue(i)
      }
    }, h._getItemLayoutPosition = function () {
      return {
        x: 0,
        y: 0
      }
    }, h._processLayoutQueue = function (t) {
      this.updateStagger(), t.forEach((function (t, e) {
        this._positionItem(t.item, t.x, t.y, t.isInstant, e)
      }), this)
    }, h.updateStagger = function () {
      var t = this.options.stagger;
      return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
          i = e && e[1],
          n = e && e[2];
        return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
      }(t), this.stagger)
    }, h._positionItem = function (t, e, i, n, o) {
      n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, h._postLayout = function () {
      this.resizeContainer()
    }, h.resizeContainer = function () {
      if (this._getOption("resizeContainer")) {
        var t = this._getContainerSize();
        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
      }
    }, h._getContainerSize = c, h._setContainerMeasure = function (t, e) {
      if (void 0 !== t) {
        var i = this.size;
        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
      }
    }, h._emitCompleteOnItems = function (t, e) {
      function i() {
        o.dispatchEvent(t + "Complete", null, [e])
      }
  
      function n() {
        ++r == s && i()
      }
      var o = this,
        s = e.length;
      if (e && s) {
        var r = 0;
        e.forEach((function (e) {
          e.once(t, n)
        }))
      } else i()
    }, h.dispatchEvent = function (t, e, i) {
      var n = e ? [e].concat(i) : i;
      if (this.emitEvent(t, n), l)
        if (this.$element = this.$element || l(this.element), e) {
          var o = l.Event(e);
          o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, h.ignore = function (t) {
      var e = this.getItem(t);
      e && (e.isIgnored = !0)
    }, h.unignore = function (t) {
      var e = this.getItem(t);
      e && delete e.isIgnored
    }, h.stamp = function (t) {
      (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, h.unstamp = function (t) {
      (t = this._find(t)) && t.forEach((function (t) {
        n.removeFrom(this.stamps, t), this.unignore(t)
      }), this)
    }, h._find = function (t) {
      if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
    }, h._manageStamps = function () {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
      var t = this.element.getBoundingClientRect(),
        e = this.size;
      this._boundingRect = {
        left: t.left + e.paddingLeft + e.borderLeftWidth,
        top: t.top + e.paddingTop + e.borderTopWidth,
        right: t.right - (e.paddingRight + e.borderRightWidth),
        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
      }
    }, h._manageStamp = c, h._getElementOffset = function (t) {
      var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(t);
      return {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      }
    }, h.handleEvent = n.handleEvent, h.bindResize = function () {
      t.addEventListener("resize", this), this.isResizeBound = !0
    }, h.unbindResize = function () {
      t.removeEventListener("resize", this), this.isResizeBound = !1
    }, h.onresize = function () {
      this.resize()
    }, n.debounceMethod(s, "onresize", 100), h.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
      var t = i(this.element);
      return this.size && t && t.innerWidth !== this.size.innerWidth
    }, h.addItems = function (t) {
      var e = this._itemize(t);
      return e.length && (this.items = this.items.concat(e)), e
    }, h.appended = function (t) {
      var e = this.addItems(t);
      e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, h.prepended = function (t) {
      var e = this._itemize(t);
      if (e.length) {
        var i = this.items.slice(0);
        this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
      }
    }, h.reveal = function (t) {
      if (this._emitCompleteOnItems("reveal", t), t && t.length) {
        var e = this.updateStagger();
        t.forEach((function (t, i) {
          t.stagger(i * e), t.reveal()
        }))
      }
    }, h.hide = function (t) {
      if (this._emitCompleteOnItems("hide", t), t && t.length) {
        var e = this.updateStagger();
        t.forEach((function (t, i) {
          t.stagger(i * e), t.hide()
        }))
      }
    }, h.revealItemElements = function (t) {
      var e = this.getItems(t);
      this.reveal(e)
    }, h.hideItemElements = function (t) {
      var e = this.getItems(t);
      this.hide(e)
    }, h.getItem = function (t) {
      for (var e = 0; e < this.items.length; e++) {
        var i = this.items[e];
        if (i.element == t) return i
      }
    }, h.getItems = function (t) {
      t = n.makeArray(t);
      var e = [];
      return t.forEach((function (t) {
        var i = this.getItem(t);
        i && e.push(i)
      }), this), e
    }, h.remove = function (t) {
      var e = this.getItems(t);
      this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
        t.remove(), n.removeFrom(this.items, t)
      }), this)
    }, h.destroy = function () {
      var t = this.element.style;
      t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
        t.destroy()
      })), this.unbindResize();
      var e = this.element.outlayerGUID;
      delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
      var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
      return e && u[e]
    }, s.create = function (t, e) {
      var i = r(s);
      return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    };
    var p = {
      ms: 1,
      s: 1e3
    };
    return s.Item = o, s
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
  }(window, (function (t) {
    "use strict";
  
    function e() {
      t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create;
    i._create = function () {
      this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function () {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var t = this.layout.options.getSortData,
          e = this.layout._sorters;
        for (var i in t) {
          var n = e[i];
          this.sortData[i] = n(this.element, this)
        }
      }
    };
    var o = i.destroy;
    return i.destroy = function () {
      o.apply(this, arguments), this.css({
        display: ""
      })
    }, e
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
  }(window, (function (t, e) {
    "use strict";
  
    function i(t) {
      (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function (t) {
      n[t] = function () {
        return e.prototype[t].apply(this.isotope, arguments)
      }
    })), n.needsVerticalResizeLayout = function () {
      var e = t(this.isotope.element);
      return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
      this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
      this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
      this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (t, e) {
      var i = t + e,
        n = "outer" + e;
      if (this._getMeasurement(i, n), !this[i]) {
        var o = this.getFirstItemSize();
        this[i] = o && o[n] || this.isotope.size["inner" + e]
      }
    }, n.getFirstItemSize = function () {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
    }, n.layout = function () {
      this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
      function o() {
        i.apply(this, arguments)
      }
      return (o.prototype = Object.create(n)).constructor = o, e && (o.options = e), i.modes[o.prototype.namespace = t] = o
    }, i
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
  }(window, (function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var t = 0; t < this.cols; t++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function () {
      if (this.getContainerWidth(), !this.columnWidth) {
        var t = this.items[0],
          i = t && t.element;
        this.columnWidth = i && e(i).outerWidth || this.containerWidth
      }
      var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        s = o / n,
        r = n - o % n;
      s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
    }, n.getContainerWidth = function () {
      var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
        i = e(t);
      this.containerWidth = i && i.innerWidth
    }, n._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = t.size.outerWidth % this.columnWidth,
        i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
      i = Math.min(i, this.cols);
      for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
          x: this.columnWidth * n.col,
          y: n.y
        }, s = n.y + t.size.outerHeight, r = i + n.col, a = n.col; a < r; a++) this.colYs[a] = s;
      return o
    }, n._getTopColPosition = function (t) {
      var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);
      return {
        col: e.indexOf(i),
        y: i
      }
    }, n._getTopColGroup = function (t) {
      if (t < 2) return this.colYs;
      for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
      return e
    }, n._getColGroupY = function (t, e) {
      if (e < 2) return this.colYs[t];
      var i = this.colYs.slice(t, t + e);
      return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function (t, e) {
      var i = this.horizontalColIndex % this.cols;
      i = 1 < t && i + t > this.cols ? 0 : i;
      var n = e.size.outerWidth && e.size.outerHeight;
      return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, t)
      }
    }, n._manageStamp = function (t) {
      var i = e(t),
        n = this._getElementOffset(t),
        o = this._getOption("originLeft") ? n.left : n.right,
        s = o + i.outerWidth,
        r = Math.floor(o / this.columnWidth);
      r = Math.max(0, r);
      var a = Math.floor(s / this.columnWidth);
      a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
      for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, n._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function () {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
      return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function () {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth
    }, i
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
  }(window, (function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
      };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function () {
      this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = n._getOption;
    return n._getOption = function (t) {
      return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  }(window, (function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return i._resetLayout = function () {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
      var n = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function () {
      return {
        height: this.maxY
      }
    }, e
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
  }(window, (function (t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
      }),
      i = e.prototype;
    return i._resetLayout = function () {
      this.y = 0
    }, i._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
      return this.y += t.size.outerHeight, {
        x: e,
        y: i
      }
    }, i._getContainerSize = function () {
      return {
        height: this.y
      }
    }, e
  })),
  function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function (i, n, o, s, r, a) {
      return e(t, i, n, o, s, r, a)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
  }(window, (function (t, e, i, n, o, s, r) {
    var a = t.jQuery,
      l = String.prototype.trim ? function (t) {
        return t.trim()
      } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
      },
      c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
    c.Item = s, c.LayoutMode = r;
    var d = c.prototype;
    d._create = function () {
      for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
    }, d.reloadItems = function () {
      this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, d._itemize = function () {
      for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
      return this._updateItemsSortData(t), t
    }, d._initLayoutMode = function (t) {
      var e = r.modes[t],
        i = this.options[t] || {};
      this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, d.layout = function () {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function () {
      var t = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, d.arrange = function (t) {
      this.option(t), this._getIsInstant();
      var e = this._filter(this.items);
      this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, d._init = d.arrange, d._hideReveal = function (t) {
      this.reveal(t.needReveal), this.hide(t.needHide)
    }, d._getIsInstant = function () {
      var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;
      return this._isInstant = e
    }, d._bindArrangeComplete = function () {
      function t() {
        e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
      }
      var e, i, n, o = this;
      this.once("layoutComplete", (function () {
        e = !0, t()
      })), this.once("hideComplete", (function () {
        i = !0, t()
      })), this.once("revealComplete", (function () {
        n = !0, t()
      }))
    }, d._filter = function (t) {
      var e = this.options.filter;
      e = e || "*";
      for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
        var a = t[r];
        if (!a.isIgnored) {
          var l = s(a);
          l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
        }
      }
      return {
        matches: i,
        needReveal: n,
        needHide: o
      }
    }, d._getFilterTest = function (t) {
      return a && this.options.isJQueryFiltering ? function (e) {
        return a(e.element).is(t)
      } : "function" == typeof t ? function (e) {
        return t(e.element)
      } : function (e) {
        return n(e.element, t)
      }
    }, d.updateSortData = function (t) {
      var e;
      e = t ? (t = o.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e)
    }, d._getSorters = function () {
      var t = this.options.getSortData;
      for (var e in t) {
        var i = t[e];
        this._sorters[e] = u(i)
      }
    }, d._updateItemsSortData = function (t) {
      for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
    };
    var u = function (t) {
      if ("string" != typeof t) return t;
      var e, i, n = l(t).split(" "),
        o = n[0],
        s = o.match(/^\[(.+)\]$/),
        r = s && s[1],
        a = (i = o, (e = r) ? function (t) {
          return t.getAttribute(e)
        } : function (t) {
          var e = t.querySelector(i);
          return e && e.textContent
        }),
        d = c.sortDataParsers[n[1]];
      return d ? function (t) {
        return t && d(a(t))
      } : function (t) {
        return t && a(t)
      }
    };
    c.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10)
      },
      parseFloat: function (t) {
        return parseFloat(t)
      }
    }, d._sort = function () {
      if (this.options.sortBy) {
        var t = o.makeArray(this.options.sortBy);
        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
        var e = (i = this.sortHistory, n = this.options.sortAscending, function (t, e) {
          for (var o = 0; o < i.length; o++) {
            var s = i[o],
              r = t.sortData[s],
              a = e.sortData[s];
            if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== n[s] ? n[s] : n) ? 1 : -1)
          }
          return 0
        });
        this.filteredItems.sort(e)
      }
      var i, n
    }, d._getIsSameSortBy = function (t) {
      for (var e = 0; e < t.length; e++)
        if (t[e] != this.sortHistory[e]) return !1;
      return !0
    }, d._mode = function () {
      var t = this.options.layoutMode,
        e = this.modes[t];
      if (!e) throw new Error("No layout mode: " + t);
      return e.options = this.options[t], e
    }, d._resetLayout = function () {
      e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function (t) {
      return this._mode()._getItemLayoutPosition(t)
    }, d._manageStamp = function (t) {
      this._mode()._manageStamp(t)
    }, d._getContainerSize = function () {
      return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function () {
      return this._mode().needsResizeLayout()
    }, d.appended = function (t) {
      var e = this.addItems(t);
      if (e.length) {
        var i = this._filterRevealAdded(e);
        this.filteredItems = this.filteredItems.concat(i)
      }
    }, d.prepended = function (t) {
      var e = this._itemize(t);
      if (e.length) {
        this._resetLayout(), this._manageStamps();
        var i = this._filterRevealAdded(e);
        this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
      }
    }, d._filterRevealAdded = function (t) {
      var e = this._filter(t);
      return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, d.insert = function (t) {
      var e = this.addItems(t);
      if (e.length) {
        var i, n, o = e.length;
        for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
        var s = this._filter(e).matches;
        for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
        for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
        this.reveal(s)
      }
    };
    var h = d.remove;
    return d.remove = function (t) {
      t = o.makeArray(t);
      var e = this.getItems(t);
      h.call(this, t);
      for (var i = e && e.length, n = 0; i && n < i; n++) {
        var s = e[n];
        o.removeFrom(this.filteredItems, s)
      }
    }, d.shuffle = function () {
      for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
    }, d._noTransition = function (t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var n = t.apply(this, e);
      return this.options.transitionDuration = i, n
    }, d.getFilteredItemElements = function () {
      return this.filteredItems.map((function (t) {
        return t.element
      }))
    }, c
  })),
  function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
  }((function (t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e, i = 0,
      n = Array.prototype.slice;
    t.cleanData = (e = t.cleanData, function (i) {
      for (var n, o, s = 0; null != (o = i[s]); s++) try {
        (n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
      } catch (i) {}
      e(i)
    }), t.widget = function (e, i, n) {
      var o, s, r, a = {},
        l = e.split(".")[0],
        c = l + "-" + (e = e.split(".")[1]);
      return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function (e) {
        return !!t.data(e, c)
      }, t[l] = t[l] || {}, o = t[l][e], s = t[l][e] = function (t, e) {
        if (!this._createWidget) return new s(t, e);
        arguments.length && this._createWidget(t, e)
      }, t.extend(s, o, {
        version: n.version,
        _proto: t.extend({}, n),
        _childConstructors: []
      }), (r = new i).options = t.widget.extend({}, r.options), t.each(n, (function (e, n) {
        function o() {
          return i.prototype[e].apply(this, arguments)
        }
  
        function s(t) {
          return i.prototype[e].apply(this, t)
        }
        t.isFunction(n) ? a[e] = function () {
          var t, e = this._super,
            i = this._superApply;
          return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
        } : a[e] = n
      })), s.prototype = t.widget.extend(r, {
        widgetEventPrefix: o && r.widgetEventPrefix || e
      }, a, {
        constructor: s,
        namespace: l,
        widgetName: e,
        widgetFullName: c
      }), o ? (t.each(o._childConstructors, (function (e, i) {
        var n = i.prototype;
        t.widget(n.namespace + "." + n.widgetName, s, i._proto)
      })), delete o._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
    }, t.widget.extend = function (e) {
      for (var i, o, s = n.call(arguments, 1), r = 0, a = s.length; r < a; r++)
        for (i in s[r]) o = s[r][i], s[r].hasOwnProperty(i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
      return e
    }, t.widget.bridge = function (e, i) {
      var o = i.prototype.widgetFullName || e;
      t.fn[e] = function (s) {
        var r = "string" == typeof s,
          a = n.call(arguments, 1),
          l = this;
        return r ? this.length || "instance" !== s ? this.each((function () {
          var i, n = t.data(this, o);
          return "instance" === s ? (l = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
        })) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each((function () {
          var e = t.data(this, o);
          e ? (e.option(s || {}), e._init && e._init()) : t.data(this, o, new i(s, this))
        }))), l
      }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        classes: {},
        disabled: !1,
        create: null
      },
      _createWidget: function (e, n) {
        n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function (t) {
            t.target === n && this.destroy()
          }
        }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: function () {
        return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(), t.each(this.classesElementLookup, (function (t, i) {
          e._removeClass(i, t)
        })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function () {
        return this.element
      },
      option: function (e, i) {
        var n, o, s, r = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (r = {}, e = (n = e.split(".")).shift(), n.length) {
            for (o = r[e] = t.widget.extend({}, this.options[e]), s = 0; s < n.length - 1; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
            if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
            o[e] = i
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            r[e] = i
          } return this._setOptions(r), this
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this
      },
      _setOption: function (t, e) {
        return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
      },
      _setOptionClasses: function (e) {
        var i, n, o;
        for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (n = t(o.get()), this._removeClass(o, i), n.addClass(this._classes({
          element: n,
          keys: i,
          classes: e,
          add: !0
        })))
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function () {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function () {
        return this._setOptions({
          disabled: !0
        })
      },
      _classes: function (e) {
        var i = [],
          n = this;
  
        function o(o, s) {
          for (var r, a = 0; a < o.length; a++) r = n.classesElementLookup[o[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), n.classesElementLookup[o[a]] = r, i.push(o[a]), s && e.classes[o[a]] && i.push(e.classes[o[a]])
        }
        return e = t.extend({
          element: this.element,
          classes: this.options.classes || {}
        }, e), this._on(e.element, {
          remove: "_untrackClassesElement"
        }), e.keys && o(e.keys.match(/\S+/g) || [], !0), e.extra && o(e.extra.match(/\S+/g) || []), i.join(" ")
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, (function (n, o) {
          -1 !== t.inArray(e.target, o) && (i.classesElementLookup[n] = t(o.not(e.target).get()))
        }))
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function (t, e, i, n) {
        n = "boolean" == typeof n ? n : i;
        var o = "string" == typeof t || null === t;
        return (t = {
          extra: o ? e : i,
          keys: o ? t : e,
          element: o ? this.element : t,
          add: n
        }).element.toggleClass(this._classes(t), n), this
      },
      _on: function (e, i, n) {
        var o, s = this;
        "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, (function (n, r) {
          function a() {
            if (e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? s[r] : r).apply(s, arguments)
          }
          var l;
          "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++), n = (l = n.match(/^([\w:-]*)\s*(.*)$/))[1] + s.eventNamespace, (l = l[2]) ? o.on(n, l, a) : i.on(n, a)
        }))
      },
      _off: function (e, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout((function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments)
        }), e || 0)
      },
      _hoverable: function (e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function (e) {
            this._addClass(t(e.currentTarget), null, "ui-state-hover")
          },
          mouseleave: function (e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
          }
        })
      },
      _focusable: function (e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function (e) {
            this._addClass(t(e.currentTarget), null, "ui-state-focus")
          },
          focusout: function (e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
          }
        })
      },
      _trigger: function (e, i, n) {
        var o, s, r = this.options[e];
        if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
          for (o in s) o in i || (i[o] = s[o]);
        return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
      }
    }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, (function (e, i) {
      t.Widget.prototype["_" + e] = function (n, o, s) {
        var r;
        "string" == typeof o && (o = {
          effect: o
        });
        var a = o ? !0 !== o && "number" != typeof o && o.effect || i : e;
        "number" == typeof (o = o || {}) && (o = {
          duration: o
        }), r = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, s) : n.queue((function (i) {
          t(this)[e](), s && s.call(n[0]), i()
        }))
      }
    })), t.widget, t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var o = !1;
    t(document).on("mouseup", (function () {
      o = !1
    })), t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0
      },
      _mouseInit: function () {
        var e = this;
        this.element.on("mousedown." + this.widgetName, (function (t) {
          return e._mouseDown(t)
        })).on("click." + this.widgetName, (function (i) {
          if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
        })), this.started = !1
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function (e) {
        if (!o) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
          var i = this,
            n = 1 === e.which,
            s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
          return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function () {
            i.mouseDelayMet = !0
          }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
            return i._mouseMove(t)
          }, this._mouseUpDelegate = function (t) {
            return i._mouseUp(t)
          }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0))
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
          if (!e.which)
            if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e)
        }
        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
      },
      _mouseUp: function (e) {
        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault()
      },
      _mouseDistanceMet: function (t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0
      }
    }), t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header"
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
      },
      _createHandles: function () {
        var e, i = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = [],
          s = i.values && i.values.length || 1;
        for (n.length > s && (n.slice(s).remove(), n = n.slice(0, s)), e = n.length; e < s; e++) o.push("<span tabindex='0'></span>");
        this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function (e) {
          t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
        }))
      },
      _createRange: function () {
        var e = this.options;
        e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
          left: "",
          bottom: ""
        })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function () {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
      },
      _mouseCapture: function (e) {
        var i, n, o, s, r, a, l = this,
          c = this.options;
        return !c.disabled && (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), a = {
          x: e.pageX,
          y: e.pageY
        }, i = this._normValueFromMouse(a), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function (e) {
          var r = Math.abs(i - l.values(e));
          (r < n || n === r && (e === l._lastChangedValue || l.values(e) === c.min)) && (n = r, o = t(this), s = e)
        })), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), a = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
          left: 0,
          top: 0
        } : {
          left: e.pageX - r.left - o.width() / 2,
          top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, i), this._animateOff = !0))
      },
      _mouseStart: function () {
        return !0
      },
      _mouseDrag: function (t) {
        var e = {
          x: t.pageX,
          y: t.pageY
        };
        return e = this._normValueFromMouse(e), this._slide(t, this._handleIndex, e), !1
      },
      _mouseStop: function (t) {
        return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
      },
      _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function (t) {
        var e;
        return 1 < (t = (t = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (t = 1), t < 0 && (t = 0), "vertical" === this.orientation && (t = 1 - t), e = this._valueMax() - this._valueMin(), e = this._valueMin() + t * e, this._trimAlignValue(e)
      },
      _uiHash: function (t, e, i) {
        var n = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value()
        };
        return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e))
      },
      _slide: function (t, e, i) {
        var n, o = this.value(),
          s = this.values();
        this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), s[e] = i), i !== o && !1 !== this._trigger("slide", t, this._uiHash(e, i, s)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e))
      },
      _change: function (t, e) {
        this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
      },
      value: function (t) {
        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
      },
      values: function (e, i) {
        var n, o, s;
        if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
        if (!arguments.length) return this._values();
        if (!t.isArray(e)) return this._hasMultipleValues() ? this._values(e) : this.value();
        for (n = this.options.values, o = e, s = 0; s < n.length; s += 1) n[s] = this._trimAlignValue(o[s]), this._change(null, s);
        this._refreshValue()
      },
      _setOption: function (e, i) {
        var n, o = 0;
        switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), this._super(e, i), e) {
          case "orientation":
            this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
          case "values":
            for (this._animateOff = !0, this._refreshValue(), n = o - 1; 0 <= n; n--) this._change(null, n);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
            break;
          case "range":
            this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
      },
      _value: function () {
        var t = this.options.value;
        return this._trimAlignValue(t)
      },
      _values: function (t) {
        var e, i, n;
        if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
          return i
        }
        return []
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e;
        return t -= i, 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e), parseFloat(t.toFixed(5))
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
      },
      _precisionOf: function (t) {
        var e = t.toString();
        return -1 === (t = e.indexOf(".")) ? 0 : e.length - t - 1
      },
      _valueMin: function () {
        return this.options.min
      },
      _valueMax: function () {
        return this.max
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({
          width: "",
          left: ""
        }), "horizontal" === t && this.range.css({
          height: "",
          bottom: ""
        })
      },
      _refreshValue: function () {
        var e, i, n, o, s, r = this.options.range,
          a = this.options,
          l = this,
          c = !this._animateOff && a.animate,
          d = {};
        this._hasMultipleValues() ? this.handles.each((function (n) {
          i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](d, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
            left: i + "%"
          }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
            width: i - e + "%"
          }, {
            queue: !1,
            duration: a.animate
          })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
            bottom: i + "%"
          }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
            height: i - e + "%"
          }, {
            queue: !1,
            duration: a.animate
          }))), e = i
        })) : (n = this.value(), o = this._valueMin(), s = this._valueMax(), i = s !== o ? (n - o) / (s - o) * 100 : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          width: i + "%"
        }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          width: 100 - i + "%"
        }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          height: i + "%"
        }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
          height: 100 - i + "%"
        }, a.animate))
      },
      _handleEvents: {
        keydown: function (e) {
          var i, n, o, s = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, s))) return
          }
          switch (o = this.options.step, i = n = this._hasMultipleValues() ? this.values(s) : this.value(), e.keyCode) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (i === this._valueMax()) return;
              n = this._trimAlignValue(i + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (i === this._valueMin()) return;
              n = this._trimAlignValue(i - o)
          }
          this._slide(e, s, n)
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
        }
      }
    })
  })),
  function () {
    "use strict";
  
    function t(n) {
      if (!n) throw new Error("No options passed to Waypoint constructor");
      if (!n.element) throw new Error("No element option passed to Waypoint constructor");
      if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
      i = {};
    t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
      return this.enabled = !1, this
    }, t.prototype.enable = function () {
      return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
      return this.group.next(this)
    }, t.prototype.previous = function () {
      return this.group.previous(this)
    }, t.invokeAll = function (t) {
      var e = [];
      for (var n in i) e.push(i[n]);
      for (var o = 0, s = e.length; s > o; o++) e[o][t]()
    }, t.destroyAll = function () {
      t.invokeAll("destroy")
    }, t.disableAll = function () {
      t.invokeAll("disable")
    }, t.enableAll = function () {
      t.invokeAll("enable")
    }, t.refreshAll = function () {
      t.Context.refreshAll()
    }, t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
      return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    }, t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth()
      }
    }, window.Waypoint = t
  }(),
  function () {
    "use strict";
  
    function t(t) {
      window.setTimeout(t, 1e3 / 60)
    }
  
    function e(t) {
      this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }, this.waypoints = {
        vertical: {},
        horizontal: {}
      }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
      n = {},
      o = window.Waypoint,
      s = window.onload;
    e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
      var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical);
      t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
      function t() {
        e.handleResize(), e.didResize = !1
      }
      var e = this;
      this.adapter.on("resize.waypoints", (function () {
        e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
      }))
    }, e.prototype.createThrottledScrollHandler = function () {
      function t() {
        e.handleScroll(), e.didScroll = !1
      }
      var e = this;
      this.adapter.on("scroll.waypoints", (function () {
        (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
      }))
    }, e.prototype.handleResize = function () {
      o.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
      var t = {},
        e = {
          horizontal: {
            newScroll: this.adapter.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.adapter.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
      for (var i in e) {
        var n = e[i],
          o = n.newScroll > n.oldScroll ? n.forward : n.backward;
        for (var s in this.waypoints[i]) {
          var r = this.waypoints[i][s],
            a = n.oldScroll < r.triggerPoint,
            l = n.newScroll >= r.triggerPoint;
          (a && l || !a && !l) && (r.queueTrigger(o), t[r.group.id] = r.group)
        }
      }
      for (var c in t) t[c].flushTriggers();
      this.oldScroll = {
        x: e.horizontal.newScroll,
        y: e.vertical.newScroll
      }
    }, e.prototype.innerHeight = function () {
      return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
      delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
      return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
      var t = [];
      for (var e in this.waypoints)
        for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
      for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
    }, e.prototype.refresh = function () {
      var t, e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        n = {};
      for (var s in this.handleScroll(), t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        }) {
        var r = t[s];
        for (var a in this.waypoints[s]) {
          var l, c, d, u, h = this.waypoints[s][a],
            p = h.options.offset,
            f = h.triggerPoint,
            m = 0,
            g = null == f;
          h.element !== h.element.window && (m = h.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p), h.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))), l = r.contextScroll - r.contextOffset, h.triggerPoint = m + l - p, c = f < r.oldScroll, d = h.triggerPoint >= r.oldScroll, u = !c && !d, !g && (c && d) ? (h.queueTrigger(r.backward), n[h.group.id] = h.group) : (!g && u || g && r.oldScroll >= h.triggerPoint) && (h.queueTrigger(r.forward), n[h.group.id] = h.group)
        }
      }
      return o.requestAnimationFrame((function () {
        for (var t in n) n[t].flushTriggers()
      })), this
    }, e.findOrCreateByElement = function (t) {
      return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
      for (var t in n) n[t].refresh()
    }, e.findByElement = function (t) {
      return n[t.waypointContextKey]
    }, window.onload = function () {
      s && s(), e.refreshAll()
    }, o.requestAnimationFrame = function (e) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = e
  }(),
  function () {
    "use strict";
  
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint
    }
  
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint
    }
  
    function i(t) {
      this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
      },
      o = window.Waypoint;
    i.prototype.add = function (t) {
      this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      }
    }, i.prototype.flushTriggers = function () {
      for (var i in this.triggerQueues) {
        var n = this.triggerQueues[i],
          o = "up" === i || "left" === i;
        n.sort(o ? e : t);
        for (var s = 0, r = n.length; r > s; s += 1) {
          var a = n[s];
          (a.options.continuous || s === n.length - 1) && a.trigger([i])
        }
      }
      this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
      this.waypoints.sort(t);
      var i = o.Adapter.inArray(e, this.waypoints);
      return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
      this.waypoints.sort(t);
      var i = o.Adapter.inArray(e, this.waypoints);
      return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
      this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
      var e = o.Adapter.inArray(t, this.waypoints);
      e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
      return this.waypoints[0]
    }, i.prototype.last = function () {
      return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
      return n[t.axis][t.name] || new i(t)
    }, o.Group = i
  }(),
  function () {
    "use strict";
  
    function t(t) {
      this.$element = e(t)
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function (e, i) {
      t.prototype[i] = function () {
        var t = Array.prototype.slice.call(arguments);
        return this.$element[i].apply(this.$element, t)
      }
    })), e.each(["extend", "inArray", "isEmptyObject"], (function (i, n) {
      t[n] = e[n]
    })), i.adapters.push({
      name: "jquery",
      Adapter: t
    }), i.Adapter = t
  }(),
  function () {
    "use strict";
  
    function t(t) {
      return function () {
        var i = [],
          n = arguments[0];
        return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each((function () {
          var o = t.extend({}, n, {
            element: this
          });
          "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
        })), i
      }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
  }(),
  /*!
   * jquery.counterup.js 1.0
   *
   * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
   * Released under the GPL v2 License
   *
   * Date: Nov 26, 2013
   */
  function (t) {
    "use strict";
    t.fn.counterUp = function (e) {
      var i, n = t.extend({
        time: 400,
        delay: 10,
        offset: 100,
        beginAt: 0,
        formatter: !1,
        context: "window",
        callback: function () {}
      }, e);
      return this.each((function () {
        var e = t(this),
          o = {
            time: t(this).data("counterup-time") || n.time,
            delay: t(this).data("counterup-delay") || n.delay,
            offset: t(this).data("counterup-offset") || n.offset,
            beginAt: t(this).data("counterup-beginat") || n.beginAt,
            context: t(this).data("counterup-context") || n.context
          };
        e.waypoint((function (s) {
          ! function () {
            var s = [],
              r = o.time / o.delay,
              a = t(this).attr("data-num") ? t(this).attr("data-num") : e.text(),
              l = /[0-9]+,[0-9]+/.test(a),
              c = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
            o.beginAt > a && (o.beginAt = a);
            var d = /[0-9]+:[0-9]+:[0-9]+/.test(a);
            if (d) {
              var u = a.split(":"),
                h = 1;
              for (i = 0; u.length > 0;) i += h * parseInt(u.pop(), 10), h *= 60
            }
            for (var p = r; p >= o.beginAt / a * r; p--) {
              var f = parseFloat(a / r * p).toFixed(c);
              if (d) {
                f = parseInt(i / r * p);
                var m = parseInt(f / 3600) % 24,
                  g = parseInt(f / 60) % 60,
                  v = parseInt(f % 60, 10);
                f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (v < 10 ? "0" + v : v)
              }
              if (l)
                for (;
                  /(\d+)(\d{3})/.test(f.toString());) f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
              n.formatter && (f = n.formatter.call(this, f)), s.unshift(f)
            }
            e.data("counterup-nums", s), e.text(o.beginAt);
            e.data("counterup-func", (function () {
              e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), o.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), n.callback.call(this))) : n.callback.call(this)
            })), setTimeout(e.data("counterup-func"), o.delay)
          }(), this.destroy()
        }), {
          offset: o.offset + "%",
          context: o.context
        })
      }))
    }
  }(jQuery),
  function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
  }((function (t) {
    var e, i, n, o, s, r, a = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      d = "Open",
      u = "Change",
      h = "mfp",
      p = ".mfp",
      f = "mfp-ready",
      m = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      b = t(window),
      _ = function (t, i) {
        e.ev.on(h + t + p, i)
      },
      w = function (e, i, n, o) {
        var s = document.createElement("div");
        return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
      },
      k = function (i, n) {
        e.ev.triggerHandler(h + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
      },
      x = function (i) {
        return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
      },
      T = function () {
        t.magnificPopup.instance || ((e = new v).init(), t.magnificPopup.instance = e)
      };
    v.prototype = {
      constructor: v,
      init: function () {
        var i = navigator.appVersion;
        e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function () {
          var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== t.transition) return !0;
          for (; e.length;)
            if (e.pop() + "Transition" in t) return !0;
          return !1
        }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
      },
      open: function (i) {
        var o;
        if (!1 === i.isObj) {
          e.items = i.items.toArray(), e.index = 0;
          var r, a = i.items;
          for (o = 0; o < a.length; o++)
            if ((r = a[o]).parsed && (r = r.el[0]), r === i.el[0]) {
              e.index = o;
              break
            }
        } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
        if (!e.isOpen) {
          e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + p, (function () {
            e.close()
          })), e.wrap = w("wrap").attr("tabindex", -1).on("click" + p, (function (t) {
            e._checkIfClose(t.target) && e.close()
          })), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (o = 0; o < l.length; o++) {
            var u = l[o];
            u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
          }
          k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(c, (function (t, e, i, n) {
            i.close_replaceWith = x(n.type)
          })), s += " mfp-close-btn-in") : e.wrap.append(x())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
            overflow: e.st.overflowY,
            overflowX: "hidden",
            overflowY: e.st.overflowY
          }) : e.wrap.css({
            top: b.scrollTop(),
            position: "absolute"
          }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
            height: n.height(),
            position: "absolute"
          }), e.st.enableEscapeKey && n.on("keyup" + p, (function (t) {
            27 === t.keyCode && e.close()
          })), b.on("resize" + p, (function () {
            e.updateSize()
          })), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
          var h = e.wH = b.height(),
            m = {};
          if (e.fixedContentPos && e._hasScrollBar(h)) {
            var g = e._getScrollbarSize();
            g && (m.marginRight = g)
          }
          e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
          var v = e.st.mainClass;
          return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), k("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout((function () {
            e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + p, e._onFocusIn)
          }), 16), e.isOpen = !0, e.updateSize(h), k(d), i
        }
        e.updateItemHTML()
      },
      close: function () {
        e.isOpen && (k(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout((function () {
          e._close()
        }), e.st.removalDelay)) : e._close())
      },
      _close: function () {
        k(a);
        var i = m + " " + f + " ";
        if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
          var o = {
            marginRight: ""
          };
          e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
        }
        n.off("keyup.mfp focusin" + p), e.ev.off(p), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k("AfterClose")
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          e.wrap.css("height", n), e.wH = n
        } else e.wH = t || b.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize")
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
        var n = i.type;
        if (k("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
          var s = !!e.st[n] && e.st[n].markup;
          k("FirstMarkupParse", s), e.currTemplate[n] = !s || t(s)
        }
        o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
        var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
        e.appendContent(r, n), i.preloaded = !0, k(u, i), o = i.type, e.container.prepend(e.contentContainer), k("AfterChange")
      },
      appendContent: function (t, i) {
        e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(x()) : e.content = t : e.content = "", k("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
      },
      parseEl: function (i) {
        var n, o = e.items[i];
        if (o.tagName ? o = {
            el: t(o)
          } : (n = o.type, o = {
            data: o,
            src: o.src
          }), o.el) {
          for (var s = e.types, r = 0; r < s.length; r++)
            if (o.el.hasClass("mfp-" + s[r])) {
              n = s[r];
              break
            } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
        }
        return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, k("ElementParse", o), e.items[i]
      },
      addGroup: function (t, i) {
        var n = function (n) {
          n.mfpEl = this, e._openClick(n, t, i)
        };
        i || (i = {});
        var o = "click.magnificPopup";
        i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
      },
      _openClick: function (i, n, o) {
        if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
          var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
          if (s)
            if (t.isFunction(s)) {
              if (!s.call(e)) return !0
            } else if (b.width() < s) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
        }
      },
      updateStatus: function (t, n) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
          var o = {
            status: t,
            text: n
          };
          k("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", (function (t) {
            t.stopImmediatePropagation()
          })), e.container.addClass("mfp-s-" + t), i = t
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(g)) {
          var n = e.st.closeOnContentClick,
            o = e.st.closeOnBgClick;
          if (n && o) return !0;
          if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (n) return !0
          } else if (o && t.contains(document, i)) return !0;
          return !1
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t)
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
      },
      _hasScrollBar: function (t) {
        return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || b.height())
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
      },
      _onFocusIn: function (i) {
        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
      },
      _parseMarkup: function (e, i, n) {
        var o;
        n.data && (i = t.extend(n.data, i)), k(c, [e, i, n]), t.each(i, (function (i, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((o = i.split("_")).length > 1) {
            var s = e.find(p + "-" + o[0]);
            if (s.length > 0) {
              var r = o[1];
              "replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n)
            }
          } else e.find(p + "-" + i).html(n)
        }))
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
        }
        return e.scrollbarSize
      }
    }, t.magnificPopup = {
      instance: null,
      proto: v.prototype,
      modules: [],
      open: function (e, i) {
        return T(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
      },
      close: function () {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
      },
      registerModule: function (e, i) {
        i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0
      }
    }, t.fn.magnificPopup = function (i) {
      T();
      var n = t(this);
      if ("string" == typeof i)
        if ("open" === i) {
          var o, s = y ? n.data("magnificPopup") : n[0].magnificPopup,
            r = parseInt(arguments[1], 10) || 0;
          s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({
            mfpEl: o
          }, n, s)
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
      else i = t.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
      return n
    };
    var S, E, C, A = "inline",
      I = function () {
        C && (E.after(C.addClass(S)).detach(), C = null)
      };
    t.magnificPopup.registerModule(A, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function () {
          e.types.push(A), _(a + "." + A, (function () {
            I()
          }))
        },
        getInline: function (i, n) {
          if (I(), i.src) {
            var o = e.st.inline,
              s = t(i.src);
            if (s.length) {
              var r = s[0].parentNode;
              r && r.tagName && (E || (S = o.hiddenClass, E = w(S), S = "mfp-" + S), C = s.after(E).detach().removeClass(S)), e.updateStatus("ready")
            } else e.updateStatus("error", o.tNotFound), s = t("<div>");
            return i.inlineElement = s, s
          }
          return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
        }
      }
    });
    var O, L = "ajax",
      z = function () {
        O && t(document.body).removeClass(O)
      },
      M = function () {
        z(), e.req && e.req.abort()
      };
    t.magnificPopup.registerModule(L, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function () {
          e.types.push(L), O = e.st.ajax.cursor, _(a + "." + L, M), _("BeforeChange." + L, M)
        },
        getAjax: function (i) {
          O && t(document.body).addClass(O), e.updateStatus("loading");
          var n = t.extend({
            url: i.src,
            success: function (n, o, s) {
              var r = {
                data: n,
                xhr: s
              };
              k("ParseAjax", r), e.appendContent(t(r.data), L), i.finished = !0, z(), e._setFocus(), setTimeout((function () {
                e.wrap.addClass(f)
              }), 16), e.updateStatus("ready"), k("AjaxContentAdded")
            },
            error: function () {
              z(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
            }
          }, e.st.ajax.settings);
          return e.req = t.ajax(n), ""
        }
      }
    });
    var P, D = function (i) {
      if (i.data && void 0 !== i.data.title) return i.data.title;
      var n = e.st.image.titleSrc;
      if (n) {
        if (t.isFunction(n)) return n.call(e, i);
        if (i.el) return i.el.attr(n) || ""
      }
      return ""
    };
    t.magnificPopup.registerModule("image", {
      options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            n = ".image";
          e.types.push("image"), _(d + n, (function () {
            "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
          })), _(a + n, (function () {
            i.cursor && t(document.body).removeClass(i.cursor), b.off("resize" + p)
          })), _("Resize" + n, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
          }
        },
        _onImageHasSize: function (t) {
          t.img && (t.hasSize = !0, P && clearInterval(P), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
        },
        findImageSize: function (t) {
          var i = 0,
            n = t.img[0],
            o = function (s) {
              P && clearInterval(P), P = setInterval((function () {
                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(P), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
              }), s)
            };
          o(1)
        },
        getImage: function (i, n) {
          var o = 0,
            s = function () {
              i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : 200 > ++o ? setTimeout(s, 100) : r())
            },
            r = function () {
              i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
            },
            a = e.st.image,
            l = n.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
          }
          return e._parseMarkup(n, {
            title: D(i),
            img_replaceWith: i.img
          }, i), e.resizeImage(), i.hasSize ? (P && clearInterval(P), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
        }
      }
    });
    var j;
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img")
        }
      },
      proto: {
        initZoom: function () {
          var t, i = e.st.zoom,
            n = ".zoom";
          if (i.enabled && e.supportsTransition) {
            var o, s, r = i.duration,
              c = function (t) {
                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                  n = "all " + i.duration / 1e3 + "s " + i.easing,
                  o = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden"
                  },
                  s = "transition";
                return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
              },
              d = function () {
                e.content.css("visibility", "visible")
              };
            _("BuildControls" + n, (function () {
              if (e._allowZoom()) {
                if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void d();
                (s = c(t)).css(e._getOffset()), e.wrap.append(s), o = setTimeout((function () {
                  s.css(e._getOffset(!0)), o = setTimeout((function () {
                    d(), setTimeout((function () {
                      s.remove(), t = s = null, k("ZoomAnimationEnded")
                    }), 16)
                  }), r)
                }), 16)
              }
            })), _(l + n, (function () {
              if (e._allowZoom()) {
                if (clearTimeout(o), e.st.removalDelay = r, !t) {
                  if (!(t = e._getItemToZoom())) return;
                  s = c(t)
                }
                s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout((function () {
                  s.css(e._getOffset())
                }), 16)
              }
            })), _(a + n, (function () {
              e._allowZoom() && (d(), s && s.remove(), t = null)
            }))
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img
        },
        _getOffset: function (i) {
          var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            s = parseInt(n.css("padding-top"), 10),
            r = parseInt(n.css("padding-bottom"), 10);
          o.top -= t(window).scrollTop() - s;
          var a = {
            width: n.width(),
            height: (y ? n.innerHeight() : n[0].offsetHeight) - r - s
          };
          return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
        }
      }
    });
    var $ = "iframe",
      H = function (t) {
        if (e.currTemplate[$]) {
          var i = e.currTemplate[$].find("iframe");
          i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
        }
      };
    t.magnificPopup.registerModule($, {
      options: {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1"
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1"
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed"
          }
        }
      },
      proto: {
        initIframe: function () {
          e.types.push($), _("BeforeChange", (function (t, e, i) {
            e !== i && (e === $ ? H() : i === $ && H(!0))
          })), _(a + "." + $, (function () {
            H()
          }))
        },
        getIframe: function (i, n) {
          var o = i.src,
            s = e.st.iframe;
          t.each(s.patterns, (function () {
            return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
          }));
          var r = {};
          return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
        }
      }
    });
    var W = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t
      },
      N = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%"
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            o = ".mfp-gallery";
          return e.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", _(d + o, (function () {
            i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function () {
              return e.items.length > 1 ? (e.next(), !1) : void 0
            })), n.on("keydown" + o, (function (t) {
              37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
            }))
          })), _("UpdateStatus" + o, (function (t, i) {
            i.text && (i.text = N(i.text, e.currItem.index, e.items.length))
          })), _(c + o, (function (t, n, o, s) {
            var r = e.items.length;
            o.counter = r > 1 ? N(i.tCounter, s.index, r) : ""
          })), _("BuildControls" + o, (function () {
            if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
              var n = i.arrowMarkup,
                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
              o.click((function () {
                e.prev()
              })), s.click((function () {
                e.next()
              })), e.container.append(o.add(s))
            }
          })), _(u + o, (function () {
            e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout((function () {
              e.preloadNearbyImages(), e._preloadTimeout = null
            }), 16)
          })), void _(a + o, (function () {
            n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
          })))
        },
        next: function () {
          e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
        },
        prev: function () {
          e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
        },
        goTo: function (t) {
          e.direction = t >= e.index, e.index = t, e.updateItemHTML()
        },
        preloadNearbyImages: function () {
          var t, i = e.st.gallery.preload,
            n = Math.min(i[0], e.items.length),
            o = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
        },
        _preloadItem: function (i) {
          if (i = W(i), !e.items[i].preloaded) {
            var n = e.items[i];
            n.parsed || (n = e.parseEl(i)), k("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function () {
              n.hasSize = !0
            })).on("error.mfploader", (function () {
              n.hasSize = !0, n.loadError = !0, k("LazyLoadError", n)
            })).attr("src", n.src)), n.preloaded = !0
          }
        }
      }
    });
    var F = "retina";
    t.magnificPopup.registerModule(F, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, (function (t) {
            return "@2x" + t
          }))
        },
        ratio: 1
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 && (_("ImageHasSize." + F, (function (t, e) {
              e.img.css({
                "max-width": e.img[0].naturalWidth / i,
                width: "100%"
              })
            })), _("ElementParse." + F, (function (e, n) {
              n.src = t.replaceSrc(n, i)
            })))
          }
        }
      }
    }), T()
  }));
  var pJS = function (t, e) {
    var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
      canvas: {
        el: i,
        w: i.offsetWidth,
        h: i.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: !0,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ff0000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: !1,
          anim: {
            enable: !1,
            speed: 2,
            opacity_min: 0,
            sync: !1
          }
        },
        size: {
          value: 20,
          random: !1,
          anim: {
            enable: !1,
            speed: 20,
            size_min: 0,
            sync: !1
          }
        },
        line_linked: {
          enable: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 3e3,
            rotateY: 3e3
          }
        },
        array: []
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !0,
            mode: "grab"
          },
          onclick: {
            enable: !0,
            mode: "push"
          },
          resize: !0
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 80,
            duration: .4
          },
          repulse: {
            distance: 200,
            duration: .4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        },
        mouse: {}
      },
      retina_detect: !1,
      fn: {
        interact: {},
        modes: {},
        vendors: {}
      },
      tmp: {}
    };
    var n = this.pJS;
    e && Object.deepExtend(n, e), n.tmp.obj = {
      size_value: n.particles.size.value,
      size_anim_speed: n.particles.size.anim.speed,
      move_speed: n.particles.move.speed,
      line_linked_distance: n.particles.line_linked.distance,
      line_linked_width: n.particles.line_linked.width,
      mode_grab_distance: n.interactivity.modes.grab.distance,
      mode_bubble_distance: n.interactivity.modes.bubble.distance,
      mode_bubble_size: n.interactivity.modes.bubble.size,
      mode_repulse_distance: n.interactivity.modes.repulse.distance
    }, n.fn.retinaInit = function () {
      n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
    }, n.fn.canvasInit = function () {
      n.canvas.ctx = n.canvas.el.getContext("2d")
    }, n.fn.canvasSize = function () {
      n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", (function () {
        n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
      }))
    }, n.fn.canvasPaint = function () {
      n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.canvasClear = function () {
      n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.particle = function (t, e, i) {
      if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value)
        if (t.value instanceof Array) {
          var o = t.value[Math.floor(Math.random() * n.particles.color.value.length)];
          this.color.rgb = hexToRgb(o)
        } else null != t.value.r && null != t.value.g && null != t.value.b && (this.color.rgb = {
          r: t.value.r,
          g: t.value.g,
          b: t.value.b
        }), null != t.value.h && null != t.value.s && null != t.value.l && (this.color.hsl = {
          h: t.value.h,
          s: t.value.s,
          l: t.value.l
        });
      else "random" == t.value ? this.color.rgb = {
        r: Math.floor(256 * Math.random()) + 0,
        g: Math.floor(256 * Math.random()) + 0,
        b: Math.floor(256 * Math.random()) + 0
      } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
      this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var s = {};
      switch (n.particles.move.direction) {
        case "top":
          s = {
            x: 0,
            y: -1
          };
          break;
        case "top-right":
          s = {
            x: .5,
            y: -.5
          };
          break;
        case "right":
          s = {
            x: 1,
            y: -0
          };
          break;
        case "bottom-right":
          s = {
            x: .5,
            y: .5
          };
          break;
        case "bottom":
          s = {
            x: 0,
            y: 1
          };
          break;
        case "bottom-left":
          s = {
            x: -.5,
            y: 1
          };
          break;
        case "left":
          s = {
            x: -1,
            y: 0
          };
          break;
        case "top-left":
          s = {
            x: -.5,
            y: -.5
          };
          break;
        default:
          s = {
            x: 0,
            y: 0
          }
      }
      n.particles.move.straight ? (this.vx = s.x, this.vy = s.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
      var r = n.particles.shape.type;
      if ("object" == typeof r) {
        if (r instanceof Array) {
          var a = r[Math.floor(Math.random() * r.length)];
          this.shape = a
        }
      } else this.shape = r;
      if ("image" == this.shape.substring(0, 5)) {
        var l = n.particles.shape;
        this.img = {
          src: l.image.src,
          ratio: l.image.width / l.image.height
        }, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && null != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
      }
    }, n.fn.particle.prototype.draw = function () {
      var t = this;
  
      function e() {
        n.canvas.ctx.drawImage(r, t.x - i, t.y - i, 2 * i, 2 * i / t.img.ratio)
      }
      if (null != t.radius_bubble) var i = t.radius_bubble;
      else i = t.radius;
      if (null != t.opacity_bubble) var o = t.opacity_bubble;
      else o = t.opacity;
      if (t.color.rgb) var s = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + o + ")";
      else s = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + o + ")";
      switch (n.canvas.ctx.fillStyle = s, n.canvas.ctx.beginPath(), t.shape) {
        case "circle":
          n.canvas.ctx.arc(t.x, t.y, i, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          n.canvas.ctx.rect(t.x - i, t.y - i, 2 * i, 2 * i);
          break;
        case "triangle":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - i, t.y + i / 1.66, 2 * i, 3, 2);
          break;
        case "polygon":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - i / (n.particles.shape.polygon.nb_sides / 3.5), t.y - i / .76, 2.66 * i / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
          break;
        case "star":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - 2 * i / (n.particles.shape.polygon.nb_sides / 4), t.y - i / 1.52, 2 * i * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
          break;
        case "image":
          if ("svg" == n.tmp.img_type) var r = t.img.obj;
          else r = n.tmp.img_obj;
          r && e();
          break;
        case "image2":
          if ("svg" == n.tmp.img_type) r = t.img.obj;
          else r = n.tmp.img_obj;
          (a = document.createElement("img")).src = "assets/img/theme-img/ball_2.svg", (r = a) && e();
          break;
        case "image3":
          if ("svg" == n.tmp.img_type) r = t.img.obj;
          else r = n.tmp.img_obj;
          (a = document.createElement("img")).src = "assets/img/theme-img/ball_3.svg", (r = a) && e();
          break;
        case "image4":
          if ("svg" == n.tmp.img_type) r = t.img.obj;
          else r = n.tmp.img_obj;
          var a;
          (a = document.createElement("img")).src = "assets/img/theme-img/ball_4.svg", (r = a) && e()
      }
      n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
    }, n.fn.particlesCreate = function () {
      for (var t = 0; t < n.particles.number.value; t++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
    }, n.fn.particlesUpdate = function () {
      for (var t = 0; t < n.particles.array.length; t++) {
        var e = n.particles.array[t];
        if (n.particles.move.enable) {
          var i = n.particles.move.speed / 2;
          e.x += e.vx * i, e.y += e.vy * i
        }
        if (n.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= n.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= n.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), n.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= n.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= n.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == n.particles.move.out_mode) var o = {
          x_left: e.radius,
          x_right: n.canvas.w,
          y_top: e.radius,
          y_bottom: n.canvas.h
        };
        else o = {
          x_left: -e.radius,
          x_right: n.canvas.w + e.radius,
          y_top: -e.radius,
          y_bottom: n.canvas.h + e.radius
        };
        switch (e.x - e.radius > n.canvas.w ? (e.x = o.x_left, e.y = Math.random() * n.canvas.h) : e.x + e.radius < 0 && (e.x = o.x_right, e.y = Math.random() * n.canvas.h), e.y - e.radius > n.canvas.h ? (e.y = o.y_top, e.x = Math.random() * n.canvas.w) : e.y + e.radius < 0 && (e.y = o.y_bottom, e.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
          case "bounce":
            (e.x + e.radius > n.canvas.w || e.x - e.radius < 0) && (e.vx = -e.vx), (e.y + e.radius > n.canvas.h || e.y - e.radius < 0) && (e.vy = -e.vy)
        }
        if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(e), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(e), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(e), n.particles.line_linked.enable || n.particles.move.attract.enable)
          for (var s = t + 1; s < n.particles.array.length; s++) {
            var r = n.particles.array[s];
            n.particles.line_linked.enable && n.fn.interact.linkParticles(e, r), n.particles.move.attract.enable && n.fn.interact.attractParticles(e, r), n.particles.move.bounce && n.fn.interact.bounceParticles(e, r)
          }
      }
    }, n.fn.particlesDraw = function () {
      n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
      for (var t = 0; t < n.particles.array.length; t++) {
        n.particles.array[t].draw()
      }
    }, n.fn.particlesEmpty = function () {
      n.particles.array = []
    }, n.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
    }, n.fn.interact.linkParticles = function (t, e) {
      var i = t.x - e.x,
        o = t.y - e.y,
        s = Math.sqrt(i * i + o * o);
      if (s <= n.particles.line_linked.distance) {
        var r = n.particles.line_linked.opacity - s / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
        if (r > 0) {
          var a = n.particles.line_linked.color_rgb_line;
          n.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + r + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(e.x, e.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
        }
      }
    }, n.fn.interact.attractParticles = function (t, e) {
      var i = t.x - e.x,
        o = t.y - e.y;
      if (Math.sqrt(i * i + o * o) <= n.particles.line_linked.distance) {
        var s = i / (1e3 * n.particles.move.attract.rotateX),
          r = o / (1e3 * n.particles.move.attract.rotateY);
        t.vx -= s, t.vy -= r, e.vx += s, e.vy += r
      }
    }, n.fn.interact.bounceParticles = function (t, e) {
      var i = t.x - e.x,
        n = t.y - e.y;
      Math.sqrt(i * i + n * n) <= t.radius + e.radius && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, n.fn.modes.pushParticles = function (t, e) {
      n.tmp.pushing = !0;
      for (var i = 0; i < t; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
        x: e ? e.pos_x : Math.random() * n.canvas.w,
        y: e ? e.pos_y : Math.random() * n.canvas.h
      })), i == t - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
    }, n.fn.modes.removeParticles = function (t) {
      n.particles.array.splice(0, t), n.particles.move.enable || n.fn.particlesDraw()
    }, n.fn.modes.bubbleParticle = function (t) {
      if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
        var e = t.x - n.interactivity.mouse.pos_x,
          i = t.y - n.interactivity.mouse.pos_y,
          o = 1 - (c = Math.sqrt(e * e + i * i)) / n.interactivity.modes.bubble.distance;
  
        function s() {
          t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }
        if (c <= n.interactivity.modes.bubble.distance) {
          if (o >= 0 && "mousemove" == n.interactivity.status) {
            if (n.interactivity.modes.bubble.size != n.particles.size.value)
              if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                (a = t.radius + n.interactivity.modes.bubble.size * o) >= 0 && (t.radius_bubble = a)
              } else {
                var r = t.radius - n.interactivity.modes.bubble.size,
                  a = t.radius - r * o;
                t.radius_bubble = a > 0 ? a : 0
              } var l;
            if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
              if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value)(l = n.interactivity.modes.bubble.opacity * o) > t.opacity && l <= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l);
              else(l = t.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * o) < t.opacity && l >= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l)
          }
        } else s();
        "mouseleave" == n.interactivity.status && s()
      } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
        if (n.tmp.bubble_clicking) {
          e = t.x - n.interactivity.mouse.click_pos_x, i = t.y - n.interactivity.mouse.click_pos_y;
          var c = Math.sqrt(e * e + i * i),
            d = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
          d > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), d > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
        }
  
        function u(e, i, o, s, r) {
          if (e != i)
            if (n.tmp.bubble_duration_end) null != o && (l = e + (e - (s - d * (s - e) / n.interactivity.modes.bubble.duration)), "size" == r && (t.radius_bubble = l), "opacity" == r && (t.opacity_bubble = l));
            else if (c <= n.interactivity.modes.bubble.distance) {
            if (null != o) var a = o;
            else a = s;
            if (a != e) {
              var l = s - d * (s - e) / n.interactivity.modes.bubble.duration;
              "size" == r && (t.radius_bubble = l), "opacity" == r && (t.opacity_bubble = l)
            }
          } else "size" == r && (t.radius_bubble = void 0), "opacity" == r && (t.opacity_bubble = void 0)
        }
        n.tmp.bubble_clicking && (u(n.interactivity.modes.bubble.size, n.particles.size.value, t.radius_bubble, t.radius, "size"), u(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
      }
    }, n.fn.modes.repulseParticle = function (t) {
      if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
        var e = t.x - n.interactivity.mouse.pos_x,
          i = t.y - n.interactivity.mouse.pos_y,
          o = Math.sqrt(e * e + i * i),
          s = {
            x: e / o,
            y: i / o
          },
          r = clamp(1 / (l = n.interactivity.modes.repulse.distance) * (-1 * Math.pow(o / l, 2) + 1) * l * 100, 0, 50),
          a = {
            x: t.x + s.x * r,
            y: t.y + s.y * r
          };
        "bounce" == n.particles.move.out_mode ? (a.x - t.radius > 0 && a.x + t.radius < n.canvas.w && (t.x = a.x), a.y - t.radius > 0 && a.y + t.radius < n.canvas.h && (t.y = a.y)) : (t.x = a.x, t.y = a.y)
      } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
        if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
          var l = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
            c = n.interactivity.mouse.click_pos_x - t.x,
            d = n.interactivity.mouse.click_pos_y - t.y,
            u = c * c + d * d,
            h = -l / u * 1;
          u <= l && function () {
            var e = Math.atan2(d, c);
            if (t.vx = h * Math.cos(e), t.vy = h * Math.sin(e), "bounce" == n.particles.move.out_mode) {
              var i = {
                x: t.x + t.vx,
                y: t.y + t.vy
              };
              (i.x + t.radius > n.canvas.w || i.x - t.radius < 0) && (t.vx = -t.vx), (i.y + t.radius > n.canvas.h || i.y - t.radius < 0) && (t.vy = -t.vy)
            }
          }()
        } else 0 == n.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, n.fn.modes.grabParticle = function (t) {
      if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
        var e = t.x - n.interactivity.mouse.pos_x,
          i = t.y - n.interactivity.mouse.pos_y,
          o = Math.sqrt(e * e + i * i);
        if (o <= n.interactivity.modes.grab.distance) {
          var s = n.interactivity.modes.grab.line_linked.opacity - o / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
          if (s > 0) {
            var r = n.particles.line_linked.color_rgb_line;
            n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
          }
        }
      }
    }, n.fn.vendors.eventsListeners = function () {
      "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", (function (t) {
        if (n.interactivity.el == window) var e = t.clientX,
          i = t.clientY;
        else e = t.offsetX || t.clientX, i = t.offsetY || t.clientY;
        n.interactivity.mouse.pos_x = e, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
      })), n.interactivity.el.addEventListener("mouseleave", (function (t) {
        n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
      }))), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", (function () {
        if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
          case "push":
            n.particles.move.enable || 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
            break;
          case "remove":
            n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
            break;
          case "bubble":
            n.tmp.bubble_clicking = !0;
            break;
          case "repulse":
            n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout((function () {
              n.tmp.repulse_clicking = !1
            }), 1e3 * n.interactivity.modes.repulse.duration)
        }
      }))
    }, n.fn.vendors.densityAutoParticles = function () {
      if (n.particles.number.density.enable) {
        var t = n.canvas.el.width * n.canvas.el.height / 1e3;
        n.tmp.retina && (t /= 2 * n.canvas.pxratio);
        var e = t * n.particles.number.value / n.particles.number.density.value_area,
          i = n.particles.array.length - e;
        i < 0 ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
      }
    }, n.fn.vendors.checkOverlap = function (t, e) {
      for (var i = 0; i < n.particles.array.length; i++) {
        var o = n.particles.array[i],
          s = t.x - o.x,
          r = t.y - o.y;
        Math.sqrt(s * s + r * r) <= t.radius + o.radius && (t.x = e ? e.x : Math.random() * n.canvas.w, t.y = e ? e.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(t))
      }
    }, n.fn.vendors.createSvgImg = function (t) {
      var e = n.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, (function (e, i, n, o) {
          if (t.color.rgb) var s = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
          else s = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
          return s
        })),
        i = new Blob([e], {
          type: "image/svg+xml;charset=utf-8"
        }),
        o = window.URL || window.webkitURL || window,
        s = o.createObjectURL(i),
        r = new Image;
      r.addEventListener("load", (function () {
        t.img.obj = r, t.img.loaded = !0, o.revokeObjectURL(s), n.tmp.count_svg++
      })), r.src = s
    }, n.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, n.fn.vendors.drawShape = function (t, e, i, n, o, s) {
      var r = o * s,
        a = o / s,
        l = 180 * (a - 2) / a,
        c = Math.PI - Math.PI * l / 180;
      t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
      for (var d = 0; d < r; d++) t.lineTo(n, 0), t.translate(n, 0), t.rotate(c);
      t.fill(), t.restore()
    }, n.fn.vendors.exportImg = function () {
      window.open(n.canvas.el.toDataURL("image/png"), "_blank")
    }, n.fn.vendors.loadImg = function (t) {
      if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src)
        if ("svg" == t) {
          var e = new XMLHttpRequest;
          e.open("GET", n.particles.shape.image.src), e.onreadystatechange = function (t) {
            4 == e.readyState && (200 == e.status ? (n.tmp.source_svg = t.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
          }, e.send()
        } else {
          var i = new Image;
          i.addEventListener("load", (function () {
            n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
          })), i.src = n.particles.shape.image.src
        }
      else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
    }, n.fn.vendors.draw = function () {
      "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : null != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
    }, n.fn.vendors.checkBeforeDraw = function () {
      "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && null == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
    }, n.fn.vendors.init = function () {
      n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
    }, n.fn.vendors.start = function () {
      isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
    }, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
  };
  
  function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (t, e, i, n) {
      return e + e + i + i + n + n
    }));
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16)
    } : null
  }
  
  function clamp(t, e, i) {
    return Math.min(Math.max(t, e), i)
  }
  
  function isInArray(t, e) {
    return e.indexOf(t) > -1
  }
  Object.deepExtend = function (t, e) {
      for (var i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
      return t
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      window.setTimeout(t, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (t, e) {
      "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
      var i = document.getElementById(t),
        n = i.getElementsByClassName("particles-js-canvas-el");
      if (n.length)
        for (; n.length > 0;) i.removeChild(n[0]);
      var o = document.createElement("canvas");
      o.className = "particles-js-canvas-el", o.style.width = "100%", o.style.height = "100%", null != document.getElementById(t).appendChild(o) && pJSDom.push(new pJS(t, e))
    }, window.particlesJS.load = function (t, e, i) {
      var n = new XMLHttpRequest;
      n.open("GET", e), n.onreadystatechange = function (e) {
        if (4 == n.readyState)
          if (200 == n.status) {
            var o = JSON.parse(e.currentTarget.response);
            window.particlesJS(t, o), i && i()
          } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")
      }, n.send()
    },
    function (t) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }((function (t) {
      "use strict";
      var e = window.Slick || {};
      (e = function () {
        var e = 0;
        return function (i, n) {
          var o, s = this;
          s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(i),
            appendDots: t(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, i) {
              return t('<button type="button" />').text(i + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
          }, s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
          }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
      }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
        }).find("a, input, button, select").attr({
          tabindex: "0"
        })
      }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function (e, i) {
          t(i).attr("data-slick-index", e)
        })), o.$slidesCache = o.$slides, o.reinit()
      }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({
            height: e
          }, t.options.speed)
        }
      }, e.prototype.animateSlide = function (e, i) {
        var n = {},
          o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
          left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
          top: e
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
          animStart: o.currentLeft
        }).animate({
          animStart: e
        }, {
          duration: o.options.speed,
          easing: o.options.easing,
          step: function (t) {
            t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
          },
          complete: function () {
            i && i.call()
          }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function () {
          o.disableTransition(), i.call()
        }), o.options.speed))
      }, e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
      }, e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function () {
          var i = t(this).slick("getSlick");
          i.unslicked || i.slideHandler(e, !0)
        }))
      }, e.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
      }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
      }, e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
      }, e.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
      }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        }))
      }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (!0 === n.options.dots) {
          for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
          n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
      }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function (e, i) {
          t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
      }, e.prototype.buildRows = function () {
        var t, e, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
          for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
            var l = document.createElement("div");
            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement("div");
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var d = t * r + (e * a.options.slidesPerRow + i);
                s.get(d) && c.appendChild(s.get(d))
              }
              l.appendChild(c)
            }
            n.appendChild(l)
          }
          a.$slider.empty().append(n), a.$slider.children().children().children().css({
            width: 100 / a.options.slidesPerRow + "%",
            display: "inline-block"
          })
        }
      }, e.prototype.checkResponsive = function (e, i) {
        var n, o, s, r = this,
          a = !1,
          l = r.$slider.width(),
          c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
          null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
      }, e.prototype.changeSlide = function (e, i) {
        var n, o, s = this,
          r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
          case "previous":
            o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
            break;
          case "next":
            o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
            break;
          case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
            break;
          default:
            return
        }
      }, e.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break
            }
            i = e[n]
          }
        return t
      }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
      }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
      }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
      }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
      }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
          t(this).attr("style", t(this).data("originalStyling"))
        })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
      }, e.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
      }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
          zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
          opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
          opacity: 1,
          zIndex: i.options.zIndex
        }), e && setTimeout((function () {
          i.disableTransition(t), e.call()
        }), i.options.speed))
      }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
          opacity: 0,
          zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
          opacity: 0,
          zIndex: e.options.zIndex - 2
        }))
      }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
      }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function (i) {
          i.stopImmediatePropagation();
          var n = t(this);
          setTimeout((function () {
            e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
          }), 0)
        }))
      }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
      }, e.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          n = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++n;
          else
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
      }, e.prototype.getLeft = function (t) {
        var e, i, n, o, s = this,
          r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
      }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t]
      }, e.prototype.getNavigableIndexes = function () {
        var t, e = this,
          i = 0,
          n = 0,
          o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
      }, e.prototype.getSlick = function () {
        return this
      }, e.prototype.getSlideCount = function () {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function (o, s) {
          if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft) return e = s, !1
        })), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
      }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({
          data: {
            message: "index",
            index: parseInt(t)
          }
        }, e)
      }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
      }, e.prototype.initADA = function () {
        var e = this,
          i = Math.ceil(e.slideCount / e.options.slidesToShow),
          n = e.getNavigableIndexes().filter((function (t) {
            return t >= 0 && t < e.slideCount
          }));
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
        }).find("a, input, button, select").attr({
          tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function (i) {
          var o = n.indexOf(i);
          t(this).attr({
            role: "tabpanel",
            id: "slick-slide" + e.instanceUid + i,
            tabindex: -1
          }), -1 !== o && t(this).attr({
            "aria-describedby": "slick-slide-control" + e.instanceUid + o
          })
        })), e.$dots.attr("role", "tablist").find("li").each((function (o) {
          var s = n[o];
          t(this).attr({
            role: "presentation"
          }), t(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + e.instanceUid + o,
            "aria-controls": "slick-slide" + e.instanceUid + s,
            "aria-label": o + 1 + " of " + i,
            "aria-selected": null,
            tabindex: "-1"
          })
        })).eq(e.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
        }).end());
        for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
      }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
      }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
          message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
      }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
      }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
      }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
      }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
          data: {
            message: !0 === e.options.rtl ? "next" : "previous"
          }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
          data: {
            message: !0 === e.options.rtl ? "previous" : "next"
          }
        }))
      }, e.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each((function () {
            var e = t(this),
              i = t(this).attr("data-lazy"),
              n = t(this).attr("data-srcset"),
              o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              r = document.createElement("img");
            r.onload = function () {
              e.animate({
                opacity: 0
              }, 100, (function () {
                n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({
                  opacity: 1
                }, 200, (function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                })), s.$slider.trigger("lazyLoaded", [s, e, i])
              }))
            }, r.onerror = function () {
              e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
            }, r.src = i
          }))
        }
        var i, n, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
          for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        e(i), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
      }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
          opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
      }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({
          data: {
            message: "next"
          }
        })
      }, e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
      }, e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
      }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
      }, e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
      }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({
          data: {
            message: "previous"
          }
        })
      }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
      }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, n, o, s, r, a = this,
          l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
          o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, r.onerror = function () {
          e < 3 ? setTimeout((function () {
            a.progressiveLazyLoad(e + 1)
          }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
      }, e.prototype.refresh = function (e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
          currentSlide: i
        }), o.init(), e || o.changeSlide({
          data: {
            message: "index",
            index: i
          }
        }, !1)
      }, e.prototype.registerBreakpoints = function () {
        var e, i, n, o = this,
          s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
          for (e in o.respondTo = o.options.respondTo || "window", s)
            if (n = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
              for (i = s[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
              o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
            } o.breakpoints.sort((function (t, e) {
            return o.options.mobileFirst ? t - e : e - t
          }))
        }
      }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
      }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function () {
          e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }), 50))
      }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
      }, e.prototype.setCSS = function (t) {
        var e, i, n = this,
          o = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
      }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
          padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
          padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
      }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each((function (n, o) {
          e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
            position: "relative",
            right: e,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          }) : t(o).css({
            position: "relative",
            left: e,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          })
        })), i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
        })
      }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e)
        }
      }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, n, o, s, r = this,
          a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
        else if ("multiple" === s) t.each(n, (function (t, e) {
          r.options[t] = e
        }));
        else if ("responsive" === s)
          for (i in o)
            if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
              r.options.responsive.push(o[i])
            } a && (r.unload(), r.reinit())
      }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
      }, e.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
      }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
          var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
          e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
      }, e.prototype.setupInfinite = function () {
        var e, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
          for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
          for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
          o.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
            t(this).attr("id", "")
          }))
        }
      }, e.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
      }, e.prototype.selectHandler = function (e) {
        var i = this,
          n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
          o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
      }, e.prototype.slideHandler = function (t, e, i) {
        var n, o, s, r, a, l = null,
          c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
          if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
            c.postSlide(n)
          })) : c.postSlide(n));
          else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
          c.postSlide(n)
        })) : c.postSlide(n));
        else {
          if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, (function () {
            c.postSlide(o)
          }))) : c.postSlide(o), void c.animateHeight();
          !0 !== i ? c.animateSlide(l, (function () {
            c.postSlide(o)
          })) : c.postSlide(o)
        }
      }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
      }, e.prototype.swipeDirection = function () {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
      }, e.prototype.swipeEnd = function (t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
          switch (i = n.swipeDirection()) {
            case "left":
            case "down":
              e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
              break;
            case "right":
            case "up":
              e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
          }
          "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
      }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
          case "start":
            e.swipeStart(t);
            break;
          case "move":
            e.swipeMove(t);
            break;
          case "end":
            e.swipeEnd(t)
        }
      }, e.prototype.swipeMove = function (t) {
        var e, i, n, o, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
      }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
      }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
      }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
      }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
      }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
      }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
      }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
      }, t.fn.slick = function () {
        var t, i, n = this,
          o = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          r = n.length;
        for (t = 0; t < r; t++)
          if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
        return n
      }
    }));
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  ! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, i) {
      return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
  }((function (t) {
    return t.fn.tilt = function (e) {
      var i = function () {
          this.ticking || (requestAnimationFrame(d.bind(this)), this.ticking = !0)
        },
        n = function () {
          t(this).on("mousemove", a), t(this).on("mouseenter", s), this.settings.reset && t(this).on("mouseleave", l), this.settings.glare && t(window).on("resize", h.bind(this))
        },
        o = function () {
          var e = this;
          void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
            transition: this.settings.speed + "ms " + this.settings.easing
          }), this.settings.glare && this.glareElement.css({
            transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
          }), this.timeout = setTimeout((function () {
            t(e).css({
              transition: ""
            }), e.settings.glare && e.glareElement.css({
              transition: ""
            })
          }), this.settings.speed)
        },
        s = function (e) {
          this.ticking = !1, t(this).css({
            "will-change": "transform"
          }), o.call(this), t(this).trigger("tilt.mouseEnter")
        },
        r = function (e) {
          return void 0 === e && (e = {
            pageX: t(this).offset().left + t(this).outerWidth() / 2,
            pageY: t(this).offset().top + t(this).outerHeight() / 2
          }), {
            x: e.pageX,
            y: e.pageY
          }
        },
        a = function (t) {
          this.mousePositions = r(t), i.call(this)
        },
        l = function () {
          o.call(this), this.reset = !0, i.call(this), t(this).trigger("tilt.mouseLeave")
        },
        c = function () {
          var e = t(this).outerWidth(),
            i = t(this).outerHeight(),
            n = t(this).offset().left,
            o = t(this).offset().top,
            s = (this.mousePositions.x - n) / e,
            r = (this.mousePositions.y - o) / i;
          return {
            tiltX: (this.settings.maxTilt / 2 - s * this.settings.maxTilt).toFixed(2),
            tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
            percentageX: 100 * s,
            percentageY: 100 * r,
            angle: Math.atan2(this.mousePositions.x - (n + e / 2), -(this.mousePositions.y - (o + i / 2))) * (180 / Math.PI)
          }
        },
        d = function () {
          return this.transforms = c.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
        },
        u = function () {
          var e = this.settings.glarePrerender;
          if (e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), !e) {
            this.glareElementWrapper.css({
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }).css({
              overflow: "hidden",
              "pointer-events": "none"
            }), this.glareElement.css({
              position: "absolute",
              top: "50%",
              left: "50%",
              "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
              width: "" + 2 * t(this).outerWidth(),
              height: "" + 2 * t(this).outerWidth(),
              transform: "rotate(180deg) translate(-50%, -50%)",
              "transform-origin": "0% 0%",
              opacity: "0"
            })
          }
        },
        h = function () {
          this.glareElement.css({
            width: "" + 2 * t(this).outerWidth(),
            height: "" + 2 * t(this).outerWidth()
          })
        };
      return t.fn.tilt.destroy = function () {
        t(this).each((function () {
          t(this).find(".js-tilt-glare").remove(), t(this).css({
            "will-change": "",
            transform: ""
          }), t(this).off("mousemove mouseenter mouseleave")
        }))
      }, t.fn.tilt.getValues = function () {
        var e = [];
        return t(this).each((function () {
          this.mousePositions = r.call(this), e.push(c.call(this))
        })), e
      }, t.fn.tilt.reset = function () {
        t(this).each((function () {
          var e = this;
          this.mousePositions = r.call(this), this.settings = t(this).data("settings"), l.call(this), setTimeout((function () {
            e.reset = !1
          }), this.settings.transition)
        }))
      }, this.each((function () {
        var i = this;
        this.settings = t.extend({
          maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
          perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
          easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
          scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
          speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
          transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
          disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
          axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
          reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
          glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
          maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
        }, e), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function () {
          t(i).data("settings", i.settings), i.settings.glare && u.call(i), n.call(i)
        }, this.init()
      }))
    }, t("[data-tilt]").tilt(), !0
  }));

  /*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
  "use strict";

  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function e(e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e
  }

  function i() {
    return (i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
    }).apply(this, arguments)
  }

  function n(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
  }
  var o, s, r = function (t) {
      do {
        t += Math.floor(1e6 * Math.random())
      } while (document.getElementById(t));
      return t
    },
    a = function (t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var i = t.getAttribute("href");
        e = i && "#" !== i ? i.trim() : null
      }
      return e
    },
    l = function (t) {
      var e = a(t);
      return e && document.querySelector(e) ? e : null
    },
    c = function (t) {
      var e = a(t);
      return e ? document.querySelector(e) : null
    },
    d = function (t) {
      if (!t) return 0;
      var e = window.getComputedStyle(t),
        i = e.transitionDuration,
        n = e.transitionDelay,
        o = Number.parseFloat(i),
        s = Number.parseFloat(n);
      return o || s ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(i) + Number.parseFloat(n))) : 0
    },
    u = function (t) {
      t.dispatchEvent(new Event("transitionend"))
    },
    h = function (t) {
      return (t[0] || t).nodeType
    },
    p = function (t, e) {
      var i = !1,
        n = e + 5;
      t.addEventListener("transitionend", (function e() {
        i = !0, t.removeEventListener("transitionend", e)
      })), setTimeout((function () {
        i || u(t)
      }), n)
    },
    f = function (t, e, i) {
      Object.keys(i).forEach((function (n) {
        var o, s = i[n],
          r = e[n],
          a = r && h(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + s + '".')
      }))
    },
    m = function (t) {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        var e = getComputedStyle(t),
          i = getComputedStyle(t.parentNode);
        return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
      }
      return !1
    },
    g = function () {
      return function () {}
    },
    v = function (t) {
      return t.offsetHeight
    },
    y = function () {
      var t = window.jQuery;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    },
    b = function (t) {
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    },
    _ = "rtl" === document.documentElement.dir,
    w = (o = {}, s = 1, {
      set: function (t, e, i) {
        void 0 === t.bsKey && (t.bsKey = {
          key: e,
          id: s
        }, s++), o[t.bsKey.id] = i
      },
      get: function (t, e) {
        if (!t || void 0 === t.bsKey) return null;
        var i = t.bsKey;
        return i.key === e ? o[i.id] : null
      },
      delete: function (t, e) {
        if (void 0 !== t.bsKey) {
          var i = t.bsKey;
          i.key === e && (delete o[i.id], delete t.bsKey)
        }
      }
    }),
    k = function (t, e, i) {
      w.set(t, e, i)
    },
    x = function (t, e) {
      return w.get(t, e)
    },
    T = /[^.]*(?=\..*)\.|.*/,
    S = /\..*/,
    E = /::\d+$/,
    C = {},
    A = 1,
    I = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function L(t, e) {
    return e && e + "::" + A++ || t.uidEvent || A++
  }

  function z(t) {
    var e = L(t);
    return t.uidEvent = e, C[e] = C[e] || {}, C[e]
  }

  function M(t, e, i) {
    void 0 === i && (i = null);
    for (var n = Object.keys(t), o = 0, s = n.length; o < s; o++) {
      var r = t[n[o]];
      if (r.originalHandler === e && r.delegationSelector === i) return r
    }
    return null
  }

  function P(t, e, i) {
    var n = "string" == typeof e,
      o = n ? i : e,
      s = t.replace(S, ""),
      r = I[s];
    return r && (s = r), O.has(s) || (s = t), [n, o, s]
  }

  function D(t, e, i, n, o) {
    if ("string" == typeof e && t) {
      i || (i = n, n = null);
      var s = P(e, i, n),
        r = s[0],
        a = s[1],
        l = s[2],
        c = z(t),
        d = c[l] || (c[l] = {}),
        u = M(d, a, r ? i : null);
      if (u) u.oneOff = u.oneOff && o;
      else {
        var h = L(a, e.replace(T, "")),
          p = r ? function (t, e, i) {
            return function n(o) {
              for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode)
                for (var a = s.length; a--;)
                  if (s[a] === r) return o.delegateTarget = r, n.oneOff && $.off(t, o.type, i), i.apply(r, [o]);
              return null
            }
          }(t, i, n) : function (t, e) {
            return function i(n) {
              return n.delegateTarget = t, i.oneOff && $.off(t, n.type, e), e.apply(t, [n])
            }
          }(t, i);
        p.delegationSelector = r ? i : null, p.originalHandler = a, p.oneOff = o, p.uidEvent = h, d[h] = p, t.addEventListener(l, p, r)
      }
    }
  }

  function j(t, e, i, n, o) {
    var s = M(e[i], n, o);
    s && (t.removeEventListener(i, s, Boolean(o)), delete e[i][s.uidEvent])
  }
  var $ = {
      on: function (t, e, i, n) {
        D(t, e, i, n, !1)
      },
      one: function (t, e, i, n) {
        D(t, e, i, n, !0)
      },
      off: function (t, e, i, n) {
        if ("string" == typeof e && t) {
          var o = P(e, i, n),
            s = o[0],
            r = o[1],
            a = o[2],
            l = a !== e,
            c = z(t),
            d = e.startsWith(".");
          if (void 0 === r) {
            d && Object.keys(c).forEach((function (i) {
              ! function (t, e, i, n) {
                var o = e[i] || {};
                Object.keys(o).forEach((function (s) {
                  if (s.includes(n)) {
                    var r = o[s];
                    j(t, e, i, r.originalHandler, r.delegationSelector)
                  }
                }))
              }(t, c, i, e.slice(1))
            }));
            var u = c[a] || {};
            Object.keys(u).forEach((function (i) {
              var n = i.replace(E, "");
              if (!l || e.includes(n)) {
                var o = u[i];
                j(t, c, a, o.originalHandler, o.delegationSelector)
              }
            }))
          } else {
            if (!c || !c[a]) return;
            j(t, c, a, r, s ? i : null)
          }
        }
      },
      trigger: function (t, e, i) {
        if ("string" != typeof e || !t) return null;
        var n, o = y(),
          s = e.replace(S, ""),
          r = e !== s,
          a = O.has(s),
          l = !0,
          c = !0,
          d = !1,
          u = null;
        return r && o && (n = o.Event(e, i), o(t).trigger(n), l = !n.isPropagationStopped(), c = !n.isImmediatePropagationStopped(), d = n.isDefaultPrevented()), a ? (u = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : u = new CustomEvent(e, {
          bubbles: l,
          cancelable: !0
        }), void 0 !== i && Object.keys(i).forEach((function (t) {
          Object.defineProperty(u, t, {
            get: function () {
              return i[t]
            }
          })
        })), d && u.preventDefault(), c && t.dispatchEvent(u), u.defaultPrevented && void 0 !== n && n.preventDefault(), u
      }
    },
    H = function () {
      function t(t) {
        t && (this._element = t, k(t, this.constructor.DATA_KEY, this))
      }
      return t.prototype.dispose = function () {
        (function (t, e) {
          w.delete(t, e)
        })(this._element, this.constructor.DATA_KEY), this._element = null
      }, t.getInstance = function (t) {
        return x(t, this.DATA_KEY)
      }, e(t, null, [{
        key: "VERSION",
        get: function () {
          return "5.0.0-beta1"
        }
      }]), t
    }(),
    W = "alert",
    N = function (t) {
      function i() {
        return t.apply(this, arguments) || this
      }
      n(i, t);
      var o = i.prototype;
      return o.close = function (t) {
        var e = t ? this._getRootElement(t) : this._element,
          i = this._triggerCloseEvent(e);
        null === i || i.defaultPrevented || this._removeElement(e)
      }, o._getRootElement = function (t) {
        return c(t) || t.closest(".alert")
      }, o._triggerCloseEvent = function (t) {
        return $.trigger(t, "close.bs.alert")
      }, o._removeElement = function (t) {
        var e = this;
        if (t.classList.remove("show"), t.classList.contains("fade")) {
          var i = d(t);
          $.one(t, "transitionend", (function () {
            return e._destroyElement(t)
          })), p(t, i)
        } else this._destroyElement(t)
      }, o._destroyElement = function (t) {
        t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert")
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.alert");
          e || (e = new i(this)), "close" === t && e[t](this)
        }))
      }, i.handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }, e(i, null, [{
        key: "DATA_KEY",
        get: function () {
          return "bs.alert"
        }
      }]), i
    }(H);
  $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', N.handleDismiss(new N)), b((function () {
    var t = y();
    if (t) {
      var e = t.fn[W];
      t.fn[W] = N.jQueryInterface, t.fn[W].Constructor = N, t.fn[W].noConflict = function () {
        return t.fn[W] = e, N.jQueryInterface
      }
    }
  }));
  var F = function (t) {
    function i() {
      return t.apply(this, arguments) || this
    }
    return n(i, t), i.prototype.toggle = function () {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }, i.jQueryInterface = function (t) {
      return this.each((function () {
        var e = x(this, "bs.button");
        e || (e = new i(this)), "toggle" === t && e[t]()
      }))
    }, e(i, null, [{
      key: "DATA_KEY",
      get: function () {
        return "bs.button"
      }
    }]), i
  }(H);

  function R(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
  }

  function q(t) {
    return t.replace(/[A-Z]/g, (function (t) {
      return "-" + t.toLowerCase()
    }))
  }
  $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]'),
      i = x(e, "bs.button");
    i || (i = new F(e)), i.toggle()
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn.button;
      t.fn.button = F.jQueryInterface, t.fn.button.Constructor = F, t.fn.button.noConflict = function () {
        return t.fn.button = e, F.jQueryInterface
      }
    }
  }));
  var B = {
      setDataAttribute: function (t, e, i) {
        t.setAttribute("data-bs-" + q(e), i)
      },
      removeDataAttribute: function (t, e) {
        t.removeAttribute("data-bs-" + q(e))
      },
      getDataAttributes: function (t) {
        if (!t) return {};
        var e = {};
        return Object.keys(t.dataset).filter((function (t) {
          return t.startsWith("bs")
        })).forEach((function (i) {
          var n = i.replace(/^bs/, "");
          n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = R(t.dataset[i])
        })), e
      },
      getDataAttribute: function (t, e) {
        return R(t.getAttribute("data-bs-" + q(e)))
      },
      offset: function (t) {
        var e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft
        }
      },
      position: function (t) {
        return {
          top: t.offsetTop,
          left: t.offsetLeft
        }
      }
    },
    U = {
      matches: function (t, e) {
        return t.matches(e)
      },
      find: function (t, e) {
        var i;
        return void 0 === e && (e = document.documentElement), (i = []).concat.apply(i, Element.prototype.querySelectorAll.call(e, t))
      },
      findOne: function (t, e) {
        return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
      },
      children: function (t, e) {
        var i;
        return (i = []).concat.apply(i, t.children).filter((function (t) {
          return t.matches(e)
        }))
      },
      parents: function (t, e) {
        for (var i = [], n = t.parentNode; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) this.matches(n, e) && i.push(n), n = n.parentNode;
        return i
      },
      prev: function (t, e) {
        for (var i = t.previousElementSibling; i;) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling
        }
        return []
      },
      next: function (t, e) {
        for (var i = t.nextElementSibling; i;) {
          if (this.matches(i, e)) return [i];
          i = i.nextElementSibling
        }
        return []
      }
    },
    Y = "carousel",
    V = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    Q = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    X = {
      TOUCH: "touch",
      PEN: "pen"
    },
    K = function (t) {
      function o(e, i) {
        var n;
        return (n = t.call(this, e) || this)._items = null, n._interval = null, n._activeElement = null, n._isPaused = !1, n._isSliding = !1, n.touchTimeout = null, n.touchStartX = 0, n.touchDeltaX = 0, n._config = n._getConfig(i), n._indicatorsElement = U.findOne(".carousel-indicators", n._element), n._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, n._pointerEvent = Boolean(window.PointerEvent), n._addEventListeners(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.next = function () {
        this._isSliding || this._slide("next")
      }, s.nextWhenVisible = function () {
        !document.hidden && m(this._element) && this.next()
      }, s.prev = function () {
        this._isSliding || this._slide("prev")
      }, s.pause = function (t) {
        t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (u(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, s.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, s.to = function (t) {
        var e = this;
        this._activeElement = U.findOne(".active.carousel-item", this._element);
        var i = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding) $.one(this._element, "slid.bs.carousel", (function () {
            return e.to(t)
          }));
          else {
            if (i === t) return this.pause(), void this.cycle();
            var n = t > i ? "next" : "prev";
            this._slide(n, this._items[t])
          }
      }, s.dispose = function () {
        t.prototype.dispose.call(this), $.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, s._getConfig = function (t) {
        return t = i({}, V, t), f(Y, t, Q), t
      }, s._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
        }
      }, s._addEventListeners = function () {
        var t = this;
        this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (function (e) {
          return t._keydown(e)
        })), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (function (e) {
          return t.pause(e)
        })), $.on(this._element, "mouseleave.bs.carousel", (function (e) {
          return t.cycle(e)
        }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
      }, s._addTouchEventListeners = function () {
        var t = this,
          e = function (e) {
            t._pointerEvent && X[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
          },
          i = function (e) {
            t._pointerEvent && X[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
              return t.cycle(e)
            }), 500 + t._config.interval))
          };
        U.find(".carousel-item img", this._element).forEach((function (t) {
          $.on(t, "dragstart.bs.carousel", (function (t) {
            return t.preventDefault()
          }))
        })), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (function (t) {
          return e(t)
        })), $.on(this._element, "pointerup.bs.carousel", (function (t) {
          return i(t)
        })), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (function (t) {
          return e(t)
        })), $.on(this._element, "touchmove.bs.carousel", (function (e) {
          return function (e) {
            e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
          }(e)
        })), $.on(this._element, "touchend.bs.carousel", (function (t) {
          return i(t)
        })))
      }, s._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
          case "ArrowLeft":
            t.preventDefault(), this.prev();
            break;
          case "ArrowRight":
            t.preventDefault(), this.next()
        }
      }, s._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
      }, s._getItemByDirection = function (t, e) {
        var i = "next" === t,
          n = "prev" === t,
          o = this._getItemIndex(e),
          s = this._items.length - 1;
        if ((n && 0 === o || i && o === s) && !this._config.wrap) return e;
        var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r]
      }, s._triggerSlideEvent = function (t, e) {
        var i = this._getItemIndex(t),
          n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
        return $.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        })
      }, s._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          for (var e = U.find(".active", this._indicatorsElement), i = 0; i < e.length; i++) e[i].classList.remove("active");
          var n = this._indicatorsElement.children[this._getItemIndex(t)];
          n && n.classList.add("active")
        }
      }, s._updateInterval = function () {
        var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
        if (t) {
          var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
      }, s._slide = function (t, e) {
        var i, n, o, s = this,
          r = U.findOne(".active.carousel-item", this._element),
          a = this._getItemIndex(r),
          l = e || r && this._getItemByDirection(t, r),
          c = this._getItemIndex(l),
          u = Boolean(this._interval);
        if ("next" === t ? (i = "carousel-item-start", n = "carousel-item-next", o = "left") : (i = "carousel-item-end", n = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
        else if (!this._triggerSlideEvent(l, o).defaultPrevented && r && l) {
          if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
            l.classList.add(n), v(l), r.classList.add(i), l.classList.add(i);
            var h = d(r);
            $.one(r, "transitionend", (function () {
              l.classList.remove(i, n), l.classList.add("active"), r.classList.remove("active", n, i), s._isSliding = !1, setTimeout((function () {
                $.trigger(s._element, "slid.bs.carousel", {
                  relatedTarget: l,
                  direction: o,
                  from: a,
                  to: c
                })
              }), 0)
            })), p(r, h)
          } else r.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, $.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: l,
            direction: o,
            from: a,
            to: c
          });
          u && this.cycle()
        }
      }, o.carouselInterface = function (t, e) {
        var n = x(t, "bs.carousel"),
          s = i({}, V, B.getDataAttributes(t));
        "object" == typeof e && (s = i({}, s, e));
        var r = "string" == typeof e ? e : s.slide;
        if (n || (n = new o(t, s)), "number" == typeof e) n.to(e);
        else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
          n[r]()
        } else s.interval && s.ride && (n.pause(), n.cycle())
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          o.carouselInterface(this, t)
        }))
      }, o.dataApiClickHandler = function (t) {
        var e = c(this);
        if (e && e.classList.contains("carousel")) {
          var n = i({}, B.getDataAttributes(e), B.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");
          s && (n.interval = !1), o.carouselInterface(e, n), s && x(e, "bs.carousel").to(s), t.preventDefault()
        }
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return V
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.carousel"
        }
      }]), o
    }(H);
  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", K.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", (function () {
    for (var t = U.find('[data-bs-ride="carousel"]'), e = 0, i = t.length; e < i; e++) K.carouselInterface(t[e], x(t[e], "bs.carousel"))
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn[Y];
      t.fn[Y] = K.jQueryInterface, t.fn[Y].Constructor = K, t.fn[Y].noConflict = function () {
        return t.fn[Y] = e, K.jQueryInterface
      }
    }
  }));
  var G = "collapse",
    J = {
      toggle: !0,
      parent: ""
    },
    Z = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    tt = function (t) {
      function o(e, i) {
        var n;
        (n = t.call(this, e) || this)._isTransitioning = !1, n._config = n._getConfig(i), n._triggerArray = U.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
        for (var o = U.find('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
          var a = o[s],
            c = l(a),
            d = U.find(c).filter((function (t) {
              return t === e
            }));
          null !== c && d.length && (n._selector = c, n._triggerArray.push(a))
        }
        return n._parent = n._config.parent ? n._getParent() : null, n._config.parent || n._addAriaAndCollapsedClass(n._element, n._triggerArray), n._config.toggle && n.toggle(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.toggle = function () {
        this._element.classList.contains("show") ? this.hide() : this.show()
      }, s.show = function () {
        var t = this;
        if (!this._isTransitioning && !this._element.classList.contains("show")) {
          var e, i;
          this._parent && 0 === (e = U.find(".show, .collapsing", this._parent).filter((function (e) {
            return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
          }))).length && (e = null);
          var n = U.findOne(this._selector);
          if (e) {
            var s = e.find((function (t) {
              return n !== t
            }));
            if ((i = s ? x(s, "bs.collapse") : null) && i._isTransitioning) return
          }
          if (!$.trigger(this._element, "show.bs.collapse").defaultPrevented) {
            e && e.forEach((function (t) {
              n !== t && o.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null)
            }));
            var r = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
              t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
            })), this.setTransitioning(!0);
            var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              l = d(this._element);
            $.one(this._element, "transitionend", (function () {
              t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), $.trigger(t._element, "shown.bs.collapse")
            })), p(this._element, l), this._element.style[r] = this._element[a] + "px"
          }
        }
      }, s.hide = function () {
        var t = this;
        if (!this._isTransitioning && this._element.classList.contains("show") && !$.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
          var e = this._getDimension();
          this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
          var i = this._triggerArray.length;
          if (i > 0)
            for (var n = 0; n < i; n++) {
              var o = this._triggerArray[n],
                s = c(o);
              s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
            }
          this.setTransitioning(!0), this._element.style[e] = "";
          var r = d(this._element);
          $.one(this._element, "transitionend", (function () {
            t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), $.trigger(t._element, "hidden.bs.collapse")
          })), p(this._element, r)
        }
      }, s.setTransitioning = function (t) {
        this._isTransitioning = t
      }, s.dispose = function () {
        t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
      }, s._getConfig = function (t) {
        return (t = i({}, J, t)).toggle = Boolean(t.toggle), f(G, t, Z), t
      }, s._getDimension = function () {
        return this._element.classList.contains("width") ? "width" : "height"
      }, s._getParent = function () {
        var t = this,
          e = this._config.parent;
        h(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = U.findOne(e);
        var i = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
        return U.find(i, e).forEach((function (e) {
          var i = c(e);
          t._addAriaAndCollapsedClass(i, [e])
        })), e
      }, s._addAriaAndCollapsedClass = function (t, e) {
        if (t && e.length) {
          var i = t.classList.contains("show");
          e.forEach((function (t) {
            i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
          }))
        }
      }, o.collapseInterface = function (t, e) {
        var n = x(t, "bs.collapse"),
          s = i({}, J, B.getDataAttributes(t), "object" == typeof e && e ? e : {});
        if (!n && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), n || (n = new o(t, s)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]()
        }
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          o.collapseInterface(this, t)
        }))
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return J
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.collapse"
        }
      }]), o
    }(H);
  $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
    "A" === t.target.tagName && t.preventDefault();
    var e = B.getDataAttributes(this),
      i = l(this);
    U.find(i).forEach((function (t) {
      var i, n = x(t, "bs.collapse");
      n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent, n._parent = n._getParent()), i = "toggle") : i = e, tt.collapseInterface(t, i)
    }))
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn[G];
      t.fn[G] = tt.jQueryInterface, t.fn[G].Constructor = tt, t.fn[G].noConflict = function () {
        return t.fn[G] = e, tt.jQueryInterface
      }
    }
  }));
  var et = "top",
    it = "bottom",
    nt = "right",
    ot = "left",
    st = [et, it, nt, ot],
    rt = st.reduce((function (t, e) {
      return t.concat([e + "-start", e + "-end"])
    }), []),
    at = [].concat(st, ["auto"]).reduce((function (t, e) {
      return t.concat([e, e + "-start", e + "-end"])
    }), []),
    lt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function ct(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }

  function dt(t) {
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }

  function ut(t) {
    return t instanceof dt(t).Element || t instanceof Element
  }

  function ht(t) {
    return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
  }
  var pt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach((function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          o = e.elements[t];
        ht(o) && ct(o) && (Object.assign(o.style, i), Object.keys(n).forEach((function (t) {
          var e = n[t];
          !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
        })))
      }))
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, i.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach((function (t) {
            var n = e.elements[t],
              o = e.attributes[t] || {},
              s = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                return t[e] = "", t
              }), {});
            ht(n) && ct(n) && (Object.assign(n.style, s), Object.keys(o).forEach((function (t) {
              n.removeAttribute(t)
            })))
          }))
        }
    },
    requires: ["computeStyles"]
  };

  function ft(t) {
    return t.split("-")[0]
  }

  function mt(t) {
    return {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: t.offsetWidth,
      height: t.offsetHeight
    }
  }

  function gt(t, e) {
    var i, n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && ((i = n) instanceof dt(i).ShadowRoot || i instanceof ShadowRoot)) {
      var o = e;
      do {
        if (o && t.isSameNode(o)) return !0;
        o = o.parentNode || o.host
      } while (o)
    }
    return !1
  }

  function vt(t) {
    return dt(t).getComputedStyle(t)
  }

  function yt(t) {
    return ["table", "td", "th"].indexOf(ct(t)) >= 0
  }

  function bt(t) {
    return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }

  function _t(t) {
    return "html" === ct(t) ? t : t.assignedSlot || t.parentNode || t.host || bt(t)
  }

  function wt(t) {
    if (!ht(t) || "fixed" === vt(t).position) return null;
    var e = t.offsetParent;
    if (e) {
      var i = bt(e);
      if ("body" === ct(e) && "static" === vt(e).position && "static" !== vt(i).position) return i
    }
    return e
  }

  function kt(t) {
    for (var e = dt(t), i = wt(t); i && yt(i) && "static" === vt(i).position;) i = wt(i);
    return i && "body" === ct(i) && "static" === vt(i).position ? e : i || function (t) {
      for (var e = _t(t); ht(e) && ["html", "body"].indexOf(ct(e)) < 0;) {
        var i = vt(e);
        if ("none" !== i.transform || "none" !== i.perspective || i.willChange && "auto" !== i.willChange) return e;
        e = e.parentNode
      }
      return null
    }(t) || e
  }

  function xt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }

  function Tt(t, e, i) {
    return Math.max(t, Math.min(e, i))
  }

  function St(t) {
    return Object.assign(Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), t)
  }

  function Et(t, e) {
    return e.reduce((function (e, i) {
      return e[i] = t, e
    }), {})
  }
  var Ct = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e, i = t.state,
          n = t.name,
          o = i.elements.arrow,
          s = i.modifiersData.popperOffsets,
          r = ft(i.placement),
          a = xt(r),
          l = [ot, nt].indexOf(r) >= 0 ? "height" : "width";
        if (o && s) {
          var c = i.modifiersData[n + "#persistent"].padding,
            d = mt(o),
            u = "y" === a ? et : ot,
            h = "y" === a ? it : nt,
            p = i.rects.reference[l] + i.rects.reference[a] - s[a] - i.rects.popper[l],
            f = s[a] - i.rects.reference[a],
            m = kt(o),
            g = m ? "y" === a ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            v = p / 2 - f / 2,
            y = c[u],
            b = g - d[l] - c[h],
            _ = g / 2 - d[l] / 2 + v,
            w = Tt(y, _, b),
            k = a;
          i.modifiersData[n] = ((e = {})[k] = w, e.centerOffset = w - _, e)
        }
      },
      effect: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          o = i.element,
          s = void 0 === o ? "[data-popper-arrow]" : o,
          r = i.padding,
          a = void 0 === r ? 0 : r;
        null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && gt(e.elements.popper, s) && (e.elements.arrow = s, e.modifiersData[n + "#persistent"] = {
          padding: St("number" != typeof a ? a : Et(a, st))
        })
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    },
    At = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };

  function It(t) {
    var e, i = t.popper,
      n = t.popperRect,
      o = t.placement,
      s = t.offsets,
      r = t.position,
      a = t.gpuAcceleration,
      l = t.adaptive,
      c = function (t) {
        var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
        return {
          x: Math.round(e * n) / n || 0,
          y: Math.round(i * n) / n || 0
        }
      }(s),
      d = c.x,
      u = c.y,
      h = s.hasOwnProperty("x"),
      p = s.hasOwnProperty("y"),
      f = ot,
      m = et,
      g = window;
    if (l) {
      var v = kt(i);
      v === dt(i) && (v = bt(i)), o === et && (m = it, u -= v.clientHeight - n.height, u *= a ? 1 : -1), o === ot && (f = nt, d -= v.clientWidth - n.width, d *= a ? 1 : -1)
    }
    var y, b = Object.assign({
      position: r
    }, l && At);
    return a ? Object.assign(Object.assign({}, b), {}, ((y = {})[m] = p ? "0" : "", y[f] = h ? "0" : "", y.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + u + "px)" : "translate3d(" + d + "px, " + u + "px, 0)", y)) : Object.assign(Object.assign({}, b), {}, ((e = {})[m] = p ? u + "px" : "", e[f] = h ? d + "px" : "", e.transform = "", e))
  }
  var Ot = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          o = void 0 === n || n,
          s = i.adaptive,
          r = void 0 === s || s,
          a = {
            placement: ft(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: o
          };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), It(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: r
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), It(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.arrow,
          position: "absolute",
          adaptive: !1
        })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-placement": e.placement
        })
      },
      data: {}
    },
    Lt = {
      passive: !0
    },
    zt = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          i = t.instance,
          n = t.options,
          o = n.scroll,
          s = void 0 === o || o,
          r = n.resize,
          a = void 0 === r || r,
          l = dt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return s && c.forEach((function (t) {
            t.addEventListener("scroll", i.update, Lt)
          })), a && l.addEventListener("resize", i.update, Lt),
          function () {
            s && c.forEach((function (t) {
              t.removeEventListener("scroll", i.update, Lt)
            })), a && l.removeEventListener("resize", i.update, Lt)
          }
      },
      data: {}
    },
    Mt = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };

  function Pt(t) {
    return t.replace(/left|right|bottom|top/g, (function (t) {
      return Mt[t]
    }))
  }
  var Dt = {
    start: "end",
    end: "start"
  };

  function jt(t) {
    return t.replace(/start|end/g, (function (t) {
      return Dt[t]
    }))
  }

  function $t(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    }
  }

  function Ht(t) {
    var e = dt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    }
  }

  function Wt(t) {
    return $t(bt(t)).left + Ht(t).scrollLeft
  }

  function Nt(t) {
    var e = vt(t),
      i = e.overflow,
      n = e.overflowX,
      o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + o + n)
  }

  function Ft(t, e) {
    void 0 === e && (e = []);
    var i = function t(e) {
        return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : ht(e) && Nt(e) ? e : t(_t(e))
      }(t),
      n = "body" === ct(i),
      o = dt(i),
      s = n ? [o].concat(o.visualViewport || [], Nt(i) ? i : []) : i,
      r = e.concat(s);
    return n ? r : r.concat(Ft(_t(s)))
  }

  function Rt(t) {
    return Object.assign(Object.assign({}, t), {}, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    })
  }

  function qt(t, e) {
    return "viewport" === e ? Rt(function (t) {
      var e = dt(t),
        i = bt(t),
        n = e.visualViewport,
        o = i.clientWidth,
        s = i.clientHeight,
        r = 0,
        a = 0;
      return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: o,
        height: s,
        x: r + Wt(t),
        y: a
      }
    }(t)) : ht(e) ? function (t) {
      var e = $t(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
    }(e) : Rt(function (t) {
      var e = bt(t),
        i = Ht(t),
        n = t.ownerDocument.body,
        o = Math.max(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
        s = Math.max(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
        r = -i.scrollLeft + Wt(t),
        a = -i.scrollTop;
      return "rtl" === vt(n || e).direction && (r += Math.max(e.clientWidth, n ? n.clientWidth : 0) - o), {
        width: o,
        height: s,
        x: r,
        y: a
      }
    }(bt(t)))
  }

  function Bt(t) {
    return t.split("-")[1]
  }

  function Ut(t) {
    var e, i = t.reference,
      n = t.element,
      o = t.placement,
      s = o ? ft(o) : null,
      r = o ? Bt(o) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (s) {
      case et:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;
      case it:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;
      case nt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;
      case ot:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;
      default:
        e = {
          x: i.x,
          y: i.y
        }
    }
    var c = s ? xt(s) : null;
    if (null != c) {
      var d = "y" === c ? "height" : "width";
      switch (r) {
        case "start":
          e[c] = Math.floor(e[c]) - Math.floor(i[d] / 2 - n[d] / 2);
          break;
        case "end":
          e[c] = Math.floor(e[c]) + Math.ceil(i[d] / 2 - n[d] / 2)
      }
    }
    return e
  }

  function Yt(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      o = void 0 === n ? t.placement : n,
      s = i.boundary,
      r = void 0 === s ? "clippingParents" : s,
      a = i.rootBoundary,
      l = void 0 === a ? "viewport" : a,
      c = i.elementContext,
      d = void 0 === c ? "popper" : c,
      u = i.altBoundary,
      h = void 0 !== u && u,
      p = i.padding,
      f = void 0 === p ? 0 : p,
      m = St("number" != typeof f ? f : Et(f, st)),
      g = "popper" === d ? "reference" : "popper",
      v = t.elements.reference,
      y = t.rects.popper,
      b = t.elements[h ? g : d],
      _ = function (t, e, i) {
        var n = "clippingParents" === e ? function (t) {
            var e = Ft(_t(t)),
              i = ["absolute", "fixed"].indexOf(vt(t).position) >= 0 && ht(t) ? kt(t) : t;
            return ut(i) ? e.filter((function (t) {
              return ut(t) && gt(t, i) && "body" !== ct(t)
            })) : []
          }(t) : [].concat(e),
          o = [].concat(n, [i]),
          s = o[0],
          r = o.reduce((function (e, i) {
            var n = qt(t, i);
            return e.top = Math.max(n.top, e.top), e.right = Math.min(n.right, e.right), e.bottom = Math.min(n.bottom, e.bottom), e.left = Math.max(n.left, e.left), e
          }), qt(t, s));
        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
      }(ut(b) ? b : b.contextElement || bt(t.elements.popper), r, l),
      w = $t(v),
      k = Ut({
        reference: w,
        element: y,
        strategy: "absolute",
        placement: o
      }),
      x = Rt(Object.assign(Object.assign({}, y), k)),
      T = "popper" === d ? x : w,
      S = {
        top: _.top - T.top + m.top,
        bottom: T.bottom - _.bottom + m.bottom,
        left: _.left - T.left + m.left,
        right: T.right - _.right + m.right
      },
      E = t.modifiersData.offset;
    if ("popper" === d && E) {
      var C = E[o];
      Object.keys(S).forEach((function (t) {
        var e = [nt, it].indexOf(t) >= 0 ? 1 : -1,
          i = [et, it].indexOf(t) >= 0 ? "y" : "x";
        S[t] += C[i] * e
      }))
    }
    return S
  }
  var Vt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var o = i.mainAxis, s = void 0 === o || o, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, u = i.rootBoundary, h = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, m = i.allowedAutoPlacements, g = e.options.placement, v = ft(g), y = l || (v !== g && f ? function (t) {
            if ("auto" === ft(t)) return [];
            var e = Pt(t);
            return [jt(t), e, jt(e)]
          }(g) : [Pt(g)]), b = [g].concat(y).reduce((function (t, i) {
            return t.concat("auto" === ft(i) ? function (t, e) {
              void 0 === e && (e = {});
              var i = e,
                n = i.placement,
                o = i.boundary,
                s = i.rootBoundary,
                r = i.padding,
                a = i.flipVariations,
                l = i.allowedAutoPlacements,
                c = void 0 === l ? at : l,
                d = Bt(n),
                u = d ? a ? rt : rt.filter((function (t) {
                  return Bt(t) === d
                })) : st,
                h = u.filter((function (t) {
                  return c.indexOf(t) >= 0
                }));
              0 === h.length && (h = u);
              var p = h.reduce((function (e, i) {
                return e[i] = Yt(t, {
                  placement: i,
                  boundary: o,
                  rootBoundary: s,
                  padding: r
                })[ft(i)], e
              }), {});
              return Object.keys(p).sort((function (t, e) {
                return p[t] - p[e]
              }))
            }(e, {
              placement: i,
              boundary: d,
              rootBoundary: u,
              padding: c,
              flipVariations: f,
              allowedAutoPlacements: m
            }) : i)
          }), []), _ = e.rects.reference, w = e.rects.popper, k = new Map, x = !0, T = b[0], S = 0; S < b.length; S++) {
          var E = b[S],
            C = ft(E),
            A = "start" === Bt(E),
            I = [et, it].indexOf(C) >= 0,
            O = I ? "width" : "height",
            L = Yt(e, {
              placement: E,
              boundary: d,
              rootBoundary: u,
              altBoundary: h,
              padding: c
            }),
            z = I ? A ? nt : ot : A ? it : et;
          _[O] > w[O] && (z = Pt(z));
          var M = Pt(z),
            P = [];
          if (s && P.push(L[C] <= 0), a && P.push(L[z] <= 0, L[M] <= 0), P.every((function (t) {
              return t
            }))) {
            T = E, x = !1;
            break
          }
          k.set(E, P)
        }
        if (x)
          for (var D = function (t) {
              var e = b.find((function (e) {
                var i = k.get(e);
                if (i) return i.slice(0, t).every((function (t) {
                  return t
                }))
              }));
              if (e) return T = e, "break"
            }, j = f ? 3 : 1; j > 0 && "break" !== D(j); j--);
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function Qt(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    }
  }

  function Xt(t) {
    return [et, nt, it, ot].some((function (e) {
      return t[e] >= 0
    }))
  }
  var Kt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          o = e.rects.popper,
          s = e.modifiersData.preventOverflow,
          r = Yt(e, {
            elementContext: "reference"
          }),
          a = Yt(e, {
            altBoundary: !0
          }),
          l = Qt(r, n),
          c = Qt(a, o, s),
          d = Xt(l),
          u = Xt(c);
        e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: d,
          hasPopperEscaped: u
        }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-reference-hidden": d,
          "data-popper-escaped": u
        })
      }
    },
    Gt = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          o = i.offset,
          s = void 0 === o ? [0, 0] : o,
          r = at.reduce((function (t, i) {
            return t[i] = function (t, e, i) {
              var n = ft(t),
                o = [ot, et].indexOf(n) >= 0 ? -1 : 1,
                s = "function" == typeof i ? i(Object.assign(Object.assign({}, e), {}, {
                  placement: t
                })) : i,
                r = s[0],
                a = s[1];
              return r = r || 0, a = (a || 0) * o, [ot, nt].indexOf(n) >= 0 ? {
                x: a,
                y: r
              } : {
                x: r,
                y: a
              }
            }(i, e.rects, s), t
          }), {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
      }
    },
    Jt = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Ut({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        })
      },
      data: {}
    },
    Zt = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          o = i.mainAxis,
          s = void 0 === o || o,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          d = i.altBoundary,
          u = i.padding,
          h = i.tether,
          p = void 0 === h || h,
          f = i.tetherOffset,
          m = void 0 === f ? 0 : f,
          g = Yt(e, {
            boundary: l,
            rootBoundary: c,
            padding: u,
            altBoundary: d
          }),
          v = ft(e.placement),
          y = Bt(e.placement),
          b = !y,
          _ = xt(v),
          w = "x" === _ ? "y" : "x",
          k = e.modifiersData.popperOffsets,
          x = e.rects.reference,
          T = e.rects.popper,
          S = "function" == typeof m ? m(Object.assign(Object.assign({}, e.rects), {}, {
            placement: e.placement
          })) : m,
          E = {
            x: 0,
            y: 0
          };
        if (k) {
          if (s) {
            var C = "y" === _ ? et : ot,
              A = "y" === _ ? it : nt,
              I = "y" === _ ? "height" : "width",
              O = k[_],
              L = k[_] + g[C],
              z = k[_] - g[A],
              M = p ? -T[I] / 2 : 0,
              P = "start" === y ? x[I] : T[I],
              D = "start" === y ? -T[I] : -x[I],
              j = e.elements.arrow,
              $ = p && j ? mt(j) : {
                width: 0,
                height: 0
              },
              H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              W = H[C],
              N = H[A],
              F = Tt(0, x[I], $[I]),
              R = b ? x[I] / 2 - M - F - W - S : P - F - W - S,
              q = b ? -x[I] / 2 + M + F + N + S : D + F + N + S,
              B = e.elements.arrow && kt(e.elements.arrow),
              U = B ? "y" === _ ? B.clientTop || 0 : B.clientLeft || 0 : 0,
              Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][_] : 0,
              V = k[_] + R - Y - U,
              Q = k[_] + q - Y,
              X = Tt(p ? Math.min(L, V) : L, O, p ? Math.max(z, Q) : z);
            k[_] = X, E[_] = X - O
          }
          if (a) {
            var K = "x" === _ ? et : ot,
              G = "x" === _ ? it : nt,
              J = k[w],
              Z = Tt(J + g[K], J, J - g[G]);
            k[w] = Z, E[w] = Z - J
          }
          e.modifiersData[n] = E
        }
      },
      requiresIfExists: ["offset"]
    };

  function te(t, e, i) {
    void 0 === i && (i = !1);
    var n, o, s = bt(e),
      r = $t(t),
      a = ht(e),
      l = {
        scrollLeft: 0,
        scrollTop: 0
      },
      c = {
        x: 0,
        y: 0
      };
    return (a || !a && !i) && (("body" !== ct(e) || Nt(s)) && (l = (n = e) !== dt(n) && ht(n) ? {
      scrollLeft: (o = n).scrollLeft,
      scrollTop: o.scrollTop
    } : Ht(n)), ht(e) ? ((c = $t(e)).x += e.clientLeft, c.y += e.clientTop) : s && (c.x = Wt(s))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    }
  }
  var ee = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function ie() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some((function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    }))
  }

  function ne(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      o = e.defaultOptions,
      s = void 0 === o ? ee : o;
    return function (t, e, i) {
      void 0 === i && (i = s);
      var o, r, a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign(Object.assign({}, ee), s),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        d = {
          state: a,
          setOptions: function (i) {
            u(), a.options = Object.assign(Object.assign(Object.assign({}, s), a.options), i), a.scrollParents = {
              reference: ut(t) ? Ft(t) : t.contextElement ? Ft(t.contextElement) : [],
              popper: Ft(e)
            };
            var o, r, c = function (t) {
              var e = function (t) {
                var e = new Map,
                  i = new Set,
                  n = [];
                return t.forEach((function (t) {
                  e.set(t.name, t)
                })), t.forEach((function (t) {
                  i.has(t.name) || function t(o) {
                    i.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (n) {
                      if (!i.has(n)) {
                        var o = e.get(n);
                        o && t(o)
                      }
                    })), n.push(o)
                  }(t)
                })), n
              }(t);
              return lt.reduce((function (t, i) {
                return t.concat(e.filter((function (t) {
                  return t.phase === i
                })))
              }), [])
            }((o = [].concat(n, a.options.modifiers), r = o.reduce((function (t, e) {
              var i = t[e.name];
              return t[e.name] = i ? Object.assign(Object.assign(Object.assign({}, i), e), {}, {
                options: Object.assign(Object.assign({}, i.options), e.options),
                data: Object.assign(Object.assign({}, i.data), e.data)
              }) : e, t
            }), {}), Object.keys(r).map((function (t) {
              return r[t]
            }))));
            return a.orderedModifiers = c.filter((function (t) {
              return t.enabled
            })), a.orderedModifiers.forEach((function (t) {
              var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                o = t.effect;
              if ("function" == typeof o) {
                var s = o({
                  state: a,
                  name: e,
                  instance: d,
                  options: n
                });
                l.push(s || function () {})
              }
            })), d.update()
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (ie(e, i)) {
                a.rects = {
                  reference: te(e, kt(i), "fixed" === a.options.strategy),
                  popper: mt(i)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data)
                }));
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var o = a.orderedModifiers[n],
                      s = o.fn,
                      r = o.options,
                      l = void 0 === r ? {} : r,
                      u = o.name;
                    "function" == typeof s && (a = s({
                      state: a,
                      options: l,
                      name: u,
                      instance: d
                    }) || a)
                  } else a.reset = !1, n = -1
              }
            }
          },
          update: (o = function () {
            return new Promise((function (t) {
              d.forceUpdate(), t(a)
            }))
          }, function () {
            return r || (r = new Promise((function (t) {
              Promise.resolve().then((function () {
                r = void 0, t(o())
              }))
            }))), r
          }),
          destroy: function () {
            u(), c = !0
          }
        };
      if (!ie(t, e)) return d;

      function u() {
        l.forEach((function (t) {
          return t()
        })), l = []
      }
      return d.setOptions(i).then((function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t)
      })), d
    }
  }
  var oe = ne(),
    se = ne({
      defaultModifiers: [zt, Jt, Ot, pt]
    }),
    re = ne({
      defaultModifiers: [zt, Jt, Ot, pt, Gt, Vt, Zt, Ct, Kt]
    }),
    ae = Object.freeze({
      __proto__: null,
      popperGenerator: ne,
      detectOverflow: Yt,
      createPopperBase: oe,
      createPopper: re,
      createPopperLite: se,
      top: et,
      bottom: it,
      right: nt,
      left: ot,
      auto: "auto",
      basePlacements: st,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: rt,
      placements: at,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: lt,
      applyStyles: pt,
      arrow: Ct,
      computeStyles: Ot,
      eventListeners: zt,
      flip: Vt,
      hide: Kt,
      offset: Gt,
      popperOffsets: Jt,
      preventOverflow: Zt
    }),
    le = "dropdown",
    ce = new RegExp("ArrowUp|ArrowDown|Escape"),
    de = _ ? "top-end" : "top-start",
    ue = _ ? "top-start" : "top-end",
    he = _ ? "bottom-end" : "bottom-start",
    pe = _ ? "bottom-start" : "bottom-end",
    fe = _ ? "left-start" : "right-start",
    me = _ ? "right-start" : "left-start",
    ge = {
      offset: 0,
      flip: !0,
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
    ve = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
    },
    ye = function (t) {
      function o(e, i) {
        var n;
        return (n = t.call(this, e) || this)._popper = null, n._config = n._getConfig(i), n._menu = n._getMenuElement(), n._inNavbar = n._detectNavbar(), n._addEventListeners(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.toggle = function () {
        if (!this._element.disabled && !this._element.classList.contains("disabled")) {
          var t = this._element.classList.contains("show");
          o.clearMenus(), t || this.show()
        }
      }, s.show = function () {
        if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
          var t = o.getParentFromElement(this._element),
            e = {
              relatedTarget: this._element
            };
          if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
            if (!this._inNavbar) {
              if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var i = this._element;
              "parent" === this._config.reference ? i = t : h(this._config.reference) && (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])), this._popper = re(i, this._menu, this._getPopperConfig())
            }
            var n;
            "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (n = []).concat.apply(n, document.body.children).forEach((function (t) {
              return $.on(t, "mouseover", null, (function () {}))
            })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(t, "shown.bs.dropdown", e)
          }
        }
      }, s.hide = function () {
        if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
          var t = o.getParentFromElement(this._element),
            e = {
              relatedTarget: this._element
            };
          $.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(t, "hidden.bs.dropdown", e))
        }
      }, s.dispose = function () {
        t.prototype.dispose.call(this), $.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
      }, s.update = function () {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }, s._addEventListeners = function () {
        var t = this;
        $.on(this._element, "click.bs.dropdown", (function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        }))
      }, s._getConfig = function (t) {
        return t = i({}, this.constructor.Default, B.getDataAttributes(this._element), t), f(le, t, this.constructor.DefaultType), t
      }, s._getMenuElement = function () {
        return U.next(this._element, ".dropdown-menu")[0]
      }, s._getPlacement = function () {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return fe;
        if (t.classList.contains("dropstart")) return me;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ue : de : e ? pe : he
      }, s._detectNavbar = function () {
        return null !== this._element.closest(".navbar")
      }, s._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              altBoundary: this._config.flip,
              rootBoundary: this._config.boundary
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), i({}, t, this._config.popperConfig)
      }, o.dropdownInterface = function (t, e) {
        var i = x(t, "bs.dropdown");
        if (i || (i = new o(t, "object" == typeof e ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
          i[e]()
        }
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          o.dropdownInterface(this, t)
        }))
      }, o.clearMenus = function (t) {
        if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
          for (var e = U.find('[data-bs-toggle="dropdown"]'), i = 0, n = e.length; i < n; i++) {
            var s = o.getParentFromElement(e[i]),
              r = x(e[i], "bs.dropdown"),
              a = {
                relatedTarget: e[i]
              };
            if (t && "click" === t.type && (a.clickEvent = t), r) {
              var l, c = r._menu;
              if (e[i].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && c.contains(t.target) || $.trigger(s, "hide.bs.dropdown", a).defaultPrevented)) "ontouchstart" in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
                return $.off(t, "mouseover", null, (function () {}))
              })), e[i].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), c.classList.remove("show"), e[i].classList.remove("show"), $.trigger(s, "hidden.bs.dropdown", a)
            }
          }
      }, o.getParentFromElement = function (t) {
        return c(t) || t.parentNode
      }, o.dataApiKeydownHandler = function (t) {
        if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ce.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
          var e = o.getParentFromElement(this),
            i = this.classList.contains("show");
          if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void o.clearMenus();
          if (i && "Space" !== t.key) {
            var n = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(m);
            if (n.length) {
              var s = n.indexOf(t.target);
              "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < n.length - 1 && s++, n[s = -1 === s ? 0 : s].focus()
            }
          } else o.clearMenus()
        }
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return ge
        }
      }, {
        key: "DefaultType",
        get: function () {
          return ve
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.dropdown"
        }
      }]), o
    }(H);
  $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ye.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ye.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ye.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ye.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
    t.preventDefault(), t.stopPropagation(), ye.dropdownInterface(this, "toggle")
  })), $.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
    return t.stopPropagation()
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn[le];
      t.fn[le] = ye.jQueryInterface, t.fn[le].Constructor = ye, t.fn[le].noConflict = function () {
        return t.fn[le] = e, ye.jQueryInterface
      }
    }
  }));
  var be = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
    _e = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
    we = function (t) {
      function o(e, i) {
        var n;
        return (n = t.call(this, e) || this)._config = n._getConfig(i), n._dialog = U.findOne(".modal-dialog", e), n._backdrop = null, n._isShown = !1, n._isBodyOverflowing = !1, n._ignoreBackdropClick = !1, n._isTransitioning = !1, n._scrollbarWidth = 0, n
      }
      n(o, t);
      var s = o.prototype;
      return s.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t)
      }, s.show = function (t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          this._element.classList.contains("fade") && (this._isTransitioning = !0);
          var i = $.trigger(this._element, "show.bs.modal", {
            relatedTarget: t
          });
          this._isShown || i.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function (t) {
            return e.hide(t)
          })), $.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
            $.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
              t.target === e._element && (e._ignoreBackdropClick = !0)
            }))
          })), this._showBackdrop((function () {
            return e._showElement(t)
          })))
        }
      }, s.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !$.trigger(this._element, "hide.bs.modal").defaultPrevented) {
          this._isShown = !1;
          var i = this._element.classList.contains("fade");
          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), i) {
            var n = d(this._element);
            $.one(this._element, "transitionend", (function (t) {
              return e._hideModal(t)
            })), p(this._element, n)
          } else this._hideModal()
        }
      }, s.dispose = function () {
        [window, this._element, this._dialog].forEach((function (t) {
          return $.off(t, ".bs.modal")
        })), t.prototype.dispose.call(this), $.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
      }, s.handleUpdate = function () {
        this._adjustDialog()
      }, s._getConfig = function (t) {
        return t = i({}, be, t), f("modal", t, _e), t
      }, s._showElement = function (t) {
        var e = this,
          i = this._element.classList.contains("fade"),
          n = U.findOne(".modal-body", this._dialog);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && v(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
        var o = function () {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, $.trigger(e._element, "shown.bs.modal", {
            relatedTarget: t
          })
        };
        if (i) {
          var s = d(this._dialog);
          $.one(this._dialog, "transitionend", o), p(this._dialog, s)
        } else o()
      }, s._enforceFocus = function () {
        var t = this;
        $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", (function (e) {
          document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
        }))
      }, s._setEscapeEvent = function () {
        var t = this;
        this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
          t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
        })) : $.off(this._element, "keydown.dismiss.bs.modal")
      }, s._setResizeEvent = function () {
        var t = this;
        this._isShown ? $.on(window, "resize.bs.modal", (function () {
          return t._adjustDialog()
        })) : $.off(window, "resize.bs.modal")
      }, s._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
          document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), $.trigger(t._element, "hidden.bs.modal")
        }))
      }, s._removeBackdrop = function () {
        this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
      }, s._showBackdrop = function (t) {
        var e = this,
          i = this._element.classList.contains("fade") ? "fade" : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), document.body.appendChild(this._backdrop), $.on(this._element, "click.dismiss.bs.modal", (function (t) {
              e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
            })), i && v(this._backdrop), this._backdrop.classList.add("show"), !i) return void t();
          var n = d(this._backdrop);
          $.one(this._backdrop, "transitionend", t), p(this._backdrop, n)
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");
          var o = function () {
            e._removeBackdrop(), t()
          };
          if (this._element.classList.contains("fade")) {
            var s = d(this._backdrop);
            $.one(this._backdrop, "transitionend", o), p(this._backdrop, s)
          } else o()
        } else t()
      }, s._triggerBackdropTransition = function () {
        var t = this;
        if (!$.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
          var i = d(this._dialog);
          $.off(this._element, "transitionend"), $.one(this._element, "transitionend", (function () {
            t._element.classList.remove("modal-static"), e || ($.one(t._element, "transitionend", (function () {
              t._element.style.overflowY = ""
            })), p(t._element, i))
          })), p(this._element, i), this._element.focus()
        }
      }, s._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        (!this._isBodyOverflowing && t && !_ || this._isBodyOverflowing && !t && _) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !_ || !this._isBodyOverflowing && t && _) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, s._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, s._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, s._setScrollbar = function () {
        var t = this;
        if (this._isBodyOverflowing) {
          U.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (e) {
            var i = e.style.paddingRight,
              n = window.getComputedStyle(e)["padding-right"];
            B.setDataAttribute(e, "padding-right", i), e.style.paddingRight = Number.parseFloat(n) + t._scrollbarWidth + "px"
          })), U.find(".sticky-top").forEach((function (e) {
            var i = e.style.marginRight,
              n = window.getComputedStyle(e)["margin-right"];
            B.setDataAttribute(e, "margin-right", i), e.style.marginRight = Number.parseFloat(n) - t._scrollbarWidth + "px"
          }));
          var e = document.body.style.paddingRight,
            i = window.getComputedStyle(document.body)["padding-right"];
          B.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(i) + this._scrollbarWidth + "px"
        }
        document.body.classList.add("modal-open")
      }, s._resetScrollbar = function () {
        U.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (t) {
          var e = B.getDataAttribute(t, "padding-right");
          void 0 !== e && (B.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
        })), U.find(".sticky-top").forEach((function (t) {
          var e = B.getDataAttribute(t, "margin-right");
          void 0 !== e && (B.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
        }));
        var t = B.getDataAttribute(document.body, "padding-right");
        void 0 === t ? document.body.style.paddingRight = "" : (B.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
      }, s._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e
      }, o.jQueryInterface = function (t, e) {
        return this.each((function () {
          var n = x(this, "bs.modal"),
            s = i({}, be, B.getDataAttributes(this), "object" == typeof t && t ? t : {});
          if (n || (n = new o(this, s)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
            n[t](e)
          }
        }))
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return be
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.modal"
        }
      }]), o
    }(H);
  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
    var e = this,
      n = c(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), $.one(n, "show.bs.modal", (function (t) {
      t.defaultPrevented || $.one(n, "hidden.bs.modal", (function () {
        m(e) && e.focus()
      }))
    }));
    var o = x(n, "bs.modal");
    if (!o) {
      var s = i({}, B.getDataAttributes(n), B.getDataAttributes(this));
      o = new we(n, s)
    }
    o.show(this)
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn.modal;
      t.fn.modal = we.jQueryInterface, t.fn.modal.Constructor = we, t.fn.modal.noConflict = function () {
        return t.fn.modal = e, we.jQueryInterface
      }
    }
  }));
  var ke = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function Se(t, e, i) {
    var n;
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    for (var o = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), r = (n = []).concat.apply(n, o.body.querySelectorAll("*")), a = function (t, i) {
        var n, o = r[t],
          a = o.nodeName.toLowerCase();
        if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
        var l = (n = []).concat.apply(n, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
        l.forEach((function (t) {
          (function (t, e) {
            var i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !ke.has(i) || Boolean(t.nodeValue.match(xe) || t.nodeValue.match(Te));
            for (var n = e.filter((function (t) {
                return t instanceof RegExp
              })), o = 0, s = n.length; o < s; o++)
              if (i.match(n[o])) return !0;
            return !1
          })(t, c) || o.removeAttribute(t.nodeName)
        }))
      }, l = 0, c = r.length; l < c; l++) a(l);
    return o.body.innerHTML
  }
  var Ee = "tooltip",
    Ce = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Ae = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ie = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "(null|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object)"
    },
    Oe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: _ ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: _ ? "right" : "left"
    },
    Le = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      container: !1,
      fallbackPlacements: null,
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
    ze = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    Me = function (t) {
      function o(e, i) {
        var n;
        if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        return (n = t.call(this, e) || this)._isEnabled = !0, n._timeout = 0, n._hoverState = "", n._activeTrigger = {}, n._popper = null, n.config = n._getConfig(i), n.tip = null, n._setListeners(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.enable = function () {
        this._isEnabled = !0
      }, s.disable = function () {
        this._isEnabled = !1
      }, s.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, s.toggle = function (t) {
        if (this._isEnabled)
          if (t) {
            var e = this.constructor.DATA_KEY,
              i = x(t.delegateTarget, e);
            i || (i = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
          } else {
            if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
            this._enter(null, this)
          }
      }, s.dispose = function () {
        clearTimeout(this._timeout), $.off(this._element, this.constructor.EVENT_KEY), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this)
      }, s.show = function () {
        var t = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (this.isWithContent() && this._isEnabled) {
          var e = $.trigger(this._element, this.constructor.Event.SHOW),
            i = function t(e) {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                var i = e.getRootNode();
                return i instanceof ShadowRoot ? i : null
              }
              return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
            }(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
          if (e.defaultPrevented || !n) return;
          var o = this.getTipElement(),
            s = r(this.constructor.NAME);
          o.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o.classList.add("fade");
          var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
            l = this._getAttachment(a);
          this._addAttachmentClass(l);
          var c = this._getContainer();
          k(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED), this._popper = re(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
          var u, h, f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
          f && (u = o.classList).add.apply(u, f.split(" ")), "ontouchstart" in document.documentElement && (h = []).concat.apply(h, document.body.children).forEach((function (t) {
            $.on(t, "mouseover", (function () {}))
          }));
          var m = function () {
            var e = t._hoverState;
            t._hoverState = null, $.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
          };
          if (this.tip.classList.contains("fade")) {
            var g = d(this.tip);
            $.one(this.tip, "transitionend", m), p(this.tip, g)
          } else m()
        }
      }, s.hide = function () {
        var t = this;
        if (this._popper) {
          var e = this.getTipElement(),
            i = function () {
              "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), $.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
            };
          if (!$.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
            var n;
            if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (n = []).concat.apply(n, document.body.children).forEach((function (t) {
                return $.off(t, "mouseover", g)
              })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
              var o = d(e);
              $.one(e, "transitionend", i), p(e, o)
            } else i();
            this._hoverState = ""
          }
        }
      }, s.update = function () {
        null !== this._popper && this._popper.update()
      }, s.isWithContent = function () {
        return Boolean(this.getTitle())
      }, s.getTipElement = function () {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
      }, s.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
      }, s.setElementContent = function (t, e) {
        if (null !== t) return "object" == typeof e && h(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
      }, s.getTitle = function () {
        var t = this._element.getAttribute("data-bs-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
      }, s.updateAttachment = function (t) {
        return "right" === t ? "end" : "left" === t ? "start" : t
      }, s._getPopperConfig = function (t) {
        var e = this,
          n = {
            name: "flip",
            options: {
              altBoundary: !0
            }
          };
        return this.config.fallbackPlacements && (n.options.fallbackPlacements = this.config.fallbackPlacements), i({}, {
          placement: t,
          modifiers: [n, {
            name: "preventOverflow",
            options: {
              rootBoundary: this.config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: "." + this.constructor.NAME + "-arrow"
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function (t) {
              return e._handlePopperPlacementChange(t)
            }
          }],
          onFirstUpdate: function (t) {
            t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
          }
        }, this.config.popperConfig)
      }, s._addAttachmentClass = function (t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
      }, s._getContainer = function () {
        return !1 === this.config.container ? document.body : h(this.config.container) ? this.config.container : U.findOne(this.config.container)
      }, s._getAttachment = function (t) {
        return Oe[t.toUpperCase()]
      }, s._setListeners = function () {
        var t = this;
        this.config.trigger.split(" ").forEach((function (e) {
          if ("click" === e) $.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
            return t.toggle(e)
          }));
          else if ("manual" !== e) {
            var i = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              n = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
            $.on(t._element, i, t.config.selector, (function (e) {
              return t._enter(e)
            })), $.on(t._element, n, t.config.selector, (function (e) {
              return t._leave(e)
            }))
          }
        })), this._hideModalHandler = function () {
          t._element && t.hide()
        }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = i({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, s._fixTitle = function () {
        var t = this._element.getAttribute("title"),
          e = typeof this._element.getAttribute("data-bs-original-title");
        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
      }, s._enter = function (t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, i, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
          "show" === e._hoverState && e.show()
        }), e.config.delay.show) : e.show())
      }, s._leave = function (t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, i, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
          "out" === e._hoverState && e.hide()
        }), e.config.delay.hide) : e.hide())
      }, s._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, s._getConfig = function (t) {
        var e = B.getDataAttributes(this._element);
        return Object.keys(e).forEach((function (t) {
          Ae.has(t) && delete e[t]
        })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = i({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), f(Ee, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t
      }, s._getDelegateConfig = function () {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, s._cleanTipClass = function () {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ce);
        null !== e && e.length > 0 && e.map((function (t) {
          return t.trim()
        })).forEach((function (e) {
          return t.classList.remove(e)
        }))
      }, s._handlePopperPlacementChange = function (t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.tooltip"),
            i = "object" == typeof t && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        }))
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return Le
        }
      }, {
        key: "NAME",
        get: function () {
          return Ee
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.tooltip"
        }
      }, {
        key: "Event",
        get: function () {
          return ze
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.tooltip"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Ie
        }
      }]), o
    }(H);
  b((function () {
    var t = y();
    if (t) {
      var e = t.fn[Ee];
      t.fn[Ee] = Me.jQueryInterface, t.fn[Ee].Constructor = Me, t.fn[Ee].noConflict = function () {
        return t.fn[Ee] = e, Me.jQueryInterface
      }
    }
  }));
  var Pe = "popover",
    De = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    je = i({}, Me.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    $e = i({}, Me.DefaultType, {
      content: "(string|element|function)"
    }),
    He = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
    We = function (t) {
      function i() {
        return t.apply(this, arguments) || this
      }
      n(i, t);
      var o = i.prototype;
      return o.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, o.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".popover-header", t), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
      }, o._addAttachmentClass = function (t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
      }, o._getContent = function () {
        return this._element.getAttribute("data-bs-content") || this.config.content
      }, o._cleanTipClass = function () {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(De);
        null !== e && e.length > 0 && e.map((function (t) {
          return t.trim()
        })).forEach((function (e) {
          return t.classList.remove(e)
        }))
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.popover"),
            n = "object" == typeof t ? t : null;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), k(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        }))
      }, e(i, null, [{
        key: "Default",
        get: function () {
          return je
        }
      }, {
        key: "NAME",
        get: function () {
          return Pe
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.popover"
        }
      }, {
        key: "Event",
        get: function () {
          return He
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.popover"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return $e
        }
      }]), i
    }(Me);
  b((function () {
    var t = y();
    if (t) {
      var e = t.fn[Pe];
      t.fn[Pe] = We.jQueryInterface, t.fn[Pe].Constructor = We, t.fn[Pe].noConflict = function () {
        return t.fn[Pe] = e, We.jQueryInterface
      }
    }
  }));
  var Ne = "scrollspy",
    Fe = {
      offset: 10,
      method: "auto",
      target: ""
    },
    Re = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    qe = function (t) {
      function o(e, i) {
        var n;
        return (n = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, n._config = n._getConfig(i), n._selector = n._config.target + " .nav-link, " + n._config.target + " .list-group-item, " + n._config.target + " .dropdown-item", n._offsets = [], n._targets = [], n._activeTarget = null, n._scrollHeight = 0, $.on(n._scrollElement, "scroll.bs.scrollspy", (function (t) {
          return n._process(t)
        })), n.refresh(), n._process(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.refresh = function () {
        var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          i = "auto" === this._config.method ? e : this._config.method,
          n = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map((function (t) {
          var e = l(t),
            o = e ? U.findOne(e) : null;
          if (o) {
            var s = o.getBoundingClientRect();
            if (s.width || s.height) return [B[i](o).top + n, e]
          }
          return null
        })).filter((function (t) {
          return t
        })).sort((function (t, e) {
          return t[0] - e[0]
        })).forEach((function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        }))
      }, s.dispose = function () {
        t.prototype.dispose.call(this), $.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, s._getConfig = function (t) {
        if ("string" != typeof (t = i({}, Fe, "object" == typeof t && t ? t : {})).target && h(t.target)) {
          var e = t.target.id;
          e || (e = r(Ne), t.target.id = e), t.target = "#" + e
        }
        return f(Ne, t, Re), t
      }, s._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, s._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, s._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, s._process = function () {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var n = this._targets[this._targets.length - 1];
          this._activeTarget !== n && this._activate(n)
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
        }
      }, s._activate = function (t) {
        this._activeTarget = t, this._clear();
        var e = this._selector.split(",").map((function (e) {
            return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
          })),
          i = U.findOne(e.join(","));
        i.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), U.parents(i, ".nav, .list-group").forEach((function (t) {
          U.prev(t, ".nav-link, .list-group-item").forEach((function (t) {
            return t.classList.add("active")
          })), U.prev(t, ".nav-item").forEach((function (t) {
            U.children(t, ".nav-link").forEach((function (t) {
              return t.classList.add("active")
            }))
          }))
        }))), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        })
      }, s._clear = function () {
        U.find(this._selector).filter((function (t) {
          return t.classList.contains("active")
        })).forEach((function (t) {
          return t.classList.remove("active")
        }))
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.scrollspy");
          if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        }))
      }, e(o, null, [{
        key: "Default",
        get: function () {
          return Fe
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.scrollspy"
        }
      }]), o
    }(H);
  $.on(window, "load.bs.scrollspy.data-api", (function () {
    U.find('[data-bs-spy="scroll"]').forEach((function (t) {
      return new qe(t, B.getDataAttributes(t))
    }))
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn[Ne];
      t.fn[Ne] = qe.jQueryInterface, t.fn[Ne].Constructor = qe, t.fn[Ne].noConflict = function () {
        return t.fn[Ne] = e, qe.jQueryInterface
      }
    }
  }));
  var Be = function (t) {
    function i() {
      return t.apply(this, arguments) || this
    }
    n(i, t);
    var o = i.prototype;
    return o.show = function () {
      var t = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
        var e, i = c(this._element),
          n = this._element.closest(".nav, .list-group");
        if (n) {
          var o = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
          e = (e = U.find(o, n))[e.length - 1]
        }
        var s = null;
        if (e && (s = $.trigger(e, "hide.bs.tab", {
            relatedTarget: this._element
          })), !($.trigger(this._element, "show.bs.tab", {
            relatedTarget: e
          }).defaultPrevented || null !== s && s.defaultPrevented)) {
          this._activate(this._element, n);
          var r = function () {
            $.trigger(e, "hidden.bs.tab", {
              relatedTarget: t._element
            }), $.trigger(t._element, "shown.bs.tab", {
              relatedTarget: e
            })
          };
          i ? this._activate(i, i.parentNode, r) : r()
        }
      }
    }, o._activate = function (t, e, i) {
      var n = this,
        o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
        s = i && o && o.classList.contains("fade"),
        r = function () {
          return n._transitionComplete(t, o, i)
        };
      if (o && s) {
        var a = d(o);
        o.classList.remove("show"), $.one(o, "transitionend", r), p(o, a)
      } else r()
    }, o._transitionComplete = function (t, e, i) {
      if (e) {
        e.classList.remove("active");
        var n = U.findOne(":scope > .dropdown-menu .active", e.parentNode);
        n && n.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
      }
      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && U.find(".dropdown-toggle").forEach((function (t) {
        return t.classList.add("active")
      })), t.setAttribute("aria-expanded", !0)), i && i()
    }, i.jQueryInterface = function (t) {
      return this.each((function () {
        var e = x(this, "bs.tab") || new i(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]()
        }
      }))
    }, e(i, null, [{
      key: "DATA_KEY",
      get: function () {
        return "bs.tab"
      }
    }]), i
  }(H);
  $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
    t.preventDefault(), (x(this, "bs.tab") || new Be(this)).show()
  })), b((function () {
    var t = y();
    if (t) {
      var e = t.fn.tab;
      t.fn.tab = Be.jQueryInterface, t.fn.tab.Constructor = Be, t.fn.tab.noConflict = function () {
        return t.fn.tab = e, Be.jQueryInterface
      }
    }
  }));
  var Ue = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    Ye = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    },
    Ve = function (t) {
      function o(e, i) {
        var n;
        return (n = t.call(this, e) || this)._config = n._getConfig(i), n._timeout = null, n._setListeners(), n
      }
      n(o, t);
      var s = o.prototype;
      return s.show = function () {
        var t = this;
        if (!$.trigger(this._element, "show.bs.toast").defaultPrevented) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
          var e = function () {
            t._element.classList.remove("showing"), t._element.classList.add("show"), $.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
              t.hide()
            }), t._config.delay))
          };
          if (this._element.classList.remove("hide"), v(this._element), this._element.classList.add("showing"), this._config.animation) {
            var i = d(this._element);
            $.one(this._element, "transitionend", e), p(this._element, i)
          } else e()
        }
      }, s.hide = function () {
        var t = this;
        if (this._element.classList.contains("show") && !$.trigger(this._element, "hide.bs.toast").defaultPrevented) {
          var e = function () {
            t._element.classList.add("hide"), $.trigger(t._element, "hidden.bs.toast")
          };
          if (this._element.classList.remove("show"), this._config.animation) {
            var i = d(this._element);
            $.one(this._element, "transitionend", e), p(this._element, i)
          } else e()
        }
      }, s.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
      }, s._getConfig = function (t) {
        return t = i({}, Ye, B.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), f("toast", t, this.constructor.DefaultType), t
      }, s._setListeners = function () {
        var t = this;
        $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function () {
          return t.hide()
        }))
      }, s._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null
      }, o.jQueryInterface = function (t) {
        return this.each((function () {
          var e = x(this, "bs.toast");
          if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t](this)
          }
        }))
      }, e(o, null, [{
        key: "DefaultType",
        get: function () {
          return Ue
        }
      }, {
        key: "Default",
        get: function () {
          return Ye
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.toast"
        }
      }]), o
    }(H);
  return b((function () {
    var t = y();
    if (t) {
      var e = t.fn.toast;
      t.fn.toast = Ve.jQueryInterface, t.fn.toast.Constructor = Ve, t.fn.toast.noConflict = function () {
        return t.fn.toast = e, Ve.jQueryInterface
      }
    }
  })), {
    Alert: N,
    Button: F,
    Carousel: K,
    Collapse: tt,
    Dropdown: ye,
    Modal: we,
    Popover: We,
    ScrollSpy: qe,
    Tab: Be,
    Toast: Ve,
    Tooltip: Me
  }
})),
function (t) {
  if ("function" == typeof define && define.amd) define(["jquery"], t);
  else if ("object" == typeof module && module.exports) {
    var e = require("jquery");
    t(e), module.exports = e
  } else t(jQuery)
}((function (t) {
  function e(t) {
    this.init(t)
  }
  e.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: {
      gradient: ["#3aeabb", "#fdd250"]
    },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: {
      duration: 1200,
      easing: "circleProgressEasing"
    },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: e,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (e) {
      t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited")
    },
    initWidget: function () {
      this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
      var e = this.canvas;
      if (e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d"), window.devicePixelRatio > 1) {
        var i = window.devicePixelRatio;
        e.style.width = e.style.height = this.size + "px", e.width = e.height = this.size * i, this.ctx.scale(i, i)
      }
    },
    initFill: function () {
      var e, i = this,
        n = this.fill,
        o = this.ctx,
        s = this.size;
      if (!n) throw Error("The fill is not specified!");
      if ("string" == typeof n && (n = {
          color: n
        }), n.color && (this.arcFill = n.color), n.gradient) {
        var r = n.gradient;
        if (1 == r.length) this.arcFill = r[0];
        else if (r.length > 1) {
          for (var a = n.gradientAngle || 0, l = n.gradientDirection || [s / 2 * (1 - Math.cos(a)), s / 2 * (1 + Math.sin(a)), s / 2 * (1 + Math.cos(a)), s / 2 * (1 - Math.sin(a))], c = o.createLinearGradient.apply(o, l), d = 0; d < r.length; d++) {
            var u = r[d],
              h = d / (r.length - 1);
            t.isArray(u) && (h = u[1], u = u[0]), c.addColorStop(h, u)
          }
          this.arcFill = c
        }
      }

      function p() {
        var n = t("<canvas>")[0];
        n.width = i.size, n.height = i.size, n.getContext("2d").drawImage(e, 0, 0, s, s), i.arcFill = i.ctx.createPattern(n, "no-repeat"), i.drawFrame(i.lastFrameValue)
      }
      n.image && (n.image instanceof Image ? e = n.image : (e = new Image).src = n.image, e.complete ? p() : e.onload = p)
    },
    draw: function () {
      this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
    },
    drawFrame: function (t) {
      this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
    },
    drawArc: function (t) {
      if (0 !== t) {
        var e = this.ctx,
          i = this.radius,
          n = this.getThickness(),
          o = this.startAngle;
        e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - n / 2, o - 2 * Math.PI * t, o) : e.arc(i, i, i - n / 2, o, o + 2 * Math.PI * t), e.lineWidth = n, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
      }
    },
    drawEmptyArc: function (t) {
      var e = this.ctx,
        i = this.radius,
        n = this.getThickness(),
        o = this.startAngle;
      t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, o, o - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, o + 2 * Math.PI * t, o), e.lineWidth = n, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
    },
    drawAnimated: function (e) {
      var i = this,
        n = this.el,
        o = t(this.canvas);
      o.stop(!0, !1), n.trigger("circle-animation-start"), o.css({
        animationProgress: 0
      }).animate({
        animationProgress: 1
      }, t.extend({}, this.animation, {
        step: function (t) {
          var o = i.animationStartValue * (1 - t) + e * t;
          i.drawFrame(o), n.trigger("circle-animation-progress", [t, o])
        }
      })).promise().always((function () {
        n.trigger("circle-animation-end")
      }))
    },
    getThickness: function () {
      return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
    },
    getValue: function () {
      return this.value
    },
    setValue: function (t) {
      this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw()
    }
  }, t.circleProgress = {
    defaults: e.prototype
  }, t.easing.circleProgressEasing = function (t) {
    return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t
  }, t.fn.circleProgress = function (i, n) {
    var o = "circle-progress",
      s = this.data(o);
    if ("widget" == i) {
      if (!s) throw Error('Calling "widget" method on not initialized instance is forbidden');
      return s.canvas
    }
    if ("value" == i) {
      if (!s) throw Error('Calling "value" method on not initialized instance is forbidden');
      if (void 0 === n) return s.getValue();
      var r = arguments[1];
      return this.each((function () {
        t(this).data(o).setValue(r)
      }))
    }
    return this.each((function () {
      var n = t(this),
        s = n.data(o),
        r = t.isPlainObject(i) ? i : {};
      if (s) s.init(r);
      else {
        var a = t.extend({}, n.data());
        "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), (r = t.extend(a, r)).el = n, s = new e(r), n.data(o, s)
      }
    }))
  }
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {};
      return (i[t] = i[t] || {})[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
        var s = i[o];
        n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents
  }, t
})),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function (i) {
    return e(t, i)
  })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function (t, e) {
  function i(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }

  function n(t, e, o) {
    if (!(this instanceof n)) return new n(t, e, o);
    var s, c = t;
    return "string" == typeof t && (c = document.querySelectorAll(t)), c ? (this.elements = (s = c, Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? l.call(s) : [s]), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (c || t))
  }

  function o(t) {
    this.img = t
  }

  function s(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }
  var r = t.jQuery,
    a = t.console,
    l = Array.prototype.slice;
  (n.prototype = Object.create(e.prototype)).options = {}, n.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, n.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && c[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var s = t.querySelectorAll(this.options.background);
        for (n = 0; n < s.length; n++) {
          var r = s[n];
          this.addElementBackgroundImages(r)
        }
      }
    }
  };
  var c = {
    1: !0,
    9: !0,
    11: !0
  };
  return n.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
      }
  }, n.prototype.addImage = function (t) {
    var e = new o(t);
    this.images.push(e)
  }, n.prototype.addBackground = function (t, e) {
    var i = new s(t, e);
    this.images.push(i)
  }, n.prototype.check = function () {
    function t(t, i, n) {
      setTimeout((function () {
        e.progress(t, i, n)
      }))
    }
    var e = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function (e) {
      e.once("progress", t), e.check()
    })) : void this.complete()
  }, n.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
  }, n.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this)
    }
  }, (o.prototype = Object.create(e.prototype)).check = function () {
    return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, o.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth
  }, o.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, o.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, o.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, o.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, o.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, (s.prototype = Object.create(o.prototype)).check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, n.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (t, e) {
      return new n(this, t, e).jqDeferred.promise(r(this))
    })
  }, n.makeJQueryPlugin(), n
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function (i) {
    return e(t, i)
  })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function (t, e) {
  "use strict";

  function i(i, s, a) {
    (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function (t) {
      if ("string" != typeof t) return u = t, this.each((function (t, e) {
        var n = a.data(e, i);
        n ? (n.option(u), n._init()) : (n = new s(e, u), a.data(e, i, n))
      })), this;
      var e, n, l, c, d, u, h = o.call(arguments, 1);
      return l = h, d = "$()." + i + '("' + (n = t) + '")', (e = this).each((function (t, e) {
        var o = a.data(e, i);
        if (o) {
          var s = o[n];
          if (s && "_" != n.charAt(0)) {
            var u = s.apply(o, l);
            c = void 0 === c ? u : c
          } else r(d + " is not a valid method")
        } else r(i + " not initialized. Cannot call methods, i.e. " + d)
      })), void 0 !== c ? c : e
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    s = t.console,
    r = void 0 === s ? function () {} : function (t) {
      s.error(t)
    };
  return n(e || t.jQuery), i
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {};
      return (i[t] = i[t] || {})[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
        var s = i[o];
        n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents
  }, t
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t);
    return -1 == t.indexOf("%") && !isNaN(e) && e
  }

  function e(t) {
    var e = getComputedStyle(t);
    return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }
  var i, n = "undefined" == typeof console ? function () {} : function (t) {
      console.error(t)
    },
    o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    s = o.length,
    r = !1;
  return function n(a) {
    if (function () {
        if (!r) {
          r = !0;
          var o = document.createElement("div");
          o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style.boxSizing = "border-box";
          var s = document.body || document.documentElement;
          s.appendChild(o);
          var a = e(o);
          i = 200 == Math.round(t(a.width)), n.isBoxSizeOuter = i, s.removeChild(o)
        }
      }(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
      var l = e(a);
      if ("none" == l.display) return function () {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, e = 0; e < s; e++) t[o[e]] = 0;
        return t
      }();
      var c = {};
      c.width = a.offsetWidth, c.height = a.offsetHeight;
      for (var d = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < s; u++) {
        var h = o[u],
          p = l[h],
          f = parseFloat(p);
        c[h] = isNaN(f) ? 0 : f
      }
      var m = c.paddingLeft + c.paddingRight,
        g = c.paddingTop + c.paddingBottom,
        v = c.marginLeft + c.marginRight,
        y = c.marginTop + c.marginBottom,
        b = c.borderLeftWidth + c.borderRightWidth,
        _ = c.borderTopWidth + c.borderBottomWidth,
        w = d && i,
        k = t(l.width);
      !1 !== k && (c.width = k + (w ? 0 : m + b));
      var x = t(l.height);
      return !1 !== x && (c.height = x + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c
    }
  }
})),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i] + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function (e, i) {
    return e[t](i)
  }
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function (i) {
    return e(t, i)
  })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function (t, e) {
  var i = {
      extend: function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
      },
      modulo: function (t, e) {
        return (t % e + e) % e
      }
    },
    n = Array.prototype.slice;
  i.makeArray = function (t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach((function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
      }
    })), o
  }, i.debounceMethod = function (t, e, i) {
    i = i || 100;
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[o] = setTimeout((function () {
        n.apply(s, e), delete s[o]
      }), i)
    }
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, (function (t, e, i) {
      return e + "-" + i
    })).toLowerCase()
  };
  var o = t.console;
  return i.htmlInit = function (e, n) {
    i.docReady((function () {
      var s = i.toDashed(n),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        l = document.querySelectorAll(".js-" + s),
        c = i.makeArray(a).concat(i.makeArray(l)),
        d = r + "-options",
        u = t.jQuery;
      c.forEach((function (t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (i) {
          return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + i))
        }
        var a = new e(t, i);
        u && u.data(t, n, a)
      }))
    }))
  }, i
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, (function (t, e) {
  "use strict";

  function i(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }
  var n = document.documentElement.style,
    o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
    s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
    r = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [o],
    a = {
      transform: s,
      transition: o,
      transitionDuration: o + "Duration",
      transitionProperty: o + "Property",
      transitionDelay: o + "Delay"
    },
    l = i.prototype = Object.create(t.prototype);
  l.constructor = i, l._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, l.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, l.getSize = function () {
    this.size = e(this.element)
  }, l.css = function (t) {
    var e = this.element.style;
    for (var i in t) e[a[i] || i] = t[i]
  }, l.getPosition = function () {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      s = parseFloat(n),
      r = parseFloat(o),
      a = this.layout.size; - 1 != n.indexOf("%") && (s = s / 100 * a.width), -1 != o.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, l.layoutPosition = function () {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[o];
    e[s] = this.getXValue(a), e[r] = "";
    var l = n ? "paddingTop" : "paddingBottom",
      c = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      u = this.position.y + t[l];
    e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, l.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, l.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, l._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), !o || this.isTransitioning) {
      var s = t - i,
        r = e - n,
        a = {};
      a.transform = this.getTranslate(s, r), this.transition({
        to: a,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      })
    } else this.layoutPosition()
  }, l.getTranslate = function (t, e) {
    return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
  }, l.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, l._nonTransition = function (t) {
    for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, l.transition = function (t) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var e = this._transn;
      for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
      for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
      t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    } else this._nonTransition(t)
  };
  var c = "opacity," + s.replace(/([A-Z])/g, (function (t) {
    return "-" + t.toLowerCase()
  }));
  l.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: c,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(r, this, !1)
    }
  }, l.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t)
  }, l.onotransitionend = function (t) {
    this.ontransitionend(t)
  };
  var d = {
    "-webkit-transform": "transform"
  };
  l.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
        i = d[t.propertyName] || t.propertyName;
      delete e.ingProperties[i],
        function (t) {
          for (var e in t) return !1;
          return !0
        }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
    }
  }, l.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
  }, l._removeStyles = function (t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var u = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return l.removeTransitionStyles = function () {
    this.css(u)
  }, l.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, l.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, l.remove = function () {
    return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
      this.removeElem()
    })), void this.hide()) : void this.removeElem()
  }, l.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {};
    e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, l.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, l.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, l.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {};
    e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, l.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, l.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, i
})),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function (i, n, o, s) {
    return e(t, i, n, o, s)
  })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function (t, e, i, n, o) {
  "use strict";

  function s(t, e) {
    var i = n.getQueryElement(t);
    if (i) {
      this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
      var o = ++d;
      this.element.outlayerGUID = o, (u[o] = this)._create(), this._getOption("initLayout") && this.layout()
    } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return (e.prototype = Object.create(t.prototype)).constructor = e
  }
  var a = t.console,
    l = t.jQuery,
    c = function () {},
    d = 0,
    u = {};
  s.namespace = "outlayer", s.Item = o, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var h = s.prototype;
  n.extend(h, e.prototype), h.option = function (t) {
    n.extend(this.options, t)
  }, h._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, h._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
  }, h.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, h._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var s = new i(e[o], this);
      n.push(s)
    }
    return n
  }, h._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, h.getItemElements = function () {
    return this.items.map((function (t) {
      return t.element
    }))
  }, h.layout = function () {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, h._init = h.layout, h._resetLayout = function () {
    this.getSize()
  }, h.getSize = function () {
    this.size = i(this.element)
  }, h._getMeasurement = function (t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, h.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, h._getItemsForLayout = function (t) {
    return t.filter((function (t) {
      return !t.isIgnored
    }))
  }, h._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach((function (t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }), this), this._processLayoutQueue(i)
    }
  }, h._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    }
  }, h._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach((function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }), this)
  }, h.updateStagger = function () {
    var t = this.options.stagger;
    return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
    }(t), this.stagger)
  }, h._positionItem = function (t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, h._postLayout = function () {
    this.resizeContainer()
  }, h.resizeContainer = function () {
    if (this._getOption("resizeContainer")) {
      var t = this._getContainerSize();
      t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
    }
  }, h._getContainerSize = c, h._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, h._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      ++r == s && i()
    }
    var o = this,
      s = e.length;
    if (e && s) {
      var r = 0;
      e.forEach((function (e) {
        e.once(t, n)
      }))
    } else i()
  }, h.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), l)
      if (this.$element = this.$element || l(this.element), e) {
        var o = l.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, h.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, h.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, h.stamp = function (t) {
    (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, h.unstamp = function (t) {
    (t = this._find(t)) && t.forEach((function (t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }), this)
  }, h._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
  }, h._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, h._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, h._manageStamp = c, h._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t);
    return {
      left: e.left - n.left - o.marginLeft,
      top: e.top - n.top - o.marginTop,
      right: n.right - e.right - o.marginRight,
      bottom: n.bottom - e.bottom - o.marginBottom
    }
  }, h.handleEvent = n.handleEvent, h.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, h.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, h.onresize = function () {
    this.resize()
  }, n.debounceMethod(s, "onresize", 100), h.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, h.needsResizeLayout = function () {
    var t = i(this.element);
    return this.size && t && t.innerWidth !== this.size.innerWidth
  }, h.addItems = function (t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, h.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, h.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, h.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach((function (t, i) {
        t.stagger(i * e), t.reveal()
      }))
    }
  }, h.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach((function (t, i) {
        t.stagger(i * e), t.hide()
      }))
    }
  }, h.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, h.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e)
  }, h.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, h.getItems = function (t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach((function (t) {
      var i = this.getItem(t);
      i && e.push(i)
    }), this), e
  }, h.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
      t.remove(), n.removeFrom(this.items, t)
    }), this)
  }, h.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
      t.destroy()
    })), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
  }, s.data = function (t) {
    var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
    return e && u[e]
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
  };
  var p = {
    ms: 1,
    s: 1e3
  };
  return s.Item = o, s
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, (function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    n = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var n = e[i];
        this.sortData[i] = n(this.element, this)
      }
    }
  };
  var o = i.destroy;
  return i.destroy = function () {
    o.apply(this, arguments), this.css({
      display: ""
    })
  }, e
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, (function (t, e) {
  "use strict";

  function i(t) {
    (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var n = i.prototype;
  return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function (t) {
    n[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  })), n.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element);
    return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
  }, n._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  }, n.getColumnWidth = function () {
    this.getSegmentSize("column", "Width")
  }, n.getRowHeight = function () {
    this.getSegmentSize("row", "Height")
  }, n.getSegmentSize = function (t, e) {
    var i = t + e,
      n = "outer" + e;
    if (this._getMeasurement(i, n), !this[i]) {
      var o = this.getFirstItemSize();
      this[i] = o && o[n] || this.isotope.size["inner" + e]
    }
  }, n.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, n.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  }, n.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function (t, e) {
    function o() {
      i.apply(this, arguments)
    }
    return (o.prototype = Object.create(n)).constructor = o, e && (o.options = e), i.modes[o.prototype.namespace = t] = o
  }, i
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, (function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, n.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      s = o / n,
      r = n - o % n;
    s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
  }, n.getContainerWidth = function () {
    var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
      i = e(t);
    this.containerWidth = i && i.innerWidth
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
    i = Math.min(i, this.cols);
    for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
        x: this.columnWidth * n.col,
        y: n.y
      }, s = n.y + t.size.outerHeight, r = i + n.col, a = n.col; a < r; a++) this.colYs[a] = s;
    return o
  }, n._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, n._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
    return e
  }, n._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, n._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols;
    i = 1 < t && i + t > this.cols ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, n._manageStamp = function (t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft") ? n.left : n.right,
      s = o + i.outerWidth,
      r = Math.floor(o / this.columnWidth);
    r = Math.max(0, r);
    var a = Math.floor(s / this.columnWidth);
    a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
    for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, n._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, n.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, (function (t, e) {
  "use strict";
  var i = t.create("masonry"),
    n = i.prototype,
    o = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
  var r = n.measureColumns;
  n.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = n._getOption;
  return n._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function (t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var n = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    }
  }, e
})),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function (t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function () {
    return {
      height: this.y
    }
  }, e
})),
function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function (i, n, o, s, r, a) {
    return e(t, i, n, o, s, r, a)
  })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, (function (t, e, i, n, o, s, r) {
  var a = t.jQuery,
    l = String.prototype.trim ? function (t) {
      return t.trim()
    } : function (t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    c = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  c.Item = s, c.LayoutMode = r;
  var d = c.prototype;
  d._create = function () {
    for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
  }, d.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, d._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
    return this._updateItemsSortData(t), t
  }, d._initLayoutMode = function (t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, d.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, d._layout = function () {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, d.arrange = function (t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, d._init = d.arrange, d._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, d._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e
  }, d._bindArrangeComplete = function () {
    function t() {
      e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
    }
    var e, i, n, o = this;
    this.once("layoutComplete", (function () {
      e = !0, t()
    })), this.once("hideComplete", (function () {
      i = !0, t()
    })), this.once("revealComplete", (function () {
      n = !0, t()
    }))
  }, d._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var l = s(a);
        l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
      }
    }
    return {
      matches: i,
      needReveal: n,
      needHide: o
    }
  }, d._getFilterTest = function (t) {
    return a && this.options.isJQueryFiltering ? function (e) {
      return a(e.element).is(t)
    } : "function" == typeof t ? function (e) {
      return t(e.element)
    } : function (e) {
      return n(e.element, t)
    }
  }, d.updateSortData = function (t) {
    var e;
    e = t ? (t = o.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e)
  }, d._getSorters = function () {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = u(i)
    }
  }, d._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
  };
  var u = function (t) {
    if ("string" != typeof t) return t;
    var e, i, n = l(t).split(" "),
      o = n[0],
      s = o.match(/^\[(.+)\]$/),
      r = s && s[1],
      a = (i = o, (e = r) ? function (t) {
        return t.getAttribute(e)
      } : function (t) {
        var e = t.querySelector(i);
        return e && e.textContent
      }),
      d = c.sortDataParsers[n[1]];
    return d ? function (t) {
      return t && d(a(t))
    } : function (t) {
      return t && a(t)
    }
  };
  c.sortDataParsers = {
    parseInt: function (t) {
      return parseInt(t, 10)
    },
    parseFloat: function (t) {
      return parseFloat(t)
    }
  }, d._sort = function () {
    if (this.options.sortBy) {
      var t = o.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = (i = this.sortHistory, n = this.options.sortAscending, function (t, e) {
        for (var o = 0; o < i.length; o++) {
          var s = i[o],
            r = t.sortData[s],
            a = e.sortData[s];
          if (a < r || r < a) return (a < r ? 1 : -1) * ((void 0 !== n[s] ? n[s] : n) ? 1 : -1)
        }
        return 0
      });
      this.filteredItems.sort(e)
    }
    var i, n
  }, d._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0
  }, d._mode = function () {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, d._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, d._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t)
  }, d._manageStamp = function (t) {
    this._mode()._manageStamp(t)
  }, d._getContainerSize = function () {
    return this._mode()._getContainerSize()
  }, d.needsResizeLayout = function () {
    return this._mode().needsResizeLayout()
  }, d.appended = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, d.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, d._filterRevealAdded = function (t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, d.insert = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, n, o = e.length;
      for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
      var s = this._filter(e).matches;
      for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var h = d.remove;
  return d.remove = function (t) {
    t = o.makeArray(t);
    var e = this.getItems(t);
    h.call(this, t);
    for (var i = e && e.length, n = 0; i && n < i; n++) {
      var s = e[n];
      o.removeFrom(this.filteredItems, s)
    }
  }, d.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
    this.options.sortBy = "random", this._sort(), this._layout()
  }, d._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var n = t.apply(this, e);
    return this.options.transitionDuration = i, n
  }, d.getFilteredItemElements = function () {
    return this.filteredItems.map((function (t) {
      return t.element
    }))
  }, c
})),
function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}((function (t) {
  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var e, i = 0,
    n = Array.prototype.slice;
  t.cleanData = (e = t.cleanData, function (i) {
    for (var n, o, s = 0; null != (o = i[s]); s++) try {
      (n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
    } catch (i) {}
    e(i)
  }), t.widget = function (e, i, n) {
    var o, s, r, a = {},
      l = e.split(".")[0],
      c = l + "-" + (e = e.split(".")[1]);
    return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function (e) {
      return !!t.data(e, c)
    }, t[l] = t[l] || {}, o = t[l][e], s = t[l][e] = function (t, e) {
      if (!this._createWidget) return new s(t, e);
      arguments.length && this._createWidget(t, e)
    }, t.extend(s, o, {
      version: n.version,
      _proto: t.extend({}, n),
      _childConstructors: []
    }), (r = new i).options = t.widget.extend({}, r.options), t.each(n, (function (e, n) {
      function o() {
        return i.prototype[e].apply(this, arguments)
      }

      function s(t) {
        return i.prototype[e].apply(this, t)
      }
      t.isFunction(n) ? a[e] = function () {
        var t, e = this._super,
          i = this._superApply;
        return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
      } : a[e] = n
    })), s.prototype = t.widget.extend(r, {
      widgetEventPrefix: o && r.widgetEventPrefix || e
    }, a, {
      constructor: s,
      namespace: l,
      widgetName: e,
      widgetFullName: c
    }), o ? (t.each(o._childConstructors, (function (e, i) {
      var n = i.prototype;
      t.widget(n.namespace + "." + n.widgetName, s, i._proto)
    })), delete o._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
  }, t.widget.extend = function (e) {
    for (var i, o, s = n.call(arguments, 1), r = 0, a = s.length; r < a; r++)
      for (i in s[r]) o = s[r][i], s[r].hasOwnProperty(i) && void 0 !== o && (t.isPlainObject(o) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : e[i] = o);
    return e
  }, t.widget.bridge = function (e, i) {
    var o = i.prototype.widgetFullName || e;
    t.fn[e] = function (s) {
      var r = "string" == typeof s,
        a = n.call(arguments, 1),
        l = this;
      return r ? this.length || "instance" !== s ? this.each((function () {
        var i, n = t.data(this, o);
        return "instance" === s ? (l = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
      })) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each((function () {
        var e = t.data(this, o);
        e ? (e.option(s || {}), e._init && e._init()) : t.data(this, o, new i(s, this))
      }))), l
    }
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function (e, n) {
      n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (t) {
          t.target === n && this.destroy()
        }
      }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: function () {
      return {}
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function () {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, (function (t, i) {
        e._removeClass(i, t)
      })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
    },
    _destroy: t.noop,
    widget: function () {
      return this.element
    },
    option: function (e, i) {
      var n, o, s, r = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e)
        if (r = {}, e = (n = e.split(".")).shift(), n.length) {
          for (o = r[e] = t.widget.extend({}, this.options[e]), s = 0; s < n.length - 1; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
          if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
          o[e] = i
        } else {
          if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
          r[e] = i
        } return this._setOptions(r), this
    },
    _setOptions: function (t) {
      for (var e in t) this._setOption(e, t[e]);
      return this
    },
    _setOption: function (t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
    },
    _setOptionClasses: function (e) {
      var i, n, o;
      for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (n = t(o.get()), this._removeClass(o, i), n.addClass(this._classes({
        element: n,
        keys: i,
        classes: e,
        add: !0
      })))
    },
    _setOptionDisabled: function (t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
    },
    enable: function () {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function () {
      return this._setOptions({
        disabled: !0
      })
    },
    _classes: function (e) {
      var i = [],
        n = this;

      function o(o, s) {
        for (var r, a = 0; a < o.length; a++) r = n.classesElementLookup[o[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), n.classesElementLookup[o[a]] = r, i.push(o[a]), s && e.classes[o[a]] && i.push(e.classes[o[a]])
      }
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && o(e.keys.match(/\S+/g) || [], !0), e.extra && o(e.extra.match(/\S+/g) || []), i.join(" ")
    },
    _untrackClassesElement: function (e) {
      var i = this;
      t.each(i.classesElementLookup, (function (n, o) {
        -1 !== t.inArray(e.target, o) && (i.classesElementLookup[n] = t(o.not(e.target).get()))
      }))
    },
    _removeClass: function (t, e, i) {
      return this._toggleClass(t, e, i, !1)
    },
    _addClass: function (t, e, i) {
      return this._toggleClass(t, e, i, !0)
    },
    _toggleClass: function (t, e, i, n) {
      n = "boolean" == typeof n ? n : i;
      var o = "string" == typeof t || null === t;
      return (t = {
        extra: o ? e : i,
        keys: o ? t : e,
        element: o ? this.element : t,
        add: n
      }).element.toggleClass(this._classes(t), n), this
    },
    _on: function (e, i, n) {
      var o, s = this;
      "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, (function (n, r) {
        function a() {
          if (e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? s[r] : r).apply(s, arguments)
        }
        var l;
        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++), n = (l = n.match(/^([\w:-]*)\s*(.*)$/))[1] + s.eventNamespace, (l = l[2]) ? o.on(n, l, a) : i.on(n, a)
      }))
    },
    _off: function (e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
    },
    _delay: function (t, e) {
      var i = this;
      return setTimeout((function () {
        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
      }), e || 0)
    },
    _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function (e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover")
        },
        mouseleave: function (e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover")
        }
      })
    },
    _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function (e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus")
        },
        focusout: function (e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus")
        }
      })
    },
    _trigger: function (e, i, n) {
      var o, s, r = this.options[e];
      if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
        for (o in s) o in i || (i[o] = s[o]);
      return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, (function (e, i) {
    t.Widget.prototype["_" + e] = function (n, o, s) {
      var r;
      "string" == typeof o && (o = {
        effect: o
      });
      var a = o ? !0 !== o && "number" != typeof o && o.effect || i : e;
      "number" == typeof (o = o || {}) && (o = {
        duration: o
      }), r = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), r && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, s) : n.queue((function (i) {
        t(this)[e](), s && s.call(n[0]), i()
      }))
    }
  })), t.widget, t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var o = !1;
  t(document).on("mouseup", (function () {
    o = !1
  })), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var e = this;
      this.element.on("mousedown." + this.widgetName, (function (t) {
        return e._mouseDown(t)
      })).on("click." + this.widgetName, (function (i) {
        if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
      })), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (e) {
      if (!o) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
          n = 1 === e.which,
          s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
        return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function () {
          i.mouseDelayMet = !0
        }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t)
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t)
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0))
      }
    },
    _mouseMove: function (e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
        if (!e.which)
          if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(e)
      }
      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    },
    _mouseUp: function (e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault()
    },
    _mouseDistanceMet: function (t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0
    }
  }), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function () {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function () {
      var e, i = this.options,
        n = this.element.find(".ui-slider-handle"),
        o = [],
        s = i.values && i.values.length || 1;
      for (n.length > s && (n.slice(s).remove(), n = n.slice(0, s)), e = n.length; e < s; e++) o.push("<span tabindex='0'></span>");
      this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
      }))
    },
    _createRange: function () {
      var e = this.options;
      e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function () {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
    },
    _mouseCapture: function (e) {
      var i, n, o, s, r, a, l = this,
        c = this.options;
      return !c.disabled && (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), a = {
        x: e.pageX,
        y: e.pageY
      }, i = this._normValueFromMouse(a), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function (e) {
        var r = Math.abs(i - l.values(e));
        (r < n || n === r && (e === l._lastChangedValue || l.values(e) === c.min)) && (n = r, o = t(this), s = e)
      })), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), a = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - r.left - o.width() / 2,
        top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, i), this._animateOff = !0))
    },
    _mouseStart: function () {
      return !0
    },
    _mouseDrag: function (t) {
      var e = {
        x: t.pageX,
        y: t.pageY
      };
      return e = this._normValueFromMouse(e), this._slide(t, this._handleIndex, e), !1
    },
    _mouseStop: function (t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
    },
    _detectOrientation: function () {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function (t) {
      var e;
      return 1 < (t = (t = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (t = 1), t < 0 && (t = 0), "vertical" === this.orientation && (t = 1 - t), e = this._valueMax() - this._valueMin(), e = this._valueMin() + t * e, this._trimAlignValue(e)
    },
    _uiHash: function (t, e, i) {
      var n = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
    },
    _hasMultipleValues: function () {
      return this.options.values && this.options.values.length
    },
    _start: function (t, e) {
      return this._trigger("start", t, this._uiHash(e))
    },
    _slide: function (t, e, i) {
      var n, o = this.value(),
        s = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), s[e] = i), i !== o && !1 !== this._trigger("slide", t, this._uiHash(e, i, s)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
    },
    _stop: function (t, e) {
      this._trigger("stop", t, this._uiHash(e))
    },
    _change: function (t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
    },
    value: function (t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
    },
    values: function (e, i) {
      var n, o, s;
      if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
      if (!arguments.length) return this._values();
      if (!t.isArray(e)) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (n = this.options.values, o = e, s = 0; s < n.length; s += 1) n[s] = this._trimAlignValue(o[s]), this._change(null, s);
      this._refreshValue()
    },
    _setOption: function (e, i) {
      var n, o = 0;
      switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), n = o - 1; 0 <= n; n--) this._change(null, n);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _setOptionDisabled: function (t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    _value: function () {
      var t = this.options.value;
      return this._trimAlignValue(t)
    },
    _values: function (t) {
      var e, i, n;
      if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
        return i
      }
      return []
    },
    _trimAlignValue: function (t) {
      if (t <= this._valueMin()) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = 0 < this.options.step ? this.options.step : 1,
        i = (t - this._valueMin()) % e;
      return t -= i, 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e), parseFloat(t.toFixed(5))
    },
    _calculateNewMax: function () {
      var t = this.options.max,
        e = this._valueMin(),
        i = this.options.step;
      (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    },
    _precisionOf: function (t) {
      var e = t.toString();
      return -1 === (t = e.indexOf(".")) ? 0 : e.length - t - 1
    },
    _valueMin: function () {
      return this.options.min
    },
    _valueMax: function () {
      return this.max
    },
    _refreshRange: function (t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      })
    },
    _refreshValue: function () {
      var e, i, n, o, s, r = this.options.range,
        a = this.options,
        l = this,
        c = !this._animateOff && a.animate,
        d = {};
      this._hasMultipleValues() ? this.handles.each((function (n) {
        i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](d, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
          left: i + "%"
        }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: a.animate
        })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
          bottom: i + "%"
        }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: a.animate
        }))), e = i
      })) : (n = this.value(), o = this._valueMin(), s = this._valueMax(), i = s !== o ? (n - o) / (s - o) * 100 : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
        width: i + "%"
      }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
        width: 100 - i + "%"
      }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
        height: i + "%"
      }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
        height: 100 - i + "%"
      }, a.animate))
    },
    _handleEvents: {
      keydown: function (e) {
        var i, n, o, s = t(e.target).data("ui-slider-handle-index");
        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, s))) return
        }
        switch (o = this.options.step, i = n = this._hasMultipleValues() ? this.values(s) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case t.ui.keyCode.END:
            n = this._valueMax();
            break;
          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (i === this._valueMax()) return;
            n = this._trimAlignValue(i + o);
            break;
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (i === this._valueMin()) return;
            n = this._trimAlignValue(i - o)
        }
        this._slide(e, s, n)
      },
      keyup: function (e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
      }
    }
  })
})),
function () {
  "use strict";

  function t(n) {
    if (!n) throw new Error("No options passed to Waypoint constructor");
    if (!n.element) throw new Error("No element option passed to Waypoint constructor");
    if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }
  var e = 0,
    i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function () {
    return this.enabled = !1, this
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function () {
    return this.group.next(this)
  }, t.prototype.previous = function () {
    return this.group.previous(this)
  }, t.invokeAll = function (t) {
    var e = [];
    for (var n in i) e.push(i[n]);
    for (var o = 0, s = e.length; s > o; o++) e[o][t]()
  }, t.destroyAll = function () {
    t.invokeAll("destroy")
  }, t.disableAll = function () {
    t.invokeAll("disable")
  }, t.enableAll = function () {
    t.invokeAll("enable")
  }, t.refreshAll = function () {
    t.Context.refreshAll()
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(),
function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var i = 0,
    n = {},
    o = window.Waypoint,
    s = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical);
    t && e && (this.adapter.off(".waypoints"), delete n[this.key])
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", (function () {
      e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
    }))
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", (function () {
      (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
    }))
  }, e.prototype.handleResize = function () {
    o.Context.refreshAll()
  }, e.prototype.handleScroll = function () {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var n = e[i],
        o = n.newScroll > n.oldScroll ? n.forward : n.backward;
      for (var s in this.waypoints[i]) {
        var r = this.waypoints[i][s],
          a = n.oldScroll < r.triggerPoint,
          l = n.newScroll >= r.triggerPoint;
        (a && l || !a && !l) && (r.queueTrigger(o), t[r.group.id] = r.group)
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function () {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
  }, e.prototype.refresh = function () {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      n = {};
    for (var s in this.handleScroll(), t = {
        horizontal: {
          contextOffset: e ? 0 : i.left,
          contextScroll: e ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left"
        },
        vertical: {
          contextOffset: e ? 0 : i.top,
          contextScroll: e ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top"
        }
      }) {
      var r = t[s];
      for (var a in this.waypoints[s]) {
        var l, c, d, u, h = this.waypoints[s][a],
          p = h.options.offset,
          f = h.triggerPoint,
          m = 0,
          g = null == f;
        h.element !== h.element.window && (m = h.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p), h.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))), l = r.contextScroll - r.contextOffset, h.triggerPoint = m + l - p, c = f < r.oldScroll, d = h.triggerPoint >= r.oldScroll, u = !c && !d, !g && (c && d) ? (h.queueTrigger(r.backward), n[h.group.id] = h.group) : (!g && u || g && r.oldScroll >= h.triggerPoint) && (h.queueTrigger(r.forward), n[h.group.id] = h.group)
      }
    }
    return o.requestAnimationFrame((function () {
      for (var t in n) n[t].flushTriggers()
    })), this
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function () {
    for (var t in n) n[t].refresh()
  }, e.findByElement = function (t) {
    return n[t.waypointContextKey]
  }, window.onload = function () {
    s && s(), e.refreshAll()
  }, o.requestAnimationFrame = function (e) {
    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
  }, o.Context = e
}(),
function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
  }
  var n = {
      vertical: {},
      horizontal: {}
    },
    o = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var n = this.triggerQueues[i],
        o = "up" === i || "left" === i;
      n.sort(o ? e : t);
      for (var s = 0, r = n.length; r > s; s += 1) {
        var a = n[s];
        (a.options.continuous || s === n.length - 1) && a.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints);
    return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function (t) {
    var e = o.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function () {
    return this.waypoints[0]
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function (t) {
    return n[t.axis][t.name] || new i(t)
  }, o.Group = i
}(),
function () {
  "use strict";

  function t(t) {
    this.$element = e(t)
  }
  var e = window.jQuery,
    i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t)
    }
  })), e.each(["extend", "inArray", "isEmptyObject"], (function (i, n) {
    t[n] = e[n]
  })), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t
}(),
function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
        n = arguments[0];
      return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each((function () {
        var o = t.extend({}, n, {
          element: this
        });
        "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
      })), i
    }
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
function (t) {
  "use strict";
  t.fn.counterUp = function (e) {
    var i, n = t.extend({
      time: 400,
      delay: 10,
      offset: 100,
      beginAt: 0,
      formatter: !1,
      context: "window",
      callback: function () {}
    }, e);
    return this.each((function () {
      var e = t(this),
        o = {
          time: t(this).data("counterup-time") || n.time,
          delay: t(this).data("counterup-delay") || n.delay,
          offset: t(this).data("counterup-offset") || n.offset,
          beginAt: t(this).data("counterup-beginat") || n.beginAt,
          context: t(this).data("counterup-context") || n.context
        };
      e.waypoint((function (s) {
        ! function () {
          var s = [],
            r = o.time / o.delay,
            a = t(this).attr("data-num") ? t(this).attr("data-num") : e.text(),
            l = /[0-9]+,[0-9]+/.test(a),
            c = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
          o.beginAt > a && (o.beginAt = a);
          var d = /[0-9]+:[0-9]+:[0-9]+/.test(a);
          if (d) {
            var u = a.split(":"),
              h = 1;
            for (i = 0; u.length > 0;) i += h * parseInt(u.pop(), 10), h *= 60
          }
          for (var p = r; p >= o.beginAt / a * r; p--) {
            var f = parseFloat(a / r * p).toFixed(c);
            if (d) {
              f = parseInt(i / r * p);
              var m = parseInt(f / 3600) % 24,
                g = parseInt(f / 60) % 60,
                v = parseInt(f % 60, 10);
              f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (v < 10 ? "0" + v : v)
            }
            if (l)
              for (;
                /(\d+)(\d{3})/.test(f.toString());) f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            n.formatter && (f = n.formatter.call(this, f)), s.unshift(f)
          }
          e.data("counterup-nums", s), e.text(o.beginAt);
          e.data("counterup-func", (function () {
            e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), o.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), n.callback.call(this))) : n.callback.call(this)
          })), setTimeout(e.data("counterup-func"), o.delay)
        }(), this.destroy()
      }), {
        offset: o.offset + "%",
        context: o.context
      })
    }))
  }
}(jQuery),
function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}((function (t) {
  var e, i, n, o, s, r, a = "Close",
    l = "BeforeClose",
    c = "MarkupParse",
    d = "Open",
    u = "Change",
    h = "mfp",
    p = ".mfp",
    f = "mfp-ready",
    m = "mfp-removing",
    g = "mfp-prevent-close",
    v = function () {},
    y = !!window.jQuery,
    b = t(window),
    _ = function (t, i) {
      e.ev.on(h + t + p, i)
    },
    w = function (e, i, n, o) {
      var s = document.createElement("div");
      return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
    },
    k = function (i, n) {
      e.ev.triggerHandler(h + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
    },
    x = function (i) {
      return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
    },
    T = function () {
      t.magnificPopup.instance || ((e = new v).init(), t.magnificPopup.instance = e)
    };
  v.prototype = {
    constructor: v,
    init: function () {
      var i = navigator.appVersion;
      e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function () {
        var t = document.createElement("p").style,
          e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition) return !0;
        for (; e.length;)
          if (e.pop() + "Transition" in t) return !0;
        return !1
      }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
    },
    open: function (i) {
      var o;
      if (!1 === i.isObj) {
        e.items = i.items.toArray(), e.index = 0;
        var r, a = i.items;
        for (o = 0; o < a.length; o++)
          if ((r = a[o]).parsed && (r = r.el[0]), r === i.el[0]) {
            e.index = o;
            break
          }
      } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
      if (!e.isOpen) {
        e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + p, (function () {
          e.close()
        })), e.wrap = w("wrap").attr("tabindex", -1).on("click" + p, (function (t) {
          e._checkIfClose(t.target) && e.close()
        })), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
        var l = t.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var u = l[o];
          u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
        }
        k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(c, (function (t, e, i, n) {
          i.close_replaceWith = x(n.type)
        })), s += " mfp-close-btn-in") : e.wrap.append(x())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
          overflow: e.st.overflowY,
          overflowX: "hidden",
          overflowY: e.st.overflowY
        }) : e.wrap.css({
          top: b.scrollTop(),
          position: "absolute"
        }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
          height: n.height(),
          position: "absolute"
        }), e.st.enableEscapeKey && n.on("keyup" + p, (function (t) {
          27 === t.keyCode && e.close()
        })), b.on("resize" + p, (function () {
          e.updateSize()
        })), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
        var h = e.wH = b.height(),
          m = {};
        if (e.fixedContentPos && e._hasScrollBar(h)) {
          var g = e._getScrollbarSize();
          g && (m.marginRight = g)
        }
        e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
        var v = e.st.mainClass;
        return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), k("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout((function () {
          e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + p, e._onFocusIn)
        }), 16), e.isOpen = !0, e.updateSize(h), k(d), i
      }
      e.updateItemHTML()
    },
    close: function () {
      e.isOpen && (k(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout((function () {
        e._close()
      }), e.st.removalDelay)) : e._close())
    },
    _close: function () {
      k(a);
      var i = m + " " + f + " ";
      if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
        var o = {
          marginRight: ""
        };
        e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
      }
      n.off("keyup.mfp focusin" + p), e.ev.off(p), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k("AfterClose")
    },
    updateSize: function (t) {
      if (e.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        e.wrap.css("height", n), e.wH = n
      } else e.wH = t || b.height();
      e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize")
    },
    updateItemHTML: function () {
      var i = e.items[e.index];
      e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
      var n = i.type;
      if (k("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
        var s = !!e.st[n] && e.st[n].markup;
        k("FirstMarkupParse", s), e.currTemplate[n] = !s || t(s)
      }
      o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
      var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
      e.appendContent(r, n), i.preloaded = !0, k(u, i), o = i.type, e.container.prepend(e.contentContainer), k("AfterChange")
    },
    appendContent: function (t, i) {
      e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(x()) : e.content = t : e.content = "", k("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
    },
    parseEl: function (i) {
      var n, o = e.items[i];
      if (o.tagName ? o = {
          el: t(o)
        } : (n = o.type, o = {
          data: o,
          src: o.src
        }), o.el) {
        for (var s = e.types, r = 0; r < s.length; r++)
          if (o.el.hasClass("mfp-" + s[r])) {
            n = s[r];
            break
          } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
      }
      return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, k("ElementParse", o), e.items[i]
    },
    addGroup: function (t, i) {
      var n = function (n) {
        n.mfpEl = this, e._openClick(n, t, i)
      };
      i || (i = {});
      var o = "click.magnificPopup";
      i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
    },
    _openClick: function (i, n, o) {
      if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
        var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
        if (s)
          if (t.isFunction(s)) {
            if (!s.call(e)) return !0
          } else if (b.width() < s) return !0;
        i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
      }
    },
    updateStatus: function (t, n) {
      if (e.preloader) {
        i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
        var o = {
          status: t,
          text: n
        };
        k("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", (function (t) {
          t.stopImmediatePropagation()
        })), e.container.addClass("mfp-s-" + t), i = t
      }
    },
    _checkIfClose: function (i) {
      if (!t(i).hasClass(g)) {
        var n = e.st.closeOnContentClick,
          o = e.st.closeOnBgClick;
        if (n && o) return !0;
        if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
        if (i === e.content[0] || t.contains(e.content[0], i)) {
          if (n) return !0
        } else if (o && t.contains(document, i)) return !0;
        return !1
      }
    },
    _addClassToMFP: function (t) {
      e.bgOverlay.addClass(t), e.wrap.addClass(t)
    },
    _removeClassFromMFP: function (t) {
      this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
    },
    _hasScrollBar: function (t) {
      return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || b.height())
    },
    _setFocus: function () {
      (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
    },
    _onFocusIn: function (i) {
      return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
    },
    _parseMarkup: function (e, i, n) {
      var o;
      n.data && (i = t.extend(n.data, i)), k(c, [e, i, n]), t.each(i, (function (i, n) {
        if (void 0 === n || !1 === n) return !0;
        if ((o = i.split("_")).length > 1) {
          var s = e.find(p + "-" + o[0]);
          if (s.length > 0) {
            var r = o[1];
            "replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n)
          }
        } else e.find(p + "-" + i).html(n)
      }))
    },
    _getScrollbarSize: function () {
      if (void 0 === e.scrollbarSize) {
        var t = document.createElement("div");
        t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
      }
      return e.scrollbarSize
    }
  }, t.magnificPopup = {
    instance: null,
    proto: v.prototype,
    modules: [],
    open: function (e, i) {
      return T(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
    },
    close: function () {
      return t.magnificPopup.instance && t.magnificPopup.instance.close()
    },
    registerModule: function (e, i) {
      i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, t.fn.magnificPopup = function (i) {
    T();
    var n = t(this);
    if ("string" == typeof i)
      if ("open" === i) {
        var o, s = y ? n.data("magnificPopup") : n[0].magnificPopup,
          r = parseInt(arguments[1], 10) || 0;
        s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({
          mfpEl: o
        }, n, s)
      } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
    else i = t.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
    return n
  };
  var S, E, C, A = "inline",
    I = function () {
      C && (E.after(C.addClass(S)).detach(), C = null)
    };
  t.magnificPopup.registerModule(A, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        e.types.push(A), _(a + "." + A, (function () {
          I()
        }))
      },
      getInline: function (i, n) {
        if (I(), i.src) {
          var o = e.st.inline,
            s = t(i.src);
          if (s.length) {
            var r = s[0].parentNode;
            r && r.tagName && (E || (S = o.hiddenClass, E = w(S), S = "mfp-" + S), C = s.after(E).detach().removeClass(S)), e.updateStatus("ready")
          } else e.updateStatus("error", o.tNotFound), s = t("<div>");
          return i.inlineElement = s, s
        }
        return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
      }
    }
  });
  var O, L = "ajax",
    z = function () {
      O && t(document.body).removeClass(O)
    },
    M = function () {
      z(), e.req && e.req.abort()
    };
  t.magnificPopup.registerModule(L, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        e.types.push(L), O = e.st.ajax.cursor, _(a + "." + L, M), _("BeforeChange." + L, M)
      },
      getAjax: function (i) {
        O && t(document.body).addClass(O), e.updateStatus("loading");
        var n = t.extend({
          url: i.src,
          success: function (n, o, s) {
            var r = {
              data: n,
              xhr: s
            };
            k("ParseAjax", r), e.appendContent(t(r.data), L), i.finished = !0, z(), e._setFocus(), setTimeout((function () {
              e.wrap.addClass(f)
            }), 16), e.updateStatus("ready"), k("AjaxContentAdded")
          },
          error: function () {
            z(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
          }
        }, e.st.ajax.settings);
        return e.req = t.ajax(n), ""
      }
    }
  });
  var P, D = function (i) {
    if (i.data && void 0 !== i.data.title) return i.data.title;
    var n = e.st.image.titleSrc;
    if (n) {
      if (t.isFunction(n)) return n.call(e, i);
      if (i.el) return i.el.attr(n) || ""
    }
    return ""
  };
  t.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var i = e.st.image,
          n = ".image";
        e.types.push("image"), _(d + n, (function () {
          "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
        })), _(a + n, (function () {
          i.cursor && t(document.body).removeClass(i.cursor), b.off("resize" + p)
        })), _("Resize" + n, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
      },
      resizeImage: function () {
        var t = e.currItem;
        if (t && t.img && e.st.image.verticalFit) {
          var i = 0;
          e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
        }
      },
      _onImageHasSize: function (t) {
        t.img && (t.hasSize = !0, P && clearInterval(P), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
      },
      findImageSize: function (t) {
        var i = 0,
          n = t.img[0],
          o = function (s) {
            P && clearInterval(P), P = setInterval((function () {
              return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(P), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
            }), s)
          };
        o(1)
      },
      getImage: function (i, n) {
        var o = 0,
          s = function () {
            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : 200 > ++o ? setTimeout(s, 100) : r())
          },
          r = function () {
            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
          },
          a = e.st.image,
          l = n.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
        }
        return e._parseMarkup(n, {
          title: D(i),
          img_replaceWith: i.img
        }, i), e.resizeImage(), i.hasSize ? (P && clearInterval(P), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
      }
    }
  });
  var j;
  t.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (t) {
        return t.is("img") ? t : t.find("img")
      }
    },
    proto: {
      initZoom: function () {
        var t, i = e.st.zoom,
          n = ".zoom";
        if (i.enabled && e.supportsTransition) {
          var o, s, r = i.duration,
            c = function (t) {
              var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                n = "all " + i.duration / 1e3 + "s " + i.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                s = "transition";
              return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
            },
            d = function () {
              e.content.css("visibility", "visible")
            };
          _("BuildControls" + n, (function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void d();
              (s = c(t)).css(e._getOffset()), e.wrap.append(s), o = setTimeout((function () {
                s.css(e._getOffset(!0)), o = setTimeout((function () {
                  d(), setTimeout((function () {
                    s.remove(), t = s = null, k("ZoomAnimationEnded")
                  }), 16)
                }), r)
              }), 16)
            }
          })), _(l + n, (function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.st.removalDelay = r, !t) {
                if (!(t = e._getItemToZoom())) return;
                s = c(t)
              }
              s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout((function () {
                s.css(e._getOffset())
              }), 16)
            }
          })), _(a + n, (function () {
            e._allowZoom() && (d(), s && s.remove(), t = null)
          }))
        }
      },
      _allowZoom: function () {
        return "image" === e.currItem.type
      },
      _getItemToZoom: function () {
        return !!e.currItem.hasSize && e.currItem.img
      },
      _getOffset: function (i) {
        var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
          s = parseInt(n.css("padding-top"), 10),
          r = parseInt(n.css("padding-bottom"), 10);
        o.top -= t(window).scrollTop() - s;
        var a = {
          width: n.width(),
          height: (y ? n.innerHeight() : n[0].offsetHeight) - r - s
        };
        return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
      }
    }
  });
  var $ = "iframe",
    H = function (t) {
      if (e.currTemplate[$]) {
        var i = e.currTemplate[$].find("iframe");
        i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
      }
    };
  t.magnificPopup.registerModule($, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        e.types.push($), _("BeforeChange", (function (t, e, i) {
          e !== i && (e === $ ? H() : i === $ && H(!0))
        })), _(a + "." + $, (function () {
          H()
        }))
      },
      getIframe: function (i, n) {
        var o = i.src,
          s = e.st.iframe;
        t.each(s.patterns, (function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
        }));
        var r = {};
        return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
      }
    }
  });
  var W = function (t) {
      var i = e.items.length;
      return t > i - 1 ? t - i : 0 > t ? i + t : t
    },
    N = function (t, e, i) {
      return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
  t.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var i = e.st.gallery,
          o = ".mfp-gallery";
        return e.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", _(d + o, (function () {
          i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function () {
            return e.items.length > 1 ? (e.next(), !1) : void 0
          })), n.on("keydown" + o, (function (t) {
            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
          }))
        })), _("UpdateStatus" + o, (function (t, i) {
          i.text && (i.text = N(i.text, e.currItem.index, e.items.length))
        })), _(c + o, (function (t, n, o, s) {
          var r = e.items.length;
          o.counter = r > 1 ? N(i.tCounter, s.index, r) : ""
        })), _("BuildControls" + o, (function () {
          if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
            var n = i.arrowMarkup,
              o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
              s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
            o.click((function () {
              e.prev()
            })), s.click((function () {
              e.next()
            })), e.container.append(o.add(s))
          }
        })), _(u + o, (function () {
          e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout((function () {
            e.preloadNearbyImages(), e._preloadTimeout = null
          }), 16)
        })), void _(a + o, (function () {
          n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
        })))
      },
      next: function () {
        e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
      },
      prev: function () {
        e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
      },
      goTo: function (t) {
        e.direction = t >= e.index, e.index = t, e.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var t, i = e.st.gallery.preload,
          n = Math.min(i[0], e.items.length),
          o = Math.min(i[1], e.items.length);
        for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
        for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
      },
      _preloadItem: function (i) {
        if (i = W(i), !e.items[i].preloaded) {
          var n = e.items[i];
          n.parsed || (n = e.parseEl(i)), k("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function () {
            n.hasSize = !0
          })).on("error.mfploader", (function () {
            n.hasSize = !0, n.loadError = !0, k("LazyLoadError", n)
          })).attr("src", n.src)), n.preloaded = !0
        }
      }
    }
  });
  var F = "retina";
  t.magnificPopup.registerModule(F, {
    options: {
      replaceSrc: function (t) {
        return t.src.replace(/\.\w+$/, (function (t) {
          return "@2x" + t
        }))
      },
      ratio: 1
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var t = e.st.retina,
            i = t.ratio;
          (i = isNaN(i) ? i() : i) > 1 && (_("ImageHasSize." + F, (function (t, e) {
            e.img.css({
              "max-width": e.img[0].naturalWidth / i,
              width: "100%"
            })
          })), _("ElementParse." + F, (function (e, n) {
            n.src = t.replaceSrc(n, i)
          })))
        }
      }
    }
  }), T()
}));
var pJS = function (t, e) {
  var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: i,
      w: i.offsetWidth,
      h: i.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var n = this.pJS;
  e && Object.deepExtend(n, e), n.tmp.obj = {
    size_value: n.particles.size.value,
    size_anim_speed: n.particles.size.anim.speed,
    move_speed: n.particles.move.speed,
    line_linked_distance: n.particles.line_linked.distance,
    line_linked_width: n.particles.line_linked.width,
    mode_grab_distance: n.interactivity.modes.grab.distance,
    mode_bubble_distance: n.interactivity.modes.bubble.distance,
    mode_bubble_size: n.interactivity.modes.bubble.size,
    mode_repulse_distance: n.interactivity.modes.repulse.distance
  }, n.fn.retinaInit = function () {
    n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
  }, n.fn.canvasInit = function () {
    n.canvas.ctx = n.canvas.el.getContext("2d")
  }, n.fn.canvasSize = function () {
    n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", (function () {
      n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
    }))
  }, n.fn.canvasPaint = function () {
    n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
  }, n.fn.canvasClear = function () {
    n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
  }, n.fn.particle = function (t, e, i) {
    if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value)
      if (t.value instanceof Array) {
        var o = t.value[Math.floor(Math.random() * n.particles.color.value.length)];
        this.color.rgb = hexToRgb(o)
      } else null != t.value.r && null != t.value.g && null != t.value.b && (this.color.rgb = {
        r: t.value.r,
        g: t.value.g,
        b: t.value.b
      }), null != t.value.h && null != t.value.s && null != t.value.l && (this.color.hsl = {
        h: t.value.h,
        s: t.value.s,
        l: t.value.l
      });
    else "random" == t.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var s = {};
    switch (n.particles.move.direction) {
      case "top":
        s = {
          x: 0,
          y: -1
        };
        break;
      case "top-right":
        s = {
          x: .5,
          y: -.5
        };
        break;
      case "right":
        s = {
          x: 1,
          y: -0
        };
        break;
      case "bottom-right":
        s = {
          x: .5,
          y: .5
        };
        break;
      case "bottom":
        s = {
          x: 0,
          y: 1
        };
        break;
      case "bottom-left":
        s = {
          x: -.5,
          y: 1
        };
        break;
      case "left":
        s = {
          x: -1,
          y: 0
        };
        break;
      case "top-left":
        s = {
          x: -.5,
          y: -.5
        };
        break;
      default:
        s = {
          x: 0,
          y: 0
        }
    }
    n.particles.move.straight ? (this.vx = s.x, this.vy = s.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = n.particles.shape.type;
    if ("object" == typeof r) {
      if (r instanceof Array) {
        var a = r[Math.floor(Math.random() * r.length)];
        this.shape = a
      }
    } else this.shape = r;
    if ("image" == this.shape.substring(0, 5)) {
      var l = n.particles.shape;
      this.img = {
        src: l.image.src,
        ratio: l.image.width / l.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && null != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
    }
  }, n.fn.particle.prototype.draw = function () {
    var t = this;

    function e() {
      n.canvas.ctx.drawImage(r, t.x - i, t.y - i, 2 * i, 2 * i / t.img.ratio)
    }
    if (null != t.radius_bubble) var i = t.radius_bubble;
    else i = t.radius;
    if (null != t.opacity_bubble) var o = t.opacity_bubble;
    else o = t.opacity;
    if (t.color.rgb) var s = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + o + ")";
    else s = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + o + ")";
    switch (n.canvas.ctx.fillStyle = s, n.canvas.ctx.beginPath(), t.shape) {
      case "circle":
        n.canvas.ctx.arc(t.x, t.y, i, 0, 2 * Math.PI, !1);
        break;
      case "edge":
        n.canvas.ctx.rect(t.x - i, t.y - i, 2 * i, 2 * i);
        break;
      case "triangle":
        n.fn.vendors.drawShape(n.canvas.ctx, t.x - i, t.y + i / 1.66, 2 * i, 3, 2);
        break;
      case "polygon":
        n.fn.vendors.drawShape(n.canvas.ctx, t.x - i / (n.particles.shape.polygon.nb_sides / 3.5), t.y - i / .76, 2.66 * i / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
        break;
      case "star":
        n.fn.vendors.drawShape(n.canvas.ctx, t.x - 2 * i / (n.particles.shape.polygon.nb_sides / 4), t.y - i / 1.52, 2 * i * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
        break;
      case "image":
        if ("svg" == n.tmp.img_type) var r = t.img.obj;
        else r = n.tmp.img_obj;
        r && e();
        break;
      case "image2":
        if ("svg" == n.tmp.img_type) r = t.img.obj;
        else r = n.tmp.img_obj;
        (a = document.createElement("img")).src = "assets/img/theme-img/ball_2.svg", (r = a) && e();
        break;
      case "image3":
        if ("svg" == n.tmp.img_type) r = t.img.obj;
        else r = n.tmp.img_obj;
        (a = document.createElement("img")).src = "assets/img/theme-img/ball_3.svg", (r = a) && e();
        break;
      case "image4":
        if ("svg" == n.tmp.img_type) r = t.img.obj;
        else r = n.tmp.img_obj;
        var a;
        (a = document.createElement("img")).src = "assets/img/theme-img/ball_4.svg", (r = a) && e()
    }
    n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
  }, n.fn.particlesCreate = function () {
    for (var t = 0; t < n.particles.number.value; t++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
  }, n.fn.particlesUpdate = function () {
    for (var t = 0; t < n.particles.array.length; t++) {
      var e = n.particles.array[t];
      if (n.particles.move.enable) {
        var i = n.particles.move.speed / 2;
        e.x += e.vx * i, e.y += e.vy * i
      }
      if (n.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= n.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= n.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), n.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= n.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= n.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == n.particles.move.out_mode) var o = {
        x_left: e.radius,
        x_right: n.canvas.w,
        y_top: e.radius,
        y_bottom: n.canvas.h
      };
      else o = {
        x_left: -e.radius,
        x_right: n.canvas.w + e.radius,
        y_top: -e.radius,
        y_bottom: n.canvas.h + e.radius
      };
      switch (e.x - e.radius > n.canvas.w ? (e.x = o.x_left, e.y = Math.random() * n.canvas.h) : e.x + e.radius < 0 && (e.x = o.x_right, e.y = Math.random() * n.canvas.h), e.y - e.radius > n.canvas.h ? (e.y = o.y_top, e.x = Math.random() * n.canvas.w) : e.y + e.radius < 0 && (e.y = o.y_bottom, e.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
        case "bounce":
          (e.x + e.radius > n.canvas.w || e.x - e.radius < 0) && (e.vx = -e.vx), (e.y + e.radius > n.canvas.h || e.y - e.radius < 0) && (e.vy = -e.vy)
      }
      if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(e), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(e), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(e), n.particles.line_linked.enable || n.particles.move.attract.enable)
        for (var s = t + 1; s < n.particles.array.length; s++) {
          var r = n.particles.array[s];
          n.particles.line_linked.enable && n.fn.interact.linkParticles(e, r), n.particles.move.attract.enable && n.fn.interact.attractParticles(e, r), n.particles.move.bounce && n.fn.interact.bounceParticles(e, r)
        }
    }
  }, n.fn.particlesDraw = function () {
    n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
    for (var t = 0; t < n.particles.array.length; t++) {
      n.particles.array[t].draw()
    }
  }, n.fn.particlesEmpty = function () {
    n.particles.array = []
  }, n.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
  }, n.fn.interact.linkParticles = function (t, e) {
    var i = t.x - e.x,
      o = t.y - e.y,
      s = Math.sqrt(i * i + o * o);
    if (s <= n.particles.line_linked.distance) {
      var r = n.particles.line_linked.opacity - s / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
      if (r > 0) {
        var a = n.particles.line_linked.color_rgb_line;
        n.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + r + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(e.x, e.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
      }
    }
  }, n.fn.interact.attractParticles = function (t, e) {
    var i = t.x - e.x,
      o = t.y - e.y;
    if (Math.sqrt(i * i + o * o) <= n.particles.line_linked.distance) {
      var s = i / (1e3 * n.particles.move.attract.rotateX),
        r = o / (1e3 * n.particles.move.attract.rotateY);
      t.vx -= s, t.vy -= r, e.vx += s, e.vy += r
    }
  }, n.fn.interact.bounceParticles = function (t, e) {
    var i = t.x - e.x,
      n = t.y - e.y;
    Math.sqrt(i * i + n * n) <= t.radius + e.radius && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
  }, n.fn.modes.pushParticles = function (t, e) {
    n.tmp.pushing = !0;
    for (var i = 0; i < t; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
      x: e ? e.pos_x : Math.random() * n.canvas.w,
      y: e ? e.pos_y : Math.random() * n.canvas.h
    })), i == t - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
  }, n.fn.modes.removeParticles = function (t) {
    n.particles.array.splice(0, t), n.particles.move.enable || n.fn.particlesDraw()
  }, n.fn.modes.bubbleParticle = function (t) {
    if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
      var e = t.x - n.interactivity.mouse.pos_x,
        i = t.y - n.interactivity.mouse.pos_y,
        o = 1 - (c = Math.sqrt(e * e + i * i)) / n.interactivity.modes.bubble.distance;

      function s() {
        t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
      }
      if (c <= n.interactivity.modes.bubble.distance) {
        if (o >= 0 && "mousemove" == n.interactivity.status) {
          if (n.interactivity.modes.bubble.size != n.particles.size.value)
            if (n.interactivity.modes.bubble.size > n.particles.size.value) {
              (a = t.radius + n.interactivity.modes.bubble.size * o) >= 0 && (t.radius_bubble = a)
            } else {
              var r = t.radius - n.interactivity.modes.bubble.size,
                a = t.radius - r * o;
              t.radius_bubble = a > 0 ? a : 0
            } var l;
          if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
            if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value)(l = n.interactivity.modes.bubble.opacity * o) > t.opacity && l <= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l);
            else(l = t.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * o) < t.opacity && l >= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = l)
        }
      } else s();
      "mouseleave" == n.interactivity.status && s()
    } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
      if (n.tmp.bubble_clicking) {
        e = t.x - n.interactivity.mouse.click_pos_x, i = t.y - n.interactivity.mouse.click_pos_y;
        var c = Math.sqrt(e * e + i * i),
          d = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
        d > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), d > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
      }

      function u(e, i, o, s, r) {
        if (e != i)
          if (n.tmp.bubble_duration_end) null != o && (l = e + (e - (s - d * (s - e) / n.interactivity.modes.bubble.duration)), "size" == r && (t.radius_bubble = l), "opacity" == r && (t.opacity_bubble = l));
          else if (c <= n.interactivity.modes.bubble.distance) {
          if (null != o) var a = o;
          else a = s;
          if (a != e) {
            var l = s - d * (s - e) / n.interactivity.modes.bubble.duration;
            "size" == r && (t.radius_bubble = l), "opacity" == r && (t.opacity_bubble = l)
          }
        } else "size" == r && (t.radius_bubble = void 0), "opacity" == r && (t.opacity_bubble = void 0)
      }
      n.tmp.bubble_clicking && (u(n.interactivity.modes.bubble.size, n.particles.size.value, t.radius_bubble, t.radius, "size"), u(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
    }
  }, n.fn.modes.repulseParticle = function (t) {
    if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
      var e = t.x - n.interactivity.mouse.pos_x,
        i = t.y - n.interactivity.mouse.pos_y,
        o = Math.sqrt(e * e + i * i),
        s = {
          x: e / o,
          y: i / o
        },
        r = clamp(1 / (l = n.interactivity.modes.repulse.distance) * (-1 * Math.pow(o / l, 2) + 1) * l * 100, 0, 50),
        a = {
          x: t.x + s.x * r,
          y: t.y + s.y * r
        };
      "bounce" == n.particles.move.out_mode ? (a.x - t.radius > 0 && a.x + t.radius < n.canvas.w && (t.x = a.x), a.y - t.radius > 0 && a.y + t.radius < n.canvas.h && (t.y = a.y)) : (t.x = a.x, t.y = a.y)
    } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
      if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
        var l = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
          c = n.interactivity.mouse.click_pos_x - t.x,
          d = n.interactivity.mouse.click_pos_y - t.y,
          u = c * c + d * d,
          h = -l / u * 1;
        u <= l && function () {
          var e = Math.atan2(d, c);
          if (t.vx = h * Math.cos(e), t.vy = h * Math.sin(e), "bounce" == n.particles.move.out_mode) {
            var i = {
              x: t.x + t.vx,
              y: t.y + t.vy
            };
            (i.x + t.radius > n.canvas.w || i.x - t.radius < 0) && (t.vx = -t.vx), (i.y + t.radius > n.canvas.h || i.y - t.radius < 0) && (t.vy = -t.vy)
          }
        }()
      } else 0 == n.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
  }, n.fn.modes.grabParticle = function (t) {
    if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
      var e = t.x - n.interactivity.mouse.pos_x,
        i = t.y - n.interactivity.mouse.pos_y,
        o = Math.sqrt(e * e + i * i);
      if (o <= n.interactivity.modes.grab.distance) {
        var s = n.interactivity.modes.grab.line_linked.opacity - o / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
        if (s > 0) {
          var r = n.particles.line_linked.color_rgb_line;
          n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
        }
      }
    }
  }, n.fn.vendors.eventsListeners = function () {
    "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", (function (t) {
      if (n.interactivity.el == window) var e = t.clientX,
        i = t.clientY;
      else e = t.offsetX || t.clientX, i = t.offsetY || t.clientY;
      n.interactivity.mouse.pos_x = e, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
    })), n.interactivity.el.addEventListener("mouseleave", (function (t) {
      n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
    }))), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", (function () {
      if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
        case "push":
          n.particles.move.enable || 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
          break;
        case "remove":
          n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
          break;
        case "bubble":
          n.tmp.bubble_clicking = !0;
          break;
        case "repulse":
          n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout((function () {
            n.tmp.repulse_clicking = !1
          }), 1e3 * n.interactivity.modes.repulse.duration)
      }
    }))
  }, n.fn.vendors.densityAutoParticles = function () {
    if (n.particles.number.density.enable) {
      var t = n.canvas.el.width * n.canvas.el.height / 1e3;
      n.tmp.retina && (t /= 2 * n.canvas.pxratio);
      var e = t * n.particles.number.value / n.particles.number.density.value_area,
        i = n.particles.array.length - e;
      i < 0 ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
    }
  }, n.fn.vendors.checkOverlap = function (t, e) {
    for (var i = 0; i < n.particles.array.length; i++) {
      var o = n.particles.array[i],
        s = t.x - o.x,
        r = t.y - o.y;
      Math.sqrt(s * s + r * r) <= t.radius + o.radius && (t.x = e ? e.x : Math.random() * n.canvas.w, t.y = e ? e.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(t))
    }
  }, n.fn.vendors.createSvgImg = function (t) {
    var e = n.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, (function (e, i, n, o) {
        if (t.color.rgb) var s = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
        else s = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
        return s
      })),
      i = new Blob([e], {
        type: "image/svg+xml;charset=utf-8"
      }),
      o = window.URL || window.webkitURL || window,
      s = o.createObjectURL(i),
      r = new Image;
    r.addEventListener("load", (function () {
      t.img.obj = r, t.img.loaded = !0, o.revokeObjectURL(s), n.tmp.count_svg++
    })), r.src = s
  }, n.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
  }, n.fn.vendors.drawShape = function (t, e, i, n, o, s) {
    var r = o * s,
      a = o / s,
      l = 180 * (a - 2) / a,
      c = Math.PI - Math.PI * l / 180;
    t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
    for (var d = 0; d < r; d++) t.lineTo(n, 0), t.translate(n, 0), t.rotate(c);
    t.fill(), t.restore()
  }, n.fn.vendors.exportImg = function () {
    window.open(n.canvas.el.toDataURL("image/png"), "_blank")
  }, n.fn.vendors.loadImg = function (t) {
    if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src)
      if ("svg" == t) {
        var e = new XMLHttpRequest;
        e.open("GET", n.particles.shape.image.src), e.onreadystatechange = function (t) {
          4 == e.readyState && (200 == e.status ? (n.tmp.source_svg = t.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
        }, e.send()
      } else {
        var i = new Image;
        i.addEventListener("load", (function () {
          n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
        })), i.src = n.particles.shape.image.src
      }
    else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
  }, n.fn.vendors.draw = function () {
    "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : null != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
  }, n.fn.vendors.checkBeforeDraw = function () {
    "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && null == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
  }, n.fn.vendors.init = function () {
    n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
  }, n.fn.vendors.start = function () {
    isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
  }, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
};

function hexToRgb(t) {
  t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (t, e, i, n) {
    return e + e + i + i + n + n
  }));
  var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  return e ? {
    r: parseInt(e[1], 16),
    g: parseInt(e[2], 16),
    b: parseInt(e[3], 16)
  } : null
}

function clamp(t, e, i) {
  return Math.min(Math.max(t, e), i)
}

function isInArray(t, e) {
  return e.indexOf(t) > -1
}
Object.deepExtend = function (t, e) {
    for (var i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
    return t
  }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
    window.setTimeout(t, 1e3 / 60)
  }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (t, e) {
    "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
    var i = document.getElementById(t),
      n = i.getElementsByClassName("particles-js-canvas-el");
    if (n.length)
      for (; n.length > 0;) i.removeChild(n[0]);
    var o = document.createElement("canvas");
    o.className = "particles-js-canvas-el", o.style.width = "100%", o.style.height = "100%", null != document.getElementById(t).appendChild(o) && pJSDom.push(new pJS(t, e))
  }, window.particlesJS.load = function (t, e, i) {
    var n = new XMLHttpRequest;
    n.open("GET", e), n.onreadystatechange = function (e) {
      if (4 == n.readyState)
        if (200 == n.status) {
          var o = JSON.parse(e.currentTarget.response);
          window.particlesJS(t, o), i && i()
        } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")
    }, n.send()
  },
  function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }((function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
      var e = 0;
      return function (i, n) {
        var o, s = this;
        s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t('<button type="button" />').text(i + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, s.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
      }
    }()).prototype.activateADA = function () {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
      var o = this;
      if ("boolean" == typeof i) n = i, i = null;
      else if (i < 0 || i >= o.slideCount) return !1;
      o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function (e, i) {
        t(i).attr("data-slick-index", e)
      })), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function () {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
        t.$list.animate({
          height: e
        }, t.options.speed)
      }
    }, e.prototype.animateSlide = function (e, i) {
      var n = {},
        o = this;
      o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
        left: e
      }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
        top: e
      }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
        animStart: o.currentLeft
      }).animate({
        animStart: e
      }, {
        duration: o.options.speed,
        easing: o.options.easing,
        step: function (t) {
          t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
        },
        complete: function () {
          i && i.call()
        }
      })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function () {
        o.disableTransition(), i.call()
      }), o.options.speed))
    }, e.prototype.getNavTarget = function () {
      var e = this.options.asNavFor;
      return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function (e) {
      var i = this.getNavTarget();
      null !== i && "object" == typeof i && i.each((function () {
        var i = t(this).slick("getSlick");
        i.unslicked || i.slideHandler(e, !0)
      }))
    }, e.prototype.applyTransition = function (t) {
      var e = this,
        i = {};
      !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
      var t = this;
      t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
      var t = this,
        e = t.currentSlide + t.options.slidesToScroll;
      t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, e.prototype.buildDots = function () {
      var e, i, n = this;
      if (!0 === n.options.dots) {
        for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
        n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
      }
    }, e.prototype.buildOut = function () {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function (e, i) {
        t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
      })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
      var t, e, i, n, o, s, r, a = this;
      if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
        for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
          var l = document.createElement("div");
          for (e = 0; e < a.options.rows; e++) {
            var c = document.createElement("div");
            for (i = 0; i < a.options.slidesPerRow; i++) {
              var d = t * r + (e * a.options.slidesPerRow + i);
              s.get(d) && c.appendChild(s.get(d))
            }
            l.appendChild(c)
          }
          n.appendChild(l)
        }
        a.$slider.empty().append(n), a.$slider.children().children().children().css({
          width: 100 / a.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, e.prototype.checkResponsive = function (e, i) {
      var n, o, s, r = this,
        a = !1,
        l = r.$slider.width(),
        c = window.innerWidth || t(window).width();
      if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
        null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
      }
    }, e.prototype.changeSlide = function (e, i) {
      var n, o, s = this,
        r = t(e.currentTarget);
      switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
        case "previous":
          o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
          break;
        case "next":
          o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
          break;
        case "index":
          var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
          s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
          break;
        default:
          return
      }
    }, e.prototype.checkNavigable = function (t) {
      var e, i;
      if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
      else
        for (var n in e) {
          if (t < e[n]) {
            t = i;
            break
          }
          i = e[n]
        }
      return t
    }, e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
      var t, e = this;
      e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
      !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
        t(this).attr("style", t(this).data("originalStyling"))
      })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
      var e = this,
        i = {};
      i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(t).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(t).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), e && setTimeout((function () {
        i.disableTransition(t), e.call()
      }), i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
      var e = this;
      !1 === e.cssTransitions ? e.$slides.eq(t).animate({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
      var e = this;
      null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function (i) {
        i.stopImmediatePropagation();
        var n = t(this);
        setTimeout((function () {
          e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
        }), 0)
      }))
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide
    }, e.prototype.getDotCount = function () {
      var t = this,
        e = 0,
        i = 0,
        n = 0;
      if (!0 === t.options.infinite)
        if (t.slideCount <= t.options.slidesToShow) ++n;
        else
          for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else if (!0 === t.options.centerMode) n = t.slideCount;
      else if (t.options.asNavFor)
        for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
      return n - 1
    }, e.prototype.getLeft = function (t) {
      var e, i, n, o, s = this,
        r = 0;
      return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
      return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
      var t, e = this,
        i = 0,
        n = 0,
        o = [];
      for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      return o
    }, e.prototype.getSlick = function () {
      return this
    }, e.prototype.getSlideCount = function () {
      var e, i, n = this;
      return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function (o, s) {
        if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft) return e = s, !1
      })), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(t)
        }
      }, e)
    }, e.prototype.init = function (e) {
      var i = this;
      t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
      var e = this,
        i = Math.ceil(e.slideCount / e.options.slidesToShow),
        n = e.getNavigableIndexes().filter((function (t) {
          return t >= 0 && t < e.slideCount
        }));
      e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function (i) {
        var o = n.indexOf(i);
        t(this).attr({
          role: "tabpanel",
          id: "slick-slide" + e.instanceUid + i,
          tabindex: -1
        }), -1 !== o && t(this).attr({
          "aria-describedby": "slick-slide-control" + e.instanceUid + o
        })
      })), e.$dots.attr("role", "tablist").find("li").each((function (o) {
        var s = n[o];
        t(this).attr({
          role: "presentation"
        }), t(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + e.instanceUid + o,
          "aria-controls": "slick-slide" + e.instanceUid + s,
          "aria-label": o + 1 + " of " + i,
          "aria-selected": null,
          tabindex: "-1"
        })
      })).eq(e.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.$slides.eq(o).attr("tabindex", 0);
      e.activateADA()
    }, e.prototype.initArrowEvents = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
        message: "index"
      }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
      var e = this;
      t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "next" : "previous"
        }
      }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "previous" : "next"
        }
      }))
    }, e.prototype.lazyLoad = function () {
      function e(e) {
        t("img[data-lazy]", e).each((function () {
          var e = t(this),
            i = t(this).attr("data-lazy"),
            n = t(this).attr("data-srcset"),
            o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
            r = document.createElement("img");
          r.onload = function () {
            e.animate({
              opacity: 0
            }, 100, (function () {
              n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({
                opacity: 1
              }, 200, (function () {
                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              })), s.$slider.trigger("lazyLoaded", [s, e, i])
            }))
          }, r.onerror = function () {
            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
          }, r.src = i
        }))
      }
      var i, n, o, s = this;
      if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
        for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
      e(i), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
      var t = this;
      t.setPosition(), t.$slideTrack.css({
        opacity: 1
      }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
      this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
      var t = this;
      t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
      var i = this;
      i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, e.prototype.preventDefault = function (t) {
      t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var i, n, o, s, r, a = this,
        l = t("img[data-lazy]", a.$slider);
      l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
        o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
      }, r.onerror = function () {
        e < 3 ? setTimeout((function () {
          a.progressiveLazyLoad(e + 1)
        }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
      }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function (e) {
      var i, n, o = this;
      n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
        currentSlide: i
      }), o.init(), e || o.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !1)
    }, e.prototype.registerBreakpoints = function () {
      var e, i, n, o = this,
        s = o.options.responsive || null;
      if ("array" === t.type(s) && s.length) {
        for (e in o.respondTo = o.options.respondTo || "window", s)
          if (n = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
            for (i = s[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
            o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
          } o.breakpoints.sort((function (t, e) {
          return o.options.mobileFirst ? t - e : e - t
        }))
      }
    }, e.prototype.reinit = function () {
      var e = this;
      e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
      var e = this;
      t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function () {
        e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
      }), 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
      var n = this;
      if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
      n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.setCSS = function (t) {
      var e, i, n = this,
        o = {};
      !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function () {
      var t = this;
      !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
        padding: "0px " + t.options.centerPadding
      }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
        padding: t.options.centerPadding + " 0px"
      })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
      var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
      !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
      var e, i = this;
      i.$slides.each((function (n, o) {
        e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
          position: "relative",
          right: e,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : t(o).css({
          position: "relative",
          left: e,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        })
      })), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      })
    }, e.prototype.setHeight = function () {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
        t.$list.css("height", e)
      }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e, i, n, o, s, r = this,
        a = !1;
      if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
      else if ("multiple" === s) t.each(n, (function (t, e) {
        r.options[t] = e
      }));
      else if ("responsive" === s)
        for (i in o)
          if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(o[i])
          } a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
      var t = this;
      t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
      var t = this,
        e = document.body.style;
      t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
      var e, i, n, o, s = this;
      if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
        var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
        e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
      } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, e.prototype.setupInfinite = function () {
      var e, i, n, o = this;
      if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
        for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
        for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
        o.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
          t(this).attr("id", "")
        }))
      }
    }, e.prototype.interrupt = function (t) {
      t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function (e) {
      var i = this,
        n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
        o = parseInt(n.attr("data-slick-index"));
      o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, e.prototype.slideHandler = function (t, e, i) {
      var n, o, s, r, a, l = null,
        c = this;
      if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
        if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
          c.postSlide(n)
        })) : c.postSlide(n));
        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
        c.postSlide(n)
      })) : c.postSlide(n));
      else {
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, (function () {
          c.postSlide(o)
        }))) : c.postSlide(o), void c.animateHeight();
        !0 !== i ? c.animateSlide(l, (function () {
          c.postSlide(o)
        })) : c.postSlide(o)
      }
    }, e.prototype.startLoad = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
      var t, e, i, n, o = this;
      return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
      var e, i, n = this;
      if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
      if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
          case "left":
          case "down":
            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
            break;
          case "right":
          case "up":
            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
      var e = this;
      if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
        case "start":
          e.swipeStart(t);
          break;
        case "move":
          e.swipeMove(t);
          break;
        case "end":
          e.swipeEnd(t)
      }
    }, e.prototype.swipeMove = function (t) {
      var e, i, n, o, s, r, a = this;
      return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
      var e, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var t = this;
      null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
      var e = this;
      t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
      var e = this;
      e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
      var t = this;
      Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
      var t = this;
      null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
      var t = this;
      t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
      var t, i, n = this,
        o = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        r = n.length;
      for (t = 0; t < r; t++)
        if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
      return n
    }
  }));
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
  return typeof t
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, i) {
    return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
  } : t(jQuery)
}((function (t) {
  return t.fn.tilt = function (e) {
    var i = function () {
        this.ticking || (requestAnimationFrame(d.bind(this)), this.ticking = !0)
      },
      n = function () {
        t(this).on("mousemove", a), t(this).on("mouseenter", s), this.settings.reset && t(this).on("mouseleave", l), this.settings.glare && t(window).on("resize", h.bind(this))
      },
      o = function () {
        var e = this;
        void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
          transition: this.settings.speed + "ms " + this.settings.easing
        }), this.settings.glare && this.glareElement.css({
          transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
        }), this.timeout = setTimeout((function () {
          t(e).css({
            transition: ""
          }), e.settings.glare && e.glareElement.css({
            transition: ""
          })
        }), this.settings.speed)
      },
      s = function (e) {
        this.ticking = !1, t(this).css({
          "will-change": "transform"
        }), o.call(this), t(this).trigger("tilt.mouseEnter")
      },
      r = function (e) {
        return void 0 === e && (e = {
          pageX: t(this).offset().left + t(this).outerWidth() / 2,
          pageY: t(this).offset().top + t(this).outerHeight() / 2
        }), {
          x: e.pageX,
          y: e.pageY
        }
      },
      a = function (t) {
        this.mousePositions = r(t), i.call(this)
      },
      l = function () {
        o.call(this), this.reset = !0, i.call(this), t(this).trigger("tilt.mouseLeave")
      },
      c = function () {
        var e = t(this).outerWidth(),
          i = t(this).outerHeight(),
          n = t(this).offset().left,
          o = t(this).offset().top,
          s = (this.mousePositions.x - n) / e,
          r = (this.mousePositions.y - o) / i;
        return {
          tiltX: (this.settings.maxTilt / 2 - s * this.settings.maxTilt).toFixed(2),
          tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
          percentageX: 100 * s,
          percentageY: 100 * r,
          angle: Math.atan2(this.mousePositions.x - (n + e / 2), -(this.mousePositions.y - (o + i / 2))) * (180 / Math.PI)
        }
      },
      d = function () {
        return this.transforms = c.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
      },
      u = function () {
        var e = this.settings.glarePrerender;
        if (e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), !e) {
          this.glareElementWrapper.css({
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }).css({
            overflow: "hidden",
            "pointer-events": "none"
          }), this.glareElement.css({
            position: "absolute",
            top: "50%",
            left: "50%",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            width: "" + 2 * t(this).outerWidth(),
            height: "" + 2 * t(this).outerWidth(),
            transform: "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            opacity: "0"
          })
        }
      },
      h = function () {
        this.glareElement.css({
          width: "" + 2 * t(this).outerWidth(),
          height: "" + 2 * t(this).outerWidth()
        })
      };
    return t.fn.tilt.destroy = function () {
      t(this).each((function () {
        t(this).find(".js-tilt-glare").remove(), t(this).css({
          "will-change": "",
          transform: ""
        }), t(this).off("mousemove mouseenter mouseleave")
      }))
    }, t.fn.tilt.getValues = function () {
      var e = [];
      return t(this).each((function () {
        this.mousePositions = r.call(this), e.push(c.call(this))
      })), e
    }, t.fn.tilt.reset = function () {
      t(this).each((function () {
        var e = this;
        this.mousePositions = r.call(this), this.settings = t(this).data("settings"), l.call(this), setTimeout((function () {
          e.reset = !1
        }), this.settings.transition)
      }))
    }, this.each((function () {
      var i = this;
      this.settings = t.extend({
        maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
        perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
        easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
        scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
        speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
        transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
        disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
        axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
        reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
        glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
        maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
      }, e), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function () {
        t(i).data("settings", i.settings), i.settings.glare && u.call(i), n.call(i)
      }, this.init()
    }))
  }, t("[data-tilt]").tilt(), !0
}));