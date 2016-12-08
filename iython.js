var antlr4 = require('./antlr4/index.js');
var Lexer = require('./IythonLexer.js');
var Parser = require('./IythonParser.js');
var Interpreter = require('./Interpreter.js')

var program = `a = 0
               while a<10 begin
                    print(a)
                    a = a + 1
               end`

var inter = new Interpreter.Interpreter()

try{
    var chars = new antlr4.InputStream(program);
    var lexer = new Lexer.IythonLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new Parser.IythonParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.statements();
    var re = inter.visit(tree);
    //console.log(re)   
}
catch(error){
    console.log(error.message)
}
//console.log(inter.rootScope);
   

var printTree = function(tree,intent){
    console.log(intent+tree.getText());
    for(var i=0; i<tree.getChildCount();i++){
        printTree(tree.getChild(i),intent+"  ");
    }
}

//printTree(tree,"");