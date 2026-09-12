class BackBodice {

class BackBodice {

    constructor(draftingEngine, measurements) {

        this.draftingEngine =
            draftingEngine;

        this.measurements =
            measurements;

    }

    drawDraftingRectangle() {

        const left = 300;
        const top = 150;

        const width = 220;
        const height = 420;

        this.draftingEngine.drawLine(
            left,
            top,
            left + width,
            top
        );

        this.draftingEngine.drawLine(
            left + width,
            top,
            left + width,
            top + height
        );

        this.draftingEngine.drawLine(
            left + width,
            top + height,
            left,
            top + height
        );

        this.draftingEngine.drawLine(
            left,
            top + height,
            left,
            top
        );

       }

    drawAcrossBackLine() {

        this.draftingEngine.drawLine(
            300,
            220,
            520,
            220,
            "#cc6600",
            1
        );

    }

    drawBustLine() {

        this.draftingEngine.drawLine(
            300,
            290,
            520,
            290,
            "#0066cc",
            1
        );

    }

    drawWaistLine() {

        this.draftingEngine.drawLine(
            300,
            470,
            520,
            470,
            "#009933",
            1
        );

    }
    drawNeckWidthGuide() {

        this.draftingEngine.drawLine(
            300,
            150,
            360,
            150,
            "#cc0000",
            2
        );

    }

        drawShoulderLine() {

        this.draftingEngine.drawLine(
            360,
            150,
            430,
            185,
            "#9900cc",
            2
        );

    }
        drawUnderarmGuide() {

        this.draftingEngine.drawLine(
            430,
            220,
            430,
            290,
            "#ff6600",
            2
        );

    }
        drawArmholeGuide() {

        this.draftingEngine.drawLine(
            430,
            220,
            500,
            290,
            "#ff00ff",
            2
        );

    }
      drawBackNeckGuide() {

        this.draftingEngine.drawLine(
            300,
            150,
            330,
            175,
            "#cc0000",
            2
        );

    }  
}
