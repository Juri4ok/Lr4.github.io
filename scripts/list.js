function generateListStyle() {
    var listStyleType = document.getElementById("listStyleType").value;
    var listStylePosition = document.getElementById("listStylePosition").value;
    var resultContainer = document.getElementById("resultContainer");
    var cssResult = document.getElementById("csslist");
    var sampleList = document.getElementById("sampleList");

    var generatedCSS = "list-style-type: " + listStyleType + ";\n";
    generatedCSS += "list-style-position: " + listStylePosition + ";";

    cssResult.textContent = generatedCSS;
    resultContainer.style.display = "block";

    // Оновлення стилів списку зразка
    sampleList.style.listStyleType = listStyleType;
    sampleList.style.listStylePosition = listStylePosition;
}
