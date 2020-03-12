// Google map start
function func() {
    var script = document.createElement('script');
    // const key = 'AIzaSyC_XaLtOX8vgeRAIeqgdfHh9q1lNTIS3Y0';
    const key = '';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&language=${lang}`;
    document.getElementsByTagName('head')[0].appendChild(script);

}
setTimeout(func, 1000);


function initMap() {
    var gmarkers1 = [];
    filterMarkers = function(category) {
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            var markerMain = gmarkers1.find(item => item.category === 'main');

            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                markerMain.setMap(map);
            } else {
                marker.setMap(null);
                markerMain.setMap(map);
            }
        }
    };

    let resButton = document.querySelector('.legend-reset-js');
    let infraList = document.querySelectorAll('.legend-items-js li'),
        showAllButton = document.querySelector('.legend-button__active');
    if (showAllButton != null) {
        showAllButton.onclick = () => {
            // resButton.style.opacity = 0;
            gmarkers1.forEach(mark => {
                mark.setVisible(true);

                infraList.forEach(li => {
                    li.classList.remove('checked-infra-item');
                })
            });
        }
    }
    activeNames = [];
    if (resButton != null) {
        resButton.onclick = () => {
            gmarkers1.forEach(mark => {
                mark.setVisible(false);
            });
            infraList.forEach(li => {
                li.classList.remove('checked-infra-item');
            })
            return activeNames = [];
        };
    }

    infraList.forEach(item => {
        item.addEventListener('click', (e) => {
            // resButton.style.opacity = 1;
            item.classList.toggle('checked-infra-item');
            let infraCheckedList = document.querySelectorAll('.checked-infra-item');
            infraCheckedList.forEach(checkItem => {
                activeNames.push(checkItem.dataset.name);
            });

            gmarkers1.forEach(mark => {
                if (activeNames.includes(mark.name)) {
                    mark.setVisible(true);
                } else {
                    mark.setVisible(false);
                }
            });
            activeNames = [];
        })
    })
    var center = {
        lat: 50.556431,
        lng: 30.277789
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        language: 'en',
        styles: [{
            "featureType": "all",
            "stylers": [{
                "saturation": 0
            }, {
                "hue": "#e7ecf0"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": -70
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }]
        }],

    });





    var markers_spritesheet;

    if (document.location.pathname === '/') {
        markers_spritesheet = 'img/main_page_map_markers_spritesheet.png';
    } else {
        markers_spritesheet = '../img/main_page_map_markers_spritesheet.png';
    }

    var baseFolder = './assets/images/map-icons/';
    var defaultMarkerSize = new google.maps.Size(44, 62),
        buildLogoSize = new google.maps.Size(100, 100);
    var markersAdresses = {
        main: `${baseFolder}map-main.svg`,
        pharmacy: `${baseFolder}map-pharmacy.svg`,
        meal: `${baseFolder}map-meal.svg`,
        sport: `${baseFolder}map-sport.svg`,
        entertaiment: `${baseFolder}map-entertaiment.svg`,
        school: `${baseFolder}map-school.svg`,
        kindergarden: `${baseFolder}map-kindergarden.svg`,
        park: `${baseFolder}map-park.svg`,
        shop: `${baseFolder}map-shop.svg`,


    }

    var markersData = [];
    /** Маркеры для карты 28,01,2020 */
    /* beautify preserve:start */
    var markersData = [
        {
            content: `<img style="background:white" src="${markersAdresses.main}">`,
            position: { lat: 50.556431,  lng: 30.277789 },
            type: 'main',
            icon: { url: markersAdresses.main,scaledSize: buildLogoSize,}
        },
        // {
        //     content: `Тестовий парк`,
        //     position: { lat: 50.555773,  lng: 30.269847 },
        //     type: 'park',
        //     icon: { url: markersAdresses.park,scaledSize: defaultMarkerSize,}
        // },
        {
            content: `Тестовий school`,
            position: { lat: 50.555773,  lng: 30.269847 },
            type: 'school',
            icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий pharmacy`,
            position: { lat: 50.558773,  lng: 30.269847 },
            type: 'pharmacy',
            icon: { url: markersAdresses.pharmacy,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий entertaiment`,
            position: { lat: 50.559773,  lng: 30.269847 },
            type: 'entertaiment',
            icon: { url: markersAdresses.entertaiment,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий shop`,
            position: { lat: 50.554773,  lng: 30.269847 },
            type: 'shop',
            icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий kinder`,
            position: { lat: 50.553773,  lng: 30.269847 },
            type: 'kindergarden',
            icon: { url: markersAdresses.kindergarden,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий meal`,
            position: { lat: 50.552773,  lng: 30.269847 },
            type: 'meal',
            icon: { url: markersAdresses.meal,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий sport`,
            position: { lat: 50.551773,  lng: 30.269847 },
            type: 'sport',
            icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,}
        },
    ]
/* beautify preserve:end */
    var activeInfoBubble;



    /**Вывод карты со всеми маркерами на странице Инфраструктуры и С одним маркером на остальных страницах */
    markersData.forEach(function(marker) {
        var markerSettings = {};
        var category = marker.type;
        // console.log(marker.icon);

        var mapMarker = new google.maps.Marker({
            map: map,
            category: category,
            icon: marker.icon,
            position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(mapMarker, 'click', function() {
            infowindow.setContent(marker.content);
            infowindow.open(map, mapMarker);
        });
        mapMarker.name = marker.type;
        // console.log(gmarkers1);
        gmarkers1.push(mapMarker);
        // console.log(category);
        // console.log(gmarkers1);
    });

};


// Google map end