<><><><><><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
</script><script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script></><script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script></><script type="application/ld+json">
        {"@context"}: "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Home Tuitions",
        "image": "https://maps.app.goo.gl/vDKRVs5Nz8J15hPd8",
        "@id": "",
        "url": "https://www.thehometuitions.in/",
        "telephone": "06387488141",
        "address": {"@type"}: "PostalAddress",
        "streetAddress": "Verma Complex 1st floor, A-mart Chauraha near Bal Nikunj School",
        "addressLocality": "lucknow",
        "postalCode": "226021",
        "addressCountry": "IN"

    </script></><script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {dataLayer.push(arguments)};

        gtag('js', new Date());
        gtag('config', 'G-N7H9LTH70Y');
    </script></><script type="application/ld+json">
        {"@context"}: "https://schema.org/",
        "@type": "WebSite",
        "name": "The Home Tuitions",
        "url": "https://www.thehometuitions.in/",
        "potentialAction": {"@type"}: "SearchAction",
        "target": "{search_term_string}",
        "query-input": "required name=search_term_string"
        let toggles = document.getElementsByClassName("toggle");
     let contentDiv = document.getElementsByClassName("content");
     let icons = document.getElementsByClassName("icon");

     for (let i = 0; i < toggles.length; i++) {
         toggles[i].addEventListener("click", () => {
             if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
                 contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                 toggles[i].style.color = "#0084e9";
                 icons[i].classList.remove("fa-plus");
                 icons[i].classList.add("fa-minus");
             } else {
                 contentDiv[i].style.height = "0px";
                 toggles[i].style.color = "#111130";
                 icons[i].classList.remove("fa-minus");
                 icons[i].classList.add("fa-plus");
             }

             for (let j = 0; j < contentDiv.length; j++) {
                 if (j !== i) {
                     contentDiv[j].style.height = 0;
                     toggles[j].style.color = "#111130";
                     icons[j].classList.remove("fa-minus");
                     icons[j].classList.add("fa-plus");
                 }
             }
         });
     }$(window).ready(function() {
        setTimeout(function() {
            $('#modal-subscribe').modal("show")
        }, 6000)
    })
    </script></>
    

 