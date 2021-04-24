// Only if loaded file is profile.html
const developers = [
    {
      '_id': '1',
      'name': 'Mouctar Diallo',
      'title': 'Web full Stack developper',
      'image': '/images/image-1.jpeg',
      'description': 'I have been working with web development since 2017, the period during which I have worked in different environments. I am a self-motivated and self-taught professional who likes to solve problems.I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. My repertoire includes programming languages and tools such as ReactJS, JavaScript (ES5&6 and CommJs), React-Native, Wordpress, Django/python, MySQL, PostgreSQL, Nginx and Apache server, NodeJs, SASS, LESS, Twitter Bootstrap,  jQuery, and more.'
      ,'eduction': ["2011-2013: Bachelor degree in Guinea","2013-2017: Undergraduate degree Computer Sciences in Guinea","2020-2021: Undergradute degree Computer Sciences in France"]
      ,'expericencies': ["\
      TELEHIGHTECH application developer Nice, France\
      From November 2020 to February 2021\
      Establishment of an online shopping platform called\
      OnePrice","\
      Computer programmer Univesité Côte d'Azur Nice, France\
      From February 2020 to June 2020\
      Project Connected via the Web: Monitoring system of the\
      temperature variation in a room.","\
      Tuition Assistant Nongo Conakry University Conakry (Guinea)\
      July 2017 to August 2018","Educational assistant in schools Dalanda Bah School Group\
      Conakry (Guinea)\
      From November 2017 to May 2018"]
      ,'skills': ["UML modeling","Basic modeling ofrelational data","Analysis and design","software","Programming","Algorithms","Operating system"
        ,"Project management", "Internet", "Cooked"
    ]
      ,'technologies': ["Django",
      'Redux',
      'JQuery',
      'Figma',
      'MongoDB',
      'MySQL',
      'Arduino',
      'React-Native',
      'ReactJS',
      'JEE',
      'NodeJS']
      ,'laguagies': [
        'R',
        'C',
        'C++',
        'C#',
        'JAVA',
        'PYTHON',
        'PHP',
        'SQL',
        'JAVASCRIPT',
        'CSS',
        'HTML']
      ,'socialNetwork': {
          'icons': ['/images/icons/facebook.svg','/images/icons/linkedin.svg','/images/icons/github.svg'],
          'links': ['www.facebook.com/mamadoumouctardiallo.diallo','www.linkedin.com/in/mamadou-mouctar-diallo-480ba61a5','https://github.com/mamadou-mouctar-diallo']
      }
    },
    {
      '_id': '2',
      'name': 'John Snow',
      'title': 'Network programmer and black hacker',
      'image': '/images/image-2.jpeg',
      'description':
         'Goal: Within one month, I will land my first client after organizing a sensible plan for sending out pitches. Specific: Using my network, I will seek out companies in need of my consulting services. Measurable: I will pitch my first three clients within two weeks, aiming to pitch five per week thereafter.',
    },
    {
      '_id': '3',
      'name': 'Brad',
      'title': 'Data Scientist',
      'image': '/images/image-3.jpeg',
      'description':
        'Building the world of tomorrow of technogies is my goal',
    },
    {
      '_id': '4',
      'name': 'Jessica',
      'title': 'Web Backend developer',
      'image': '/images/image-4.jpeg',
      'description':
      'Building the most powerfull API Rest has been always my dreams',
    },
  ]

const mainProfile = document.getElementById('mainProfile')
var row, containerbody, titleInfo, parag, Name, image
    const createComponents = function (){ 
        containerbody = document.createElement('div')
        titleInfo = document.createElement('h5')
        Name = document.createElement('h2')
        parag = document.createElement('p')
        image = document.createElement('img')
        image.setAttribute('class', 'card-img-top')
        parag.setAttribute('class', 'card-text')
        titleInfo.setAttribute('class', 'card-title ')
        containerbody.setAttribute('class', 'card-body')
        row.setAttribute('class', 'card')
        row.style.width = '18rem'
    }
    const personnalInfo = function(container){
        Name.textContent = developers[0].name
        titleInfo.textContent = developers[0].title
        parag.textContent = developers[0].description
        image.setAttribute('src', developers[0].image)
        containerbody.appendChild(Name)
        containerbody.appendChild(titleInfo)
        containerbody.appendChild(parag)
        container.appendChild(image)
        container.appendChild(containerbody)
        return container
    }
    const educationInfo = function(container){
        titleInfo.textContent = "Educations"
        const ul = document.createElement('ul')
        developers[0].eduction.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element
            ul.appendChild(li)
        })
        parag.appendChild(ul)
        container.appendChild(titleInfo)
        container.appendChild(parag)
        return container
    }
    const experenciesInfo = function(container){
        titleInfo.textContent = "Experiencies"
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'expInfo')
        developers[0].expericencies.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element
            ul.appendChild(li)
        })
        parag.appendChild(ul)
        container.appendChild(titleInfo)
        container.appendChild(parag)
        return container
    }

    const skillsInfo = function(container){
        titleInfo.textContent = "Skills"
        const ul = document.createElement('ul')
        developers[0].skills.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element
            ul.appendChild(li)
        })
        parag.appendChild(ul)
        container.appendChild(titleInfo)
        container.appendChild(parag)
        return container
    }

    const languagesInfo = function(container){
        titleInfo.textContent = "Languagies"
        const ul = document.createElement('ul')
        developers[0].laguagies.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element
            ul.appendChild(li)
        })
        parag.appendChild(ul)
        container.appendChild(titleInfo)
        container.appendChild(parag)
        return container
    }
    const techonologiesInfo = function(container){
        titleInfo.textContent = "Technologies"
        const ul = document.createElement('ul')
        developers[0].technologies.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element
            ul.appendChild(li)
        })
        parag.appendChild(ul)
        container.appendChild(titleInfo)
        container.appendChild(parag)
        return container
    }
    const socialNetworkInfo = function(container){
        titleInfo.textContent = "Social Network"
        const social = document.createElement('div')
        for(i = 0 ; i < developers[0].socialNetwork.icons.length; i++){
            const link = document.createElement('a')
            const icon = document.createElement('img')
            icon.setAttribute('src', developers[0].socialNetwork.icons[i])
            link.setAttribute('href', developers[0].socialNetwork.links[i])
            link.appendChild(icon)
            social.appendChild(link)
        }
        container.appendChild(titleInfo)
        container.appendChild(social)
        return container
    }
    row = document.createElement('div')
    createComponents()
    mainProfile.appendChild(personnalInfo(row))
    row = document.createElement('div')
    createComponents()
    row.appendChild(educationInfo(containerbody))
    createComponents()
    row.appendChild(experenciesInfo(containerbody))
    mainProfile.appendChild(row)
    row = document.createElement('div')
    createComponents()
    row.appendChild(skillsInfo(containerbody))
    createComponents()
    row.appendChild(languagesInfo(containerbody))
    mainProfile.appendChild(row)
    row = document.createElement('div')
    createComponents()
    row.appendChild(techonologiesInfo(containerbody))
    createComponents()
    row.appendChild(socialNetworkInfo(containerbody))
    mainProfile.appendChild(row)