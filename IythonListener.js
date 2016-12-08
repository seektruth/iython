// Generated from Iython.g by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by IythonParser.
function IythonListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

IythonListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
IythonListener.prototype.constructor = IythonListener;

// Enter a parse tree produced by IythonParser#statements.
IythonListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by IythonParser#statements.
IythonListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by IythonParser#statement.
IythonListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by IythonParser#statement.
IythonListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by IythonParser#expression.
IythonListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by IythonParser#expression.
IythonListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by IythonParser#def.
IythonListener.prototype.enterDef = function(ctx) {
};

// Exit a parse tree produced by IythonParser#def.
IythonListener.prototype.exitDef = function(ctx) {
};


// Enter a parse tree produced by IythonParser#args.
IythonListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by IythonParser#args.
IythonListener.prototype.exitArgs = function(ctx) {
};


// Enter a parse tree produced by IythonParser#assign.
IythonListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by IythonParser#assign.
IythonListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by IythonParser#atom.
IythonListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by IythonParser#atom.
IythonListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by IythonParser#forloop.
IythonListener.prototype.enterForloop = function(ctx) {
};

// Exit a parse tree produced by IythonParser#forloop.
IythonListener.prototype.exitForloop = function(ctx) {
};


// Enter a parse tree produced by IythonParser#list.
IythonListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by IythonParser#list.
IythonListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by IythonParser#dict.
IythonListener.prototype.enterDict = function(ctx) {
};

// Exit a parse tree produced by IythonParser#dict.
IythonListener.prototype.exitDict = function(ctx) {
};


// Enter a parse tree produced by IythonParser#assoc.
IythonListener.prototype.enterAssoc = function(ctx) {
};

// Exit a parse tree produced by IythonParser#assoc.
IythonListener.prototype.exitAssoc = function(ctx) {
};


// Enter a parse tree produced by IythonParser#access.
IythonListener.prototype.enterAccess = function(ctx) {
};

// Exit a parse tree produced by IythonParser#access.
IythonListener.prototype.exitAccess = function(ctx) {
};


// Enter a parse tree produced by IythonParser#call.
IythonListener.prototype.enterCall = function(ctx) {
};

// Exit a parse tree produced by IythonParser#call.
IythonListener.prototype.exitCall = function(ctx) {
};


// Enter a parse tree produced by IythonParser#lambda.
IythonListener.prototype.enterLambda = function(ctx) {
};

// Exit a parse tree produced by IythonParser#lambda.
IythonListener.prototype.exitLambda = function(ctx) {
};


// Enter a parse tree produced by IythonParser#ifstat.
IythonListener.prototype.enterIfstat = function(ctx) {
};

// Exit a parse tree produced by IythonParser#ifstat.
IythonListener.prototype.exitIfstat = function(ctx) {
};


// Enter a parse tree produced by IythonParser#elseif.
IythonListener.prototype.enterElseif = function(ctx) {
};

// Exit a parse tree produced by IythonParser#elseif.
IythonListener.prototype.exitElseif = function(ctx) {
};


// Enter a parse tree produced by IythonParser#elsestat.
IythonListener.prototype.enterElsestat = function(ctx) {
};

// Exit a parse tree produced by IythonParser#elsestat.
IythonListener.prototype.exitElsestat = function(ctx) {
};


// Enter a parse tree produced by IythonParser#whilestat.
IythonListener.prototype.enterWhilestat = function(ctx) {
};

// Exit a parse tree produced by IythonParser#whilestat.
IythonListener.prototype.exitWhilestat = function(ctx) {
};



exports.IythonListener = IythonListener;