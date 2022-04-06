# Web Components Grundkurs

Dies ist das Repository für den **LinkedIn Learning** Kurs `[COURSENAME]`. Den gesamten Kurs finden Sie auf [LinkedIn Learning][lil-course-url].

<img src="https://github.com/LinkedInLearning/web-components-3055736/blob/main/thumbnail.jpeg?raw=true" />





[COURSEDESCRIPTION]

## Anleitung

Dieses Repository hat Branches für jedes Video im Kurs. Verwenden Sie das Ausklappmenü "Branch: ..." in GitHub um zwischen den unterschiedlichen Branches hin und her zu wechseln bzw. um bei einem spezifischen Status einzusteigen. Oder Sie fügen `/tree/BRANCH_NAME` der URL hinzu um direkt in den gewünschten Branch zu wechseln.

## Branches

Die Git Branches sind passend zu den Videos im Kurs strukturiert. Die Namenskonvention lautet `Kapitel#_Video#_*`. Der Branch `02_03_*` beinhaltet zum Beispiel die Übungen für das dritte Video im zweiten Kapitel.
Der `main` Branch beinhaltet den initialen Quellcode und wird nicht für die Übungen innerhalb des Kurses genutzt.

Wenn Sie von einem Branch nach Änderungen zum nächsten Branch wechseln, erhalten Sie möglicherweise die folgende Meldung:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

Dieses Problem lösen Sie wie folgt:
Add changes to git using this command: git add .
Commit changes using this command: git commit -m "some message"

## Installation

1. Um diese Übungsdateien nutzen zu können, müssen Sie folgendes installiert haben:
   - npm
2. Klonen Sie das Repository in Ihre lokale Maschine unter Verwendung von terminal (Mac), CMD (Windows) oder ein anderes Werkzeug mit grafischer Bedienoberfläche wie SourceTree.
3. `npm install` im geklonten Ordner
4. `npm run start` um den Server zu starten

### Autor

**David Lorenz**

_Frontend Architect_

Sehen Sie sich andere Kurse des Autors auf [LinkedIn Learning](https://www.linkedin.com/learning/instructors/david-lorenz?u=26112626) an.

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com/learning/building-a-graphql-project-with-react-js
[lil-thumbnail-url]: https://cdn.lynda.com/course/2875095/2875095-1615224395432-16x9.jpg
