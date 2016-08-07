## Pattern matching

Pattern matching is kind of like how the equals sign works in algebra, the left side needs to equal the right. Pattern matching occurs when the left side is not a variable.

`a = 5` => 5  
`5 = a` => 5  
`3 = a` => MatchError

#### Pin operator

The pin operator is the `^`. You can use it to force a pattern match when a variable is on the left side.

`a = 5` 
`b = 3` 
`^a = b + 2` => 5

#### Quick example

```
card = 88
bingo = fn
	(88) -> "Bingo!"
	(_) -> "no win!"
end

IO.puts bingo.(card) | outputs: "Bingo!"
```