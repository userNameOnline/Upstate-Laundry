

window.addEventListener('scroll', function() {
    if(window.innerWidth > 450) {
        if(this.window.pageYOffset > 750) {
            this.document.getElementById('sticky-nav').style.opacity = '1';
        } else {
            const stickyNav = document.getElementById('sticky-nav'); 
            if(stickyNav.style.opacity === '1') {
                stickyNav.style.opacity = '0';
            }
        }
    }
})

function displayMobileNav() {
    document.getElementById('mobile-nav').style.display = 'flex';
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-3').style.display = 'none';
    document.getElementById('section-4').style.display = 'none';
    document.getElementById('section-5').style.display = 'none';
    document.getElementById('section-6').style.display = 'none';
    document.getElementById('header').style.display = 'none';
}

function exitMobileNav() {
    document.getElementById('mobile-nav').style.display = 'none';
    document.getElementById('section-2').style.display = 'flex';
    document.getElementById('section-3').style.display = 'block';
    document.getElementById('section-4').style.display = 'block';
    document.getElementById('section-5').style.display = 'block';
    document.getElementById('section-6').style.display = 'block';
    document.getElementById('header').style.display = 'block';
}

window.onload = (e) => {
    let height1 = document.getElementById('q-cont-1').offsetHeight / 2;
    document.getElementById('q1').style.top = height1 + 'px';
    let height2 = document.getElementById('q-cont-2').offsetHeight / 2;
    document.getElementById('q2').style.top = height2 + 'px';
    let height3 = document.getElementById('q-cont-3').offsetHeight / 2;
    document.getElementById('q3').style.top = height3 + 'px';
    let height4 = document.getElementById('q-cont-4').offsetHeight / 2;
    document.getElementById('q4').style.top = height4 + 'px';
    let height5 = document.getElementById('q-cont-5').offsetHeight / 2;
    document.getElementById('q5').style.top = height5 + 'px';
    let height6 = document.getElementById('q-cont-6').offsetHeight / 2;
    document.getElementById('q6').style.top = height6 + 'px';
    let height7 = document.getElementById('q-cont-7').offsetHeight / 2;
    document.getElementById('q7').style.top = height7+ 'px';
    let height8 = document.getElementById('q-cont-8').offsetHeight / 2;
    document.getElementById('q8').style.top = height8+ 'px';
    let height9 = document.getElementById('q-cont-9').offsetHeight / 2;
    document.getElementById('q9').style.top = height9+ 'px';
    let height10 = document.getElementById('q-cont-10').offsetHeight / 2;
    document.getElementById('q10').style.top = height10+ 'px';
    let height11 = document.getElementById('q-cont-11').offsetHeight / 2;
    document.getElementById('q11').style.top = height11+ 'px';
    let height12 = document.getElementById('q-cont-12').offsetHeight / 2;
    document.getElementById('q12').style.top = height12+ 'px';
}

