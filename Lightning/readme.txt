Messing around in p5.js + trying out some OOP in js.

Prototype of a lightning attack that would fit a Diablo-like game. It should
be a crowd control/AoE attack.

It chooses the next target and applies damage, up to a number of targets
specified by the spellLevel var. It chooses the target semi-randomly,
with high probability of choosing the closest target, but sometimes choosing
second, third or fourth closest target to make the effect less predictable and
more lightning-like.

The attack was designed to be simple to implement, yet fun to use, with
a good sense of progression in leveling the spell's level.

Visualisation in p5.js.
