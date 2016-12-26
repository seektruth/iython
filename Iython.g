grammar Iython;

statements: statement ('\n' statement)*;

statement: expression[0] | atom | assign | def | call | assoc | access | forloop | lambda | ifstat | whilestat;

expression[int pr]: atom  
                ( {5 >= $pr}? '*' expression[6]
                | {5 >= $pr}? '/' expression[6]
                | {5 >= $pr}? '%' expression[6]
                | {4 >= $pr}? '+' expression[5]
                | {4 >= $pr}? '-' expression[5]
                | {3 >= $pr}? '>' expression[4]
                | {3 >= $pr}? '<' expression[4]
                | {3 >= $pr}? '>=' expression[4]
                | {3 >= $pr}? '<=' expression[4]
                | {2 >= $pr}? '==' expression[3]
                | {2 >= $pr}? '!=' expression[3]
                | {1 >= $pr}? 'and' expression[2]
                | {1 >= $pr}? 'or' expression[2]
               )*;

def : 'def' NAME args 'begin' '\n' 
         statements '\n' 'end';

args : '()' | ('(' NAME (',' NAME)* (',' defaultarg)* ')');

defaultarg : NAME '=' atom ; 

assign : NAME '=' statement ;

atom : INT | STRING | NAME | list | dict;

forloop : 'for' NAME 'in' statement 'begin' '\n'
    statements '\n' 'end';

list : '[]' | ('[' atom (',' atom)* ']');

dict : '{}' | ('{' atom ':' atom (',' atom ':' atom)* '}');

assoc : atom '[' atom ']' '=' statement; 

access : atom '[' atom ']';

call : NAME  ('()' | ('(' statement (',' statement)* ')'));

lambda : args '->' '{' statements '}';

ifstat : 'if' statement 'begin' '\n'
            statements '\n' 'end' 
          elseif* elsestat?;

elseif : 'elif' statement 'begin' '\n'
            statements '\n' 'end';

elsestat : 'else' 'begin' '\n'
            statements '\n' 'end';

whilestat : 'while' statement 'begin' '\n'
            statements '\n' 'end';

COMMENT : '#'.*?'\n' -> skip;
INT: [0-9]+;
STRING: '\"'.*?'\"';
NAME: [a-z]+;
WS: [ '\t''\r']+ -> skip;