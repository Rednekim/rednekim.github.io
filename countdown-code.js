"use strict";
!(function () {
  function o() {
    var o,
      t = Math.abs(parseInt(window.gctHours)) || 0,
      e = Math.abs(parseInt(window.gctMinutes)) || 0,
      i = Math.abs(parseInt(window.gctSeconds)) || 0,
      n = window.gcQid || "";
    (t || e || i) &&
      ((r =
        "block" ===
          (r =
            window.gctAction &&
            ~window.gctAction.toLowerCase().indexOf("submit")
              ? "submit"
              : "block") && ~window.gctAction.toLowerCase().indexOf("block")
          ? "block"
          : "submit"),
      (c = window.gctMessage || !1) &&
        (l =
          0 < c.indexOf(":")
            ? ((a = c.split(":")[0].trim()), c.split(":")[1].trim())
            : c),
      (o = new Element("iframe", {
        id: "gc_" + n,
        src:
          "//widgets.jotform.io/countdown/?static=true&hours=" +
          t +
          "&minutes=" +
          e +
          "&seconds=" +
          i,
        allowTransparency: !0,
        scrolling: "no",
        frameBorder: 0,
      }).setStyle({
        "background-color": "transparent",
        boder: "none",
        width: "100%",
        height: "130px",
      })),
      Event.observe(o, "load", function () {
        setTimeout(s, 1e3 * (1 + i + 60 * e + 3600 * t));
      }),
      ((n = $("id_" + n)) && n.hasClassName("always-hidden")) ||
        $$(".form-all").first().insert({ top: o }));
  }
  function s() {
    var i, n, o;
    "submit" === r
      ? ((i = $$(".form-all > .form-section")),
        (n = function (o) {
          var t, e;
          JotForm.validateAll() &&
            (void 0 !== (t = i[o].select(".form-submit-button").first())
              ? ((e = JotForm.getCollapseBar(t)) &&
                  JotForm.isCollapsed(e) &&
                  e.run("click"),
                setTimeout(function () {
                  t.enable(), t.click();
                }, 500))
              : (o++, i.invoke("hide"), i[o].show(), n(o)));
        }),
        i.invoke("hide"),
        i[0].show(),
        n(0))
      : ((o = ""),
        (o =
          (o =
            (o +=
              '<p style="text-align:center;font-size:40px;font-weight:bold;color:#F00;">') +
            a +
            '</p><p style="text-align:center;font-size:20px;color:#F00;">') +
          l +
          "</p>"),
        $$(".jotform-form").first().replace(o));
  }
  var r,
    c,
    a = "Time's up!",
    l = "Form submission is no longer possible.";
  document.observe("dom:loaded", function () {
    0 < $$(".tabs-list").length ? o() : setTimeout(o, 100);
  });
})();
