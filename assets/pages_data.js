const pages = {
    enso: {
        stub: 'enso',
        type: 'software',
        title: 'Enso',
        subtitle: 'Enso Network Software',
        cover_image: '/assets/img/project_covers/enso.png',
        blurb: '',
        cover_image_caption: 'The original Enso Logo'
    },
    osome: {
        type: 'software',
        stub: 'osome',

        title: 'OSoMe',
        subtitle: 'Observatory on Social Media',
        cover_image: '/assets/img/project_covers/osome.png',
        blurb: '',
        cover_image_caption: 'Screenshot from OSoMe Network Tool'
    },
    hoaxy: {
        type: 'software',
        stub: 'haoxy',
        title: 'Hoaxy',
        subtitle: '',
        cover_image: '/assets/img/project_covers/hoaxylogo.png',
        cover_image_alt: 'The Hoaxy Logo',
        blurb: ''
    },
    "an-illustrated-guide-to-programming-for-absolute-beginners-and-the-computer-illiterate": {
        type: 'illustration',
        stub: 'an-illustrated-guide-to-programming-for-absolute-beginners-and-the-computer-illiterate',
        title: "An Illustrated Guide to Programming",
        cover_image: '/assets/img/project_covers/book.jpg',
        cover_image_caption: "Cover of An Illustrated Guide to Programming for Absolute Beginners and the Computer Illiterate"
    }
};

const software = {};
const illustration = {};

for (const stub in pages) {
    const page = pages[stub];
    if (page.type === 'software') {
        software[stub] = page;
    } else if (page.type === 'illustration') {
        illustration[stub] = page;
    }
}

export default pages;
export { software, illustration };
