class PatternEngine {

    static calculateEase(
        garmentType,
        fabricType,
        sleeveOption
    ){

        let bustEase = 2;
        let waistEase = 1;
        let hipEase = 2;

        switch(garmentType){

            case "Tailored Blouse / Fitted Daydress":
                bustEase = 5;
                waistEase = 3;
                hipEase = 5;
                break;

            case "Semi-Fitted Blouse":
                bustEase = 8;
                waistEase = 5;
                hipEase = 6;
                break;

            case "Casual Top":
                bustEase = 12;
                waistEase = 10;
                hipEase = 10;
                break;

            case "Loose Tunic":
                bustEase = 20;
                waistEase = 16;
                hipEase = 16;
                break;

            case "Oversized Garment":
                bustEase = 30;
                waistEase = 25;
                hipEase = 25;
                break;

            case "Stretch Knit / Swimwear":
                bustEase = -5;
                waistEase = -5;
                hipEase = -5;
                break;
        }

        let modifier = 1;

        switch(fabricType){

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
        }

bustEase *= modifier;
waistEase *= modifier;
hipEase *= modifier;

const sideSeamExpansion = bustEase / 4;

const armholeDrop = sideSeamExpansion / 2;

let sleeveAdjustment = 0;

if (sleeveOption === "Sleeveless") {
    sleeveAdjustment = -15;
}

        return {

            bustEase,

            waistEase,

            hipEase,

            sideSeamExpansion,

            armholeDrop,

            sleeveAdjustment

        };
    }
}
