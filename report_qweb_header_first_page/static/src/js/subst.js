function subst() {
    var vars = {};
    var x = document.location.search.substring(1).split('&');
    for (var i in x) {
        var z = x[i].split('=', 2);
        vars[z[0]] = unescape(z[1]);
    }
    var x=['frompage', 'topage', 'page', 'webpage', 'section', 'subsection', 'subsubsection'];
    for (var i in x) {
        var y = document.getElementsByClassName(x[i]);
        for (var j=0; j<y.length; ++j)
            y[j].textContent = vars[x[i]];

    }
    var test_first_page = document.getElementById('test_first_page');
    var test_not_first_page = document.getElementById('test_not_first_page');
    if (vars['page'] == 1) {
        test_not_first_page.style.display = 'none';
    }
    else {
        test_first_page.style.display = 'none';
    }
}