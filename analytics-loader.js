(function() {
    var script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=YOUR-ID";
    document.head.appendChild(script1);

    var script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZERC21GJ1R');
    `;
    document.head.appendChild(script2);
})();
