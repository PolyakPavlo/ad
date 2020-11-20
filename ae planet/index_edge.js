/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_02',
                type: 'image',
                rect: ['315px', '-6px','311px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02.jpg",'0px','0px']
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['-346', '-16','647','215','auto', 'auto'],
                c: [
                {
                    id: '_05',
                    type: 'image',
                    rect: ['336px', '10px','311px','195px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"05.jpg",'0px','0px']
                },
                {
                    id: '_04',
                    type: 'image',
                    rect: ['16px', '10px','311px','195px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"04.jpg",'0px','0px']
                }]
            },
            {
                id: '_03',
                type: 'image',
                rect: ['319px', '-6px','311px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"03.jpg",'0px','0px']
            },
            {
                id: '_01',
                type: 'image',
                rect: ['315px', '-6px','311px','195px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"01.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${__01}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '195px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '301px'],
                ["style", "width", '311px']
            ],
            "${__04}": [
                ["style", "top", '10px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '195px'],
                ["style", "left", '653px'],
                ["style", "width", '311px']
            ],
            "${__03}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '195px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '303px'],
                ["style", "width", '311px']
            ],
            "${__05}": [
                ["style", "top", '10px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '195px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '336px'],
                ["style", "width", '311px']
            ],
            "${__02}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '195px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '303px'],
                ["style", "width", '311px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24435,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${__01}", "left", '-11px', { fromValue: '301px'}], position: 17250, duration: 560 },
                { id: "eid46", tween: [ "style", "${__01}", "left", '-337px', { fromValue: '-11px'}], position: 21500, duration: 435 },
                { id: "eid15", tween: [ "transform", "${__04}", "scaleY", '1.1', { fromValue: '1'}], position: 4310, duration: 3310 },
                { id: "eid10", tween: [ "style", "${__04}", "left", '343px', { fromValue: '653px'}], position: 4000, duration: 440 },
                { id: "eid16", tween: [ "style", "${__04}", "left", '16px', { fromValue: '343px'}], position: 8250, duration: 560 },
                { id: "eid20", tween: [ "style", "${__02}", "left", '-4px', { fromValue: '303px'}], position: 8250, duration: 560 },
                { id: "eid25", tween: [ "style", "${__02}", "left", '-330px', { fromValue: '-4px'}], position: 12750, duration: 560 },
                { id: "eid52", tween: [ "style", "${__05}", "opacity", '0', { fromValue: '1'}], position: 21935, duration: 1500 },
                { id: "eid58", tween: [ "style", "${__05}", "opacity", '1', { fromValue: '0'}], position: 23935, duration: 500 },
                { id: "eid14", tween: [ "transform", "${__04}", "scaleX", '1.1', { fromValue: '1'}], position: 4310, duration: 3310 },
                { id: "eid22", tween: [ "transform", "${__02}", "scaleX", '1.1', { fromValue: '1'}], position: 8810, duration: 3310 },
                { id: "eid9", tween: [ "transform", "${__05}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 3310 },
                { id: "eid44", tween: [ "transform", "${__05}", "scaleY", '1', { fromValue: '1.1'}], position: 17810, duration: 3124 },
                { id: "eid17", tween: [ "style", "${__03}", "left", '-11px', { fromValue: '303px'}], position: 12750, duration: 560 },
                { id: "eid21", tween: [ "style", "${__03}", "left", '-330px', { fromValue: '-11px'}], position: 17250, duration: 560 },
                { id: "eid12", tween: [ "style", "${__05}", "left", '16px', { fromValue: '336px'}], position: 4000, duration: 440 },
                { id: "eid30", tween: [ "style", "${__05}", "left", '662px', { fromValue: '16px'}], position: 17810, duration: 3310 },
                { id: "eid47", tween: [ "style", "${__05}", "left", '336px', { fromValue: '662px'}], position: 21500, duration: 435 },
                { id: "eid19", tween: [ "transform", "${__03}", "scaleY", '1.1', { fromValue: '1'}], position: 13310, duration: 3310 },
                { id: "eid18", tween: [ "transform", "${__03}", "scaleX", '1.1', { fromValue: '1'}], position: 13310, duration: 3310 },
                { id: "eid8", tween: [ "transform", "${__05}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 3310 },
                { id: "eid43", tween: [ "transform", "${__05}", "scaleX", '1', { fromValue: '1.1'}], position: 17810, duration: 3124 },
                { id: "eid23", tween: [ "transform", "${__02}", "scaleY", '1.1', { fromValue: '1'}], position: 8810, duration: 3310 },
                { id: "eid27", tween: [ "transform", "${__01}", "scaleY", '1.1', { fromValue: '1'}], position: 17810, duration: 3310 },
                { id: "eid26", tween: [ "transform", "${__01}", "scaleX", '1.1', { fromValue: '1'}], position: 17810, duration: 3310 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6862764");
