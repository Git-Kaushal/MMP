/* MMP shared footer - add <script src="footer.js"></script> before </body> on every map page */
(function () {
  var f = document.createElement("div");
  f.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:9999;text-align:center;" +
    "font:13px system-ui,sans-serif;padding:8px 10px;background:#fff;color:#444;border-top:1px solid #ddd";
  f.innerHTML = 'Author: <b>Kaushal.J</b> &middot; JEE Advanced / NEET Trainer &middot; ' +
    '<a href="https://git-kaushal.github.io/MMP/" style="color:#3b5bdb">https://git-kaushal.github.io/MMP/</a>' +
    ' &middot; <a href="https://git-kaushal.github.io/MMP/" style="color:#3b5bdb">&larr; Topic Navigator</a>';
  document.body.appendChild(f);
})();
