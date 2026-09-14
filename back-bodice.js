class BackBodice {
        
        static SCALE = 10;
    
    constructor(draftingEngine, measurements) {

                    getNapeY() {

    return 150 + (2.5 * BackBodice.SCALE);

}
        this.draftingEngine =
            draftingEngine;

        this.measurements =
            measurements;

    }

    drawDraftingRectangle() {

        const left = 300;
        const top = 150;

const width =
(
    (
        this.measurements.hip / 2
    )
    +
    this.measurements.hipEase
    +
    8
)
*
BackBodice.SCALE;

const height =
(
    this.measurements.backWaist
    +
    this.measurements.waistToHip
    +
    2.5
)
*
BackBodice.SCALE;
        
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

    const backWidth =
        this.measurements.backWidth * BackBodice.SCALE;

    this.draftingEngine.drawLine(
        300,
        220,
        300 + backWidth,
        220,
        "#cc6600",
        1
    );

}

drawBustLine() {

const bustY =
    150 +
    (
        (
            this.measurements.backWaist / 2
        )
        + 1
    )
    *
    BackBodice.SCALE;

    this.draftingEngine.drawLine(
        300,
        bustY,
        520,
        bustY,
        "#0066cc",
        1
    );

}

drawWaistLine() {

const waistY =
    150 +
    (
        this.measurements.backWaist *
        BackBodice.SCALE
    );

    this.draftingEngine.drawLine(
        300,
        waistY,
        520,
        waistY,
        "#009933",
        1
    );

}

drawNeckWidthGuide() {

const neckWidth =
(
    (
        this.measurements.bust / 8
    )
    +
    3
)
/
2
*
BackBodice.SCALE;

    this.draftingEngine.drawLine(
        300,
        150,
        300 + neckWidth,
        150,
        "#cc0000",
        2
    );

}


drawShoulderLine() {

    const shoulderLength =
        this.measurements.shoulderLength * BackBodice.SCALE;

    this.draftingEngine.drawLine(
        300 +
        ((this.measurements.neck / 5) * 10),

        150,

        300 +
        ((this.measurements.neck / 5) * 10) +
        shoulderLength,

        185,

        "#9900cc",
        2
    );

}
  drawUnderarmGuide() {

    const underarmX =
        300 +
        (this.measurements.backWidth *
        BackBodice.SCALE);

    this.draftingEngine.drawLine(
        underarmX,
        220,
        underarmX,
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
