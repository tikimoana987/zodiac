# Prompts Gemini — 56 arcanes mineurs (10 planches + 1 de retouches)

> Pour chaque planche : **joindre l'image de la planche 1 des arcanes majeurs** (modèle de style), puis coller le prompt. Vérifier ensuite : aucun texte ni chiffre, nombre exact d'objets, fonds nocturnes.

> Découpe : `python tools/cut_sheets.py planche.jpg NOM cle1,…,cle6` avec les clés indiquées sous chaque titre (ordre de lecture).

> Retours du premier essai (27 octobre 2026) : Gemini a livré trois planches en paysage (4, 6 et 10) et sept cartes avec un mauvais nombre d'objets ; les planches 10 et 11 ont été réécrites pour les retouches (consignes de comptage renforcées). Gemini ayant ensuite refusé de générer des images, les planches 4, 6, 10 et 11 ont été faites avec ChatGPT : 9 cartes restent à refaire (liste dans `feuille-de-route.md`, § 1.1). Dans Gemini, choisir « Aspect ratio » 1:1 et joindre une planche carrée comme modèle.


## Planche 1

Clés : `wands_ace,wands_2,wands_3,wands_4,wands_5,wands_6`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Ace of Wands (top left): a hand emerging from a soft cloud holds a sprouting wooden wand with fresh green leaves; a castle on a distant hill.
2. Two of Wands (top centre): a figure in a red cloak on a castle terrace holds a small globe, one wand fixed to the wall and another in hand, gazing over sea and hills.
3. Three of Wands (top right): a figure seen from behind on a cliff beside three planted wands, watching ships sail on a golden sea.
4. Four of Wands (bottom left): four wands garlanded with flowers form a festive arch; two figures raise bouquets; a castle behind.
5. Five of Wands (bottom centre): five young people in colourful tunics playfully crossing wands in a friendly contest, no injury.
6. Six of Wands (bottom right): a rider crowned with laurel on a white horse holds a wand bearing a laurel wreath, cheering people with wands around.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 2

Clés : `wands_7,wands_8,wands_9,wands_10,wands_page,wands_knight`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Seven of Wands (top left): a determined figure on a hilltop holds one wand against six wands rising from below.
2. Eight of Wands (top centre): eight wands flying in parallel diagonally across a clear night sky above a river valley.
3. Nine of Wands (top right): a tired but vigilant figure with a simple headband leans on a wand, eight wands standing behind like a fence.
4. Ten of Wands (bottom left): a figure walking towards a village, carrying ten heavy wands bundled in their arms.
5. Page of Wands (bottom centre): a young person in a feathered cap holds a tall wand and admires a sprouting leaf; a desert with pyramids behind.
6. Knight of Wands (bottom right): a knight in armour on a rearing horse holds a wand, cloak decorated with salamanders; pyramids in the distance.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 3

Clés : `wands_queen,wands_king,cups_ace,cups_2,cups_3,cups_4`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Queen of Wands (top left): a queen on a throne carved with lions holds a wand and a sunflower, a black cat sitting at her feet.
2. King of Wands (top centre): a king on a throne carved with lions and salamanders holds a flowering wand, a small salamander at his feet.
3. Ace of Cups (top right): a hand emerging from a cloud holds a golden chalice overflowing with five streams of water, a dove above, water lilies below.
4. Two of Cups (bottom left): two young people exchanging cups, a winged lion's head and a caduceus floating above them.
5. Three of Cups (bottom centre): three friends raising cups in a joyful dance, fruit and flowers at their feet.
6. Four of Cups (bottom right): a figure seated under a tree, arms crossed, ignoring three cups on the grass while a hand from a cloud offers a fourth.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 4

Clés : `cups_5,cups_6,cups_7,cups_8,cups_9,cups_10`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Five of Cups (top left): a figure in a dark cloak looks at three spilled cups, two cups still standing behind; a bridge leads to a house across a river.
2. Six of Cups (top centre): two children in a village garden, one offering the other a cup filled with white flowers; six flower-filled cups.
3. Seven of Cups (top right): a figure seen from behind faces seven cups floating in clouds, each holding a different vision: a castle, jewels, a wreath, a small dragon, a veiled figure, a snake, a face.
4. Eight of Cups (bottom left): a figure with a walking staff leaves eight stacked cups behind, heading towards mountains under a crescent moon.
5. Nine of Cups (bottom centre): a contented figure seated before an arc of nine golden cups on a draped table.
6. Ten of Cups (bottom right): a family under a rainbow of ten cups, two children dancing, a cosy house in the hills.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 5

