css`

    .unblurd-fix .css-175oi2r.r-1867qdf.r-16y2uox > [role="button"] {
        opacity: .2 !important;
        transition: opacity .3s, transform .3s;
    }

    .unblurd-fix .css-175oi2r.r-1867qdf.r-16y2uox:hover > [role="button"] {
        opacity: 1 !important;
        transform: translateY(-160%);
    }

`

function clickButtons(container) {
    for (const button of [...container.querySelectorAll('[role="button"]')])
        button?.click.call(button)
}

observe(document, 'main', _ => {
    console.log("[UnBlurd] Observing <main/>", _)
    observe(_, '[role="article"],[role="listitem"]', async tweet => {
        if (tweet.getAttribute('role') === "listitem") return clickButtons(tweet)
        tweet.classList.add('unblurd-fix')
        const mediaWarning = tweet.querySelector('.css-175oi2r.r-1kihuf0.r-1e081e0')
        if (mediaWarning) clickButtons(mediaWarning)
    })
}, true)
