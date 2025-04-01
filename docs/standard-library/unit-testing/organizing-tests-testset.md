# Test-sets
`testset` provides another scoped environment that can be used within a `testenv`. A testset is also given a name and test statistics are printed out separately for each testset inside a test environment. For example,
```terra
import "terratest"

testenv "first test environement" do
  local z = 10
  terracode
    var x = 1 
  end
 
  testset "my first testset" do
    terracode
      var y = 2 
    end 
    test x+y+z==13
  end
 
  testset "my second testset" do
    terracode
      var p = 5 
    end 
    test x+z+p==16
  end 
end
```
evaluates to stdout
<pre>
<div class="string">Test Environment: 	first test environement</div><br></br>

<div class="string">testset:		my first testset</div>
<div class="test-passed">    1/1 tests passed</div><br></br>

<div class="string">testset:		my second testset</div>
<div class="test-passed">    1/1 tests passed</div>
</pre>
Both testset blocks reuse the Lua variable `z` and Terra variable `x` defined earlier in the `testenv`. Additionally, each testset introduces its own variables—`y` in the first and `p` in the second—which are scoped locally and accessible only within their respective testset.

:::caution Important
Testset environments are isolated from one another. For example, if `x` were modified in the first testset, that change would not affect the second. This isolation ensures hygienic scoping, preventing unintended interference between testsets.
:::