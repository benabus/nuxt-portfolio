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
    'an-illustrated-guide-to-programming-for-absolute-beginners-and-the-computer-illiterate': {
        type: 'illustration',
        stub:
            'an-illustrated-guide-to-programming-for-absolute-beginners-and-the-computer-illiterate',
        title: 'An Illustrated Guide to Programming',
        subtitle: 'for Absolute Beginners and the Computer Illiterate',
        cover_image: '/assets/img/project_covers/book.jpg',
        cover_image_caption:
            'Cover of An Illustrated Guide to Programming for Absolute Beginners and the Computer Illiterate'
    },
    cadre: {
        type: 'software',
        stub: 'cadre',
        title: 'CADRE',
        subtitle: 'Collaborative Archive & Data Research Environment',
        cover_image: '/assets/img/project_covers/cadre.jpg'
    },
    'imls-video': {
        type: 'illustration',
        stub: 'cadre-video',
        title: 'IMLS Video',
        subtitle: 'Animated introduction video for CADRE',
        cover_image: '/assets/img/project_covers/imls_video.jpg'
    },
    'shake-it-tarot': {
        type: 'software',
        stub: 'shake-it-tarot',
        title: 'Shake It Tarot',
        subtitle: 'Tarot Card Android app',
        cover_image: '/assets/img/project_covers/TarotIcon512.png'
    },
    comics: {
        type: 'illustration',
        stub: 'comics',
        title: 'Comics',
        subtitle: 'Storytelling with Sequential Art',
        cover_image: '/assets/img/project_covers/thadj.png',
        cover_image_caption: 'Single panel from Toilet Humor and Dick Jokes'
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
