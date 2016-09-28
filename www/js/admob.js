var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-7781533503700685/9823233255',
        interstitial: 'ca-app-pub-7781533503700685/2299966454'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-7781533503700685/5393033652',
        interstitial: 'ca-app-pub-7781533503700685/6869766858'
    };
}

if(( /(ipad|iphone|ipod|android)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner,
        isTesting: true,
        overlap: false,
        offsetTopBar: false,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        bgColor: 'black'
    } );

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}