Clés : `cups_page,cups_knight,cups_queen,cups_king,swords_ace,swords_2`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Page of Cups (top left): a young person in a floral tunic by the sea holds a cup from which a small fish peeks out.
2. Knight of Cups (top centre): a knight on a calm white horse holds a cup forward, wearing a winged helmet, a gentle river nearby.
3. Queen of Cups (top right): a queen on a throne at the edge of the sea contemplates an ornate covered cup, her throne decorated with small cherubs.
4. King of Cups (bottom left): a king on a stone throne floating on a calm sea holds a cup and a sceptre, a ship and a leaping fish nearby.
5. Ace of Swords (bottom centre): a hand emerging from a cloud holds an upright sword topped by a golden crown with olive and palm branches; mountains below.
6. Two of Swords (bottom right): a blindfolded figure in white seated by the sea holds two crossed swords, a crescent moon above.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 6

Clés : `swords_3,swords_4,swords_5,swords_6,swords_7,swords_8`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Three of Swords (top left): a stylised red heart pierced by three swords under soft rain clouds, purely symbolic, no blood.
2. Four of Swords (top centre): a knight resting peacefully on a stone bench in a quiet chapel, hands joined, three swords on the wall and one beneath, a stained-glass window.
3. Five of Swords (top right): a figure gathering swords with a proud look while two others walk away towards the sea under a windy sky.
4. Six of Swords (bottom left): a ferryman poles a boat carrying a cloaked person and a child towards a calm shore, six swords standing upright in the boat.
5. Seven of Swords (bottom centre): a figure tiptoeing away from a camp carrying five swords, two swords left planted in the ground.
6. Eight of Swords (bottom right): a blindfolded figure loosely bound stands among eight swords planted in the ground, a castle on a hill behind.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 7

Clés : `swords_9,swords_10,swords_page,swords_knight,swords_queen,swords_king`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Nine of Swords (top left): a person sitting up in bed, hands over the face, nine swords hanging on the dark wall behind, no blood.
2. Ten of Swords (top centre): a figure lying face down on a quiet shore at dawn, ten swords planted upright in the sand beside them, a golden sunrise over a calm sea; no blood, no wounds.
3. Page of Swords (top right): a young person on a windy hill holds an upright sword, birds and swift clouds in the sky.
4. Knight of Swords (bottom left): a knight charging on a galloping horse with sword raised, wind-swept trees.
5. Queen of Swords (bottom centre): a queen on a throne among clouds holds an upright sword, her other hand raised, butterflies carved on the throne.
6. King of Swords (bottom right): a king on a throne holds an upright sword with a calm face, butterflies and crescent moons carved on the throne.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 8

Clés : `pentacles_ace,pentacles_2,pentacles_3,pentacles_4,pentacles_5,pentacles_6`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Ace of Pentacles (top left): a hand emerging from a cloud holds a large golden coin bearing a five-pointed star, above a garden with an arch of roses.
2. Two of Pentacles (top centre): a juggler dancing with two coins linked by an infinity-shaped ribbon, ships riding rolling waves behind.
3. Three of Pentacles (top right): a stonemason on a bench inside a cathedral, two figures showing him plans, three coins carved in a stone arch.
4. Four of Pentacles (bottom left): a crowned figure seated holding a coin tightly against the chest, one coin on the crown and two under the feet, a city behind.
5. Five of Pentacles (bottom centre): two figures walking through falling snow past a warmly lit stained-glass window showing five coins.
6. Six of Pentacles (bottom right): a merchant holding balanced scales gives coins to two kneeling people.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 9

