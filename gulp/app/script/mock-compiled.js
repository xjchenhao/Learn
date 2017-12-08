/*! mockjs 02-06-2015 22:03:44 */

"use strict";

(function (undefined) {
  function find(a) {
    function b(a, b) {
      return "string" === Util.type(a) ? a === b : "regexp" === Util.type(a) ? a.test(b) : void 0;
    }for (var c in Mock._mocked) {
      var d = Mock._mocked[c];if (!(d.rurl && !b(d.rurl, a.url) || d.rtype && !b(d.rtype, a.type.toLowerCase()))) return d;
    }
  }function convert(a, b) {
    return Util.isFunction(a.template) ? a.template(b) : Mock.mock(a.template);
  }var Mock = { version: "0.1.9", _mocked: {} },
      Util = (function () {
    var a = {};return a.extend = function () {
      var b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length;for (1 === i && (g = this, h = 0); i > h; h++) if (b = arguments[h]) for (c in b) d = g[c], e = b[c], g !== e && e !== undefined && (a.isArray(e) || a.isObject(e) ? (a.isArray(e) && (f = d && a.isArray(d) ? d : []), a.isObject(e) && (f = d && a.isObject(d) ? d : {}), g[c] = a.extend(f, e)) : g[c] = e);return g;
    }, a.each = function (a, b, c) {
      var d, e;if ("number" === this.type(a)) for (d = 0; a > d; d++) b(d, d);else if (a.length === +a.length) for (d = 0; d < a.length && b.call(c, a[d], d, a) !== !1; d++);else for (e in a) if (b.call(c, a[e], e, a) === !1) break;
    }, a.type = function (a) {
      return null === a || a === undefined ? String(a) : Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1].toLowerCase();
    }, a.each("String Object Array RegExp Function".split(" "), function (b) {
      a["is" + b] = function (c) {
        return a.type(c) === b.toLowerCase();
      };
    }), a.isObjectOrArray = function (b) {
      return a.isObject(b) || a.isArray(b);
    }, a.isNumeric = function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, a.keys = function (a) {
      var b = [];for (var c in a) a.hasOwnProperty(c) && b.push(c);return b;
    }, a.values = function (a) {
      var b = [];for (var c in a) a.hasOwnProperty(c) && b.push(a[c]);return b;
    }, a.heredoc = function (a) {
      return a.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
    }, a.noop = function () {}, a;
  })(),
      Random = (function () {
    var a = { extend: Util.extend };return a.extend({ "boolean": function boolean(a, b, c) {
        return c !== undefined ? (a = "undefined" == typeof a || isNaN(a) ? 1 : parseInt(a, 10), b = "undefined" == typeof b || isNaN(b) ? 1 : parseInt(b, 10), Math.random() > 1 / (a + b) * a ? !c : c) : Math.random() >= .5;
      }, bool: function bool(a, b, c) {
        return this["boolean"](a, b, c);
      }, natural: function natural(a, b) {
        return a = "undefined" != typeof a ? parseInt(a, 10) : 0, b = "undefined" != typeof b ? parseInt(b, 10) : 9007199254740992, Math.round(Math.random() * (b - a)) + a;
      }, integer: function integer(a, b) {
        return a = "undefined" != typeof a ? parseInt(a, 10) : -9007199254740992, b = "undefined" != typeof b ? parseInt(b, 10) : 9007199254740992, Math.round(Math.random() * (b - a)) + a;
      }, "int": function int(a, b) {
        return this.integer(a, b);
      }, "float": function float(a, b, c, d) {
        c = c === undefined ? 0 : c, c = Math.max(Math.min(c, 17), 0), d = d === undefined ? 17 : d, d = Math.max(Math.min(d, 17), 0);for (var e = this.integer(a, b) + ".", f = 0, g = this.natural(c, d); g > f; f++) e += this.character("number");return parseFloat(e, 10);
      }, character: function character(b) {
        var c = { lower: "abcdefghijklmnopqrstuvwxyz", upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", number: "0123456789", symbol: "!@#$%^&*()[]" };return c.alpha = c.lower + c.upper, c.undefined = c.lower + c.upper + c.number + c.symbol, b = c[("" + b).toLowerCase()] || b, b.charAt(a.natural(0, b.length - 1));
      }, "char": function char(a) {
        return this.character(a);
      }, string: function string(b, c, d) {
        var e;3 === arguments.length && (e = a.natural(c, d)), 2 === arguments.length && ("string" == typeof arguments[0] ? e = c : (e = a.natural(b, c), b = undefined)), 1 === arguments.length && (e = b, b = undefined), 0 === arguments.length && (e = a.natural(3, 7));for (var f = "", g = 0; e > g; g++) f += a.character(b);return f;
      }, str: function str(a, b, c) {
        return this.string(a, b, c);
      }, range: function range(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1, a = +a, b = +b, c = +c;for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;return f;
      } }), a.extend({ patternLetters: { yyyy: "getFullYear", yy: function yy(a) {
          return ("" + a.getFullYear()).slice(2);
        }, y: "yy", MM: function MM(a) {
          var b = a.getMonth() + 1;return 10 > b ? "0" + b : b;
        }, M: function M(a) {
          return a.getMonth() + 1;
        }, dd: function dd(a) {
          var b = a.getDate();return 10 > b ? "0" + b : b;
        }, d: "getDate", HH: function HH(a) {
          var b = a.getHours();return 10 > b ? "0" + b : b;
        }, H: "getHours", hh: function hh(a) {
          var b = a.getHours() % 12;return 10 > b ? "0" + b : b;
        }, h: function h(a) {
          return a.getHours() % 12;
        }, mm: function mm(a) {
          var b = a.getMinutes();return 10 > b ? "0" + b : b;
        }, m: "getMinutes", ss: function ss(a) {
          var b = a.getSeconds();return 10 > b ? "0" + b : b;
        }, s: "getSeconds", SS: function SS(a) {
          var b = a.getMilliseconds();return 10 > b && "00" + b || 100 > b && "0" + b || b;
        }, S: "getMilliseconds", A: function A(a) {
          return a.getHours() < 12 ? "AM" : "PM";
        }, a: function a(_a) {
          return _a.getHours() < 12 ? "am" : "pm";
        }, T: "getTime" } }), a.extend({ rformat: new RegExp((function () {
        var b = [];for (var c in a.patternLetters) b.push(c);return "(" + b.join("|") + ")";
      })(), "g"), format: function format(b, c) {
        var d = a.patternLetters,
            e = a.rformat;return c.replace(e, function (a, c) {
          return "function" == typeof d[c] ? d[c](b) : d[c] in d ? arguments.callee(a, d[c]) : b[d[c]]();
        });
      }, randomDate: function randomDate(a, b) {
        return a = a === undefined ? new Date(0) : a, b = b === undefined ? new Date() : b, new Date(Math.random() * (b.getTime() - a.getTime()));
      }, date: function date(a) {
        return a = a || "yyyy-MM-dd", this.format(this.randomDate(), a);
      }, time: function time(a) {
        return a = a || "HH:mm:ss", this.format(this.randomDate(), a);
      }, datetime: function datetime(a) {
        return a = a || "yyyy-MM-dd HH:mm:ss", this.format(this.randomDate(), a);
      }, now: function now(a, b) {
        1 === arguments.length && (/year|month|week|day|hour|minute|second|week/.test(a) || (b = a, a = "")), a = (a || "").toLowerCase(), b = b || "yyyy-MM-dd HH:mm:ss";var c = new Date();switch (a) {case "year":
            c.setMonth(0);case "month":
            c.setDate(1);case "week":case "day":
            c.setHours(0);case "hour":
            c.setMinutes(0);case "minute":
            c.setSeconds(0);case "second":
            c.setMilliseconds(0);}switch (a) {case "week":
            c.setDate(c.getDate() - c.getDay());}return this.format(c, b);
      } }), a.extend({ ad_size: ["300x250", "250x250", "240x400", "336x280", "180x150", "720x300", "468x60", "234x60", "88x31", "120x90", "120x60", "120x240", "125x125", "728x90", "160x600", "120x600", "300x600"], screen_size: ["320x200", "320x240", "640x480", "800x480", "800x480", "1024x600", "1024x768", "1280x800", "1440x900", "1920x1200", "2560x1600"], video_size: ["720x480", "768x576", "1280x720", "1920x1080"], image: function image(a, b, c, d, e) {
        return 4 === arguments.length && (e = d, d = undefined), 3 === arguments.length && (e = c, c = undefined), a || (a = this.pick(this.ad_size)), b && ~b.indexOf("#") && (b = b.slice(1)), c && ~c.indexOf("#") && (c = c.slice(1)), "http://dummyimage.com/" + a + (b ? "/" + b : "") + (c ? "/" + c : "") + (d ? "." + d : "") + (e ? "&text=" + e : "");
      }, img: function img() {
        return this.image.apply(this, arguments);
      } }), a.extend({ brandColors: { "4ormat": "#fb0a2a", "500px": "#02adea", "About.me (blue)": "#00405d", "About.me (yellow)": "#ffcc33", Addvocate: "#ff6138", Adobe: "#ff0000", Aim: "#fcd20b", Amazon: "#e47911", Android: "#a4c639", "Angie's List": "#7fbb00", AOL: "#0060a3", Atlassian: "#003366", Behance: "#053eff", "Big Cartel": "#97b538", bitly: "#ee6123", Blogger: "#fc4f08", Boeing: "#0039a6", "Booking.com": "#003580", Carbonmade: "#613854", Cheddar: "#ff7243", "Code School": "#3d4944", Delicious: "#205cc0", Dell: "#3287c1", Designmoo: "#e54a4f", Deviantart: "#4e6252", "Designer News": "#2d72da", Devour: "#fd0001", DEWALT: "#febd17", "Disqus (blue)": "#59a3fc", "Disqus (orange)": "#db7132", Dribbble: "#ea4c89", Dropbox: "#3d9ae8", Drupal: "#0c76ab", Dunked: "#2a323a", eBay: "#89c507", Ember: "#f05e1b", Engadget: "#00bdf6", Envato: "#528036", Etsy: "#eb6d20", Evernote: "#5ba525", "Fab.com": "#dd0017", Facebook: "#3b5998", Firefox: "#e66000", "Flickr (blue)": "#0063dc", "Flickr (pink)": "#ff0084", Forrst: "#5b9a68", Foursquare: "#25a0ca", Garmin: "#007cc3", GetGlue: "#2d75a2", Gimmebar: "#f70078", GitHub: "#171515", "Google Blue": "#0140ca", "Google Green": "#16a61e", "Google Red": "#dd1812", "Google Yellow": "#fcca03", "Google+": "#dd4b39", Grooveshark: "#f77f00", Groupon: "#82b548", "Hacker News": "#ff6600", HelloWallet: "#0085ca", "Heroku (light)": "#c7c5e6", "Heroku (dark)": "#6567a5", HootSuite: "#003366", Houzz: "#73ba37", HTML5: "#ec6231", IKEA: "#ffcc33", IMDb: "#f3ce13", Instagram: "#3f729b", Intel: "#0071c5", Intuit: "#365ebf", Kickstarter: "#76cc1e", kippt: "#e03500", Kodery: "#00af81", LastFM: "#c3000d", LinkedIn: "#0e76a8", Livestream: "#cf0005", Lumo: "#576396", Mixpanel: "#a086d3", Meetup: "#e51937", Nokia: "#183693", NVIDIA: "#76b900", Opera: "#cc0f16", Path: "#e41f11", "PayPal (dark)": "#1e477a", "PayPal (light)": "#3b7bbf", Pinboard: "#0000e6", Pinterest: "#c8232c", PlayStation: "#665cbe", Pocket: "#ee4056", Prezi: "#318bff", Pusha: "#0f71b4", Quora: "#a82400", "QUOTE.fm": "#66ceff", Rdio: "#008fd5", Readability: "#9c0000", "Red Hat": "#cc0000", Resource: "#7eb400", Rockpack: "#0ba6ab", Roon: "#62b0d9", RSS: "#ee802f", Salesforce: "#1798c1", Samsung: "#0c4da2", Shopify: "#96bf48", Skype: "#00aff0", Snagajob: "#f47a20", Softonic: "#008ace", SoundCloud: "#ff7700", "Space Box": "#f86960", Spotify: "#81b71a", Sprint: "#fee100", Squarespace: "#121212", StackOverflow: "#ef8236", Staples: "#cc0000", "Status Chart": "#d7584f", Stripe: "#008cdd", StudyBlue: "#00afe1", StumbleUpon: "#f74425", "T-Mobile": "#ea0a8e", Technorati: "#40a800", "The Next Web": "#ef4423", Treehouse: "#5cb868", Trulia: "#5eab1f", Tumblr: "#34526f", "Twitch.tv": "#6441a5", Twitter: "#00acee", TYPO3: "#ff8700", Ubuntu: "#dd4814", Ustream: "#3388ff", Verizon: "#ef1d1d", Vimeo: "#86c9ef", Vine: "#00a478", Virb: "#06afd8", "Virgin Media": "#cc0000", Wooga: "#5b009c", "WordPress (blue)": "#21759b", "WordPress (orange)": "#d54e21", "WordPress (grey)": "#464646", Wunderlist: "#2b88d9", XBOX: "#9bc848", XING: "#126567", "Yahoo!": "#720e9e", Yandex: "#ffcc00", Yelp: "#c41200", YouTube: "#c4302b", Zalongo: "#5498dc", Zendesk: "#78a300", Zerply: "#9dcc7a", Zootool: "#5e8b1d" }, brands: function brands() {
        var a = [];for (var b in this.brandColors) a.push(b);return a;
      }, dataImage: function dataImage(a, b) {
        var c = "undefined" != typeof document && document.createElement("canvas"),
            d = c && c.getContext && c.getContext("2d");if (!c || !d) return "";a || (a = this.pick(this.ad_size)), b = b !== undefined ? b : a, a = a.split("x");var e = parseInt(a[0], 10),
            f = parseInt(a[1], 10),
            g = this.brandColors[this.pick(this.brands())],
            h = "#FFF",
            i = 14,
            j = "sans-serif";return c.width = e, c.height = f, d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = g, d.fillRect(0, 0, e, f), d.fillStyle = h, d.font = "bold " + i + "px " + j, d.fillText(b, e / 2, f / 2, e), c.toDataURL("image/png");
      } }), a.extend({ color: function color() {
        var a = Math.floor(16777215 * Math.random()).toString(16);return a = "#" + ("000000" + a).slice(-6);
      } }), a.extend({ capitalize: function capitalize(a) {
        return (a + "").charAt(0).toUpperCase() + (a + "").substr(1);
      }, upper: function upper(a) {
        return (a + "").toUpperCase();
      }, lower: function lower(a) {
        return (a + "").toLowerCase();
      }, pick: function pick(a) {
        return a = a || [], a[this.natural(0, a.length - 1)];
      }, shuffle: function shuffle(a) {
        a = a || [];for (var b = a.slice(0), c = [], d = 0, e = b.length, f = 0; e > f; f++) d = this.natural(0, b.length - 1), c.push(b[d]), b.splice(d, 1);return c;
      } }), a.extend({ paragraph: function paragraph(b, c) {
        var d;0 === arguments.length && (d = a.natural(3, 7)), 1 === arguments.length && (d = c = b), 2 === arguments.length && (b = parseInt(b, 10), c = parseInt(c, 10), d = a.natural(b, c));for (var e = [], f = 0; d > f; f++) e.push(a.sentence());return e.join(" ");
      }, sentence: function sentence(b, c) {
        var d;0 === arguments.length && (d = a.natural(12, 18)), 1 === arguments.length && (d = c = b), 2 === arguments.length && (b = parseInt(b, 10), c = parseInt(c, 10), d = a.natural(b, c));for (var e = [], f = 0; d > f; f++) e.push(a.word());return a.capitalize(e.join(" ")) + ".";
      }, word: function word(b, c) {
        var d;0 === arguments.length && (d = a.natural(3, 10)), 1 === arguments.length && (d = c = b), 2 === arguments.length && (b = parseInt(b, 10), c = parseInt(c, 10), d = a.natural(b, c));for (var e = "", f = 0; d > f; f++) e += a.character("lower");return e;
      }, title: function title(b, c) {
        var d,
            e = [];0 === arguments.length && (d = a.natural(3, 7)), 1 === arguments.length && (d = c = b), 2 === arguments.length && (b = parseInt(b, 10), c = parseInt(c, 10), d = a.natural(b, c));for (var f = 0; d > f; f++) e.push(this.capitalize(this.word()));return e.join(" ");
      } }), a.extend({ first: function first() {
        var a = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"].concat(["Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"]);return this.pick(a);
      }, last: function last() {
        var a = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"];return this.pick(a);
      }, name: function name(a) {
        return this.first() + " " + (a ? this.first() + " " : "") + this.last();
      }, chineseName: function chineseName(a) {
        var b = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐".split(""),
            c = "贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓".split("");"number" != typeof a && (a = Math.random() > .66 ? 2 : 3);var d = this.pick(b),
            e = "";a -= 1;for (var f = 0; a > f; f++) e += this.pick(c);return d + e;
      }, cname: function cname(a) {
        return this.chineseName(a);
      } }), a.extend({ url: function url() {
        return "http://" + this.domain() + "/" + this.word();
      }, domain: function domain(a) {
        return this.word() + "." + (a || this.tld());
      }, email: function email(a) {
        return this.character("lower") + "." + this.last().toLowerCase() + "@" + this.last().toLowerCase() + "." + this.tld();
      }, ip: function ip() {
        return this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255);
      }, tlds: ["com", "org", "edu", "gov", "co.uk", "net", "io"], tld: function tld() {
        return this.pick(this.tlds);
      } }), a.extend({ areas: ["东北", "华北", "华东", "华中", "华南", "西南", "西北"], area: function area() {
        return this.pick(this.areas);
      }, regions: ["110000 北京市", "120000 天津市", "130000 河北省", "140000 山西省", "150000 内蒙古自治区", "210000 辽宁省", "220000 吉林省", "230000 黑龙江省", "310000 上海市", "320000 江苏省", "330000 浙江省", "340000 安徽省", "350000 福建省", "360000 江西省", "370000 山东省", "410000 河南省", "420000 湖北省", "430000 湖南省", "440000 广东省", "450000 广西壮族自治区", "460000 海南省", "500000 重庆市", "510000 四川省", "520000 贵州省", "530000 云南省", "540000 西藏自治区", "610000 陕西省", "620000 甘肃省", "630000 青海省", "640000 宁夏回族自治区", "650000 新疆维吾尔自治区", "650000 新疆维吾尔自治区", "710000 台湾省", "810000 香港特别行政区", "820000 澳门特别行政区"], region: function region() {
        return this.pick(this.regions).split(" ")[1];
      }, address: function address() {}, city: function city() {}, phone: function phone() {}, areacode: function areacode() {}, street: function street() {}, street_suffixes: function street_suffixes() {}, street_suffix: function street_suffix() {}, states: function states() {}, state: function state() {}, zip: function zip(a) {
        for (var b = "", c = 0; (a || 6) > c; c++) b += this.natural(0, 9);return b;
      } }), a.extend({ todo: function todo() {
        return "todo";
      } }), a.extend({ d4: function d4() {
        return this.natural(1, 4);
      }, d6: function d6() {
        return this.natural(1, 6);
      }, d8: function d8() {
        return this.natural(1, 8);
      }, d12: function d12() {
        return this.natural(1, 12);
      }, d20: function d20() {
        return this.natural(1, 20);
      }, d100: function d100() {
        return this.natural(1, 100);
      }, guid: function guid() {
        var a = "ABCDEF1234567890",
            b = this.string(a, 8) + "-" + this.string(a, 4) + "-" + this.string(a, 4) + "-" + this.string(a, 4) + "-" + this.string(a, 12);return b;
      }, id: function id() {
        var a,
            b = 0,
            c = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
            d = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];a = this.pick(this.regions).split(" ")[0] + this.date("yyyyMMdd") + this.string("number", 3);for (var e = 0; e < a.length; e++) b += a[e] * c[e];return a += d[b % 11];
      }, autoIncrementInteger: 0, increment: function increment(a) {
        return this.autoIncrementInteger += +a || 1;
      }, inc: function inc(a) {
        return this.increment(a);
      } }), a;
  })(),
      rkey = /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
      rrange = /([\+\-]?\d+)-?([\+\-]?\d+)?/,
      rplaceholder = /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g;Mock.extend = Util.extend, Mock.mock = function (a, b, c) {
    return 1 === arguments.length ? Handle.gen(a) : (2 === arguments.length && (c = b, b = undefined), Mock._mocked[a + (b || "")] = { rurl: a, rtype: b, template: c }, Mock);
  };var Handle = { extend: Util.extend };Handle.rule = function (a) {
    a = (a || "") + "";var b = (a || "").match(rkey),
        c = b && b[3] && b[3].match(rrange),
        d = c && parseInt(c[1], 10),
        e = c && parseInt(c[2], 10),
        f = c ? !c[2] && parseInt(c[1], 10) || Random.integer(d, e) : 1,
        g = b && b[4] && b[4].match(rrange),
        h = g && parseInt(g[1], 10),
        i = g && parseInt(g[2], 10),
        j = g ? !g[2] && parseInt(g[1], 10) || Random.integer(h, i) : 0,
        k = b && b[4];return { parameters: b, range: c, min: d, max: e, count: f, decimal: g, dmin: h, dmax: i, dcount: j, point: k };
  }, Handle.gen = function (a, b, c) {
    b = b = (b || "") + "", c = c || {}, c = { path: c.path || [], templatePath: c.templatePath || [], currentContext: c.currentContext, templateCurrentContext: c.templateCurrentContext || a, root: c.root, templateRoot: c.templateRoot };var d = Handle.rule(b),
        e = Util.type(a);return Handle[e] ? Handle[e]({ type: e, template: a, name: b, parsedName: b ? b.replace(rkey, "$1") : b, rule: d, context: c }) : a;
  }, Handle.extend({ array: function array(a) {
      var b,
          c,
          d = [];if (a.rule.parameters) if (1 === a.rule.count && a.template.length > 1) a.context.path.push(a.name), d = Random.pick(Handle.gen(a.template, undefined, { currentContext: d, templateCurrentContext: a.template, path: a.context.path })), a.context.path.pop();else for (b = 0; b < a.rule.count; b++) {
        c = 0;do d.push(Handle.gen(a.template[c++])); while (c < a.template.length);
      } else for (b = 0; b < a.template.length; b++) a.context.path.push(b), d.push(Handle.gen(a.template[b], b, { currentContext: d, templateCurrentContext: a.template, path: a.context.path })), a.context.path.pop();return d;
    }, object: function object(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = {};if (a.rule.min) for (b = Util.keys(a.template), b = Random.shuffle(b), b = b.slice(0, a.rule.count), g = 0; g < b.length; g++) d = b[g], e = d.replace(rkey, "$1"), a.context.path.push(e), h[e] = Handle.gen(a.template[d], d, { currentContext: h, templateCurrentContext: a.template, path: a.context.path }), a.context.path.pop();else {
        b = [], c = [];for (d in a.template) ("function" == typeof a.template[d] ? c : b).push(d);for (b = b.concat(c), g = 0; g < b.length; g++) d = b[g], e = d.replace(rkey, "$1"), a.context.path.push(e), h[e] = Handle.gen(a.template[d], d, { currentContext: h, templateCurrentContext: a.template, path: a.context.path }), a.context.path.pop(), f = d.match(rkey), f && f[2] && "number" === Util.type(a.template[d]) && (a.template[d] += parseInt(f[2], 10));
      }return h;
    }, number: function number(a) {
      var b, c, d;if (a.rule.point) {
        for (a.template += "", c = a.template.split("."), c[0] = a.rule.range ? a.rule.count : c[0], c[1] = (c[1] || "").slice(0, a.rule.dcount), d = 0; c[1].length < a.rule.dcount; d++) c[1] += Random.character("number");b = parseFloat(c.join("."), 10);
      } else b = a.rule.range && !a.rule.parameters[2] ? a.rule.count : a.template;return b;
    }, "boolean": function boolean(a) {
      var b;return b = a.rule.parameters ? Random.bool(a.rule.min, a.rule.max, a.template) : a.template;
    }, string: function string(a) {
      var b,
          c,
          d,
          e,
          f = "";if (a.template.length) {
        for (b = 0; b < a.rule.count; b++) f += a.template;for (c = f.match(rplaceholder) || [], b = 0; b < c.length; b++) if ((d = c[b], /^\\/.test(d))) c.splice(b--, 1);else {
          if ((e = Handle.placeholder(d, a.context.currentContext, a.context.templateCurrentContext), 1 === c.length && d === f && typeof e != typeof f)) {
            f = e;break;
          }f = f.replace(d, e);
        }
      } else f = a.rule.range ? Random.string(a.rule.count) : a.template;return f;
    }, "function": function _function(a) {
      return a.template.call(a.context.currentContext);
    } }), Handle.extend({ _all: function _all() {
      var a = {};for (var b in Random) a[b.toLowerCase()] = b;return a;
    }, placeholder: function placeholder(_placeholder, obj, templateContext) {
      rplaceholder.exec("");var parts = rplaceholder.exec(_placeholder),
          key = parts && parts[1],
          lkey = key && key.toLowerCase(),
          okey = this._all()[lkey],
          params = parts && parts[2] || "";try {
        params = eval("(function(){ return [].splice.call(arguments, 0 ) })(" + params + ")");
      } catch (error) {
        params = parts[2].split(/,\s*/);
      }if (obj && key in obj) return obj[key];if (templateContext && "object" == typeof templateContext && key in templateContext && _placeholder !== templateContext[key]) return templateContext[key] = Handle.gen(templateContext[key], key, { currentContext: obj, templateCurrentContext: templateContext }), templateContext[key];if (!(key in Random || lkey in Random || okey in Random)) return _placeholder;for (var i = 0; i < params.length; i++) rplaceholder.exec(""), rplaceholder.test(params[i]) && (params[i] = Handle.placeholder(params[i], obj));var handle = Random[key] || Random[lkey] || Random[okey];switch (Util.type(handle)) {case "array":
          return Random.pick(handle);case "function":
          var re = handle.apply(Random, params);return re === undefined && (re = ""), re;}
    } }), Mock.mockjax = function (a) {
    function b() {
      return { readyState: 4, status: 200, statusText: "", open: a.noop, send: function send() {
          this.onload && this.onload();
        }, setRequestHeader: a.noop, getAllResponseHeaders: a.noop, getResponseHeader: a.noop, statusCode: a.noop, abort: a.noop };
    }function c(a, c, d) {
      var e = find(a);return e && (a.dataFilter = a.converters["text json"] = a.converters["text jsonp"] = a.converters["text script"] = a.converters["script json"] = function () {
        return convert(e, a);
      }, a.xhr = b, "script" !== c.dataType) ? "json" : void 0;
    }return a.ajaxPrefilter("json jsonp script", c), Mock;
  }, "undefined" != typeof jQuery && Mock.mockjax(jQuery), "undefined" != typeof Zepto && (Mock.mockjax = function (a) {
    var b = a.ajax,
        c = { readyState: 4, responseText: "", responseXML: null, state: 2, status: 200, statusText: "success", timeoutTimer: null };a.ajax = function (d) {
      var e = find(d);if (e) {
        var f = Mock.mock(e.template);return d.success && d.success(f, c, d), d.complete && d.complete(c.status, c, d), c;
      }return b.call(a, d);
    };
  }, Mock.mockjax(Zepto)), "undefined" != typeof KISSY && KISSY.add && (Mock.mockjax = function (a) {
    var b = a.io,
        c = { readyState: 4, responseText: "", responseXML: null, state: 2, status: 200, statusText: "success", timeoutTimer: null };a.io = function (a) {
      var d = find(a);if (d) {
        var e = Mock.mock(d.template);return a.success && a.success(e, c, a), a.complete && a.complete(c.status, c, a), c;
      }return b.apply(this, arguments);
    };for (var d in b) a.io[d] = b[d];
  }), Mock.Util = Util, Mock.Random = Random, Mock.heredoc = Util.heredoc, "object" == typeof module && module.exports ? module.exports = Mock : "function" == typeof define && define.amd ? (define("mock", [], function () {
    return Mock;
  }), define("mockjs", [], function () {
    return Mock;
  })) : "function" == typeof define && define.cmd && define(function () {
    return Mock;
  }), this.Mock = Mock, this.Random = Random, "undefined" != typeof KISSY && Util.each(["mock", "components/mock/", "mock/dist/mock", "gallery/Mock/0.1.9/"], function (a) {
    KISSY.add(a, function (a) {
      return Mock.mockjax(a), Mock;
    }, { requires: ["ajax"] });
  }), (function (a) {
    var b = { version: "0.0.1" };this.Mock || (module.exports = b), Mock.tpl = function (a, c, d, e) {
      return b.mock(a, c, d, e);
    }, Mock.parse = function (a) {
      return Handlebars.parse(a);
    }, b.mock = function (a, b, d, e) {
      return d = d ? Util.extend({}, d, Handlebars.helpers) : Handlebars.helpers, e = e ? Util.extend({}, e, Handlebars.partials) : Handlebars.partials, c.gen(a, null, b, d, e);
    };var c = { debug: b.debug || !1, extend: Util.extend };c.gen = function (a, d, e, f, g) {
      if (Util.isString(a)) {
        var h = Handlebars.parse(a);e = c.parseOptions(a, e);var i = c.gen(h, d, e, f, g);return i;
      }if ((d = d || [{}], e = e || {}, this[a.type] !== Util.noop)) {
        e.__path = e.__path || [], (b.debug || c.debug) && (console.log(), console.group("[" + a.type + "]", JSON.stringify(a)), console.log("[options]", e.__path.length, JSON.stringify(e)));var j = e.__path.length;return this[a.type](a, d, e, f, g), e.__path.splice(j), (b.debug || c.debug) && console.groupEnd(), d[d.length - 1];
      }
    }, c.parseOptions = function (a, b) {
      var c,
          d,
          e,
          f = /<!--\s*\n*Mock\s*\n*([\w\W]+?)\s*\n*-->/g,
          g = a.match(f),
          h = {};for (c = 0; g && c < g.length; c++) f.lastIndex = 0, d = f.exec(g[c]), d && (e = new Function("return " + d[1]), e = e(), Util.extend(h, e));return Util.extend(h, b);
    }, c.val = function (d, e, f, g) {
      if (d !== e.__path[e.__path.length - 1]) throw new Error(d + "!==" + e.__path);if (((b.debug || c.debug) && console.log("[options]", d, e.__path), g !== a && (g = Mock.mock(g)), e)) {
        var h = Mock.mock(e);if (Util.isString(h)) return h;if (d in h) return h[d];
      }return Util.isArray(f[0]) ? {} : g !== a ? g : d || Random.word();
    }, c.program = function (a, b, c, d, e) {
      for (var f = 0; f < a.statements.length; f++) this.gen(a.statements[f], b, c, d, e);
    }, c.mustache = function (a, b, c, d, e) {
      var f,
          g = b[0],
          h = b.length;if (("array" === Util.type(g) && (g.push({}), g = g[g.length - 1], b.unshift(g)), a.isHelper || d && d[a.id.string])) {
        if (0 === a.params.length) ;else for (f = 0; f < a.params.length; f++) this.gen(a.params[f], b, c, d, e);a.hash && this.gen(a.hash, b, c, d, e);
      } else this.gen(a.id, b, c, d, e);b.length > h && b.splice(0, b.length - h);
    }, c.block = function (a, b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l = a.mustache.id.parts,
          m = b[0],
          n = b.length;if ((a.inverse, a.mustache.isHelper || e && e[a.mustache.id.string])) k = l[0], j = (d[k] || d.custom).apply(this, arguments), m = b[0];else for (g = 0; g < l.length; g++) c.__path.push(l[g]), i = l[g], j = this.val(i, c, b, {}), m[i] = Util.isArray(j) && [] || j, k = Util.type(m[i]), ("object" === k || "array" === k) && (m = m[i], b.unshift(m));if (a.program) if ("array" === Util.type(m)) for (h = j.length || Random.integer(3, 7), g = 0; h > g; g++) m.push("undefined" != typeof j[g] ? j[g] : {}), c.__path.push("[]"), b.unshift(m[m.length - 1]), this.gen(a.program, b, c, e, f), c.__path.pop(), b.shift();else this.gen(a.program, b, c, e, f);b.length > n && b.splice(0, b.length - n);
    }, c.hash = function (a, b, c, d, e) {
      var f,
          g,
          h,
          i = a.pairs;for (g = 0; g < i.length; g++) for (f = i[g], h = 1; h < f.length; h++) this.gen(f[h], b, c, d, e);
    }, c.ID = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = a.parts,
          n = b[a.depth],
          o = b.length;if ((Util.isArray(n) && (n = b[a.depth + 1]), m.length)) for (d = 0, e = m.length; e > d; d++) c.__path.push(m[d]), f = m[d], g = m[d - 1], l = c[g], h = d === e - 1 ? n[f] : {}, i = this.val(f, c, b, h), j = Util.type(n[f]), k = Util.type(i), "undefined" === j ? e - 1 > d && "object" !== k && "array" !== k ? n[f] = {} : n[f] = Util.isArray(i) && [] || i : e - 1 > d && "object" !== j && "array" !== j && (n[f] = Util.isArray(i) && [] || {}), j = Util.type(n[f]), ("object" === j || "array" === j) && (n = n[f], b.unshift(n));else ;b.length > o && b.splice(0, b.length - o);
    }, c.partial = function (a, b, d, e, f) {
      var g = a.partialName.name,
          h = f && f[g],
          i = b.length;h && c.gen(h, b, d, e, f), b.length > i && b.splice(0, b.length - i);
    }, c.content = Util.noop, c.PARTIAL_NAME = Util.noop, c.DATA = Util.noop, c.STRING = Util.noop, c.INTEGER = Util.noop, c.BOOLEAN = Util.noop, c.comment = Util.noop;var d = {};d.each = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = b[0];for (h = a.mustache.params[0].parts, d = 0, e = h.length; e > d; d++) c.__path.push(h[d]), f = h[d], i = d === e - 1 ? [] : {}, g = this.val(f, c, b, i), k[f] = Util.isArray(g) && [] || g, j = Util.type(k[f]), ("object" === j || "array" === j) && (k = k[f], b.unshift(k));return g;
    }, d["if"] = d.unless = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = a.mustache.params,
          l = b[0];for (d = 0; d < k.length; d++) for (h = k[d].parts, e = 0; e < h.length; e++) 0 === d && c.__path.push(h[e]), f = h[e], i = e === h.length - 1 ? "@BOOL(2,1,true)" : {}, g = this.val(f, c, b, i), e === h.length - 1 && (g = "true" === g ? !0 : "false" === g ? !1 : g), l[f] = Util.isArray(g) ? [] : g, j = Util.type(l[f]), ("object" === j || "array" === j) && (l = l[f], b.unshift(l));return g;
    }, d["with"] = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = b[0];for (g = a.mustache.params[0].parts, d = 0; d < g.length; d++) c.__path.push(g[d]), e = g[d], h = {}, f = this.val(e, c, b, h), i = i[e] = f, b.unshift(i);return f;
    }, d.log = function () {}, d.custom = function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = b[0];if (0 !== a.mustache.params.length) {
        for (h = a.mustache.params[0].parts, d = 0, e = h.length; e > d; d++) c.__path.push(h[d]), f = h[d], i = d === e - 1 ? [] : {}, g = this.val(f, c, b, i), k[f] = Util.isArray(g) && [] || g, j = Util.type(k[f]), ("object" === j || "array" === j) && (k = k[f], b.unshift(k));return g;
      }
    };
  }).call(this), (function (a) {
    if ("undefined" != typeof KISSY) {
      var b,
          c = { debug: !1 };KISSY.use("xtemplate", function (a, c) {
        b = c;
      }), this.Mock || (module.exports = c), Mock.xtpl = function (a, b, d, e) {
        return c.mock(a, b, d, e);
      }, Mock.xparse = function (a) {
        return b.compiler.parse(a);
      }, c.mock = function (a, c, d, e) {
        return d = d ? Util.extend({}, d, b.RunTime.commands) : b.RunTime.commands, e = e ? Util.extend({}, e, b.RunTime.subTpls) : b.RunTime.subTpls, this.gen(a, null, c, d, e, {});
      }, c.parse = function (a) {
        return b.compiler.parse(a);
      }, c.gen = function (a, b, d, e, f, g) {
        if ("string" == typeof a) {
          c.debug && console.log("[tpl    ]\n", a);var h = this.parse(a);d = this.parseOptions(a, d);var i = this.gen(h, b, d, e, f, g);return i;
        }if ((b = b || [{}], d = d || {}, a.type = a.type, this[a.type] !== Util.noop)) {
          d.__path = d.__path || [], c.debug && (console.log(), console.group("[" + a.type + "]", JSON.stringify(a)), console.log("[context]", "[before]", b.length, JSON.stringify(b)), console.log("[options]", "[before]", d.__path.length, JSON.stringify(d)), console.log("[other  ]", "[before]", JSON.stringify(g)));var j = d.__path.length;return this[a.type](a, b, d, e, f, g), c.debug && console.log("[__path ]", "[after ]", d.__path), (!g.hold || "function" == typeof g.hold && !g.hold(a, d, b)) && d.__path.splice(j), c.debug && (console.log("[context]", "[after ]", b.length, JSON.stringify(b)), console.groupEnd()), b[b.length - 1];
        }
      }, c.parseOptions = function (a, b) {
        var c,
            d,
            e,
            f = /<!--\s*\n*Mock\s*\n*([\w\W]+?)\s*\n*-->/g,
            g = a.match(f),
            h = {};for (c = 0; g && c < g.length; c++) f.lastIndex = 0, d = f.exec(g[c]), d && (e = new Function("return " + d[1]), e = e(), Util.extend(h, e));return Util.extend(h, b);
      }, c.parseVal = function (a, b) {
        function c(a, b) {
          if ("object" == typeof b && a in b) return [b[a]];for (var c = [], d = 0; d < b.length; d++) c.push.apply(c, e(a, [b[d]]));return c;
        }function d(a, b) {
          if ("object" == typeof b && a in b) return [b[a]];var c = [];for (var d in b) c.push.apply(c, e(a, [b[d]]));return c;
        }function e(a, b) {
          for (var e = [], f = 0; f < b.length; f++) "object" == typeof b[f] && (a in b[f] ? e.push(b[f][a]) : e.push.apply(e, Util.isArray(b[f]) ? c(a, b[f]) : d(a, b[f])));return e;
        }function f(a, b) {
          for (var c = "string" == typeof a ? a.split(".") : a.slice(0), d = [b]; c.length;) d = e(c.shift(), d);return d;
        }return f(a, b);
      }, c.val = function (b, d, e, f) {
        if (b !== d.__path[d.__path.length - 1]) throw new Error(b + "!==" + d.__path);if ((f !== a && (f = Mock.mock(f)), d)) {
          var g = Mock.mock(d);if (Util.isString(g)) return g;var h = c.parseVal(d.__path, g);if (h.length > 0) return h[0];if (b in g) return g[b];
        }return Util.isArray(e[0]) ? {} : f !== a ? f : b;
      }, c.program = function (a, b, c, d, e, f) {
        for (var g = 0; g < a.statements.length; g++) this.gen(a.statements[g], b, c, d, e, f);for (var h = 0; a.inverse && h < a.inverse.length; h++) this.gen(a.inverse[h], b, c, d, e, f);
      }, c.block = function (b, c, d, e, f, g) {
        var h = c.length;this.gen(b.tpl, c, d, e, f, Util.extend({}, g, { def: {}, hold: !0 }));var i,
            j,
            k,
            l = c[0];if ("array" === Util.type(l)) for (i = this.val(d.__path[d.__path.length - 1], d, c), k = i && i.length || Random.integer(3, 7), j = 0; k > j; j++) l.push(i && i[j] !== a ? i[j] : {}), d.__path.push(j), c.unshift(l[l.length - 1]), this.gen(b.program, c, d, e, f, g), d.__path.pop(), c.shift();else this.gen(b.program, c, d, e, f, g);(!g.hold || "function" == typeof g.hold && !g.hold(b, d, c)) && c.splice(0, c.length - h);
      }, c.tpl = function (a, b, c, d, e, f) {
        if (a.params && a.params.length) {
          f = Util.extend({}, f, { def: ({ each: [], "if": "@BOOL(2,1,true)", unless: "@BOOL(2,1,false)", "with": {} })[a.path.string], hold: ({ each: !0, "if": function _if(a, b, c, d, e) {
                return "object" == typeof e;
              }, unless: function unless(a, b, c, d, e) {
                return "object" == typeof e;
              }, "with": !0, include: !1 })[a.path.string] });for (var g, h = 0; h < a.params.length; h++) g = "include" === a.path.string ? e && e[a.params[h].value] : a.params[h], g && this.gen(g, b, c, d, e, f);a.hash && this.gen(a.hash, b, c, d, e, f);
        } else this.gen(a.path, b, c, d, e, f);
      }, c.tplExpression = function (a, b, c, d, e, f) {
        this.gen(a.expression, b, c, d, e, f);
      }, c.content = Util.noop, c.unaryExpression = Util.noop, c.multiplicativeExpression = c.additiveExpression = function (b, c, d, e, f, g) {
        this.gen(b.op1, c, d, e, f, Util.extend({}, g, { def: (function () {
            return "number" === b.op2.type ? b.op2.value.indexOf(".") > -1 ? Random["float"](-Math.pow(10, 10), Math.pow(10, 10), 1, Math.pow(10, 6)) : Random.integer() : a;
          })() })), this.gen(b.op2, c, d, e, f, Util.extend({}, g, { def: (function () {
            return "number" === b.op1.type ? b.op1.value.indexOf(".") > -1 ? Random["float"](-Math.pow(10, 10), Math.pow(10, 10), 1, Math.pow(10, 6)) : Random.integer() : a;
          })() }));
      }, c.relationalExpression = function (a, b, c, d, e, f) {
        this.gen(a.op1, b, c, d, e, f), this.gen(a.op2, b, c, d, e, f);
      }, c.equalityExpression = Util.noop, c.conditionalAndExpression = Util.noop, c.conditionalOrExpression = Util.noop, c.string = Util.noop, c.number = Util.noop, c["boolean"] = Util.noop, c.hash = function (a, b, c, d, e, f) {
        var g,
            h = a.value;for (g in h) this.gen(h[g], b, c, d, e, f);
      }, c.id = function (b, d, e, f, g, h) {
        function i(a, b, c, d, e) {
          var f = Util.type(a[d]),
              g = Util.type(e);return e = "true" === e ? !0 : "false" === e ? !1 : e, "undefined" === f ? c - 1 > b && !Util.isObjectOrArray(e) ? a[d] = {} : a[d] = Util.isArray(e) && [] || e : c - 1 > b && "object" !== f && "array" !== f ? a[d] = Util.isArray(e) && [] || {} : "object" !== f && "array" !== f && "object" !== g && "array" !== g && (a[d] = e), a[d];
        }var j,
            k,
            l,
            m,
            n,
            o = d.length,
            p = b.parts,
            q = d[b.depth];for (Util.isArray(q) && (q = d[b.depth + 1]), j = 0, k = p.length; k > j; j++) (0 !== j || "this" !== p[j]) && (/^(xindex|xcount|xkey)$/.test(p[j]) || 0 === j && 1 === k && p[j] in f || (e.__path.push(p[j]), l = p[j], m = j === k - 1 ? h.def !== a ? h.def : d[0][l] : {}, n = this.val(l, e, d, m), c.debug && (console.log("[def    ]", JSON.stringify(m)), console.log("[val    ]", JSON.stringify(n))), n = i(q, j, k, l, n), Util.isObjectOrArray(q[l]) && d.unshift(q = q[l])));(!h.hold || "function" == typeof h.hold && !h.hold(b, e, d, l, n)) && d.splice(0, d.length - o);
      };
    }
  }).call(this);
}).call(undefined);
//# sourceMappingURL=./mock-min.map

//# sourceMappingURL=mock-compiled.js.map