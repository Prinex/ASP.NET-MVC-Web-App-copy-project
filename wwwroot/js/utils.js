/**
 * this function can be made abstract this way
 * -have 2 dict, one containing the name of the element, a string as a key, and as value an array with 3 bools 
 * describing whether or not to apply style for filter, transition, and fill, and then a second dict with the same key as the other one,
 * except that the value is the the actual styling string
 */
export const applyStyling = function (elementID) {
    console.log("applyStyling called");
    // look first for the svg objects
    var svgAnchor = document.getElementById(`${elementID}`);
    if (svgAnchor == null) {
        console.log("SVG anchor not found");
        return;
    }
    var svgObject = svgAnchor.getElementsByTagName('object')[0];
    if (svgObject == null) {
        console.log("SVG object not found");
        return;
    }
    else
        console.log("SVG object found: ", svgObject);

    var svgDoc = svgObject.contentDocument;
    if (svgDoc == null) {
        console.log("SVG doc not found");
        return;
    }
    console.log("SVG doc found: ", svgDoc);

    // linkedin
    var bg = svgDoc.getElementById('linkedin-bg');
    var text1 = svgDoc.getElementById('linkedin-text1');
    var text2 = svgDoc.getElementById('linkedin-text2');

    //github
    var gitMain = svgDoc.getElementById('github-main');

    //hackerrank

    var hackMain = svgDoc.getElementById('hackerrank-main');

    //leetcode
    var lcOuterbar = svgDoc.getElementById('lc-outerbar');
    var lcInnerbar = svgDoc.getElementById('lc-innerbar');
    var lcInnerbar2 = svgDoc.getElementById('lc-innerbar2');

    //stackoverflow
    var soBase = svgDoc.getElementById('so-base');
    var soStairs = svgDoc.getElementById('so-stairs');

    // apply styling when hovering over the anchor tag
    // so here, within the event listener will be filter, transition and fill, and decide for each if a style needs to be applied or not
    // using the parameters
    // NOT sure if it is supposed to be svg anchor event, because when hovering, it is kind of off, do some tests here

    if (elementID == "linkedin") {
        svgAnchor.addEventListener('mouseover', () => {
            bg.style.filter = 'brightness(0) saturate(100%) invert(24%) sepia(88%) saturate(2072%) hue-rotate(181deg) brightness(96%) contrast(101%)';
            bg.style.transition = 'filter 0.3s';
            text1.style.fill = 'brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(0%) hue-rotate(238deg) brightness(101%) contrast(102%)';
            text2.style.fill = 'brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(0%) hue-rotate(238deg) brightness(101%) contrast(102%)';
        });
        svgAnchor.addEventListener('mouseleave', () => {
            bg.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(1%) saturate(2641%) hue-rotate(294deg) brightness(99%) contrast(97%)';
            bg.style.transition = 'filter 0.3s';
            text1.style.fill = 'brightness(0) saturate(100%) invert(78%) sepia(100%) saturate(0%) hue-rotate(258deg) brightness(101%) contrast(105%)';
            text2.style.fill = 'brightness(0) saturate(100%) invert(78%) sepia(100%) saturate(0%) hue-rotate(258deg) brightness(101%) contrast(105%)';
        });
    }
    if (elementID == "github") {
        svgAnchor.addEventListener('mouseover', () => {
            gitMain.style.filter = 'brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(1%) hue-rotate(312deg) brightness(102%) contrast(101%)';
            gitMain.style.transition = 'filter 0.3s';
        });
        svgAnchor.addEventListener('mouseleave', () => {
            gitMain.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            gitMain.style.transition = 'filter 0.3s';
        });
    }
    if (elementID == "hackerrank") {
        svgAnchor.addEventListener('mouseover', () => {
            hackMain.style.filter = 'brightness(0) saturate(100%) invert(37%) sepia(89%) saturate(1408%) hue-rotate(118deg) brightness(98%) contrast(101%)';
            hackMain.style.transition = 'filter 0.3s';
        });
        svgAnchor.addEventListener('mouseleave', () => {
            hackMain.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            hackMain.style.transition = 'filter 0.3s';
        });
    }
    if (elementID == "leetcode") {
        svgAnchor.addEventListener('mouseover', () => {
            lcOuterbar.style.filter = 'brightness(0) saturate(100%) invert(77%) sepia(1%) saturate(296%) hue-rotate(338deg) brightness(91%) contrast(96%)';
            lcInnerbar.style.filter = 'brightness(0) saturate(100%) invert(85%) sepia(15%) saturate(7157%) hue-rotate(344deg) brightness(94%) contrast(92%)';
            lcInnerbar2.style.filter = 'brightness(0) saturate(100%) invert(2%) sepia(99%) saturate(1%) hue-rotate(109deg) brightness(99%) contrast(99%)';
            lcOuterbar.style.transition = 'filter 0.3s';
            lcInnerbar.style.transition = 'filter 0.3s';
            lcInnerbar2.style.transition = 'filter 0.3s';
        });
        svgAnchor.addEventListener('mouseleave', () => {
            lcOuterbar.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            lcInnerbar.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            lcInnerbar2.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            lcOuterbar.style.transition = 'filter 0.3s';
            lcInnerbar.style.transition = 'filter 0.3s';
            lcInnerbar2.style.transition = 'filter 0.3s';
        });
    }
    if (elementID == "stackoverflow") {
        svgAnchor.addEventListener('mouseover', () => {
            soBase.style.filter = 'brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(4994%) hue-rotate(115deg) brightness(91%) contrast(93%)';
            soStairs.style.filter = 'brightness(0) saturate(100%) invert(67%) sepia(38%) saturate(5518%) hue-rotate(347deg) brightness(100%) contrast(92%)';
            soBase.style.transition = 'filter 0.3s';
            soStairs.style.transition = 'filter 0.3s';
        });
        svgAnchor.addEventListener('mouseleave', () => {
            soBase.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            soStairs.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(451%) hue-rotate(294deg) brightness(95%) contrast(93%)';
            soBase.style.transition = 'filter 0.3s';
            soStairs.style.transition = 'filter 0.3s';
        });
    }
};