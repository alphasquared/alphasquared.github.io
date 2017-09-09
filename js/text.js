var text = {
	helpGreeting: function(){
		var random = Math.floor((Math.random() * 3) + 1);
		console.log(random);
		switch(random){
			case 1:
				return "What's up?";
			case 2:
				return "Nice to meet you!"
			case 3:
				return "What it do?"
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
	notRight: "Oops, that's not a valid command... try '?'\n",
    abhishek: "Student, researcher, software engineer, ~ tennis player, hopeful entrepreneur\n"
         + "@TJHSST\n"
		 + "Check out my <a href='https://www.github.com/alphasquared/'>GitHub</a>!\n\n"
		 + "Add me on <a href='https://www.facebook.com/abhishekallamsetty/'>Facebook</a>!\n\n"
         + "Follow me on <a href='https://www.instagram.com/allamsettyabhishek/'>Instagram</a>!\n\n"
		 + "Connect with me on <a href='https://www.linkedin.com/in/abhishekallamsetty'>LinkedIn</a>!\n"
         + "Check out my 'work' or 'projects' for more info.\n",

	workObj: [
    {
      name: "Research Intern",
      company: "Johns Hopkins Data Science Lab",
      url: "http://jhudatascience.org/",
      time: "Summer 2017"
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
	positionsObj: [

    {
      position: "Officer",
      organization: "Physics Team",
      url: "https://activities.tjhsst.edu/physics/"
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
      organization: "Science Olympiad Team",
      url: "https://www.tjhsst.edu/students/activities/scienceolympiad/index.html"
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
      url: "",
      description: "Conducted data science/physics research concerning computational and solid state physics. Developed a statistical algorithm to accurately and rapidly predict properties caused by many body electronic excitations on the surfaces of various topologically superconducting materials. Classified optimal materials and theoretically predicted surface states through computational modeling of quantum physical interactions for the possible future development of fault-tolerant quantum computational systems."
    },
    {
      name: "MoneyCat",
      url: "https://devpost.com/software/moneycat",
	  //accolade: "Category Prize Winner @ HackTJ"
      description: "A region-stratified database of sales and transaction statistics for businesses."	
    },
	{
      name: "MoneyCat",
      url: "https://devpost.com/software/spot-for-spotify",
	  //accolade: "Best Beginner Hack @ HackTJ"
      description: "Lightweight web application that creates a custom Spotify playlist from sentence input."	
    },
    {
      name: "GitHub",
      url: "http://github.com/alphasquared",
      description: "Look at all of my open source projects"
    }
	],
	projects: function(){
		var output = "Some stuff I've worked on (some are part of my work experience):\n\n";

		this.projObj.forEach(function(item){
			output += "\t"
			+ "<a href='"
			+ item.url
			+ "'>"
			+ item.name
			+ "</a>\n"
			+ "\t  "
			//+ item.accolade
			//+ "</a>\n"
			//+ "\t  "
			+ item.description
			+ "\n\n";
		});

		return output;
	},
	fun: function(){
		var facts = [
			"I can understand Telugu",
			"I can understand Russian",
			"I like to play tennis.",
			"I enjoy baking in my free time.",
      "Favorite Book: Surely You're Joking, Mr. Feynman! by Richard Feynman", 
		];

		var random = Math.floor((Math.random() * facts.length));
		return facts[random] + '\n';
	},
	contact: "say hey <a href='mailto:allamsettyabhishek@gmail.com'>here</a>\n"
}
