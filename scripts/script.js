function showMessage()
{
    alert("Welcome to Incredible India!");
}

const testimonials = [...document.querySelectorAll('.testimonial')];
const carouselStatus = document.querySelector('.carousel-status');
const carouselButtons = document.querySelectorAll('.carousel-button');
let activeTestimonial = 0;

function showTestimonial(index)
{
    activeTestimonial = (index + testimonials.length) % testimonials.length;
    testimonials.forEach((testimonial, testimonialIndex) => {
        const isActive = testimonialIndex === activeTestimonial;
        testimonial.classList.toggle('is-active', isActive);
        testimonial.setAttribute('aria-hidden', String(!isActive));
    });
    carouselStatus.textContent = `${String(activeTestimonial + 1).padStart(2, '0')} / ${String(testimonials.length).padStart(2, '0')}`;
}

carouselButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const offset = button.dataset.direction === 'next' ? 1 : -1;
        showTestimonial(activeTestimonial + offset);
    });
});