# LifeBridge AI – Project Overview & Flow Diagrams

LifeBridge AI is an Emergency Response and Disaster Assistant engineered specifically for the "Agents for Good" track. The system focuses on resolving critical coordinate gaps and information blockages during extreme crises in India:
1. **Mumbai Monsoon Flash Floods** (Severe urban flooding & high-tide constraints)
2. **Odisha Cyclone** (Extremely severe coastal wind landfall & evacuations)
3. **Uttarakhand Cloudburst & Landslide** (Mountain rockfalls, highway closures, and hypothermia hazards)
4. **Yamuna Expressway Major Accident** (Highway fog pileups, chemical spill perimeters, and emergency ward waiting times)

---

## 🏗️ System Architecture
The application runs on a clean, modern single-page frontend served via an Express.js static wrapper on Google Cloud Run. 

```mermaid
graph TD
    subgraph Client Viewport
        UI[Dynamic Dashboard UI]
        Map[Leaflet.js GIS Map]
        Chat[LifeBridge AI Agent Chat]
        Coord[Supply Coordination Board]
    end
    
    subgraph Local Control Engine
        State[Active Scenario State Manager]
        NLP[Keyword Extraction & Intent Router]
        Match[Marketplace Matchmaker Engine]
        Siren[Web Audio API Synth Oscillator]
    end
    
    subgraph Host Platform
        CloudRun[Google Cloud Run Container]
        Express[Node.js Express Server]
    end

    CloudRun -->|Hosts| Express
    Express -->|Serves Static Code| UI
    UI -->|Triggers Actions| State
    State -->|Updates Leaflet Pins| Map
    UI -->|Accepts Messages| Chat
    Chat -->|Forwards Text| NLP
    NLP -->|Queries Mock Database| State
    Coord -->|Posts Requests/Offers| Match
    UI -->|SOS Button Click| Siren
```

---

## 🔄 Detailed Flow Diagrams

### 1. SOS Distress & Broadcast Flow
This flow represents the timeline when a user triggers the SOS distress mode during an active emergency:

```mermaid
sequenceDiagram
    autonumber
    User->>Dashboard: Clicks "TRIGGER SOS"
    Dashboard->>Web Audio API: Initialize Synth Siren (sawtooth/sine oscillations)
    Dashboard->>UI: Launch full-screen glowing Red Alarm overlay
    Dashboard->>GPS Sensor: Capture telemetry coordinates
    Note over Dashboard: 5-Second Countdown Active
    alt Countdown Completes
        Dashboard->>Rescue Log: Triangulate location & broadcast beacon packet
        Dashboard->>Safety Registry: Autopost safety record as "Needs Assistance"
        Dashboard->>UI: Show regional rescue guidelines (e.g., Landslide instructions)
    else User Clicks Cancel
        User->>Dashboard: Clicks "Cancel SOS Trigger"
        Dashboard->>Web Audio API: Close AudioContext (stop siren)
        Dashboard->>UI: Exit Overlay, resume standard view
    end
```

### 2. LifeBridge AI NLP Agent Query Flow
This workflow demonstrates how the simulated AI Agent parses user queries and extracts insights from the active disaster state database:

```mermaid
flowchart TD
    Start([User inputs query in Chat]) --> Parse[Extract keywords: shelter, road, first aid, water, tide, landslide]
    Parse --> Route{Intent Route}
    
    Route -->|Shelters| QueryShelters[Fetch active disaster shelters & occupancy rates]
    Route -->|Road Safety| QueryRoads[Fetch blocked/caution route directories & coordinates]
    Route -->|Medical/First Aid| QueryFirstAid[Identify injury keywords & fetch immediate relief checklist]
    Route -->|Water/Tide| QueryAlerts[Fetch local storm surge, contamination, or high-tide warnings]
    Route -->|No Match| Fallback[Return guide on using tabs and SOS beacon]
    
    QueryShelters --> Reply[Format response, reference map marker colors, and return with typing indicator]
    QueryRoads --> Reply
    QueryFirstAid --> Reply
    QueryAlerts --> Reply
    Fallback --> Reply
    
    Reply --> End([Chat bubble rendered in UI])
```

### 3. Supply Coordination & Matchmaking Flow
The marketplace enables citizens to ask for supplies and volunteers to fulfill needs. The backend matchmaking engine runs real-time matching checks:

```mermaid
flowchart LR
    Post[User posts Request / Offer] --> Add[Insert item to mutable Coordination Database]
    Add --> RunMatch{Scan matching database}
    
    RunMatch -->|Match Found: Same Category & Status=Active| PerformMatch[Set status to 'Matched' for both listings]
    RunMatch -->|No Match Available| PublishActive[Set status to 'Active']
    
    PerformMatch --> LogMatch[Write details to Matchmaker logs]
    LogMatch --> IncrementStats[Increment active count on Dashboard stat ribbon]
    LogMatch --> DispatchVol[Generate claimable task on Volunteer Board]
    
    PublishActive --> End([Item remains open for manual claims])
    IncrementStats --> End
```

### 4. Low-Bandwidth/Offline Mode Flow
When grid power or cell signals fail, the low-bandwidth switch optimizes data utilization:

```mermaid
flowchart TD
    Toggle[User toggles Low-Bandwidth Switch] --> CheckState{Is Checked?}
    
    CheckState -->|Yes: Offline Mode| DisableMap[Disable Leaflet.js external tile loading & hide map canvas]
    DisableMap --> RenderStatic[Render clean vector SVG offline graphic fallback]
    RenderStatic --> FetchCoords[Compile text coordinate directory of shelters, blockages, & hospitals]
    FetchCoords --> RenderText[Display coordinates block to copy/share via SMS]
    
    CheckState -->|No: Online Mode| EnableMap[Enable Leaflet map container & load OSM tiles]
    EnableMap --> Invalidate[Trigger map.invalidateSize to refresh layout]
```
