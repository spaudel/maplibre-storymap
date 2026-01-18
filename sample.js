var config = {
    style: 'https://api.maptiler.com/maps/019bc555-9ae4-738d-8a86-1fc6236ae53f/style.json?key=x9A0aeGpP2trOAjv2K0v',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: false, // if inset map is set to true, legend will be disabled.
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Learning Sherpa Placenames and Stories in Khumbu Pasanglhamu Rural Municipality',
    logo: '',
    subtitle: 'Sample Output from Phase 1 Data Collection',
    byline: 'Placename Project Team',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: Data collected by Kami Dorje Sherpa and Pemba Yangjee Sherpa in November and December 2025.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Lukla',
            image: './images/lukla-airport-download.jpg',
            caption: 'Lukla airport',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Placename Project Team',
            legend: '<em>L<img src="/images/Handdrawn_Lukla_to_Jorsalle.jpg" width="500"/> </em>',
            description: 'लुक्ला ~ लुक्ल्हा लुक - भेडा ला - हेर्नू । यो ठाउँमा पहिला भेडा पाल्ने गरेको ठाउँ भएर यो ठाउँ लाई स्थानीय हरुले पछि लुक्ला भनिएको हो । अहिले ठूलो गाउँ  हो । यहाँ तेन्जिङ हिलारी airport , माने , कनि , स्कुल गुम्बा हरु रहेको छ । ',
            location: {
                center: [86.72983, 27.68693],
                zoom: 13.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Ghat (ङ्युर्ङिङ)',
            image: './images/ghat.jpg',
            description: 'Sherpa name and meaning: ङ्युर्ङिङ ( युल ङिङ ); युल - शेर्पा भाषामा गाउँ  ङिङ - पुरानो । यो ठाउँमा कुनै गाउँ हरु नै नहुदा यो ठाउँमा गाउँ भएकाले यो ठाउँ को नाम शेर्पा भाषामा युल ङिङ अर्थात पुरानो गाउँ  भनिएको हो । त्यति बेला यो गाउँमा जम्मा 5/6 वटा मात्र घर हरु थिए ।  त्यति बेला अहिले को बाटो  नभई गाउँ को अलि तल देखि अर्कै बाटो थियो । पहिला यो ठाउँ एकदम flat र खोलामा मान्छे हरुले घाट ( डुङ्गा ) चलाएर यताउता जाने भएकाले पछि नेपाली भाषामा यो ठाउँ लाई घाट ( ghat ) भनिएको हो ।',
            location: {
                center: [86.7146437, 27.7241695],
                zoom: 13.29,
                pitch: 0,
                bearing: 0, //-90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter-3',
            alignment: 'center',
            hidden: false,
            title: 'Namche (Nauche)',
            image: './images/namche-bajar.jpg',
            description: 'Sherpa name and meaning: '
            location: {
                center: [86.708815, 27.8037806],
                zoom: 13.29,
                pitch: 0,
                bearing: 0, //-90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },


    ]
};
