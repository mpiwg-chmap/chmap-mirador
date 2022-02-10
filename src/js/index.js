import Mirador from 'mirador';
import defaultCatalog from './public-catalog';

const defaultWindowCfg = {
    manifestId: '',
    canvasId: '',
    view: 'single',
    thumbnailNavigationPosition: "far-bottom",
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener("DOMContentLoaded", function(event) {

    const urlParams = new URLSearchParams(window.location.search);

    const manifestId = urlParams.get("mf") || "";

    const canvasId = urlParams.get("ci") || "";

    const windowsConfig = [{ ...defaultWindowCfg, manifestId, canvasId }];

    if (manifestId === "") {

        const first = getRndInteger(0, defaultCatalog.length - 1);

        const second = getRndInteger(0, defaultCatalog.length - 1);

        windowsConfig[0].manifestId = defaultCatalog[first].manifestId;

        windowsConfig.push({ ...defaultWindowCfg, manifestId: defaultCatalog[second].manifestId });

    }

    Mirador.viewer({
        id: "mirador",
        windows: windowsConfig,
        catalog: defaultCatalog
    });

});
