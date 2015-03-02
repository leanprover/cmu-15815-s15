Final Project Suggestions
=========================

Below are some suggestions for a final project for 15-815. Please
discuss your project with us before you start working on it in
earnest. That way, we can offer advice and guidance, and try to
anticipate some of the difficulties you will face. (Also, it would be
nice to avoid a lot of duplication.)

A good strategy is to look for elementary gaps in Lean's library. It
is perfectly fair game (and a good idea) to look for developments in
other libraries and try to "port" them to Lean; for example, you can
look at things that have been formalized in Isabelle, SSReflect, Coq,
or HOL light. Here are some suggestions that seem to be within reach:

* Lists: Lean has a rudimentary library for lists. There are many
  additional operations on lists that you can define, and many
  additional properties you can prove.

* Formalize n! and (m choose n), and prove some of the basic
  identities. Similarly, you can define the fibonacci numbers and
  derive some of their properties.

* Use the factorial function to prove that there are infinitely many
  prime numbers, that is, for every n, there is a prime number greater
  than n. A slightly more involved argument shows that there are
  infinitely many primes of the form 4*n + 1.

* Elementary number theory: we have defined gcd and lcm for the
  natural numbers, and these definitions will be "lifted" to the
  integers soon. The next step is to define the "extended gcd"
  function, and use it to prove Bezout's theorem: if m and n are
  nonzero natural numbers, there are integers a and b such that a * m
  + b * n = gcd m n. (Many basic number-theoretic facts follow from
  this.)

* Naive set theory: in Lean, a subset of a type A is just a predicate
  on A. The library has only rudimentary properties of sets, and set
  operations like binary union and intersection. You can define
  notions of union and intersection for arbitrary collections of sets
  and/or for indexed sequences of sets, and derive some of the basic
  properties of these operations.

* Along the same lines, you can formalize basic properties of
  functions, like being injective and surjective, define the notion of
  the image of a function, and prove some basic facts about these
  notions. Similarly, you can define properties of relations and
  operations like the composition of relations and the transitive
  closure of a relation.

* Finiteness: the property of being a finite set (that is, a finite
  subset of a type) can be made into a type class, with instances
  corresponding to closure operations on the class of finite
  sets. That would make it possible for Lean to infer automatically
  that various sets are finite. (With a good theory of finite sets, we
  will be able prove e.g. that card (a union b) = card a + card b -
  card (a intersect b), the inclusion / exclusion principle, etc.)

* Multisets: a multiset on A is best modeled as a function from A to
  nat. Define the notion, and prove some basic properties of
  multisets.

* Red-black trees: for a more ambitious project, define red-black
  trees and prove some of their key properties.

Lean's library has algebraic structures like groups, rings, fields,
and ordered rings. (The integers, for example, are an instance of an
ordered ring.) We have defined various types of orderings, but not yet
the notion of a lattice:

* Define the notion of a lattice. Show that the integers with min and
  max form a lattice, as do the booleans with "and" and "or", or the
  collection of subsets of a type, with union and intersection.

We also have not yet done a lot of abstract algebra. If you are
adventurous, you could try any of the following:

* Define the notion of a subgroup, and prove Lagrange's theorem: the
  order of a subgroup divides the order of a group.

* Alternatively, define the notions of orbit and stabilizer, and prove
  the orbit - stabilizer theorem.

* Alternatively, define the notion of a subgroup and a homomorphism,
  and show that the kernel of a homomorphism is a subgroup. If you are
  ambitious, you can work towards the isomorphism theorems.

* We still need a library for "big operations" on a semigroup, like
  sums and products. Doing this generically is very ambitious, but we
  can talk about how to make a start along these lines.

Combinatorial properties of finite structures like graphs are probably
out of reach until we have a theory of finite sets and cardinality
(see above). But here is one combinatorial notion that does not
require arithmetic:

* Define the notion of a well-quasi-order, and prove some basic facts
  about well-quasiorders. For example, show that the product of two
  well-quasi-orders is well-quasiordered. (This notion is not only
  important in combinatorics, but also in the theory of term
  rewriting.)

Lean has a special library for homotopy type theory that is already
populated with basic properties of paths and transports, etc. We also
have basic category-theoretic notions in that framework. But there are
many topics developed in the HoTT book that are ripe for
formalization. Here is a project that is ambitious, but (we hope)
within reach:

* Show that the fundamental group of the circle is the integers.

For this, you will need to encode the corresponding higher inductive
type (HIT) in Lean. Talk to us about how to do this.

Benjamin Peirce et al. have written a book on interactive theorem
proving and program verification, based on Coq:

 * [http://www.cis.upenn.edu/~bcpierce/sf/current/index.html](http://www.cis.upenn.edu/~bcpierce/sf/current/index.html)

You can try to carry out some of the exercises from that book in
Lean. For example:

* Carry out some of the exercises in the chapter "Imp: Simple
  Imperative Programs".

Definitely talk to us if you want to follow this route, and we can
help you consider what is involved. Here is a similar project:

* Write a "tautology checker" in Lean, as follows. Define an inductive
  datatype representing propositional logic formulas. Define a
  "denotation" function, define a simplification function, and prove
  (denote (simplify P) <-> denote P). Finally write a tautology
  checker and show it is correct: denote P <-> (checker P = true).

Finally, Freek Wiedijk has pointed us to a list of suggested projects
used for a similar course that is taught in the Netherlands based on
Coq.

* [http://www.cs.ru.nl/~freek/courses/tt-2014](http://www.cs.ru.nl/~freek/courses/tt-2014)
* [http://www.cs.ru.nl/~freek/courses/tt-2014/public/huiswerk.pdf](http://www.cs.ru.nl/~freek/courses/tt-2014/public/huiswerk.pdf)

Do any of the suggested projects on that list.
