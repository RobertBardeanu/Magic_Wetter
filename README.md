# Magic Wetter

Magic Wetter ist eine einfache Wetter-App, gebaut mit HTML, CSS und JavaScript.  
Sie zeigt die aktuellen Wetterdaten zu einer Stadt über die OpenWeather-API an.[web:15]

## Funktionen

- Eingabefeld für eine Stadt.
- Anzeige von:
  - Stadtname
  - Länderkürzel (`sys.country`)
  - Temperatur in °C
  - Wetterbeschreibung (z. B. „light rain“)
  - Wetter-Icon von OpenWeather.[web:15][web:136]
- Suche per Button-Klick oder durch Drücken der Eingabetaste.

## Verwendete Technologien

- HTML für die Struktur der Seite.
- CSS für das Design.
- JavaScript für die Logik und den API-Aufruf.
- OpenWeather-API für aktuelle Wetterdaten.[web:15]

## Projektstruktur

```text
projekt-ordner/
├── index.html
├── styles.css
└── scripts.js
```

## Einrichtung

1. Erstelle einen kostenlosen Account bei [OpenWeather](https://openweathermap.org/) und hole dir einen API-Key (APPID).[web:194]
2. Öffne die Datei `scripts.js`.
3. Setze deinen eigenen API-Key ein:

```javascript
const API_key = "DEIN_OPENWEATHER_API_KEY";
```

4. Öffne die Datei `index.html` im Browser (z. B. per Doppelklick oder mit einem lokalen Server).

## Lizenz
Dieses Projekt nutzt die OpenWeather-API.
