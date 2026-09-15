class BackBodice {

    static SCALE = 10;

    constructor(draftingEngine, measurements) {

        this.draftingEngine =
            draftingEngine;

        this.measurements =
            measurements;

    }

    getNapeY() {

        return 150 + (2.5 * BackBodice.SCALE);
    }
    getAdditionalBustEase() {

    return this.measurements.bustEase - 5;

}

getSideSeamExpansion() {

    return this.getAdditionalBustEase() / 4;

}
    getArmholeDrop() {

    const additionalEase =
        this.getAdditionalBustEase();

    if (additionalEase > 3) {

        return this.getSideSeamExpansion() / 2;

    }

    return 0;

}

getBackUnderarmExtension() {

    const additionalEase =
        this.getAdditionalBustEase();

    return 5 +
        (additionalEase / 4);

}
    getBackUnderarmPointX() {

    const armholeGuideX =
        300 +
        (
            (
                this.measurements.backWidth / 2
            )
            + 0.5
        )
        *
        BackBodice.SCALE;

    return (
        armholeGuideX
        +
        (
            this.getBackUnderarmExtension()
            *
            BackBodice.SCALE
        )
    );

}
getBackShoulderPoint() {

    const neckWidth =
    (
        (
            this.measurements.bust / 8
        )
        + 3
    ) / 2;

    return {
        x:
            300 +
            (
                (neckWidth +
                 this.measurements.shoulderLength + 1)
                * BackBodice.SCALE
            ),

        y:
            this.getShoulderY()
    };

}
 getBackUnderarmPoint() {

    return {

        x:
            this.getBackUnderarmPointX(),

        y:
            this.getBustY() +
            (
                this.getArmholeDrop()
                *
                BackBodice.SCALE
            )

    };

}

getBustY() {

    return 150 +
        (
            (
                this.measurements.backWaist / 2
            )
            + 1
        )
        *
        BackBodice.SCALE;

}

getShoulderY() {

    return this.getNapeY() +
        (3 * BackBodice.SCALE);

}

getAcrossBackY() {

    return (
        this.getShoulderY()
        +
        this.getBustY()
    ) / 2;

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

    const shoulderY =
        this.getNapeY() +
        (3 * BackBodice.SCALE);

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

    const acrossBackY =
        (shoulderY + bustY) / 2;

    const acrossBackWidth =
        (
            (this.measurements.backWidth / 2)
            + 0.5
        )
        *
        BackBodice.SCALE;

    this.draftingEngine.drawLine(
        300,
        acrossBackY,

        300 + acrossBackWidth,
        acrossBackY,

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
    this.getNapeY(),

    300 + neckWidth,
    this.getNapeY(),

    "#cc0000",
    2
);

}


drawShoulderLine() {

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

    const shoulderLength =
        this.measurements.shoulderLength *
        BackBodice.SCALE;

    this.draftingEngine.drawLine(

        300 + neckWidth,

        this.getNapeY(),

        300 + neckWidth +
        shoulderLength,

        this.getNapeY() +
        (3 * BackBodice.SCALE),

        "#9900cc",
        2

    );

}
  drawUnderarmGuide() {

    const shoulderY =
        this.getNapeY() +
        (3 * BackBodice.SCALE);

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

    const acrossBackY =
        (shoulderY + bustY) / 2;

    const armholeGuideX =
        300 +
        (
            (
                this.measurements.backWidth / 2
            )
            + 0.5
        )
        *
        BackBodice.SCALE;

    const underarmPointX =
        this.getBackUnderarmPointX();

    this.draftingEngine.drawLine(
        armholeGuideX,
        acrossBackY,

        armholeGuideX,
        bustY,

        "#ff6600",
        2
    );

    this.draftingEngine.drawLine(
        armholeGuideX,
        bustY,

        underarmPointX,
        bustY,

        "#ff6600",
        2
    );

}

drawArmholeGuide() {

    const shoulderY =
        this.getNapeY() +
        (3 * BackBodice.SCALE);

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

    const acrossBackY =
        (shoulderY + bustY) / 2;

    const armholeGuideX =
        300 +
        (
            (
                this.measurements.backWidth / 2
            )
            + 0.5
        )
        *
        BackBodice.SCALE;

    this.draftingEngine.drawLine(
        armholeGuideX,
        shoulderY,

        armholeGuideX,
        bustY,

        "#ff00ff",
        2
    );

}
drawBackNeckGuide() {

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
        this.getNapeY(),

        300 + neckWidth,
        this.getNapeY() -
        (2 * BackBodice.SCALE),

        "#cc0000",
        2
    );

}
}
