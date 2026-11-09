

| INFORMACJE OGÓLNE |  |  |
| ----- | :---- | :---: |
| 1\. | Tytuł projektu | Analizator Deszczówki |
| 1a | Akronim | D. |
| 2\. | Obszar tematyczny | monitoring jakości wody deszczowej |
| 3\. | Słowa kluczowe (maks. 3\) | zanieczyszczenia wody, czujnik jakości wody, gospodarka wodna |
| 4\. | Planowany okres realizacji | 1 październik 2026 – 30 listopad 2026 |
| 5\. | Streszczenie (do 1000 znaków) | Projekt zakłada budowę dwóch prototypów stacji badawczej do automatycznej analizy właściwości fizykochemicznych wody opadowej przed jej gospodarczym wykorzystaniem. Urządzenia, rozmieszczone w różnych lokalizacjach, wykorzystują mechanizm separacji zanieczyszczeń z pierwszego spadu oraz mikrokontroler ESP32 z czujnikami pH, mętności, przewodności i temperatury. Dane pomiarowe trafiają bezprzewodowo przez jednostkę Raspberry Pi do autorskiej aplikacji internetowej. Zintegrowany w niej moduł sztucznej inteligencji analizuje historyczne trendy jakości opadów i generuje czytelne rekomendacje eksploatacyjne. Celem systemu jest prewencyjna weryfikacja parametrów deszczówki, co pozwala chronić centrale deszczowe i sprzęt domowy przed awariami, oceniać przydatność wody dla rolnictwa oraz na bieżąco monitorować lokalny stan zanieczyszczenia środowiska. |
| **INFORMACJE O WNIOSKODAWCY** |  |  |
| 1\. | Nazwa Szkoły | Zespół Szkół Elektronicznych w Rzeszowie |
| 2\. | Adres | Ul. Hetmańska 120 35-078 Rzeszów |
| **DANE KONTAKTOWE ZESPOŁU** |  |  |
| 1 | Imię i nazwisko lidera | Bartosz Leśniak |
|  | klasa | 2i |
|  | adres e-mail | bart.ek@hotmail.com  |
|  | numer telefonu | \+48 506 280 290  |
| 2 | Imię i nazwisko | Bartosz Nosek |
|  | klasa | 2i |
|  | adres e-mail | bartoszn2905@gmail.com |
|  | numer telefonu | \+48 733 466 283 |
| 3 | Imię i nazwisko | Bartosz Wilk |
|  | klasa | 2i |
|  | adres e-mail | wilkbartek2010@gmail.com  |
|  | numer telefonu | \+48 665 341 312  |
| **CEL PROJEKTU** *(maksymalna objętość i format \- do dwóch stron A4; czcionka Arial 11, pojedynczy odstęp miedzy wierszami)* |  |  |
| C.1. CEL I ZAŁOŻENIA PROJEKTU Głównym celem projektu jest zaprojektowanie i budowa działającego prototypu stacji badawczej („Analizatora Deszczówki”) przeznaczonej do automatycznej, ciągłej analizy właściwości fizykochemicznych wody opadowej. Urządzenie ma za zadanie badać jakość deszczówki przed jej dalszym wykorzystaniem, co pozwoli na świadome i bezpieczne zarządzanie tym zasobem niezależnie od skali i miejsca zastosowania. Wybór tematu podyktowany jest powszechnym zjawiskiem gromadzenia deszczówki bez jakiejkolwiek kontroli jej parametrów. Chociaż na rynku istnieją zaawansowane centrale deszczowe, opierają się one niemal wyłącznie na czujnikach poziomu wody, ignorując jej skład chemiczny. Nasz analizator rozwiązuje ten problem w ujęciu uniwersalnym, weryfikując parametry cieczy na jak najwcześniejszym etapie. Dzięki temu urządzenie dostarcza danych, które pozwalają uchronić dowolną infrastrukturę – od prostych pomp ogrodowych, przez zawory, aż po domowy sprzęt AGD – przed zniszczeniem cząstkami stałymi, a przewody hydrauliczne przed korozją. Znajomość parametrów deszczówki ma jednak znacznie szersze zastosowanie, wykraczające poza instalacje budynkowe. System pozwala na dokładną ocenę przydatności wody w rolnictwie i ogrodnictwie, gdzie wiedza o odczynie pH i zasoleniu chroni wrażliwe uprawy oraz glebę przed skutkami podlewania kwaśnymi deszczami. Ponadto urządzenie stanowić może rozproszoną stację wczesnego ostrzegania w lokalnym monitoringu środowiska. Skład opadów jest bezpośrednim wskaźnikiem poziomu zanieczyszczenia powietrza na danym obszarze. Wymywane przez deszcz pyły zawieszone i związki chemiczne natychmiast wpływają na mętność i przewodność próbki, pozwalając na weryfikację stanu środowiska. Realizacja celu opiera się na zintegrowanych założeniach technicznych i użytkowych. Podstawą działania systemu jest zautomatyzowany pomiar wstępny, w którym analiza wody następuje w zewnętrznej komorze badawczej tuż po fizycznym odrzuceniu najbardziej zanieczyszczonej partii opadu, czyli tak zwanego pierwszego spadu (First Flush). Całość opiera się na architekturze IoT, łącząc mikrokontroler ESP32, odpowiedzialny za akwizycję sygnałów analogowych z czujników, z jednostką Raspberry Pi pełniącą funkcję huba przesyłającego bezprzewodowo zebrane dane na serwer. Przetwarzanie bieżących parametrów takich jak pH, mętność i przewodność zapewnia ochronę mechaniczną i chemiczną układów docelowych. Uzupełnieniem tych mechanizmów jest nadzór biologiczny realizowany poprzez monitorowanie temperatury zgromadzonej wody, co daje wczesne ostrzeżenie przed ryzykiem procesów gnilnych i namnażania się bakterii w dowolnym zbiorniku. Zebrane przez stację surowe odczyty trafiają docelowo do autorskiej aplikacji internetowej, gdzie zintegrowany model sztucznej inteligencji analizuje wartości i streszcza je do formy czytelnych wniosków oraz rekomendacji dla użytkownika. Skonstruowany w ten sposób projekt płynnie wpisuje się w rozwój systemów Internetu Rzeczy oraz zrównoważonego zarządzania zasobami wodnymi, dostarczając korzyści techniczne, ekonomiczne i ekologiczne w wielu dziedzinach życia. C.2. OPIS PRZYJĘTEJ METODOLOGII BADAWCZEJ Badania skupią się na historycznej analizie gromadzonych w ramach projektu parametrów fizykochemicznych wody opadowej, takich jak pH, mętność, przewodność i temperatura. Systematycznie budowana baza własnych odczytów posłuży do śledzenia trendów zmian jakości deszczówki w czasie. Proces ten zrealizuje zautomatyzowany układ pomiarowy. Po wstępnej filtracji i fizycznym odrzuceniu zanieczyszczeń z pierwszego spadu, woda trafi do komory badawczej. Czujniki odczytają parametry, a mikrokontroler ESP32 prześle je przez jednostkę Raspberry Pi do bazy danych w aplikacji internetowej. Zgromadzone dane historyczne pozwolą na opracowanie zautomatyzowanych procesów decyzyjnych. Moduł AI przeanalizuje wyniki, generując konkretne rekomendacje eksploatacyjne. Posłużą one do zdefiniowania progów bezpieczeństwa dla urządzeń końcowych, takich jak centrale deszczowe, optymalizując zarządzanie zgromadzoną wodą i skutecznie zapobiegając uszkodzeniom instalacji.  Zostaną zbudowane trzy urządzenia i umieszczone u każdego z wnioskodawców. Pozwoli to na porównanie wyników w różnych lokalizacjach. C.3. ZADANIA W RAMACH PROJEKTU Zadanie 1: Budowa układu poboru wody i elektronicznej sondy pomiarowej •	Opis: Skonstruowanie komory pomiarowej wyposażonej w układ separujący pierwsze opady oraz integracja elektroniki odczytującej parametry cieczy. Zaprogramowanie mikrokontrolera ESP32 do stabilnej komunikacji i obsługi sensorów. •	Rezultaty: Działający prototyp stacji badawczej zdolny do bezobsługowego poboru próbek i poprawnego odczytu wartości fizykochemicznych. •	Koszty wraz z uzasadnieniem: Zgodnie z listą zakupów, wymagane jest nabycie czujników (pH, przewodności elektrycznej, zmętnienia, temperatury oraz opadów). Niezbędny jest również zakup elektroniki bazowej: modułu ESP32, izolatora sygnału analogowego, konwertera poziomów logicznych, przetwornika ADC oraz złączy i płytek uniwersalnych PCB. Zasilanie zostanie zrealizowane przy użyciu ogniw 18650, koszyka na baterie oraz ładowarki TP4056. Rezystory i kondensatory elektrolityczne są potrzebne do budowy stabilnego układu elektronicznego. Koszt: 1600zł Zadanie 2: Konfiguracja jednostki transmisyjnej (HUB) •	Opis: Przygotowanie i oprogramowanie jednostki centralnej działającej jako most pomiędzy sondą umieszczoną na zewnątrz a serwerem aplikacji internetowej. •	Rezultaty: Uruchomiony, stabilny punkt dostępowy gwarantujący bezprzewodowe przesyłanie pakietów danych pomiarowych w czasie rzeczywistym. •	Koszty wraz z uzasadnieniem: Wymagany jest zakup minikomputera Raspberry Pi 4 Model B (4 GB RAM), który posłuży jako centrum obliczeniowo-transmisyjne. Łączność z internetem zapewni modem Huawei E3372h-153 (USB Stick 4G/LTE) wyposażony w kartę ze starterem Orange SIM. Do instalacji systemu operacyjnego wymagana jest karta pamięci SanDisk microSDHC 32GB. Sprzęt ten jest kluczowy do uniezależnienia systemu od domowej sieci Wi-Fi i zapewnienia stabilnej transmisji na zewnątrz budynków. Koszt: 1000zł Zadanie 3: Stworzenie aplikacji analitycznej AI i przeprowadzenie badań •	Opis: Stworzenie aplikacji internetowej z czytelnym interfejsem graficznym, implementacja algorytmów AI do oceny parametrów wody oraz przeprowadzenie regularnych testów terenowych podczas opadów atmosferycznych. •	Rezultaty: Funkcjonująca aplikacja z wykresami i statystykami. Gotowa baza wyników pomiarów oraz wnioski końcowe dotyczące stopnia zanieczyszczenia deszczówki w zależności od warunków atmosferycznych. •	Koszty wraz z uzasadnieniem: Programowanie opierać się będzie na darmowych i otwartych narzędziach (Open Source). Koszty obejmują opłatę za krajowy hosting i domenę. Koszt 200zł Razem: 3 urządzenia (1600zł+1000zł) \+ 200zł \= **8000zł** |  |  |
| **D.PLANOWANE EFEKTY PROJEKTU** (do 500 znaków ze spacjami) *Opis planowanych rezultatów, efektów projektu* |  |  |
| Efektem projektu będzie budowa trzech stacji IoT badających podstawowe właściwości deszczówki (pH, mętność, przewodność, temperatura) z funkcją separacji pierwszego spadu. Zebrane dane trafią przez jednostkę HUB do autorskiej aplikacji, w której zaimplementowany jest model AI, który streści wyniki. Baza wyników pomoże oceniać przydatność wody do upraw i codziennego użytku przez osoby zbierające deszczówkę oraz na bieżąco monitorować lokalne zanieczyszczenie środowiska. |  |  |

