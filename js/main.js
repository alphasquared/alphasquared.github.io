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
      case "work":
        return text.work();
      case "positions":
        return text.positions();
      case "projects":
        return text.projects();
      case "fun":
        return text.fun();
      case "contact":
        return text.contact;
	    case "clear":
		    return clear();
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
