(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        });

        // Abstract Team Modal Logic
        var teamModalData = {
            lilly: {
                title: "Lilly Salazar (Nido Room Assistant Teacher)",
                img: "img/Ms.lilly.jpg",
                content: `<p>Ms. Lilly started at MCA as an apprentice while she was a student at Willowbrook High School. She is currently enrolled at College of DuPage. During her off time she enjoys playing softball and coaching. She developed a passion for caring for infants and toddlers through babysitting her siblings. Ms. Lilly enjoys working with and reading stories to our young students.</p>`
            },
            amy: {
                title: "Amy Dittmer (Nido Room Teacher)",
                img: "img/Ms.amy.jpg",
                content: `<p>Ms. Amy joined MCA in 2015. She has a Bachelors of Science in Child Development with an emphasis in parent/infant specialty and leadership studies. She also has a Montessori paraprofessional certificate from Seton Montessori. She enjoys attending her neighborhood “music in the park” events, drinking coffee and eating at local restaurants. Ms. Amy enjoys seeing the infants explore a nurturing and caring environment and watching them learn, grow, and develop into their own person.</p>`
            },
            eva: {
                title: "Eva Rodriguez (Green Room Student Aide)",
                img: "img/Ms.eva.jpg",
                content: `<p>Ms. Eva is a Senior at Willowbrook High School, She is currently taking the preschool class which is what led her to MCA.. She enjoys spending time with her family and golfing on the weekends with her dad. In her free time, she likes to look for new recipes to bake. One of her all time favorites to bake is banana bread. She is excited to keep sharing recipes with our friends this fall. She enjoys working in the Green Room and being able to watch them grow during their time with us!</p>`
            },
            maddie: {
                title: "Maddie Kos (Student Aide)",
                img: "img/Ms.maddie.jpg",
                content: `<p>Ms. Maddie is currently a junior at Willowbrook High School. She has completed several Child Development courses in addition to working with the Willowbrook Little Warriors Preschool as a teacher’s assistant. Ms. Maddie is a dedicated cheerleader for her high school. During her cheer off season, she continues her skills with tumbling and working at multiple kids’ cheerleading camps. We are fortunate to have Ms. Maddie share her enthusiasm and energy at MCA.</p>`
            },
            shea: {
                title: "Shea Downer (Student Aide)",
                img: "img/Ms.shea.jpg",
                content: `<p>Ms. Shea is a MCA alum, whose Montessori journey has come full circle! She is currently a junior at Willowbrook High School. Ms. Shea is a dedicated Boy Scout, working towards her Eagle rank. Ms. Shea has extensive experience as a staff member for National Youth Leadership Training and as a camp counselor at Camp Hiawatha. In addition, she is actively involved at Willowbrook High School; she plays the cello and performs in theatre productions. We are incredibly happy to have our former MCA students return to teach and share their skills and talents with our next MCA generation!</p>`
            },
            julie: {
                title: "Ms. Julie (Assistant Teacher)",
                img: "img/Ms.julie.jpg",
                content: `<p>Ms. Julie is primarily our Nido and Purple Room, however, you will also see her also helping our other classrooms as well. She holds an associates degree in early childhood education and has worked at MCA since 2017 . Ms. Julie is an incredibly kind and nurturing teacher who loves working with all of our students and watching them grow and learn. Ms. Julie is a cat mom and has a very soft spot for her two cats and her two adult children. During her free time she enjoys spending time with her family, going on walks, reading, and traveling.</p>`
            },
            jen: {
                title: "Jen Priske (Head of School)",
                img: "img/Ms.jen.jpg",
                content: `<p>My name is Jen Priske, I recently became the Head of School in June 2025. Prior to my new role I was the 3 - 6 year old Directress for the Yellow Room and the 3-6 year old coordinator. I have worked at MCA for 18 years. Each year has brought new joys and experiences to my life. I believe in approaching each child as an individual. Each child has specific needs and abilities and I like to give them opportunities to grow at their own pace while having tons of fun! A little about myself, I graduated from Monmouth College in 2013, GO SCOTS! I also completed my 3 - 6 year old Montessori certification from Seton Montessori Institute in 2017. I especially enjoy spending time with my daughter Chloe, who is almost 3 years old, and my husband Dan. I like binge watching shows, reading, getting my nails done, and spending time with my friends and family.</p>`
            },
            joyce: {
                title: "Joyce Teng (Yellow Room Afternoon Directress) ",
                img: "img/Ms.joyce.jpg",
                content: `<p>Ms. Joyce is our Yellow Room’s afternoon lead teacher. Ms. Joyce has dedicated her passion for teaching Montessori at the 3 – 6 year olds level at M.C.A. since 1991. She received her bachelor’s degree in Taiwan and completed her Montessori Early Childhood certification from MMTTC (Midwest Montessori Teacher Training Center). Ms. Joyce’s personal interests include listening to music, doing arts and crafts, taking walks and spending time with family and friends.</p>`
            },
            chimei: {
                title: "Chimei Schneider (Yellow Room Directress and 3-6 year old Coordinator) ",
                img: "img/Ms.chimei.jpg",
                content: `<p>Ms. Chimei is a dedicated and compassionate educator who has been working with young children in the Montessori environment for over 25 years. She has experience working with children with special needs in the therapeutic and Early Childhood Center. Her warm and supportive demeanor helps her students feel at ease and ready to learn. She is the Yellow Room Directress and our 3-6 year old coordinator. She has been at MCA for over 19 years.</p>
                <p>Ms. Chimei received her Master’s degree in Early Childhood and Childhood Education from New York University, has earned the Early Childhood Teacher Credential from the American Montessori Society, and also holds an Illinois Professional Educator License and Learning Behavior Specialist endorsement. Her interests include cooking, baking, gardening, and reading; she has incorporated her love of cooking and gardening into classroom activities. These activities have provided our children with opportunities to connect with nature and explore science in a fun and engaging way. Ms. Chimei is married and has a 20-year-old studying at Loyola University and a 15-year-old in high school.</p>`
            },
            karima: {
                title: "Karmia Zidani (Red Room Teacher and Kindergarten Enrichment Teacher)",
                img: "img/Ms.karima.jpg",
                content: `<p>Ms. Karima is a kind and creative teacher in our Red Room. She is also our kindergarten enrichment teacher. She is beyond thrilled to be working with your child and honored to be part of the MCA team.  Ms. Karima has been active in Early Childhood education for over 20 years.  Through her experiences, Ms. Karima has learned the absolute importance of building empathy, encouraging independent thought, increasing social skills, and the power of positive reinforcement, all of which have influenced her to become the person she is today.  She looks forward to all the relationships and memories she will make with the children, families, and the staff of MCA.</p>`
            },
            ghing: {
                title: "Ghing Castillo (Red Room Directress and Kindergarten Enrichment Teacher)",
                img: "img/Ms.ghing.jpg",
                content: `<p>My name is Perlita Castillo, but my students call me Ms. Ghing. I am the Red Room Directress.  I have three children (Camille, 27, Cali, 22, and Cameron, 14), and three grandchildren (Mila, Max, and Mya). Teaching was something I never thought I would take on as a profession. However, when I went to observe LorJon Montessori School for my daughter, Camille, who was then only 3 years old, the classroom opened a different sense of calling and belonging for me. As if it were my destiny to be there, to teach, guide, nurture, and learn alongside the children. After several weeks of volunteering at LorJon, I made a phone call to MMTTC inquiring about their Teacher Training schedule, and the rest was history.</p>
                <p>After LorJon closed its doors in 2018, I started my own tutoring business. With the help of my almost two decades of Montessori teaching experience and skills, I was able to continue to help educate and provide strong academic skills, critical thinking abilities, and foster a love of learning in my private tutoring students. When tutoring, I was fortunate to work with children between the ages of 3-13 years old, some with learning disabilities, IEP, and on the Autism Spectrum. Regardless of a child’s academic level, I am dedicated to seeing my students thrive and succeed, not just academically but also socially and emotionally! This is why I am delighted for the opportunity to join MCA, and I am thrilled to share my passion for Early Childhood Education and my dedication to making a positive impact on the lives of my students!</p>`
            },
            mary: {
                title: "Mary Elizabeth Cupano (Kindergarten Enrichment Coordinator and 3-6 Music Teacher)",
                img: "img/Ms.mary.jpg",
                content: `<p>Ms. Mary Elizabeth is our Kindergarten Enrichment Coordinator and 3-6 Music Teacher. She holds an early childhood Montessori teaching credential from MMTTC in Evanston and a music degree from the University of the Philippines. Ms. Mary Elizabeth has been part of MCA for 19 years — 5 years as the Red Room Directress, 3 years teaching music, and 12 years leading the Kindergarten Enrichment class. With over 25 years of experience in Montessori education, she is passionate about inspiring a love of learning and music in young children. In her spare time, Mary Elizabeth enjoys staying active by playing tennis and pickleball, and finds joy in playing the piano.</p>`
            },
            maryc: {
                title: "Mary Cyr (Yellow Room Assistant Teacher,  SMI Student and Infant/Toddler Music Teacher) ",
                img: "img/Ms.maryc.jpg",
                content: `<p>Ms. Mary joins MCA after working at a corporate Montessori school for one year. She is excited to be a part of our close-knit Montessori community! She studied music at Wheaton College where she played the French horn and taught beginner group piano classes. Ms. Mary’s favorite thing about teaching is watching children experience “lightbulb” moments: when things click for the first time and spark joy. In her free time, she enjoys singing with her friends in a choir, listening to nerdy podcasts, playing Minecraft and Pokémon Go, and spending quality time with her roommates. This fall Ms. Mary is going to Seton Montessori Institute to obtain her Primary Montessori Credential. </p>`
            },
            leslie: {
                title: "Leslie Pedroza (Assistant Teacher)",
                img: "img/Ms.leslie.jpg",
                content: `<p>Hello, my name is Leslie Pedroza. I recently graduated from high school! I’ve taken preschool classes for about 4 years already. I’ve also enjoyed babysitting. I enjoy playing soccer through school and my free time. I’ve been playing soccer for about 8 years now. My favorite hobby is doing eternal and Natural flower bouquets! This fall I am going to College of DuPage for nursing! </p>`
            },
            sophia: {
                title: "Sophia Bernero (3-6 Year Old Assistant Teacher)",
                img: "img/Ms.sophia.jpg",
                content: `<p>Ms. Sophia is joining us after the arrival of her baby sister, Lainey, this past January. Having a new baby in the house has deepened her passion for caring for children. She is currently a student at Willowbrook High School and plans to pursue a career as an art teacher. Before joining us, Ms. Sophia gained valuable experience working as a hostess at a local restaurant and babysitting for many families in her neighborhood. She is eager to begin her journey here, observing the children grow and develop new friendships. Outside of the classroom, Ms. Sophia enjoys creating art, playing basketball, going for walks, and spending time with her siblings. She can't wait to meet all of our families!</p>`
            },
            chelsea: {
                title: "Chelsea Pinto (3-6 year old assistant teacher)",
                img: "img/Ms.chelsea.jpg",
                content: `<p>Ms. Chelsea is a junior in high school and has worked with 3-6 year old students for the past 3 years. She is currently taking Child Development courses and plans to be a children’s speech pathologist in the future. She has also worked with elementary aged children for the past 6 summers. She enjoys reading, crafts, and travel. She is excited about working at Montessori Children’s Academy and supporting all of the wonderful work that the teachers do! </p>`
            },
            christen: {
                title: "Christen Campbell (3-6 year old Assistant Teacher)",
                img: "img/Mr.christen.jpg",
                content: `<p>Mr. Christen is a Red Room afternoon assistant teacher. He is pursuing his associate degree at COD. His hobbies include listening to music, watching movies and TV and hanging out with friends and family. He enjoys watching our children have fun when they play and learn. Mr. Christen is finding out what career will make him happy.</p>`
            }
        };

        $('[data-member]').on('click', function () {
            var member = $(this).data('member');
            var data = teamModalData[member];
            if (data) {
                $('#teamAbstractModalLabel').text(data.title);
                $('#teamAbstractModalImg').attr('src', data.img).attr('alt', data.title);
                $('#teamAbstractModalContent').html(data.content);
                var modal = new bootstrap.Modal(document.getElementById('teamAbstractModal'));
                modal.show();
            }
        });
    });



})(jQuery);
