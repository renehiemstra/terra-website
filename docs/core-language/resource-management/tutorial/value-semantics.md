# Tutorial - Value semantics in Terra
Now we consider the same example as the previous one but focus on containers with value semantics; which means that data is copied (not moved) when passing arguments by value in functions.

## Tutorial setup
The setup is exactly the same as in the previous tutorial, so please have a look there.

## Implementation of a dynamic stack

```terra file=./tutorials/tutorial-value-semantics/libtutorial.t start=stack_copy_start end=stack_copy_end
```

## Implementation of a dynamic vector

```terra file=./tutorials/tutorial-value-semantics/libtutorial.t start=vector_copy_start end=vector_copy_end
```

## Implementation of VectorPair

## Example use-case

```terra file=./tutorials/tutorial-value-semantics/tutorial.t start=tutorial_start end=tutorial_end
```


```
Adding three elements to 's'.
Adding two more elements to 's'.
Reallocating stack memory.
Copy 's' -> 'v'
Copy 't' -> 'w'
Copy '(v, w)' -> 'dual'
Deleting vector.
Deleting vector.
Contents of 'dual':
  dual(0) = (1, 1)
  dual(1) = (2, 2)
  dual(2) = (3, 3)
  dual(3) = (4, 2)
  dual(4) = (5, 1)
Deleting vector.
Deleting vector.
Deleting vector.
Deleting stack.
Deleting vector.
Deleting stack.
```