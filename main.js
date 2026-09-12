document.addEventListener("DOMContentLoaded", () => {

    const garmentType =
        document.getElementById("garmentType");

    const fabricType =
        document.getElementById("fabricType");

    const bustEase =
        document.getElementById("bustEase");

    const waistEase =
        document.getElementById("waistEase");

    const hipEase =
        document.getElementById("hipEase");

    const analysis =
        document.getElementById("analysis");

    garmentType.addEventListener(
        "change",
        updateEaseRecommendations
    );

    fabricType.addEventListener(
        "change",
        updateEaseRecommendations
    );

    updateEaseRecommendations();

    function updateEaseRecommendations() {

        let bust = 0;
        let waist = 0;
        let hip = 0;

        switch(garmentType.value){

            case "Foundation Block (Sloper)":
                bust = 2;
                waist = 1;
                hip = 2;
                break;

            case "Stretch Knit / Swimwear":
                bust = -5;
                waist = -5;
                hip = -5;
                break;

            case "Tailored Blouse / Fitted Daydress":
                bust = 5;
                waist = 3;
                hip = 5;
                break;

            case "Semi-Fitted Blouse":
                bust = 8;
                waist = 5;
                hip = 6;
                break;

            case "Casual Top":
                bust = 12;
                waist = 10;
                hip = 10;
                break;

            case "Loose Tunic":
                bust = 20;
                waist = 16;
                hip = 16;
                break;

            case "Oversized Garment":
                bust = 30;
                waist = 25;
                hip = 25;
                break;
        }

        let modifier = 1;

        switch(fabricType.value){

            case "Linen":
                modifier = 1.10;
                break;

            case "Denim":
                modifier = 1.15;
                break;

            case "Stretch Woven":
                modifier = 0.85;
                break;

            case "Jersey Knit":
                modifier = 0.50;
                break;

            case "Rib Knit":
                modifier = 0.40;
                break;

            case "Athletic Knit":
                modifier = 0.30;
                break;

            case "Swimwear Fabric":
                modifier = -0.10;
                break;
        }

        bustEase.value =
            Math.round(bust * modifier);

        waistEase.value =
            Math.round(waist * modifier);

        hipEase.value =
            Math.round(hip * modifier);

        analysis.innerHTML = `
            <strong>Garment:</strong>
            ${garmentType.value}
            <br><br>

            <strong>Fabric:</strong>
            ${fabricType.value}
            <br><br>

            <strong>Bust Ease:</strong>
            ${bustEase.value}
            <br>

            <strong>Waist Ease:</strong>
            ${waistEase.value}
            <br>

            <strong>Hip Ease:</strong>
            ${hipEase.value}
                `;
    }

    const draftingEngine =
        new DraftingEngine(
            "patternCanvas"
        );

    const gridEngine =
        new GridEngine(
            draftingEngine
        );

    draftingEngine.clear();

    gridEngine.drawMetricGrid();

    gridEngine.drawCalibrationBoxes();
    const backBodice =
    new BackBodice(
        draftingEngine
    );

backBodice.drawDraftingRectangle();
 
backBodice.drawAcrossBackLine();
 
backBodice.drawBustLine();
 
backBodice.drawWaistLine();


});
