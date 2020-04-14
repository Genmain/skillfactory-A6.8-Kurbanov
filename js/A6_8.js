$('button').click( function (p){
    const pb = $('.progress-bar');
    let percent = pb.width() / pb.parent().width() *100;
    const delta = Number(p.target.innerText.substr(1,p.target.innerText.length-2))
    percent = percent - (percent %1);
    pb.width(percent+delta+"%");
    // console.log("percent = ", percent);
    // console.log("delta = ", delta);
    // console.log('perc+delta+"%"', percent+delta+"%");
});