Dane nauczyciela/opiekuna z ramienia szkoły:

………………………………………………………………………  
Imię i nazwisko, adres e-mail, nr telefonu

1. Niniejszym potwierdzam swój udział w projekcie badawczym jako opiekun.

2. Akceptuję zapisy Regulaminu konkursu pn. „NAUKOLATEK – Nastoletni Naukowiec”.

………………………………. ……………………………………  
Miejscowość, data, czytelny podpis

Zgoda Dyrektora szkoły na udział zespołu w projekcie oraz akceptacja Regulaminu konkursu pn. „NAUKOLATEK – Nastoletni Naukowiec”.

………………………………. ………………………………..........……  
Miejscowość, data, czytelny podpis, pieczątka szkoły

# **OŚWIADCZENIE CZŁONKÓW ZESPOŁU**

**Dane uczestnika konkursu**

Imię i nazwisko członka zespołu: ……………………………………………………………...

Wiek: ………….

Adres zamieszkania: ……………………………………………………………………………

Adres i pełna nazwa szkoły:

…………………………………………………………………………….…………………….

Oświadczam, że powyższe dane są prawdziwe i aktualne, a praca przesłana na konkurs   
pn. „**NAUKOLATEK – Nastoletni Naukowiec**”, organizowany przez ………………………………………………………….. (zwany dalej: „konkurs”) jest wynikiem pracy członków zespołu. Członkom zespołu przysługują wszelkie autorskie prawa osobiste oraz majątkowe do pracy konkursowej i nie są w żaden sposób ograniczone lub obciążone prawami osób trzecich. Przenoszę na Organizatora konkursu autorskie prawa majątkowe do wszystkich utworów powstałych w związku  
z moim uczestnictwem w konkursie, w tym powyższej pracy, za zasadach określonych w Regulaminie konkursu.

