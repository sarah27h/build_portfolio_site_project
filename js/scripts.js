/*
 *
 * data
 *
*/
let projects = PROJRECTS;


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
    projects.forEach(function(project, index) {

        /** 
         * create htmls elements needed for each project 
         * **/
        let projectSection = document.createElement('section');
        let projectThumbnail = document.createElement('img');
        let projectTitle = document.createElement('h4');
        let projectLinks = document.createElement('p');
        let projectUrl = document.createElement('a');
        let projectGit = document.createElement('a');
        let projectInfo = document.createElement('a');
    
        /** 
         * add attributes to html elements needed for each project 
         * **/
        setAttributes(projectSection, {'class': 'project text_center'});
        setAttributes(projectLinks, {'class': 'project_link'});
        if(typeof (project.git) !== undefined ) {
            setAttributes(projectGit, {'href': project.git});
            console.log('you in');
            projectLinks.appendChild(projectGit);
        }
        setAttributes(projectUrl, {'href': project.href});              
        setAttributes(projectThumbnail, {'class': 'project_img', 'src': project.src, 'alt': project.alt});
        setAttributes(projectInfo, {'class': 'project_info'});

        // add section header h4 content
        // capitalize the first letter of each word in project title
        projectTitle.innerHTML = letterCapitalize(project.title);

        /** 
         * append elements
         * **/
        // add projectSection element to myworksSection parent
        myworksSection.appendChild(projectSection);

        // add html elements to projectSection parent
        projectSection.appendChild(projectThumbnail);
        projectSection.appendChild(projectTitle);
        projectSection.appendChild(projectLinks);

        // add projectUrl element as child to projectLink parent
        projectLinks.appendChild(projectUrl);

        // add projectInfo element as child to projectLink parent
        projectLinks.appendChild(projectInfo);

        /** 
         * add project link icons
         * **/
        // add projectUrl content
        projectUrl.innerHTML = '<i class="fas fa-link"></i>'
        // add projectInfo content
        projectInfo.innerHTML = `<i class="fas fa-info-circle" id=${index}></i>`
       
        // check it project has a git link or not to add git icon
        if(typeof (project.git) !== 'undefined' ) {
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

