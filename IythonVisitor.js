// Generated from Iython.g by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by IythonParser.

function IythonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

IythonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
IythonVisitor.prototype.constructor = IythonVisitor;

// Visit a parse tree produced by IythonParser#statements.
IythonVisitor.prototype.visitStatements = function(ctx) {
};


// Visit a parse tree produced by IythonParser#statement.
IythonVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by IythonParser#expression.
IythonVisitor.prototype.visitExpression = function(ctx) {
};


// Visit a parse tree produced by IythonParser#def.
IythonVisitor.prototype.visitDef = function(ctx) {
};


// Visit a parse tree produced by IythonParser#args.
IythonVisitor.prototype.visitArgs = function(ctx) {
};


// Visit a parse tree produced by IythonParser#defaultarg.
IythonVisitor.prototype.visitDefaultarg = function(ctx) {
};


// Visit a parse tree produced by IythonParser#assign.
IythonVisitor.prototype.visitAssign = function(ctx) {
};


// Visit a parse tree produced by IythonParser#atom.
IythonVisitor.prototype.visitAtom = function(ctx) {
};


// Visit a parse tree produced by IythonParser#forloop.
IythonVisitor.prototype.visitForloop = function(ctx) {
};


// Visit a parse tree produced by IythonParser#list.
IythonVisitor.prototype.visitList = function(ctx) {
};


// Visit a parse tree produced by IythonParser#dict.
IythonVisitor.prototype.visitDict = function(ctx) {
};


// Visit a parse tree produced by IythonParser#assoc.
IythonVisitor.prototype.visitAssoc = function(ctx) {
};


// Visit a parse tree produced by IythonParser#access.
IythonVisitor.prototype.visitAccess = function(ctx) {
};


// Visit a parse tree produced by IythonParser#call.
IythonVisitor.prototype.visitCall = function(ctx) {
};


// Visit a parse tree produced by IythonParser#lambda.
IythonVisitor.prototype.visitLambda = function(ctx) {
};


// Visit a parse tree produced by IythonParser#ifstat.
IythonVisitor.prototype.visitIfstat = function(ctx) {
};


// Visit a parse tree produced by IythonParser#elseif.
IythonVisitor.prototype.visitElseif = function(ctx) {
};


// Visit a parse tree produced by IythonParser#elsestat.
IythonVisitor.prototype.visitElsestat = function(ctx) {
};


// Visit a parse tree produced by IythonParser#whilestat.
IythonVisitor.prototype.visitWhilestat = function(ctx) {
};



exports.IythonVisitor = IythonVisitor;