# Test-environments
Although tests can be used directly inline as shown above, it is useful to organize them inside a scoped environment called `testenv`. This environement keeps track of some test statistics, which get printed to stdout. Here is an example
```terra
import "terratest"           
   
local a = 1  
local b = 3  
   
testenv "my test environement" do
  local c = 10
  terracode   
    var x = 1
    var y = 2
  end
  test a*b==3
  test a*b==4 --false
  test a+b+c==14
  test a+b+c==15 --false
  test a+b+c==x+y+11
end 
```
To evaluate the tests in the testenvironment, you need to run terra with the command-line-option `--test` or `-t`
```
terra test3.t --test
```
which prints out
<pre>
<div class="string">Test Environment: 	my test environement</div><br></br>

<div class="string">inline tests:</div>
<div class="test-passed">    3/5 tests passed</div>
<div class="test-failed">    2/5 tests failed</div><br></br>

<div class="test-failed">    test failed in test3.t, linenumber 13</div>
<div class="test-failed">    test failed in test3.t, linenumber 15</div>
</pre>

Notice that the test environment is given a name, which gets printed to stdout. Lua variables may be directly declared and terra variables are declared inside a `terracode` block, which is just a collection of terra statements, not scoped environement. Notice that terra variables and lua variables may be logically combined and that lexical scoping rules apply.

:::caution Important
Test-environments are isolated from one another preventing unintended interference between tests.
:::