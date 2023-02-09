/*
本脚本是QuanmutultX假日倒计时
定时任务添加:
[task_local]
# 节假提醒
0 8 * * * https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/QuanmutultX/Timecard.js, tag=节假提醒, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Daily.png, enabled=true
 */
const $ = new Env('DaysMatter', true)
let title = '📅 倒数日'
let url = ''
let option = {
    url: url,
    headers: {}
}
let nowDate = new Date().toLocaleDateString()
let year = nowDate.split('/')[0]
// 各日期区分开方便日后区分放假通知与倒数日通知
// 节日集合，包含法定节假日，内置假日，用户假日（固定+浮动）
let daysData =
    [
        {'date': '2023-1-1', 'name': '元旦'},
        {'date': '2023-1-21', 'name': '除夕'},
        {'date': '2023-1-22', 'name': '春节'},
        {'date': '2023-2-14', 'name': '情人节'},
        {'date': '2023-3-8', 'name': '妇女节'},
        {'date': '2023-4-1', 'name': '愚人节'},
        {'date': '2023-4-5', 'name': '清明节'},
        {'date': '2023-5-1', 'name': '劳动节'},
        {'date': '2023-5-14', 'name': '母亲节'},
        {'date': '2023-6-1', 'name': '儿童节'},
        {'date': '2023-6-18', 'name': '父亲节'},
        {'date': '2023-6-21', 'name': '结婚纪念日'},
        {'date': '2023-6-22', 'name': '端午节'},
        {'date': '2023-8-22', 'name': '七夕'},
        {'date': '2023-9-29', 'name': '中秋节'},
        {'date': '2023-10-1', 'name': '国庆节'},
        {'date': '2023-12-24', 'name': '平安夜'},
        {'date': '2023-12-28', 'name': '生日'},
        {'date': '2024-1-18', 'name': '腊八节'},
        {'date': '2024-2-2', 'name': '小年'},
        {'date': '2024-2-9', 'name': '除夕'},
        {'date': '2024-2-10', 'name': '春节'}
    ]

let tnow = new Date()
let tnowf = tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate()
let dateDiffArray = []

startWork()

async function startWork() {
    let nowlist = now();
    $.log('距离最近的节日：' + daysData[nowlist].name)
    let notifyContent = dateDiffArray[0].name + ":" + today(tnumCount(0)) + "," + dateDiffArray[Number(0) + Number(1)].name + ":" + tnumCount(Number(0) + Number(1)) + "天," + dateDiffArray[Number(0) + Number(2)].name + ":" + tnumCount(Number(0) + Number(2)) + "天"
    $.isSurge() ? body = {
        title: title_random(tnumCount(Number(0))),
        content: notifyContent,
        icon: icon_now(tnumCount(Number(0))),
        'icon-color': '#5AC8FA'
    } : body = {
        title: title_random(tnumCount(Number(0))),
        content: notifyContent,
        icon: icon_now(tnumCount(Number(0))),
        backgroundColor: '#339900'
    }
    $.msg(title, '', notifyContent)
    $.log('\n面板显示内容：\n' + notifyContent)
    $.isSurge || $.isStash ? $.done(body) : $.done()
}

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
    let separator = "-"; //日期分隔符
    let startDates = startDateString.split(separator);
    let endDates = endDateString.split(separator);
    let startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
    let endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
    return parseInt((endDate - startDate) / 1000 / 60 / 60 / 24).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumCount(num) {
    return dateDiff(tnowf, dateDiffArray[num].date);
}

//获取最接近的日期
function now() {
    let tmp = 400
    let res = 0
    for (let i = 0; i < daysData.length; i++) {
        let key = Number(dateDiff(tnowf, daysData[i].date))
        if (key >= 0) {
            dateDiffArray.push({'date': daysData[i].date, 'name': daysData[i].name, 'key': key})
        }
        if (key >= 0 && tmp > key) {
            // 上面的思路是对差值数组排序，选出最小值，即日期差最小
            tmp = key
            res = i
        }
    }
    dateDiffArray = mergeSort(dateDiffArray) // 对集合排序
    return res
}

