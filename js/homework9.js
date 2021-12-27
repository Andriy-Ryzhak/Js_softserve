

// Task 1

function addTag() {
    if ($("a").attr("href") === "https://") {
        $('a').attr('target', '_blank');
    }
}
addTag();

// Task 2

function changeStyle() {
    let $allElements = $("h2.head");
    $allElements.css('background-color', 'green');
    $allElements.find(".inner").css("font-size", "35px");
}

changeStyle();

// Task 3
function changeLocation() {
    const $allDivs = $("h3").next();

    $allDivs.each(function () {
        const h3Element = $(this).prev();
        $(this).insertBefore(h3Element);
    });
}

changeLocation();

// Task 4

$('.inputs input:checkbox').click(() => { 
    let lengthEl = $('.inputs input:checkbox:checked').length;
    let checkboxCheked = $('.inputs input:checkbox:checked');
    if (lengthEl >= 3 ) {
        if (checkboxCheked !== true) {
            $('.inputs input:checkbox').not('.inputs input:checked').remove();
        }
            
    }  
});
