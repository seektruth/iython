var antlr4 = require('./antlr4/index.js');
var Lexer = require('./IythonLexer.js');
var Parser = require('./IythonParser.js');
var Interpreter = require('./Interpreter.js')


run = function(program){
    var inter = new Interpreter.Interpreter()
    try{
        var chars = new antlr4.InputStream(program);
        var lexer = new Lexer.IythonLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new Parser.IythonParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.statements();
        var re = inter.visit(tree);
         
    }
    catch(error){
        console.log(error.message);
        inter.outBuffer += error.message;
    }
    finally{
        var out = inter.outBuffer; 
        return out;
    }
}





