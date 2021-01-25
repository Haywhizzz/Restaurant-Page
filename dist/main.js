! function (e) {
    var n = {};

    function t(d) {
        if (n[d]) return n[d].exports;
        var a = n[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return e[d].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, d) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: d
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var d = Object.create(null);
        if (t.r(d), Object.defineProperty(d, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) t.d(d, a, function (n) {
                return e[n]
            }.bind(null, a));
        return d
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "/", t(t.s = 0)
}([function (e, n, t) {
    "use strict";
    t.r(n);
    var d = (() => {
        const e = document.createElement("nav"),
            n = document.createElement("h1");
        n.classList.add("nav-logo"), n.innerText = "Restaurant";
        const t = document.createElement("ul");
        t.classList.add("nav-list");
        const d = document.createElement("li"),
            a = document.createElement("a");
        a.innerText = "HOME", d.classList.add("nav-items"), a.id = "home", d.appendChild(a);
        const c = document.createElement("li"),
            i = document.createElement("a");
        i.innerText = "MENU", c.classList.add("nav-items"), i.id = "menu", c.appendChild(i);
        const l = document.createElement("li"),
            r = document.createElement("a");
        return r.innerText = "CONTACT", l.classList.add("nav-items"), r.id = "contact", l.appendChild(r), t.appendChild(d), t.appendChild(c), t.appendChild(l), e.appendChild(n), e.appendChild(t), e
    })();
    var a = (() => {
        const e = document.createElement("div");
        e.classList.add("bg-image");
        const n = document.createElement("h1");
        n.innerText = "We provide meals specially for you and excellent customer service";
        const t = document.createElement("button");
        return t.classList.add("btn-menu"), t.innerText = "VIEW MENU", e.appendChild(n), e.appendChild(t), e
    })();
    var c = (() => {
        const e = document.createElement("div"),
            n = document.createElement("h2");
        n.innerText = "OUR MENU", n.classList.add("menu-header");
        const t = document.createElement("div");
        t.classList.add("menu-container");
        const d = document.createElement("div");
        d.classList.add("menu-card");
        const a = document.createElement("div");
        a.classList.add("menu-img-1");
        const c = document.createElement("h5");
        c.innerText = "Assorted Fried Rice and Chicken", d.appendChild(a), d.appendChild(c);
        const i = document.createElement("div");
        i.classList.add("menu-card");
        const l = document.createElement("div");
        l.classList.add("menu-img-2");
        const r = document.createElement("h5");
        r.innerText = "Chicken Burger", i.appendChild(l), i.appendChild(r);
        const o = document.createElement("div");
        o.classList.add("menu-card");
        const s = document.createElement("div");
        s.classList.add("menu-img-3");
        const m = document.createElement("h5");
        m.innerText = "Potato and Eggs", o.appendChild(s), o.appendChild(m);
        const u = document.createElement("div");
        u.classList.add("menu-card");
        const p = document.createElement("div");
        p.classList.add("menu-img-4");
        const E = document.createElement("h5");
        E.innerText = "Sea Food", u.appendChild(p), u.appendChild(E);
        const h = document.createElement("div");
        h.classList.add("menu-card");
        const v = document.createElement("div");
        v.classList.add("menu-img-5");
        const C = document.createElement("h5");
        C.innerText = "Pasta", h.appendChild(v), h.appendChild(C);
        const f = document.createElement("div");
        f.classList.add("menu-card");
        const g = document.createElement("div");
        g.classList.add("menu-img-6");
        const b = document.createElement("h5");
        return b.innerText = "Cheese and Egg", f.appendChild(g), f.appendChild(b), t.appendChild(d), t.appendChild(i), t.appendChild(o), t.appendChild(u), t.appendChild(h), t.appendChild(f), e.appendChild(n), e.appendChild(t), e
    })();
    var i = (() => {
        const e = document.createElement("div");
        e.classList.add("contact-container");
        const n = document.createElement("h2");
        n.innerText = "CONTACT US";
        const t = document.createElement("form");
        return t.innerHTML = '\n          <div class="form-group">\n              <label for="name">NAME:</label>\n              <input type="text" placeholder="Enter Name">\n          </div>\n          <div class="form-group">\n              <label for="email">Email:</label>\n              <input type="email" placeholder="Enter Email">\n          </div>\n          <div class="form-group">\n              <label for="message" class="message">MESSAGE:</label>\n              <textarea name="message" id="" cols="50" rows="10"></textarea>\n          </div>\n          <div class="form-group">\n              <input type="submit" name="submit">\n          </div>\n      ', e.appendChild(n), e.appendChild(t), e
    })();
    const l = document.getElementById("content"),
        r = e => {
            l.innerHTML = "", l.appendChild(d), l.appendChild(e)
        };
    r(a);
    const o = document.querySelector(".btn-menu"),
        s = document.querySelector(".nav-logo"),
        m = document.getElementById("home"),
        u = document.getElementById("menu"),
        p = document.getElementById("contact"),
        E = ({
            target: e
        }) => {
            switch (e) {
                case m:
                    r(a);
                    break;
                case u:
                case o:
                    r(c);
                    break;
                case p:
                    r(i);
                    break;
                default:
                    r(a)
            }
        };
    m.addEventListener("click", E), s.addEventListener("click", E), u.addEventListener("click", E), p.addEventListener("click", E), o.addEventListener("click", E)
}]);
