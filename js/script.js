var percent = 0;
$('button').click(function (p) {
    percent += Number(p.target.innerText.substr(1, p.target.innerText.length - 2));
    $('.progress-bar').width(percent + "%")
});