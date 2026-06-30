import type { GamePageSidebarSection } from '../../types';
import ImageGrid from '../../components/ImageGrid';

import pjScreenshot from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Gameplay) Screenshot.png';
import pjScreenshot2 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Gameplay 2) Screenshot.png';
import pjAttacksScreenshot1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Weapon upgrade choice) Screenshot.png';
import pjTilesScreenshot1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Tiles) Screenshot.png';
import pjMapGenerationScreenshot1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Map Generation) Screenshot.png'
import pjGlobalMapScreenshot1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Global Map) Screenshot.png'
import pjRandomEventBridge from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Random Event Bridge) Screenshot.png'
import pjShop from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Shop) Screenshot.png'
import pjLevelRelicReward from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Level relic upgrade choice) Screenshot.png'
import pjAudioDialogue from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Audio Dialogue Custom Editor Window) Screenshot.png'
import pjAbstractSelector1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Spell Code, Showcasing AbstractSelector) Screenshot.png'
import pjAbstractSelector2 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Spell Image, Showcasing AbstractSelector) Screenshot.png'
import pjVector2IntListSelector from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Tile Shape Selector, Showcasing visual Vector2Int array selection) Screenshot.png'
import pjLocalMapCustomEditorWindow1 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Local Map Generator Custom Editor Window) Screenshot.png'
import pjLocalMapCustomEditorWindow2 from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Local Map Generator Custom Editor Window 2) Screenshot.png'
import pjAutoTiler from '../../assets/The Pilgrims Journey Images/The Pilgrims Journey (Local Map Auto Tiler Custom Editor Window) Screenshot.png'

