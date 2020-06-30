# Auth in Nest.js

## Passports

Ist ein mini Framework, um einfacher mit Auth umzugehen. In der JS Welt ist es sozusagen zu einem Standart geworde. Wir verwenden momentan auch Passports, gute Gelegenheit mich einmal damit zu befassen.

Passport ist echt simpel. Es wird eine Strategy ausgewählt (z.B. jwt). Bei der Implementierung kann man eine Konfiguration uebergeben und muss ein "verify callback" implementieren, dass wenn der user erfolgreich gefunden und verifiziert wird diesen returned oder sonst `null`.

Zwei diesr Strategien habe ich gemaess Nest.js Tutorial umgesetzt. Die _local-strategy_ um die Login route zu schützen. Wenn valide credentials uebergeben werden, wird ein jwt signiert und returned. Die andere Strategy ist die _jwt-strategy_: ...

Viel der Magic der Authentifiziertung durch jtw wird durch Passports uebernommen.
