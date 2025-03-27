;; Keywords

"return" @keyword.return

[
 "goto"
 "in"
 "local"
] @keyword

(label_statement) @label

(break_statement) @keyword

(do_statement
[
  "do"
  "end"
] @keyword)

(while_statement
[
  "while"
  "do"
  "end"
] @repeat)

(repeat_statement
[
  "repeat"
  "until"
] @repeat)

(if_statement
[
  "if"
  "elseif"
  "else"
  "then"
  "end"
] @conditional)

(elseif_statement
[
  "elseif"
  "then"
  "end"
] @conditional)

(else_statement
[
  "else"
  "end"
] @conditional)

(for_statement
[
  "for"
  "do"
  "end"
] @repeat)

(function_declaration
[
  "function"
  "end"
] @keyword.function)

(function_definition
[
  "function"
  "end"
] @keyword.function)

;; Operators

[
 "and"
 "not"
 "okeyword.operatorr"
] @

[
  "+"
  "-"
  "*"
  "/"
  "%"
  "^"
  "#"
  "=="
  "~="
  "<="
  ">="
  "<"
  ">"
  "="
  "&"
  "~"
  "|"
  "<<"
  ">>"
  "//"
  ".."
] @operator

;; Punctuations

[
  ";"
  ":"
  ","
  "."
] @punctuation.delimiter

;; Brackets

[
 "("
 ")"
 "["
 "]"
 "{"
 "}"
] @punctuation.bracket

;; Variables

(identifier) @variable

((identifier) @variable.builtin
 (#eq? @variable.builtin "self"))

(variable_list
  (attribute
    "<" @punctuation.bracket
    (identifier) @attribute
    ">" @punctuation.bracket))

;; Constants

((identifier) @constant
 (#match? @constant "^[A-Z][A-Z_0-9]*$"))

(vararg_expression) @constant

(nil) @constant.builtin

[
  (false)
  (true)
] @boolean

;; Tables

(field name: (identifier) @field)

(dot_index_expression field: (identifier) @field)

(table_constructor
[
  "{"
  "}"
] @constructor)

;; Functions

(parameters (identifier) @parameter)

(function_declaration
  name: [
    (identifier) @function
    (dot_index_expression
      field: (identifier) @function)
  ])

(function_declaration
  name: (method_index_expression
    method: (identifier) @method))

(assignment_statement
  (variable_list .
    name: [
      (identifier) @function
      (dot_index_expression
        field: (identifier) @function)
    ])
  (expression_list .
    value: (function_definition)))

(table_constructor
  (field
    name: (identifier) @function
    value: (function_definition)))

(function_call
  name: [
    (identifier) @function.call
    (dot_index_expression
      field: (identifier) @function.call)
    (method_index_expression
      method: (identifier) @method.call)
  ])

(function_call
  (identifier) @function.builtin
  (#any-of? @function.builtin
    ;; built-in functions in Lua 5.1
    "assert" "collectgarbage" "dofile" "error" "getfenv" "getmetatable" "ipairs"
    "load" "loadfile" "loadstring" "module" "next" "pairs" "pcall" "print"
    "rawequal" "rawget" "rawset" "require" "select" "setfenv" "setmetatable"
    "tonumber" "tostring" "type" "unpack" "xpcall"))

;; Others

(comment) @comment

(hash_bang_line) @preproc

(number) @number

((string) content: (_)@string)






(quote_expression
[
  "quote"
  "in"
  "end"
] @keyword)

(terra_function_declaration
[
  "terra"
  "end"
] @keyword.function)

(terra_function_definition
[
  "terra"
  "end"
] @keyword.function)

(terra_function_implementation
[
  "terra"
  "end"
] @keyword.function)

(escape_statement
[
  "escape"
  "end"
] @keyword)

"defer" @keyword
"emit" @keyword
"var" @keyword
"union" @keyword
"struct" @keyword

(primitive_type) @type

"@" @operator




















; Lua Functions
(function_declaration ["function" "end"] @keyword.function
    name: (identifier) @identifier.function)


(parameters (identifier) @identifier)

;; Terra Functions
(terra_function_implementation ["terra" "end"] @keyword.terra)
(terra_function_implementation
    name: (identifier) @identifier.function
    parameters: (terra_function_parameters))

;; Terra Parameters
(terra_function_parameters
  name: (identifier) @identifier
  type: (identifier) @identifier.type*)

;; Keywords
"return" @keyword
"defer" @keyword
"emit" @keyword
"var" @keyword
"union" @keyword
"struct" @keyword
["goto" "in" "local"] @keyword


;; Operators (basic set for now)
["+" "-" "*" "/" "="] @operator

;; Punctuation
[";" ":" "," "."] @punctuation.delimiter
["(" ")" "[" "]" "{" "}"] @punctuation.bracket