Za wszelkie roszczenia osób trzecich, które wynikają z tytułu naruszenia ich praw odpowiada uczestnik konkursu, który dopuścił się naruszenia.

Oświadczam, że zapoznałem/łam się z Regulaminem konkursu pn. **„NAUKOLATEK – Nastoletni Naukowiec**”, zorganizowanym przez …………………………………….… i akceptuję jego wszystkie warunki.

Przyjmuję odpowiedzialność za:

1) realizację projektu na warunkach określonych w niniejszym wniosku;  
2) rozliczenie końcowe projektu pod względem merytorycznym;  
3) rzetelne prowadzenie badań;  
4) dołożenie należytej dbałości o dokumentację badań realizowanych w ramach projektu.

……………………………………………………….  
Czytelny podpis członka zespołu

………………………………………………………..  
Miejscowość, data

……………………….…………………………………..................................................…  
Czytelny podpis rodzica/ opiekuna prawnego małoletniego członka zespołu, potwierdzający jego zgodę na uczestnictwo w konkursie przez jego dziecko/podopiecznego/ną. 

# **ZGODA RODZICÓW/ PRAWNYCH OPIEKUNÓW MAŁOLETNIEGO**  **CZŁONKA ZESPOŁU**

……………………………………………………………………………………………….  
Imię i nazwisko dziecka

