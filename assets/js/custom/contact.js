const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry) 
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const Heading_Anim = document.querySelectorAll('.heading');
Heading_Anim.forEach((el) => observer.observe(el));


const Para_Anim = document.querySelectorAll('.paragraph');
Para_Anim.forEach((el) => observer.observe(el));

