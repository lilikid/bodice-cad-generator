class BackBodice {

    constructor(draftingEngine) {

        this.draftingEngine =
            draftingEngine;

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

}