……………………………………………………………………………………………….  
Klasa

……………………………………………………………………………………………….  
Nazwa i adres szkoły

**OŚWIADCZENIE** 

1. Oświadczam, że wyrażam zgodę na udział mojego dziecka/podopiecznego/nej  
   w konkursie pn. „**NAUKOLATEK** – Nastoletni Naukowiec” organizowanym przez ……………………………………………….. finansowanym z dotacji celowej Ministra Nauki i Szkolnictwa Wyższego, w ramach zadania zleconego pn. „Politechniczna Sieć VIA CARPATIA”.  
2. Akceptuję zapisy Regulaminu konkursu pn. „**NAUKOLATEK** – Nastoletni Naukowiec”.  
3. Wyrażam zgodę na publikowanie na stronach internetowych Organizatora danych osobowych oraz wyników uzyskanych przez moje dziecko/podopiecznego/ną  
   w konkursie.  
4. Potwierdzam, że zapoznałam/em się z informacją dotycząca przetwarzania przez Organizatora danych osobowych mojego dziecka/podopiecznego/nej (oraz moich)   
   w związku z jego udziałem w konkursie – zgodnie z art. 13 RODO.

……………………….…………………………………..................................................…  
Miejscowość, data, czytelny podpis rodzica/ów/ prawnego/ych opiekuna/ów małoletniego członka zespołu

