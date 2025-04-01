;; Keywords

"return" @keyword.return

;; Operators

(nil) @constant.builtin

[
  (false)
  (true)
] @boolean

[
 "and"
 "not"
] @keyword.operator

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

; Punctuations

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

;; Others

(comment)@comment

[
    "--"
]@comment
(comment content: (comment_content)@comment)

(hash_bang_line) @preproc

(number) @number


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

(for_statement
[
  "for"
  "do"
  "end"
] @repeat)

(while_statement
[
  "while"
  "do"
  "end"
] @repeat)


(test_statement
[
    "test"
] @test)

(terracode_statement
[
  "terracode"
  "end"
] @terracode)

(testenv_statement
[
  "testenv"
  "do"
  "end"
] @testenv)

(testset_statement
[
  "testset"
  "do"
  "end"
] @testset)

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


;; Terra rules

(quote_expression ["quote" "in" "end"] @keyword)

(terra_function_declaration["terra" "end"] @keyword.terra)

(terra_function_definition["terra" "end"] @keyword.terra)

(terra_function_implementation["terra" "end"] @keyword.terra)

(terra_function_implementation
  name: (identifier) @identifier.terra)

(terra_function_parameters
    type: (identifier)@identifier.type)

(terra_function_parameters
    name: (identifier)@identifier.name)


(escape_statement
[
  "escape"
  "end"
] @keyword)

"defer" @keyword
"emit" @keyword
"var" @keyword
"union" @keyword
"struct" @keyword.struct

(primitive_type) @type

"@" @operator

(string)@string

[
    "\""
]
@string

(string content: (string_content (escape_sequence)@string)@string)