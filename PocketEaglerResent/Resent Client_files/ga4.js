function addGoogleAnalyticsTags() {
    var currentDomain = window.location.hostname;

    if (currentDomain === "eaglercraftx1-8.github.io") {
        // GitHub Pages Analytics
        var githubAnalyticsScript = document.createElement('script');
        githubAnalyticsScript.async = true;
        githubAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-C44R8LD9MC';
        document.head.appendChild(githubAnalyticsScript);

        var githubScriptContent = document.createElement('script');
        githubScriptContent.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C44R8LD9MC');
        `;
        document.head.appendChild(githubScriptContent);

    } else if (currentDomain === "eaglercraftx1-8.netlify.app") {
        // Netlify Analytics
        var netlifyAnalyticsScript = document.createElement('script');
        netlifyAnalyticsScript.async = true;
        netlifyAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0R2ZXFSYVT';
        document.head.appendChild(netlifyAnalyticsScript);

        var netlifyScriptContent = document.createElement('script');
        netlifyScriptContent.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0R2ZXFSYVT');
        `;
        document.head.appendChild(netlifyScriptContent);

    } else if (currentDomain === "eaglercraftx1-8.onrender.com") {
        // Render Analytics
        var renderAnalyticsScript = document.createElement('script');
        renderAnalyticsScript.async = true;
        renderAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-MND1TVBSXV';
        document.head.appendChild(renderAnalyticsScript);

        var renderScriptContent = document.createElement('script');
        renderScriptContent.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MND1TVBSXV');
        `;
        document.head.appendChild(renderScriptContent);

    } else {
        // Else (Fallback) Analytics
        var fallbackAnalyticsScript = document.createElement('script');
        fallbackAnalyticsScript.async = true;
        fallbackAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-81F615LDEZ';
        document.head.appendChild(fallbackAnalyticsScript);

        var fallbackScriptContent = document.createElement('script');
        fallbackScriptContent.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-81F615LDEZ');
        `;
        document.head.appendChild(fallbackScriptContent);
    }
}
addGoogleAnalyticsTags();
