---
title: This is my first blog post!
published_at: 2024-05-09T12:00:00.000Z
snippet: Trying a new blog
---

Now that I am publishing my own website, I am going to start blogging here. But first let's check that I can do math: 

$$ \int_0^\infty f(x) dx $$

And syntax highlighting

```haskell

quicksort :: Ord a => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = (quicksort lo) ++ [x] ++ (quicksort hi) 
    where
    lo = [i | i <- xs, i <= x]
    hi = [i | i <- xs, i > x]
```

