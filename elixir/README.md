## Elixir learnings

### REPL

- Start REPL: `iex`
- Quit REPL: `(ctrl +c) x 2`
- Help: `h`
- See all methods: type method with `.` then `tab`  
  e.g `String.` then hit `tab`.

### Files
- Run files: `elixir hello_world.exs`
- Convention is to use `snake_case` for file naming

### Hello world

```elixir
IO.puts('Hello world')
```

### Data types

- Atoms: Immutable strings e.g. `:hello`
- Tuples: Immutable, indexed array
- `"hello"` is a string
- `'hello'` is a list

### Tuples

Accessing a tuple and calculating its length is a fast operation. Updating tuples is expensive because they are immutable and copying their entire self on update.

Create a tuple:  
`t = {4,5,6}`

Read a tuple:  
`elem(t, 1)` -> 5

### Function

```
hello = fn (p) -> "Hello #{p}!" end
hello.("Rich")
```
