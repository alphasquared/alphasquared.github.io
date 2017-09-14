$(function () {
  var jqconsole = $('#console').jqconsole('Hi, I\'m Abhishek\nEnter \'abhishek\' to get started. Then try \'?\' for more :)\n', '> ');
  
  function process(input){
	console.log("process called")
    var parsed = input.split(" ");
    switch(parsed[0]){
      case "?":
      case "ls":
      case "help":
        return text.help();
      case "abhishek":
        return text.abhishek;
	    case "allamsetty":
		    return text.allamsetty;
      case "work":
        return text.work();
	    case "sl":
		    return text.sl;
	    case "ssh":
		    return text.ssh;
	    case "cd":
		    return text.cd;
	     case "mkdir":
		    return text.mkdir;
	    case "rmdir":
		    return text.rmdir;
	    case "rm":
		    return text.rm;
	     case "cp":
		    return text.cp;
	    case "mv":
		    return text.mv;
	    case "lpr":
		    return text.lpr;
	     case "man":
		    return text.man;
	    case "python":
		    return text.python;
	    case "python3":
		    return text.python3;
      case "positions":
        return text.positions();
      case "projects":
        return text.projects();
      case "fun":
        return text.fun();
      case "contact":
        return text.contact;
	    case "clear":
		 return text.clear();
      default:
        return text.notRight;
    }
  }

  var startPrompt = function () {
    jqconsole.Prompt(true, function (input) {
      if(input) jqconsole.Write(process(input), 'jqconsole-output', false);
      else jqconsole.Write(text.notRight, 'jqconsole-output');
      startPrompt();
    });
  };

  startPrompt();
});
