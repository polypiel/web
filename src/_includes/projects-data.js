/**
 * Array of active projects
 */
active_projects = ["pickitup", "fairycave", "casataller", "dlp", "fartfighter", "damian", "dblog", "llf", "sp", "kde", "angel"];

/**
 * Each project has the following attributes:
 * @name Project name
 * @category Project category (web, game, ...)
 * @date End date
 * @desc Short description
 * @long-desc Long description
 * @tags List of tags
 * @links List of links (url and text)
 * @images List of images (img, thumb and title)
 */
projects = {
	"pickitup": {
		"name": "Pickitup!",
		"desc": "A personal found coins manager",
		"category": "web-app",
		"date": "Aug 2014",
		"tags": ["ruby on rails", "bootstrap", "heroku"],
		"long_desc": [
			"Pickitup! lets you to hava an register of your found coins. Also, brings the possiblity of having friends recollecting coins for you.",
			"It has been developed in Ruby using Ruby on Rails 4.1 as a web framework. Twitter Bootstrap is used as a HTML5 framework, using responsive design in order to be mobile friendly. Finally, it is deployed on Heroku."
		],
		"links": [
			{"url": "http://pickitup-ror.herokuapp.com", "text": "Pickitup!"},
			{"url": "https://github.com/polypiel/pickitup", "text": "Project", "type": "github"} 
		],
		"images": [{"img": "pickitup01.png", "title": "Coin found registering screen"}]
	},

	"maktub": {
		"name": "Maktub Traducciones",
		"desc": "Professional traslation services web page",
		"category": "web",
		"date": "May 2014",
		"tags": ["responsive"],
		"long_desc": [],
		"links": [
			{"url": "http://maktubtraducciones.com", "title": "Web"}
		],
		"images": []
	},

	"dlp": {
		"name": "DLP",
		"desc": "Web site for a business consulting company.",
		"category": "web",
		"tags": ["wordpress", "responsive"],
		"date": "Dec 2013",
		"long_desc": [
			"The color template uses only black and white to go with the company's logo. In the home page the logo is shown in full size, but in the rest of pages only its bottom part is visible. So saving space for the content.",
			"The page uses Wordpress as backend, so a new theme has been developed from the scratch. Of course, the theme is responsive, so margins, footers, lists... get adapted to multiple widths."
		],
		"links": [{"url": "http://dlpconsultoria.com", "text": "DLP"} ],
		"images": [
			{"img": "dlp01.png", "title": "Home page"},
			{"img": "dlp02.png", "title": "Pavigation page"},
			{"img": "dlp03.png", "title": "Contact page"},
			{"img": "dlp04.png", "title": "Mobile version"},
			{"img": "dlp05.png", "title": "Mobile version with visible menu"}
		]
	},

	"casataller": {
		"name": "Casa taller",
		"category": "web",
		"date": "Dec 2013",
		"desc": "Web site for craft workshops.",
		"long_desc": [
			"Casa Taller is the website for bookbinding (and other crafts) workshops. Following the philosophy of the project the site has a careful minimalistic design. The background shapes a house to match the project's name (<em>casa</em> means house in Spanish.",
			"It's been develop in simple responsive HTML5. The mobile version the background shrinks to half house, so the metaphor is preserved while making the most of the little space. The navigation is made with AJAX, faster and smoother. The static site genterator, Jekyll, has been used in the development."
		],
		"tags": ["responsive", "jekyll"],
		"links": [{"url": "http://casataller.info", "text": "Casa taller"} ],
		"images": [
			{"img": "casa_taller01.png", "title": "Desktop version"},
			{"img": "casa_taller02.png", "title": "Mobile version"},
			{"img": "casa_taller03.png", "title": "Mobile version with visible navigation"}
		]
	},

	"fairycave": {
		"name": "Fairy Cave",
		"category": "web",
		"date": "April 2014",
		"desc": "Fantasy clothing and jewelry website.",
		"long_desc": [
			"The site uses Wordpress as CMS with a theme created from scratch. It's also ready for mobiles and tablets.",
		],
		"tags": ["wordpress", "responsive"],
		"links": [{"url": "http://beta.fairycave.net", "text": "Fairy Cave"} ],
		"images": [
			{"img": "fairycave01.png", "title": "Home page"},
			{"img": "fairycave02.png", "title": "DaWanda shop integration"},
			{"img": "fairycave03.png", "title": "Mobile view"}
		]
	},

	"fartfighter": {
		"name": "Fart Fighter (Remake)",
		"category": "game",
		"date": "In progress",
		"desc": "A Street Fighter alike game, but featuring South Park characters.",
		"long_desc": [
			"Fart Fighter was originally developed in my school days. It's based on South Park's characters Terrance & Phillip. Therefore, they don't kick themselves, they fart.",
			"Currently, I'm porting the game to Javascript. Besides, I'm using Quintus as game engine."
		],
		"tags": ["quintus"],
		"links": [{"url": "https://github.com/polypiel/fart-fighter", "text": "Project", "type": "github"}],
		"images": [
			{"img": "fartfighter01.png", "title": "Game"}
		]
	},

	"dblog": {
		"name": "Damian Flores' Blog",
		"category": "web",
		"date": "Sept 2013",
		"desc": "A Wordpress theme for a personal blog.",
		"long_desc": [
			"The blog is kind of an experiment which uses Wingdings font as a building block. Images, bars, buttons... are formed with random Wingdings glyphs."
		],
		"tags": ["wordpress", "wingdings"],
		"links": [{"url": "http://damianflores.es/blog/", "text": "Web page"} ],
		"images": [
			{"img": "dblog01.png", "title": "Home page"},
			{"img": "dblog02.png", "title": "Post entry page"}
		]
	},

	"damian": {
		"name": "Damian Flores' Site",
		"desc": "Portfolio of the graphical designer Damian Flores.",
		"category": "web",
		"tags": ["handlebars"],
		"date": "Oct 2013",
		"long_desc": [
			"The web is the portfolio and CV of Damian Flores, a graphical designer based in London.",
			"Ajax is used for navigation, so it's a SPI (Single Page Interface) web. All the data is stored in JSON format, and Handlebars template system is used to build the pages."
		],
		"links": [{"url": "http://damianflores.es/", "text": "Web page"} ],
		"images": [
			{"img": "damian01.png", "title": "Home page"},
			{"img": "damian02.png", "title": "Portfolio page"},
			{"img": "damian03.png", "title": "Project page"},
			{"img": "damian04.png", "title": "About page"}

		]
	},

	"sp": {
		"name": "SuperPalitos",
		"desc": "A classic paper and pencil game developed in Java.",
		"category": "game",
		"tags": ["java", "swing"],
		"date": "2007",
		"long_desc": [
			"The game consists in crossing, in turns, any number of sticks in a row. The player who gets the last stick loses.",
			"The game is coded in Java and uses Swing for the GUI. It features, an AI opponent, and the option to play versus other remote players. Recently, I refactored the code based and I moved the project to GitHub."
		],
		"links": [
			{"url": "https://github.com/polypiel/superpalitos", "text": "Github", "type": "github"},
			{"url": "https://sites.google.com/site/superpalitos/", "text": "Web page"}
		],
		"images": [
			{"img": "sp01.png", "title": "Title screen"},
			{"img": "sp02.png", "title": "Options screen"},
			{"img": "sp03.png", "title": "Game"}
		]
	},

	"llf": {
		"name": "La Liga Fanática",
		"category": "web",
		"date": "2012-2013",
		"desc": "Collaborations in fantasy football manager game.",
		"long_desc": [
			"La Liga Fanática is a fantasy football manager based in the Spanish Football League (La Liga).",
			"My role in the project as collaborator consists in improving the usability of the site. Apart from proposing UX changes, I was in charge of developing them."
		],
		"tags": ["php", "codeignition", "bootstrap"],
		"links": [{"url": "http://laligafanatica.es/", "text": "Web page"}],
		"images": [
			{"img": "llf01.png", "title": "General table page"},
			{"img": "llf02.png", "title": "Team page"},
			{"img": "llf03.png", "title": "League page"},
			{"img": "llf04.png", "title": "Home page"}
		]
	},

	"kde": {
		"name": "KDE Widgets",
		"category": "widget",
		"date": "2007",
		"desc": "Some widgets for KDE desktop",
		"long_desc": [
			"<strong>Last.sk</strong> shows information about a Last.fm account.",
			"<strong>SKFortune</strong> just shows an quote from Fortune command.",
			"<strong>kpod</strong> is a very simply Amarok player that looks like ipod shuffle."
		],
		"tags": ["kde", "superkaramba"],
		"links": [
			{"url": "http://kde-look.org/content/show.php/Last.sk?content=51167", "text": "Last.sk Page"},
			{"url": "http://code.google.com/p/lastsk/", "text": "Last.sk Google Project"},
			{"url": "http://kde-look.org/content/show.php/SKFortune?content=46458", "text": "SKFortune Page"},
			{"url": "http://kde-look.org/content/show.php/kpod?content=68256", "text": "kpod"}
		],
		"images": [
			{"img": "sk01.png","title": "Last.sk screenshot"},
			{"img": "sk02.png", "title": "Last.sk screenshot"}
		]
	},

	"angel": {
		"name": "My personal web",
		"category": "web",
		"tags": ["responsive", "jekyll", "handlebars"],
		"date": "Feb 2014",
		"desc": "This web (this is meta).",
		"long_desc": [
			"This web has been developed with Jekyll, Handlebars, SASS. It has a responsive layout in which the sidebar changes to the top of the page in samll screens.",
			"The source is available in GitHub."
		],
		"links": [
			{"url": "https://github.com/polypiel/web", "text": "Github", "type": "github"}
		],
		"images": [
			{"img": "angel01.png", "title": "Desktop version"},
			{"img": "angel02.png", "title": "Tablet version"},
			{"img": "angel03.png", "title": "Mobile version"}
		]
	}
}
