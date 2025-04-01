# Parameterized testing
Consider the following `Vector` class:
```terra
SVector = terralib.memoize(function(T,N)
    local struct Vector{
        _data : T[N]
    }  
    local Class = {}
    Class.Vector = Vector
 
    terra Vector:size() : int
        return N 
    end
       
    Vector.metamethods.__apply = macro(function(self,idx)
        return `self._data[idx]
    end)
       
    terra Class.fill(a : T) : Vector
        var v : Vector
        for i = 0,N do
            v(i) = a
        end
        return v
    end
    return Class
end)
```

A set of tests could look as follows:

```terra
import "terratest" -- using the terra unit test library
       
testenv "Vector implementation" do
    
    local N = 3
    local T = int32

    testset "fill" do
      local SVec = SVector(T,N)                      
      terracode                              
        var y = SVec.fill(3)
      end
      test y:size()==N
      for i=0,N-1 do          
        test y(i)==T(3)
      end
    end

end --testenv
```

Testing multiple vector sizes and element types in a single test suite would make it far more effective. This can be easily achieved by parameterizing the test suite described above. There are several approaches to accomplish this. One method is to parameterize only the testset blocks within a `testenv`:
```terra
import "terratest" -- using the terra unit test library
       
testenv "Vector implementation" do
  
for _,T in pairs{int32,int64} do
  for N=2,3 do  

    --parameterized testset      
    testset(N,T) "fill" do
      local SVec = SVector(T,N)                      
      terracode                              
        var y = SVec.fill(3)
      end
      test y:size()==N
      for i=0,N-1 do          
        test y(i)==T(3)
      end
    end

  end
end

end --testenv
```
which prints out the following test results
<pre>
<div class="string">Test Environment: 	Vector implementation</div><br></br>

<div class="string">testset:		fill(N=2,T=int32)</div>
<div class="test-passed">    3/3 tests passed</div><br></br>

<div class="string">testset:		fill(N=3,T=int32)</div>
<div class="test-passed">    4/4 tests passed</div><br></br>

<div class="string">testset:		fill(N=2,T=int64)</div>
<div class="test-passed">    3/3 tests passed</div><br></br>

<div class="string">testset:		fill(N=3,T=int64)</div>
<div class="test-passed">    4/4 tests passed</div>
</pre>

Alternatively, we can parameterize the `testenv`:
```terra
for _,T in pairs{int32,int64} do
  for N=2,3 do          
       
    --parameterized testenv        
    testenv(N,T) "Vector implementation" do
  
      --parameterized testset          
      testset "fill" do
        local SVec = SVector(T,N)                          
        terracode                                  
          var y = SVec.fill(3)
        end 
        test y:size()==N
        for i=0,N-1 do              
          test y(i)==T(3)
        end 
      end 
  
    end --testenv

  end --N
end --T
```
which prints out the results as follows:
<pre>
<div class="string">Test Environment: 	Vector implementation(N=2,T=int32)</div><br></br>
<div class="string">testset:		fill</div>
<div class="test-passed">    3/3 tests passed</div><br></br>


<div class="string">Test Environment: 	Vector implementation(N=3,T=int32)</div><br></br>
<div class="string">testset:		fill</div>
<div class="test-passed">    4/4 tests passed</div><br></br>


<div class="string">Test Environment: 	Vector implementation(N=2,T=int64)</div><br></br>
<div class="string">testset:		fill</div>
<div class="test-passed">    3/3 tests passed</div><br></br>

<div class="string">Test Environment: 	Vector implementation(N=3,T=int64)</div><br></br>
<div class="string">testset:		fill</div>
<div class="test-passed">    4/4 tests passed</div>
</pre>