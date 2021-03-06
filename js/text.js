var text = {
	helpGreeting: function(){
		var random = Math.floor((Math.random() * 12) + 1);
		console.log(random);
		switch(random){
			case 1:
				return "What's up?";
			case 2:
				return "Nice to meet you!"
			case 3:
				return "What it do?"
			case 4:
				return "Namaste!"
			case 5: 
				return "Здравствуйте!"
			case 6:
				return "你好!"
			case 7:
				return "హలో!"
			case 8:
				return "こんにちは!"
			case 9:
				return "नमस्ते!"
			case 10:
				return "Bonjour!"
			case 11:
				return "¡Hola!"
			case 12:
				return "How's it hangin'?"
		}
	},
	help: function() {
		return this.helpGreeting() + "\n\n" 
		+ "Try one of the following commands:\n\n"
		+ "\tabhishek: a little about me\n\n" 
		+ "\twork: my work experience and positions i've held\n\n"
		+ "\tpositions: leadership stuff\n\n"
		+ "\tprojects: some projects\n\n"
		+ "\tfun: fun fact\n\n"
		+ "\tcontact: say hey\n"
	},
	
	sl: "🚂🚂🚂\n\n",
	ssh: "☁️🖥️\n\n",
	cd: "💿💿💿... hehe\n\n",
	mkdir: "🔧⚙️🗜️⚖️⚗️\n\n",
	rmdir: "🔪🔫💣⚔️🏹\n\n",
	rm: "⚡☠️😷\n\n",
	cp: "✂️📋\n\n",
	mv: "🅰️➡️🅱️\n\n",
	lpr: "🖨️🖨️🖨️\n\n",
	man: "🆘ℹ️💁\n\n",
	python: "🐍\n\n",
	python3: "🐍🐍🐍\n\n",
	rich:"larry",
	
	notRight: "Oops, that's not a valid command... try '?'\n",
    abhishek: "\nStudent, researcher, developer, and questionable tennis player.\n\n"
         + "@TJHSST\n\n"
		 + "Check out my <a href='https://www.github.com/alphasquared/'>GitHub</a>!\n"
		 + "Add me on <a href='https://www.facebook.com/abhishekallamsetty/'>Facebook</a>!\n"
		 + "Follow me on <a href='https://www.instagram.com/abhishek.allamsetty/'>Instagram</a>!\n"
		 + "Connect with me on <a href='https://www.linkedin.com/in/abhishekallamsetty'>LinkedIn</a>!\n\n"
         + "Check out my 'work' or 'projects' for more info.\n",
	
    allamsetty: "\n.reyalp sinnet elbanoitseuq ,reenigne erawtfos ,rehcraeser ,tnedutS\n\n"
         + "TSSHJT@\n\n"
		 + "!ym tuo kcehC <a href='https://www.github.com/alphasquared/'>buHtiG</a>\n"
		 + "!no em ddA <a href='https://www.facebook.com/abhishekallamsetty/'>koobecaF</a>\n"
		 + "!no em htiw tcennoC <a href='https://www.linkedin.com/in/abhishekallamsetty'>nIdekniL</a>\n\n"
         + ".ofni erom rof 'stcejorp' ro 'krow' ym tuo kcehC\n",

	workObj: [
		{
			name: "Research Intern",
			company: "Condensed Matter Theory Center and Joint Quantum Institute, UMD Department of Physics",
			url: "http://jqi.umd.edu",
			time: "Summer 2018"
		},
    {
      name: "Research Intern",
      company: "Johns Hopkins Applied Physics Laboratory",
      url: "http://www.jhuapl.edu",
      time: "Summer 2017"
    },
    {
      name: "Explainer",
      company: "Smithsonian National Air and Space Museum - Steven F. Udvar-Hazy Center ",
      url: "https://airandspace.si.edu/udvar-hazy-center",
      time: "Summer 2015 - Present, during Spring and Winter Breaks"
    },	

	],
	work: function(){
		var output = "My work exp:\n\n";
		this.workObj.forEach(function(item){
			output += ("\t" 
				+ item.name 
				+  " @ <a href='" 
				+ item.url
				+ "'>" 
				+ item.company 
				+ "</a>" 
				+ "\n\n");
		});

		return output;
	},
	
	clear: function()	{
		location.reload();
	},
	
	positionsObj: [

    {
      position: "Captain",
      organization: "Physics Team",
      url: "https://activities.tjhsst.edu/physics/"
    },
	{
		position: "Co-Founder and CTO",
		organization: "Surf Safe",
		url: "surfsafe.github.io"
	},
    {
      position: "Officer",
      organization: "TJIOI",
      url: "https://activities.tjhsst.edu/tjioi/"
    },
    {
      position: "Member",
      organization: "Varsity Math Team",
      url: "https://activities.tjhsst.edu/vmt/"
    },
    {
      position: "Member",
      organization: "Senior Computer Team",
      url: "https://activities.tjhsst.edu/sct/"
    },
    {
      position: "Member",
      organization: "Machine Learning Club",
      url: "http://tjmachinelearning.com/"
    },
    {
      position: "Member",
      organization: "Computer Security Club",
      url: "https://activities.tjhsst.edu/csc/"
    }
	],
	positions: function(){
		var output = "positions:\n\n";
		this.positionsObj.forEach(function(item){
			output += ("\t" 
				+ item.position 
				+  " of <a href='" 
				+ item.url
				+ "'>" 
				+ item.organization 
				+ "</a>" 
				+ "\n\n");
		});
		return output;
	},
	projObj: [
    {
      name: "Procedural Determination of Novel Stoichiometric Topological Superconductors through Surface and Pressure Effects",
      url: "https://www.researchgate.net/profile/Abhishek_Allamsetty",
	    description: "Siemens Competition National Semifinalist, ISEF International Finalist, and ISEF Grand and Special Award Winner"
    },
    {
      name: "Physics Team Website",
      url: "https://tjphysicsteam.com",
	    description: "Developed an all new, modern, and responsive website for TJ Physics Team from the ground up.\n",
    },	
    {
      name: "Stay Woke",
      url: "https://devpost.com/software/woke",
	    description: "[Most Unique Hack @PennAppsXVI] - An Arduino that utilizes machine learning detect when you are falling asleep at the wheel.\n",
    },
    {
      name: "MoneyCat",
      url: "https://devpost.com/software/moneycat",
	    description: "[Category Prize Winner @HackTJ] - A region-stratified database of sales and transaction statistics for businesses.\n",
    },
	{
      name: "Spot for Spotify",
      url: "https://devpost.com/software/spot-for-spotify",
      description: "Lightweight web application that creates a custom Spotify playlist from sentence input.\n"
    },
    {
      name: "GitHub",
      url: "http://github.com/alphasquared",
      description: "Look at all of my open source projects."
    }
	],
	projects: function(){
		var output = "Some stuff I've worked on:\n\n";

		this.projObj.forEach(function(item){
			output += "\t"
			+ "<a href='"
			+ item.url
			+ "'>"
			+ item.name
			+ "</a>\n"
			+ "\t  "
			+ item.description
			+ "\n\n";
		});

		return output;
	},
	fun: function(){
		var facts = [
			"I can understand Telugu.",
			"I can understand Russian.",
			"I like to play tennis.",
			"I like to bicycle various places",
			"I am 6'3''.",
			"Apple pie is the greatest thing invented by man."
			"My birthday is on the same date that the Berlin Wall fell.",
			"My birthday is on the same date that Donald Trump was elected POTUS...",
			"Add me on Snapchat: alphasquared",
			"Favorite Novel: 'Flatland' by Edwin A. Abbott.",
			"This website was fully built during PennApps XVI.",
			"I enjoy baking in my free time.", 
			"My favorite artists atm Frank Ocean, Radiohead, and Tyler the Creator",
			"My favorite song is Videotape by Radiohead",
      "Favorite Non-Fiction Book: 'Surely You're Joking, Mr. Feynman!' by Richard Feynman", 
		];

		var random = Math.floor((Math.random() * facts.length));
		return facts[random] + '\n';
	},
	contact: "say hey <a href='mailto:allamsettyabhishek@gmail.com'>here</a>\n"
}