export const gamePageSections: GamePageSidebarSection = 
  {
    label: 'Scene Explorer',
    sections: [
      {
        key: 'home',
        label: 'The Pilgrims journey',
        icon: '◉',
        header:(
          <>
            <div className="hero-eyebrow">// THE PILGRIM'S JOURNEY</div>
            <div className="hero-name">THE PILGRIM'S JOURNEY</div>
            <div className="hero-title">AN ADVENTURE BULLET HELL GAME</div>
          </>),
        content: (
          <>
            <div className="hero">
              <div className="hero-bio">
                The Pilgrim's Journey is a top-down bullet hell adventure game where players explore a mysterious world,
                uncovering its secrets and battling challenging enemies.
                With a focus on tight mechanics and expressive visuals,
                the game offers an immersive experience that stays with players long after they stop playing.
              </div>
            </div>

            <ImageGrid
              images={
                [
                  {
                    src: pjScreenshot,
                    alt: "Gameplay screenshot from The Pilgrim's Journey",
                    caption: "A gameplay snapshot from The Pilgrim's Journey."
                  },
                  {
                    src: pjScreenshot2,
                    alt: "Gameplay screenshot from The Pilgrim's Journey",
                  },
                ]
              }
            />
          </>
        ),
      },
      {
        key: 'overview',
        label: 'Overview',
        icon: '◉',
        content: (
          <>
            <p>
              <strong>The Pilgrim's Journey</strong> began as a project built around a simple question: what's it like to be on the other side of a tower defence game?
              I started development by figuring out how to randomly generate a pathway and enemy towers, with the goal of sending units along the path to reach the end.
              After implementing this I found it was missing something, so I experimented — adding equipment for units, a tile system that spawns units based on play time, spells, relics, and more.
              Eventually I realised the player was lacking agency.
              <br/>
              <br/>
              After playing <em>Vampire Survivors</em> — a game where you become the bullet hell, gaining increasingly overpowered upgrades as you push further through a run — I got inspired.
              That concept helped shape my game: I added a hero character that the player controls directly, so while you're still playing a reverse tower defence,
              you also have the agency to get out there and defend your units as they push toward the end of the map.
              <br/>
              <br/>
              The Pilgrim's Journey is a work of love... and long hours. It's a mix of multiple genres, but the feeling I want players to have is one of adventure, power, and strategy.
              <br/>
              <br/>
              I'm planning on releasing a demo in the near future once the core game is in place and most of the bugs are ironed out.
            </p>
          </>
        ),
      },
      {
        key: 'story',
        label: 'Story',
        icon: '◉',
        content: (
          <>
            <p>
              The story hasn't been fully fleshed out yet and is still subject to change — but here's the current premise:
              <br/><br/>
              The world is called Estrania. Monsters, demons, and other evil beings have been awakening across the land. People are scared and desperate for safety.
              Rumours of a sanctuary have begun to spread, and many are growing willing to make the dangerous trek to reach this promised land.
              The hero you choose begins to lead and defend pilgrims on their journey, encountering mysterious creatures, demons, wizards, newfound allies, wormholes, and breathtaking new landscapes along the way.
            </p>
          </>
        ),
      },
      {
        key: 'mechanics',
        label: 'Game Mechanics',
        icon: '◉',
        content: (
          <p>
            Here are some of the main mechanics in <strong>The Pilgrim's Journey</strong>
          </p>
        ),
        children: 
        [
          {
            key: 'attacks',
            label: 'Hero Attacks',
            icon: '◈',
            content: (
              <p>
                Every hero starts with a unique attack and can equip additional ones as they progress. All attacks stack on top of one another and fire automatically —
                which means most of the gameplay revolves around movement, dodging enemies, and using spells to defend your units and defeat your foes.
                Below is an image of the weapon selection screen.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjAttacksScreenshot1,
                        alt: "Gameplay screenshot from The Pilgrim's Journey",
                        caption: "A choice of different weapons."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'enemies',
            label: 'Enemy AI',
            icon: '◈',
            content: (
              <p>
                Currently there are two types of enemy AI: <em>direct movement</em> and <em>stationary movement</em>.
                Direct movement enemies find a target creature or position and move straight toward it — usually the player character, though there are exceptions.
                One boss monster, for example, will occasionally target random positions on the map and charge toward them.
                <br/>
                <br/>
                Stationary movement monsters are designed to endanger the pilgrims travelling along the path. They spawn alongside it and target pilgrims as they pass.
                If knocked off their position, they'll navigate back to it.
                <br/>
                <br/>
                Previously, monsters moved directly toward their target. As the terrain and environments grew more complex, however, enemies needed to be able to navigate around obstacles.
                I initially considered A* pathfinding — something I'd used in a previous project — but decided against it, since the game requires large numbers of enemies
                and running a full A* calculation for each one would likely cause significant lag.
                <br/>
                <br/>
                After looking into alternatives, I landed on flow mapping. Flow mapping is a pathfinding algorithm that starts at the target and branches outward to all walkable areas of the map.
                Since the map is relatively small and the target is usually the player, this approach works really well.
                The flow map updates each time the player moves into a new tile, and previously computed maps for visited positions are cached in memory.
                Every enemy then just reads the current flow map to determine which direction to move — no individual pathfinding needed.
                This lets us support large numbers of enemies without pathfinding becoming a CPU bottleneck.
              </p>
            ),
          },
          {
            key: 'tiles',
            label: 'Tiles',
            icon: '◈',
            content: (
              <p>
                The tile system controls how both enemies and pilgrims are spawned. Each round requires a certain number of pilgrim tiles and monster tiles to keep the game balanced.
                Tiles are read from left to right, with each tile square representing a unit of time. The number of tiles in a currently active column multiplies the spawn rate of the corresponding entity,
                giving the player more control over how they set up each level.
                I'm also exploring the idea of bonus rewards for meeting certain tile conditions — for example, filling a column with a specific ratio of pilgrim and monster tiles.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjTilesScreenshot1,
                        alt: "Screenshot of the tile player.",
                        caption: "The tile player with monster and pilgrim tiles."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'spells',
            label: 'Spells',
            icon: '◈',
            content: (
              <p>
                Spells give players more direct agency over the battlefield — whether that's healing your units, freezing enemies, or boosting your movement speed.
                They're designed to help you influence what's happening across the whole map.
                Sometimes enemies will force you away from the pilgrims you're trying to protect; spells help bridge that gap,
                letting you support them from across the map or simply give you an edge in a tough fight.
              </p>
            ),
          },
        ],
      },
      {
        key: 'systems',
        label: 'Game Systems',
        icon: '◉',
        content: (
          <p>
            Supporting systems include progression, player upgrades, and environmental interactions.
          </p>
        ),
        children:[
          {
            key: 'localMapGeneration',
            label: 'Local Map Generation',
            icon: '◈',
            content: (
              <p>
                Local map generation is driven by a Local Map Generation Settings ScriptableObject, which determines how the map will look at runtime.
                There are multiple layers that combine to produce the final result:
                <br/>
                <br/>
                Path generation.<br/>
                Base and path tile random placement.<br/>
                Terrain noise — dividing the map into different terrain types such as flowers, rocks, etc.<br/>
                Map objects — tents, cacti, trees, and so on.<br/>
                Auto edge tiling — determining how two different tile types look where they meet, similar to a rule tile in Unity's standard tile grid.
                <br/>
                <ImageGrid
                  images={
                    [
                      {
                        src: pjMapGenerationScreenshot1,
                        alt: "Screenshot of the local map.",
                        caption: "A local map generation example"
                      },
                    ]
                  }
                />

                Check the Editor Tools section for more on how these layers stack, under "Local Map Generator Settings Editor Window."
              </p>
            ),
          },
          {
            key: 'globalMapGeneration',
            label: 'Global Map Generation',
            icon: '◈',
            content: (
              <p>
                The global map shows where the player can go and what to expect along different routes.
                Each point on the map represents a scenario: a standard combat encounter where you defend pilgrims and fight enemies,
                a random event where you might meet a mysterious entity, a boss fight, or a shop where you can stock up on equipment.
                The map tracks both where you've been and where you can go next.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjGlobalMapScreenshot1,
                        alt: "Screenshot of the global map.",
                        caption: "A global map generation example"
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'randomEvents',
            label: 'Random Events',
            icon: '◈',
            content: (
              <p>
                While exploring Estrania you may stumble across events that could hinder or help your journey.
                A wizard might offer you a rare item; a demon might trick you into taking a powerful artefact with a hidden downside.
                These encounters can make or break a run.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjRandomEventBridge,
                        alt: "Screenshot of a random event.",
                        caption: "A random event with a broken bridge."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'shop',
            label: 'Shop',
            icon: '◈',
            content: (
              <p>
                Small shops are scattered across Estrania. If you find one, you may be able to pick up tools, equipment, and relics to help you on your way.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjShop,
                        alt: "Screenshot of the shop screen.",
                        caption: "The shop screen."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'relics',
            label: 'Relics',
            icon: '◈',
            content: (
              <p>
                Relics are powerful items that aid you throughout your journey. They can be found through random encounters, boss battles, and other means.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjLevelRelicReward,
                        alt: "Screenshot of a relic reward screen.",
                        caption: "Levelling up and gaining a relic as a reward."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
        ]
      },
      {
        key: 'tools',
        label: 'Editor Tools Created',
        icon: '◉',
        content: (
          <p>
            These are the custom editor tools used to build levels, author encounters, and tweak gameplay quickly.
          </p>
        ),
        children: [
          {
            key: 'audioDialogueEditorWindow',
            label: 'Audio Dialogue Editor Window',
            icon: '◈',
            content: (
              <p>
                I created the Audio Dialogue Editor Window to help me build and assemble voice acting snippets for my dialogue system, which ties directly into the random encounter system.
                <br/>
                <br/>
                The tool lets you piece together multiple <code>.wav</code> files and play them in sequence, and also lets you queue audio mixer groups to change how specific audio is heard.
                For example, you can place two characters' audio clips side by side and apply a different mixer group to one of them — giving a demon a deeper voice, for instance.
                You can also preview the full dialogue sequence from within the window, and see a visual waveform representation of each clip.
                <br/>
                <br/>
                The window has two main sections: a <strong>timeline</strong> at the top and a <strong>view panel</strong> at the bottom.
                The timeline displays all audio clips in order along with any audio mixer group markers (the small squares with the blue line).
                The view panel is essentially a zoomed-in look at a selected section of the timeline.
                <br/>
                <br/>
                While third-party tools exist for this kind of audio dialogue system, I chose to build my own to deepen my understanding of editor UI creation and audio in Unity.
                I learned a great deal in the process and built a number of reusable editor utility classes along the way — including a system called <em>Draggable Rects and Areas</em>,
                which handles the repositioning of audio clips, the view position, and audio mixer group markers.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjAudioDialogue,
                        alt: "Screenshot of the audio dialogue editor window.",
                        caption: "The audio dialogue editor window."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'AbstractSelector',
            label: 'Abstract Selector',
            icon: '◈',
            content: (
              <p>
                Abstract Selector is a tool that lets you select a concrete implementation of an abstract class — one that doesn't inherit from MonoBehaviour — directly in the Unity Inspector.
                <br/>
                <br/>
                For example: if you have an abstract class called <code>SpellEffect</code> with inherited classes like <code>HealSpellEffect</code>, <code>ShieldSpellEffect</code>, and <code>DamageSpellEffect</code>,
                you could add a <code>SpellEffect</code> field to a <code>Spell</code> class and mark it with <code>[SerializeReference]</code> and <code>[AbstractSelector]</code>.
                This lets you pick the specific implementation you want right from the Inspector, without any extra boilerplate.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjAbstractSelector1,
                        alt: "An example of how to implement the abstract selector in code.",
                        caption: "An example of how to implement the abstract selector in code."
                      },
                      {
                        src: pjAbstractSelector2,
                        alt: "What the abstract selector looks like in the editor.",
                        caption: "What it looks like in the editor."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'Vector2IntListSelector',
            label: 'Vector2Int List Selector',
            icon: '◈',
            content: (
              <p>
                A small editor window that displays a grid of tiles you can click to select. I use it for quickly defining the shapes of my UI tiles.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjVector2IntListSelector,
                        alt: "Screenshot of the Vector2Int List Selector.",
                        caption: "A screenshot of the Vector2Int List Selector."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'LocalMapGeneratorEditorWindow',
            label: 'Local Map Generator Editor Window',
            icon: '◈',
            content: (
              <p>
                The Local Map Generator Editor Window lets me view and tweak how map generation looks and behaves directly in the editor.
                While building it, I created a couple of additional editor UI utility classes — including a scrollable toolbar that displays a number of tabs based on the available screen width and lets you scroll through them.
                It was a great opportunity to go deeper on editor UI and tooling in Unity.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjLocalMapCustomEditorWindow1,
                        alt: "Screenshot of the local map generator editor window."
                      },
                      {
                        src: pjLocalMapCustomEditorWindow2,
                        alt: "Screenshot of the local map generator editor window."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'LocalMapGeneratorAutoTileEditorWindow',
            label: 'Auto Tile Editor Window',
            icon: '◈',
            content: (
              <p>
                The Auto Tile Editor Window lets me view and edit the auto tiling system, which works similarly to a rule tile — determining how tiles visually connect to their neighbours.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjAutoTiler,
                        alt: "Screenshot of the auto tile editor window."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
        ]
      },
    ],
  }
;