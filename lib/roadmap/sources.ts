import type { LessonSource } from '@/types'

// Sources keyed by step ID. Merged into lesson display on the lesson page.
export const STEP_SOURCES: Record<string, LessonSource[]> = {

  // ─── JAZZ ────────────────────────────────────────────────────────────────
  j1: [
    { label: 'JustinGuitar — Open Chords (free lesson series)', url: 'https://www.justinguitar.com/guitar-lessons/the-wonderful-world-of-open-chords-bc-152', type: 'lesson' },
    { label: 'YouTube — Open chord tutorial for beginners', url: 'https://www.youtube.com/results?search_query=open+chord+guitar+beginner+tutorial', type: 'video' },
    { label: 'Wikipedia — Guitar chord', url: 'https://en.wikipedia.org/wiki/Guitar_chord', type: 'article' },
  ],
  j2: [
    { label: 'JustinGuitar — Barre Chords', url: 'https://www.justinguitar.com/guitar-lessons/f-chord-on-guitar-bc-181', type: 'lesson' },
    { label: 'YouTube — How to play barre chords (E-shape & A-shape)', url: 'https://www.youtube.com/results?search_query=how+to+play+barre+chords+guitar+E+shape+A+shape', type: 'video' },
    { label: 'Wikipedia — Barre chord', url: 'https://en.wikipedia.org/wiki/Barre_chord', type: 'article' },
  ],
  j3: [
    { label: 'YouTube — ii–V–I explained (Adam Neely)', url: 'https://www.youtube.com/results?search_query=adam+neely+ii+V+I+explained', type: 'video' },
    { label: 'YouTube — "Autumn Leaves" — Cannonball Adderley', url: 'https://www.youtube.com/results?search_query=autumn+leaves+cannonball+adderley+original', type: 'song' },
    { label: 'Wikipedia — ii–V–I progression', url: 'https://en.wikipedia.org/wiki/Ii%E2%80%93V%E2%80%93I_progression', type: 'article' },
  ],
  j4: [
    { label: 'YouTube — Jazz shell voicings on guitar', url: 'https://www.youtube.com/results?search_query=jazz+shell+voicings+guitar+tutorial', type: 'video' },
    { label: 'YouTube — "Satin Doll" — Duke Ellington (jazz comping reference)', url: 'https://www.youtube.com/results?search_query=satin+doll+duke+ellington', type: 'song' },
    { label: 'Wikipedia — Jazz guitar', url: 'https://en.wikipedia.org/wiki/Jazz_guitar', type: 'article' },
  ],
  j5: [
    { label: 'YouTube — Miles Davis "So What" (D Dorian)', url: 'https://www.youtube.com/results?search_query=miles+davis+so+what+kind+of+blue', type: 'song' },
    { label: 'YouTube — Dorian mode on guitar explained', url: 'https://www.youtube.com/results?search_query=dorian+mode+guitar+explained', type: 'video' },
    { label: 'Wikipedia — Dorian mode', url: 'https://en.wikipedia.org/wiki/Dorian_mode', type: 'article' },
    { label: 'Wikipedia — Mixolydian mode', url: 'https://en.wikipedia.org/wiki/Mixolydian_mode', type: 'article' },
  ],
  j6: [
    { label: 'YouTube — Joe Pass chord melody solo guitar', url: 'https://www.youtube.com/results?search_query=joe+pass+chord+melody+solo+guitar', type: 'video' },
    { label: 'YouTube — Chord melody tutorial for beginners', url: 'https://www.youtube.com/results?search_query=chord+melody+guitar+beginner+tutorial', type: 'lesson' },
    { label: 'Wikipedia — Joe Pass', url: 'https://en.wikipedia.org/wiki/Joe_Pass', type: 'article' },
  ],
  j7: [
    { label: 'YouTube — Charlie Parker "Ko-Ko" (bebop vocabulary reference)', url: 'https://www.youtube.com/results?search_query=charlie+parker+ko+ko+1945', type: 'song' },
    { label: 'YouTube — Bebop scale guitar lesson', url: 'https://www.youtube.com/results?search_query=bebop+dominant+scale+guitar+lesson', type: 'video' },
    { label: 'Wikipedia — Bebop', url: 'https://en.wikipedia.org/wiki/Bebop', type: 'article' },
    { label: 'Wikipedia — Charlie Parker', url: 'https://en.wikipedia.org/wiki/Charlie_Parker', type: 'article' },
  ],

  // ─── ROCK ────────────────────────────────────────────────────────────────
  r1: [
    { label: 'YouTube — AC/DC "Back in Black" (power chord anthem)', url: 'https://www.youtube.com/results?search_query=ACDC+back+in+black+official', type: 'song' },
    { label: 'YouTube — Power chords for beginners', url: 'https://www.youtube.com/results?search_query=power+chords+guitar+beginners+tutorial', type: 'video' },
    { label: 'Wikipedia — Power chord', url: 'https://en.wikipedia.org/wiki/Power_chord', type: 'article' },
  ],
  r2: [
    { label: 'YouTube — Minor pentatonic scale — all 5 positions', url: 'https://www.youtube.com/results?search_query=minor+pentatonic+scale+guitar+5+positions', type: 'video' },
    { label: 'YouTube — Angus Young live solo (pentatonic mastery)', url: 'https://www.youtube.com/results?search_query=angus+young+guitar+solo+live', type: 'song' },
    { label: 'Wikipedia — Pentatonic scale', url: 'https://en.wikipedia.org/wiki/Pentatonic_scale', type: 'article' },
  ],
  r3: [
    { label: 'YouTube — String bending technique — how to bend in tune', url: 'https://www.youtube.com/results?search_query=guitar+string+bending+technique+in+tune', type: 'video' },
    { label: 'YouTube — David Gilmour bending and vibrato masterclass', url: 'https://www.youtube.com/results?search_query=david+gilmour+guitar+bending+vibrato', type: 'video' },
    { label: 'Wikipedia — Guitar techniques — string bending', url: 'https://en.wikipedia.org/wiki/String_bending', type: 'article' },
  ],
  r4: [
    { label: 'YouTube — Palm muting guitar technique explained', url: 'https://www.youtube.com/results?search_query=palm+muting+guitar+technique+tutorial', type: 'video' },
    { label: 'YouTube — Black Sabbath "Iron Man" (Tony Iommi palm muting)', url: 'https://www.youtube.com/results?search_query=black+sabbath+iron+man+official', type: 'song' },
    { label: 'Wikipedia — Palm muting', url: 'https://en.wikipedia.org/wiki/Palm_mute', type: 'article' },
  ],
  r5: [
    { label: 'YouTube — Stevie Ray Vaughan "Pride and Joy" live', url: 'https://www.youtube.com/results?search_query=stevie+ray+vaughan+pride+and+joy+live', type: 'song' },
    { label: 'YouTube — Blues rock licks for guitar — Gary Moore style', url: 'https://www.youtube.com/results?search_query=gary+moore+still+got+the+blues+guitar+lesson', type: 'video' },
    { label: 'Wikipedia — Stevie Ray Vaughan', url: 'https://en.wikipedia.org/wiki/Stevie_Ray_Vaughan', type: 'article' },
  ],
  r6: [
    { label: 'YouTube — Troy Grady "Cracking the Code" — picking mechanics', url: 'https://www.youtube.com/results?search_query=troy+grady+cracking+the+code+picking+mechanics', type: 'video' },
    { label: 'YouTube — Alternate picking speed building exercises', url: 'https://www.youtube.com/results?search_query=alternate+picking+speed+building+guitar+exercises', type: 'lesson' },
    { label: 'Wikipedia — Alternate picking', url: 'https://en.wikipedia.org/wiki/Alternate_picking', type: 'article' },
  ],
  r7: [
    { label: 'YouTube — David Gilmour "Comfortably Numb" solo (delay & tone)', url: 'https://www.youtube.com/results?search_query=david+gilmour+comfortably+numb+live+pulse', type: 'song' },
    { label: 'YouTube — Guitar effects chain explained — OD, delay, reverb', url: 'https://www.youtube.com/results?search_query=guitar+effects+chain+overdrive+delay+reverb+explained', type: 'lesson' },
    { label: 'Wikipedia — Effects unit', url: 'https://en.wikipedia.org/wiki/Effects_unit', type: 'article' },
  ],

  // ─── BLUES ───────────────────────────────────────────────────────────────
  b1: [
    { label: 'YouTube — 12-bar blues explained (in E)', url: 'https://www.youtube.com/results?search_query=12+bar+blues+guitar+explained+key+of+E', type: 'video' },
    { label: 'YouTube — Chuck Berry "Johnny B. Goode" (classic 12-bar)', url: 'https://www.youtube.com/results?search_query=chuck+berry+johnny+b+goode+original', type: 'song' },
    { label: 'Wikipedia — Twelve-bar blues', url: 'https://en.wikipedia.org/wiki/Twelve-bar_blues', type: 'article' },
  ],
  b2: [
    { label: 'YouTube — Muddy Waters shuffle feel (reference listen)', url: 'https://www.youtube.com/results?search_query=muddy+waters+mannish+boy+shuffle', type: 'song' },
    { label: 'YouTube — Blues shuffle guitar lesson — boogie pattern', url: 'https://www.youtube.com/results?search_query=blues+shuffle+guitar+lesson+boogie+pattern', type: 'video' },
    { label: 'Wikipedia — Swing (jazz performance style)', url: 'https://en.wikipedia.org/wiki/Swing_(jazz_performance_style)', type: 'article' },
  ],
  b3: [
    { label: 'YouTube — Blues scale guitar — the blue note explained', url: 'https://www.youtube.com/results?search_query=blues+scale+guitar+blue+note+explained', type: 'video' },
    { label: 'YouTube — Eric Clapton "Crossroads" live Cream (blues scale in action)', url: 'https://www.youtube.com/results?search_query=eric+clapton+cream+crossroads+live', type: 'song' },
    { label: 'Wikipedia — Blues scale', url: 'https://en.wikipedia.org/wiki/Blues_scale', type: 'article' },
  ],
  b4: [
    { label: 'YouTube — BB King "The Thrill Is Gone" live (call & response master)', url: 'https://www.youtube.com/results?search_query=BB+King+the+thrill+is+gone+live', type: 'song' },
    { label: 'YouTube — Call and response guitar improvisation explained', url: 'https://www.youtube.com/results?search_query=call+and+response+guitar+blues+improvisation', type: 'video' },
    { label: 'Wikipedia — Call and response (music)', url: 'https://en.wikipedia.org/wiki/Call_and_response_(music)', type: 'article' },
  ],
  b5: [
    { label: 'YouTube — Guitar vibrato technique — how to develop great vibrato', url: 'https://www.youtube.com/results?search_query=guitar+vibrato+technique+development+lesson', type: 'video' },
    { label: 'YouTube — BB King vibrato and bending style', url: 'https://www.youtube.com/results?search_query=BB+King+vibrato+guitar+style+lesson', type: 'video' },
    { label: 'Wikipedia — Vibrato (music)', url: 'https://en.wikipedia.org/wiki/Vibrato', type: 'article' },
    { label: 'Wikipedia — BB King', url: 'https://en.wikipedia.org/wiki/B.B._King', type: 'article' },
  ],
  b6: [
    { label: 'YouTube — Blues turnaround licks in E — classic examples', url: 'https://www.youtube.com/results?search_query=blues+turnaround+licks+key+of+E+guitar', type: 'video' },
    { label: 'YouTube — Robert Johnson "Cross Road Blues" (turnaround reference)', url: 'https://www.youtube.com/results?search_query=robert+johnson+cross+road+blues+original', type: 'song' },
    { label: 'Wikipedia — Turnaround (music)', url: 'https://en.wikipedia.org/wiki/Turnaround_(music)', type: 'article' },
  ],
  b7: [
    { label: 'YouTube — T-Bone Walker "Call It Stormy Monday" original', url: 'https://www.youtube.com/results?search_query=T-Bone+Walker+call+it+stormy+monday+original', type: 'song' },
    { label: 'YouTube — T-Bone Walker guitar style lesson — jump blues', url: 'https://www.youtube.com/results?search_query=T-Bone+Walker+guitar+style+jump+blues+lesson', type: 'video' },
    { label: 'Wikipedia — T-Bone Walker', url: 'https://en.wikipedia.org/wiki/T-Bone_Walker', type: 'article' },
  ],

  // ─── POP ─────────────────────────────────────────────────────────────────
  p1: [
    { label: 'JustinGuitar — Beginner Guitar Course (free)', url: 'https://www.justinguitar.com/guitar-lessons/the-beginner-course', type: 'lesson' },
    { label: 'YouTube — 5 beginner guitar chords you must know', url: 'https://www.youtube.com/results?search_query=5+beginner+guitar+chords+G+C+D+Em+Am', type: 'video' },
    { label: 'Wikipedia — Open chord', url: 'https://en.wikipedia.org/wiki/Open_chord', type: 'article' },
  ],
  p2: [
    { label: 'YouTube — Travis picking guitar tutorial step by step', url: 'https://www.youtube.com/results?search_query=travis+picking+guitar+tutorial+step+by+step', type: 'video' },
    { label: 'YouTube — Chet Atkins fingerpicking style (originator)', url: 'https://www.youtube.com/results?search_query=chet+atkins+fingerpicking+guitar', type: 'song' },
    { label: 'Wikipedia — Travis picking', url: 'https://en.wikipedia.org/wiki/Travis_picking', type: 'article' },
  ],
  p3: [
    { label: 'YouTube — How to use a guitar capo — complete guide', url: 'https://www.youtube.com/results?search_query=how+to+use+guitar+capo+complete+guide', type: 'video' },
    { label: 'YouTube — Beatles "Here Comes the Sun" (Capo 7 example)', url: 'https://www.youtube.com/results?search_query=beatles+here+comes+the+sun+original', type: 'song' },
    { label: 'Wikipedia — Capo', url: 'https://en.wikipedia.org/wiki/Capo', type: 'article' },
  ],
  p4: [
    { label: 'YouTube — Axis of Awesome "4 Chords" medley (I–V–vi–IV in dozens of songs)', url: 'https://www.youtube.com/results?search_query=axis+of+awesome+4+chords+original', type: 'video' },
    { label: 'YouTube — Adele "Someone Like You" guitar tutorial', url: 'https://www.youtube.com/results?search_query=adele+someone+like+you+guitar+tutorial', type: 'lesson' },
    { label: 'Wikipedia — I–V–vi–IV progression', url: 'https://en.wikipedia.org/wiki/I%E2%80%93V%E2%80%93vi%E2%80%93IV_progression', type: 'article' },
  ],
  p5: [
    { label: 'YouTube — John Mayer strumming and rhythm guitar technique', url: 'https://www.youtube.com/results?search_query=john+mayer+rhythm+guitar+strumming+technique', type: 'video' },
    { label: 'YouTube — Guitar strumming dynamics — ghost strums and accents', url: 'https://www.youtube.com/results?search_query=guitar+strumming+dynamics+ghost+strums+accents+tutorial', type: 'lesson' },
    { label: 'Wikipedia — Strumming', url: 'https://en.wikipedia.org/wiki/Strumming', type: 'article' },
  ],
  p6: [
    { label: 'YouTube — Sus2 and sus4 chords explained on guitar', url: 'https://www.youtube.com/results?search_query=sus2+sus4+add9+chords+guitar+explained', type: 'video' },
    { label: 'YouTube — The Police "Every Breath You Take" (sus chords throughout)', url: 'https://www.youtube.com/results?search_query=the+police+every+breath+you+take+official', type: 'song' },
    { label: 'Wikipedia — Suspended chord', url: 'https://en.wikipedia.org/wiki/Suspended_chord', type: 'article' },
  ],
  p7: [
    { label: 'YouTube — Song structure and arrangement for guitarists', url: 'https://www.youtube.com/results?search_query=song+structure+arrangement+guitar+verse+chorus+bridge', type: 'lesson' },
    { label: 'YouTube — Ed Sheeran "The A Team" full arrangement (solo guitar model)', url: 'https://www.youtube.com/results?search_query=ed+sheeran+the+a+team+guitar+cover+full+arrangement', type: 'video' },
    { label: 'Wikipedia — Song structure', url: 'https://en.wikipedia.org/wiki/Song_structure', type: 'article' },
  ],
}