# **Zgoda i zezwolenie na utrwalenie, rozpowszechnianie wizerunku**

Na podstawie art. 81 ust. 1 ustawy z dnia 4 kwietnia 1994 r. o prawie autorskim  
i prawach pokrewnych (Dz. U. z 2022 r. poz. 2509\) wyrażam zgodę na nieodpłatne używanie, wykorzystanie i rozpowszechnianie wizerunku mojego dziecka/ podopiecznego/nej, utrwalonego jakąkolwiek techniką na wszelkich nośnikach  
(w tym w postaci fotografii i dokumentacji filmowej) przez Organizatora Konkursu, na potrzeby działań promocyjnych związanych z organizowanym konkursem pn. **„NAUKOLATEK – Nastoletni Naukowiec”.**

1. Niniejsza zgoda jest nieodpłatna, nie jest ograniczona ilościowo, czasowo ani terytorialnie.

   2. Dla potrzeb działań promocyjnych wizerunek mojego dziecka/podopiecznego/nej może być użyty do różnego rodzaju form elektronicznego przetwarzania, kadrowania i kompozycji, a także zestawiony z wizerunkami innych osób, może być uzupełniony towarzyszącym komentarzem, natomiast nagrania filmowe  
      z jego udziałem mogą być cięte, montowane, modyfikowane, dodawane do innych materiałów powstających na potrzeby konkursów oraz w celach informacyjnych i promocyjnych Organizatora konkursu.

   3. Niniejsza zgoda obejmuje wszelkie formy publikacji, w szczególności rozpowszechnianie w Internecie (w tym na stronach internetowych Organizatora konkursu), portalach społecznościowych Facebook, YouTube itp.) oraz zamieszczanie w materiałach promocyjnych i informacyjnych. Wizerunek nie może być użyty w formie lub publikacji dla mojego dziecka/podopiecznego/nej obraźliwej lub naruszać w inny sposób dobra osobiste.

Wyrażam zgodę na przetwarzanie wizerunku mojego dziecka/podopiecznego/nej  
w związku z udziałem w konkursie pn. **„NAUKOLATEK – Nastoletni Naukowiec”.**

………………………………………………………………………………………………....  
Miejscowość, data, czytelny podpis rodzica/ów/ prawnego/ych opiekuna/ów małoletniego członka zespołu

# **Informacja Administratora w związku z przetwarzaniem danych osobowych – zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych** **w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (zwanego dalej RODO)**

1. Administratorem Pani/Pana danych osobowych jest Politechnika Rzeszowska   
   im. Ignacego Łukasiewicza, z siedzibą przy al. Powstańców Warszawy 12,  
   35–029 Rzeszów, adres e-mail: [kancelaria@prz.edu.pl](mailto:kancelaria@prz.edu.pl) (dalej Uczelnia)  
   w zakresie etapu regionalnego.  
2. Administrator, zgodnie z art. 37 ust. 1 lit. a RODO, powołał Inspektora Ochrony Danych, z którym w sprawach związanych z przetwarzaniem danych osobowych może się Pani/Pan kontaktować za pomocą poczty elektronicznej pod adresem [iod@prz.edu.pl](mailto:iod@prz.edu.pl).  
3. Pani/Pana dane osobowe będą przetwarzane w celu:  
1) rejestracji uczestnictwa w konkursie oraz organizacji konkursu pn. „NAUKOLATEK – Nastoletni Naukowiec”,  
2) ogłoszenia  wyników konkursu i publikowania informacji o laureatach,  
3) dokumentowania konkursu poprzez przetwarzanie danych osobowych, w tym wizerunku uczestników konkursu \- na podstawie \- art. 6 ust. 1 lit. e RODO lub na podstawie udzielonej zgody – art. 6 ust. 1 lit. a RODO w przypadku przetwarzania indywidualnych wizerunków uczestników.  
4. Odbiorcami Pani/Pana danych osobowych mogą być podmioty uprawnione na podstawie przepisów prawa, dostawcy usług informatycznych administratora oraz w zakresie danych zwycięzców (w zakresie imienia, nazwiska, wizerunku  
   i nazwy szkoły) – użytkownicy stron internetowych administratora oraz portali społecznościowych na których administrator posiada konta   
