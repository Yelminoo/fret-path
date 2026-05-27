import type { Roadmap } from '@/types'

export const ROADMAP_DATA: Roadmap = {

  // ─── JAZZ ────────────────────────────────────────────────────────────────
  jazz: [
    {
      id: 'j1',
      title: 'Open Chords & Strumming',
      desc: 'Learn basic open position chords and even strumming patterns.',
      tags: ['beginner'],
      lesson: {
        objective: 'Play clean open-position major and minor chords and strum evenly in 4/4 time.',
        concepts: [
          'An open chord uses at least one open (unfretted) string.',
          'The six essential open chords are: E, Em, A, Am, D, G — and C.',
          'A chord diagram shows strings vertically (low E on left), frets horizontally, dots = finger placement, X = mute, O = open.',
          'Strumming direction: downstrokes on beats 1–2–3–4, add upstrokes on the "and" counts to create eighth-note patterns.',
          'Good tone comes from pressing close to the fret (not on it) and using the fingertip, not the pad.',
        ],
        diagram: `G Major          C Major          D Major
e  --3--         e  --0--         e  --2--
B  --0--         B  --1--         B  --3--
G  --0--         G  --0--         G  --2--
D  --0--         D  --2--         D  --0--
A  --2--         A  --3--         A  --x--
E  --3--         E  --x--         E  --x--

Em Major         Am Major
e  --0--         e  --0--
B  --0--         B  --1--
G  --0--         G  --2--
D  --2--         D  --2--
A  --2--         A  --0--
E  --0--         E  --x--`,
        exercises: [
          {
            title: 'One-chord drone',
            steps: [
              'Fret a G chord. Strum down on beat 1, hold for 4 beats.',
              'Focus entirely on getting all strings to ring — no buzzes, no mutes.',
              'Repeat for each chord: G, C, D, Em, Am.',
            ],
          },
          {
            title: 'G → C → D chord change',
            steps: [
              'Set your metronome to 60 BPM.',
              'Strum G four times (one chord per beat), then C four times, then D four times.',
              'Keep the beat going even if you miss a chord — accuracy matters, but rhythm matters more.',
              'Increase 5 BPM every time you nail three clean passes.',
            ],
          },
          {
            title: 'Down-up strumming pattern',
            steps: [
              'Pattern: D – D U – U D U (beats: 1 – 2 & – & 4 &)',
              'Tap your foot on every beat. Your hand keeps moving down-up continuously.',
              'Practice the strum in the air before applying to a chord.',
              'Apply over a slow G → Em → C → D loop.',
            ],
          },
        ],
        tips: [
          'Squeeze the chord, then release slightly — you will feel where "just enough" pressure is.',
          'Practice chord changes in isolation: put two chords together, nothing else, 100 times.',
          'Your fretting-hand wrist should hang low for open chords (unlike barre chords).',
          'If a string buzzes, it is usually the finger nearest to that string — adjust placement.',
        ],
      },
    },

    {
      id: 'j2',
      title: 'Barre Chords',
      desc: 'Master E- and A-shape barre chords up the neck.',
      tags: ['beginner', 'technique'],
      lesson: {
        objective: 'Play E-shape and A-shape barre chords cleanly at any fret, transitioning smoothly up and down the neck.',
        concepts: [
          'A barre chord uses the index finger laid flat across all six strings, acting as a moveable nut.',
          'E-shape barre: index bars all 6 strings; remaining fingers form the open E shape behind the bar.',
          'A-shape barre: index bars all 6 strings (or frets 2–5 only); remaining fingers form the open A shape.',
          'The root of an E-shape chord is on the low E string (6th). The root of an A-shape chord is on the A string (5th).',
          'Chromatic root positions on string 6: F=1, G=3, A=5, B=7, C=8, D=10, E=12.',
          'Chromatic root positions on string 5: B=2, C=3, D=5, E=7, F=8, G=10, A=12.',
        ],
        diagram: `F Major (E-shape, root fret 1)   Bm (A-shape, root fret 2)
e  --1--                         e  --2--
B  --1--                         B  --3--
G  --2--                         G  --4--
D  --3--                         D  --4--
A  --3--                         A  --2--
E  --1--                         E  --x--

B Major (E-shape, root fret 7)
e  --7--
B  --7--
G  --8--
D  --9--
A  --9--
E  --7--`,
        exercises: [
          {
            title: 'Barre finger isolation',
            steps: [
              'Without any other fingers, barre the 5th fret with only your index finger.',
              'Pluck each string individually. Every string must ring cleanly.',
              'Adjust your index finger — the common fix is rolling it slightly toward the nut side.',
              'Hold for 30 seconds, release, rest 10 seconds, repeat × 5.',
            ],
          },
          {
            title: 'E-shape barre up the neck',
            steps: [
              'Play F (fret 1) → G (fret 3) → A (fret 5) → B (fret 7) → C (fret 8).',
              'Strum each chord twice. Check every note rings.',
              'Come back down the same path.',
              'Keep your thumb centered behind the neck, not wrapped over the top.',
            ],
          },
          {
            title: 'Open → Barre transitions',
            steps: [
              'Play open G, then jump to G barre chord (E-shape, fret 3).',
              'They sound the same pitch — compare the tone difference.',
              'Practice: open A → A barre (A-shape, fret 5) back and forth for 2 minutes.',
            ],
          },
        ],
        tips: [
          'Pain is normal early on — build calluses gradually with 10-minute daily sessions.',
          'Place the barre as close to the fret wire as possible to minimize required pressure.',
          'Use the edge of your index finger (the bony side), not the soft center.',
          'If strings 1–2 buzz, your index fingertip may be touching them — straighten the finger.',
        ],
      },
    },

    {
      id: 'j3',
      title: 'ii–V–I Progressions',
      desc: 'The backbone of jazz harmony — Dm7–G7–Cmaj7 in all keys.',
      tags: ['intermediate', 'theory'],
      lesson: {
        objective: 'Understand and play the ii–V–I progression in at least four keys using drop-2 or shell voicings.',
        concepts: [
          'The ii–V–I is the most fundamental chord movement in jazz. It creates strong pull toward the tonic (I).',
          'In C major: ii = Dm7, V = G7, I = Cmaj7.',
          'The V7 chord contains a tritone (between the 3rd and 7th) that resolves by half-step into the I chord.',
          'Dm7 notes: D–F–A–C. G7 notes: G–B–D–F. Cmaj7 notes: C–E–G–B.',
          'To transpose: move the entire progression up or down by the same number of semitones.',
          'In a minor key (ii°–V7–im): Bm7b5–E7–Am in A minor.',
        ],
        diagram: `ii–V–I in C Major (shell voicings)

Dm7              G7               Cmaj7
e --1--          e --1--          e --0--
B --1--          B --0--          B --1--
G --2--          G --0--          G --0--
D --0--          D --0--          D --2--
A --x--          A --2--          A --3--
E --x--          E --3--          E --x--

ii–V–I in G Major
Am7 → D7 → Gmaj7   (all shapes shift up 7 semitones)`,
        exercises: [
          {
            title: 'ii–V–I in C — slow loop',
            steps: [
              'Set metronome to 60 BPM. Two beats per chord.',
              'Dm7 (2 beats) → G7 (2 beats) → Cmaj7 (4 beats).',
              'Listen to the tension on G7 and the release on Cmaj7.',
              'Repeat 8 times without stopping.',
            ],
          },
          {
            title: 'Transpose to four keys',
            steps: [
              'Learn ii–V–I in C, then G (Am7–D7–Gmaj7), then F (Gm7–C7–Fmaj7), then Bb (Cm7–F7–Bbmaj7).',
              'Use a play-along track (YouTube: "jazz backing track ii V I") to practice with a rhythm section.',
            ],
          },
          {
            title: 'Cycle of fourths drill',
            steps: [
              'Play a ii–V–I, then immediately begin the next ii–V–I a fourth higher.',
              'C → F → Bb → Eb → Ab → Db → Gb → B → E → A → D → G → back to C.',
              'This covers all 12 keys in one loop — 30 seconds per key to start.',
            ],
          },
        ],
        tips: [
          'Hear the progression in famous songs: "Autumn Leaves", "All The Things You Are", "Satin Doll".',
          'Voice leading is key — move each note the shortest possible distance from chord to chord.',
          'The 3rd and 7th are the "guide tones" — they define the chord quality. Prioritize those two notes.',
          'Practice singing each chord tone as you play it to build your ear.',
        ],
      },
    },

    {
      id: 'j4',
      title: 'Shell Voicings',
      desc: 'Root–3rd–7th three-note chords for clean comping.',
      tags: ['intermediate', 'theory'],
      lesson: {
        objective: 'Play shell voicings (root, 3rd, 7th) for major 7, minor 7, and dominant 7 chords on the top four strings.',
        concepts: [
          'A shell voicing strips a chord down to its three essential tones: root, 3rd, and 7th.',
          'The 3rd tells you if the chord is major or minor. The 7th tells you if it is major 7 or dominant 7.',
          'Shell voicings leave space for a bassist to cover the low end and a soloist to add melody.',
          'Two common shell voicing positions: root on string 6 (or 5), 3rd and 7th above it.',
          'Dominant 7 (e.g., G7): G–B–F. Major 7 (e.g., Cmaj7): C–E–B. Minor 7 (e.g., Dm7): D–F–C.',
        ],
        diagram: `Shell voicings — root on string 5 (A string)

Chord   Root  String layout (D G B e)
Cmaj7    C    --2-- --4-- --5-- --x--  (3rd=E, 7th=B)
C7       C    --2-- --3-- --5-- --x--  (3rd=E, 7th=Bb)
Cm7      C    --1-- --3-- --5-- --x--  (3rd=Eb, 7th=Bb)

Shell voicings — root on string 6 (E string)

Gmaj7    G    --x-- --4-- --3-- --2--  (root=G, 3rd=B, 7th=F#)
G7       G    --x-- --4-- --3-- --1--  (root=G, 3rd=B, 7th=F)
Gm7      G    --x-- --3-- --3-- --1--  (root=G, 3rd=Bb, 7th=F)`,
        exercises: [
          {
            title: 'Build the three shell types',
            steps: [
              'On A string root C: play Cmaj7 shell → C7 shell → Cm7 shell back to back.',
              'Name each interval as you play: "root… 3rd… 7th".',
              'Transpose all three types to G (root on string 6) and A (root on string 5).',
            ],
          },
          {
            title: 'Comp a ii–V–I with shells',
            steps: [
              'Dm7 shell → G7 shell → Cmaj7 shell using the voicings above.',
              'Stay on strings 4–2 (D G B) to keep a consistent register.',
              'Notice how little each finger moves between chords — that is good voice leading.',
            ],
          },
          {
            title: 'Rhythmic comping',
            steps: [
              'With a backing track at 120 BPM, comp shells using a jazz rhythm: beat 2 and the "and" of 3.',
              'Avoid beats 1 and 4 — leave space for the bassist.',
              'Add a light chord stab on the "and" of 4 occasionally.',
            ],
          },
        ],
        tips: [
          'Drop the root once you are playing with a bassist — play only 3rd and 7th (even lighter touch).',
          'Shell voicings are the foundation for all jazz comping — every extension you add later builds on this.',
          'Learn these by root note, not by shape — shapes shift depending on which string the root is on.',
          'Record yourself and listen back — shells should sound clear and dry, not muddy.',
        ],
      },
    },

    {
      id: 'j5',
      title: 'Modes: Dorian & Mixolydian',
      desc: 'Apply Dorian over minor chords, Mixolydian over dominant chords.',
      tags: ['intermediate', 'theory'],
      lesson: {
        objective: 'Play D Dorian and G Mixolydian scales in two positions and understand when to use each over a ii–V–I.',
        concepts: [
          'A mode is a major scale starting from a different degree. Same notes, different home base.',
          'Dorian is the 2nd mode of the major scale. D Dorian = C major scale, but starting on D. Formula: W H W W W H W.',
          'Dorian sounds minor but brighter than natural minor because the 6th is natural (not flat).',
          'Mixolydian is the 5th mode of the major scale. G Mixolydian = C major scale, starting on G. Formula: W W H W W H W.',
          'Mixolydian is like a major scale with a flat 7 — perfect over a dominant 7 chord.',
          'ii–V–I modal pairing: Dm7 → Dorian, G7 → Mixolydian, Cmaj7 → Ionian (major scale).',
        ],
        diagram: `D Dorian (same notes as C Major, starting on D)
e --5--7--8--
B --5--6--8--
G --5--7----
D --5--7----
A --5--7----
E (start on D: open D or 5th fret A string)

G Mixolydian (same notes as C Major, starting on G)
e --3--5--6--8--
B --3--5--6--8--
G --4--5--7----
D --3--5------
A --3--5------
E (start on G: 3rd fret low E)`,
        exercises: [
          {
            title: 'D Dorian ascending/descending',
            steps: [
              'Play D Dorian one octave up and back, starting on the open D string.',
              'Notes: D E F G A B C D.',
              'Say the note names aloud as you play.',
              'Repeat until you can play it without looking at the diagram.',
            ],
          },
          {
            title: 'Modal switch drill',
            steps: [
              'Over a slow Dm7 vamp, improvise using only D Dorian notes for 30 seconds.',
              'Switch to G Mixolydian over a G7 vamp for 30 seconds.',
              'Return to C major (Ionian) over Cmaj7.',
              'The challenge: hear each scale change as a color shift, not just a technical movement.',
            ],
          },
          {
            title: 'Characteristic note focus',
            steps: [
              'Dorian: emphasize the natural 6th (B in D Dorian). It is the note that makes it "bright minor".',
              'Mixolydian: emphasize the flat 7 (F in G Mixolydian). It creates the dominant tension.',
              'Compose a 4-bar phrase that lands on the characteristic note of each mode.',
            ],
          },
        ],
        tips: [
          'Do not memorize modes as separate scales — relate them back to their parent major scale.',
          'Practice singing the scales. Your ear must recognize the sound before your fingers can use them musically.',
          'The "avoid note" in Mixolydian is the 4th (C over G7) — it clashes with the major 3rd. Use it as a passing tone only.',
          'Listen to Miles Davis "So What" (Dorian) and "Freddie Freeloader" (Mixolydian) for instant context.',
        ],
      },
    },

    {
      id: 'j6',
      title: 'Chord Melody Basics',
      desc: 'Arrange a simple standard so melody and chords ring simultaneously.',
      tags: ['advanced', 'technique'],
      lesson: {
        objective: 'Arrange and perform a 4-bar chord melody passage where the melody is always the highest sounding note.',
        concepts: [
          'Chord melody: a solo guitar technique where you play the melody on the top strings while comping chords below.',
          'The melody note must always be the highest note in the voicing — this is the cardinal rule.',
          'Start by identifying the melody notes on the high e and B strings, then build chords underneath.',
          'Use inversions and shell voicings to keep chords close to the melody note.',
          'Rhythmic independence: melody notes sustain while bass notes are plucked separately.',
          'Common approach: identify melody note → find it on string 1 or 2 → add 3rd and 7th below it.',
        ],
        diagram: `"Autumn Leaves" — bars 1–2 chord melody sketch (G minor)

Bar 1: Cm7             Am7b5
e  --3--               --1--
B  --4--               --1--
G  --3--               --2--
D  --5--               --2--
A  --3--               --x--
E  --x--               --x--
     ↑ melody note      ↑ melody note

Bar 2: D7              Gm
e  --2--               --3--
B  --1--               --3--
G  --2--               --3--
D  --0--               --5--
A  --x--               --5--
E  --x--               --3--`,
        exercises: [
          {
            title: 'Melody note identification',
            steps: [
              'Pick any 4-bar melody you know (Happy Birthday, Twinkle Twinkle).',
              'Find every melody note on the B and high e strings only.',
              'Play only the melody on those two strings until it is fluent.',
            ],
          },
          {
            title: 'Add one chord note',
            steps: [
              'For each melody note, identify which chord it falls on.',
              'Add only the 7th of the chord on the string below the melody note.',
              'Pluck melody + 7th together. This is the minimum chord melody.',
              'Progressively add the 3rd, then the root if possible without muddying.',
            ],
          },
          {
            title: 'Rhythmic phrasing',
            steps: [
              'Once the notes are set, vary which beats you pluck.',
              'Let melody notes sustain over moving bass. Use thumb for bass, fingers for melody.',
              'Slow practice at 50 BPM first — rushing is the enemy of chord melody.',
            ],
          },
        ],
        tips: [
          'Start with ballads — slow tempos give you time to construct each voicing.',
          'Ted Greene and Joe Pass transcriptions are the best study material for chord melody.',
          'If the voicing is too busy, remove a note — less is more.',
          'Record every attempt. What sounds cluttered at practice tempo can sound beautiful at performance tempo.',
        ],
      },
    },

    {
      id: 'j7',
      title: 'Bebop Vocabulary',
      desc: 'Learn bebop scale runs and classic Charlie Parker licks.',
      tags: ['advanced'],
      lesson: {
        objective: 'Play the bebop dominant scale over a G7 chord and perform two classic Parker-style licks in tempo.',
        concepts: [
          'The bebop scale adds a chromatic passing tone to a standard scale, keeping chord tones on the beat.',
          'Bebop dominant scale (G): G A B C D E F F# G — the major 7th is inserted between flat 7 and root.',
          'The goal: when you start on a chord tone and play 8th notes, every downbeat lands on a chord tone.',
          'Bebop phrasing is characterized by long flowing 8th-note lines, enclosures (approaching a note from above and below), and motivic development.',
          'Enclosure: to land on G, play Ab–F#–G. To land on B, play C–Bb–B.',
          'Rhythm: bebop is typically played at fast tempos (160+ BPM); start slow and build.',
        ],
        diagram: `G Bebop Dominant Scale (one octave)
e |-----------------------------------------|
B |-----------------------------------------|
G |--2--4--5--4--2--0-----------------------|
D |--5------5--4--2--0----------------------|
A |--5--4--2--0-----------------------------|
E |--3--------------------------------------|
    G  A  B  C  D  E  F  F# G

Classic Parker Lick (over G7):
e |--6--5--3--5--3-----------------------------|
B |--------5--3--4--3--------------------------|
G |-------------------4--2--4--2---------------|
D |------------------------------5--3----------|`,
        exercises: [
          {
            title: 'Bebop scale slow run',
            steps: [
              'Play G bebop dominant scale ascending and descending, all 8th notes at 80 BPM.',
              'Count "1 and 2 and 3 and 4 and" — every numbered beat should land on G B D F (chord tones).',
              'If a non-chord tone lands on a downbeat, shift your starting note by one step.',
            ],
          },
          {
            title: 'Learn one Parker lick',
            steps: [
              'Pick the example lick from the diagram. Play it one note at a time, no rhythm, just notes.',
              'Add rhythmic feel: strict 8th notes first, then start swinging.',
              'Transpose the lick to C7 (same shape, up 5 frets).',
              'Plug it into a ii–V–I: play Dm7 shell → lick over G7 → resolve to Cmaj7 note.',
            ],
          },
          {
            title: 'Call and response improvisation',
            steps: [
              'Over a G7 vamp: play the lick (call), then leave 2 bars of silence (response).',
              'Fill the response with a made-up phrase using only chord tones.',
              'Gradually connect the two ideas until you have a flowing 4-bar statement.',
            ],
          },
        ],
        tips: [
          'Learn licks by ear first — transcribe even one bar from a Charlie Parker solo.',
          'Bebop vocabulary is like language: you need a vocabulary of phrases before you can "speak" fluently.',
          'Slower is always better — play the lick at half speed until every note is clear, then double it.',
          'Recommended listening: Charlie Parker "Ko-Ko", Wes Montgomery "Four on Six", Joe Pass "Autumn Leaves".',
        ],
      },
    },
  ],

  // ─── ROCK ────────────────────────────────────────────────────────────────
  rock: [
    {
      id: 'r1',
      title: 'Power Chords',
      desc: 'Two-finger power chords on the 5th and 6th strings.',
      tags: ['beginner', 'technique'],
      lesson: {
        objective: 'Play power chords on strings 6 and 5, move them up and down the neck in time with a beat.',
        concepts: [
          'A power chord (5 chord) contains only the root and the perfect 5th — no 3rd, so it is neither major nor minor.',
          'Written as X5 (e.g., A5, E5, G5).',
          'On string 6: index on fret N, ring/pinky on fret N+2 (one string down). Example: E5 = frets 0 and 2 (string 6 open, string 5 fret 2).',
          'On string 5: same shape, root on A string. Example: A5 = open A, string 4 fret 2.',
          'Power chords sound massive with distortion because the lack of a 3rd avoids dissonance in high-gain tones.',
          'Palm muting + power chords = classic rock/metal chug.',
        ],
        diagram: `E5 (open)   A5 (open)   G5          C5
e --x--      e --x--      e --x--      e --x--
B --x--      B --x--      B --x--      B --x--
G --x--      G --x--      G --x--      G --x--
D --x--      D --2--      D --5--      D --x--
A --2--      A --0--      A --5--      A --3--
E --0--      E --x--      E --3--      E --x--

Riff example (E5 – G5 – A5 – G5):
E |--0--0--3--5--3--|`,
        exercises: [
          {
            title: 'Static power chord tone check',
            steps: [
              'Play E5 (open). Strum only strings 6 and 5 — mute all others with the side of your picking hand.',
              'Both strings must ring at the same volume. Adjust if the 5th (A string) is quieter.',
              'Repeat for A5, D5, G5, C5.',
            ],
          },
          {
            title: 'Classic rock riff: E5–G5–A5',
            steps: [
              'E5 → G5 → A5 → G5, all on string 6, four downstrokes each.',
              '60 BPM first, 4 beats each chord.',
              'Add a short pause (rest) between G5 and A5 for groove.',
              'Increase to 120 BPM once clean.',
            ],
          },
          {
            title: 'Palm mute drill',
            steps: [
              'Rest the side of your picking hand lightly on the strings just above the bridge.',
              'Play E5 with palm mute 4× then without mute 4×. Hear the tightness difference.',
              'Pattern: PM-PM-PM-PM open-open-open-open (alternating every 4 beats).',
            ],
          },
        ],
        tips: [
          'Keep the muted strings silent — place the fingers at a slight angle to touch the strings above.',
          'For a three-note power chord, add the octave: root at fret N (string 6), 5th at N+2 (string 5), octave at N+2 (string 4).',
          'Tune down a half step (Eb) or whole step (D) to get heavier tone — common in rock and metal.',
          'Over-squeezing causes hand fatigue. Use the minimum pressure needed to keep both notes clear.',
        ],
      },
    },

    {
      id: 'r2',
      title: 'Pentatonic Scale',
      desc: 'Five-position minor pentatonic across the neck.',
      tags: ['beginner'],
      lesson: {
        objective: 'Play all five CAGED positions of the minor pentatonic scale and connect them across the neck in the key of A.',
        concepts: [
          'The minor pentatonic scale has 5 notes: root, b3, 4, 5, b7. In A: A–C–D–E–G.',
          'It fits over minor chords, dominant 7 chords, and most rock/blues progressions.',
          'The five CAGED positions cover the entire neck. Most players start with Position 1 (box pattern).',
          'Position 1 (A minor pentatonic): root on string 6 fret 5.',
          'The pentatonic is "wrong note proof" — every note sounds good over an A5 or Am chord.',
          'Connecting positions: the top of one box overlaps with the bottom of the next.',
        ],
        diagram: `A Minor Pentatonic — Position 1 (box pattern)
e --5--8--
B --5--8--
G --5--7--
D --5--7--
A --5--7--
E --5--8--
  (5th fret = A)

Position 2 (starts at fret 7):
e --8--10-
B --8--10-
G --7--9--
D --7--9--
A --7--10-
E --8--10-`,
        exercises: [
          {
            title: 'Position 1 ascending/descending',
            steps: [
              'Play Position 1 from low E string to high e, then back down.',
              'Use strict alternate picking: down-up-down-up on every note.',
              '60 BPM with metronome, one note per beat.',
              'Increase to 120 BPM over one week.',
            ],
          },
          {
            title: 'Positions 1 and 2 connection',
            steps: [
              'Play Position 1 ascending. When you reach the top, continue into Position 2 without stopping.',
              'Come back down Position 2 into Position 1.',
              'The overlap zone is frets 7–8 on strings 1 and 2 — those notes belong to both positions.',
            ],
          },
          {
            title: 'Simple 4-bar rock lick',
            steps: [
              'Within Position 1, play: E string fret 5, 8 → A string 5, 7 → D string 5, 7.',
              'Add a bend on D string fret 7 (whole step up).',
              'End on A string fret 5 (the root A).',
              'This is a complete musical phrase — repeat it over an Am or A5 vamp.',
            ],
          },
        ],
        tips: [
          'Learn the scale by its sound first, not just its shape. Sing every note as you play it.',
          'Avoid "running the box" — a scale exercise is not a solo. Focus on making musical phrases.',
          'The root notes (A) are your home base. Always know where they are in each position.',
          'Listen to Angus Young (AC/DC), Jimmy Page (Led Zeppelin) — both build most solos from pentatonic.',
        ],
      },
    },

    {
      id: 'r3',
      title: 'String Bending',
      desc: 'Whole-step and half-step bends with proper hand support.',
      tags: ['intermediate', 'technique'],
      lesson: {
        objective: 'Execute clean whole-step and half-step bends in tune on strings 1–3, using all supporting fingers.',
        concepts: [
          'A bend raises the pitch of a note by pushing or pulling the string perpendicular to the fretboard.',
          'Half-step bend (H) raises by 1 semitone. Whole-step bend (W) raises by 2 semitones.',
          'Always use 2–3 fingers behind the bending finger to share the load (supporting fingers).',
          'Bend in tune — the target pitch of a whole-step bend is the same as the note 2 frets higher.',
          'Check intonation: play the target note normally, then bend up to it and compare.',
          'Direction: strings 1–3 bend upward (toward ceiling). Strings 4–6 can bend downward.',
        ],
        diagram: `Whole-step bend on G string fret 7 → target = fret 9 (A):
e |-------------------------------|
B |-------------------------------|
G |--7b9--------------------------|  (bend fret 7 up to the pitch of fret 9)
D |-------------------------------|

Pre-bend + release:
G |--7pb9r7-----------------------| (bend first silently, pluck at top, release)

Classic rock bend lick (A minor pentatonic box):
e |--5--8--5--8b10r8--5-----------|
B |--5--8-------------------------|`,
        exercises: [
          {
            title: 'Half-step bend intonation check',
            steps: [
              'Fret B string at fret 7. Play fret 8 (half step up) and let it ring. Remember that pitch.',
              'Now bend fret 7 up until it matches fret 8. Hold for 2 seconds.',
              'Release slowly back to fret 7.',
              'Repeat 20 times. Intonation must be exact — even a 10% flat or sharp is audible.',
            ],
          },
          {
            title: 'Supporting fingers drill',
            steps: [
              'Place ring finger on G string fret 9. Lay middle and index fingers behind it (frets 8 and 7).',
              'Now bend with all three fingers pushing together — the ring finger guides, others power.',
              'Without the support, the bend will feel weak and go flat. Compare the two approaches.',
            ],
          },
          {
            title: 'Bend vocabulary',
            steps: [
              'Whole-step bend: G string fret 7 → pitch of fret 9.',
              'Pre-bend and release: bend silently to top, pluck, release to original pitch.',
              'Unison bend: bend G string fret 7 while ringing B string fret 8 simultaneously — must match pitch.',
              'Practice each type 10 times per session.',
            ],
          },
        ],
        tips: [
          'Bending flat is the most common error — always err slightly sharp then release to pitch.',
          'Your wrist drives the bend, not just your fingers — rotate from the wrist like turning a screwdriver.',
          'Lighter string gauge (9–42) bends more easily than heavy gauge (11–52).',
          'Slow your vibrato after a bend to let the bent note breathe before adding movement.',
        ],
      },
    },

    {
      id: 'r4',
      title: 'Palm Muting & Rhythm',
      desc: 'Tight palm-muted riffs in 4/4 with a click track.',
      tags: ['intermediate', 'technique'],
      lesson: {
        objective: 'Play an 8-bar rock rhythm part with palm-muted and open power chords, keeping tight 16th-note subdivision.',
        concepts: [
          'Palm muting (PM): rest the edge of the picking hand on the strings just over the bridge saddles.',
          'Too far from bridge = dead thud. Too close = normal open sound. The sweet spot is roughly 1cm from the saddles.',
          'Downpicking vs alternate picking: classic rock uses mostly downstrokes for weight; metal uses alternate for speed.',
          'Syncopation: placing accents on the off-beats (&s) creates groove — "chug-chug CHUG chug".',
          '16th-note counting: 1 e & a 2 e & a 3 e & a 4 e & a. Each beat divides into 4 equal parts.',
          'Consistent picking angle and speed are more important than picking power.',
        ],
        diagram: `Classic punk/rock rhythm (E5):
Counting: 1  e  &  a  2  e  &  a  3  e  &  a  4  e  &  a
Picking:  D     D     D     D     D     D     D     D
          PM PM PM PM PM PM PM PM  ↑    ↑  PM PM  ↑    ↑

Mixed PM and open riff (E5–G5–A5):
E |--0--0--0--3--3--5--5--3--|
A |--2--2--2--5--5--7--7--5--|
PM|PM PM PM PM PM  ↑  ↑  PM |`,
        exercises: [
          {
            title: 'Pure palm-mute drill',
            steps: [
              'Set metronome to 100 BPM. Hold E5.',
              'Downstroke on every 16th note (4 strokes per beat) with palm mute engaged.',
              'All notes must be exactly the same volume and length — no accent, no gaps.',
              'If you hear unevenness, slow to 80 BPM and use a metronome.',
            ],
          },
          {
            title: 'Open-PM contrast accent',
            steps: [
              'Pattern: 3 PM strokes + 1 open (accent) on beat 4: PM–PM–PM–OPEN.',
              'The open accent should be noticeably louder.',
              'Add a chord change on the accent: E5 PM pattern → G5 on accent.',
            ],
          },
          {
            title: '8-bar rock groove',
            steps: [
              'Bars 1–4: E5 full PM 16ths at 110 BPM.',
              'Bar 5: E5 → G5 → A5 with accented open strums on beats 2 and 4.',
              'Bars 7–8: return to E5 PM, ending on a big open strum on beat 1 of bar 9.',
              'Repeat 8 bars without stopping. Record yourself to check timing.',
            ],
          },
        ],
        tips: [
          'The pick angle matters — a slight angle (pick tilted toward headstock) gives tighter attack.',
          'Synchronize: left hand must mute exactly as right hand strikes. Even a 10ms mismatch sounds loose.',
          'Practice with a physical metronome rather than a track — the bare click exposes every gap.',
          'Watch Tom Morello and Tony Iommi rhythm guitar — study how they lock in with the drummer.',
        ],
      },
    },

    {
      id: 'r5',
      title: 'Blues-Rock Licks',
      desc: 'Combine pentatonic with blue notes for expressive soloing.',
      tags: ['intermediate'],
      lesson: {
        objective: 'Play three distinct blues-rock licks over an A minor backing, incorporating bends, slides, and the blues b5.',
        concepts: [
          'Blues-rock vocabulary layers two scales: minor pentatonic (A–C–D–E–G) + blues scale adds the b5 (Eb).',
          'The b5 (Eb in A) is the "blue note" — it creates tension between D and E. Use it as a passing tone, not a resting note.',
          'Slides: approach a target note from 2 frets below or above. Creates a vocal, legato feel.',
          'Hammer-ons and pull-offs: sound a note without picking it, using left-hand force.',
          'Vibrato: after a sustained note, oscillate the pitch slightly by rolling the fretting finger.',
          'Call and response: play a lick (call), pause (response), play another lick that answers it.',
        ],
        diagram: `Lick 1 — Classic BB King-style bend (A pentatonic)
e |--8b10--8--5--8--5-------|
B |------------------8--5---|

Lick 2 — Sliding blues line
e |--5/7--8--5/7--5---------|
B |------------------8b10---|
G |-------------------------|

Lick 3 — b5 passing tone (Eb)
e |--5--6--5--8-------------|
B |--5--6--5--8b10----------|
    (6 = Eb, the blue note in A)`,
        exercises: [
          {
            title: 'Learn each lick in isolation',
            steps: [
              'Play Lick 1 at 70 BPM until every bend is in tune and every note speaks clearly.',
              'Same for Lick 2 — the slide should arrive exactly on the beat.',
              'Same for Lick 3 — let the Eb ring briefly before resolving to E (one fret up).',
            ],
          },
          {
            title: 'Chain licks with space',
            steps: [
              'Over a 12-bar A blues backing: Lick 1 in bar 1, REST bars 2–3, Lick 2 in bar 4.',
              'Silence is part of the solo. Do not fill every bar.',
              'Match your phrase endings to where the chord changes (bar 5 = D chord).',
            ],
          },
          {
            title: 'Vibrato development',
            steps: [
              'Hold the G string fret 5 (A note). After 1 beat, add vibrato: rock the finger in a tight loop.',
              'Width: approximately a quarter-step sharp and back. Speed: roughly 3–4 oscillations per beat.',
              'Listen to Gary Moore or Stevie Ray Vaughan for reference vibrato width and speed.',
            ],
          },
        ],
        tips: [
          'The space between licks is as important as the licks themselves — breathe like a singer.',
          'Steal licks from your favourite solos — transcription is the best teacher.',
          'Develop your own vibrato style. Speed and width are personal — there is no universally "correct" vibrato.',
          'Play over actual backing tracks (not just a metronome) — the drums and bass change what feels right.',
        ],
      },
    },

    {
      id: 'r6',
      title: 'Alternate Picking Speed',
      desc: 'Build speed with strict down-up alternate picking drills.',
      tags: ['advanced', 'technique'],
      lesson: {
        objective: 'Play a 16th-note scale run cleanly at 140 BPM using strict alternate picking with zero tension.',
        concepts: [
          'Alternate picking: every note is played with a strict down-up-down-up motion, regardless of string changes.',
          'Economy of motion is the goal — the pick should travel just past the string, not wide arcs.',
          'Speed is a byproduct of relaxation. Tension in the forearm, wrist, or shoulder is the main speed limiter.',
          'The "picking anchor": rest your pinky or ring finger lightly on the guitar body for stability.',
          'String crossing: when moving from one string to the next, the pick must angle slightly to avoid hitting adjacent strings.',
          'Metronome method: practice at a tempo where you play perfectly. Increase by 5 BPM only when clean.',
        ],
        diagram: `A minor pentatonic — alternate picking (Position 1)
D = downstroke, U = upstroke

e |--D-U-D-U-|
B |--D-U-D-U-|
G |--D-U-D-U-|
D |--D-U-D-U-|
A |--D-U-D-U-|
E |--D-U-D-U-|

Chromatic warm-up (4 fingers, 4 frets):
e |--5-6-7-8--8-7-6-5--|
B |--5-6-7-8--8-7-6-5--|
   D U D U   D U D U`,
        exercises: [
          {
            title: 'Chromatic crawl — 4 fingers, 4 frets',
            steps: [
              'Starting at fret 5, string 6: index=5, middle=6, ring=7, pinky=8.',
              'Play all four notes, strict alternate picking, then move to string 5. Continue to string 1.',
              'Come back down from string 1 to string 6.',
              'Start at 60 BPM. Aim for 16th notes. Increase weekly by 5 BPM.',
            ],
          },
          {
            title: 'Tension check',
            steps: [
              'While playing at your current top speed: consciously relax your forearm, wrist, and jaw.',
              'If the playing collapses when you relax — that tempo is too fast.',
              'Back off 20 BPM. Speed built on tension is temporary and risks injury.',
            ],
          },
          {
            title: 'Burst practice',
            steps: [
              'Play 4 notes at full target speed, then pause for 1 beat, then 4 more notes.',
              'Bursts train the nervous system without full sustained tension.',
              'Gradually extend: 4 notes → 8 → 12 → 16 before adding rests.',
            ],
          },
        ],
        tips: [
          'Practice in front of a mirror — bad technique is visible before it is audible.',
          'Small picks (Jazz III style) reduce the range of motion needed for speed.',
          'Start every session at slow tempos — speed practice on cold tendons causes injury.',
          'Troy Grady\'s "Cracking the Code" on YouTube is the definitive resource on picking mechanics.',
        ],
      },
    },

    {
      id: 'r7',
      title: 'Lead Tone & Effects',
      desc: 'Dial in overdrive, delay, and reverb for classic rock leads.',
      tags: ['advanced'],
      lesson: {
        objective: 'Build a lead guitar signal chain that works in a mix: clean tone → overdrive → delay → reverb.',
        concepts: [
          'Signal chain order matters: Guitar → Tuner → Compressor → Overdrive → Amp → (FX loop:) Delay → Reverb.',
          'Overdrive (OD): adds harmonic saturation. Low gain = blues crunch. High gain = rock sustain.',
          'Delay: echo effect. Slapback (80–120ms, 1 repeat, 0 modulation) = rockabilly/classic rock. 400–500ms = U2-style leads.',
          'Reverb: adds space. Room/plate reverb sits behind the note. Spring reverb is vintage and "jumpy".',
          'Less is more: each effect should be audible but not dominate. If you have to ask "is it on?", it is set right.',
          'EQ for leads: boost the high-mids (2–4kHz) to cut through a mix. Cut low-mids (200–400Hz) to reduce mud.',
        ],
        diagram: `Signal chain diagram:
Guitar → [Tuner] → [Compressor] → [Overdrive/Distortion]
       → Amp (clean or slightly broken up)
       → [FX Loop SEND] → [Delay] → [Reverb] → [FX Loop RETURN]

Delay setting for rock lead:
  Time: 375ms (dotted eighth at 120 BPM = 750ms ÷ 2)
  Feedback: 2–3 repeats
  Mix: 20–30% wet

Overdrive (Tube Screamer style):
  Drive: 9 o'clock (mild) to 12 o'clock (medium)
  Tone: 12–2 o'clock
  Level: match or slightly above unity gain`,
        exercises: [
          {
            title: 'A/B overdrive test',
            steps: [
              'Play a pentatonic lick completely clean (bypass all effects).',
              'Enable overdrive at 9 o’clock drive. Play same lick.',
              'Increase drive to 12 o’clock. Play same lick.',
              'Notice how attack, sustain, and harmonic content change at each level.',
            ],
          },
          {
            title: 'Delay tempo sync',
            steps: [
              'Set your backing track BPM (e.g., 120 BPM).',
              'Dotted 8th delay = 60,000 ÷ BPM × 1.5 milliseconds = 750ms at 120.',
              'Set delay time to 750ms, 2 repeats, 25% mix.',
              'Play straight 8th notes — the delay fills in the off-beats, creating a rhythmic doubling.',
            ],
          },
          {
            title: 'Tone stack sculpting',
            steps: [
              'With band (or backing track): play your lead with all knobs at noon.',
              'Boost presence/treble until the lead sits above the mix without harshness.',
              'Cut bass on the amp or OD pedal until no low-end mud conflicts with the kick drum.',
            ],
          },
        ],
        tips: [
          'Tone is 70% fingers, 20% amp, 10% pedals. No effect compensates for poor technique.',
          'Always set your delay and reverb in context of a full mix — they will sound completely different than in a quiet room.',
          'Buffered vs true-bypass pedals: in a long chain, at least one buffered pedal helps maintain signal integrity.',
          'Listen to David Gilmour (Pink Floyd) for textbook delay use, and Eric Johnson for clean overdrive tone.',
        ],
      },
    },
  ],

  // ─── BLUES ───────────────────────────────────────────────────────────────
  blues: [
    {
      id: 'b1',
      title: '12-Bar Blues Form',
      desc: 'Master the 12-bar I–IV–V structure in E and A.',
      tags: ['beginner', 'theory'],
      lesson: {
        objective: 'Play and identify the 12-bar blues form in E and A, using the quick-change and turnaround variations.',
        concepts: [
          'The 12-bar blues is a repeating 12-measure chord progression that underlies most blues and rock.',
          'Standard 12-bar in E: E7 (4 bars) | A7 (2 bars) | E7 (2 bars) | B7 (1 bar) | A7 (1 bar) | E7–B7 (2 bars = turnaround).',
          'Quick change variation: bar 2 goes to IV (A7) briefly, then returns to I.',
          'Roman numerals: I = tonic, IV = subdominant (4 semitones up), V = dominant (7 semitones up).',
          'In E: I=E7, IV=A7, V=B7. In A: I=A7, IV=D7, V=E7.',
          'Dominant 7 chords throughout give blues its characteristic tension — even the "home" chord has a b7.',
        ],
        diagram: `12-Bar Blues in E (standard):
Bar:  | 1    | 2    | 3    | 4    |
      | E7   | E7   | E7   | E7   |

Bar:  | 5    | 6    | 7    | 8    |
      | A7   | A7   | E7   | E7   |

Bar:  | 9    | 10   | 11   | 12   |
      | B7   | A7   | E7   | B7   |
                              ^ turnaround

Quick-change variation (bar 2 = A7):
Bar:  | 1    | 2    | 3    | 4    |
      | E7   | A7   | E7   | E7   |`,
        exercises: [
          {
            title: 'Count and clap the form',
            steps: [
              'Without a guitar: listen to a 12-bar blues and count every bar aloud: "1, 2, 3, 4 | 2, 2, 3, 4 |..." up to 12.',
              'Clap on beat 1 of every bar. On bar 5, 9, 10 — you should feel the chord change instinctively.',
              'Try this with three different songs before picking up the guitar.',
            ],
          },
          {
            title: 'Strum the 12-bar in E',
            steps: [
              'Use open E7, A7, B7 chords. Set metronome to 80 BPM.',
              'Strum 4 beats per bar. Count the form while playing — never lose your place.',
              'Practice until the chord changes are automatic — no counting needed.',
            ],
          },
          {
            title: 'Transpose to A',
            steps: [
              'Replace E7 → A7, A7 → D7, B7 → E7.',
              'Play the same 12-bar form in A. Notice how many songs use this exact pattern.',
              'Play along to: "Johnny B. Goode" (Bb), "Pride and Joy" (E), "Crossroads" (A).',
            ],
          },
        ],
        tips: [
          'The form is a loop — bar 12 (turnaround) leads directly back to bar 1.',
          'Knowing the form cold lets you improvise without thinking about where you are — that is the goal.',
          'A quick change in bar 2 is common in slower, more traditional blues. Recognize it by ear.',
          'If you get lost during a solo, listen for the V chord (B7 in E) — it always lands on bar 9.',
        ],
      },
    },

    {
      id: 'b2',
      title: 'Shuffle Feel',
      desc: 'Swing eighth-note rhythms with a shuffle groove.',
      tags: ['beginner', 'technique'],
      lesson: {
        objective: 'Strum or fingerpick a shuffle rhythm that grooves with a blues drummer, using the swing ratio.',
        concepts: [
          'Straight 8th notes divide a beat evenly. Shuffle (swing) 8th notes are uneven: the first is long, the second is short.',
          'Notated as "shuffle" or "swing 8ths". The ratio is approximately 2:1 (like a triplet with the middle note missing).',
          'Counted: "1-trip-let, 2-trip-let" but only play on "1" and "let".',
          'Classic blues shuffle rhythm: two notes per string alternating between the 5th and 6th degree on the low strings.',
          'The boogie pattern: root on open E, then fret the 5th (A string fret 2) and 6th (A string fret 4) alternately.',
          'Shuffle feel is an interpretation, not just a pattern — listen and feel before analyzing.',
        ],
        diagram: `E Shuffle Boogie Pattern:
Counting: 1 (trip) let  2 (trip) let  3 (trip) let  4 (trip) let
e |--------------------------------|
B |--------------------------------|
G |--------------------------------|
D |--------------------------------|
A |--2--4--2--4--2--4--2--4--------|  (5th and 6th degree)
E |--0-----0-----0-----0-----------|  (root)

Full shuffle chord (E7 style):
A |--2--4--|  ← alternate these two
E |--0-----|  ← root always rings`,
        exercises: [
          {
            title: 'Clap the shuffle',
            steps: [
              'Say aloud: "1-trip-LET, 2-trip-LET, 3-trip-LET, 4-trip-LET".',
              'Clap only on the caps: "1" and "LET" (the 1st and 3rd of each triplet).',
              'Feel the long-short unevenness. That is the shuffle groove.',
            ],
          },
          {
            title: 'E boogie shuffle',
            steps: [
              'Open low E string = beat. A string fret 2 = "let".',
              'Alternate: E open (beat 1) → A fret 2 (let 1) → E open (beat 2) → A fret 4 (let 2) → ...',
              'Count and strum at 80 BPM. The A fret 4 adds the 6th for a more "boogie" sound.',
              'Move the same pattern up 5 frets for the A7 section and 7 frets for B7.',
            ],
          },
          {
            title: 'Play with a shuffle backing track',
            steps: [
              'Search for "slow blues shuffle in E backing track".',
              'Play only the boogie pattern — focus on locking with the drummer\'s hi-hat.',
              'The secret: your rhythm must make someone want to tap their foot.',
            ],
          },
        ],
        tips: [
          'The shuffle feel lives in the hips, not the head. Feel it physically before trying to analyze it.',
          'Playing a triplet-based shuffle over a straight-groove drummer (or vice versa) creates immediate clash — match the driver.',
          'Listen to Muddy Waters, Robert Johnson, and BB King — absorb hundreds of hours of shuffle.',
          'Slow down to really feel the groove: 60 BPM shuffle will teach you more than 140 BPM shuffle.',
        ],
      },
    },

    {
      id: 'b3',
      title: 'Blues Scale',
      desc: 'The six-note blues scale and where to use the b5 "blue note".',
      tags: ['intermediate'],
      lesson: {
        objective: 'Play the A blues scale in position, identify and use the b5 as a passing tone, and compose a blues phrase around it.',
        concepts: [
          'Blues scale = minor pentatonic + one note: the b5 (diminished 5th, or "blue note").',
          'A blues scale: A–C–D–Eb–E–G. The Eb sits between D (4th) and E (5th).',
          'The b5 creates dissonance that wants to resolve — slide into it from below (D→Eb) then push to E.',
          'Never rest on the b5 — use it as a chromatic passing tone between the 4th and 5th.',
          'The b5 is what makes the blues sound "wrong in a right way" — it is the core tension note.',
          'Position: in the box pattern (Position 1, key of A), the b5 appears on strings 2 and 5, one fret above the standard position.',
        ],
        diagram: `A Blues Scale (Position 1):
e |--5--8----------|
B |--5--6--8-------|  ← 6 = Eb (blue note)
G |--5--7----------|
D |--5--6--7-------|  ← 6 = Eb (blue note)
A |--5--7----------|
E |--5--8----------|

Comparison:
A minor pentatonic: A C D  E G
A blues scale:      A C D Eb E G
                           ↑ added`,
        exercises: [
          {
            title: 'Scale with blue note highlighted',
            steps: [
              'Play A blues scale ascending, stopping on the Eb (fret 6 string 2).',
              'Let the Eb ring for 2 beats, then slide/pull to E (fret 7).',
              'Hear the tension and the resolution.',
              'Repeat with the Eb on string 4 (fret 6).',
            ],
          },
          {
            title: 'Blue note approach lick',
            steps: [
              'Play D (string 2 fret 5) → Eb (fret 6) → E (fret 7) → bend E up a whole step to F#.',
              'This 4-note phrase is a classic blues gesture.',
              'Repeat starting on the beat, then starting on the off-beat.',
            ],
          },
          {
            title: 'Compose a 2-bar phrase',
            steps: [
              'Over an A7 chord vamp, construct a 2-bar phrase that includes the blue note exactly once.',
              'Start on a chord tone (A, C, or E). End on a chord tone. The Eb passes through.',
              'Record it. Listen back. Does the blue note create tension and resolve?',
            ],
          },
        ],
        tips: [
          'The b5 is powerful because it is rare — overusing it makes the "wrong-right" feeling disappear.',
          'Eric Clapton and Stevie Ray Vaughan both use the blue note surgically — listen for it.',
          'The blue note is about emotion, not theory. Play it slowly, hold it, feel it.',
          'In a major-key blues, the minor 3rd (C over A) also acts as a blue note — same principle.',
        ],
      },
    },

    {
      id: 'b4',
      title: 'Call & Response Phrases',
      desc: 'Construct question-and-answer melodic phrases.',
      tags: ['intermediate'],
      lesson: {
        objective: 'Improvise 4-bar call-and-response phrases where each "call" ends with tension and each "response" resolves.',
        concepts: [
          'Call and response is the melodic structure of blues improvisation. The call asks a musical question; the response answers it.',
          'A call often ends on a non-root note (tension), leaving the phrase "open".',
          'A response resolves to the root or a chord tone (resolution), closing the phrase.',
          'Duration: call = bars 1–2, response = bars 3–4. Or: call = 1 bar, response = 1 bar.',
          'The response does not have to be the same notes — it just has to feel like an answer.',
          'Space is essential: the silence between call and response IS part of the phrase.',
        ],
        diagram: `4-bar call-and-response structure:
| BAR 1         | BAR 2              |
| CALL (lick)   | silence / tail     | ← ends on 9th or 5th (tension)

| BAR 3         | BAR 4              |
| RESPONSE lick | resolve to root    | ← ends on root (resolution)

Example in A:
Call:     |--8b10--8--5--|----------|
          (tension: ends on E, the 5th)

Response: |--8b10--8--5--|--7--5----|
          (resolution: ends on A, the root at fret 5 string 6)`,
        exercises: [
          {
            title: 'One-phrase call only',
            steps: [
              'Play a 2-bar lick that ends on the 5th (E in A blues). Stop. Let it hang.',
              'That tension is what the audience leans into. Do not fill it — hold the silence.',
            ],
          },
          {
            title: 'Add the response',
            steps: [
              'After the call: play a 2-bar phrase that ends on the root (A, fret 5 string 6 or open A).',
              'The response can be completely different rhythm and notes — only the ending matters.',
              'Repeat call + response 8 times. Each repeat, change at least one element.',
            ],
          },
          {
            title: 'Vary the response',
            steps: [
              'Same call every time. Change only the response: high on the neck, then low; long notes, then short.',
              'This shows how one call can be answered many ways — like a question in language.',
            ],
          },
        ],
        tips: [
          'BB King was the master of call and response. Study "The Thrill Is Gone" for textbook phrasing.',
          'If you cannot sing the phrase before you play it, you do not know what you are trying to say.',
          'Less is more: a 3-note call followed by silence is more powerful than 16 notes of running.',
          'Record your improvisation, then transcribe your favorite call-response pair. Analyze why it worked.',
        ],
      },
    },

    {
      id: 'b5',
      title: 'Vibrato & Expression',
      desc: 'Develop slow, wide finger vibrato for emotional bends.',
      tags: ['intermediate', 'technique'],
      lesson: {
        objective: 'Produce consistent, wide, in-control vibrato on a sustained note in three speeds: slow, medium, fast.',
        concepts: [
          'Vibrato is a slight, rhythmic fluctuation of pitch above a sustained note.',
          'Classical vibrato oscillates above and below the pitch. Guitar vibrato goes above the pitch only (unless on a whammy bar).',
          'Two types: wrist vibrato (most common in rock/blues) and arm/finger vibrato (classical, jazz).',
          'Wrist vibrato: the wrist rocks back and forth as if turning a small knob, pulling the string up and relaxing.',
          'Width: how far the pitch rises. Narrow (quarter-step) = subtle. Wide (whole-step) = dramatic.',
          'Speed: fast vibrato = excitement, urgency. Slow vibrato = vocal, soulful.',
        ],
        diagram: `Vibrato notation:
e |--9~~~~--|   (tilde marks = vibrato)

Wrist motion for vibrato on string 2 (B):
  Neutral: finger on fret 9
  Pull:    wrist rotates → string bends up ~quarter step
  Return:  wrist releases → back to neutral
  Repeat:  smooth, even oscillation

Wide, slow vibrato (SRV style):
  Width: half to whole step above pitch
  Speed: 2–3 oscillations per second`,
        exercises: [
          {
            title: 'Slow metronome vibrato',
            steps: [
              'Fret B string fret 9. Let it ring for one beat.',
              'On beat 2: begin vibrato. One oscillation per metronome beat at 60 BPM.',
              'Slow vibrato is the hardest to control — every imperfection is audible.',
              'Increase speed to 2 oscillations per beat, then 4.',
            ],
          },
          {
            title: 'Width comparison',
            steps: [
              'Vibrato with quarter-step width. Record it.',
              'Vibrato with half-step width. Record it.',
              'Vibrato with whole-step width. Record it.',
              'Play back all three — choose which feels most expressive for you.',
            ],
          },
          {
            title: 'Delayed vibrato entry',
            steps: [
              'Strike a note. Hold perfectly still for 2 beats.',
              'On beat 3: add vibrato slowly, gradually increasing width.',
              'This "swelling" technique is used by BB King, Clapton, Gilmour — it is deeply emotional.',
            ],
          },
        ],
        tips: [
          'Vibrato is your singing voice on the guitar — develop your signature sound, not a copy of someone else\'s.',
          'Bad vibrato (wobbly, uneven, inconsistent) is worse than no vibrato. Practice control before width.',
          'Keep the thumb behind the neck — it anchors the wrist rotation.',
          'Listen to: BB King (wide and fast), David Gilmour (wide and slow), Carlos Santana (medium, very controlled).',
        ],
      },
    },

    {
      id: 'b6',
      title: 'Turnarounds',
      desc: 'Classic turnaround licks in bars 11–12 of the blues form.',
      tags: ['advanced'],
      lesson: {
        objective: 'Play three turnaround licks in E blues that set up the return to bar 1, finishing cleanly on the V chord.',
        concepts: [
          'The turnaround occupies bars 11–12 of the 12-bar blues. It prepares the ear to hear bar 1 again.',
          'Harmonically: I chord → movement toward V chord, which resolves back to I when the form repeats.',
          'Structurally: a descending chromatic line on strings 1–2, with a static low E drone bass.',
          'The final note of the turnaround is typically the V chord (B7 in E) or a single note (B or F#) anticipating bar 1.',
          'Turnarounds can be played at any speed — more notes at faster tempos, fewer at slow ballad tempos.',
          'Classic turnaround voicings move through chromatic half-step positions.',
        ],
        diagram: `Turnaround Lick 1 — Descending chromatic (key of E):
e |--0-----|--0-----|--0-----|--0------|
B |--------|--3-----|--2-----|--1------|--0--|
         E7      Eb7     D7      Db7   B7

Lick 2 — Single note turnaround:
e |--0--4--3--2--1--0---4-------------|
               (resolves to B7 on last beat)

Lick 3 — Boogie-style turnaround:
E |--0--0--0--0--0--0--0--0--|
A |--2--2--4--4--2--2--0--0--|  → B7 strum`,
        exercises: [
          {
            title: 'Learn Turnaround Lick 1',
            steps: [
              'Play the descending chord sequence: E7 → Eb7 → D7 → Db7 → B7.',
              'Two beats per chord at 80 BPM — exactly fills 2 bars.',
              'Keep the high e string (open) ringing throughout as a drone.',
              'Land hard on B7 and let it ring into bar 1.',
            ],
          },
          {
            title: 'Slot into the 12-bar',
            steps: [
              'Play a complete 12-bar blues in E. In bar 11, insert Turnaround Lick 1.',
              'Bar 12 lands on B7 (Lick 1 ending) → bar 1 begins with E7.',
              'The turnaround should feel like a sentence ending and a new sentence beginning.',
            ],
          },
          {
            title: 'Vary the turnaround',
            steps: [
              'Bars 1–10: same blues groove. Bar 11: use Lick 1. Then repeat with Lick 2. Then Lick 3.',
              'Eventually mix turnarounds freely. The form stays the same; only the ending varies.',
            ],
          },
        ],
        tips: [
          'A turnaround must ALWAYS land on the V chord (B7 in E) — that tension pulls back to bar 1.',
          'Keep turnarounds simple at first. One clean descending line beats a flashy mess.',
          'Robert Johnson and Muddy Waters have distinct turnaround vocabularies — transcribe one from each.',
          'In a band context, signal the turnaround visually (eye contact or body movement) so the rhythm section follows.',
        ],
      },
    },

    {
      id: 'b7',
      title: 'T-Bone Walker Style',
      desc: 'Jump blues comping and single-note lines in the style of T-Bone Walker.',
      tags: ['advanced'],
      lesson: {
        objective: 'Comp jazz-influenced jump blues chords and play a 4-bar single-note line in the key of Bb in the style of T-Bone Walker.',
        concepts: [
          'T-Bone Walker bridged the gap between jazz and blues guitar — his style is rhythmically complex with jazz-chord voicings.',
          'Jump blues uses the 12-bar form but with a swinging, big-band feel. The tempo is faster (130–160 BPM).',
          'Chord voicings: T-Bone used 9th and 13th chords (e.g., Bb9, Eb13) instead of plain 7ths.',
          'Bb9 voicing: x–1–0–1–0–x. Eb13 voicing: x–6–5–6–5–x. These move up and down the neck as a single shape.',
          'Picking technique: T-Bone often held the pick between the thumb and first two fingers for a looser, jazzier attack.',
          'Single-note lines: T-Bone played clean, articulate single-note phrases with wide interval jumps, unlike the boxier pentatonic lines of later blues players.',
        ],
        diagram: `Bb9 Chord (T-Bone voicing):
e --x--
B --x--
G --3--
D --2--
A --1--
E --x--

Eb13 Chord:
e --x--
B --3--
G --3--
D --3--
A --x--
E --6--

T-Bone style lick (key of Bb):
e |--6--8--6----8b10--6--8--6--4--|
B |------------------------------|`,
        exercises: [
          {
            title: 'Jump blues rhythm with 9th chords',
            steps: [
              'Comp Bb9 on beats 2 and 4 (jazz stab feel) at 130 BPM.',
              'Move to Eb9 on bar 5 — same shape shifted up 5 frets.',
              'The chord should be a sharp, percussive stab — not strummed slowly.',
            ],
          },
          {
            title: 'T-Bone single-note line',
            steps: [
              'Learn the example lick at 80 BPM. Focus on even 8th notes and clean bend intonation.',
              'Notice the jump from the low note to the bent note — T-Bone used dramatic interval leaps.',
              'Transpose the lick to Eb7 (shift everything up 5 frets).',
            ],
          },
          {
            title: 'Mix comping and soloing',
            steps: [
              'Play 4 bars of Bb9 comping. Stop comping, play 4 bars of single-note lines. Return to comping.',
              'This alternation is the essence of T-Bone\'s solo guitar approach.',
              'Listen to "Call It Stormy Monday" and "T-Bone Shuffle" for direct reference.',
            ],
          },
        ],
        tips: [
          'T-Bone Walker is the direct ancestor of BB King, Freddie King, and almost every electric blues player — understanding him resets your whole view of the blues.',
          'Use a clean or very light crunch tone. T-Bone predated heavy distortion.',
          'Your left hand should be relaxed — T-Bone\'s jazz-influenced approach avoided the tight grip of Delta blues.',
          'The swing must be authentic — if the drummer and bassist are playing jump, you must swing too.',
        ],
      },
    },
  ],

  // ─── POP ─────────────────────────────────────────────────────────────────
  pop: [
    {
      id: 'p1',
      title: 'Beginner Open Chords',
      desc: 'G, C, D, Em, Am — the core of most pop songs.',
      tags: ['beginner'],
      lesson: {
        objective: 'Fret and strum G, C, D, Em, Am with clean tone, and switch between any two in under 2 seconds.',
        concepts: [
          'These five chords (G C D Em Am) are in more than half of all popular songs ever written.',
          'G Major: fingers on strings 6 (fret 3), 5 (fret 2), 1 (fret 3). Strum all 6 strings.',
          'C Major: fingers on strings 2 (fret 1), 4 (fret 2), 5 (fret 3). Mute string 6.',
          'D Major: fingers on strings 1 (fret 2), 2 (fret 3), 3 (fret 2). Strum strings 1–4 only.',
          'Em Major: fingers on strings 5 (fret 2), 4 (fret 2). Strum all 6.',
          'Am Major: fingers on strings 2 (fret 1), 3 (fret 2), 4 (fret 2). Mute string 6.',
        ],
        diagram: `G               C               D
e --3--          e --0--          e --2--
B --3--          B --1--          B --3--
G --0--          G --0--          G --2--
D --0--          D --2--          D --0--
A --2--          A --3--          A --x--
E --3--          E --x--          E --x--

Em              Am
e --0--          e --0--
B --0--          B --1--
G --0--          G --2--
D --2--          D --2--
A --2--          A --0--
E --0--          E --x--`,
        exercises: [
          {
            title: 'One-minute chord changes',
            steps: [
              'Set a timer for 1 minute.',
              'Switch between G and C as many times as possible.',
              'Count each successful, clean change. Write the number down.',
              'Rest 1 minute. Repeat. Try to beat your previous score.',
              'Rotate: G↔D, D↔Em, Em↔Am, Am↔C.',
            ],
          },
          {
            title: '4-chord pop loop',
            steps: [
              'G → Em → C → D, one chord per bar at 70 BPM.',
              'Strum 4 downstrokes per bar.',
              'Recognize this progression — it is in: "Let Her Go", "With or Without You", "Take Me to Church".',
            ],
          },
          {
            title: 'Name that chord',
            steps: [
              'Have a friend (or use flashcards) call out a chord name. Fret it in under 3 seconds.',
              'Work down to under 1 second per chord. Muscle memory is the goal.',
            ],
          },
        ],
        tips: [
          'Keep your thumb behind the middle finger on the back of the neck for all these chords.',
          'Arch your fingers so they don\'t touch adjacent strings.',
          'Practice the chord change (not the chord itself) — the movement between chords is the hard part.',
          'Most pop guitarists spend 90% of their time on these 5 chords. Master them and you master pop.',
        ],
      },
    },

    {
      id: 'p2',
      title: 'Fingerpicking Patterns',
      desc: 'Travis-style and arpeggio patterns for acoustic accompaniment.',
      tags: ['beginner', 'technique'],
      lesson: {
        objective: 'Play Travis picking (alternating bass + melody) and a simple arpeggio pattern over a G–C–D progression.',
        concepts: [
          'Fingerpicking uses the thumb (p) for bass strings (4–6) and fingers (i, m, a) for treble strings (1–3).',
          'Travis picking: the thumb alternates between two bass strings while fingers pick melody above.',
          'Standard thumb assignment: thumb plays string 6 for E-root chords, string 5 for A-root chords.',
          'Simple arpeggio: p–i–m–a–m–i (thumb, index, middle, ring, middle, index) — a flowing roll.',
          'Right hand position: rest the forearm on the guitar body. Fingers curve naturally, nails just over the strings.',
          'Do not anchor the wrist — let the hand float slightly for flexibility.',
        ],
        diagram: `Travis picking pattern (G chord):
Beat:   1     &     2     &     3     &     4     &
Thumb:  E6          A5          E6          A5
Finger:       e1          B2          G3

Tab:
e |--3-----------3---------|
B |-----3-----------3------|
G |---------------------------0--------|
D |----------------------------0-------|
A |---0-----------0---------|
E |--3-----------3---------|
    p   i   p   m   p   i   p   m

Simple arpeggio (G chord): p-i-m-a-m-i
e |--3--|
B |--0--|
G |--0--|
D |--0--|   play in order: D A G B e B G
A |--2--|
E |--3--|`,
        exercises: [
          {
            title: 'Thumb independence warm-up',
            steps: [
              'Fret G chord. Use only your thumb: alternating E6 string (beat 1) and A5 string (beat 2).',
              'Keep alternating for 2 minutes. The thumb must be totally automatic before adding fingers.',
            ],
          },
          {
            title: 'Add one finger',
            steps: [
              'Thumb still alternating. On beat 1-&: add index finger on string 1 (high e) on the "&".',
              'Pattern: Thumb E → finger e → Thumb A → finger e → repeat.',
              'When this locks in, add middle finger on string 2 (B) between thumb strokes.',
            ],
          },
          {
            title: 'Full Travis pattern through a chord change',
            steps: [
              'G chord: 4 beats of Travis picking. C chord: 4 beats. D chord: 4 beats.',
              'The thumb changes strings when the chord changes (G chord uses E6+D4, C uses A5+D4).',
              'Record yourself. The bass should sound like a steady, unwavering heartbeat.',
            ],
          },
        ],
        tips: [
          'Grow your right-hand fingernails slightly (just past the fingertip) for a cleaner, brighter tone.',
          'Do not look at your right hand — train it to feel the strings independently.',
          'James Taylor, Chet Atkins, and Paul Simon are the masters to study for fingerpicking in pop/folk contexts.',
          'If the pattern sounds mechanical, add very slight dynamic variation — slightly louder melody note than bass.',
        ],
      },
    },

    {
      id: 'p3',
      title: 'Capo Usage',
      desc: 'Using a capo to change key while keeping easy chord shapes.',
      tags: ['beginner'],
      lesson: {
        objective: 'Use a capo to play a song in three different keys without learning new chord shapes.',
        concepts: [
          'A capo clamps across all strings at a fret, raising every string\'s pitch by one semitone per fret.',
          'Capo on fret 2: all open chords sound two semitones higher. G shape sounds like A. C shape sounds like D.',
          'This lets you use familiar open-chord shapes in keys that would otherwise require barre chords.',
          'Key with capo formula: count the capo fret from the root. Capo 2 + G shape = A major.',
          'Chords change with capo: capo 2, G→A, C→D, D→E, Em→F#m, Am→Bm.',
          'Capo chord chart: the written chord shapes (G, C, D etc.) are "guitar chords" — the sounding key is shifted by the capo fret.',
        ],
        diagram: `Key chart — open G shape with capo:
Capo fret | Sounds like
    0     |  G
    1     |  Ab / G#
    2     |  A
    3     |  Bb
    4     |  B
    5     |  C

Capo 2 chord equivalents:
Guitar chord | Sounds like
    G        |    A
    C        |    D
    D        |    E
    Em       |   F#m
    Am       |   Bm

Famous capo usage:
"Here Comes the Sun" — Beatles — Capo 7, key of A (G shape)
"Wonderwall" — Oasis — Capo 2, key of F# (Em shape)
"Fast Car" — Tracy Chapman — Capo 2`,
        exercises: [
          {
            title: 'Transpose a song with capo',
            steps: [
              'Choose a song in a capo-friendly key (e.g., "Knockin\' on Heaven\'s Door" in G).',
              'Play it without capo. Then put capo on fret 2 and play the same shapes — now in A.',
              'Move to capo fret 5 — same shapes, now in C. Notice how the key shifts without changing anything you play.',
            ],
          },
          {
            title: 'Find the right key for your voice',
            steps: [
              'Sing along to a song with capo at fret 0, 2, 4, 5, 7.',
              'At each fret, assess whether the key fits your vocal range.',
              'The capo is a tool for singers — use it to match YOUR voice.',
            ],
          },
          {
            title: 'No-capo vs capo comparison',
            steps: [
              'Play "Let Her Go" in G (no capo) — standard key.',
              'Put capo on fret 5. Play same G–D–Em–C shapes — now in C.',
              'The sound is brighter and lighter with capo. Compare tone quality: capo gives an airy, open-string resonance.',
            ],
          },
        ],
        tips: [
          'Place the capo as close to the fret wire as possible — further back causes buzz and tuning issues.',
          'Re-tune after placing the capo. Capoing always shifts tuning slightly.',
          'The capo is not a shortcut for lazy players — it is a legitimate tool for songwriting and arrangement.',
          'Never use a capo above fret 7 for acoustic — the strings get too tight and the tone becomes thin.',
        ],
      },
    },

    {
      id: 'p4',
      title: 'I–V–vi–IV Progressions',
      desc: 'The most common pop progression — recognize it in hundreds of songs.',
      tags: ['intermediate', 'theory'],
      lesson: {
        objective: 'Play I–V–vi–IV in four keys (G, C, D, A) and identify it by ear in at least three songs.',
        concepts: [
          'I–V–vi–IV is the most ubiquitous chord progression in Western pop music.',
          'In G major: G–D–Em–C. In C: C–G–Am–F. In D: D–A–Bm–G. In A: A–E–F#m–D.',
          'The vi chord (minor) is the "emotional dip" — it gives the progression its nostalgic, slightly melancholic quality.',
          'Because the same four chords repeat, thousands of songs share this progression — the melody is what differentiates them.',
          'Variations: starting on the IV (IV–I–V–vi) sounds more upbeat. Starting on the vi (vi–IV–I–V) sounds minor and darker.',
          'The I–V–vi–IV is sometimes called the "Axis of Awesome" progression — see their viral medley.',
        ],
        diagram: `I–V–vi–IV in four keys:

Key of G:  G  –  D  –  Em –  C
Key of C:  C  –  G  –  Am –  F
Key of D:  D  –  A  –  Bm –  G
Key of A:  A  –  E  –  F#m–  D

Variations (same chords, different starting point):
IV–I–V–vi: C–G–D–Em  (starts on C, sounds brighter)
vi–IV–I–V: Em–C–G–D  (starts on Em, sounds darker/minor)

Songs using G–D–Em–C:
"Let Her Go" (Passenger)
"Someone Like You" (Adele, with capo)
"No Woman No Cry" (Bob Marley)`,
        exercises: [
          {
            title: 'Play all four rotations',
            steps: [
              'In G: play G–D–Em–C four times, 4 beats each chord.',
              'Then D–Em–C–G (starting on V). Then Em–C–G–D (starting on vi). Then C–G–D–Em (starting on IV).',
              'Same chords, completely different emotional feel. This is the power of rotation.',
            ],
          },
          {
            title: 'Ear training: identify in songs',
            steps: [
              'Put on "Let Her Go" by Passenger. Listen through once.',
              'Identify when the G, D, Em, and C chords fall.',
              'Try to hear the "emotional dip" on the Em chord.',
              'Repeat with two other songs from the examples above.',
            ],
          },
          {
            title: 'Write a 4-bar melody over it',
            steps: [
              'Loop G–D–Em–C in G major at 90 BPM.',
              'Sing or hum a simple melodic phrase over it. Just 4–8 notes.',
              'Try to record it — you have just written a pop song hook.',
            ],
          },
        ],
        tips: [
          'This progression is everywhere — once you hear it you cannot un-hear it. That is a good thing.',
          'The reason it works: it includes all the most consonant intervals in Western music, balanced between tension and resolution.',
          'Use it as a compositional starting point, not a cliché — every melody makes it unique.',
          'Notice how different strumming patterns and tempos completely transform the feel of the same 4 chords.',
        ],
      },
    },

    {
      id: 'p5',
      title: 'Strumming Dynamics',
      desc: 'Vary attack, muting, and ghost strums for feel and groove.',
      tags: ['intermediate', 'technique'],
      lesson: {
        objective: 'Strum a 4-bar pattern with three distinct dynamic levels (soft, medium, loud) and add ghost strums for groove.',
        concepts: [
          'Dynamics: the variation in volume and intensity. Without dynamics, strumming is mechanical and lifeless.',
          'Ghost strum: a strumming motion where the pick barely grazes the strings (or misses entirely), creating rhythmic movement without sound.',
          'The down-up arm motion should be continuous — the pick decides what gets heard, the arm keeps the groove.',
          'Accents: emphasize beats 2 and 4 (the backbeat) in pop/rock. This is what makes the groove feel good.',
          'Strum angle: tilting the pick slightly (not perpendicular to strings) produces a smoother, less harsh stroke.',
          'Brush vs dig: a light wrist brush sounds bright. Digging in with more pressure sounds heavier.',
        ],
        diagram: `Pattern with ghost strums (G = ghost, D = down, U = up):
Beats: 1    &    2    &    3    &    4    &
       D         DU   G    DU        DU
       (full)   (full+up ghost) (full+up)

Dynamic levels on G chord:
ppp (very soft):  barely touch strings, fingertip grazing
mp  (medium):     normal strumming, relaxed
ff  (loud):       dig in, full arm weight

Accent pattern (> = accent):
Beats: 1    2    3    4
       D    D>   D    D>
            ↑          ↑ backbeat accents`,
        exercises: [
          {
            title: 'Volume control drill',
            steps: [
              'Strum G chord. One bar at ppp (barely audible). One bar at mp. One bar at ff.',
              'The transition between levels should be smooth, not sudden.',
              'Record yourself. The levels should be clearly distinct on playback.',
            ],
          },
          {
            title: 'Ghost strum integration',
            steps: [
              'Pattern: D D-U ghost-U D-U (beats 1 2& &3& 4&).',
              'The ghost on the "3-and" keeps your arm moving without adding a chord hit.',
              'If you stop the arm for the ghost, you will lose the groove. Keep it moving.',
            ],
          },
          {
            title: 'Backbeat emphasis',
            steps: [
              'Strum 8 downstrokes on G at 100 BPM. Accent beats 2 and 4 by digging in.',
              'Listen to whether the groove lands on the backbeat — this is what drummers do with the snare.',
              'Now add upstrokes on the & counts. Keep accents on 2 and 4.',
            ],
          },
        ],
        tips: [
          'The groove lives in the upstrokes — most beginners have weak, sloppy upstrokes.',
          'Your right arm is the metronome. Keep it swinging even through rests and ghost strums.',
          'Listen to Ed Sheeran and John Mayer for modern pop strumming dynamics — both are rhythmically impeccable.',
          'Record every practice session. Bad dynamics are almost invisible while playing but obvious on playback.',
        ],
      },
    },

    {
      id: 'p6',
      title: 'Chord Embellishments',
      desc: 'Add sus2, sus4, and add9 colors to basic chords.',
      tags: ['intermediate', 'theory'],
      lesson: {
        objective: 'Add sus2, sus4, and add9 variations to G, D, and A chords and use them to create movement within a single harmony.',
        concepts: [
          'Suspended chords replace the 3rd with another interval. Sus2 replaces 3rd with 2nd. Sus4 replaces 3rd with 4th.',
          'Without a 3rd, suspended chords are neither major nor minor — they sound ambiguous, modern, floating.',
          'Add9 chord: adds the 9th (same as 2nd, but one octave up) to a major chord WITHOUT removing the 3rd.',
          'Add9 sounds fuller and richer than a plain major chord — used heavily in pop and singer-songwriter music.',
          'Embellishments create movement: strum Dsus4 → D → Dsus2 → D while holding the same chord shape — the chord evolves.',
          'Famous uses: "Every Breath You Take" (Sting) uses sus4 heavily. Dsus2 is in countless country and pop songs.',
        ],
        diagram: `D Major family:
D         Dsus2       Dsus4       Dadd9
e --2--    e --0--     e --3--     e --0--
B --3--    B --3--     B --3--     B --3--
G --2--    G --2--     G --2--     G --2--
D --0--    D --0--     D --0--     D --0--

Gsus2:          Asus2:          Asus4:
e --3--          e --0--          e --0--
B --3--          B --0--          B --3--
G --0--          G --2--          G --2--
D --0--          D --2--          D --2--
A --2--          A --0--          A --0--
E --3--          E --x--          E --x--`,
        exercises: [
          {
            title: 'Dsus4 → D → Dsus2',
            steps: [
              'The only change is the first finger lifting and returning.',
              'Dsus4: index on string 1 fret 3. D: index on string 2 fret 3. Dsus2: remove index entirely.',
              'Strum each once and listen to the tension (sus4) → resolution (D) → openness (sus2).',
              'Loop this slowly — it is one of the most pleasing movements in pop guitar.',
            ],
          },
          {
            title: 'Embellishment in context',
            steps: [
              'Play G–D–Em–C progression.',
              'On the D chord, add: Dsus4 (2 beats) → D (2 beats) instead of holding D for 4 beats.',
              'On the G chord, try Gsus2 for 2 beats before landing on G.',
              'These tiny movements make a 4-chord progression sound more interesting.',
            ],
          },
          {
            title: 'Write using embellishments',
            steps: [
              'Loop Asus2 for 4 bars. Notice how it implies A major but also has a folk/open quality.',
              'Follow with Dsus2 for 4 bars, then E (no embellishment) for resolution.',
              'You have just written a chord progression with emotional arc using only one shape.',
            ],
          },
        ],
        tips: [
          'Sus chords want to resolve — they are dissonant. Let them move into the resolved major or minor chord.',
          'Add9 does not need to resolve — it just sounds richer than plain major.',
          'These are not separate chords to memorize — they are modifications of shapes you already know.',
          'Listen to The Police, Ed Sheeran, and John Mayer for constant use of sus and add9 embellishments.',
        ],
      },
    },

    {
      id: 'p7',
      title: 'Song Arrangement',
      desc: 'Structure a cover with intro, verse, chorus, bridge, and outro.',
      tags: ['advanced'],
      lesson: {
        objective: 'Arrange a pop song for solo guitar with distinct intro, verse, pre-chorus, chorus, bridge, and outro, each with a different texture.',
        concepts: [
          'Song structure is how musical sections create narrative. Each section has a job.',
          'Intro: sets the mood. Often just chord progression without singing.',
          'Verse: tells the story. Lower energy than chorus, more melodic and detailed.',
          'Pre-chorus: builds tension. Often modulates toward the dominant or relative minor.',
          'Chorus: the emotional peak. Louder, more open chords, often the most memorable part.',
          'Bridge: contrast. Different chord progression, different key feel, breaks the pattern.',
          'Outro: resolution. Usually a fade or final strum that signals the end.',
          'Texture variation: intro = fingerpicking, verse = light strumming, chorus = full strumming, bridge = sparse.',
        ],
        diagram: `Solo guitar arrangement framework:

Section   | Duration | Texture          | Dynamic
----------|----------|------------------|--------
Intro     | 4–8 bars | Fingerpicking    | Soft
Verse 1   | 8–16 bars| Light strum      | Medium-soft
Pre-chorus| 4–8 bars | Building strum   | Growing
Chorus 1  | 8 bars   | Full open strum  | Loud
Verse 2   | 8–16 bars| Varied strum     | Medium
Pre-chorus| 4–8 bars | Building strum   | Growing
Chorus 2  | 8 bars   | Full strum       | Louder
Bridge    | 8 bars   | Single notes/    | Contrast
          |          | sparse chords    |
Final chrs| 8–16 bars| Full + dynamics  | Climax
Outro     | 4–8 bars | Fade or held     | Tapering`,
        exercises: [
          {
            title: 'Map the structure of a song',
            steps: [
              'Pick a pop song you know well. Listen straight through.',
              'On paper, write down each section as it happens: Intro, Verse, Pre, Chorus, etc.',
              'Note how many bars each section is, and what the guitar texture is doing.',
            ],
          },
          {
            title: 'Arrange one verse and one chorus',
            steps: [
              'Take the chord progression of a simple pop song (G–D–Em–C).',
              'Verse: fingerpick it softly for 8 bars.',
              'Chorus: strum it with full energy for 8 bars.',
              'Play verse → chorus straight through. The difference should be dramatic.',
            ],
          },
          {
            title: 'Add the bridge',
            steps: [
              'After two choruses: switch to a completely different chord (e.g., stay on Em for the bridge).',
              'Play it sparsely — single notes or muted strums.',
              'After 8 bars, build back to the final chorus with a crescendo strum.',
            ],
          },
        ],
        tips: [
          'Structure is invisible when it works — you only notice a bad structure.',
          'Memorize the form before working on texture. Know every bar number and what section it is in.',
          'The bridge exists to give the listener a break from the verse/chorus loop — make it genuinely different.',
          'Record the full arrangement start to finish. Listen as an audience member, not a guitarist.',
        ],
      },
    },
  ],
}