let state = 'closed';
function dropdown(num) {
    if(state === 'closed') {
        switch(num) {
            case 1:
                document.getElementById('dropdown-1').style.opacity = '1';
                document.getElementById('q1').style.top = '0';
                state = 'open';
                break;
            case 2:
                document.getElementById('dropdown-2').style.opacity = '1';
                document.getElementById('q2').style.top = '0';
                state = 'open';
                break;
            case 3:
                document.getElementById('dropdown-3').style.opacity = '1';
                document.getElementById('q3').style.top = '0';
                state = 'open';
                break;
            case 4:
                document.getElementById('dropdown-4').style.opacity = '1';
                document.getElementById('q4').style.top = '0';
                state = 'open';
                break;
            case 5:
                document.getElementById('dropdown-5').style.opacity = '1';
                document.getElementById('q5').style.top = '0';
                state = 'open';
                break;
            case 6:
                document.getElementById('dropdown-6').style.opacity = '1';
                document.getElementById('q6').style.top = '0';
                state = 'open';
                break;
            case 7:
                document.getElementById('dropdown-7').style.opacity = '1';
                document.getElementById('q7').style.top = '0';
                state = 'open';
                break;
            case 8:
                document.getElementById('dropdown-8').style.opacity = '1';
                document.getElementById('q8').style.top = '0';
                state = 'open';
                break;
            case 9:
                document.getElementById('dropdown-9').style.opacity = '1';
                document.getElementById('q9').style.top = '0';
                state = 'open';
                break;
            case 10:
                document.getElementById('dropdown-10').style.opacity = '1';
                document.getElementById('q10').style.top = '0';
                state = 'open';
                break;
            case 11:
                document.getElementById('dropdown-11').style.opacity = '1';
                document.getElementById('q11').style.top = '0';
                state = 'open';
                break;
            case 12:
                document.getElementById('dropdown-12').style.opacity = '1';
                document.getElementById('q12').style.top = '0';
                state = 'open';
                break;
        }
    } else {
        switch(num) {
            case 1:
                document.getElementById('dropdown-1').style.opacity = '0';
                const height = document.getElementById('q-cont-1').offsetHeight / 2;
                document.getElementById('q1').style.top = height + 'px';
                state = 'closed';
                break;
            case 2:
                document.getElementById('dropdown-2').style.opacity = '0';
                const height2 = document.getElementById('q-cont-2').offsetHeight / 2;
                document.getElementById('q2').style.top = height2 + 'px';
                state = 'closed';
                break;
            case 3:
                document.getElementById('dropdown-3').style.opacity = '0';
                const height3 = document.getElementById('q-cont-3').offsetHeight / 2;
                document.getElementById('q3').style.top = height3 + 'px';
                state = 'closed';
                break;
            case 4:
                document.getElementById('dropdown-4').style.opacity = '0';
                const height4 = document.getElementById('q-cont-4').offsetHeight / 2;
                document.getElementById('q4').style.top = height4 + 'px';
                state = 'closed';
                break;
            case 5:
                document.getElementById('dropdown-5').style.opacity = '0';
                const height5 = document.getElementById('q-cont-5').offsetHeight / 2;
                document.getElementById('q5').style.top = height5 + 'px';
                state = 'closed';
                break;
            case 6:
                document.getElementById('dropdown-6').style.opacity = '0';
                const height6 = document.getElementById('q-cont-6').offsetHeight / 2;
                document.getElementById('q6').style.top = height6 + 'px';
                state = 'closed';
                break;
            case 7:
                document.getElementById('dropdown-7').style.opacity = '0';
                const height7 = document.getElementById('q-cont-7').offsetHeight / 2;
                document.getElementById('q7').style.top = height7 + 'px';
                state = 'closed';
                break;
            case 8:
                document.getElementById('dropdown-8').style.opacity = '0';
                const height8 = document.getElementById('q-cont-8').offsetHeight / 2;
                document.getElementById('q8').style.top = height8 + 'px';
                state = 'closed';
                break;
            case 9:
                document.getElementById('dropdown-9').style.opacity = '0';
                const height9 = document.getElementById('q-cont-9').offsetHeight / 2;
                document.getElementById('q9').style.top = height9 + 'px';
                state = 'closed';
                break;
            case 10:
                document.getElementById('dropdown-10').style.opacity = '0';
                const height10 = document.getElementById('q-cont-10').offsetHeight / 2;
                document.getElementById('q10').style.top = height10 + 'px';
                state = 'closed';
                break;
            case 11:
                document.getElementById('dropdown-11').style.opacity = '0';
                const height11 = document.getElementById('q-cont-11').offsetHeight / 2;
                document.getElementById('q11').style.top = height11 + 'px';
                state = 'closed';
                break;
            case 12:
                document.getElementById('dropdown-12').style.opacity = '0';
                const height12 = document.getElementById('q-cont-12').offsetHeight / 2;
                document.getElementById('q12').style.top = height12 + 'px';
                state = 'closed';
                break;
        }
    }
}