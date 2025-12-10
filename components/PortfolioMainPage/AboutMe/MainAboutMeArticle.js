import { CircleUserRound, Presentation } from "lucide-react";
import { AboutMe, Introduction, IntroductionWrapper, Navigation, NavigationButton, div } from "./StyledAboutMe";


export default function MainAboutMeArticle (){
    return(
        <>
          <IntroductionWrapper>
          <Introduction>Hi, ich bin Elisa.
eine leidenschaftliche Frontend-Entwicklerin, die es liebt, Ideen in funktionale und schöne Webanwendungen zu verwandeln.
Ich bin neugierig, detailverliebt und habe Freude daran, Probleme mit klarer Struktur und Kreativität zu lösen.

Wenn ich nicht code, spiele ich Videospiele, baue an meinem Portfolio weiter oder lerne neue Technologien, um meine Skills auszubauen. Ich mag sauberen, gut strukturierten Code und arbeite gerne in Umgebungen, in denen man offen kommuniziert und gemeinsam besser wird.
          </Introduction>
          <Navigation>
            <NavigationButton><Presentation/>Projekte</NavigationButton>
            <NavigationButton><CircleUserRound/>Kontakt</NavigationButton>
          </Navigation>
        </IntroductionWrapper>
        <IntroductionWrapper>
        <AboutMe>
          <h2>About me</h2>
          <>Ich entwickle moderne Webanwendungen mit Fokus auf Next.js, React und cleanem, verständlichem Code.
Mein Ziel ist es, Interfaces zu bauen, die intuitiv, performant und visuell ansprechend sind – ohne unnötige Komplexität.

Zu meinen Schwerpunkten gehören:

Entwicklung von responsiven Web-Frontends mit React & Next.js

State-Management (z. B. Zustand / Context API)

Verbindung von Frontend und Backend über APIs

Arbeiten mit Datenbanken wie MongoDB

Schreiben von wiederverwendbaren, sauberen Komponenten

Umsetzung von kleinen Projekten wie To-Do-Apps, Portfolios, Comment- oder Bookmark-Funktionen

Ich arbeite gerne projektorientiert, lerne schnell und liebe es, mich weiterzuentwickeln – jeden Tag ein bisschen besser als gestern.</>
        </AboutMe>
        </IntroductionWrapper>
        <IntroductionWrapper>
          <Introduction>Ich arbeite zielorientiert, lerne schnell und habe den Anspruch, jedes Projekt ein Stück besser zu machen als das vorherige. Für mich zählt nicht nur der Code, sondern auch das Nutzererlebnis.</Introduction>
        </IntroductionWrapper>
        </>
    )
}