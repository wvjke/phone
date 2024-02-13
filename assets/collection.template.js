//(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(e,t,a){"use strict";a.r(t);a(32),a(162),a(119);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(66);a(72),a(15),a(117),a(41),a(163),a(204);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var u=Object(n.createContext)(),m=function(e){var t=i(Object(n.useState)(null),2),a=t[0],l=t[1];return r.a.createElement(u.Provider,{value:{products:a,setProducts:l}},e.children)},f=a(1),b=a.n(f),d=a(2),p=a.n(d),g=(a(3),a(98)),y=a.n(g),v=a(99),E=a.n(v),h=a(100),j=a.n(h),O=a(169),S=a(167),N=a.n(S),w=a(168),k=a.n(w),A=a(97),x=a.n(A),I=a(170),C=a(33),B=a.n(C),T=a(81),F=a.n(T),M=a(59),P=a.n(M),_=a(26),J=(a(139),a(22),a(140)),L=a.n(J),V=a(37),q=a(328),z=a(329),U=a(330),D=a(144),W=function(e){var t=e.page,a=e.pages,n=e.setPage,l=function(e,t){var a=Math.min(e+2+(e<3?Math.abs(3-e):0),t);return Object(D.a)(Math.max(a-4,1),a+1)}(t,a),c=function(e){return function(t){t.preventDefault(),n(e)}},o=l[0]>1,i=a>l[l.length-1];return r.a.createElement(q.a,{"aria-label":"Collection pagination",className:"collection-pagination"},r.a.createElement(z.a,{disabled:1===t},r.a.createElement(U.a,{onClick:c(t-1)},r.a.createElement("i",{className:"fa fa-chevron-left fa-sm"}))),o&&r.a.createElement(z.a,{disabled:!0},r.a.createElement(U.a,null,"…")),l.map((function(e){return r.a.createElement(z.a,{key:e,active:e===t},r.a.createElement(U.a,{onClick:c(e)},r.a.createElement("strong",null,e)))})),i&&r.a.createElement(z.a,{disabled:!0},r.a.createElement(U.a,null,"…")),r.a.createElement(z.a,{disabled:t===a},r.a.createElement(U.a,{onClick:c(t+1)},r.a.createElement("i",{className:"fa fa-chevron-right fa-sm"}))))};W.propTypes={page:b.a.any,pages:b.a.any,setPage:b.a.func};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var K=[12,24,48],Q=Object(_.a)(P.a.parse(location.search),"page",1),R=Object(_.a)(P.a.parse(location.search),"brand","all");b.a.object;var X=function(e){var t=e.link,a=e.mobile,l=G(Object(o.b)(),1)[0],c=!!l[1]&&l[1].url===t.url,i=G(Object(n.useState)(c),2),s=i[0],u=i[1];return r.a.createElement("div",{className:"sidenav-accordion"},r.a.createElement("div",{className:p()("sidenav-accordion-header",{active:c,"py-2":a})},r.a.createElement("a",{href:t.url},t.label),r.a.createElement("i",{className:p()("fa p-2",{"fa-plus":!s,"fa-minus":s}),onClick:function(){return u(!s)}})),s&&r.a.createElement("ul",null,t.links.map((function(e,t){var a=c&&!!l[2]&&l[2].url===e.url;return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url,className:p()({active:a})},e.label))}))))};X.propTypes={link:b.a.object,mobile:b.a.bool};var Y=function(e){var t=e.collection,a=e.vendors,l=e.mobile,c=void 0===l||l,i=e.selectBrand,s=e.brand,u=G(Object(o.b)(),1)[0],m=G(Object(n.useState)(t.currentVendor),2),f=(m[0],m[1],Object(V.b)("department")),b=G(u[0]?Object(O.a)(f,(function(e){return e.url===u[0].url})):[[],f],2),d=b[0],p=b[1],g=d.length+p.length>0;return r.a.createElement(n.Fragment,null,!g&&r.a.createElement(B.a,{color:"primary",className:"text-center mb-4"},r.a.createElement(L.a,{type:"grow",size:"sm",className:"mr-2"}),"Loading departments…"),r.a.createElement(y.a,null,r.a.createElement(E.a,{for:"filter-brand"},r.a.createElement("h5",null,"Shop Brands")),r.a.createElement(j.a,{id:"filter-brand",type:"select",bsSize:"sm",onChange:function(e){console.log("1.."),console.log(i),console.log("2.."),console.log("3.."),i(e.target.value),console.log("got here")},value:s},r.a.createElement("option",{value:"all"},"All Brands"),a.map((function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.name)})))),r.a.createElement("hr",{className:"my-4"}),d.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"mb-4"},"Filter by Subcategory"),r.a.createElement("div",{className:"current-subcategory"},r.a.createElement("h6",{className:"subcat-icon d-flex align-items-center mb-3"},r.a.createElement("img",{src:u[0].icon,className:"mr-2",alt:"icon"}),r.a.createElement("span",null,u[0].label))),d[0].links.map((function(e,t){return r.a.createElement(X,{key:t,link:e,mobile:c})})),r.a.createElement("hr",{className:"my-4"})),p.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"rest-departments py-2 py-lg-0"},p.map((function(e,t){return r.a.createElement("a",{key:t,href:e.url,className:"h6 subcat-icon d-flex align-items-center"},r.a.createElement("img",{src:e.icon,className:"mr-3 mr-lg-2",alt:"icon"}),r.a.createElement("span",null,e.label))})))))};Y.propTypes={collection:b.a.object,vendors:b.a.array,mobile:b.a.bool};var Z=function(e){var t,a=e.collection,l=e.vendors,c=(t=parseInt(localStorage.getItem("collection_results_per_page"),10),Object(I.a)(K,t)?t:K[1]),o=G(Object(n.useState)(!1),2),i=o[0],s=o[1],u=G(Object(n.useState)(c),2),m=u[0],f=(u[1],G(Object(n.useState)(a.sortBy),2)),b=f[0],d=(f[1],G(Object(n.useState)(Q),2)),g=d[0],y=(d[1],G(Object(n.useState)(null),2)),v=(y[0],y[1],G(Object(n.useState)(R),2)),E=v[0],h=v[1],j=G(Object(n.useState)(null),2);j[0],j[1];return Object(n.useEffect)((function(){var e=Q;window.history.replaceState({},"",function(e,t,a,n,r,l){var c={sort_by:t,brand:a,view:l,page:n};return console.log(t),console.log(a),console.log(r),console.log(l),r&&(c.q=r),F()(null,{path:"/collections/".concat(e),queryParams:c})}(a.handle,b,E,e,a.currentVendor))}),[a.handle,b,E,m,g,a.currentVendor]),Object(n.useEffect)((function(){$("html, body").animate({scrollTop:0},500)}),[g]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"d-none d-lg-block"},r.a.createElement(Y,{selectBrand:function(e){return h(e)},collection:a,vendors:l,mobile:!1})),r.a.createElement("div",{className:"d-lg-none"},r.a.createElement(N.a,{outline:!0,color:"primary",className:"mb-4"},r.a.createElement(k.a,{className:"py-1 px-3 bg-primary text-white d-flex align-items-center justify-content-between",onClick:function(){return s(!i)}},r.a.createElement("div",{className:"filter-card-title"},"Filter"),r.a.createElement("i",{className:p()("fa p-2",{"fa-plus":!i,"fa-minus":i})}))),r.a.createElement(x.a,{isOpen:i},r.a.createElement(Y,{selectBrand:function(e){return h(e)},brand:E,collection:a,vendors:l}),r.a.createElement("hr",{className:"long-af"}))))};Z.propTypes={collection:b.a.object,vendors:b.a.array};var ee=Z;a(6);Object(_.a)(P.a.parse(location.search),"page",1);console.log("running");var te=document.getElementById("list-collection-nav"),ae=(document.getElementById("collection-products-container"),JSON.parse($(te).text().trim()));console.log("got here data",ae),c.a.render(r.a.createElement(m,null,r.a.createElement(ee,ae)),te);var ne=document.getElementById("collection-breadcrumbs-root"),re=ne.dataset.collections.split(/,/g),le=ne.dataset.collectionLabels.split(/,/g),ce=ne.dataset.parent;c.a.render(r.a.createElement(o.a,{collections:re,collectionLabels:le,currentActive:!0,parent:ce}),ne);var oe;oe=parseInt(ae.subcollectionNumber)>6,$(".collection-carousel").slick({slidesToScroll:1,arrows:!0,focusOnSelect:!1,infinite:oe,swipeToSlide:!0,prevArrow:'<i class="carousel-prev fa fa-chevron-left"></i>',nextArrow:'<i class="carousel-next fa fa-chevron-right"></i>',variableWidth:!0})}},[[322,0,1]]]);