// 归并排序，速度更快
function mergeSort(list) {
    const rec = arr => {
        if (arr.length === 1) return arr
        const mid = arr.length >> 1
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)
        const arr1 = rec(left)
        const arr2 = rec(right)
        let i = 0, j = 0
        let res = []
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i].key < arr2[j].key) {
                res.push(arr1[i++])
            } else {
                res.push(arr2[j++])
            }
        }
        if (i < arr1.length) res = res.concat(arr1.slice(i))
        if (j < arr2.length) res = res.concat(arr2.slice(j))
        return res
    }
    return rec(list)
}


function today(day) {
    let daythis = day;
    if (daythis === "0") {
        datenotice();
        return "🎉";
    } else {
        return daythis + "天";
    }
}

function datenotice() {
    if ($.getdata("@DaysMatter.DaysMatterPushed") !== dateDiffArray[0].date && tnow.getHours() >= 6) {
        $.setdata(dateDiffArray[0].date, "@DaysMatter.DaysMatterPushed");
        $.msg("假日祝福", "", "今天是" + dateDiffArray[0].date + "日 " + dateDiffArray[0].name + "   🎉")
    } else if ($.getdata("@DaysMatter.DaysMatterPushed") === dateDiffArray[0].date) {
        //console.log("当日已通知");
    }
}

//>图标依次切换乌龟、兔子、闹钟、礼品盒
function icon_now(num) {
    if (num <= 7 && num > 3) {
        return "hare"
    } else if (num <= 3 && num > 0) {
        return "timer"
    } else if (num === 0) {
        return "gift"
    } else {
        return "tortoise"
    }
}

function title_random(num) {
    let r = Math.floor((Math.random() * 10) + 1);
    let dic = {
        1: "距离放假，还要摸鱼多少天？",
        2: "坚持住，就快放假啦！",
        3: "上班好累呀，下顿吃啥？",
        4: "努力，我还能加班24小时！",
        5: "今日宜：吃饭饭  忌：减肥",
        6: "躺平中，等放假",
        7: "只有摸鱼才是赚老板的钱",
        8: "一起摸鱼吧",
        9: "摸鱼中，期待下一个假日",
        10: "小乌龟慢慢爬"
    };
    return num === 0 ? "节日快乐，万事大吉" : dic[r]
}


/*********************************
 * environment
 * ********************************
 */
