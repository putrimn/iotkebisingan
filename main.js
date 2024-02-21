window.addEventListener("load", getReadings);
var pmTemp = new LinearGauge({
    renderTo: "suhu-ruangan",
    width: 120,
    height: 400,
    units: "suhu \xb0C",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    maxValue: 40,
    colorValueBoxRect: "#049faa",
    colorValueBoxRectEnd: "#049faa",
    colorValueBoxBackground: "#f1fbfc",
    valueDec: 2,
    valueInt: 2,
    majorTicks: ["0", "5", "10", "15", "20", "25", "30", "35", "40"],
    minorTicks: 4,
    strokeTicks: !0,
    highlights: [{
        from: 30,
        to: 40,
        color: "rgba(200, 50, 50, .75)"
    }],
    colorPlate: "#fff",
    colorBarProgress: "#CC2936",
    colorBarProgressEnd: "#049faa",
    borderShadowWidth: 0,
    borders: !1,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: !0,
    needleCircleInner: !1,
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10
}).draw(),
    pmBising = new RadialGauge({
        renderTo: "kebisingan",
        width: 300,
        height: 300,
        units: "desibel (dB)",
        minValue: 0,
        maxValue: 100,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"

        ],
        minorTicks: 4,
        strokeTicks: !0,
        highlights: [{
            from: 55,
            to: 100,
            color: "#ff0f0f"
        }],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: !1,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: !0,
        needleCircleInner: !1,
        animationDuration: 1500,
        animationRule: "linear"
    }).draw();

function getReadings() {
    var e = new XMLHttpRequest;

    e.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status) {
            var e = JSON.parse(this.responseText);
            console.log(e);
            var a = e.suhu,
                n = e.kebisingan;
            p = e.pengunjung;
            pmTemp.value = a, pmBising.value = n;
            document.getElementById('pengunjung').innerHTML = p;
        }
    }, e.open("GET", "/data.json?_=" + new Date().getTime(), !0), e.send()
}

window.setInterval(getReadings, 5000);
