# Introduction into metaproramming

Starting with `C`, many programming languages have support for multistage
or metaprogramming. This means that there is a second language, usually with
destinct syntax, that is interpretered _before_ the the main language.
For `C` this is the preprocessor. It is a simple text replacement
mechanism that allows to automatically generate code. A simple example is

```C
#define MSG "Hello World!"
#include <stdio.h>

int main()
{
  printf(MSG"\n");
}
```
This generates the output
```bash
Hello World!
```