(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    322: function(e, t, a) {
        "use strict";
        a.r(t);
        a(32),
        a(162),
        a(119);
        var n = a(0)
          , r = a.n(n)
          , l = a(8)
          , c = a.n(l)
          , o = a(66);
        a(72),
        a(15),
        a(117),
        a(41),
        a(163),
        a(204);
        function i(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , n = !0
                  , r = !1
                  , l = void 0;
                try {
                    for (var c, o = e[Symbol.iterator](); !(n = (c = o.next()).done) && (a.push(c.value),
                    !t || a.length !== t); n = !0)
                        ;
                } catch (e) {
                    r = !0,
                    l = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw l
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return s(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return s(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        var u = Object(n.createContext)()
          , m = function(e) {
            var t = i(Object(n.useState)(null), 2)
              , a = t[0]
              , l = t[1];
            return r.a.createElement(u.Provider, {
                value: {
                    products: a,
                    setProducts: l
                }
            }, e.children)
        }
          , f = a(1)
          , b = a.n(f)
          , d = a(2)
          , p = a.n(d)
          , g = (a(3),
        a(98))
          , y = a.n(g)
          , v = a(99)
          , E = a.n(v)
          , h = a(100)
          , j = a.n(h)
          , O = a(169)
          , S = a(167)
          , N = a.n(S)
          , w = a(168)
          , k = a.n(w)
          , A = a(97)
          , x = a.n(A)
          , I = a(170)
          , C = a(33)
          , B = a.n(C)
          , T = a(81)
          , F = a.n(T)
          , M = a(59)
          , P = a.n(M)
          , _ = a(26)
          , J = (a(139),
        a(22),
        a(140))
          , L = a.n(J)
          , V = a(37)
          , q = a(328)
          , z = a(329)
          , U = a(330)
          , D = a(144)
          , W = function(e) {
            var t = e.page
              , a = e.pages
              , n = e.setPage
              , l = function(e, t) {
                var a = Math.min(e + 2 + (e < 3 ? Math.abs(3 - e) : 0), t);
                return Object(D.a)(Math.max(a - 4, 1), a + 1)
            }(t, a)
              , c = function(e) {
                return function(t) {
                    t.preventDefault(),
                    n(e)
                }
            }
              , o = l[0] > 1
              , i = a > l[l.length - 1];
            return r.a.createElement(q.a, {
                "aria-label": "Collection pagination",
                className: "collection-pagination"
            }, r.a.createElement(z.a, {
                disabled: 1 === t
            }, r.a.createElement(U.a, {
                onClick: c(t - 1)
            }, r.a.createElement("i", {
                className: "fa fa-chevron-left fa-sm"
            }))), o && r.a.createElement(z.a, {
                disabled: !0
            }, r.a.createElement(U.a, null, "…")), l.map((function(e) {
                return r.a.createElement(z.a, {
                    key: e,
                    active: e === t
                }, r.a.createElement(U.a, {
                    onClick: c(e)
                }, r.a.createElement("strong", null, e)))
            }
            )), i && r.a.createElement(z.a, {
                disabled: !0
            }, r.a.createElement(U.a, null, "…")), r.a.createElement(z.a, {
                disabled: t === a
            }, r.a.createElement(U.a, {
                onClick: c(t + 1)
            }, r.a.createElement("i", {
                className: "fa fa-chevron-right fa-sm"
            }))))
        };
        W.propTypes = {
            page: b.a.any,
            pages: b.a.any,
            setPage: b.a.func
        };
        function G(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var a = []
                  , n = !0
                  , r = !1
                  , l = void 0;
                try {
                    for (var c, o = e[Symbol.iterator](); !(n = (c = o.next()).done) && (a.push(c.value),
                    !t || a.length !== t); n = !0)
                        ;
                } catch (e) {
                    r = !0,
                    l = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw l
                    }
                }
                return a
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return H(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return H(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function H(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        var K = [12, 24, 48]
          , Q = Object(_.a)(P.a.parse(location.search), "page", 1)
          , R = Object(_.a)(P.a.parse(location.search), "brand", "all");
        b.a.object;
        var X = function(e) {
            var t = e.link
              , a = e.mobile
              , l = G(Object(o.b)(), 1)[0]
              , c = !!l[1] && l[1].url === t.url
              , i = G(Object(n.useState)(c), 2)
              , s = i[0]
              , u = i[1];
            return r.a.createElement("div", {
                className: "sidenav-accordion"
            }, r.a.createElement("div", {
                className: p()("sidenav-accordion-header", {
                    active: c,
                    "py-2": a
                })
            }, r.a.createElement("a", {
                href: t.url
            }, t.label), r.a.createElement("i", {
                className: p()("fa p-2", {
                    "fa-plus": !s,
                    "fa-minus": s
                }),
                onClick: function() {
                    return u(!s)
                }
            })), s && r.a.createElement("ul", null, t.links.map((function(e, t) {
                var a = c && !!l[2] && l[2].url === e.url;
                return r.a.createElement("li", {
                    key: t
                }, r.a.createElement("a", {
                    href: e.url,
                    className: p()({
                        active: a
                    })
                }, e.label))
            }
            ))))
        };
        X.propTypes = {
            link: b.a.object,
            mobile: b.a.bool
        };
        var Y = function(e) {
            var t = e.collection
              , a = e.vendors
              , l = e.mobile
              , c = void 0 === l || l
              , i = e.selectBrand
              , s = e.brand
              , u = G(Object(o.b)(), 1)[0]
              , m = G(Object(n.useState)(t.currentVendor), 2)
              , f = (m[0],
            m[1],
            Object(V.b)("department"))
              , b = G(u[0] ? Object(O.a)(f, (function(e) {
                return e.url === u[0].url
            }
            )) : [[], f], 2)
              , d = b[0]
              , p = b[1]
              , g = d.length + p.length > 0;
            return r.a.createElement(n.Fragment, null, !g && r.a.createElement(B.a, {
                color: "primary",
                className: "text-center mb-4"
            }, r.a.createElement(L.a, {
                type: "grow",
                size: "sm",
                className: "mr-2"
            }), "Loading departments…"), r.a.createElement(y.a, null, r.a.createElement(E.a, {
                for: "filter-brand"
            }, r.a.createElement("h5", null, "Shop Brands")), r.a.createElement(j.a, {
                id: "filter-brand",
                type: "select",
                bsSize: "sm",
                onChange: function(e) {
                    console.log("1.."),
                    console.log(i),
                    console.log("2.."),
                    console.log("3.."),
                    i(e.target.value),
                    console.log("got here")
                },
                value: s
            }, r.a.createElement("option", {
                value: "all"
            }, "All Brands"), a.map((function(e, t) {
                return r.a.createElement("option", {
                    key: t,
                    value: e.name
                }, e.name)
            }
            )))), r.a.createElement("hr", {
                className: "my-4"
            }), d.length > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("h5", {
                className: "mb-4"
            }, "Filter by Subcategory"), r.a.createElement("div", {
                className: "current-subcategory"
            }, r.a.createElement("h6", {
                className: "subcat-icon d-flex align-items-center mb-3"
            }, r.a.createElement("img", {
                src: u[0].icon,
                className: "mr-2",
                alt: "icon"
            }), r.a.createElement("span", null, u[0].label))), d[0].links.map((function(e, t) {
                return r.a.createElement(X, {
                    key: t,
                    link: e,
                    mobile: c
                })
            }
            )), r.a.createElement("hr", {
                className: "my-4"
            })), p.length > 0 && r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "rest-departments py-2 py-lg-0"
            }, p.map((function(e, t) {
                return r.a.createElement("a", {
                    key: t,
                    href: e.url,
                    className: "h6 subcat-icon d-flex align-items-center"
                }, r.a.createElement("img", {
                    src: e.icon,
                    className: "mr-3 mr-lg-2",
                    alt: "icon"
                }), r.a.createElement("span", null, e.label))
            }
            )))))
        };
        Y.propTypes = {
            collection: b.a.object,
            vendors: b.a.array,
            mobile: b.a.bool
        };
        var Z = function(e) {
            var t, a = e.collection, l = e.vendors, c = (t = parseInt(localStorage.getItem("collection_results_per_page"), 10),
            Object(I.a)(K, t) ? t : K[1]), o = G(Object(n.useState)(!1), 2), i = o[0], s = o[1], u = G(Object(n.useState)(c), 2), m = u[0], f = (u[1],
            G(Object(n.useState)(a.sortBy), 2)), b = f[0], d = (f[1],
            G(Object(n.useState)(Q), 2)), g = d[0], y = (d[1],
            G(Object(n.useState)(null), 2)), v = (y[0],
            y[1],
            G(Object(n.useState)(R), 2)), E = v[0], h = v[1], j = G(Object(n.useState)(null), 2);
            j[0],
            j[1];
            return Object(n.useEffect)((function() {
                /*var e = Q;
                window.history.replaceState({}, "", function(e, t, a, n, r, l) {
                    var c = {
                        sort_by: t,
                        brand: a,
                        view: l
                        //page: n
                    };
                    return console.log(t),
                    console.log(a),
                    console.log(r),
                      console.log(n),
                    console.log(l),
                    r && (c.q = r),
                    F()(null, {
                        path: "/collections/".concat(e),
                        queryParams: c
                    })
                }(a.handle, b, E, e, a.currentVendor))*/
            }
            ), [a.handle, b, E, m, g, a.currentVendor]),
            Object(n.useEffect)((function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500)
            }
            ), [g]),
            r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "d-none d-lg-block"
            }, r.a.createElement(Y, {
                selectBrand: function(e) {
                    return h(e)
                },
                collection: a,
                vendors: l,
                mobile: !1
            })), r.a.createElement("div", {
                className: "d-lg-none"
            }, r.a.createElement(N.a, {
                outline: !0,
                color: "primary",
                className: "mb-4"
            }, r.a.createElement(k.a, {
                className: "py-1 px-3 bg-primary text-white d-flex align-items-center justify-content-between",
                onClick: function() {
                    return s(!i)
                }
            }, r.a.createElement("div", {
                className: "filter-card-title"
            }, "Filter"), r.a.createElement("i", {
                className: p()("fa p-2", {
                    "fa-plus": !i,
                    "fa-minus": i
                })
            }))), r.a.createElement(x.a, {
                isOpen: i
            }, r.a.createElement(Y, {
                selectBrand: function(e) {
                    return h(e)
                },
                brand: E,
                collection: a,
                vendors: l
            }), r.a.createElement("hr", {
                className: "long-af"
            }))))
        };
        Z.propTypes = {
            collection: b.a.object,
            vendors: b.a.array
        };
        var ee = Z;
        a(6);
        Object(_.a)(P.a.parse(location.search), "page", 1);
        console.log("running");
        var te = document.getElementById("list-collection-nav")
          , ae = (document.getElementById("collection-products-container"),
        JSON.parse($(te).text().trim()));
        console.log("got here data", ae),
        c.a.render(r.a.createElement(m, null, r.a.createElement(ee, ae)), te);
        var ne = document.getElementById("collection-breadcrumbs-root")
          , re = ne.dataset.collections.split(/,/g)
          , le = ne.dataset.collectionLabels.split(/,/g)
          , ce = ne.dataset.parent;
        c.a.render(r.a.createElement(o.a, {
            collections: re,
            collectionLabels: le,
            currentActive: !0,
            parent: ce
        }), ne);
        var oe;
        oe = parseInt(ae.subcollectionNumber) > 6,
        $(".collection-carousel").slick({
            slidesToScroll: 1,
            arrows: !0,
            focusOnSelect: !1,
            infinite: oe,
            swipeToSlide: !0,
            prevArrow: '<i class="carousel-prev fa fa-chevron-left"></i>',
            nextArrow: '<i class="carousel-next fa fa-chevron-right"></i>',
            variableWidth: !0
        })
    }
}, [[322, 0, 1]]]);
