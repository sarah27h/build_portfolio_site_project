/*
 *
 * data
 *
*/
let projects = [
    {
        title: 'museums guide react',
        src: 'images/project1.png',
        alt: 'Museum guide project',
        href: 'https://sarah27h.github.io/test-deploy/',
        git: 'https://github.com/sarah27h/FEND-neighborhood-map-react'
    },
    {
        title: 'myreads react',
        src: 'images/project2.png',
        alt: 'myreads react project',
        href: 'https://sarah27h.github.io/reactnd-project-myreads-deploy/#/reactnd-project-myreads-deploy/',
        git: 'https://github.com/sarah27h/reactnd-project-myreads-starter'
    },
    {
        title: 'project manager redux',
        src: 'images/project3.png',
        alt: 'project manager project',
        href: 'https://project-manager-7b746.firebaseapp.com/',
        git: 'https://github.com/sarah27h/projects-manager'
    },
    {
        title: 'resturant reviews',
        src: 'images/project4.png',
        alt: 'resturant reviews project',
        href: 'https://sarah27h.github.io/FEND-restaurant-stage-1/',
        git: 'https://github.com/sarah27h/FEND-restaurant-stage-1'
    },
    {
        title: 'Get Weather React',
        src: 'images/project6.png',
        alt: 'Get Weather project',
        href: 'https://sarah27h.github.io/react-get-weather-app/',
        git: 'https://github.com/sarah27h/react-get-weather-app'
    },
    {
        title: 'Memory game',
        src: 'images/project11.png',
        alt: 'Memory game project',
        href: 'https://sarah27h.github.io/fend-project-memory-game-master/',
        git: 'https://github.com/sarah27h/fend-project-memory-game-master'
    },
    {
        title: 'Arcade game',
        src: 'images/project12.png',
        alt: 'Arcade game project',
        href: 'https://sarah27h.github.io/arcade-game-master/',
        git: 'https://github.com/sarah27h/arcade-game-master'
    },
    {
        title: 'feed reader testing',
        src: 'images/project13.png',
        alt: 'feed reader testing project',
        href: 'https://sarah27h.github.io/feed-reader/',
        git: 'https://github.com/sarah27h/feed-reader'
    },
    {
        title: 'bakery website',
        src: 'images/project14.png',
        alt: 'best bakery website project',
        href: 'http://bestbakery.000webhostapp.com/'
    },
    {
        title: 'Pixel Art Maker',
        src: 'images/project15.png',
        alt: 'pixel art project',
        href: 'https://codepen.io/Sarah27h/full/QagrVa/'
    },
    {
        title: 'Animal Card',
        src: 'images/project16.png',
        alt: 'panda animal',
        href: 'https://codepen.io/Sarah27h/pen/RjLwKR?editors=1000'
    }
];


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
    projects.forEach(function(project) {
        // create all html elements needed
        let projectSection = document.createElement('section');
        let projectThumbnail = document.createElement('img');
        let projectTitle = document.createElement('h4');
        let projectLink = document.createElement('p');
        
        let projectUrl = document.createElement('a');
        
    
        // add attribute to html elements needed
        setAttributes(projectSection, {'class': 'project text_center'});
        setAttributes(projectLink, {'class': 'project_link'});
        if(typeof (project.git) !== undefined ) {
            
        }
        setAttributes(projectUrl, {'href': project.href});              
        setAttributes(projectThumbnail, {'class': 'project_img', 'src': project.src, 'alt': project.alt});

        // add section header h4 content
        // capitalize the first letter of each word in project title
        projectTitle.innerHTML = letterCapitalize(project.title);

        // add projectSection element to myworksSection parent
        myworksSection.appendChild(projectSection);

        // add html elements to projectSection parent
        projectSection.appendChild(projectThumbnail);
        projectSection.appendChild(projectTitle);
        projectSection.appendChild(projectLink);

        // add projectUrl element as child to projectLink parent
        // add projectUrl content
        projectLink.appendChild(projectUrl);
        projectUrl.innerHTML = '<i class="fas fa-link"></i>'
       
        // check it project has a git link or not to add git icon
        if(typeof (project.git) !== 'undefined' ) {
            let projectGit = document.createElement('a');
            setAttributes(projectGit, {'href': project.git});
            console.log('you in');
            projectLink.appendChild(projectGit);
            projectGit.innerHTML = '<i class="fab fa-github"></i>'
        }
        

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


/**
* @description Capitalize the first letter of each word
* @param {string} str
* @returns {string} first letter of each word in str capitalized
*/
function letterCapitalize(str) { 
  
	// our regex [a-z] matches every alphabetic character in the string
	// \b is used to find a match at the beginning or end of a word
    // replace(searchvalue, newvalue)
    // searches a string for a specified value, or a regular expression, 
    // and returns a new string where the specified values are replaced
	// using a function to return first letter of each word capitalized
	return str.replace(/\b[a-z]/gi, function(char) { 
	  return char.toUpperCase();
	});
		   
  }

addProjects();