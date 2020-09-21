+++
title =  "Abschaltung der alten Bonner Hood zum 30.09.2020"
date = 2020-07-14T14:38:12+02:00
url = "abschaltungHoodBonn"
anchor = "AbschaltungHoodBonn"
+++

Wir nutzen sogenannte Hoods (Wohnviertel) innerhalb KBU, welche Köln, Bonn und Umland via Backend separieren, um den Protokoll-Overhead (welcher von der verwendbaren Bandbreite abgeht) in *angemessenem*(niedrigen) Rahmen zu halten.  
Aktuell haben wir in Bonn 2 verschiedene Hoods: die alte KBU Hood Bonn und die neue KBU Hood Bonn V2.

Die neue Hood läuft seid guten 2 Jahren parallel und ein Großteil der Router wurde bereits migriert. Ein paralleles Netz wurde notwendig, da das in der alten [KBU Hood Bonn] eingesetzte Mesh Netzwerk Protokoll [B.A.T.M.A.N.]nach der Version 2013.04 mit der Aufwärtskompatibilität bricht.

Dies sahen wir als Chance auch eine Reihe anderer Modernisierungen einzuführen, z.B. 802.11s, VxLAN etc. Weitere Informationen findet Ihr [hier](https://kbu.freifunk.net/wiki/index.php?title=KBU_Bonn_V2).

Aktuell gibt es noch einen Supernode für die alte Infrastruktur (fastd6). Dieser wurde auch schon seid einigen Jahren nicht mehr geupdatet, da z.B. Batman in der alten Version(20143.4) nicht mehr auf neuen Kernels kompiliert, und ist dadurch ein (überflüssiges) Sicherheitsrisiko.

**Laut Karte sind aktuell knapp 50 Nodes nicht auf die neue Hood V2 migriert. Diese werden dann ab dem 30.09.20 nicht mehr laufen! Router, welche aufgrund Ihrer alten Software noch nicht auf der Karte erscheinen können, sind davon auch betroffen!**

Deshalb bitten wir alle entsprechenden Betreiber, Ihre Nodes zu aktualisieren. Dabei kann die neue Firmware direkt über das alte System installiert werden. Falls ein Passwort/Zertifikat für die Router vergeben wurde, funktioniert dies sogar aus der Entfernung! Die dafür benötigte Firmware findest Du entweder in unserem [Wiki](https://kbu.freifunk.net/wiki/index.php?title=Mitmachen) oder direkt unter [images.kbu.freifunk.net](http://images.kbu.freifunk.net/) und dort im Unterordner BonnV2.

**Bei Fragen melde Dich bitte über die Mailingliste und/oder komm bei unseren regelmäßigen Treffen vorbei , welche aktuell aufgrund von Corona als Videokonferenz via Jitsi stattfinden!**

