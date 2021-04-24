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

// Only if loaded file is index.html
const devInfo = document.getElementById('devInfo')
for(i = 0; i < developers.length; i ++){
    const row = document.createElement('div')
    const containerbody = document.createElement('div')
    const title = document.createElement('h5')
    const name = document.createElement('h2')
    name.textContent = developers[i].name
    const parag = document.createElement('p')
    const btn = document.createElement('button')
    parag.setAttribute('class', 'card-text')
    btn.setAttribute('disabled', true)
    btn.textContent = "View profile"
    btn.setAttribute('class', 'btn btn-primary')
    parag.textContent = developers[i].description
    title.textContent = developers[i].title
    title.setAttribute('class', 'card-title ')
    containerbody.setAttribute('class', 'card-body')
    containerbody.appendChild(name)
    containerbody.appendChild(title)
    containerbody.appendChild(parag)
    containerbody.appendChild(btn)
    row.setAttribute('id', developers[i]._id)
    row.setAttribute('class', 'card')
    row.style.width = '18rem'
    const image = document.createElement('img')
    image.setAttribute('src', developers[i].image)
    image.setAttribute('class', 'card-img-top')
    row.appendChild(image)
    row.appendChild(containerbody)
    devInfo.appendChild(row)
devInfo.firstElementChild.lastElementChild.lastElementChild.disabled = false
var btnEvent = devInfo.firstElementChild.lastElementChild.lastElementChild
const eventHandler = function(event, click){
    event.preventDefault() 
    window.location.pathname = '/profile.html'
}
btnEvent.addEventListener('click', event => eventHandler(event))
}
