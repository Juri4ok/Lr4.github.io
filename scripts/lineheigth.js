function generateLineHeight() {
    var inputElement = document.getElementById("lineHeightInput");
    var resultContainer = document.getElementById("resultContainer");
    var cssResult = document.getElementById("cssResult");
    var sampleBlock = document.getElementById("sampleBlock");

    var lineHeightValue = inputElement.value;
    var generatedCSS = "line-height: " + lineHeightValue + ";";

    cssResult.textContent = generatedCSS;
    resultContainer.style.display = "block";

    // Оновлення блоку зразка зі значенням line-height
    sampleBlock.style.lineHeight = lineHeightValue;
}
