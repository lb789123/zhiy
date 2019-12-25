var map;
var point;
var p;
var key=0;
var styleJson=[{
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "color": "#e7c9a2ff"
    }
}, {
    "featureType": "manmade",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "color": "#e0343464"
    }
}, {
    "featureType": "medical",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "color": "#728d2dff"
    }
}, {
    "featureType": "medical",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estate",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "shopping",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "transportation",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.7"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": "1"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": "35"
    }
}, {
    "featureType": "medicallabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportationlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-8"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "city",
    "stylers": {
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-13"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportationlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainmentlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": "0.6"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": "0.6"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text",
    "stylers": {
        "fontsize": "20"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "weight": "10"
    }
}, {
    "featureType": "scenicspotslabel",
    "stylers": {
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "stylers": {
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "stylers": {
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "stylers": {
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "stylers": {
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off",
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off",
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off",
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off",
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off",
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "10-14"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "11",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "12",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "13",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "14",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "15",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "16",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "17",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "18",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.text",
    "stylers": {
        "level": "19",
        "fontsize": "30",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "9",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "10",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "11",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "12",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "13",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "14",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "15",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "16",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "17",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "18",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "stylers": {
        "level": "19",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "9",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "10",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "11",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "12",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "13",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "14",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "15",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "16",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "17",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "18",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "19",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "9",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "10",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "11",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "12",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "13",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "14",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "15",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "16",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "17",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "18",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "2.8",
        "level": "19",
        "curZoomRegionId": "1",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "15",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "16",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "17",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "18",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "stylers": {
        "level": "19",
        "curZoomRegionId": "0",
        "curZoomRegion": "11-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "15",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "16",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "17",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "18",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "19",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "15",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "16",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "17",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "18",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "2.6",
        "level": "19",
        "curZoomRegionId": "0",
        "curZoomRegion": "9-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "10",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "11",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "12",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "13",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "14",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "15",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "16",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "17",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "18",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "19",
        "curZoomRegionId": "0",
        "curZoomRegion": "8-19"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "stylers": {
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "stylers": {
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "stylers": {
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "stylers": {
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "6",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "7",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "8",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "level": "9",
        "curZoomRegionId": "0",
        "curZoomRegion": "6-9"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}];
// 创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    function createMap(){
        map = new BMap.Map("map1");
        map.centerAndZoom(new BMap.Point(114.304282,30.607244),5);
        map.setMapStyleV2({styleJson:styleJson});
        // map.setMapStyleV2({
        //     styleId: 'b256ed4459648678d1db08b4a1d87e31'
        // });
        //添加地图类型和缩略图
        var mapType1 = new BMap.MapTypeControl(
            {
                mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
                anchor: BMAP_ANCHOR_TOP_RIGHT
            }
        );
        var overView = new BMap.OverviewMapControl();
        var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
        map.addControl(mapType1);          //2D图，混合图
        map.addControl(overView);          //添加默认缩略地图控件
        map.addControl(overViewOpen);      //右下角，打开

//         var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
//
//         var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
//
//
//
//         var overView = new BMap.OverviewMapControl();
//
//         var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
//
// //添加地图类型和缩略图
//
//         function add_control(){
//
//             map.addControl(mapType1);          //2D图，卫星图
//
//             map.addControl(mapType2);          //左上角，默认地图控件
//
//             map.setCurrentCity("武汉");        //由于有3D图，需要设置城市哦
//
//             map.addControl(overView);          //添加默认缩略地图控件
//
//             map.addControl(overViewOpen);      //右下角，打开
//
//         }
//
// //移除地图类型和缩略图
//
//         function delete_control(){
//
//             map.removeControl(mapType1);   //移除2D图，卫星图
//
//             map.removeControl(mapType2);
//
//             map.removeControl(overView);
//
//             map.removeControl(overViewOpen);
//
//         }
    }
    // $(key=map.getZoom());
    function setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom();
        //地图放大级别监视
        map.addEventListener("zoomend",function(){
            key=this.getZoom();
        });
        //鼠标点击事件
        map.addEventListener("click",function(point){
            if(key<7) {
            console.log(point.point);
            var pt = point.point;
            var geoc = new BMap.Geocoder();
            geoc.getLocation(pt, function(rs){
                var addComp = rs.addressComponents;
                // alert(addComp.province);
                getBoundary1(addComp.province);
        });}});
        //鼠标移动事件
        map.addEventListener("mousemove",function(point){
            if(key<7) {
                console.log(point.point);
                var pt = point.point;
                var geoc = new BMap.Geocoder();
                geoc.getLocation(pt, function (rs) {
                    var addComp = rs.addressComponents;
                    if (p == addComp.province) {

                    } else {
                        p = addComp.province;
                        getBoundary(addComp.province);
                    }
                    // alert(addComp.province);
                });
            }});
        }

    function addClickHandler(target,window){
        target.addEventListener("click",function(){
            target.openInfoWindow(window);
        });
    }

    //向地图添加控件
    function addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
    }
    //获得省份边界
    function getBoundary(provinceName){
    var bdary = new BMap.Boundary();
    map.clearOverlays();//清除图层覆盖物
    bdary.get(provinceName, function(rs){       //获取行政区域
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000",fillOpacity:1,strokeOpacity: 0.8}); //建立多边形覆盖物
            ply.setFillColor("none");
            map.addOverlay(ply);  //添加覆盖物
            // map.setViewport(ply.getPath());    //调整视野
        }
    });}
    function getBoundary1(provinceName){
    var bdary = new BMap.Boundary();
    map.clearOverlays();//清除图层覆盖物
    bdary.get(provinceName, function(rs){       //获取行政区域
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeColor: "#fff56c"}); //建立多边形覆盖物
            // map.addOverlay(ply);  //添加覆盖物
            if (provinceName == "湖北省") var zsd = "湖北";
            else if (provinceName == "河南省") var zsd = "河南";
            else if (provinceName == "湖南省") var zsd = "湖南";
            else if (provinceName == "河北省") var zsd = "河北";
            else if (provinceName == "山西省") var zsd = "山西";
            else if (provinceName == "陕西省") var zsd = "陕西";
            else if (provinceName == "甘肃省") var zsd = "甘肃";
            else if (provinceName == "北京市") var zsd = "北京";
            else if (provinceName == "四川省") var zsd = "四川";
            else if (provinceName == "海南省") var zsd = "海南";
            else if (provinceName == "浙江省") var zsd = "浙江";
            else if (provinceName == "江苏省") var zsd = "江苏";
            else if (provinceName == "江西省") var zsd = "江西";
            else if (provinceName == "上海市") var zsd = "上海";
            else if (provinceName == "福建省") var zsd = "福建";
            else if (provinceName == "广东省") var zsd = "广东";
            else if (provinceName == "广西壮族自治区") var zsd = "广西";
            else if (provinceName == "云南省") var zsd = "云南";
            else if (provinceName == "贵州省") var zsd = "贵州";
            else if (provinceName == "内蒙古自治区") var zsd = "内蒙古";
            else if (provinceName == "新疆维吾尔自治区") var zsd = "新疆";
            else if (provinceName == "西藏自治区") var zsd = "西藏";
            else if (provinceName == "辽宁省") var zsd = "辽宁";
            else if (provinceName == "吉林省") var zsd = "吉林";
            else if (provinceName == "黑龙江省") var zsd = "黑龙江";
            else if (provinceName == "宁夏自治区") var zsd = "宁夏";
            else if (provinceName == "山东省") var zsd = "山东";
            else if (provinceName == "天津市") var zsd = "天津";
            getzsd(zsd);
            // map.setViewport(ply.getPath());    //调整视野
        }
    });
}
function mameturn(provinceName,zsd){
        if(provinceName=="湖北省")
            zsd="湖北";

}
function attributemk(e){
    var p = e.target;
    var geoc = new BMap.Geocoder();
    geoc.getLocation(p.getPosition(), function(rs){
        var addComp = rs.addressComponents;
    // alert("流浪器定位您的位置是" + addComp);
    });}
//绘制矩形框
//
function getLocation()

{

    if (navigator.geolocation)

    {

        navigator.geolocation.getCurrentPosition(showPosition,showError);

    }

    else{x.innerHTML="Geolocation is not supported by this browser.";} //浏览器不支持HTML5.

}
var geolocation = new BMap.Geolocation();  //实例化浏览器定位对象。

//下面是getCurrentPosition方法。调用该对象的 getCurrentPosition()，与HTML5不同的是，这个方法原型是 getCurrentPosition(callback:function[, options: PositionOptions])，也就是说无论成功与否都执行回调函数1，第二个参数是关于位置的选项。 因此能否定位成功需要在回调函数1中自己判断。

geolocation.getCurrentPosition(function(r){   //定位结果对象会传递给r变量

    if(this.getStatus() == BMAP_STATUS_SUCCESS){  //通过Geolocation类的getStatus()可以判断是否成功定位。

        var mk = new BMap.Marker(r.point);    //基于定位的这个点的点位创建marker

        map.addOverlay(mk);    //将marker作为覆盖物添加到map地图上

        map.panTo(r.point);   //将地图中心点移动到定位的这个点位置。注意是r.point而不是r对象。

        alert('您的位置：'+r.point.lng+','+r.point.lat);  //r对象的point属性也是一个对象，这个对象的lng属性表示经度，lat属性表示纬度。

    }

    else {

        alert('failed'+this.getStatus());

    }

},{enableHighAccuracy: true})

//关于状态码

//BMAP_STATUS_SUCCESS 检索成功。对应数值“0”。

//BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。

//BMAP_STATUS_UNKNOWN_LOCATION 位置结果未知。对应数值“2”。

//BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。

//BMAP_STATUS_INVALID_KEY 非法密钥。对应数值“4”。

//BMAP_STATUS_INVALID_REQUEST 非法请求。对应数值“5”。

//BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)

//BMAP_STATUS_SERVICE_UNAVAILABLE 服务不可用。对应数值“7”。(自 1.1 新增)

//BMAP_STATUS_TIMEOUT 超时。对应数值“8”。(自 1.1 新增)

