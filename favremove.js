var init = function() {
    
    var period = 1000;
    var mainheader = document.querySelector('.mainheader');
    var runBtn = '';
    var removeTimer = false;

    var removeNext = function() {
        var next = document.querySelector('.favorite_link.favorite');
        if (next) {
            console.log('remove, goto next');
            next.click();
            removeTimer = setTimeout(removeNext, period);
        }
        else if (document.querySelector('.favorite_link')) {
         location.reload();
        } else {
            runBtn.innerText = 'no any favitems found';
            localStorage.removeItem('kelly_remove_jr_fav_run');
        }
    }

    if (mainheader && mainheader.innerHTML.toLowerCase().indexOf('избранное') != -1) {

        var isRun = parseInt(localStorage.getItem('kelly_remove_jr_fav_run')) ? true : false;

        runBtn = document.createElement('a');
        runBtn.href="#";
        runBtn.setAttribute('style', 'margin-left : 50px;');
        runBtn.onclick = function() {
            isRun = isRun ? false : true;

            localStorage.setItem('kelly_remove_jr_fav_run', isRun ? 1 : 0);
            runBtn.innerText = isRun ? 'Stop' : 'Start remove';
                
            if (isRun) removeNext();
            else if (removeTimer) clearTimeout(removeTimer);
            return false;
        }
        runBtn.innerText = isRun ? 'Stop' : 'Start remove';

        mainheader.appendChild(runBtn);

        if (isRun) removeNext();
    }
}

init();