Clés : `pentacles_7,pentacles_8,pentacles_9,pentacles_10,pentacles_page,pentacles_knight`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Seven of Pentacles (top left): a farmer leaning on a hoe contemplates seven coins growing like fruit on a lush green bush.
2. Eight of Pentacles (top centre): a craftsman at a workbench engraving a coin, six finished coins displayed on a post, one on the ground.
3. Nine of Pentacles (top right): an elegant figure in a vineyard garden with a hooded falcon on a gloved hand, nine coins among the vines.
4. Ten of Pentacles (bottom left): an old man with two dogs and a family beneath a stone archway, ten coins arranged in a tree-of-life pattern, a castle beyond.
5. Page of Pentacles (bottom centre): a young person in a green field holds up a coin in both hands and gazes at it.
6. Knight of Pentacles (bottom right): a knight on a sturdy dark horse standing still, holding a coin, ploughed fields behind.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
```


## Planche 10

Clés : `pentacles_queen,pentacles_king,wands_3,wands_5,swords_9,swords_10`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Queen of Pentacles (top left): a queen on a throne in a blooming garden holds a coin in her lap, a small rabbit nearby.
2. King of Pentacles (top centre): a king on a throne adorned with bull heads in a vineyard holds a coin and a sceptre, a castle behind.
3. Three of Wands (top right): a figure seen from behind on a cliff, watching ships sail on a golden sea. EXACTLY THREE wands in total: two wands planted upright to the left of the figure and one wand held in the figure's right hand. No other wand, stick, mast or pole anywhere in the panel.
4. Five of Wands (bottom left): five young people in colourful tunics playfully crossing wands in a friendly contest, no injury. EXACTLY FIVE wands in total: each person holds exactly one wand, and there is no other wand, stick or pole anywhere in the panel.
5. Nine of Swords (bottom centre): a person sitting up in bed, hands over the face, no blood. On the dark wall behind, EXACTLY NINE complete swords (each with hilt and blade) hang horizontally in nine evenly spaced rows. No other sword or blade anywhere in the panel.
6. Ten of Swords (bottom right): a figure lying face down on a quiet shore at dawn, a golden sunrise over a calm sea. EXACTLY TEN swords planted upright in the sand in one row: five to the left and five to the right of the rising sun, all well inside the panel. No blood, no wounds, no other sword anywhere.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
- Count again before finishing: Three of Wands = 3 wands, Five of Wands = 5 wands, Nine of Swords = 9 swords, Ten of Swords = 10 swords. Keep every counted object fully visible, at least 10% away from the panel edges.
```

## Planche 11

Clés : `pentacles_5,pentacles_7,pentacles_9,-,-,-`

```
Use the attached image as the exact style reference: same celestial engraving style, same fine gold line work, same jewel-tone palette, same thin gold line framing each panel, same deep navy gutters, same proportions and level of detail. Create a NEW sheet that matches it perfectly.

Create ONE square image (1:1 aspect ratio: exactly as wide as it is tall, like the attached reference; never landscape): a sheet of six tarot card illustrations arranged in a grid of 3 columns × 2 rows.

LAYOUT (very important)
- Six equal portrait panels (2:3), separated by thin, perfectly straight gutters of plain deep navy (#0b0a1a), with the same gutter around the outer edge, exactly like the reference.
- Each panel framed only by the same thin gold line as in the reference; no title band, no rounded corners.
- Keep the main subject centred, with a safe margin of about 8% inside each panel.
- Reading order: left to right, top row first.

ABSOLUTELY NO TEXT
- No letters, words, names, numbers, Roman numerals, signatures, captions, labels or watermarks anywhere. No writing, letter-like glyphs or numerals on banners, coins, cups, swords, wands, stones or clothing: use only plain shapes, dots, stars or simple flowers as ornaments.
- The number of wands, cups, swords or coins in each panel must be exactly the number stated.

BACKGROUNDS
- Every panel uses the same deep midnight-blue night sky (#0b0a1a to #1a1435) with a few small, delicate stars, as in the reference. No gold or yellow backgrounds.

STYLE
- Palette: antique gold (#e8c36a), crimson (#c8102e), sapphire blue (#1c4fa1), amber (#f2b705), soft violet (#9b7ede), warm ivory (#f3e6c4).
- Calm, timeless, elegant; soft glow around the main symbol; no photorealism, no 3D render, no anime or cartoon style. No gore, no blood, no nudity: all figures are clothed.
- Draw on traditional tarot symbolism with original compositions; do not copy or imitate any existing tarot deck or artist.

THE SIX PANELS
1. Five of Pentacles (top left): two figures walking through falling snow past a warmly lit stained-glass window. The window shows EXACTLY FIVE coins, arranged like the five dots on a die (one in each corner, one in the centre). No other coin anywhere in the panel.
2. Seven of Pentacles (top centre): a farmer leaning on a hoe contemplates a lush green bush bearing EXACTLY SEVEN coins, arranged in three rows: two, then three, then two. No other coin anywhere in the panel.
3. Nine of Pentacles (top right): an elegant figure in a vineyard garden with a hooded falcon on a gloved hand. EXACTLY NINE coins among the vines: four on the left vine and five on the right vine, all fully inside the panel. No other coin anywhere.
4. Empty panel (bottom left): only the midnight-blue starry sky inside the gold frame, nothing else.
5. Empty panel (bottom centre): only the midnight-blue starry sky inside the gold frame, nothing else.
6. Empty panel (bottom right): only the midnight-blue starry sky inside the gold frame, nothing else.

FINAL CHECK
- Exactly six panels, same size and framing as the reference, midnight-blue backgrounds everywhere, exact object counts, consistent style, and no text, letters, glyphs or numerals of any kind.
- Count again before finishing: Five of Pentacles = 5 coins, Seven of Pentacles = 7 coins, Nine of Pentacles = 9 coins. Keep every coin fully visible, at least 10% away from the panel edges.
```
