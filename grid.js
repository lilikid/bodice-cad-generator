class GridEngine {

    constructor(draftingEngine) {

        this.draftingEngine =
            draftingEngine;

    }

    drawMetricGrid() {

        const width = 1200;
        const height = 900;

        for(let x = 0; x <= width; x += 10){

            const major =
                x % 50 === 0;

            this.draftingEngine.drawLine(
                x,
                0,
                x,
                height,
                major ? "#bbbbbb" : "#e5e5e5",
                major ? 1.2 : 0.5
            );

        }

        for(let y = 0; y <= height; y += 10){

            const major =
                y % 50 === 0;

            this.draftingEngine.drawLine(
                0,
                y,
                width,
                y,
                major ? "#bbbbbb" : "#e5e5e5",
                major ? 1.2 : 0.5
            );

        }

    }

    drawCalibrationBoxes() {

        const svg =
            this.draftingEngine.svg;

        const ns =
            "http://www.w3.org/2000/svg";

        const inchBox =
            document.createElementNS(
                ns,
                "rect"
            );

        inchBox.setAttribute("x", 20);
        inchBox.setAttribute("y", 20);
        inchBox.setAttribute("width", 96);
        inchBox.setAttribute("height", 96);
        inchBox.setAttribute("fill", "none");
        inchBox.setAttribute("stroke", "black");

        svg.appendChild(inchBox);

        const cmBox =
            document.createElementNS(
                ns,
                "rect"
            );

        cmBox.setAttribute("x", 150);
        cmBox.setAttribute("y", 20);
        cmBox.setAttribute("width", 189);
        cmBox.setAttribute("height", 189);
        cmBox.setAttribute("fill", "none");
        cmBox.setAttribute("stroke", "black");

        svg.appendChild(cmBox);

    }

}
