const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2,
  });
  
  document.querySelectorAll('.animate-up, .animate-left, .animate-right').forEach((el) => {
    observer.observe(el);
  });