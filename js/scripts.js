/*
 *
 * data
 *
 */
projects = [
    {
        title: 'museums guide react',
        src: 'images/project1.png',
        alt: 'Museum guide project',
        href: ''
    },
    {
        title: 'myreads react',
        src: 'images/project2.png',
        alt: 'myreads react project',
        href: ''
    },
    {
        title: 'resturant reviews',
        src: 'images/project3.png',
        alt: 'resturant reviews project',
        href: 'https://sarah27h.github.io/FEND-restaurant-stage-1/'
    },
    {
        title: 'Memory game',
        src: 'images/project4.png',
        alt: 'Memory game project',
        href: 'https://sarah27h.github.io/fend-project-memory-game-master/'
    },
    {
        title: 'Arcade game',
        src: 'images/project5.png',
        alt: 'Arcade game project',
        href: 'https://sarah27h.github.io/arcade-game-master/'
    },
    {
        title: 'feed reader testing',
        src: 'images/project6.png',
        alt: 'feed reader testing project',
        href: 'https://sarah27h.github.io/feed-reader/'
    },
    {
        title: 'bakery website',
        src: 'images/project7.png',
        alt: 'best bakery website project',
        href: 'http://bestbakery.000webhostapp.com/'
    },
    {
        title: 'Pixel Art Maker',
        src: 'images/project8.png',
        alt: 'pixel art project',
        href: 'https://codepen.io/Sarah27h/full/QagrVa/'
    },
    {
        title: 'Animal Card',
        src: 'images/project9.png',
        alt: 'panda animal',
        href: 'https://codepen.io/Sarah27h/pen/RjLwKR?editors=1000'
    }
]


/*
 *
 * functions
 *
 */


/**
* @description Add projects in projects section
*/
function addProjects() {

    let myworksSection = document.getElementsByClassName('my_works')[0];
    console.log(myworksSection);
    projects.forEach(project => {
        // create all html elements needed
        let projectSection = document.createElement('section');
        let projectThumbnail = document.createElement('img');
        let projectTitle = document.createElement('h4');
        let projectLink = document.createElement('p');
        let projectUrl = document.createElement('a');
    
        // add attribute to html elements needed
        setAttributes(projectSection, {'class': 'project text_center'});
        setAttributes(projectLink, {'class': 'project_link'});
        setAttributes(projectUrl, {'href': project.href});    
        setAttributes(projectThumbnail, {'class': 'project_img', 'src': project.src, 'alt': project.alt});

        // add section header h4 content
        projectTitle.innerHTML = project.title;

        // add projectSection element to myworksSection parent
        myworksSection.appendChild(projectSection);

        // add html elements to projectSection parent
        projectSection.appendChild(projectThumbnail);
        projectSection.appendChild(projectTitle);
        projectSection.appendChild(projectLink);

        // add projectUrl element as child to projectLink parent
        // add projectUrl content
        projectLink.appendChild(projectUrl);
        projectUrl.innerHTML = 'Visit'

    });

}


/**
* @description Set attributes at once for an element
* @param {html element} element
* @param {object} attributes
*/
function setAttributes(element, attributes) {
    for(key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

addProjects();