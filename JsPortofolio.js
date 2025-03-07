document.addEventListener("DOMContentLoaded", function () {
    // Animasi Logo
    const logo = document.querySelector(".logo h1");
    let colors = ["#ff1493", "#ff69b4", "#ffe4e1", "#ffffff"];
    let index = 0;

    setInterval(() => {
        logo.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.3) rotate(5deg)";
        logo.style.transition = "transform 0.3s ease-in-out";
    });

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1) rotate(0deg)";
    });

    // Animasi Avatar
    const avatarContainer = document.querySelector(".avatar");
    const avatarImage = document.querySelector(".avatar img");

    avatarContainer.addEventListener("mouseenter", function () {
        avatarContainer.style.setProperty("--dynamic-border", "linear-gradient(45deg,rgb(232, 127, 183), #ff69b4, #ffc0cb)");
    });

    avatarImage.addEventListener("mouseenter", function () {
        avatarImage.style.transform = "scale(1.3)";
    });

    avatarImage.addEventListener("mouseleave", function () {
        avatarImage.style.transform = "scale(1)";
    });

    // Animasi Scroll untuk Section
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            } else {
                section.style.opacity = 0;
                section.style.transform = "translateY(50px)";
            }
        });
    });

    // Set Awal untuk Section Animasi
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Animasi Scroll untuk Skills
    const skills = document.querySelectorAll(".skill");
    window.addEventListener("scroll", function () {
        skills.forEach((skill, index) => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < window.innerHeight - 50) {
                skill.style.opacity = 1;
                skill.style.transform = "translateY(0)";
                skill.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            } else {
                skill.style.opacity = 0;
                skill.style.transform = "translateY(50px)";
            }
        });
    });

    // Set Awal untuk Skills
    skills.forEach((skill) => {
        skill.style.opacity = 0;
        skill.style.transform = "translateY(50px)";
    });

    // Animasi Scroll untuk Foto
    const photos = document.querySelectorAll(".photo");
    window.addEventListener("scroll", function () {
        photos.forEach((photo, index) => {
            const photoTop = photo.getBoundingClientRect().top;
            if (photoTop < window.innerHeight - 50) {
                photo.style.opacity = 1;
                photo.style.transform = "translateY(0)";
                photo.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            } else {
                photo.style.opacity = 0;
                photo.style.transform = "translateY(50px)";
            }
        });
    });

    // Set Awal untuk Foto
    photos.forEach((photo) => {
        photo.style.opacity = 0;
        photo.style.transform = "translateY(50px)";
    });

    // Animasi Scroll untuk Projects
    const projects = document.querySelectorAll(".project-item");
    window.addEventListener("scroll", function () {
        projects.forEach((project, index) => {
            const projectTop = project.getBoundingClientRect().top;
            if (projectTop < window.innerHeight - 50) {
                project.style.opacity = 1;
                project.style.transform = "translateY(0)";
                project.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            } else {
                project.style.opacity = 0;
                project.style.transform = "translateY(50px)";
            }
        });
    });

    // Set Awal untuk Projects
    projects.forEach((project) => {
        project.style.opacity = 0;
        project.style.transform = "translateY(50px)";
    });
});
