
    // 네비게이션 바에 있는 버튼을 클릭하면 해당 항목으로 스크롤 이동
    function goToAboutMe(destination){
        let offset = $("." + destination).offset();
        $('html, body').animate({scrollTop : offset.top}, 600);
    }
    function goToCareer(destination){
        let offset = $("." + destination).offset();
        $('html, body').animate({scrollTop : offset.top}, 600);
    }
    function goToSkills(destination) {
        let offset = $("." + destination).offset();
        $('html, body').animate({scrollTop: offset.top}, 600);
    }
    function goToContact(destination){
        let offset = $("." + destination).offset();
        $('html, body').animate({scrollTop : offset.top}, 600);
    }
    function goToTop(destination){
        let offset = $("." + destination).offset();
        $('html, body').animate({scrollTop : offset.top}, 0);
    }


    // html 문서가 전부 로드 된 다음에 함수 실행(그 전에 함수가 실행돼서 null값을 가져오는 것을 방지)
    $(document).ready(function () {

        // 해당 영역으로 스크롤이 닿으면 fade in 이벤트 발생(새로고침 한 번에 한 번만)
        AOS.init({
            once : true
        });

        // 첫 화면을 벗어나면 화살표 버튼(가장 위로 올라가는) 추가
        $(window).scroll(function (){
            let location = $(window).scrollTop();
            let aboutMeArea_offset = $('.aboutMeArea').offset().top;

            if(location >= aboutMeArea_offset)
            {
                $('.arrow').addClass('arrow_fix');
            }
            else if(location == 0)
            {
                $('.arrow').removeClass('arrow_fix');
            }
        });

        // 첫 화면을 벗어나면 네비게이션 바를 추가
        $(window).scroll(function () {
            let location = $(window).scrollTop();
            let aboutMeArea_offset = $('.aboutMeArea').offset().top;

            if(location >= aboutMeArea_offset)
            {
                $('.nav').addClass('nav_fix');
            }
            else if(location < aboutMeArea_offset)
            {
                $('.nav').removeClass('nav_fix');
            }
        })

        // 해당하는 항목에 마우스를 올리거나 뺐을 때 발생할 이벤트
        function mouseOverOut() {
            let aboutMe = document.querySelector('.aboutMe');
            let career = document.querySelector('.career');
            let skills = document.querySelector('.skills');
            let contact = document.querySelector('.contact');

            aboutMe.addEventListener('mouseover', function (event) {
                document.getElementById('aboutMe').style.color = "greenYellow";
            })
            aboutMe.addEventListener('mouseout', function (event) {
                document.getElementById('aboutMe').style.color = "white";
            })

            career.addEventListener('mouseover', function (event) {
                document.getElementById('career').style.color = "greenYellow";
            })
            career.addEventListener('mouseout', function (event) {
                document.getElementById('career').style.color = "white";
            })

            skills.addEventListener('mouseover', function (event) {
                document.getElementById('skills').style.color = "greenYellow";
            })
            skills.addEventListener('mouseout', function (event) {
                document.getElementById('skills').style.color = "white";
            })

            contact.addEventListener('mouseover', function (event) {
                document.getElementById('contact').style.color = "greenYellow";
            })
            contact.addEventListener('mouseout', function (event) {
                document.getElementById('contact').style.color = "white";
            })

            let card = document.querySelector('.contactCard');
            card.addEventListener('click', function (event) {
                let elem = event.currentTarget;
                if(elem.style.transform == "rotateY(180deg)")
                {
                    elem.style.transform = "rotateY(0deg)";
                }
                else
                {
                    elem.style.transform = "rotateY(180deg)";
                }
            });
        }
        mouseOverOut();

    });





















