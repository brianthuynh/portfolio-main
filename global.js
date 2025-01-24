console.log('IT’S ALIVE!');

function $$(selector, context = document) {
    let pages = [
        { url: '', title: 'Home' },
        { url: 'projects/index.html', title: 'Projects' },
        { url: 'contact/index.html', title: 'Contact'},
        { url: 'resume/index.html', title: 'Resume'},
        { url: 'https://github.com/brianthuynh', title :'GitHub Repo'}
      ];
    
    let nav = document.createElement('nav');
    document.body.prepend(nav);
    for(let p of pages) {
        let url = p.url;
        let title = p.title;
        nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`);
    }
    return Array.from(context.querySelectorAll(selector));
}

console.log('Finished Running')