## Agenda

### Del 1: `getUserMedia`, `AudioContext` og volum. (30min)

- Intro til `getUserMedia`. Eksempel med Video -> `<video>`
  - Permissions
  - Localhost/SSL
- Intro til streams/buffers, `AudioContext`, node graphs.
- Intro til Worklets/WebWorkers/Parallellitet (veldig overfladisk).

#### Oppgave: Volume progress (20min)

Implementer uthenting av volum basert på UserMedia, AudioWorklets og bruk `test-volume.ts` for å bekrefte at alt fungerer.

### Pause (10min)

### Del 2: Render Loops, User input og Transforms. (20min)

- Intro til Game-loop som konsept og ulike måter å gjøre det på.
  - Single threaded, message queueing.
  - `setInterval` og `setTimeout` garanterer ikke konsekvent bruk. Du vil få frame skipping pga inkonsikvent timer, og du kan ende opp med å tegne midt i en endring osv.
  - Vis eksempel av en gameloop kalkulator.
- Kort om DOM
  - `querySelector` vs `querySelectorAll`.
  - Attributes, CSS og transforms.

#### Oppgave (15min)

1. Lag en enkel render-loop.
2. Hent ut `player` fra DOM, bruk Volume fra tidligere til å kjøre `translateX` på Player-elementet.

### Del 3: EventListeners (5-10min)

- `addEventListener` og Events.
  - `keyCode`, `key`
- Eksempel: Vis "aktive bokstaver"
- Vis `cart` og `cart.updateByVolume`.

#### Oppgave (10min)

1. Lag en `ControlInput` modul som holder tilstand på venstre/høyre.
2. Bruk `cart.updateByVolume` til å hente ut ny `x`, `y`, og `degrees`.
3. bruk `transform` basert på resultat.
4. Kjør cart!

### Pause (10min)

### Del 4: P2P, WebRTC og PeerJS (20min)

- Kort intro til message passing.
- Kort fortsettelse av WebRTC (konseptuelt plan)
- Kort info om P2P vs ikke P2P.
- Kort om PeerJS.
- Vis litt bruk av PeerJS.
- Eksempel: Enkel echo eller ping-pong.
- Introdusere API-et vårt.
- Introdusere world og de funksjonene der.

#### Oppgave: PeerJS

Ta i bruk `connectPeer` for å koble til server.

1. connect og send inn Nick.
1. Tegn vegger, mål og motstandere.
1. Gi varsel (`window.alert`) om noen vinner.
1. Send nye kordinater via server.
