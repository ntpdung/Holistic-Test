var result = document.querySelector('.autocomplete-items-result');
var languages = ['aasvogel', 'basvogels', 'executrices', 'dbabdeh', 'fbabua', 'gbacay', 'abacinate', 'abacaxi', 'abacination', 'abamp', 'abamperes', 'abamps', 'abalienation']

function getWordArray(wordArr, keyword) {
    // return wordArr.filter(e => e.toLowerCase().includes(keyword.toLowerCase()));
    var resultArr = [];
    for (i = 0; i < wordArr.length; i++) {
        if (wordArr[i].substr(0, keyword.length).toUpperCase() == keyword.toUpperCase()) {
            resultArr.push(wordArr[i]);
        }
    };

    return resultArr;
}

function showResult() {
    result.style.display = 'block';
};

function hideResult() {
    result.style.display = 'none';
};

function handleAutoCompleteSearch(input, arr) {

    input.addEventListener("input", function (e) {
        var keyword = input.value,
            data = getWordArray(arr, keyword);

        hideResult();

        if (data.length > 0) {
            var resultItemElement;
            showResult();
    
            data.forEach(e => {
                resultItemElement = document.createElement("div");
                resultItemElement.setAttribute("class", "result-item");
    
                /*make the matching letters bold:*/
                resultItemElement.innerHTML = "<strong>" + e.substr(0, keyword.length) + "</strong>";
                resultItemElement.innerHTML += e.substr(keyword.length);
                /*insert a input field that will hold the current array item's value:*/
                resultItemElement.innerHTML += "<input type='hidden' value='" + e + "'>";
    
                /*execute a function when someone clicks on the item value (DIV element):*/
                resultItemElement.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    input.value = this.getElementsByTagName("input")[0].value;
                    hideResult();
                });
    
                result.appendChild(resultItemElement);
            });
        }
    });

    document.addEventListener("click", function (e) {
        hideResult();
    });
}

handleAutoCompleteSearch(document.getElementById("searchInput"), languages);