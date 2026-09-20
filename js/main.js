(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
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
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0",
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });

    // Abstract Team Modal Logic
    var teamModalData = {
      lilly: {
        title: "Lilly Salazar (Nido Room Assistant Teacher)",
        img: "img/Ms.lilly.jpg",
        content: `<p>Ms. Lilly has been a part of the MCA Nido team since 2024. She is entering her second year of college, where she is pursuing a degree in Elementary Education. She discovered her passion for working with young children through caring for her younger siblings and has continued to grow that passion through her work with infants and toddlers. Outside of the classroom, Ms. Lilly enjoys playing sports, working out, coaching and playing softball, and spending time outdoors. She especially loves reading stories and engaging in meaningful interactions with young children. </p>`,
      },
      amy: {
        title: "Amy Dittmer (Infant / Toddler Teacher)",
        img: "img/Ms.amy.jpg",
        content: `<p>Ms. Amy joined MCA in 2015. She holds a Bachelor of Science in Child Development with an emphasis in Parent/Infant Specialty and Leadership Studies, as well as a Montessori Paraprofessional Certificate from the Seton Montessori Institute. Ms. Amy enjoys spending time at neighborhood “Music in the Park” events, discovering local restaurants, and enjoying a good cup of coffee. She especially loves working with our youngest learners and creating a warm, nurturing environment where they can explore, learn, grow, and develop their unique personalities.</p>`,
      },
      elynna: {
        title: "Elyanna Aquino (Assistant Teacher)",
        img: "img/Ms.elyanna.jpg",
        content: `<p>Ms. Elyanna joined our Infant Room team in 2025, where she brings joy to our youngest learners. She has always had a passion for working with children and began building her experience while in high school, where she completed courses in preschool education and child development. She is currently majoring in Elementary Education at College of DuPage as she works toward her future career in education. She especially loves singing and enjoys creating fun music experiences for our infants. Ms. Elyanna is also a dedicated and hardworking individual who balances her work at MCA with helping at the Western DuPage Special Recreation Association (WDSRA). In her free time, she enjoys baking and shopping. We are so excited to have Ms. Elyanna continuing her journey with MCA and look forward to watching her grow as an educator! </p>`,
      },
      eva: {
        title: "Eva Rodriguez (Assistant Teacher)",
        img: "img/Ms.eva.jpg",
        content: `<p>Ms. Eva joined the MCA community in 2023 and is currently pursuing her nursing degree at Elmhurst University. Ms. Eva has a natural talent for art and creativity and loves bringing engaging, hands-on projects into the classroom. She enjoys creating meaningful experiences that encourage children to explore their creativity and express themselves.
        </p><p>Outside of MCA, Ms. Eva enjoys spending time with her family, golfing with her dad, and trying new recipes and baking especially her favorite, banana bread. She looks forward to sharing her creativity and love of baking with the MCA community.
        </p>`,
      },
      angela: {
        title: "Angela Chiaramonte (Purple Room Directress)",
        img: "img/Ms.angela.png",
        content: `<p>Ms. Angela earned her degree in Human Services with a focus on Residential Child Care from the College of DuPage in 2005. She was introduced to Montessori philosophy in 2016, and it quickly connected with her passion for supporting young children’s growth, independence, and confidence. In 2022, she completed her Montessori Infant/Toddler Certification, continuing to expand her knowledge and commitment to the Montessori approach. Outside of the classroom, Ms. Angela enjoys spending time with her large Italian family, staying active through yoga and Zumba, and relaxing with two of her favorite treats—a good cup of coffee and chocolate. </p>`,
      },
      maddie: {
        title: "Madison Kosior (Assistant Teacher)",
        img: "img/Ms.maddie.jpg",
        content: `<p>Ms. Maddie is currently a senior at Willowbrook High School and is excited to begin her second year as an apprentice in the Nido Room. She has completed several Child Development courses in addition to working with the Willowbrook Little Warriors Preschool as a teacher’s assistant. Ms. Maddie is a dedicated cheerleader for her high school. During her cheer off-season, she continues to develop her skills through tumbling and working at multiple children’s cheerleading camps. We are fortunate to have Ms. Maddie return to MCA and share her enthusiasm, energy, and passion for working with children.</p>`,
      },
      shea: {
        title: "Shea Downer (Assistant Teacher)",
        img: "img/Ms.shea.jpg",
        content: `<p>Ms. Shea is an MCA alum whose Montessori journey has come full circle! She joined the MCA team in 2025 and is now a senior at Willowbrook High School. She is excited to continue sharing her passion, skills, and experiences with the next generation of MCA students. Ms. Shea has earned her Eagle Scout rank and has gained extensive leadership experience through National Youth Leadership Training and serving as a camp counselor at Camp Hiawatha. She is also actively involved at Willowbrook High School, where she plays the cello and participates in theatre productions.</p>`,
      },
      julie: {
        title: "Julie Bruder (Assistant Teacher)",
        img: "img/Ms.julie.jpg",
        content: `<p>Ms. Julie holds an Associate's Degree in Early Childhood Education and has been a part of the MCA team since 2017. She is a kind, compassionate, and nurturing teacher who is passionate about supporting each child's growth and development. Ms. Julie loves building meaningful relationships with her students and finds great joy in watching them learn, gain confidence, and reach new milestones. Outside of the classroom, Ms. Julie is a devoted cat mom to her two beloved cats and enjoys spending time with her two adult children. In her free time, she loves going for walks, reading, traveling, and making memories with her family.</p>`,
      },
      isabella: {
        title: "Isabella Godinez (Assistant Teacher)",
        img: "img/Ms.isabella.jpg",
        content: `<p>Ms. Isabella is a senior at York High School. She has completed coursework in Child Development as well as Relationships and Parenting, where she gained valuable knowledge and skills in childcare and family dynamics. Isabella has hands-on experience through babysitting and demonstrates dedication, responsibility, and enthusiasm when working with children. Outside of the classroom, Isabella enjoys cheerleading and she values spending quality time with her family and friends. She is excited to continue growing her experience while supporting and nurturing the children at MCA. </p>`,
      },
      jen: {
        title: "Jen Priske (Head of School)",
        img: "img/Ms.jen.jpg",
        content: `<p>Ms. Jen has been part of the MCA community since 2007 and became Head of School in 2025. Prior to stepping into her leadership role, she served as the 3–6 Year Old Directress in the Yellow Room and as the 3–6 Year Old Coordinator.
                  </p><p>Ms. Jen believes in approaching each child as an individual, recognizing that every child has unique needs, abilities, and interests. She is passionate about creating opportunities for children to grow at their own pace while fostering a joyful, engaging, and nurturing learning environment.
                  </p><p>Ms. Jen graduated from Monmouth College in 2013 and completed her 3–6 Year Old Montessori certification through the Seton Montessori Institute in 2017. 
                  </p><p>Outside of MCA, Ms. Jen enjoys spending time with her children, husband, and family. She loves binge-watching her favorite shows, reading, and making memories with friends and family.
                  </p>`,
      },
      joyce: {
        title: "Joyce Teng (Yellow Room PM Directress) ",
        img: "img/Ms.joyce.jpg",
        content: `<p>Ms. Joyce is our Yellow Room’s afternoon lead teacher. Ms. Joyce has dedicated her passion for teaching Montessori at the 3 – 6 year olds level at M.C.A. since 1991. She received her bachelor’s degree in Taiwan and completed her Montessori Early Childhood certification from MMTTC (Midwest Montessori Teacher Training Center). Ms. Joyce’s personal interests include listening to music, doing arts and crafts, taking walks and spending time with family and friends.</p>`,
      },
      chimei: {
        title:
          "Chimei Schneider (Yellow Room Directress and 3-6 year old Coordinator) ",
        img: "img/Ms.chimei.jpg",
        content: `<p>Ms. Chimei is a dedicated and compassionate Montessori educator who has worked with young children for over 26+ years. 20 of those years as a lead directress at MCA. She has experience working with children with special needs in a therapeutic and Early Childhood Center. Her warm and supportive demeanor helps her students feel at ease and ready to learn.
        </p><p>Ms. Chimei completed her Master’s degree in Early Childhood and Childhood Education from New York University and her Early Childhood Teacher Credential from the American Montessori Society. In addition, Ms. Chimei also holds an Illinois Professional Educator License and Learning Behavior Specialist endorsement.
        </p>`,
      },
      karima: {
        title: "Karima Zidani (Yellow Room Teacher)",
        img: "img/Ms.karima.jpg",
        content: `<p>Ms. Karima is a kind and creative teacher. She has taught at MCA since 2021. She is beyond thrilled to be working with your child and honored to be part of the MCA team. Ms. Karima has been an early childhood educator for 20+ years. Through her experiences, Ms. Karima has learned the absolute importance of building empathy, encouraging independent thought, increasing social skills, and the power of positive reinforcement, all of which have influenced her to become the person she is today. She looks forward to all the relationships and memories she will make with the children, families, and MCA team. </p>`,
      },
      ghing: {
        title:
          "Ghing Castillo (Red Room Directress and Kindergarten Enrichment Teacher)",
        img: "img/Ms.ghing.jpg",
        content: `<p>Ms. Ghing joined the MCA team in 2025. She holds a Bachelor of Business Administration in Management and received Montessori Early Childhood training through MMTTC. With more than 20+ years of Montessori experience, including 17 years as a Lead Directress at Lor-Jon Montessori School in Elmhurst. She also founded her own tutoring business in 2019, working with children ages 3–13, including students with diverse learning needs. She is passionate about creating a nurturing environment where children feel supported, confident, and inspired to learn. Outside of MCA, Ms. Ghing enjoys spending time with her three children and three grandchildren, reading, taking walks, traveling, and exploring new restaurants and places.</p>`,
      },
      mary: {
        title:
          "Mary Elizabeth Cupano (Kindergarten Enrichment Coordinator & Music Teacher)",
        img: "img/Ms.mary.jpg",
        content: `<p>Ms. Mary Elizabeth is our Kindergarten Enrichment Coordinator and 3-6 Music Teacher. She holds an early childhood Montessori teaching credential from MMTTC in Evanston and a music degree from the University of the Philippines. Ms. Mary Elizabeth has been part of MCA for 19 years — 5 years as the Red Room Directress, 3 years teaching music, and 12 years leading the Kindergarten Enrichment class. With over 25 years of experience in Montessori education, she is passionate about inspiring a love of learning and music in young children. In her spare time, Mary Elizabeth enjoys staying active by playing tennis and pickleball, and finds joy in playing the piano.</p>`,
      },
      maryc: {
        title: "Mary Cyr (Yellow Room Assistant Teacher & Music Teacher) ",
        img: "img/Ms.maryc.jpg",
        content: `<p>Ms. Mary joins MCA after working at a corporate Montessori school for one year. She is excited to be a part of our close-knit Montessori community! She studied music at Wheaton College where she played the French horn and taught beginner group piano classes. Ms. Mary’s favorite thing about teaching is watching children experience “lightbulb” moments: when things click for the first time and spark joy. In her free time, she enjoys singing with her friends in a choir, listening to nerdy podcasts, playing Minecraft and Pokémon Go, and spending quality time with her roommates. This fall Ms. Mary is going to Seton Montessori Institute to obtain her Primary Montessori Credential. </p>`,
      },
      leslie: {
        title: "Leslie Pedroza (Assistant Teacher)",
        img: "img/Ms.leslie.jpg",
        content: `<p>Ms. Leslie has been a member of the MCA team since 2025. Ms. Leslie completed four years of preschool education coursework during high school and, this summer, earned her Assistant Teacher Montessori Early Childhood Fundamentals certificate. She is currently attending the College of DuPage, where she is pursuing a degree in Early Childhood Education. Ms. Leslie has played soccer for the past nine years. In her free time, she loves creating beautiful natural and everlasting flower bouquets. We are delighted to have Ms. Leslie as part of the MCA family and look forward to supporting her as she continues to grow and inspire young learners.</p>`,
      },
      sophia: {
        title: "Sophia Bernero (Assistant Teacher)",
        img: "img/Ms.sophia.jpg",
        content: `<p>Ms. Sophia joined the MCA team in the Red Room in 2025. She is currently studying Early Childhood Education at the College of DuPage and is passionate about supporting children’s development, building their confidence, and fostering a lifelong love of learning. She especially enjoys incorporating art and creativity into the classroom. Outside of MCA, Ms. Sophia enjoys creating art, playing basketball, going for walks, and spending time with her siblings. She looks forward to building meaningful relationships with MCA students and families.</p>`,
      },
      chelsea: {
        title: "Chelsea Pinto (Assistant teacher)",
        img: "img/Ms.chelsea.jpg",
        content: `<p>Ms. Chelsea joined the MCA team in 2024, working with our 3–6 year old students. She is a senior at York High School and has completed all of the child development courses. This year, Ms. Chelsea was accepted into the Invite to Teach program. Ms. Chelsea’s college plans are to pursue a degree in children’s speech-language pathology. She has extensive experience working with elementary-aged children from her eight summers of childcare experience at Park View Kids Camp and volunteering at her church. She enjoys supporting children’s growth, learning from the classroom environment, and being part of the wonderful work our teachers do each day. Outside of the classroom, Ms. Chelsea enjoys reading, crafting, and traveling. She is excited to continue building connections with MCA students and families! </p>`,
      },
      christen: {
        title: "Christen Campbell (Assistant Teacher)",
        img: "img/Mr.christen.jpg",
        content: `<p>Mr. Christen is a Red Room afternoon assistant teacher. He is pursuing his associate degree at COD. His hobbies include listening to music, watching movies and TV and hanging out with friends and family. He enjoys watching our children have fun when they play and learn. Mr. Christen is finding out what career will make him happy.</p>`,
      },
      jasmine: {
        title: "Jasmine Glowen (Nido Room Assistant Teacher)",
        img: "img/Ms.jasmine.jpg",
        content: `<p>Ms. Jasmine is a wonderful part of our MCA family. Her connection to MCA goes back several years, as she originally worked with us in our 0-3 community from 2019 to 2021 before returning to the MCA team in November 2025. We are so happy to have her back! Outside of the classroom, she enjoys trying new restaurants, building LEGO creations, and baking cupcakes and cake pops for friends and family. She is also a big Disney fan and loves visiting the Disney parks whenever she can! Ms. Jasmine truly enjoys working with children and is excited to continue growing, learning, and thriving as part of the MCA team!</p>`,
      },
      rae: {
        title: "Rae Tamez (Green Room Assistant Teacher)",
        img: "img/Ms.rae.jpg",
        content: `<p>Ms. Rae has been part of our MCA team since 2023. She is currently a student at the College of DuPage, where she is majoring in Early Childhood Special Education. As the oldest of four siblings, Ms. Rae has spent much of her life caring for and helping with her younger siblings, an experience she believes helped shape her passion for working with children.</p><p>Ms. Rae enjoys reading and loves hands-on, sensorial art experiences such as pottery and crocheting. She especially enjoys bringing creativity and meaningful hands-on experiences in her work with children.</p><p>One of Ms. Rae's greatest passions is supporting children as they develop independence. She believes in giving children the time, space, encouragement, and opportunities to try things for themselves, build confidence in their abilities, and take an active role in their daily routines. She loves being part of their growth and celebrating all the little accomplishments along the way.</p>`,
      },
      erinn: {
        title: "Erinn Schie (Green Room Teacher)",
        img: "img/Ms.erinn.jpg",
        content: `<p>Ms. Erinn began her Montessori journey a few years ago while working toward her degree in Early Childhood Education and has enjoyed growing alongside children, families, and fellow educators ever since.</p><p>In the classroom, Ms. Erinn enjoys incorporating nature, curiosity, creativity, and hands-on learning into meaningful experiences for the children. She looks forward to building relationships with each child and supporting them as they learn, explore, and grow.</p><p>Outside of school, Ms. Erinn enjoys cycling with friends, spending time outdoors, and planning her next adventure. She looks forward to a wonderful year together!</p>`,
      },
      daria: {
        title: "Daria Lasota (Red Room Assistant Teacher)",
        img: "img/Ms.daria.jpg",
        content: `<p>Ms. Daria has earned her Associate of Arts degree and Early Childhood Education certificate from Triton College and is currently pursuing her bachelor's degree in Early Childhood Education at National Louis University.</p><p>With four years of experience working with children of various ages, Ms. Daria has worked as a teacher's assistant and Youth Development Specialist. She is passionate about education and creating a warm, engaging environment where children can learn and thrive.</p><p>Outside of MCA, Ms. Daria enjoys reading, crafting, and cooking. She is also fluent in Polish and enjoys connecting with children and families from diverse backgrounds.</p>`,
      },
    };

    $("[data-member]").on("click", function () {
      var member = $(this).data("member");
      var data = teamModalData[member];
      if (data) {
        $("#teamAbstractModalLabel").text(data.title);
        $("#teamAbstractModalImg")
          .attr("src", data.img)
          .attr("alt", data.title);
        $("#teamAbstractModalContent").html(data.content);
        var modal = new bootstrap.Modal(
          document.getElementById("teamAbstractModal"),
        );
        modal.show();
      }
    });

    // Gallery Modal Carousel Logic
    $(".gallery-thumb").on("click", function () {
      var index = parseInt($(this).data("gallery-index"), 10) || 0;
      var $carousel = $("#galleryCarousel");
      var modal = new bootstrap.Modal(document.getElementById("galleryModal"));
      modal.show();
      // Set carousel to correct slide after modal is shown
      $carousel.one("shown.bs.modal", function () {
        $carousel.carousel(index);
      });
      // If already shown, just go to the slide
      $carousel.carousel(index);
    });
  });
})(jQuery);
