class Point {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

}

class Line {

    constructor(start, end) {

        this.start = start;
        this.end = end;

    }

}

class DraftingEngine {

    constructor(svgId) {

        this.svg =
            document.getElementById(svgId);

    }

    clear() {

        this.svg.innerHTML = "";

    }

    drawLine(
        x1,
        y1,
        x2,
        y2,
        color = "#000",
        width = 1
    ) {

        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        line.setAttribute(
            "stroke",
            color
        );

        line.setAttribute(
            "stroke-width",
            width
        );

        this.svg.appendChild(line);

    }
drawQuadraticCurve(
    x1,
    y1,
    cx,
    cy,
    x2,
    y2,
    color = "#000",
    width = 2
) {

    const path =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

    path.setAttribute(
        "d",
        `M ${x1} ${y1}
         Q ${cx} ${cy}
         ${x2} ${y2}`
    );

    path.setAttribute(
        "fill",
        "none"
    );

    path.setAttribute(
        "stroke",
        color
    );

    path.setAttribute(
        "stroke-width",
        width
    );

    this.svg.appendChild(path);

}
}
