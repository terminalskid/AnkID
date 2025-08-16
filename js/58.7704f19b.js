"use strict";
(self["webpackChunknnbosus_bankid"] = self["webpackChunknnbosus_bankid"] || []).push([[58], {
    5058: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return b
            }
        });
        var n = a(641)
          , s = a(33);
        const r = {
            class: "id-container"
        }
          , o = {
            class: "id-content"
        }
          , i = ["src"]
          , l = {
            key: 0,
            src: "/checkmark.png",
            alt: "Checkmark",
            class: "checkmark"
        }
          , u = {
            class: "age"
        }
          , c = {
            key: 1,
            class: "raw-data"
        }
          , d = {
            class: "buttons"
        };
        function k(e, t, a, k, m, g) {
            return (0,
            n.uX)(),
            (0,
            n.CE)("div", r, [t[1] || (t[1] = (0,
            n.Lk)("div", {
                class: "header"
            }, [(0,
            n.Lk)("button", {
                class: "back-btn"
            }, "BankID"), (0,
            n.Lk)("h1", {
                class: "title"
            }, "ID verifiering"), (0,
            n.Lk)("img", {
                src: "/bankid-logo.png",
                alt: "BankID Logo",
                class: "logo"
            })], -1)), (0,
            n.Lk)("div", o, [(0,
            n.Lk)("img", {
                src: g.img,
                alt: "ID Bild",
                class: "id-photo"
            }, null, 8, i), g.name ? ((0,
            n.uX)(),
            (0,
            n.CE)("img", l)) : (0,
            n.Q3)("", !0), (0,
            n.Lk)("h2", null, (0,
            s.v_)(g.name), 1), (0,
            n.Lk)("p", null, (0,
            s.v_)(g.personnummer), 1), (0,
            n.Lk)("p", u, (0,
            s.v_)(g.age) + " år", 1), e.rawData ? ((0,
            n.uX)(),
            (0,
            n.CE)("p", c, "Rå QR-data: " + (0,
            s.v_)(e.rawData), 1)) : (0,
            n.Q3)("", !0)]), (0,
            n.Lk)("div", d, [(0,
            n.Lk)("button", {
                onClick: t[0] || (t[0] = (...e) => g.closeTab && g.closeTab(...e)),
                class: "close-btn"
            }, "Stäng")])])
        }
        var m = {
            computed: {
                qrData() {
                    try {
                        return JSON.parse(decodeURIComponent(this.$route.query.data || "{}"))
                    } catch {
                        return {}
                    }
                },
                name() {
                    return this.qrData.name || "Okänt Namn"
                },
                personnummer() {
                    return this.qrData.personnummer || "XXXXXX-XXXX"
                },
                img() {
                    return this.qrData.img || "/default_profile.png"
                },
                age() {
                    return this.calculateAge(this.personnummer)
                }
            },
            methods: {
                calculateAge(e) {
                    if (!/^\d{6}-?\d{4}$/.test(e))
                        return "?";
                    let t = parseInt(e.substring(0, 2), 10);
                    const a = parseInt(e.substring(2, 4), 10) - 1
                      , n = parseInt(e.substring(4, 6), 10)
                      , s = (new Date).getFullYear()
                      , r = 100 * Math.floor(s / 100)
                      , o = t > s % 100 ? r - 100 + t : r + t
                      , i = new Date(o,a,n)
                      , l = new Date;
                    let u = l.getFullYear() - i.getFullYear();
                    return l < new Date(l.getFullYear(),a,n) && u--,
                    u
                },
                expireSession() {
                    alert("Sessionen har gått ut."),
                    window.close(),
                    setTimeout(( () => {
                        window.location.replace("about:blank")
                    }
                    ), 500)
                },
                closeTab() {
                    alert("Sidan stängs nu."),
                    window.close(),
                    setTimeout(( () => {
                        window.location.replace("about:blank")
                    }
                    ), 500)
                }
            },
            mounted() {
                this.expirationTimer = setTimeout(this.expireSession, 6e4)
            },
            beforeUnmount() {
                clearTimeout(this.expirationTimer)
            }
        }
          , g = a(6262);
        const p = (0,
        g.A)(m, [["render", k], ["__scopeId", "data-v-1a5d4ab3"]]);
        var b = p
    }
}]);
//# sourceMappingURL=58.7704f19b.js.map
