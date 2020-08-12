class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    
    this.items.forEach(item => item.classList.remove('active'));
    
    this.items[index].classList.add('active');

    this.thumbItems.forEach(item => {
      item.classList.remove('active');
    })
    
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if(this.active > 0) {
      this.activeSlide(this.active - 1);
    }else {
      this.active = this.items.length - 1;
      this.activeSlide(this.active);
    }
  }

  next() {
    if(this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const prevBtn = document.querySelector('.slide-prev');
    prevBtn.addEventListener('click', this.prev);
    
    const nextBtn = document.querySelector('.slide-next');
    nextBtn.addEventListener('click', this.next);
  }

  addThumbItems() {
    this.items.forEach(() => this.thumb.innerHTML += '<span />');
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);

    this.addNavigation();
  }


}

new SlideStories('slide')