function Env(t, s) {
    class e {
        constructor(t) {
            this.env = t
        }

        send(t, s = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let e = this.get;
            return "POST" === s && (e = this.post), new Promise((s, i) => {
                e.call(this, t, (t, e, r) => {
                    t ? i(t) : s(e)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, s) {
            this.name = t, this.http = new e(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, s), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $environment && $environment["surge-version"]
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        isShadowrocket() {
            return "undefined" != typeof $rocket
        }

        isStash() {
            return "undefined" != typeof $environment && $environment["stash-version"]
        }

        toObj(t, s = null) {
            try {
                return JSON.parse(t)
            } catch {
                return s
            }
        }

        toStr(t, s = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return s
            }
        }

        getjson(t, s) {
            let e = s;
            const i = this.getdata(t);
            if (i) try {
                e = JSON.parse(this.getdata(t))
            } catch {
            }
            return e
        }

        setjson(t, s) {
            try {
                return this.setdata(JSON.stringify(t), s)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(s => {
                this.get({url: t}, (t, e, i) => s(i))
            })
        }

        runScript(t, s) {
            return new Promise(e => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = s && s.timeout ? s.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(a, (t, s, i) => e(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s);
                if (!e && !i) return {};
                {
                    const i = e ? t : s;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s), r = JSON.stringify(this.data);
                e ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(s, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, s, e) {
            const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return e;
            return r
        }

        lodash_set(t, s, e) {
            return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}, t)[s[s.length - 1]] = e, t)
        }

        getdata(t) {
            let s = this.getval(t);
            if (/^@/.test(t)) {
                const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), r = e ? this.getval(e) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    s = t ? this.lodash_get(t, i, "") : s
                } catch (t) {
                    s = ""
                }
            }
            return s
        }

        setdata(t, s) {
            let e = !1;
            if (/^@/.test(s)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(s), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const s = JSON.parse(h);
                    this.lodash_set(s, r, t), e = this.setval(JSON.stringify(s), i)
                } catch (s) {
                    const o = {};
                    this.lodash_set(o, r, t), e = this.setval(JSON.stringify(o), i)
                }
            } else e = this.setval(t, s);
            return e
        }

        getval(t) {
            return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, s) {
            return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = t, this.writedata(), !0) : this.data && this.data[s] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, s = (() => {
        })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, e, i) => {
                !t && e && (e.body = i, e.statusCode = e.status ? e.status : e.statusCode, e.status = e.statusCode), s(t, e, i)
            }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: e, statusCode: i, headers: r, body: o} = t;
                s(null, {status: e, statusCode: i, headers: r, body: o}, o)
            }, t => s(t && t.error || "UndefinedError")); else if (this.isNode()) {
                let e = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, s) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            e && this.ckjar.setCookieSync(e, null), s.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {statusCode: i, statusCode: r, headers: o, rawBody: h} = t,
                        a = e.decode(h, this.encoding);
                    s(null, {status: i, statusCode: r, headers: o, rawBody: h, body: a}, a)
                }, t => {
                    const {message: i, response: r} = t;
                    s(i, r, r && e.decode(r.rawBody, this.encoding))
                })
            }
        }

        post(t, s = (() => {
        })) {
            const e = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient[e](t, (t, e, i) => {
                !t && e && (e.body = i, e.statusCode = e.status ? e.status : e.statusCode, e.status = e.statusCode), s(t, e, i)
            }); else if (this.isQuanX()) t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: e, statusCode: i, headers: r, body: o} = t;
                s(null, {status: e, statusCode: i, headers: r, body: o}, o)
            }, t => s(t && t.error || "UndefinedError")); else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {url: r, ...o} = t;
                this.got[e](r, o).then(t => {
                    const {statusCode: e, statusCode: r, headers: o, rawBody: h} = t,
                        a = i.decode(h, this.encoding);
                    s(null, {status: e, statusCode: r, headers: o, rawBody: h, body: a}, a)
                }, t => {
                    const {message: e, response: r} = t;
                    s(e, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }

        time(t, s = null) {
            const e = s ? new Date(s) : new Date;
            let i = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "H+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in i) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
            return t
        }

        queryStr(t) {
            let s = "";
            for (const e in t) {
                let i = t[e];
                null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), s += `${e}=${i}&`)
            }
            return s = s.substring(0, s.length - 1), s
        }

        msg(s = t, e = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() || this.isShadowrocket() || this.isStash() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let s = t.openUrl || t.url || t["open-url"], e = t.mediaUrl || t["media-url"];
                        return {openUrl: s, mediaUrl: e}
                    }
                    if (this.isQuanX()) {
                        let s = t["open-url"] || t.url || t.openUrl, e = t["media-url"] || t.mediaUrl,
                            i = t["update-pasteboard"] || t.updatePasteboard;
                        return {"open-url": s, "media-url": e, "update-pasteboard": i}
                    }
                    if (this.isSurge() || this.isShadowrocket() || this.isStash()) {
                        let s = t.url || t.openUrl || t["open-url"];
                        return {url: s}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $notification.post(s, e, i, o(r)) : this.isQuanX() && $notify(s, e, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                t.push(s), e && t.push(e), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, s) {
            const e = !this.isSurge() || this.isShadowrocket() && !this.isQuanX() && !this.isLoon() && !this.isStash();
            e ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }

        wait(t) {
            return new Promise(s => setTimeout(s, t))
        }

        done(t = {}) {
            const s = (new Date).getTime(), e = (s - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`), this.log(), this.isSurge() || this.isShadowrocket() || this.isQuanX() || this.isLoon() || this.isStash() ? $done(t) : this.isNode() && process.exit(1)
        }
    }(t, s)
}