5. Pani/Pana dane osobowe mogą zostać udostępnione Politechnice Białostockiej, Politechnice Lubelskiej-  współorganizatorom międzywojewódzkiego etapu konkursu.

W związku z prowadzeniem działań promocyjnych związanych  
z organizowanym konkursem pn. „NAUKOLATEK – Nastoletni Naukowiec”. Pani/Pana wizerunek może zostać opublikowany na stronach internetowych Politechniki Rzeszowskiej, a także jej oficjalnych profilach w mediach społecznościowych Facebook, Instagram. W zakresie zamieszczania materiałów informacyjnych oraz fotorelacji z wydarzenia na oficjalnym profilu Politechniki Rzeszowskiej w serwisie społecznościowym:

1) Facebook (polityka prywatności: [https\://www\.facebook.com/privacy/policy/?locale=pl\_PL](https://www.facebook.com/privacy/policy/?locale=pl_PL)) oraz Instagram (polityka prywatności: [https\://help.instagram.com/155833707900388](https://help.instagram.com/155833707900388)), współadministratorem danych osobowych jest Meta Platforms  Ireland Limite,  
2) Instagram (polityka prywatności: [https\://help.instagram.com/155833707900388](https://help.instagram.com/155833707900388)), współadministratorem danych osobowych jest Meta Platforms Ireland Limited.  
6. Pani/Pana dane osobowe będą przechowywane w okresach niezbędnych do realizacji wyżej określonych celów. Dane osobowe przetwarzane na podstawie udzielonej zgody będą przetwarzane do czasu cofnięcia udzielonej zgody.  
7. Dane osobowe przetwarzane na podstawie wyrażonej zgody, będą przetwarzane do momentu cofnięcia zgody lub ustania celu przetwarzania. Mogą Państwo w każdej chwili wycofać zgodę na przetwarzanie danych osobowych w zakresie, w jakim zgoda została udzielona. Cofnięcia zgody można dokonać poprzez przesłanie żądania na adres e-mail:[via.naukolatek@prz.edu.pl](mailto:via.naukolatek@prz.edu.pl). Cofnięcie zgody nie będzie miało jednak wpływu na przetwarzanie, którego dokonano na podstawie zgody przed jej cofnięciem.  
8. Przysługuje Pani/Panu prawo dostępu do treści swoich danych oraz   
   z zastrzeżeniem przepisów prawa przysługuje Pani/Panu prawo do:  
1) cofnięcia udzielonej zgody, z zastrzeżeniem, że wycofanie zgody nie wpływa na zgodność z prawem przetwarzania którego dokonano na podstawie zgody przed jej wycofaniem;  
2) sprostowania danych;  
3) usunięcia danych;  
4) ograniczenia przetwarzania danych;  
5) wniesienia sprzeciwu wobec przetwarzania danych osobowych;  
9. Przysługuje Pani/Panu prawo do wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna Pani/Pan, że przetwarzanie danych osobowych narusza powszechnie obowiązujące przepisy w tym zakresie.  
10. Podanie danych osobowych jest dobrowolne, ale niezbędne do wzięcia udziału   
    w konkursie. Konsekwencją ich niepodania będzie brak możliwości wzięcia udziału w konkursie.  
11. Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji ani profilowania, o którym mowa w art. 22\.
