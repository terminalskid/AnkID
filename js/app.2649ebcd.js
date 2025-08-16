(function() {
    "use strict";
    var e = {
        2669: function(e, t, s) {
            var n = s(3751)
              , i = s(641);
            function o(e, t, s, n, o, a) {
                const r = (0,
                i.g2)("router-view");
                return (0,
                i.uX)(),
                (0,
                i.Wv)(r)
            }
            var a = {
                name: "App",
                mounted() {
                    this.$store.dispatch("checkLicenseValidity")
                }
            }
              , r = s(6262);
            const c = (0,
            r.A)(a, [["render", o]]);
            var l = c
              , d = s(5220)
              , u = s(33);
            const h = {
                class: "activation-container"
            }
              , m = {
                class: "input-container"
            }
              , g = {
                key: 0,
                class: "success-message"
            }
              , p = {
                key: 1,
                class: "error-message"
            };
            function k(e, t, s, o, a, r) {
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", h, [t[2] || (t[2] = (0,
                i.Lk)("h2", null, "BankID Login Page", -1)), (0,
                i.Lk)("div", m, [(0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => a.licenseKey = e),
                    placeholder: "Enter License Key",
                    class: "license-input"
                }, null, 512), [[n.Jo, a.licenseKey]])]), (0,
                i.Lk)("button", {
                    onClick: t[1] || (t[1] = (...e) => r.activateKey && r.activateKey(...e)),
                    class: "activate-btn"
                }, "Activate"), a.activationStatus ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", g, (0,
                u.v_)(a.activationStatus), 1)) : (0,
                i.Q3)("", !0), a.errorMessage ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", p, (0,
                u.v_)(a.errorMessage), 1)) : (0,
                i.Q3)("", !0)])
            }
            s(4114);
            var f = s(6278)
              , v = {
                data() {
                    return {
                        licenseKey: "",
                        activationStatus: "",
                        errorMessage: ""
                    }
                },
                methods: {
                    ...(0,
                    f.i0)(["activateLicense", "login"]),
                    async activateKey() {
                        const e = await this.$store.dispatch("activateLicense", this.licenseKey);
                        if (e && e.success) {
                            localStorage.setItem("licenseKey", this.licenseKey);
                            const e = await this.$store.dispatch("login", {
                                password: "bankidsecure123"
                            });
                            e.success ? (this.activationStatus = "License activated successfully and logged in!",
                            this.$router.push({
                                name: "Home"
                            })) : this.errorMessage = e.error || "Authentication failed!"
                        } else
                            this.errorMessage = e?.error || "Invalid or already used license key!"
                    }
                }
            };
            const y = (0,
            r.A)(v, [["render", k], ["__scopeId", "data-v-39571fbe"]]);
            var L = y;
            const C = {
                key: 0,
                class: "loading-screen"
            }
              , w = {
                key: 1,
                class: "container"
            }
              , b = {
                class: "page main-page"
            }
              , I = {
                class: "footer"
            };
            function S(e, t, s, o, a, r) {
                const c = (0,
                i.g2)("SettingsPage")
                  , l = (0,
                i.g2)("router-view");
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", null, [a.isLoading ? ((0,
                i.uX)(),
                (0,
                i.CE)("div", C, t[5] || (t[5] = [(0,
                i.Fv)('<header class="logo-header" data-v-f63bf5bc><img src="/bankid-logo.png" alt="BankID Logo" class="bankid-logo2" data-v-f63bf5bc></header><div class="spinner" data-v-f63bf5bc></div><footer class="id-card-button" data-v-f63bf5bc><img src="/idcard.png" alt="ID Icon" class="id-icon" data-v-f63bf5bc><span class="idtext" style="font-size:18px;font-weight:400;" data-v-f63bf5bc>ID-kort</span></footer>', 3)]))) : ((0,
                i.uX)(),
                (0,
                i.CE)("div", w, [(0,
                i.bo)((0,
                i.Lk)("div", b, [t[11] || (t[11] = (0,
                i.Lk)("header", null, [(0,
                i.Lk)("div", {
                    class: "logo-container"
                }, [(0,
                i.Lk)("img", {
                    src: "/bankid-logo.png",
                    alt: "Logo",
                    class: "logo"
                })])], -1)), (0,
                i.Lk)("main", null, [t[7] || (t[7] = (0,
                i.Lk)("div", {
                    class: "protection-text"
                }, [(0,
                i.Lk)("p", null, [(0,
                i.eW)("Skydda ditt BankID."), (0,
                i.Lk)("br"), (0,
                i.eW)("Använd aldrig ditt BankID på uppmaning av någon som kontaktar dig.")])], -1)), (0,
                i.Lk)("button", {
                    onClick: t[0] || (t[0] = (...e) => r.handleQrScanClick && r.handleQrScanClick(...e)),
                    class: "qr-btn"
                }, t[6] || (t[6] = [(0,
                i.Lk)("img", {
                    src: "/qrkod.png",
                    alt: "QR Icon",
                    class: "qr-btn-icon"
                }, null, -1), (0,
                i.eW)(" Skanna QR-kod ")]))]), (0,
                i.Lk)("footer", I, [(0,
                i.Lk)("div", {
                    onClick: t[1] || (t[1] = e => r.navigateTo("history")),
                    class: "footer-item",
                    id: "history-btn"
                }, t[8] || (t[8] = [(0,
                i.Lk)("img", {
                    src: "/history.png",
                    class: "footer-icon"
                }, null, -1), (0,
                i.Lk)("span", null, "Min historik", -1)])), (0,
                i.Lk)("div", {
                    onClick: t[2] || (t[2] = (...e) => r.handleIdCardClick && r.handleIdCardClick(...e)),
                    class: "footer-item",
                    id: "idcard-btn"
                }, t[9] || (t[9] = [(0,
                i.Lk)("img", {
                    src: "/idcard.png",
                    class: "footer-icon"
                }, null, -1), (0,
                i.Lk)("span", null, "ID-kort", -1)])), (0,
                i.Lk)("div", {
                    onClick: t[3] || (t[3] = (...e) => r.openSettingsPage && r.openSettingsPage(...e)),
                    class: "footer-item",
                    id: "settings-btn"
                }, t[10] || (t[10] = [(0,
                i.Lk)("img", {
                    src: "/settings.png",
                    class: "footer-icon"
                }, null, -1), (0,
                i.Lk)("span", null, "Inställningar", -1)]))])], 512), [[n.aG, e.isAuthenticated]]), (0,
                i.Lk)("div", {
                    class: (0,
                    u.C4)(["page settings-page", {
                        "slide-in": a.showSettings,
                        "slide-out": !a.showSettings
                    }])
                }, [(0,
                i.bF)(c), (0,
                i.Lk)("button", {
                    onClick: t[4] || (t[4] = (...e) => r.closeSettingsPage && r.closeSettingsPage(...e)),
                    class: "back-btn"
                }, t[12] || (t[12] = [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-left"
                }, null, -1), (0,
                i.eW)(" Tillbaka ")]))], 2)])), (0,
                i.bF)(n.eB, {
                    name: "slide"
                }, {
                    default: (0,
                    i.k6)(( () => [r.isCameraView ? ((0,
                    i.uX)(),
                    (0,
                    i.Wv)(l, {
                        key: "camera-view"
                    })) : (0,
                    i.Q3)("", !0)])),
                    _: 1
                })])
            }
            const E = {
                id: "app"
            }
              , D = {
                class: "shift-left"
            }
              , T = {
                class: "settings-section general-section"
            }
              , x = {
                class: "settings-item förbättra-bankid"
            }
              , A = {
                class: "switch"
            }
              , M = {
                class: "settings-section bankid-section"
            }
              , N = {
                class: "user-section"
            }
              , O = {
                class: "user-info",
                style: {
                    display: "flex",
                    "align-items": "center"
                }
            }
              , R = {
                style: {
                    "font-weight": "500",
                    "font-size": "19px"
                }
            }
              , K = {
                style: {
                    "font-weight": "500",
                    "font-size": "19px"
                }
            };
            function $(e, t, s, o, a, r) {
                const c = (0,
                i.g2)("ChangeCode");
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", E, [a.showSettingsPage ? ((0,
                i.uX)(),
                (0,
                i.CE)("div", {
                    key: 0,
                    class: "page settings-page",
                    style: (0,
                    u.Tr)({
                        left: a.settingsPageStyle
                    })
                }, [(0,
                i.Lk)("div", D, [t[22] || (t[22] = (0,
                i.Lk)("header", {
                    class: "settings-header"
                }, [(0,
                i.Lk)("div", {
                    class: "header-content"
                }, [(0,
                i.Lk)("h1", null, "Inställningar")])], -1)), t[23] || (t[23] = (0,
                i.Lk)("div", {
                    class: "section-title"
                }, "ALLMÄNT", -1)), (0,
                i.Lk)("div", T, [t[9] || (t[9] = (0,
                i.Fv)('<div class="settings-item"><img class="settings-item-icon" src="/faceid.png" alt="Face ID Icon"><span>Face ID för BankID</span><span class="arrow"><i class="fa-solid fa-chevron-right"></i></span></div><div class="settings-item"><img class="settings-item-icon" src="/språk.png" alt="Language Icon"><span>Språk</span><span class="arrow"><i class="fa-solid fa-chevron-right"></i></span></div><div class="settings-item"><img class="settings-item-icon" src="/om.png" alt="About Icon"><span>Om BankID</span><span class="arrow"><i class="fa-solid fa-chevron-right"></i></span></div>', 3)), (0,
                i.Lk)("div", x, [t[7] || (t[7] = (0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/förbättra.png",
                    alt: "Improve Icon"
                }, null, -1)), t[8] || (t[8] = (0,
                i.Lk)("span", null, "Förbättra BankID", -1)), (0,
                i.Lk)("label", A, [(0,
                i.bo)((0,
                i.Lk)("input", {
                    type: "checkbox",
                    id: "improve-bankid-toggle",
                    "onUpdate:modelValue": t[0] || (t[0] = e => a.improveBankID = e)
                }, null, 512), [[n.lH, a.improveBankID]]), t[6] || (t[6] = (0,
                i.Lk)("span", {
                    class: "slider"
                }, null, -1))])]), t[10] || (t[10] = (0,
                i.Lk)("div", {
                    class: "improve-bankid-description"
                }, " Förbättra appen genom att låta utvecklarna ta del av anonym information om hur den används. Informationen delas inte med någon annan. ", -1))]), t[24] || (t[24] = (0,
                i.Lk)("div", {
                    class: "section-title"
                }, "BANKID", -1)), (0,
                i.Lk)("div", M, [(0,
                i.Lk)("div", N, [(0,
                i.Lk)("span", O, [t[15] || (t[15] = (0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/profil.png",
                    alt: "User Image",
                    style: {
                        "margin-bottom": "55px"
                    }
                }, null, -1)), (0,
                i.Lk)("div", null, [(0,
                i.Lk)("a", R, (0,
                u.v_)(r.userFirstName || e.errorMessage || "Laddar..."), 1), t[11] || (t[11] = (0,
                i.Lk)("br", null, null, -1)), (0,
                i.Lk)("a", K, " Giltig till: " + (0,
                u.v_)(r.formattedExpireDate || "Laddar..."), 1), t[12] || (t[12] = (0,
                i.Lk)("br", null, null, -1)), t[13] || (t[13] = (0,
                i.Lk)("br", null, null, -1)), t[14] || (t[14] = (0,
                i.Lk)("a", {
                    style: {
                        "font-size": "14px",
                        color: "#D1D1D1"
                    }
                }, [(0,
                i.eW)("Bank: Nordea Bank Abp, fillial i Sverige"), (0,
                i.Lk)("br"), (0,
                i.eW)(" Skapat: 2024-10-30 05:17")], -1))])])]), (0,
                i.Lk)("div", {
                    class: "settings-item",
                    onClick: t[1] || (t[1] = e => r.navigateTo("history"))
                }, t[16] || (t[16] = [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/historik.png",
                    alt: "History Icon"
                }, null, -1), (0,
                i.Lk)("span", null, "Min BankID-historik", -1), (0,
                i.Lk)("span", {
                    class: "arrow"
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })], -1)])), (0,
                i.Lk)("div", {
                    class: "settings-item",
                    onClick: t[2] || (t[2] = e => a.showChangeCode = !0)
                }, t[17] || (t[17] = [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/säkerhetskod.png",
                    alt: "Edit Icon"
                }, null, -1), (0,
                i.Lk)("span", null, "Ändra säkerhetskod", -1), (0,
                i.Lk)("span", {
                    class: "arrow"
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })], -1)])), (0,
                i.Lk)("div", {
                    class: "settings-item",
                    onClick: t[3] || (t[3] = (...e) => r.showLicenseKey && r.showLicenseKey(...e))
                }, t[18] || (t[18] = [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/licenseicon.png",
                    alt: "License Icon",
                    style: {
                        height: "20px",
                        width: "auto"
                    }
                }, null, -1), (0,
                i.Lk)("span", {
                    style: {
                        "margin-left": "2px"
                    }
                }, "Licensekod", -1), (0,
                i.Lk)("span", {
                    class: "arrow"
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })], -1)])), t[20] || (t[20] = (0,
                i.Lk)("div", {
                    class: "settings-item",
                    onclick: "window.open('https://discord.gg/x2UpEhDMWw', '_blank')"
                }, [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    style: {
                        height: "18px",
                        width: "auto",
                        "margin-left": "1px"
                    },
                    src: "/discord.png",
                    alt: "Discord"
                }), (0,
                i.Lk)("span", null, "Discord"), (0,
                i.Lk)("span", {
                    class: "arrow"
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })])], -1)), t[21] || (t[21] = (0,
                i.Lk)("div", {
                    class: "settings-item"
                }, [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    style: {
                        height: "22px",
                        width: "auto",
                        "margin-left": "2px"
                    },
                    src: "/id-kort.png",
                    alt: "ID Card Icon"
                }), (0,
                i.Lk)("span", null, "ID-kort"), (0,
                i.Lk)("span", {
                    class: "arrow"
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })])], -1)), (0,
                i.Lk)("div", {
                    class: "settings-item",
                    style: {
                        color: "#ff3a00"
                    },
                    onClick: t[4] || (t[4] = (...e) => r.confirmLogout && r.confirmLogout(...e))
                }, t[19] || (t[19] = [(0,
                i.Lk)("img", {
                    class: "settings-item-icon",
                    src: "/radera.png",
                    alt: "Trash Icon"
                }, null, -1), (0,
                i.Lk)("span", null, "Radera BankID", -1), (0,
                i.Lk)("span", {
                    class: "arrow",
                    style: {
                        "margin-right": "10px"
                    }
                }, [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-right"
                })], -1)]))]), t[25] || (t[25] = (0,
                i.Fv)('<div class="section-title">NYTT</div><div class="settings-section nytt-section"><div class="settings-item"><img class="settings-item-icon" src="/aktivera.png" alt="Plus Icon"><span>Aktivera BankID</span><span class="arrow"><i class="fa-solid fa-chevron-right"></i></span></div></div>', 2))])], 4)) : (0,
                i.Q3)("", !0), a.showChangeCode ? ((0,
                i.uX)(),
                (0,
                i.Wv)(c, {
                    key: 1,
                    onClose: t[5] || (t[5] = e => a.showChangeCode = !1)
                })) : (0,
                i.Q3)("", !0)])
            }
            s(8992),
            s(2577);
            const _ = {
                class: "settings-header",
                style: {
                    "background-color": "#183e4f"
                }
            }
              , B = {
                class: "change-code-content"
            }
              , F = ["disabled"]
              , U = ["disabled"]
              , P = {
                key: 0,
                class: "error"
            }
              , Q = {
                key: 1,
                class: "success"
            }
              , X = {
                key: 0,
                class: "numpad-overlay"
            }
              , J = {
                class: "numpad"
            }
              , V = ["onClick"]
              , q = {
                class: "digit"
            }
              , W = {
                class: "letters"
            }
              , H = ["disabled"];
            function j(e, t, s, o, a, r) {
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", {
                    class: (0,
                    u.C4)(["change-code-page", {
                        slideIn: a.show
                    }])
                }, [(0,
                i.Lk)("header", _, [(0,
                i.Lk)("button", {
                    onClick: t[0] || (t[0] = (...e) => r.closePage && r.closePage(...e)),
                    class: "back-btn"
                }, t[13] || (t[13] = [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-left"
                }, null, -1), (0,
                i.eW)(" Tillbaka ")])), t[14] || (t[14] = (0,
                i.Lk)("div", {
                    class: "header-content"
                }, [(0,
                i.Lk)("h1", null, "Säkerhetskod")], -1))]), (0,
                i.Lk)("div", B, [t[15] || (t[15] = (0,
                i.Lk)("div", {
                    class: "warning-box"
                }, " Tänk på att din kod är personlig. Dela den inte med någon. ", -1)), (0,
                i.bo)((0,
                i.Lk)("input", {
                    type: "password",
                    id: "oldCode",
                    "onUpdate:modelValue": t[1] || (t[1] = e => a.oldCode = e),
                    placeholder: "Nuvarande säkerhetskod",
                    onFocus: t[2] || (t[2] = e => r.focusInput("oldCode")),
                    onInput: t[3] || (t[3] = e => r.checkInput("oldCode")),
                    maxlength: "6",
                    ref: "oldCodeInput"
                }, null, 544), [[n.Jo, a.oldCode]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    type: "password",
                    id: "newCode",
                    "onUpdate:modelValue": t[4] || (t[4] = e => a.newCode = e),
                    placeholder: "Ny kod (minst 6 siffror)",
                    onFocus: t[5] || (t[5] = e => r.focusInput("newCode")),
                    onInput: t[6] || (t[6] = e => r.checkInput("newCode")),
                    maxlength: "6",
                    ref: "newCodeInput",
                    disabled: !a.oldCodeVerified
                }, null, 40, F), [[n.Jo, a.newCode]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    type: "password",
                    id: "confirmCode",
                    "onUpdate:modelValue": t[7] || (t[7] = e => a.confirmCode = e),
                    placeholder: "Bekräfta kod",
                    onFocus: t[8] || (t[8] = e => r.focusInput("confirmCode")),
                    onInput: t[9] || (t[9] = e => r.checkInput("confirmCode")),
                    maxlength: "6",
                    ref: "confirmCodeInput",
                    disabled: !a.oldCodeVerified
                }, null, 40, U), [[n.Jo, a.confirmCode]]), a.errorMessage ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", P, (0,
                u.v_)(a.errorMessage), 1)) : (0,
                i.Q3)("", !0), a.successMessage ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", Q, (0,
                u.v_)(a.successMessage), 1)) : (0,
                i.Q3)("", !0)]), (0,
                i.bF)(n.eB, {
                    name: "slide-up"
                }, {
                    default: (0,
                    i.k6)(( () => [a.showNumpad ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", X, [(0,
                    i.Lk)("div", J, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(a.numpadKeys, (e => ((0,
                    i.uX)(),
                    (0,
                    i.CE)("button", {
                        key: e,
                        onClick: t => r.enterDigit(e)
                    }, [(0,
                    i.Lk)("span", q, (0,
                    u.v_)(e), 1), (0,
                    i.Lk)("span", W, (0,
                    u.v_)(a.numpadLetters[e]), 1)], 8, V)))), 128)), (0,
                    i.Lk)("button", {
                        class: "delete-btn",
                        onClick: t[10] || (t[10] = (...e) => r.deleteDigit && r.deleteDigit(...e))
                    }, "⌫"), (0,
                    i.Lk)("button", {
                        class: "zero-btn",
                        onClick: t[11] || (t[11] = e => r.enterDigit(0))
                    }, "0"), (0,
                    i.Lk)("button", {
                        class: "confirm-btn",
                        onClick: t[12] || (t[12] = (...e) => r.handleButtonClick && r.handleButtonClick(...e)),
                        disabled: !r.isButtonEnabled,
                        style: {
                            fontSize: "22px",
                            fontWeight: "300"
                        }
                    }, (0,
                    u.v_)(r.buttonText), 9, H)])])) : (0,
                    i.Q3)("", !0)])),
                    _: 1
                })], 2)
            }
            var z = {
                data() {
                    return {
                        oldCode: "",
                        newCode: "",
                        confirmCode: "",
                        errorMessage: "",
                        successMessage: "",
                        show: !1,
                        showNumpad: !0,
                        focusedInput: null,
                        storedSecurityCode: "",
                        oldCodeVerified: !1,
                        numpadKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        numpadLetters: {
                            1: "",
                            2: "ABC",
                            3: "DEF",
                            4: "GHI",
                            5: "JKL",
                            6: "MNO",
                            7: "PQRS",
                            8: "TUV",
                            9: "WXYZ"
                        }
                    }
                },
                mounted() {
                    this.show = !0,
                    this.focusInput("oldCode"),
                    this.loadSecurityCode()
                },
                computed: {
                    buttonText() {
                        return "confirmCode" === this.focusedInput ? "Ok" : "Nästa"
                    },
                    isButtonEnabled() {
                        return "oldCode" === this.focusedInput && 6 === this.oldCode.length || "newCode" === this.focusedInput && 6 === this.newCode.length || "confirmCode" === this.focusedInput && 6 === this.confirmCode.length
                    }
                },
                methods: {
                    closePage() {
                        this.show = !1,
                        this.showNumpad = !1,
                        setTimeout(( () => this.$emit("close")), 300)
                    },
                    loadSecurityCode() {
                        const e = localStorage.getItem("securityCode");
                        e ? (console.log("✅ Loaded Security Code:", e),
                        this.storedSecurityCode = e) : (console.warn("⚠️ No security code found! Setting default."),
                        this.storedSecurityCode = "123456",
                        localStorage.setItem("securityCode", this.storedSecurityCode))
                    },
                    verifyOldCode() {
                        this.oldCode === this.storedSecurityCode ? (this.oldCodeVerified = !0,
                        this.errorMessage = "") : (this.oldCodeVerified = !1,
                        this.errorMessage = "Fel nuvarande säkerhetskod!")
                    },
                    async applyNewCode() {
                        if (this.verifyOldCode(),
                        !this.oldCodeVerified)
                            return void (this.errorMessage = "Fel nuvarande säkerhetskod!");
                        if (!this.newCode || !this.confirmCode)
                            return void (this.errorMessage = "Alla fält måste fyllas i!");
                        if (this.newCode !== this.confirmCode)
                            return void (this.errorMessage = "Ny kod och bekräftelsekod matchar inte!");
                        if (this.newCode === this.oldCode)
                            return void (this.errorMessage = "Den nya koden kan inte vara samma som den gamla!");
                        const e = localStorage.getItem("licenseKey");
                        if (e)
                            try {
                                const t = await this.$store.dispatch("changeSecurityCode", {
                                    licenseKey: e,
                                    newCode: this.newCode
                                });
                                t.success ? (this.successMessage = "Säkerhetskod ändrad!",
                                localStorage.setItem("securityCode", this.newCode),
                                setTimeout(( () => this.closePage()), 1e3)) : this.errorMessage = t.error || "Ett fel uppstod!"
                            } catch (t) {
                                this.errorMessage = "Misslyckades med att ändra säkerhetskod!",
                                console.error(t)
                            }
                        else
                            this.errorMessage = "Kunde inte hitta licensnyckeln!"
                    },
                    enterDigit(e) {
                        this.focusedInput && this[this.focusedInput].length < 6 && (this[this.focusedInput] += e)
                    },
                    deleteDigit() {
                        this.focusedInput && this[this.focusedInput].length > 0 && (this[this.focusedInput] = this[this.focusedInput].slice(0, -1))
                    },
                    focusInput(e) {
                        this.focusedInput = e,
                        this.$nextTick(( () => {
                            this.$refs[e] && this.$refs[e].focus()
                        }
                        ))
                    },
                    checkInput(e) {
                        "oldCode" === e && 6 === this.oldCode.length && this.verifyOldCode(),
                        6 === this[e].length && this.moveToNextInput()
                    },
                    moveToNextInput() {
                        "oldCode" === this.focusedInput && 6 === this.oldCode.length ? this.focusInput("newCode") : "newCode" === this.focusedInput && 6 === this.newCode.length && this.focusInput("confirmCode")
                    },
                    handleButtonClick() {
                        "oldCode" === this.focusedInput && 6 === this.oldCode.length ? (this.verifyOldCode(),
                        this.oldCodeVerified && this.moveToNextInput()) : "confirmCode" === this.focusedInput && 6 === this.confirmCode.length ? this.applyNewCode() : this.moveToNextInput()
                    }
                }
            };
            const G = (0,
            r.A)(z, [["render", j], ["__scopeId", "data-v-344c6fa3"]]);
            var Y = G
              , Z = {
                name: "UserSettings",
                components: {
                    ChangeCode: Y
                },
                data() {
                    return {
                        showSettingsPage: !0,
                        settingsPageStyle: "0",
                        showChangeCode: !1,
                        improveBankID: JSON.parse(localStorage.getItem("improveBankID")) || !1
                    }
                },
                computed: {
                    userFirstName() {
                        const e = this.$store.getters.allLicenses.find((e => e.key === localStorage.getItem("licenseKey")));
                        return e ? e.fornamn : null
                    },
                    formattedExpireDate() {
                        const e = this.$store.getters.allLicenses.find((e => e.key === localStorage.getItem("licenseKey")));
                        if (e && e.expireDate) {
                            const t = new Date(e.expireDate);
                            return t.toISOString().split("T")[0]
                        }
                        return null
                    }
                },
                watch: {
                    userFirstName(e) {
                        e && localStorage.setItem("userFirstName", e)
                    },
                    formattedExpireDate(e) {
                        e && localStorage.setItem("expireDate", e)
                    }
                },
                methods: {
                    openSettings() {
                        this.showSettingsPage = !0,
                        this.$nextTick(( () => {
                            this.settingsPageStyle = "0"
                        }
                        ))
                    },
                    closeSettings() {
                        this.settingsPageStyle = "100%",
                        setTimeout(( () => {
                            this.showSettingsPage = !1
                        }
                        ), 300)
                    },
                    navigateTo(e) {
                        alert(`Navigating to '${e}'...`)
                    },
                    confirmLogout() {
                        window.confirm("Är du säker på att du vill logga ut?") && this.logout()
                    },
                    logout() {
                        this.$store.dispatch("logout"),
                        this.$store.dispatch("setNeedsRedirect", !0),
                        setTimeout(( () => {
                            this.$store.getters.needsRedirect && this.$router.push("/")
                        }
                        ), 100)
                    },
                    showLicenseKey() {
                        const e = localStorage.getItem("licenseKey");
                        e ? (alert(`Din licensekod har kopierats och är: ${e}`),
                        this.copyToClipboard(e)) : alert("Ingen licensekod hittades.")
                    },
                    copyToClipboard(e) {
                        const t = document.createElement("input");
                        document.body.appendChild(t),
                        t.value = e,
                        t.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(t)
                    }
                }
            };
            const ee = (0,
            r.A)(Z, [["render", $]]);
            var te = ee
              , se = {
                components: {
                    SettingsPage: te
                },
                data() {
                    return {
                        showSettings: !1,
                        isLoading: !1
                    }
                },
                computed: {
                    ...(0,
                    f.L8)(["isAuthenticated"]),
                    isBankIdActive() {
                        return "BankIdComponent" === this.$route.name
                    },
                    isActivationPage() {
                        return "LicenseActivation" === this.$route.name
                    },
                    isCameraView() {
                        return "CameraView" === this.$route.name
                    }
                },
                methods: {
                    openSettingsPage() {
                        this.showSettings = !0
                    },
                    closeSettingsPage() {
                        this.showSettings = !1
                    },
                    handleIdCardClick() {
                        this.isLoading = !0,
                        setTimeout(( () => {
                            this.isLoading = !1,
                            this.$router.push({
                                name: "BankIdComponent"
                            })
                        }
                        ), 2e3)
                    },
                    navigateTo(e) {
                        alert(`Navigating to '${e}'...`)
                    },
                    handleQrScanClick() {
                        this.$router.push({
                            name: "CameraView"
                        })
                    }
                },
                mounted() {
                    document.body.style.overflow = "hidden",
                    document.documentElement.style.overflow = "hidden",
                    document.body.style.touchAction = "none",
                    document.documentElement.style.touchAction = "none",
                    document.body.style.userSelect = "none",
                    document.documentElement.style.userSelect = "none"
                },
                beforeUnmount() {
                    document.body.style.overflow = "",
                    document.documentElement.style.overflow = "",
                    document.body.style.touchAction = "",
                    document.documentElement.style.touchAction = "",
                    document.body.style.userSelect = "",
                    document.documentElement.style.userSelect = ""
                }
            };
            const ne = (0,
            r.A)(se, [["render", S], ["__scopeId", "data-v-f63bf5bc"]]);
            var ie = ne;
            const oe = {
                class: "admin-container"
            }
              , ae = {
                key: 0,
                class: "admin-panel"
            }
              , re = {
                key: 1,
                class: "create-license-form"
            }
              , ce = {
                key: 0,
                type: "submit"
            }
              , le = {
                key: 2,
                class: "table-container"
            }
              , de = ["onClick"]
              , ue = ["onClick"]
              , he = ["onClick"];
            function me(e, t, s, o, a, r) {
                const c = (0,
                i.g2)("AdminLogin");
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", oe, [a.isAuthenticated ? ((0,
                i.uX)(),
                (0,
                i.CE)("div", ae, [t[12] || (t[12] = (0,
                i.Lk)("h2", null, "Admin Panel - BankID", -1)), e.showAdminLogs ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("button", {
                    key: 0,
                    class: "logout",
                    onClick: t[0] || (t[0] = (...e) => r.logout && r.logout(...e))
                }, "Logga ut")), e.showAdminLogs ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("div", re, [t[10] || (t[10] = (0,
                i.Lk)("h3", null, "Licensekod Formulär", -1)), (0,
                i.Lk)("form", {
                    onSubmit: t[8] || (t[8] = (0,
                    n.D$)(( (...e) => r.createLicense && r.createLicense(...e)), ["prevent"]))
                }, [(0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[1] || (t[1] = e => a.newLicense.discordTag = e),
                    type: "text",
                    required: "",
                    placeholder: "Ange Discord Tag"
                }, null, 512), [[n.Jo, a.newLicense.discordTag]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[2] || (t[2] = e => a.newLicense.fornamn = e),
                    type: "text",
                    required: "",
                    placeholder: "Ange Förnamn"
                }, null, 512), [[n.Jo, a.newLicense.fornamn]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[3] || (t[3] = e => a.newLicense.personnummer = e),
                    type: "text",
                    required: "",
                    placeholder: "Ange Personnummer"
                }, null, 512), [[n.Jo, a.newLicense.personnummer]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[4] || (t[4] = e => a.newLicense.imgurLink = e),
                    type: "url",
                    required: "",
                    placeholder: "Ange Imgur länk"
                }, null, 512), [[n.Jo, a.newLicense.imgurLink]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[5] || (t[5] = e => a.newLicense.expireDate = e),
                    type: "date",
                    required: "",
                    placeholder: "Välj utgångsdatum"
                }, null, 512), [[n.Jo, a.newLicense.expireDate]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[6] || (t[6] = e => a.searchQuery = e),
                    type: "text",
                    placeholder: "Sök med Discord-tagg eller licensnyckel",
                    onInput: t[7] || (t[7] = (...e) => r.searchLicense && r.searchLicense(...e))
                }, null, 544), [[n.Jo, a.searchQuery]]), a.selectedLicense ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("button", ce, "Skapa Licensekod"))], 32), a.selectedLicense ? ((0,
                i.uX)(),
                (0,
                i.CE)("button", {
                    key: 0,
                    onClick: t[9] || (t[9] = (...e) => r.saveLicense && r.saveLicense(...e)),
                    class: "save-update-btn"
                }, "Spara Uppdateringar")) : (0,
                i.Q3)("", !0)])), e.showAdminLogs ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("div", le, [(0,
                i.Lk)("table", null, [t[11] || (t[11] = (0,
                i.Lk)("thead", null, [(0,
                i.Lk)("tr", null, [(0,
                i.Lk)("th", null, "License Key"), (0,
                i.Lk)("th", null, "Discord Tag"), (0,
                i.Lk)("th", null, "Expire Date"), (0,
                i.Lk)("th", null, "Status"), (0,
                i.Lk)("th", null, "Actions")])], -1)), (0,
                i.Lk)("tbody", null, [((0,
                i.uX)(!0),
                (0,
                i.CE)(i.FK, null, (0,
                i.pI)(r.filteredLicenses, (e => ((0,
                i.uX)(),
                (0,
                i.CE)("tr", {
                    key: e.key
                }, [(0,
                i.Lk)("td", {
                    onClick: t => r.copyToClipboard(e.key)
                }, (0,
                u.v_)(e.key), 9, de), (0,
                i.Lk)("td", null, (0,
                u.v_)(e.discordTag), 1), (0,
                i.Lk)("td", null, (0,
                u.v_)(e.expireDate), 1), (0,
                i.Lk)("td", {
                    class: (0,
                    u.C4)({
                        active: !e.used,
                        used: e.used
                    })
                }, (0,
                u.v_)(e.used ? "Använd" : "Aktiv"), 3), (0,
                i.Lk)("td", null, [(0,
                i.Lk)("button", {
                    class: (0,
                    u.C4)(e.used ? "deactivate" : "activate"),
                    onClick: t => r.toggleLicense(e)
                }, (0,
                u.v_)(e.used ? "Avaktivera" : "Aktivera"), 11, ue), (0,
                i.Lk)("button", {
                    class: "delete",
                    onClick: t => r.deleteLicense(e.key)
                }, "Radera", 8, he)])])))), 128))])])]))])) : ((0,
                i.uX)(),
                (0,
                i.Wv)(c, {
                    key: 1
                }))])
            }
            s(4520);
            var ge = s(223)
              , pe = s(7031)
              , ke = s(9933);
            const fe = {
                  apiKey: "AIzaSyCJh0ARcWbIQHGN4M5XtAZMZhMtIg1ZxVA",
                  authDomain: "vankid-2c171.firebaseapp.com",
                  databaseURL: "https://vankid-2c171-default-rtdb.europe-west1.firebasedatabase.app",
                  projectId: "vankid-2c171",
                  storageBucket: "vankid-2c171.firebasestorage.app",
                  messagingSenderId: "484312711818",
                  appId: "1:484312711818:web:6a8a288e7987d552242373"
            }
              , ve = (0,
            ge.Wp)(fe)
              , ye = (0,
            pe.xI)(ve)
              , Le = (0,
            ke.C3)(ve);
            function Ce() {
                let e = localStorage.getItem("deviceId");
                return e || (e = Math.random().toString(36).substring(2) + Date.now().toString(36),
                localStorage.setItem("deviceId", e)),
                e
            }
            async function we(e) {
                try {
                    if (!e)
                        return !1;
                    const t = ["C9wbUkB8HLUfnDFKEnwocYLHyik2", "JMOHvaG5Yod0uKKSZWVmzmLLZDX2"];
                    if (!t.includes(e))
                        return !1;
                    const s = (0,
                    ke.KR)(Le, `userStatus/${e}`)
                      , n = await (0,
                    ke.Jt)(s)
                      , i = n.val();
                    if (i && i.loggedIn) {
                        const e = i.deviceId
                          , t = Ce();
                        if (e !== t)
                            return console.error("⛔ User is already logged in on another device!"),
                            !1
                    }
                    return !0
                } catch (t) {
                    return console.error("🚨 Permission check error:", t.message),
                    !1
                }
            }
            async function be(e) {
                const t = (0,
                ke.KR)(Le, `userStatus/${e}`);
                await (0,
                ke.hZ)(t, {
                    loggedIn: !0,
                    deviceId: Ce()
                })
            }
            async function Ie(e) {
                const t = (0,
                ke.KR)(Le, `userStatus/${e}`)
                  , s = await (0,
                ke.Jt)(t)
                  , n = s.val();
                n && n.deviceId === Ce() && await (0,
                ke.TF)(t)
            }
            async function Se(e, t) {
                try {
                    const s = await (0,
                    pe.x9)(ye, e, t)
                      , n = s.user
                      , i = await we(n.uid);
                    return i ? (await be(n.uid),
                    localStorage.setItem("adminUID", n.uid),
                    {
                        success: !0,
                        user: n
                    }) : (await (0,
                    pe.CI)(ye),
                    {
                        success: !1,
                        error: "Användaren är redan inloggad på annan enhet"
                    })
                } catch (s) {
                    return {
                        success: !1,
                        error: s.message
                    }
                }
            }
            async function Ee() {
                try {
                    const e = ye.currentUser;
                    return e && await Ie(e.uid),
                    localStorage.removeItem("adminUID"),
                    await (0,
                    pe.CI)(ye),
                    {
                        success: !0
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e.message
                    }
                }
            }
            function De(e) {
                (0,
                pe.hg)(ye, (async t => {
                    if (!t)
                        return void e(!1);
                    const s = await we(t.uid);
                    if (!s)
                        return await Ee(),
                        void e(!1);
                    await be(t.uid),
                    localStorage.setItem("adminUID", t.uid),
                    e(!0)
                }
                ))
            }
            function Te() {
                Ee()
            }
            const xe = {
                class: "login-container"
            }
              , Ae = {
                key: 0,
                class: "error-message"
            };
            function Me(e, t, s, o, a, r) {
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", xe, [t[4] || (t[4] = (0,
                i.Lk)("h2", null, "Admin Login", -1)), (0,
                i.Lk)("form", {
                    onSubmit: t[2] || (t[2] = (0,
                    n.D$)(( (...e) => r.handleLogin && r.handleLogin(...e)), ["prevent"]))
                }, [(0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => a.email = e),
                    type: "email",
                    placeholder: "Enter email",
                    required: "",
                    style: {
                        width: "90%",
                        "margin-left": "5%",
                        "background-color": "transparent",
                        color: "#fff"
                    }
                }, null, 512), [[n.Jo, a.email]]), (0,
                i.bo)((0,
                i.Lk)("input", {
                    "onUpdate:modelValue": t[1] || (t[1] = e => a.password = e),
                    type: "password",
                    placeholder: "Enter password",
                    required: "",
                    style: {
                        width: "90%",
                        "margin-left": "5%",
                        "background-color": "transparent",
                        color: "#fff"
                    }
                }, null, 512), [[n.Jo, a.password]]), t[3] || (t[3] = (0,
                i.Lk)("button", {
                    type: "submit",
                    class: "login-btn",
                    style: {
                        width: "90%",
                        "margin-left": "5%"
                    }
                }, "Login", -1))], 32), a.errorMessage ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", Ae, (0,
                u.v_)(a.errorMessage), 1)) : (0,
                i.Q3)("", !0)])
            }
            var Ne = {
                data() {
                    return {
                        email: "",
                        password: "",
                        errorMessage: ""
                    }
                },
                methods: {
                    async handleLogin() {
                        const e = await Se(this.email, this.password);
                        e.success ? this.$emit("login-success") : this.errorMessage = e.error
                    }
                }
            };
            const Oe = (0,
            r.A)(Ne, [["render", Me], ["__scopeId", "data-v-d2552574"]]);
            var Re = Oe
              , Ke = {
                components: {
                    AdminLogin: Re
                },
                data() {
                    return {
                        newLicense: {
                            discordTag: "",
                            imgurLink: "",
                            expireDate: "",
                            personnummer: "",
                            fornamn: ""
                        },
                        searchQuery: "",
                        selectedLicense: null,
                        isAuthenticated: !1
                    }
                },
                computed: {
                    ...(0,
                    f.L8)(["allLicenses"]),
                    licenses() {
                        return this.allLicenses
                    },
                    filteredLicenses() {
                        return this.licenses.filter((e => {
                            const t = this.searchQuery.toLowerCase()
                              , s = e.discordTag ? e.discordTag.toLowerCase() : ""
                              , n = e.key ? e.key.toLowerCase() : "";
                            return s.includes(t) || n.includes(t)
                        }
                        )).sort(( (e, t) => new Date(e.expireDate) - new Date(t.expireDate)))
                    }
                },
                methods: {
                    ...(0,
                    f.i0)(["addLicense", "removeLicense", "toggleLicenseStatus", "fetchLicenses", "updateLicense"]),
                    async logAdminLogin(e) {
                        try {
                            const t = (new Date).getTime()
                              , s = (0,
                            ke.VC)((0,
                            ke.KR)(Le, "adminLogs"));
                            await (0,
                            ke.hZ)(s, {
                                adminEmail: e,
                                timestamp: t
                            }),
                            console.log("Admin login recorded successfully!")
                        } catch (t) {
                            console.error("Error recording admin login:", t)
                        }
                    },
                    async fetchAdminLogs() {
                        try {
                            const e = (0,
                            ke.KR)(Le, "adminLogs")
                              , t = await (0,
                            ke.Jt)(e);
                            t.exists() ? (this.adminLogs = Object.values(t.val()),
                            console.log("Fetched Admin Logs:", this.adminLogs)) : console.log("No logs found.")
                        } catch (e) {
                            console.error("Error fetching admin logs:", e)
                        }
                    },
                    setupRealtimeLogs() {
                        const e = (0,
                        ke.KR)(Le, "adminLogs");
                        (0,
                        ke._O)(e, (e => {
                            const t = e.val();
                            this.adminLogs.push(t)
                        }
                        ))
                    },
                    async clearLogs() {
                        try {
                            const e = (0,
                            ke.KR)(Le, "adminLogs");
                            await (0,
                            ke.hZ)(e, null),
                            this.adminLogs = [],
                            console.log("Admin logs cleared!")
                        } catch (e) {
                            console.error("Error clearing admin logs:", e)
                        }
                    },
                    async toggleAdminLogs() {
                        this.showAdminLogs || (console.log("Fetching Admin Logs..."),
                        await this.fetchAdminLogs(),
                        this.setupRealtimeLogs()),
                        this.showAdminLogs = !this.showAdminLogs
                    },
                    copyToClipboard(e) {
                        navigator.clipboard && navigator.clipboard.writeText(e).then(( () => alert("Licensekod kopierad"))).catch(( () => alert("Fel vid kopiering.")))
                    },
                    createLicense() {
                        const {discordTag: e, imgurLink: t, expireDate: s, personnummer: n, fornamn: i} = this.newLicense;
                        e && t && s && n && i ? this.addLicense({
                            discordTag: e,
                            expireDate: s,
                            imgurLink: t,
                            personnummer: n,
                            fornamn: i
                        }).then(( () => {
                            alert("License Key Created Successfully!"),
                            this.newLicense = {
                                discordTag: "",
                                imgurLink: "",
                                expireDate: "",
                                personnummer: "",
                                fornamn: ""
                            }
                        }
                        )) : alert("Vänligen fyll i alla fält!")
                    },
                    async toggleLicense(e) {
                        const t = !e.used
                          , s = e.used;
                        e.used = t;
                        try {
                            await this.toggleLicenseStatus({
                                licenseKey: e.key,
                                used: t
                            })
                        } catch (n) {
                            e.used = s,
                            alert("Fel vid uppdatering av licensstatus. Försök igen.")
                        }
                    },
                    deleteLicense(e) {
                        confirm("Är du säker på att du vill radera Licensekoden?") && (this.removeLicense(e),
                        alert("Licensekod Raderad!"))
                    },
                    searchLicense() {
                        if (!this.searchQuery)
                            return this.newLicense = {
                                discordTag: "",
                                imgurLink: "",
                                expireDate: "",
                                personnummer: "",
                                fornamn: ""
                            },
                            void (this.selectedLicense = null);
                        const e = this.licenses.find((e => e.discordTag && e.discordTag.toLowerCase() === this.searchQuery.toLowerCase() || e.key && e.key.toLowerCase() === this.searchQuery.toLowerCase()));
                        e ? (this.selectedLicense = {
                            ...e
                        },
                        this.newLicense = {
                            ...e
                        }) : this.selectedLicense = null
                    },
                    saveLicense() {
                        if (this.selectedLicense) {
                            const e = this.licenses.find((e => e.key === this.selectedLicense.key));
                            if (!e)
                                return void alert("Fel: Licensen hittades inte.");
                            const t = {
                                ...this.selectedLicense,
                                ...this.newLicense,
                                used: e.used
                            };
                            this.updateLicense(t).then(( () => {
                                alert("License Updated Successfully!"),
                                this.newLicense = {
                                    discordTag: "",
                                    imgurLink: "",
                                    expireDate: "",
                                    personnummer: "",
                                    fornamn: ""
                                },
                                this.searchQuery = "",
                                this.selectedLicense = null
                            }
                            )).catch((e => alert("Fel vid uppdatering av licens: " + e.message)))
                        }
                    },
                    logout() {
                        Te(),
                        this.isAuthenticated = !1
                    }
                },
                mounted() {
                    De((e => {
                        if (this.isAuthenticated = e,
                        e) {
                            this.fetchLicenses();
                            const e = (0,
                            pe.xI)()
                              , t = e.currentUser;
                            t && this.logAdminLogin(t.email)
                        }
                    }
                    ))
                }
            };
            const $e = (0,
            r.A)(Ke, [["render", me]]);
            var _e = $e;
            const Be = {
                class: "bankid-container"
            }
              , Fe = {
                class: "bankid-header"
            }
              , Ue = {
                class: "user-name",
                style: {
                    "margin-bottom": "1px"
                }
            }
              , Pe = {
                key: 0,
                class: "error-message"
            }
              , Qe = {
                key: 0,
                class: "loading-box"
            }
              , Xe = {
                class: "bankid-footer"
            }
              , Je = {
                key: 0,
                class: "numpad-overlay"
            }
              , Ve = {
                class: "numpad"
            }
              , qe = ["onClick"]
              , We = {
                class: "digit"
            }
              , He = {
                class: "letters"
            }
              , je = ["disabled"];
            function ze(e, t, s, o, a, r) {
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", Be, [(0,
                i.Lk)("header", Fe, [(0,
                i.Lk)("button", {
                    class: "back-btn",
                    onClick: t[0] || (t[0] = (...e) => r.goBack && r.goBack(...e))
                }, "Avbryt"), t[6] || (t[6] = (0,
                i.Lk)("span", {
                    class: "title"
                }, "IDENTIFIERING", -1)), t[7] || (t[7] = (0,
                i.Lk)("img", {
                    src: "/bankid-logo.png",
                    alt: "BankID Logo",
                    class: "bankid-logo"
                }, null, -1))]), (0,
                i.Lk)("main", {
                    class: (0,
                    u.C4)({
                        "bankid-content": !0,
                        "bankid-content-active": a.showNumpad
                    })
                }, [(0,
                i.Lk)("p", Ue, (0,
                u.v_)(a.userFirstName ? a.userFirstName.toUpperCase() : "LADDAR..."), 1), t[9] || (t[9] = (0,
                i.Fv)('<p class="info-text" data-v-512761fc>Jag identifierar mig hos:</p><p class="highlighted-text" data-v-512761fc>BankID ID-kort</p><hr class="divider" data-v-512761fc><p class="avsikt-text" data-v-512761fc>Min avsikt:</p><p class="id-kort" data-v-512761fc>Visa ID-kort.</p>', 5)), a.errorMessage ? ((0,
                i.uX)(),
                (0,
                i.CE)("p", Pe, (0,
                u.v_)(a.errorMessage), 1)) : (0,
                i.Q3)("", !0), (0,
                i.bF)(n.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    i.k6)(( () => [a.loading ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", Qe, t[8] || (t[8] = [(0,
                    i.Lk)("p", {
                        class: "loading-text"
                    }, "Vänligen vänta...", -1)]))) : (0,
                    i.Q3)("", !0)])),
                    _: 1
                })], 2), (0,
                i.Lk)("footer", Xe, [a.showNumpad ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("button", {
                    key: 0,
                    class: "security-btn",
                    onClick: t[1] || (t[1] = (...e) => r.startSecurityCodeProcess && r.startSecurityCodeProcess(...e))
                }, "Identifiera med säkerhetskod"))]), (0,
                i.bF)(n.eB, {
                    name: "slide-up"
                }, {
                    default: (0,
                    i.k6)(( () => [a.showNumpad ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", Je, [(0,
                    i.bo)((0,
                    i.Lk)("input", {
                        type: "password",
                        class: "security-input",
                        "onUpdate:modelValue": t[2] || (t[2] = e => a.securityCode = e),
                        disabled: "",
                        placeholder: "Säkerhetskod",
                        style: {
                            "text-align": "left"
                        }
                    }, null, 512), [[n.Jo, a.securityCode]]), (0,
                    i.Lk)("div", Ve, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(a.numpadKeys, (e => ((0,
                    i.uX)(),
                    (0,
                    i.CE)("button", {
                        key: e,
                        onClick: t => r.enterDigit(e)
                    }, [(0,
                    i.Lk)("span", We, (0,
                    u.v_)(e), 1), (0,
                    i.Lk)("span", He, (0,
                    u.v_)(a.numpadLetters[e]), 1)], 8, qe)))), 128)), (0,
                    i.Lk)("button", {
                        class: "delete-btn",
                        onClick: t[3] || (t[3] = (...e) => r.deleteDigit && r.deleteDigit(...e))
                    }, "⌫"), (0,
                    i.Lk)("button", {
                        class: "zero-btn",
                        onClick: t[4] || (t[4] = e => r.enterDigit(0))
                    }, "0"), (0,
                    i.Lk)("button", {
                        class: "confirm-btn",
                        onClick: t[5] || (t[5] = (...e) => r.confirmSecurityCode && r.confirmSecurityCode(...e)),
                        disabled: a.securityCode.length < 6,
                        style: {
                            "font-size": "22px",
                            "font-weight": "300"
                        }
                    }, " Identifiera ", 8, je)])])) : (0,
                    i.Q3)("", !0)])),
                    _: 1
                })])
            }
            var Ge = {
                data() {
                    return {
                        userFirstName: null,
                        errorMessage: null,
                        loading: !1,
                        securityCode: "",
                        showNumpad: !1,
                        attemptsLeft: 5,
                        lockoutTime: 0,
                        timer: null,
                        inactivityTimer: null,
                        numpadKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        numpadLetters: {
                            1: "",
                            2: "ABC",
                            3: "DEF",
                            4: "GHI",
                            5: "JKL",
                            6: "MNO",
                            7: "PQRS",
                            8: "TUV",
                            9: "WXYZ"
                        }
                    }
                },
                mounted() {
                    this.loadUserData(),
                    this.checkLockout();
                    const e = localStorage.getItem("failedAttempts");
                    this.attemptsLeft = e ? parseInt(e, 10) : 5,
                    this.lockoutTime > Date.now() && (alert(`Du är blockerad i ${this.getRemainingLockoutTime()} minuter pga för många inloggningsförsök!`),
                    this.$router.push("/")),
                    this.resetInactivityTimer(),
                    document.body.style.overflow = "hidden",
                    document.documentElement.style.overflow = "hidden",
                    document.body.style.touchAction = "none",
                    document.documentElement.style.touchAction = "none",
                    document.body.style.userSelect = "none",
                    document.documentElement.style.userSelect = "none",
                    window.addEventListener("mousemove", this.resetInactivityTimer),
                    window.addEventListener("keydown", this.resetInactivityTimer),
                    window.addEventListener("click", this.resetInactivityTimer)
                },
                beforeUnmount() {
                    document.body.style.overflow = "",
                    document.documentElement.style.overflow = "",
                    document.body.style.touchAction = "",
                    document.documentElement.style.touchAction = "",
                    document.body.style.userSelect = "",
                    document.documentElement.style.userSelect = "",
                    this.timer && clearInterval(this.timer),
                    this.inactivityTimer && clearTimeout(this.inactivityTimer),
                    window.removeEventListener("mousemove", this.resetInactivityTimer),
                    window.removeEventListener("keydown", this.resetInactivityTimer),
                    window.removeEventListener("click", this.resetInactivityTimer)
                },
                methods: {
                    goBack() {
                        this.$router.go(-1)
                    },
                    checkLockout() {
                        const e = localStorage.getItem("lockoutTime");
                        if (e) {
                            const t = parseInt(e, 10);
                            t > Date.now() && (this.lockoutTime = t,
                            this.getRemainingLockoutTime() > 10 && (this.lockoutTime = Date.now() + 6e5,
                            localStorage.setItem("lockoutTime", this.lockoutTime)),
                            this.startLockoutTimer())
                        }
                    },
                    startLockoutTimer() {
                        this.timer && clearInterval(this.timer),
                        this.timer = setInterval(( () => {
                            Date.now() >= this.lockoutTime && (clearInterval(this.timer),
                            this.lockoutTime = 0,
                            localStorage.removeItem("lockoutTime"),
                            this.attemptsLeft = 5)
                        }
                        ), 1e3)
                    },
                    getRemainingLockoutTime() {
                        return Math.ceil((this.lockoutTime - Date.now()) / 6e4)
                    },
                    loadUserData() {
                        const e = localStorage.getItem("licenseKey");
                        e ? this.$store.dispatch("fetchLicenses").then(( () => {
                            const t = this.$store.getters.allLicenses.find((t => t.key === e));
                            t && t.fornamn ? this.userFirstName = t.fornamn : this.errorMessage = "Ditt Förnamn kunde inte hämtas! Försök igen."
                        }
                        )).catch(( () => {
                            this.errorMessage = "Kunde inte ansluta till servern. Försök igen."
                        }
                        )) : this.errorMessage = "Ingen licens hittades!"
                    },
                    startSecurityCodeProcess() {
                        this.showNumpad = !0,
                        this.resetInactivityTimer()
                    },
                    enterDigit(e) {
                        this.securityCode.length < 16 && (this.securityCode += e),
                        this.resetInactivityTimer()
                    },
                    deleteDigit() {
                        this.securityCode = this.securityCode.slice(0, -1),
                        this.resetInactivityTimer()
                    },
                    confirmSecurityCode() {
                        this.showNumpad = !1,
                        this.loading = !0,
                        setTimeout(( () => {
                            this.loading = !1;
                            const e = localStorage.getItem("licenseKey")
                              , t = this.$store.getters.allLicenses.find((t => t.key === e));
                            t && this.securityCode === t.säkerhetskod ? (this.attemptsLeft = 5,
                            localStorage.setItem("failedAttempts", this.attemptsLeft),
                            this.$router.push("/id-page")) : (this.attemptsLeft--,
                            localStorage.setItem("failedAttempts", this.attemptsLeft),
                            0 === this.attemptsLeft ? (this.lockoutTime = Date.now() + 6e5,
                            localStorage.setItem("lockoutTime", this.lockoutTime),
                            alert("Du är blockerad i 10 minuter pga för många inloggningsförsök!"),
                            this.$router.push("/")) : (alert(`Fel säkerhetskod. Försök igen. Du har ${this.attemptsLeft} försök kvar.`),
                            this.showNumpad = !0)),
                            this.securityCode = ""
                        }
                        ), 2e3)
                    },
                    resetInactivityTimer() {
                        this.inactivityTimer && clearTimeout(this.inactivityTimer),
                        this.inactivityTimer = setTimeout(( () => {
                            alert("Tiden Gick ut\nIdentifiering avbruten på grund av inaktivitet."),
                            this.$router.push("/")
                        }
                        ), 12e4)
                    }
                }
            };
            const Ye = (0,
            r.A)(Ge, [["render", ze], ["__scopeId", "data-v-512761fc"]]);
            var Ze = Ye
              , et = s.p + "img/bankid-logo.0b9951e0.png";
            const tt = {
                class: "id-container",
                ref: "idContainer"
            }
              , st = {
                class: "id-card",
                ref: "idCard"
            }
              , nt = {
                class: "wave-container"
            }
              , it = ["src"]
              , ot = {
                class: "menu-container"
            }
              , at = {
                key: 0,
                class: "menu-box"
            }
              , rt = {
                class: "id-photo"
            }
              , ct = ["src"]
              , lt = {
                class: "id-age"
            }
              , dt = {
                class: "id-info"
            }
              , ut = {
                class: "name"
            }
              , ht = {
                class: "personnummer"
            }
              , mt = {
                class: "id-qr"
            }
              , gt = {
                class: "progress-bar-container"
            };
            function pt(e, t, s, o, a, r) {
                const c = (0,
                i.g2)("vue-qrcode");
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", {
                    class: "id-page",
                    onMousedown: t[2] || (t[2] = (...e) => r.handleTap && r.handleTap(...e)),
                    onMousemove: t[3] || (t[3] = (...e) => r.onDragMove && r.onDragMove(...e)),
                    onMouseup: t[4] || (t[4] = (...e) => r.endHold && r.endHold(...e)),
                    onTouchstart: t[5] || (t[5] = (...e) => r.handleTap && r.handleTap(...e)),
                    onTouchmove: t[6] || (t[6] = (...e) => r.onDragMove && r.onDragMove(...e)),
                    onTouchend: t[7] || (t[7] = (...e) => r.endHold && r.endHold(...e))
                }, [(0,
                i.Lk)("div", {
                    class: "animated-circle",
                    style: (0,
                    u.Tr)(r.circleStyle)
                }, null, 4), (0,
                i.Lk)("canvas", {
                    ref: "pixelCanvas",
                    class: "pixel-canvas",
                    style: (0,
                    u.Tr)(r.pixelCanvasStyle)
                }, null, 4), (0,
                i.Lk)("div", tt, [(0,
                i.Lk)("div", st, [(0,
                i.Lk)("div", nt, [((0,
                i.uX)(!0),
                (0,
                i.CE)(i.FK, null, (0,
                i.pI)(a.waves, ( (e, t) => ((0,
                i.uX)(),
                (0,
                i.CE)("img", {
                    key: t,
                    src: e.src,
                    class: (0,
                    u.C4)(["wave", e.position, `group${t + 1}`])
                }, null, 10, it)))), 128))]), (0,
                i.Lk)("div", {
                    class: "go-back",
                    onClick: t[0] || (t[0] = (...e) => r.goBack && r.goBack(...e))
                }, "✖"), t[9] || (t[9] = (0,
                i.Lk)("div", {
                    class: "id-header"
                }, [(0,
                i.Lk)("img", {
                    src: et,
                    alt: "BankID Logo",
                    class: "logo"
                })], -1)), (0,
                i.Lk)("div", ot, [(0,
                i.Lk)("div", {
                    class: "menu-icon",
                    onClick: t[1] || (t[1] = (...e) => r.toggleMenu && r.toggleMenu(...e)),
                    style: {
                        "font-size": "27px"
                    }
                }, "⋮"), (0,
                i.bF)(n.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    i.k6)(( () => [a.isMenuOpen ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", at, t[8] || (t[8] = [(0,
                    i.Lk)("a", {
                        href: "https://www.bankid.com/privat/id-kort#har-kan-du-anvanda-ditt-id-kort",
                        class: "menu-item",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, [(0,
                    i.Lk)("img", {
                        src: "/info.png",
                        alt: "Nyheter",
                        class: "menu-icon-img"
                    }), (0,
                    i.eW)("Nyheter ")], -1), (0,
                    i.Lk)("a", {
                        href: "https://www.bankid.com/privat/id-kort#har-kan-du-anvanda-ditt-id-kort",
                        class: "menu-item",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, [(0,
                    i.Lk)("img", {
                        src: "/question.png",
                        alt: "Om ID-Kort",
                        class: "menu-icon-img"
                    }), (0,
                    i.eW)("Om ID-Kort ")], -1)]))) : (0,
                    i.Q3)("", !0)])),
                    _: 1
                })]), (0,
                i.Lk)("div", rt, [(0,
                i.Lk)("img", {
                    src: r.userImg,
                    alt: "User Photo",
                    class: "photo",
                    ref: "backgroundImage",
                    crossorigin: "anonymous"
                }, null, 8, ct), (0,
                i.Lk)("div", lt, (0,
                u.v_)(r.userAge), 1)]), (0,
                i.Lk)("div", dt, [(0,
                i.Lk)("h2", ut, (0,
                u.v_)(e.userData?.fornamn?.toUpperCase() || "UNKNOWN"), 1), (0,
                i.Lk)("p", ht, (0,
                u.v_)(e.userData?.personnummer || "000000-0000"), 1)])], 512)], 512), (0,
                i.Lk)("div", mt, [a.isHolding ? ((0,
                i.uX)(),
                (0,
                i.CE)("div", {
                    key: 0,
                    class: "speech-bubblehold",
                    style: (0,
                    u.Tr)([{
                        background: a.speechBubbleBgColor
                    }, {
                        color: "#fff"
                    }])
                }, t[10] || (t[10] = [(0,
                i.eW)(" För godkänd kontroll:"), (0,
                i.Lk)("br", null, null, -1), (0,
                i.eW)(" Skanna med en BankID-app ")]), 4)) : ((0,
                i.uX)(),
                (0,
                i.CE)("div", {
                    key: 1,
                    class: "speech-bubble",
                    style: (0,
                    u.Tr)({
                        background: a.speechBubbleBgColor
                    })
                }, " Skanna med en BankID-app ", 4)), (0,
                i.bF)(c, {
                    value: r.qrCodeValue,
                    size: 110
                }, null, 8, ["value"]), (0,
                i.Lk)("div", gt, [(0,
                i.Lk)("div", {
                    class: "progress-bar",
                    style: (0,
                    u.Tr)({
                        width: a.progressWidth + "%"
                    })
                }, null, 4)])]), t[11] || (t[11] = (0,
                i.Lk)("p", {
                    class: "qr-description"
                }, [(0,
                i.eW)(" Delas via QR-koden: "), (0,
                i.Lk)("br"), (0,
                i.eW)(" Foto, namn och personnummer ")], -1))], 32)
            }
            s(3949);
            var kt = s(713)
              , ft = s(354)
              , vt = s.n(ft)
              , yt = {
                components: {
                    VueQrcode: kt.A
                },
                data() {
                    return {
                        countdown: 120,
                        progressWidth: 100,
                        interval: null,
                        isDragging: !1,
                        canInteract: !1,
                        isMenuOpen: !1,
                        isHolding: !1,
                        speechBubbleText: "Skanna med en BankID-app",
                        speechBubbleBgColor: "#ffefd5",
                        tapSound: new Audio(s(8653)),
                        holdSound: new Audio(s(37)),
                        releaseSound: new Audio(s(4461)),
                        dragTimeout: null,
                        qrCodeTimer: null,
                        qrCodeUpdateKey: Date.now(),
                        initialCirclePosition: {
                            x: Math.random() * (window.innerWidth - 400),
                            y: Math.random() * (window.innerHeight - 400)
                        },
                        circleAnimationDuration: 40 + 20 * Math.random(),
                        pixelCirclePosition: {
                            x: 0,
                            y: 0
                        },
                        pixelCircleSize: 190,
                        waves: [{
                            src: "/waves1.svg",
                            position: "top"
                        }, {
                            src: "/waves2.svg",
                            position: "middle"
                        }, {
                            src: "/waves3.svg",
                            position: "bottom"
                        }, {
                            src: "/waves4.svg",
                            position: "top"
                        }, {
                            src: "/waves5.svg",
                            position: "middle"
                        }, {
                            src: "/waves6.svg",
                            position: "bottom"
                        }, {
                            src: "/waves7.svg",
                            position: "top"
                        }]
                    }
                },
                computed: {
                    ...(0,
                    f.aH)({
                        userData: e => e.licenses.find((e => e.key === localStorage.getItem("licenseKey"))) || null
                    }),
                    userAge() {
                        if (!this.userData?.personnummer)
                            return "??";
                        const e = parseInt(this.userData.personnummer.substring(0, 2))
                          , t = parseInt(this.userData.personnummer.substring(2, 4))
                          , s = parseInt(this.userData.personnummer.substring(4, 6))
                          , n = (new Date).getFullYear()
                          , i = e < 25 ? 2e3 + e : 1900 + e
                          , o = new Date(i,t - 1,s);
                        let a = n - o.getFullYear();
                        return ((new Date).getMonth() < o.getMonth() || (new Date).getMonth() === o.getMonth() && (new Date).getDate() < o.getDate()) && a--,
                        a
                    },
                    userImg() {
                        return this.userData?.imgurLink || "https://via.placeholder.com/150"
                    },
                    qrCodeValue() {
                        const e = {
                            name: this.userData?.fornamn,
                            personnummer: this.userData?.personnummer,
                            img: this.userData?.imgurLink,
                            timestamp: this.qrCodeUpdateKey
                        }
                          , t = encodeURIComponent(JSON.stringify(e));
                        return `${window.location.origin}/id-control2?data=${t}`
                    },
                    circleStyle() {
                        return {
                            transform: `translate(${this.initialCirclePosition.x}px, ${this.initialCirclePosition.y}px)`
                        }
                    },
                    pixelCanvasStyle() {
                        return {
                            position: "fixed",
                            left: this.pixelCirclePosition.x - this.pixelCircleSize / 2 + "px",
                            top: this.pixelCirclePosition.y - this.pixelCircleSize / 2 + "px",
                            width: `${this.pixelCircleSize}px`,
                            height: `${this.pixelCircleSize}px`,
                            display: this.isDragging ? "block" : "none",
                            pointerEvents: "none",
                            zIndex: 10
                        }
                    }
                },
                watch: {
                    qrCodeValue() {
                        this.refreshQRCode()
                    }
                },
                methods: {
                    goBack() {
                        this.$router.push("/")
                    },
                    toggleMenu(e) {
                        e.stopPropagation(),
                        this.isMenuOpen = !this.isMenuOpen,
                        this.isMenuOpen ? document.addEventListener("click", this.handleClickOutside) : document.removeEventListener("click", this.handleClickOutside)
                    },
                    handleClickOutside(e) {
                        const t = this.$el.querySelector(".menu-box")
                          , s = this.$el.querySelector(".menu-icon");
                        t && !t.contains(e.target) && s !== e.target && (this.isMenuOpen = !1,
                        document.removeEventListener("click", this.handleClickOutside),
                        e.stopPropagation())
                    },
                    startCountdown() {
                        this.interval && clearInterval(this.interval),
                        this.countdown = 120,
                        this.progressWidth = 100,
                        this.interval = setInterval(( () => {
                            this.countdown > 0 ? (this.countdown--,
                            this.progressWidth = this.countdown / 120 * 100) : clearInterval(this.interval)
                        }
                        ), 1e3)
                    },
                    refreshQRCode() {
                        this.qrCodeUpdateKey = Date.now()
                    },
                    playTapSound() {
                        this.tapSound.paused || (this.tapSound.pause(),
                        this.tapSound.currentTime = 0),
                        this.tapTimeout && clearTimeout(this.tapTimeout),
                        this.tapTimeout = setTimeout(( () => {
                            this.tapSound.play().catch((e => console.error("Error playing tap sound:", e)))
                        }
                        ), 50)
                    },
                    handleTap(e) {
                        if (this.isInsideIdCard(e)) {
                            this.playTapSound(),
                            this.checkInteraction(e),
                            this.isTap = !0;
                            const {clientX: t, clientY: s} = e.touches ? e.touches[0] : e;
                            this.pixelCirclePosition = {
                                x: t,
                                y: s
                            },
                            this.isDragging = !0,
                            this.isHolding = !0,
                            this.speechBubbleText = "För godkänd kontroll:\nSkanna med en BankID-app",
                            this.speechBubbleBgColor = "#032129"
                        }
                    },
                    isInsideIdCard(e) {
                        const t = this.$refs.idCard;
                        return t && t.contains(e.target)
                    },
                    checkInteraction(e) {
                        const t = this.$refs.idCard;
                        t && t.contains(e.target) ? (this.canInteract = !0,
                        this.startHold()) : this.canInteract = !1
                    },
                    startHold() {
                        this.canInteract && (this.dragTimeout = setTimeout(( () => {
                            this.isDragging = !0,
                            this.holdSound.currentTime = 0,
                            this.holdSound.play().catch((e => console.error("Error playing hold sound:", e))),
                            this.isTap = !1
                        }
                        ), 200))
                    },
                    onDragMove(e) {
                        if (!this.isDragging)
                            return;
                        const {clientX: t, clientY: s} = e.touches ? e.touches[0] : e;
                        if (!this.$refs.idCard || !this.$refs.idContainer)
                            return;
                        const n = this.$refs.idCard.getBoundingClientRect()
                          , i = this.pixelCircleSize / 2
                          , o = Math.max(n.left + i, Math.min(t, n.right - i))
                          , a = Math.max(n.top + i, Math.min(s, n.bottom - i));
                        this.pixelCirclePosition = {
                            x: o,
                            y: a
                        },
                        this.pixelationFrame || (this.pixelationFrame = requestAnimationFrame(( () => {
                            this.pixelateArea(o, a),
                            this.pixelationFrame = null
                        }
                        )))
                    },
                    endHold() {
                        clearTimeout(this.dragTimeout),
                        this.isDragging && (this.isDragging && !this.isTap && (this.holdSound.pause(),
                        this.holdSound.currentTime = 0,
                        this.releaseSound.currentTime = 0,
                        this.releaseSound.play().catch((e => console.error("Error playing release sound:", e)))),
                        this.isDragging = !1,
                        this.isHolding = !1,
                        this.speechBubbleText = "Skanna med en BankID-app",
                        this.speechBubbleBgColor = "#ffefd5")
                    },
                    async pixelateArea(e, t) {
                        if (!this.$refs.idCard || !this.$refs.pixelCanvas)
                            return;
                        const s = this.$refs.idCard
                          , n = this.$refs.pixelCanvas
                          , i = n.getContext("2d", {
                            willReadFrequently: !0
                        });
                        n.width === this.pixelCircleSize && n.height === this.pixelCircleSize || (n.width = this.pixelCircleSize,
                        n.height = this.pixelCircleSize),
                        (!this.cachedCapture || Date.now() - this.lastCaptureTime > 500) && (this.cachedCapture = await vt()(s, {
                            scale: 1,
                            useCORS: !0
                        }),
                        this.lastCaptureTime = Date.now());
                        const o = s.getBoundingClientRect()
                          , a = this.pixelCircleSize
                          , r = 30
                          , c = Math.max(0, e - o.left - a / 2)
                          , l = Math.max(0, t - o.top - a / 2);
                        i.clearRect(0, 0, a, a),
                        i.drawImage(this.cachedCapture, c, l, a, a, 0, 0, a, a);
                        const d = i.getImageData(0, 0, a, a)
                          , u = d.data;
                        for (let m = 0; m < a; m += r)
                            for (let e = 0; e < a; e += r) {
                                const t = 4 * (m * a + e)
                                  , s = u[t]
                                  , n = u[t + 1]
                                  , o = u[t + 2];
                                i.fillStyle = `rgb(${s}, ${n}, ${o})`,
                                i.fillRect(e, m, r, r)
                            }
                        const h = i.createRadialGradient(a / 2, a / 2, a / 3, a / 2, a / 2, a / 2);
                        h.addColorStop(0, "rgba(255, 255, 255, 1)"),
                        h.addColorStop(.5, "rgba(255, 255, 255, 0.7)"),
                        h.addColorStop(1, "rgba(255, 255, 255, 0)"),
                        i.globalCompositeOperation = "destination-in",
                        i.fillStyle = h,
                        i.fillRect(0, 0, a, a),
                        i.globalCompositeOperation = "source-over"
                    },
                    startWaveAnimations() {
                        const e = document.querySelectorAll(".wave");
                        e.forEach(( (e, t) => {
                            e.style.animationDelay = `-${.5 * t}s`,
                            e.classList.add("animate")
                        }
                        ))
                    }
                },
                mounted() {
                    document.documentElement.style.touchAction = "none",
                    document.body.style.userSelect = "none",
                    this.startCountdown(),
                    this.qrCodeTimer = setInterval(( () => {
                        this.refreshQRCode()
                    }
                    ), 1e3),
                    document.addEventListener("click", this.allowAudioPlayback, {
                        once: !0
                    }),
                    document.addEventListener("touchstart", this.allowAudioPlayback, {
                        once: !0
                    }),
                    this.startWaveAnimations()
                },
                beforeUnmount() {
                    clearInterval(this.interval),
                    clearInterval(this.qrCodeTimer),
                    document.removeEventListener("click", this.allowAudioPlayback),
                    document.removeEventListener("touchstart", this.allowAudioPlayback),
                    document.body.style.overflow = "",
                    document.documentElement.style.overflow = "",
                    document.body.style.touchAction = "",
                    document.documentElement.style.touchAction = "",
                    document.body.style.userSelect = ""
                }
            };
            const Lt = (0,
            r.A)(yt, [["render", pt], ["__scopeId", "data-v-07f1f7b4"]]);
            var Ct = Lt;
            const wt = {
                class: "camera-container"
            }
              , bt = {
                class: "header"
            }
              , It = {
                ref: "videoElement",
                autoplay: "",
                playsinline: "",
                class: "camera-feed"
            }
              , St = {
                ref: "canvasElement",
                class: "hidden"
            }
              , Et = {
                key: 0,
                class: "error-message"
            };
            function Dt(e, t, s, n, o, a) {
                return (0,
                i.uX)(),
                (0,
                i.CE)("div", wt, [(0,
                i.Lk)("div", bt, [(0,
                i.Lk)("button", {
                    onClick: t[0] || (t[0] = (...e) => a.goBack && a.goBack(...e)),
                    class: "back-btn"
                }, t[2] || (t[2] = [(0,
                i.Lk)("i", {
                    class: "fa-solid fa-chevron-left"
                }, null, -1), (0,
                i.eW)(" Tillbaka")])), t[3] || (t[3] = (0,
                i.Lk)("h1", {
                    class: "title"
                }, "Skanna QR-kod", -1)), (0,
                i.Lk)("img", {
                    src: "/camera.png",
                    alt: "Camera Icon",
                    class: "logo",
                    onClick: t[1] || (t[1] = (...e) => a.toggleCamera && a.toggleCamera(...e))
                })]), (0,
                i.Lk)("video", It, null, 512), (0,
                i.Lk)("canvas", St, null, 512), o.isCameraSupported ? (0,
                i.Q3)("", !0) : ((0,
                i.uX)(),
                (0,
                i.CE)("div", Et, t[4] || (t[4] = [(0,
                i.Lk)("p", null, "Din webbläsare stöder inte kameraåtkomst eller getUserMedia är inte tillgängligt.", -1), (0,
                i.Lk)("p", null, "Prova att använda en kompatibel webbläsare (t.ex. Chrome, Firefox, Safari).", -1)])))])
            }
            s(4603),
            s(7566),
            s(8721);
            var Tt = s(6624)
              , xt = s.n(Tt)
              , At = {
                data() {
                    return {
                        stream: null,
                        isCameraActive: !1,
                        isCameraSupported: !1,
                        currentCamera: "environment"
                    }
                },
                methods: {
                    async startCamera() {
                        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                            this.isCameraSupported = !0;
                            try {
                                const e = {
                                    video: {
                                        facingMode: this.currentCamera,
                                        zoom: 1,
                                        width: {
                                            ideal: 1920
                                        },
                                        height: {
                                            ideal: 1080
                                        }
                                    }
                                };
                                this.stream = await navigator.mediaDevices.getUserMedia(e),
                                this.$refs.videoElement.srcObject = this.stream,
                                this.isCameraActive = !0,
                                this.scanQRCode()
                            } catch (e) {
                                this.handleCameraError(e)
                            }
                        } else
                            this.isCameraSupported = !1
                    },
                    scanQRCode() {
                        const e = this.$refs.videoElement
                          , t = this.$refs.canvasElement
                          , s = t.getContext("2d")
                          , n = () => {
                            if (e.readyState === e.HAVE_ENOUGH_DATA) {
                                t.width = e.videoWidth,
                                t.height = e.videoHeight,
                                s.drawImage(e, 0, 0, t.width, t.height);
                                const n = s.getImageData(0, 0, t.width, t.height)
                                  , i = xt()(n.data, t.width, t.height);
                                if (i)
                                    return void this.processQRCode(i.data)
                            }
                            requestAnimationFrame(n)
                        }
                        ;
                        n()
                    },
                    processQRCode(e) {
                        console.log("Scanned QR Code Data:", e);
                        try {
                            let t;
                            if (e.startsWith("http") && e.includes("/id-control")) {
                                const s = new URL(e)
                                  , n = s.searchParams.get("data");
                                if (!n)
                                    throw new Error("Invalid QR URL format");
                                t = JSON.parse(decodeURIComponent(n))
                            } else
                                t = JSON.parse(e.trim());
                            if (console.log("Parsed QR Code Data:", t),
                            !t.name || !t.personnummer || !t.img)
                                throw new Error("Missing required fields");
                            const s = encodeURIComponent(JSON.stringify(t));
                            this.stopCamera(),
                            this.$router.push({
                                name: "IdControl",
                                query: {
                                    data: s
                                }
                            })
                        } catch (t) {
                            console.error("QR Parsing Error:", t),
                            alert("QR-koden innehåller inte giltiga data.")
                        }
                    },
                    stopCamera() {
                        this.stream && this.stream.getTracks().forEach((e => e.stop())),
                        this.isCameraActive = !1
                    },
                    handleCameraError(e) {
                        alert("Ett fel uppstod vid åtkomst till kameran: " + e.message)
                    },
                    goBack() {
                        this.$router.go(-1)
                    },
                    toggleCamera() {
                        this.currentCamera = "environment" === this.currentCamera ? "user" : "environment",
                        this.stopCamera(),
                        this.startCamera()
                    }
                },
                mounted() {
                    this.startCamera()
                },
                beforeUnmount() {
                    this.stopCamera()
                }
            };
            const Mt = (0,
            r.A)(At, [["render", Dt], ["__scopeId", "data-v-a8860636"]]);
            var Nt = Mt;
            const Ot = [{
                path: "/license-activation",
                name: "LicenseActivation",
                component: L
            }, {
                path: "/",
                name: "Home",
                component: ie,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/camera",
                name: "CameraView",
                component: Nt,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/id-control",
                name: "IdControl",
                component: () => s.e(831).then(s.bind(s, 7831)),
                props: e => ({
                    data: e.query.data
                }),
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/id-control2",
                name: "IdControl2",
                component: () => s.e(58).then(s.bind(s, 5058)),
                props: e => ({
                    data: e.query.data
                }),
                meta: {
                    requiresAuth: !1
                }
            }, {
                path: "/bankid",
                name: "BankIdComponent",
                component: Ze,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/id-page",
                name: "IdPage",
                component: Ct,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/admin-login",
                name: "AdminLogin",
                component: Re,
                meta: {
                    requiresAuth: !0
                }
            }, {
                path: "/admin",
                name: "AdminPanel",
                component: _e
            }]
              , Rt = (0,
            d.aE)({
                history: (0,
                d.LA)("/"),
                routes: Ot
            });
            Rt.beforeEach(( (e, t, s) => {
                const n = "true" === localStorage.getItem("isAuthenticated")
                  , i = JSON.parse(localStorage.getItem("licenses"))?.[0]?.key;
                "LicenseActivation" === e.name && n ? s("/") : !e.meta.requiresAuth || n && i ? s() : s("/license-activation")
            }
            ));
            var Kt = Rt
              , $t = (s(1454),
            (0,
            f.y$)({
                state: {
                    licenses: JSON.parse(localStorage.getItem("licenses")) || [],
                    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || !1,
                    user: null,
                    needsRedirect: !1,
                    isMonitoringLicense: !0
                },
                mutations: {
                    SET_LICENSES(e, t) {
                        const s = Array.from(new Map(t.map((e => [e.key, e]))).values());
                        e.licenses = s,
                        localStorage.setItem("licenses", JSON.stringify(e.licenses))
                    },
                    ADD_LICENSE(e, t) {
                        e.licenses.find((e => e.key === t.key)) || (e.licenses.push(t),
                        localStorage.setItem("licenses", JSON.stringify(e.licenses)))
                    },
                    REMOVE_LICENSE(e, t) {
                        e.licenses = e.licenses.filter((e => e.key !== t)),
                        localStorage.setItem("licenses", JSON.stringify(e.licenses))
                    },
                    TOGGLE_LICENSE_STATUS(e, {key: t, used: s}) {
                        const n = e.licenses.find((e => e.key === t));
                        n && (n.used = s,
                        localStorage.setItem("licenses", JSON.stringify(e.licenses)))
                    },
                    UPDATE_LICENSE(e, t) {
                        const s = e.licenses.findIndex((e => e.key === t.key));
                        -1 !== s && (e.licenses[s] = t,
                        localStorage.setItem("licenses", JSON.stringify(e.licenses)))
                    },
                    LOGIN(e, t) {
                        e.isAuthenticated = !0,
                        e.user = t,
                        localStorage.setItem("isAuthenticated", "true"),
                        localStorage.setItem("user", JSON.stringify(t))
                    },
                    LOGOUT(e) {
                        e.isAuthenticated = !1,
                        e.user = null,
                        localStorage.setItem("isAuthenticated", "false"),
                        localStorage.removeItem("user")
                    },
                    SET_NEEDS_REDIRECT(e, t) {
                        e.needsRedirect = t
                    },
                    SET_MONITORING(e, t) {
                        e.isMonitoringLicense = t
                    },
                    UPDATE_SECURITY_CODE(e, t) {
                        e.securityCode = t
                    }
                },
                actions: {
                    async addLicense({commit: e}, {discordTag: t, expireDate: s, imgurLink: n, personnummer: i, fornamn: o}) {
                        const a = _t()
                          , r = {
                            key: a,
                            discordTag: t,
                            expireDate: s,
                            imgurLink: n,
                            used: !1,
                            personnummer: i,
                            fornamn: o,
                            "säkerhetskod": "123456"
                        };
                        try {
                            const t = (0,
                            ke.KR)(Le, "licenses")
                              , s = (0,
                            ke.VC)(t);
                            return await (0,
                            ke.hZ)(s, r),
                            console.log("✅ License added successfully:", r),
                            e("ADD_LICENSE", r),
                            {
                                success: !0,
                                licenseKey: a
                            }
                        } catch (c) {
                            return console.error("❌ Error adding license: ", c),
                            {
                                success: !1,
                                error: c.message
                            }
                        }
                    },
                    async changeSecurityCode({commit: e}, {licenseKey: t, newCode: s}) {
                        try {
                            const n = (0,
                            ke.KR)(Le, "licenses")
                              , i = await (0,
                            ke.Jt)(n);
                            if (i.exists()) {
                                const n = i.val()
                                  , o = Object.keys(n).find((e => n[e].key === t));
                                return o ? (await (0,
                                ke.yo)((0,
                                ke.KR)(Le, `licenses/${o}`), {
                                    "säkerhetskod": s
                                }),
                                e("UPDATE_SECURITY_CODE", {
                                    licenseKey: t,
                                    newCode: s
                                }),
                                {
                                    success: !0
                                }) : {
                                    success: !1,
                                    error: "License not found!"
                                }
                            }
                        } catch (n) {
                            return console.error("❌ Error changing security code:", n),
                            {
                                success: !1,
                                error: n.message
                            }
                        }
                    },
                    async fetchSecurityCode() {
                        try {
                            const e = localStorage.getItem("licenseKey");
                            if (!e)
                                throw new Error("No license key found");
                            const t = (0,
                            ke.KR)(Le, "licenses")
                              , s = await (0,
                            ke.Jt)(t);
                            if (s.exists()) {
                                const t = s.val()
                                  , n = Object.values(t).find((t => t.key === e));
                                if (n && n.säkerhetskod)
                                    return {
                                        success: !0,
                                        "säkerhetskod": n.säkerhetskod
                                    };
                                throw new Error("Security code not found")
                            }
                            throw new Error("No licenses found in database")
                        } catch (e) {
                            return console.error("❌ Error fetching security code:", e),
                            {
                                success: !1,
                                error: e.message
                            }
                        }
                    },
                    fetchLicenses({commit: e}) {
                        const t = (0,
                        ke.KR)(Le, "licenses");
                        (0,
                        ke.Zy)(t, (t => {
                            if (t.exists()) {
                                const s = Object.values(t.val());
                                e("SET_LICENSES", s)
                            } else
                                e("SET_LICENSES", [])
                        }
                        ))
                    },
                    async removeLicense({commit: e}, t) {
                        try {
                            const s = (0,
                            ke.KR)(Le, "licenses")
                              , n = await (0,
                            ke.Jt)(s);
                            if (n.exists()) {
                                const s = n.val()
                                  , i = Object.keys(s).find((e => s[e].key === t));
                                i && (await (0,
                                ke.TF)((0,
                                ke.KR)(Le, `licenses/${i}`)),
                                e("REMOVE_LICENSE", t))
                            }
                        } catch (s) {
                            console.error("Error removing license: ", s)
                        }
                    },
                    async toggleLicenseStatus({commit: e}, {licenseKey: t, used: s}) {
                        try {
                            const n = (0,
                            ke.KR)(Le, "licenses")
                              , i = await (0,
                            ke.Jt)(n);
                            if (i.exists()) {
                                const o = i.val()
                                  , a = Object.keys(o).find((e => o[e].key === t));
                                if (a) {
                                    await new Promise((e => setTimeout(e, 500))),
                                    await (0,
                                    ke.yo)((0,
                                    ke.KR)(Le, `licenses/${a}`), {
                                        used: s
                                    });
                                    const t = await (0,
                                    ke.Jt)(n);
                                    if (t.exists()) {
                                        const s = Object.values(t.val());
                                        e("SET_LICENSES", s)
                                    }
                                    return {
                                        success: !0
                                    }
                                }
                            }
                            return {
                                success: !1,
                                error: "License not found!"
                            }
                        } catch (n) {
                            return console.error("❌ Error toggling license status:", n),
                            {
                                success: !1,
                                error: n.message
                            }
                        }
                    },
                    async activateLicense({commit: e}, t) {
                        try {
                            const s = (0,
                            ke.KR)(Le, "licenses")
                              , n = await (0,
                            ke.Jt)(s);
                            if (n.exists()) {
                                const s = n.val()
                                  , i = Object.keys(s).find((e => s[e].key === t));
                                if (i) {
                                    const n = s[i];
                                    return n.used ? {
                                        success: !1,
                                        error: "License key is already used."
                                    } : (await new Promise((e => setTimeout(e, 500))),
                                    await (0,
                                    ke.yo)((0,
                                    ke.KR)(Le, `licenses/${i}`), {
                                        used: !0
                                    }),
                                    e("TOGGLE_LICENSE_STATUS", {
                                        key: t,
                                        used: !0
                                    }),
                                    {
                                        success: !0
                                    })
                                }
                            }
                            return {
                                success: !1,
                                error: "Invalid license key!"
                            }
                        } catch (s) {
                            return console.error("❌ Error activating license:", s),
                            {
                                success: !1,
                                error: s.message
                            }
                        }
                    },
                    login({commit: e}, {password: t}) {
                        const s = "bankidsecure123";
                        if (t === s) {
                            const t = {
                                username: "admin"
                            };
                            return e("LOGIN", t),
                            {
                                success: !0
                            }
                        }
                        return {
                            success: !1,
                            error: "Invalid password!"
                        }
                    },
                    async logout({commit: e}) {
                        const t = localStorage.getItem("licenseKey");
                        if (t) {
                            const e = (0,
                            ke.KR)(Le, "licenses")
                              , s = await (0,
                            ke.Jt)(e);
                            if (s.exists()) {
                                const e = s.val()
                                  , n = Object.keys(e).find((s => e[s].key === t));
                                n && await (0,
                                ke.yo)((0,
                                ke.KR)(Le, `licenses/${n}`), {
                                    used: !1
                                })
                            }
                        }
                        e("LOGOUT"),
                        window.location.href = "/license-activation"
                    },
                    async checkLicenseValidity({state: e, commit: t}) {
                        if (!e.isMonitoringLicense)
                            return {
                                success: !1
                            };
                        const s = localStorage.getItem("licenseKey")
                          , n = (0,
                        d.rd)()
                          , i = ["/license-activation", "/admin-login", "/admin"];
                        if (!s)
                            return console.log("❌ No license found!"),
                            t("LOGOUT"),
                            {
                                success: !1,
                                error: "no_license"
                            };
                        const o = (0,
                        ke.KR)(Le, "licenses");
                        return new Promise((e => {
                            (0,
                            ke.Zy)(o, (o => {
                                if (o.exists()) {
                                    const a = o.val()
                                      , r = Object.values(a).find((e => e.key === s));
                                    if (r) {
                                        const s = new Date(r.expireDate);
                                        s < new Date ? (console.log(`❌ License ${r.key} expired on ${r.expireDate}.`),
                                        t("LOGOUT"),
                                        i.includes(n.currentRoute.value.path) || alert("Din licenskod har utlöpt eller raderats!"),
                                        i.includes(n.currentRoute.value.path) || (window.location.href = "/license-activation"),
                                        e({
                                            success: !1,
                                            error: "expired"
                                        })) : (console.log(`✅ License ${r.key} is valid until ${r.expireDate}.`),
                                        e({
                                            success: !0
                                        }))
                                    } else
                                        console.log("❌ License not found!"),
                                        t("LOGOUT"),
                                        i.includes(n.currentRoute.value.path) || alert("Din licenskod har utlöpt eller raderats!"),
                                        i.includes(n.currentRoute.value.path) || (window.location.href = "/license-activation"),
                                        e({
                                            success: !1,
                                            error: "deleted"
                                        })
                                } else
                                    e({
                                        success: !1,
                                        error: "deleted"
                                    })
                            }
                            ))
                        }
                        ))
                    },
                    async updateLicense({commit: e}, t) {
                        try {
                            const s = (0,
                            ke.KR)(Le, "licenses")
                              , n = await (0,
                            ke.Jt)(s);
                            if (n.exists()) {
                                const s = n.val()
                                  , i = Object.keys(s).find((e => s[e].key === t.key));
                                return i ? (await (0,
                                ke.yo)((0,
                                ke.KR)(Le, `licenses/${i}`), t),
                                e("UPDATE_LICENSE", t),
                                {
                                    success: !0
                                }) : {
                                    success: !1,
                                    error: "License not found!"
                                }
                            }
                        } catch (s) {
                            return console.error("❌ Error updating license:", s),
                            {
                                success: !1,
                                error: s.message
                            }
                        }
                    }
                },
                getters: {
                    allLicenses: e => e.licenses.map((e => ({
                        ...e,
                        personnummer: e.personnummer || "",
                        fornamn: e.fornamn || ""
                    }))),
                    isAuthenticated: e => e.isAuthenticated,
                    isMonitoringLicense: e => e.isMonitoringLicense,
                    currentUser: e => e.user
                }
            }));
            function _t() {
                const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                let t = "";
                for (let s = 0; s < 10; s++)
                    t += e.charAt(Math.floor(Math.random() * e.length));
                return t
            }
            (0,
            n.Ef)(l).use(Kt).use($t).mount("#app"),
            $t.dispatch("fetchLicenses")
        },
        37: function(e, t, s) {
            e.exports = s.p + "media/hold.f3a3f453.mp3"
        },
        4461: function(e, t, s) {
            e.exports = s.p + "media/release.c33204aa.mp3"
        },
        8653: function(e, t, s) {
            e.exports = s.p + "media/tap.0f6b9eb5.mp3"
        }
    }
      , t = {};
    function s(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, s),
        o.exports
    }
    s.m = e,
    function() {
        var e = [];
        s.O = function(t, n, i, o) {
            if (!n) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    n = e[d][0],
                    i = e[d][1],
                    o = e[d][2];
                    for (var r = !0, c = 0; c < n.length; c++)
                        (!1 & o || a >= o) && Object.keys(s.O).every((function(e) {
                            return s.O[e](n[c])
                        }
                        )) ? n.splice(c--, 1) : (r = !1,
                        o < a && (a = o));
                    if (r) {
                        e.splice(d--, 1);
                        var l = i();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--)
                e[d] = e[d - 1];
            e[d] = [n, i, o]
        }
    }(),
    function() {
        s.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return s.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        s.d = function(e, t) {
            for (var n in t)
                s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
    }(),
    function() {
        s.f = {},
        s.e = function(e) {
            return Promise.all(Object.keys(s.f).reduce((function(t, n) {
                return s.f[n](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        s.u = function(e) {
            return "js/" + e + "." + {
                58: "7704f19b",
                831: "77074416"
            }[e] + ".js"
        }
    }(),
    function() {
        s.miniCssF = function(e) {
            return "css/" + e + "." + {
                58: "a68a7046",
                831: "1d271968"
            }[e] + ".css"
        }
    }(),
    function() {
        s.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        s.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "nnbosus-bankid:";
        s.l = function(n, i, o, a) {
            if (e[n])
                e[n].push(i);
            else {
                var r, c;
                if (void 0 !== o)
                    for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                        var u = l[d];
                        if (u.getAttribute("src") == n || u.getAttribute("data-webpack") == t + o) {
                            r = u;
                            break
                        }
                    }
                r || (c = !0,
                r = document.createElement("script"),
                r.charset = "utf-8",
                r.timeout = 120,
                s.nc && r.setAttribute("nonce", s.nc),
                r.setAttribute("data-webpack", t + o),
                r.src = n),
                e[n] = [i];
                var h = function(t, s) {
                    r.onerror = r.onload = null,
                    clearTimeout(m);
                    var i = e[n];
                    if (delete e[n],
                    r.parentNode && r.parentNode.removeChild(r),
                    i && i.forEach((function(e) {
                        return e(s)
                    }
                    )),
                    t)
                        return t(s)
                }
                  , m = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
                r.onerror = h.bind(null, r.onerror),
                r.onload = h.bind(null, r.onload),
                c && document.head.appendChild(r)
            }
        }
    }(),
    function() {
        s.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        s.p = "/"
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, t, n, i, o) {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css",
                s.nc && (a.nonce = s.nc);
                var r = function(s) {
                    if (a.onerror = a.onload = null,
                    "load" === s.type)
                        i();
                    else {
                        var n = s && s.type
                          , r = s && s.target && s.target.href || t
                          , c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + r + ")");
                        c.name = "ChunkLoadError",
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                        c.type = n,
                        c.request = r,
                        a.parentNode && a.parentNode.removeChild(a),
                        o(c)
                    }
                };
                return a.onerror = a.onload = r,
                a.href = t,
                n ? n.parentNode.insertBefore(a, n.nextSibling) : document.head.appendChild(a),
                a
            }
              , t = function(e, t) {
                for (var s = document.getElementsByTagName("link"), n = 0; n < s.length; n++) {
                    var i = s[n]
                      , o = i.getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === t))
                        return i
                }
                var a = document.getElementsByTagName("style");
                for (n = 0; n < a.length; n++) {
                    i = a[n],
                    o = i.getAttribute("data-href");
                    if (o === e || o === t)
                        return i
                }
            }
              , n = function(n) {
                return new Promise((function(i, o) {
                    var a = s.miniCssF(n)
                      , r = s.p + a;
                    if (t(a, r))
                        return i();
                    e(n, r, null, i, o)
                }
                ))
            }
              , i = {
                524: 0
            };
            s.f.miniCss = function(e, t) {
                var s = {
                    58: 1,
                    831: 1
                };
                i[e] ? t.push(i[e]) : 0 !== i[e] && s[e] && t.push(i[e] = n(e).then((function() {
                    i[e] = 0
                }
                ), (function(t) {
                    throw delete i[e],
                    t
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            524: 0
        };
        s.f.j = function(t, n) {
            var i = s.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var o = new Promise((function(s, n) {
                        i = e[t] = [s, n]
                    }
                    ));
                    n.push(i[2] = o);
                    var a = s.p + s.u(t)
                      , r = new Error
                      , c = function(n) {
                        if (s.o(e, t) && (i = e[t],
                        0 !== i && (e[t] = void 0),
                        i)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")",
                            r.name = "ChunkLoadError",
                            r.type = o,
                            r.request = a,
                            i[1](r)
                        }
                    };
                    s.l(a, c, "chunk-" + t, t)
                }
        }
        ,
        s.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var i, o, a = n[0], r = n[1], c = n[2], l = 0;
            if (a.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (i in r)
                    s.o(r, i) && (s.m[i] = r[i]);
                if (c)
                    var d = c(s)
            }
            for (t && t(n); l < a.length; l++)
                o = a[l],
                s.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return s.O(d)
        }
          , n = self["webpackChunknnbosus_bankid"] = self["webpackChunknnbosus_bankid"] || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var n = s.O(void 0, [504], (function() {
        return s(2669)
    }
    ));
    n = s.O(n)
}
)();
//# sourceMappingURL=app.2649ebcd.js.map
