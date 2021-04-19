function equalHeights(className, breakpoint, secondBreakpoint = false) {
    if (!secondBreakpoint) {
        secondBreakpoint = 2500;
    }
    if (window.innerWidth >= breakpoint && window.innerWidth < secondBreakpoint) {
        var findClass = document.body.querySelectorAll(className);
        var tallest = 0;
        var theTallest = findClass[0];
        findClass.forEach(function(e) {
            e.style.height = "auto";
            var ele = e;
            var eleHeight = ele.clientHeight;
            if (eleHeight > tallest) {
                tallest = eleHeight;
                theTallest = e;
            }
        });
        findClass.forEach(function(e) {
            e.style.height = tallest + "px";
        });
    }
}
function equalHeigthOnWindow(className, breakpoint, secondBreakpoint = false) {
    equalHeights(className, breakpoint, secondBreakpoint);
    window.addEventListener("resize", function() {
        if (window.innerWidth >= breakpoint) {
            equalHeights(className, breakpoint, secondBreakpoint);
        } else {
            suppressHeights(className);
        }
    });
}
function suppressHeights(className) {
    document.body.querySelectorAll(className).forEach(function(e) {
        e.style.height = "auto";
    });
}
function card() {
    equalHeigthOnWindow(".card__title", 992);
    equalHeigthOnWindow(".card__extract", 992);
    equalHeigthOnWindow(".card__title--tab0", 576, 992);
    equalHeigthOnWindow(".card__title--tab1", 576, 992);
    equalHeigthOnWindow(".card__extract--tab0", 576, 992);
    equalHeigthOnWindow(".card__extract--tab1", 576, 992);
}
card();
