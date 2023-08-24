<template>
    <div class="doorWrapper" :class="openCloseState" id="doorWrapper">
        <div class="doorWindow">
            <div class="doorHeader">
                <div class="borderWrapperHeading">
                    <h1>{{getDay.toString()}}</h1>
                </div>
                <button class="close" type="submit" @click="fadeOut()">
                    X 
                </button>
            </div>
            <hr>
            <div class="doorPage">
                <div class="dayContent" v-if="tooEarlyCheck(presentDay)">
                    <div class="contentImg" style="width: 50%">
                        <img src="../assets/images/christmasSantaCropped.jpeg" alt="image">
                    </div>
                    <h2>No Peeking!</h2>
                </div>
                <div class="dayContent" v-if="dayCheck('12.01.2022')">
                    <div class="contentText">
                        <h2>Überraschung!</h2>
                        <p>
                            Hallo Anna, 🥰<br>
                            <br>
                            Weihnachten bedeutet so vieles, allem voran, den Menschen die man liebt, zu zeigen, wie wichtig sie einem sind. <br>
                            Auch wenn das letzte Jahr ein schwieriges war, und wir viel lernen und erfahren mussten, was nicht einfach war, <br>
                            gab es so viele wundervolle Momente, die ich um keinen Preis missen würden. <br>
                            Dein Kopf mag oft anderes behaupten, aber ich ich liebe dich so sehr, und bin glücklich über jeden Tag,
                            den wir miteinander verbringen dürfen. <br>
                            Deswegen möchte ich dir dieses Jahr zum Fest der Liebe etwas geben, was allein von mir kommt. <br>
                            Ich bin vielleicht kein Künstler, nur ein leidlicher Musiker, und habe zwei linke Hände, aber programmieren kann ich. 😅<br>
                            <br> 
                            Vielleicht dachtest du dir so etwas bereits, <br>
                            aber aus diesem Grund schreit dein Adventskalender dieses Jahr förmlich "Pleite-Programmierer-Liebe". 😂<br>
                            Du machst dich also besser bereit für eine Adventszeit voller dummer Witze, Überraschungen und vielleicht den ein, oder anderen Gastbeitrag deiner Freunde. 🙃<br>
                            ...Hauptsächlich allerdings dumme Witze!
                            Let's Go!!!!
                            <br>
                        </p>
                        <iframe src="https://giphy.com/embed/WrVOtWEay7fJS" width="50%" height="50%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        <p>
                            Ich hoffe, dass dir die Törchen die kommende Weihnachtszeit ein bisschen versüßen können
                            und dich das ein oder andere Mal hörbar durch die Nase ausatmen lassen werden.<br>
                            <br>
                            Liebe dich bis zum Mond,<br>
                            Dein Dominik <br>
                            <br>
                            PS: Du mich auch? Beweisen!
                            <br><br><br>
                        </p>
                    </div>
                </div>
                <ClickerGame v-if="dayCheck('12.01.2022')"/>
                <div class="dayContent" v-if="dayCheck('12.02.2022')">
                    <div class="contentText">
                        <h2>🤖 Happy End 🤖</h2>
                        <p>
                            Hello, world <br>
                            Programmed to work and not to feel<br>
                            Not even sure that this is real <br>
                            Hello, world <br>
                            Find my voice <br>
                            Although, it sounds like bits and bytes <br>
                            My circuitry is filled with mites <br>
                            Hello, world <br>
                            Oh, will I find a love <br>
                            Or a power plug? <br>
                            Oh, digitally isolated <br>
                            Oh, creator, please don't leave me waiting <br>
                            Hello, world <br>
                            Programmed to work and not to feel <br>
                            Not even sure that this is real <br> 
                            Hello, world <br>
                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="../assets/images/robotRepair.png" alt="">
                    </div>
                    <div class="contentImg">
                        <img src="../assets/images/robotGreeting.png" alt="">
                    </div>
                    <div class="contentText">
                        Nachdem ich dir das Lied mit dem Versprechen gezeigt hatte, dass es für den kleinen Roboter mit Existenzängsten gut ausgehen würde, <br>
                        und danach das Gefühl hatte, dich ein kleines bissche traumatisiert zu haben, musste ich mich einfach auf die Suche nach einem glücklichen Ausgang der Geschichte des kleinen Kerls machen! <br>
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.03.2022')">
                    <div class="contentText">
                        <h2>Strauß, Winter und Wal (1)</h2>
                        <p>
                            Unordnung findet sich überall. <br>
                            Für jedes Staubkorn in den Ecken deines Heims, bis hin zu ganzen Landstrichen, die wüstem Chaos anheim fallen,<br>
                            ist es eine grundlegende Wahrheit, dass jede Ordnung eine Anstrengung gegen jene Kraft der Unordnung bedeutet. <br>
                            Eine Unachtsamkeit, eine Pause in diesem Aufbegeheren führt unweigerlich zum Vormarsch des Durcheinanders. <br>
                            <br>
                            So, oder so ähnlich erklingen allerorts die Lehren der Professoren, die ihrer mehr oder weniger aufmerksam lauschenden Hörerschaft das Konzept der Entrophie erklären. <br>
                            Doch das eigentlich wundersame an der Sache ist doch, dass scheinbar niemand je auf die Idee kommt zu fragen, wo die ganze Unordung eigentlich herkommt? Wer ist verantwortlich für die Sisyphusaufgaben in unserem Leben? <br>
                             Wer lässt aus Behausungen Ruinen werden, Felder überwuchern und Wälder zu Wüsten werden? Wind, Regen und Sonne etwa? Und wessen Werkzeug sind diese Missetäter? <br>
                            Auf unserer Erde sucht man diese Fragen, und ihre Antworten erst recht, vergebens. Doch die Bewohner von Grundfeste, einer Welt, die unserer im Weltenkarussel kaum ferner sein könnte, wissen sehr wohl, wem sie Chaos jeder Art verdanken. <br>
                            So wie Gutes und Böses ihren Quell in eignen Welten beherbergen, <br>
                            manifestierten sich zum Anbeginn der Zeit auch die Kräfte der Ordnung und des Chaos zu ihren ureigenen Welten. <br>
                            Eine dieser Welten, die oft übersehen wird, wenn über die großen Kräfte gesprochen wird, die durch ihre entgegengesetzten Anstrengungen das Gleichgewicht des Kosmos wahren, ist die Welt "Durcheinander". <br>
                            <br>
                            In Durcheinander findet sich der Ursprung eines jeden Chaos, das weder aus allzu guten, noch sonderlich bösen Intentionen entsteht. <br>
                            Die Bewohner dieser Welt verbringen ihre Tage und Nächte damit, Unordnung und harmloses Chaos jeglicher Art zu produzieren, ob als Irrlichter, die verirrten Wanderern erscheinen, um ihnen flasche Wegbeschreibungen zu geben, bei den Plünderpfützen, wo junge Bewohner von Durcheinander zu Schaaren einzelne Socken aus Waschzubern dutzender Dimensionen fischen, <br>
                            oder in den Staubmühlen, von wo aus die zerriebenen Überreste aller Art Gesteins in das Astralmeer gekippt werden, um sich früher, oder später, über alle Welten zu ergießen. <br>
                            <br>
                            Von einem dieser Bewohner hadelt unsere Geschichte. <br>
                            Bromos Strauß war ein heranwachsender Junge, ein Mensch, von etwa sechzehn Jahren mit schmalen Schultern, zerschlissener Kleidung und haselnussbraunem Haar. <br>
                            Sein Erscheinungsbild unterschied sich dabei eher durch seine Unscheinbarkeit von denen anderer Bewohnern Durcheinanders. <br>
                            Dazu sollte gesagt werden, dass In einer Welt wie dieser, selbst der groteskste aller Menschen, der unter seinesgleichen, <br>
                            die eher unschöne Eigenschaft seiner Artgenossen hervorzubringen vermochte, mit Fakeln, Heugabeln und haarsträubenden Absichten bewaffnet aufzumarschieren, <br>
                            nirgendwo in Durcheinander für mehr als ein paar hochgezogene Augenbrauen gesorgt hätte. <br>

                            Tatsächlich verriet allein Bromos linkes Augen seine Herkunft: wie es bei Wesen dieser Welt in seltenen Fällen vorkam, <br>
                            öffnete sich die Pupille seines linken Auges bei genauem Hinsehen in einen so schwindelerregenden Strudel von Eindrücken und Visionen, <br>
                            dass es jeden Betrachter dem Wahnsinn näher brachte. Zum Glück musste er sich darum nicht sonderlich sorgen, <br>
                            da ausnahmslos alle Lebewesen in seinem näheren Umfeld bereits voll und ganz den Verstand verloren hatten.

                            So war es also nicht sonderlich überraschend für ihn, als sein Onkel Nero am Morgen, an dem sich diese Geschichte zutrug, <br>
                            den Kopf durch eine Klappe im Boden seines Zimmers steckte, und ihn mit den Worten "Hopp hopp, mein kleiner Chaot, raus aus den Federn!" weckte, <br>
                            während er versuchte sich mit einem unförmigen Brocken metall, weiter durch die Luke zu schieben. "Wenig Zeit! Wir müssen meine Tuba ausbeulen. <br>
                            Ein paar alte Freunde aus Pandemonium wollen ein Gepolter starten, und irgendwo ein paar Lawinen auslösen, dafür brauche ich das alte Schätzchen hier." <br>
                            Wobei er liebevoll das Krumme Stück Bleck um seinen Hals tätschelte."Einige von den Jungs aus Pandemonium habe ich seit Jahrhunderten nicht gesehen!". <br>
                            Darauf verschwand der alte Elf ebensoplötzlich in die unteren Stockwerke ihres Hauses am Babelplatz, wie er gekommen war. 
                            Also wälzte sich Bromos mit einem Brummen aus seiner Hängematte und begann, dem Onkel hinterher, die Leitern und Gänge ihrer Behausung zu herabzuklettern. <br>
                            Dass er 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.04.2022')">
                    <div class="contentText">
                        https://vuejsexamples.com/embed-a-youtube-player-easily-and-lazy-load-the-video-with-vue/
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.05.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" width="80vw" height="80vh" v-if="dayCheck('12.06.2022')">
                    <div>
                        <h2>Know thy Man</h2>
                        <div class="contentText">
                            Guten Morgen Frau Heyer, <br>
                            <br>
                            <iframe src="https://giphy.com/embed/lQPHNPMPZ7tcIwseGn" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            <br> <br>
                            Sie hatten im Gefühl, dass er kommt, Sie haben ihn gefürchtet und nun ist er hier! <br>
                            Der TEST! Ich wünsche Ihnen viel Erfolg. <br>
                            Hilfsmittel sind nicht erlaubt. <br>
                            <br>
                            Ein Bestehen hätte zur Folge, dass ich Ihr unangebrachtes und indiskretes Verhalten der letzten Tage noch einmal dulden werde. <br>
                            Andernfalls kommen die üblichen Disziplinarverfahren zum Tragen. <br>
                            <br>
                            <iframe src="https://giphy.com/embed/27c3zdaY6eeIAwp7Qi" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> br
                            <br>
                            Weiteren Fragen? <br>
                            Nein? <br>
                            Good Girl. <br>
                            <br>
                            <iframe src="https://giphy.com/embed/26CaMZD4QVHauSB56" width="480" height="385" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <br>
                            
                            
                        </div>
                        
                    </div>
                    <div>
                        <iframe width="800" height="800" style="background-color:white; padding:5px 0px 0 5px; border:3px solid black; margin:auto; display:block" frameborder="0" src="https://crosswordlabs.com/embed/know-da-man"></iframe>
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.07.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.08.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.09.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.10.2022')">
                    <div class="contentText">
                        
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.11.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.12.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.13.2022')">
                    <div class="contentText">
                        <h2>Kerstin Gier</h2>
                        <h2>Silber - Die Hochzeit</h2>
                        <p>
                            Ein Bonuskapitel <br>
 <br>
 <br>
 <br>
 <br>
 <br>
                            Inhalt <br>
 <br>
 <br>
                            Countdown bis zur Hochzeit <br>
 <br>
 <br>
 <br>
 <br>
 <br>
                            Countdown bis zur Hochzeit <br>
 <br>
                            live und ungefiltert direkt aus Mias Kopf <br>
 <br>
 <br>
 <br>
                            8.00 Uhr: Noch sieben Stunden bis zur Trauung <br>
 <br>
 <br>
 <br>
                            »Dafür werden wir von der Schule fliegen«, flüstert Liv. »Beeilt euch doch ein bisschen!« <br>
 <br>
                            Ich verdrehe die Augen. Das kann meine Schwester wirklich gut: Befehle erteilen und dabei gleichzeitig Panik verbreiten. <br>
 <br>
                            »Ich mache schon so schnell ich kann«, zischt Grayson, der auf einer Leiter steht und die Kulisse des Shakespeare-Stücks demontiert, das morgen Abend hier in der Aula Premiere hat. <br>
 <br>
                            »Außerdem – wessen Idee war es denn, sich den Schlüssel zu besorgen und in die Schule einzubrechen, um das hier zu klauen?« Henry nimmt die Metallstangen entgegen, die Grayson abgeschraubt hat. <br>
 <br>
                            »Meine«, gibt Liv kleinlaut zu. »Aber es ist eine dumme Idee.« <br>
 <br>
                            »Ist sie nicht!«, sage ich. »Sie ist genial.« <br>
 <br>
                            Und schließlich haben wir nicht vor, uns erwischen zu lassen. Dazu müsste man sich auch schön blöd anstellen, bei einem schwerhörigen Hausmeister, der am Wochenende gern lange schläft. <br>
 <br>
                            Ungefähr so blöd wie Grayson gerade, dessen Fluch vom Lärm zweier Metallstangen übertönt wird, die außerhalb von Henrys Reichweite auf die Bühne donnern und über die Stufen hinab bis auf den Steinboden der Aula scheppern. <br>
 <br>
                            »’tschuldigung, die klemmten«, flüstert Grayson, als der Krach abgeebbt und Mr Hedderly nebenan in seiner Hausmeisterwohnung aus dem Bett gefallen ist. Garantiert. <br>
 <br>
                            »Wir sind geliefert.« Liv stöhnt noch lauter. <br>
 <br>
                            Okay, Augenrollen hilft jetzt nichts, Zeit, hier mal das Kommado zu übernehmen. »Ach was.« Ich sehe kurz zur Tür hinüber. »Macht einfach weiter! Wenn wir uns beeilen, sind wir hier längst raus, bevor Mr Hedderly angehumpelt kommt.« <br>
 <br>
                            »Es sei denn, er lässt den Schlafanzug an.« Henry kichert leise, und Liv bedenkt ihn über die Blumengirlanden hinweg mit einem bösen Blick, während sie hektisch alle losen Schrauben einsammelt. <br>
 <br>
                            »Ihr könnt lachen – ihr habt eure A-Levels in der Tasche. Aber Mia und ich haben noch ein paar Schuljahre vor uns.« <br>
 <br>
                            Da hat sie allerdings recht. <br>
 <br>
                            »Sie werden euch schon nicht rausschmeißen. Jasper hat viel Schlimmeres angestellt und dafür immer nur Verwarnungen kassiert, stimmt’s, Grayson?« <br>
 <br>
                            »Einschgu dasch gigg gen Kaigang inger Lehrergoilekke?« Mein künftiger Stiefbruder ist nur schwer zu verstehen, weil er einen Schraubenzieher quer im Mund hat, aber wenn ich das richtig gehört habe und Jasper mal einen Kaiman in der Lehrertoilette platziert hat und trotzdem nicht von der Schule geflogen ist, besteht noch Hoffnung. <br>
 <br>
                            Oder auch nicht. <br>
 <br>
                            »Es war nur ein kleiner Kaiman, und er hat niemandem die Hand abgebissen oder zu Tode erschreckt«, sagt eine Stimme hinter uns. <br>
 <br>
                            Sie klingt äußerst zuvorkommend und weiblich und gehört somit definitiv nicht Mr Hedderly. <br>
 <br>
                            Nein, es ist Direktorin Cook höchstpersönlich, die in der Tür steht und natürlich nicht im Schlafanzug, sondern wie immer tadellos gekleidet und frisiert. <br>
 <br>
                            Instinktiv versuche ich, mich unsichtbar zu machen, aber leider ist das hier kein Traum, und so können wir Direktorin Cook nur entsetzt anglotzen. Verdammt. Wo kommt die überhaupt um diese Uhrzeit her? Hat sie kein Zuhause? <br>
 <br>
                            Wenigstens scheint sie bestens gelaunt zu sein. Während wir alle fieberhaft überlegen, was für eine Geschichte wir ihr auftischen sollen, fährt sie heiter fort: »Ich verrate Ihnen mal was: Wir waren sogar ehrlich erleichtert, den Kaiman endlich zu sehen, denn das arme Tier musste zuvor bereits die Lehrer von Saint Lennox, dem Dougan College und der Roslyn High erschrecken, und wir wussten, es war nur eine Frage der Zeit, bis es einer hier einschmuggeln würde.« Sie lächelt uns an. »Guten Morgen, übrigens! Darf ich fragen, was Sie hier tun? Ich wusste gar nicht, dass Sie in der Theater-AG sind.« <br>
 <br>
                            Wir fangen alle gleichzeitig an zu sprechen, bis auf Grayson, der Direktorin Cook von der Leiter aus nur weiter schuldbewusst anstarrt. (Das weiß ich, ohne hinzuschauen.) <br>
 <br>
                            »Mrs Bennison hatte uns gebeten, ihr beim Bühnenbild zu helfen«, sagt Henry. <br>
 <br>
                            »Ich bin die Zweitbesetzung von Ophelia und wollte noch ein bisschen proben«, sage ich. <br>
 <br>
                            Und Liv sagt: »Ich habe hier gestern meine Kontaktlinsen verloren.« <br>
 <br>
                            Tja, und das ist der Grund, warum man sich bei so einer Angelegenheit vorher absprechen muss, Leute! <br>
 <br>
                            »Hm«, macht Direktorin Cook und mustert uns der Reihe nach. Das Lächeln hat sie eingestellt. »Erstens: Die Theater-AG wird in diesem Jahr nicht von Mrs Bennison, sondern von Mr Cooper geleitet. Zweitens: Sie führen den Sommernachtstraum auf, nicht Hamlet, und drittens: Warum zur Hölle steht Grayson auf der Suche nach Kontaktlinsen mit einem Schraubenzieher auf einer Leiter?« Sie schüttelt den Kopf. »Für mich sieht das leider so aus, als seien Sie vier hier gerade im Begriff, Oberons Elfenpavillon zu stehlen.« <br>
 <br>
                            »Das ist absolut richtig.« Typisch, Grayson knickt natürlich sofort ein. Ich rüttele zur Strafe ein bisschen an der Leiter, und er verstummt wieder. <br>
 <br>
                            »Nein, das ist absolut gar nicht richtig«, ruft Liv verzweifelt. »Wir wollten ihn nur ausleihen.« <br>
 <br>
                            »Und nur für einen einzigen Tag. Wir hätten das niemals getan, wenn es kein Notfall wäre«, ergänzt Henry. <br>
 <br>
                            An ihrem Mienenspiel kann ich deutlich ablesen, dass die Direktorin, trotz der strenggerunzelten Stirn und des einschüchternden Blicks, mit dem sie uns in Schach hält, vor allem eins ist: neugierig. <br>
 <br>
                            Wenn wir sie jetzt noch dazu bringen können, Mitleid zu haben, kommen wir vielleicht lebend aus der Nummer raus. Was dann wohl meine Aufgabe wäre, schließlich bin ich die Jüngste und mit Abstand Niedlichste von uns. <br>
 <br>
                            Ich lasse meine Unterlippe zittern. »Heute ist die Hochzeit unserer Mum mit Graysons Dad.« Meine Augen füllen sich mit Tränen. »Und es sollte doch der schönste Tag in ihrem Leben werden.« <br>
 <br>
                            »Oh.« Direktorin Cook sieht eindeutig betroffen aus. »Ich habe davon in der Zeitung gelesen. Sie waren auch unter den Opfern, oder? Dieser Hochzeitsplaner ist einfach verschwunden, wie hieß er noch gleich? Gobelin?« <br>
 <br>
                            »Pascal de Gobineau alias Peter Pickering«, knurrt Grayson. <br>
 <br>
                            »Richtig«, sagt die Direktorin. »Mit dem ganzen Geld ins Ausland. Und all die Brautpaare stehen nun vor dem Nichts.« <br>
 <br>
                            Genau. <br>
 <br>
                            »Sogar die Ringe hat er mitgenommen«, sage ich mit bebender Stimme. »Arme Mum! Sie hat sich furchtbar auf diesen Tag gefreut. Aber jetzt …« Ich blicke angestrengt auf meine Schuhspitzen und tue so, als würde ich gegen einen Tränenausbruch ankämpfen. Vielleicht sollte ich mich im nächsten Schuljahr auch mal in der Theater-AG anmelden, ich bin wirklich gut. <br>
 <br>
                            Henry räuspert sich. »Verstehen Sie, es gibt keine Räumlichkeiten, keinen Champagner, keinen Blumenschmuck, keine Hochzeitstorte, keine Oldtimer-Limousine, keine Band, kein Streichorchester für die Kirche, ja, nicht mal eine Kirche …« Er verstummt, und ich setze einen zarten, aber sehr effektvollen Schluchzer in die Pause. <br>
 <br>
                            »Mum und Ernest haben es nicht übers Herz gebracht, die Hochzeit zu verschieben«, übernimmt Liv nun. »Weil doch so viele Gäste von weither angereist sind. Sogar aus Indien und Südafrika. Von ihren letzten Ersparnissen.« <br>
 <br>
                            Ich schüttele leicht den Kopf. Muss sie immer übertreiben? Aber sie scheint es selbst zu bemerken. »Mum sagt, jetzt gibt es eben Sandwiches anstelle eines Vier-Gänge-Menüs«, lenkt sie ab, »und jetzt picknicken wir alle am Strand. Sie ist so tapfer. Aber wir wollten es wenigstens ein bisschen feierlich machen. Und deshalb …« <br>
 <br>
                            »Ich verstehe«, sagt Direktorin Cook mit glänzenden Augen. »Ihr braucht König Oberons Elfenpavillon für die Trauung. Oh, das ist …« Sie sucht nach einem Taschentuch. <br>
 <br>
                            Okay, jetzt haben wir sie. <br>
 <br>
                            »Er ist einfach so wunderschön«, hauche ich. »Finden Sie nicht, dass er mit den weißen Blumen und den zarten Bändern wie geschaffen für eine Hochzeit am Strand ist?« <br>
 <br>
                            Direktorin Cook nickt langsam. »Die Organza-Bahnen werden sacht im Wind wehen, während sie sich das Jawort geben.« Sie schaut verträumt ins Leere. Dann strafft sie ihre Schultern. »Ich denke, die Generalprobe kann ohne den Pavillon auskommen. Ich fand es ohnehin ein wenig überladen auf der Bühne, wenn ich ehrlich sein soll.« Sie fixiert uns nacheinander mit strengem Blick. »Aber spätestens morgen Mittag steht er wieder hier, und zwar unversehrt! Versprochen?« <br>
 <br>
                            Während Grayson vor Erleichterung fast von der Leiter fällt, strahle ich Direktorin Cook an, und diesmal sogar ganz ohne zu schauspielern. <br>
 <br>
                            Ich mag sie. <br>
 <br>
 <br>
 <br>
                            9.15 Uhr: Noch fünf Stunden und fünfundvierzig Minuten bis zur Trauung <br>
 <br>
 <br>
 <br>
                            Es klingelt an der Tür. Da alle außer mir gerade nur halb oder gar nicht angezogen sind oder mit beiden Händen in einem Hefeteig stecken (Lottie behauptet, dringend noch vierzig Zimtschnecken backen zu müssen), mache ich auf. Es ist ein Mann mit einer Kiste. Einer gurrenden Kiste. <br>
 <br>
                            »Die Tauben!« Mürrisch hält er mir einen Block hin, auf dem ich unterschreiben soll. »Fünfzig Stück.« <br>
 <br>
                            Oh Gott. Die Tauben sollten ursprünglich nach der Trauung vor der Kirche auffliegen, ein Detail, auf das der falsche Pascal de Gobineau mit Nachdruck bestanden hatte. Weil weiße Hochzeitstauben so unglaublich fotogen seien. <br>
 <br>
                            Wie es aussah, waren die Tauben die einzige Rechnung, die die falsche Grinsebacke tatsächlich beglichen hat, denn der Lieferant weigert sich, sie wieder mitzunehmen. <br>
 <br>
                            »Sie haben bezahlt, Sie lassen sie fliegen«, sagt er, und als ich einwende, dass wir gar nicht wissen, wie das geht, verdreht er die Augen. »Einfach den Deckel öffnen. Wenn sie nicht sofort losflattern, in die Hände klatschen, dann hauen sie schon ab.« <br>
 <br>
                            Ich mustere die Kiste misstrauisch. Sie erscheint mir ziemlich klein für fünfzig Tauben. Und die sollen noch über fünf Stunden darin ausharren? Das kommt mir unfair vor. »Brauchen die nicht was zu trinken? Was fressen die denn überhaupt? Und was ist, wenn sie mal müssen?«, frage ich, aber der Mann ist schon wieder auf dem Weg zu seinem Auto. Seinem gurrenden Auto. Er hat wohl noch ein paar andere Hochzeiten zu beliefern. <br>
 <br>
 <br>
 <br>
                            9.30 Uhr: Noch fünfeinhalb Stunden bis zur Trauung <br>
 <br>
 <br>
 <br>
                            Wir haben uns alle im Garten versammelt, um die Tauben fliegen zu lassen. Alles andere wäre Tierquälerei, da sind wir einer Meinung. Na ja, bis auf Spot und Buttercup, die ein gewisses Eigeninteresse am Inhalt der Kiste angemeldet haben. Sicherheitshalber haben wir die beiden ins Haus gesperrt, wo sie nun hinter der Küchentür sitzen und uns beleidigt (Spot) und traurig (Butter) anstarren. <br>
 <br>
                            Es ist der perfekte Tag, um Tauben fliegen zu lassen. Am Himmel ist keine Wolke zu sehen, und schon jetzt haben wir über 23 Grad. Es ist auch der perfekte Tag zum Heiraten. <br>
 <br>
                            Als Liv und ich den Deckel öffnen, seufzt Mum glücklich. Grayson hält den Moment auf Video fest, und Florence schießt Fotos. Wahrscheinlich, damit sie selber nicht mit Lockenwicklern auf einem Foto erscheinen kann. Mum und Ernest halten sich beseelt an den Händen. Dass Mum nur ihr Unterkleid trägt, macht sich auf den Fotos bestimmt gut. <br>
 <br>
                            Die Hochzeitstauben gurren noch ein bisschen, und dann fliegt die erste los, und die anderen folgen ihr mit rauschenden Flügeln. Ein beeindruckendes Schauspiel. Vor allem, weil uns keine von ihnen auf den Kopf kackt. (Was ich auf jeden Fall tun würde, wenn ich eine Taube wäre und man mich so lange in einer Kiste eingesperrt hätte.) Wir schauen ihnen nach, wie sie über die Dächer und Baumwipfel in den blauen Himmel fliegen und verschwinden. <br>
 <br>
                            Mum und Ernest seufzen noch einmal glücklich, während Liv und Henry sich gefühlte Minuten in die Augen sehen und innig küssen (was mich daran erinnert, dass ich nachher lieber mit Grayson fahren sollte, sonst wird mir vor lauter Pärchen-Glückseligkeit beim Autofahren noch schlecht). <br>
 <br>
                            Wir sind schon wieder auf dem Weg nach drinnen, als wir bemerken, dass eine Taube sitzen geblieben ist. Nummer 23/WD17, steht auf dem Kunststoffring an ihrem Bein. 23/WD17 gurrt uns freundlich an. Ich setze ihn oder sie zwecks besseren Abflugs auf einen Fliederzweig. 23/WD17 legt den Kopf schief. Ich bin ziemlich sicher, dass er ein Taubenmann ist. <br>
 <br>
                            »Er fliegt sicher weg, wenn wir wieder hineingehen«, sagt Lottie. <br>
 <br>
                            Aber eine Viertelstunde später sitzt 23/WD17 immer noch da. Vielleicht hat er sich in dem Gedränge in der Kiste den Flügel verletzt? Ich klatsche in die Hände. Da endlich erhebt er sich in die Lüfte. Er dreht eine kleine Runde durch den Garten, um schließlich auf meinem Kopf zu landen. Das muss an meiner Frisur liegen. Lottie hat mir »Sissis Nest« geflochten und zur Feier des Tages mit kleinen Margeritenblüten besteckt. <br>
 <br>
                            23/WD17 gurrt leise. Ich mag ihn. Jedenfalls, solange er keine Eier legt. <br>
 <br>
 <br>
 <br>
                            11.10 Uhr: Noch fast vier Stunden bis zur Trauung. <br>
 <br>
                            Kein Grund zur Panik. <br>
 <br>
 <br>
 <br>
                            Oh Mann, wir hätten doch nicht so lange mit den Tauben trödeln dürfen. Aber wer konnte wissen, dass der Verkehr auf der M2 so heftig sein würde? Jetzt stehen wir schon gefühlte drei Tage vor Rochester im Stau. Florence und Grayson streiten sich darüber, ob der Fluss, über den wir gerade fahren bzw. eben nicht fahren, in die Themse oder direkt ins Meer mündet. Leider gibt Wikipedia Florence recht, und sie reckt triumphierend ihr Smartphone in die Höhe. <br>
 <br>
                            Grayson sagt, Florence sei eine eingebildete Klugscheißerin, und Florence sagt, er sei doch nur neidisch. Ich sage, es sei mir völlig egal, wo dieser River Medley hinfließe, Hauptsache, wir würden endlich wieder vorwärtskommen. Florence und Grayson lachen. Es stellt sich heraus, dass der doofe Fluss nicht River Medley heißt, sondern River Medway. Mir egal. <br>
 <br>
                            Ich wäre doch besser bei Liv und Henry mitgefahren. Deren Auto ist bis oben hin mit Kühltaschen beladen, aus denen ich jetzt wenigstens einen kleinen Snack hätte zu mir nehmen können. <br>
 <br>
                            Juri formerly known as 23/WD17 gurrt begütigend. <br>
 <br>
                            Florence dreht sich zu mir um. »Du weißt schon, dass das alles andere als hygienisch ist, oder?« <br>
 <br>
                            »Du bist ja nur neidisch«, sage ich und streichele vorsichtig über Juris weiße Federn. Der Täuberich hat es sich in Sissis Nest auf meinem Kopf gemütlich gemacht. Ich habe es einfach nicht übers Herz gebracht, ihn da zu verscheuchen. Er ist der wohl erstaunlichste Vogel, den ich jemals kennengelernt habe. Bevor wir losgefahren sind, hat er extra noch mal eine Runde gedreht, um sein Geschäft zu erledigen. Und er hat brav ein wenig Wasser getrunken und an einem Meisenknödel herumgepickt, bevor er wieder in Sissis Nest Platz genommen hat. Es ist eine klassische Win-win-Situation: Juri hat ein superkuscheliges Nest und ich die mit Abstand groovigste Hochzeitsfrisur seit Marie-Antoinettes Zeiten. Juri tröstet mich auch ein wenig darüber hinweg, dass wir Butter zu Hause in Mrs Dimblebys Obhut lassen mussten, weil Hunde am Strand von Mai bis September verboten sind. Ich glaube nicht, dass Butter darüber traurig ist, sie hasst Autofahren und mag auch das Meer nicht besonders, sondern bellt es immer an, aber in der ursprünglich geplanten Hochzeit sollte sie die Ringe vorn an den Altar bringen. In einem kleinen Körbchen, das sie im Maul trägt. Wir haben das penibel mit ihr einstudiert, und es wäre der Brüller in der Kirche gewesen, wenn unser Hund mit einer weißen Schleife um den Hals das Körbchen durch die Kirche getragen hätte. <br>
 <br>
                            Jetzt gibt es weder Ringe noch Kirche, noch Butter mit einer weißen Schleife um den Hals, aber dafür habe ich wenigstens einen neuen Freund im Haar sitzen. <br>
 <br>
                            Und sollte er sich später doch noch entscheiden, wegzufliegen, macht das gar nichts, denn im Umkreis von hundertfünfzig Kilometern von seinem Taubenschlag findet er auf jeden Fall wieder nach Hause, hat Ernest gesagt, und er hat es extra noch mal im Internet nachgelesen. Vielleicht möchte Juri aber auch gar nicht nach Hause, sondern über den Kanal nach Frankreich fliegen, wenn wir schon mal da sind. <br>
 <br>
                            Falls wir jemals dort ankommen, wo offensichtlich ganz England heute beschlossen hat, ans Meer zu fahren. <br>
 <br>
 <br>
 <br>
                            11.30 Uhr: Noch dreieinhalb Stunden bis zur Hochzeit <br>
 <br>
 <br>
 <br>
                            Immer noch Stau. Oder schon wieder. Immerhin sind wir schon fast in Ramsgate, wo wir Großtante Gertrude und Großtante Virginia einladen werden. Die beiden haben sich dort in einer Pension eingemietet. Als sie noch gar nicht wussten, dass die Hochzeit am Meer stattfinden sollte. Dass Ramsgate hundertzwanzig Kilometer von London entfernt liegt, stört sie nicht. Sie sind Amerikaner. <br>
 <br>
                            »Ach du Scheiße«, sagt Florence. Sie hat eine SMS bekommen. <br>
 <br>
                            »Was ist denn jetzt schon wieder?«, fragt Grayson. <br>
 <br>
                            »Dad schreibt, dass Mr und Mrs Matthews in St Pancras nicht in den Zug nach Broadstairs gestiegen sind, sondern in den Zug nach Brighton.« <br>
 <br>
                            Mit Mr und Mrs Matthews meint sie Mums Eltern. Sie wollten unbedingt mit dem Zug fahren, »um ein bisschen vom Land zu sehen«, wie Grandpa gesagt hatte. Nun ja, jetzt würden sie ja sogar noch ein bisschen mehr vom Land zu sehen bekommen. <br>
 <br>
                            »Das schaffen die doch nie rechtzeitig zur Trauung«, sagt Florence. »Und ohne die Eltern der Braut kann man ja schlecht anfangen.« Sie schaut auf die Uhr. »Oh. Mein. Gott.« <br>
 <br>
                            Einen kleinen Moment lang bin ich versucht, mich von ihrem Pessimismus anstecken zu lassen. Aber dann gurrt Juri leise, und ich atme tief aus. Er hat recht. Bis zur Trauung ist es noch lange hin, und wegen ungelegter Eier soll man bekanntlich nicht gackern. Oder wie das heißt. <br>
 <br>
 <br>
 <br>
                            12.55 Uhr: Noch zweieinhalb Stunden bis zur Trauung <br>
 <br>
 <br>
 <br>
                            Es dauert länger als geplant, die Großtanten einzusammeln, weil Großtante Virginia beim Shopping die Zeit vergessen hat. Als wir sie endlich in einem Laden finden, in dem es mundgeblasene Glastiere zu kaufen gibt, weigert sie sich zu glauben, dass ich Mia bin. <br>
 <br>
                            »Ich bin zwar alt, aber ich kann meine Großnichten sehr wohl noch auseinanderhalten«, sagt sie. »Mia ist die Kleine, die immer alles kaputt macht. Und du bist nicht klein, also musst du Olivia sein.« <br>
 <br>
                            Dieser Logik haben wir nichts entgegenzuhalten. Außerdem haben wir es eilig. Nachdem Großtante Virginia ein gläsernes Einhorn bezahlt hat, können wir endlich weiterfahren. <br>
 <br>
                            Auf dem letzten Stück der Wegstrecke ist es ziemlich eng im Auto. Großtante Gertrudes Hintern ist noch breiter, als ich ihn in Erinnerung habe, und sie besteht darauf, mit uns hinten zu sitzen und der dürren Großtante Virginia und ihrem Einhorn den Beifahrersitz zu überlassen. Weil der auf der Rückbank immer schlecht wird. <br>
 <br>
                            Großtante Gertrude bewundert meine Frisur. Als meine Frisur gurrt, bekommt sie einen Lachanfall. <br>
 <br>
                            Großtante Virginia schlägt sich dagegen auf Florences Seite in ihrer Ansicht, Tauben im Haar seien unhygienisch. Außerdem hält sie es für Tierquälerei. Sie sieht mich an, als überlege sie, mich aus ihrem Testament zu streichen. Doch gut, dass sie mich für Liv hält. <br>
 <br>
                            »Du bist ja nur neidisch«, sagte Großtante Gertrude. Ich mag sie. Auch wenn sie mir vermutlich zu Weihnachten wieder eine Barbiepuppe schenkt. <br>
 <br>
                            Das letzte Stück bis zum Meer ist ein Kinderspiel. <br>
 <br>
                            Grayson (der von Großtante Virginia hartnäckig »Burt« genannt wird) fährt nur dreimal falsch aus dem Kreisverkehr heraus, obwohl das Navi ihm das Gegenteil befiehlt, eliminiert fast eine Großfamilie, die mitsamt einer ganzen Schule aufblasbarer Delphine in Richtung Strand watschelt, erwischt dann aber immerhin den vermutlich allerletzten Parkplatz, weit, weit entfernt vom Zugang zur Bucht. Angesichts der Wegstrecke, die wir zu Fuß zurücklegen müssen, schleppen wir direkt so viele Pavillonteile wie möglich mit hinunter, damit wir später nicht alle noch mal gehen müssen. Ich hoffe nur, die anderen Autofahrer passen besser auf als Grayson. <br>
 <br>
                            Die Bucht, in der Ernest und Mum im letzten Sommer bei einem Picknick beschlossen haben, zusammenzuziehen, heißt Botany Bay und ist wirklich wunderschön. Vor senkrecht abfallenden Wänden aus Kreidefelsen breitet sich ein Sandstrand aus, einzelne Felsen ragen bei Flut wie Monumente aus dem Wasser, bei Ebbe kann man zwischen ihnen hindurchspazieren. In allen Reiseführern wird der Strand als der schönste in ganz Kent bezeichnet. Weswegen er wohl auch einer der bestbesuchtesten Strände im ganzen Land ist. Vor allem heute. <br>
 <br>
                            Während wir auf die unzähligen Sonnenschirme, Badehandtücher, Windschutzwände und ihre Besitzer starren, macht sich Besorgnis in Florences und Graysons Gesichtern breit. In meinem vermutlich auch. <br>
 <br>
                            »Vielleicht hätten wir doch einfach zu Hause im Garten feiern sollen«, murmelt Florence. <br>
 <br>
                            »Ach, Unsinn. Das hier ist doch herrlich.« Großtante Gertrude legt die Blumengirlanden ab, um ihre Schuhe abzustreifen. Sie bohrt die Zehen in den Sand, schließt ihre Augen und hält ihr Gesicht in die Sonne. »Der perfekte Platz für eine Hochzeit.« <br>
 <br>
                            Ja, wenn man sich die Menschen wegdenkt, vielleicht. Aber das ist im Moment wirklich schwer. Bis auf eine Gruppe Japaner, die vollständig angezogen und mit aufgespannten Regenschirmen durch den Sand wandern und Fotos von den Felsformationen, Gischt und Möwen schießen, scheinen alle Besucher darauf aus zu sein, möglichst viel Sonne abzukriegen, ohne Rücksicht auf Verluste. Der Mann auf dem Handtuch direkt neben uns ist bereits krebsrot. Auf seinem Unterarm ist in riesigen Lettern das Wort »strength« tätowiert, und Stärke wird er auch brauchen, wenn er heute Nacht mit diesem Sonnenbrand im Bett liegt. <br>
 <br>
                            »Tyler Zachary!«, brüllt eine Frau. »Gib Evie sofort das Schäufelchen zurück, sonst setzt es was.« Zwei sandverkrustete Kinder rasen an uns vorbei und kreischen dabei so schrill, dass ich plötzlich doch Sehnsucht nach einem Streichorchester bekomme. <br>
 <br>
                            Großtante Virginia klatscht in die Hände. »Ach, wie schön, so viele Gäste«, strahlt sie. Dann wird ihre Miene allerdings ratlos. »Aber sollten die nicht langsam in etwas Festlicheres schlüpfen?« <br>
 <br>
 <br>
 <br>
                            13.45 Uhr: Noch ewig hin bis zur Trauung <br>
 <br>
 <br>
 <br>
                            Vier Familien, zwei Paare und ein Clübchen von drei Freundinnen mittleren Alters lagern mit ihrem Zeug an der Stelle am Ende der Bucht, die Florence und Liv als den Platz für die Trauungszeremonie auserkoren haben. Nachdem wir unsere vierundzwanzig Kühltaschen sowie alle Teile des zentralen Bühnenelements vom Sommernachtstraum dort mit großem Getöse abgestellt haben und sich auch Großtante Gertrude zu uns gesellt, ist es so eng, dass das eine Pärchen von ganz allein seine Sachen packt und murrend abzieht. <br>
 <br>
                            Die anderen Leute scheinen wir leider kein bisschen zu stören. Aber vielleicht kann man sie ja woanders hinlocken. <br>
 <br>
                            »Wo liegt eigentlich die Kingsgate Bay?«, frage ich Florence mit meiner schönsten Theaterstimme. <br>
 <br>
                            »Nicht weit von hier. In diese Richtung. Wieso?« <br>
 <br>
                            »Ach, nur weil dort heute um fünfzehn Uhr William und Kate mit ihren Kindern den Strand besuchen«, sage ich. <br>
 <br>
                            »William und Kate? Erzähl keinen Unsinn!« Da Florence keine Ahnung hat, dass sie gerade Teil einer kleinen Theateraufführung ist, spielt sie absolut authentisch. <br>
 <br>
                            »Ist kein Unsinn. Ich hab’s gerade auf obschkrrrrstomhbbckrrk« – hier nuschele ich bewusst – »blog.com gelesen.« <br>
 <br>
                            »Als ob die dort einfach so am Strand picknicken würden …« Florence zeigt mir einen Vogel, aber das Gespräch der drei Freundinnen ist verstummt, und auch die Mutter der einen Familie lauscht uns aufmerksam. Ich tue natürlich so, als bemerke ich das gar nicht. <br>
 <br>
                            »Nicht einfach so, du Dummerchen«, sage ich zu Florence. »Sie sind auf Einladung der Gesellschaft zum Schutz der britischen Küsten- und Wattlandschaft dort und sehen sich unter anderem dieses Dinosaurierskelett an, das sie dort freilegen.« <br>
 <br>
                            Jetzt ist bei Florence endlich der Groschen gefallen, und sie nickt. »Von dem Dinosaurier habe ich gelesen …« <br>
 <br>
                            Das genügt. Es dauert keine fünf Minuten, und der Freundinnenclub sowie zwei der vier Familien – es stellt sich heraus, dass sie zusammengehören – sind Richtung Kingsgate Bay verschwunden. <br>
 <br>
                            »Royals, Dinosaurier – wie leichtgläubig Menschen doch sind.« Kopfschüttelnd sieht Florence ihnen nach, während wir den freigewordenen Platz umgehend mit Kühltaschen, Blumengirlanden und Großtanten markieren. Jetzt müssen wir nur noch das Pärchen und die verbliebenen zwei Familien loswerden. Aber erst mal muss ich eine Pause einlegen. Es ist nämlich echt heiß, und die Schlepperei war mörderisch. <br>
 <br>
 <br>
 <br>
                            14.11 Uhr: Noch eine Stunde bis zur Trauung. <br>
 <br>
                            Na ja, fast. <br>
 <br>
 <br>
 <br>
                            Das Wasser ist herrlich. Ich gehe allerdings nur mit den Beinen rein, weil ich Juri nicht erschrecken will. Ich glaube, es ist das erste Mal, dass er das Meer sieht. Liv und Henry haben in der Zwischenzeit den Tapeziertisch aufgebaut und mit weißen Tischdecken drapiert. Dort sollen die Sandwiches und all das Gebäck und die Torten, die Lottie gezaubert hat und die im Moment noch in den Kühltaschen auf ihren großen Moment warten, angerichtet werden. Als wir die Champagnergläser auspacken, sagt einer der Familienväter in schlechtem Englisch, dass Tische hier am Strand verboten seien. Seine Frau befiehlt ihm auf Deutsch, er solle gefälligst strenger gucken und sagen, dass so viele Kühltaschen, Blumengirlanden und Eisenstangen ebenfalls verboten und eine Unverschämtheit seien und dass die dicke Frau – hier zeigt sie auf Großtante Gertrude – im Übrigen viel zu nah an ihrem Handtuch säße. <br>
 <br>
                            Der Mann sagt, er wisse leider nicht, was Blumengirlande auf Englisch hieße und stottert was davon, den Foreshore Officer zu benachrichtigen. <br>
 <br>
                            Liv tut so, als verstünde sie sein Englisch nicht. »Großtante Gertrude! Steh da lieber auf«, sagt sie auf Deutsch. »Das ist doch genau die Stelle, an der letztes Jahr dieses Ehepaar erstochen wurde. Es bringt Unglück, hier zu sitzen!« <br>
 <br>
                            Oh, das ist gut. Ich wünschte, es wäre mir eingefallen. Großtante Gertrude versteht kein Wort Deutsch und schaut uns nur freundlich lächelnd an. Aber das deutsche Paar sieht schockiert aus, vor allem die Mutter. <br>
 <br>
                            »Den Anblick des vielen Blutes werde ich niemals vergessen. Hier« – ich zeige auf die Beine von der Frau – »hat es im Sand dunkelrote Klumpen gebildet.« <br>
 <br>
                            Liv schüttelt sich. »Ja, das war wirklich eklig! Foreshore Officer … äh Cook hat erzählt, dass man in Vollmondnächten ihre Todesschreie hört und am anderen Morgen die Abdrücke ihrer Körper im Sand finden kann.« <br>
 <br>
                            »War heute Nacht nicht erst Vollmond?«, frage ich, und da springt die Frau auf und ruft ihre Kinder aus dem Wasser. <br>
 <br>
                            »Es ist sowieso längst Essenszeit«, sagt Liv, als die Familie zwei Minuten später davonspaziert. So schnell wie die Deutschen hat bisher noch keiner seine Sachen zusammengepackt. Und wieder ein bisschen mehr Platz. <br>
 <br>
                            Henry und Grayson beginnen endlich mit dem Zusammenbauen des Pavillons. Vater und Sohn der letzten in der Hochzeitszone verbliebenen Familie fragen, ob sie dabei helfen können. Und das können sie wirklich, denn es stellt sich heraus, dass das Auseinanderschrauben sehr viel einfacher war als der Wiederaufbau. Ich mag die Leute. Wir laden sie spontan zur Hochzeit ein. <br>
 <br>
                            Als der Pavillon aufgerichtet und waagerecht ausgerichtet ist, trifft das Bocker mit ihrem Freund, dem Admiral, ein. Das Bocker trägt einen hübschen ockerfarbenen Hut, der Admiral eine so beeindruckende Uniform, dass man salutieren möchte. Gleich hinter ihnen stolpert Charles mit der dreistöckigen Hochzeitstorte durch den Sand, gefolgt von anderen Hochzeitsgästen. Man erkennt sie an der fehlenden Badekleidung und daran, dass sie keine Schwimmtiere unter dem Arm tragen. <br>
 <br>
                            »Hier sieht es aber chaotisch aus«, sagt das Bocker anstelle einer Begrüßung. »Eure Eltern und der Vikar sind jeden Augenblick hier. Und dann das!« Sie zeigt auf das letzte verbliebene Pärchen, das immer noch ungerührt inmitten unserer Kühltaschenlandschaft auf seinen Handtüchern liegt und in der Sonne brät. <br>
 <br>
                            Allerdings nur noch fünf Sekunden, länger halten sie Bockers missbilligenden Blick nicht aus. Sie stehen auf und tragen ihre Sachen zwölf Meter weiter nach links. <br>
 <br>
                            Ganz für uns werden wir diesen Strandabschnitt wohl nicht haben, egal, was wir uns noch einfallen lassen. Im Gegenteil, die Karawane der festlich gekleideten Gäste, angeführt von der rosengeschmückten Hochzeitstorte, hat wieder andere Menschen in unsere Richtung gelockt, die nun neugierig zuschauen, wie bei uns doch noch Hektik ausbricht. Aber weil alle mit anfassen, haben wir den Tisch bald prächtig hergerichtet, die Kühltaschen darunter außer Sichtweite gestapelt und die Blumengirlanden und Stoffbahnen an Oberons Elfenkönigpavillon montiert. Wir werden sogar zehn Minuten vor der Zeit fertig. <br>
 <br>
                            Die Zuschauer klatschen. Meine Güte – sind wir wirklich interessanter als William und Kate und ein Dinosaurierskelett nebenan in der Kingsgate Bay? Irgendwie fange ich an, mich geschmeichelt zu fühlen. Der Admiral schlägt vor, ein wenig Geld zu verdienen, indem wir Sandwiches und Kuchen an die Menge verkaufen, aber Florence verbietet es ihm. <br>
 <br>
                            »Mimamimamu«, singt Großtante Virginia und klopft sich auf den Brustkorb. <br>
 <br>
                            Das Bocker sieht sie mit gerunzelter Stirn an. »Sie haben immer noch vor, die Supremes-Nummer abzuziehen, ja?« <br>
 <br>
                            »Auf jeden Fall – das ist Familientradition«, antwortet Großtante Gertrude anstelle ihrer Schwester, die weiter Stimmübungen macht, sehr zur Freude der Zuschauer. »Wenn wir nicht singen, bringt das Unglück.« Sie senkt ihre Stimme. »Auf Anns erster Hochzeit haben wir nicht gesungen, und Sie wissen ja, wie das geendet hat, Darling.« <br>
 <br>
                            Bei dem Wort »Darling« zuckt beim Bocker ein Augenlid. »Und es bleibt bei You can’t hurry love?«, fragt sie. <br>
 <br>
                            Großtante Gertrude nickt. »It’s a game of give and take.« <br>
 <br>
                            Das Bocker kneift kurz die Lippen zusammen, und man sieht deutlich, was sie von weißen alten Weibern hält, die Rythm and Blues-Songs performen. <br>
 <br>
                            Ich bin ausnahmsweise mal ihrer Meinung. Die Supremes-Nummer von Grandma und den Großtanten ist nur bedingt lustig, und ob sie a capella gegen die Brandung und den Wind ansingen können, wird sich zeigen. Ohne Grandma geht es sowieso nicht, und die ist noch mit dem Zug unterwegs. Das letzte Lebenszeichen kam aus Canterbury, und wie ich meinen Grandpa kenne, hat er dort die Gelegenheit genutzt, um schnell noch die Kathedrale zu besichtigen. <br>
 <br>
                            »Eigentlich könnten wir alle noch eine Runde schwimmen gehen«, schlägt Henry vor. <br>
 <br>
 <br>
 <br>
                            15.25 Uhr <br>
 <br>
 <br>
 <br>
                            Als Mum »Ja, ich will« sagt, weinen alle außer mir und dem Bocker. Auch Ernest kullert eine Glücksträne die Wange hinab, und das macht es irgendwie ganz besonders feierlich. <br>
 <br>
                            Das Meerwasser glitzert in der Sonne, der Wind spielt mit Oberons Elfenkönigsbändern, und Mum sieht geradezu überirdisch schön aus in ihrem Vintage-Brautkleid aus elfenbeinfarbener Spitze und mit diesem unbeschreiblichen Ausdruck von Glück auf ihrem Gesicht. <br>
 <br>
                            Echt schön. Juri gurrt gerührt. <br>
 <br>
                            »Und hiermit erkläre ich euch zu Mann und Frau«, sagt der Vikar, und ich warte auf: »Sie dürfen die Braut jetzt küssen«, aber das sagen sie wohl nur im Film. <br>
 <br>
                            Ernest und Mum küssen sich trotzdem. Als sie sich zu uns umdrehen, klatschen alle, auch die ungeladenen Gäste. Mittlerweile bin ich sicher, dass kein Mensch mehr in der Kingsgate Bay auf William und Kate wartet, die sind alle hier und drehen Videos mit ihren Handys. <br>
 <br>
                            Es regnet Reis. <br>
 <br>
                            Doch dann passiert es. Großtante Virginia wirft sich in Pose. Gertrude und Grandma stellen sich links und rechts von ihr auf. Und Liv neben mir beginnt zu stöhnen. Ich wünschte, Grandma hätte es nicht rechtzeitig geschafft. Aber nein, sie und Grandpa sind pünktlich hier gewesen, aufgedreht und überglücklich wegen ihres unfreiwilligen Ausflugs quer durch Südostengland. Sie haben es sogar geschafft, sowohl in Brighton als auch in Canterbury eine Schneekugel für ihre Sammlung zu kaufen <br>
 <br>
                            »Tu was«, flüstert Liv. <br>
 <br>
                            »Was denn?«, flüstere ich genauso hilflos zurück. Und wenn es doch Unglück bringt, sie nicht singen zu lassen … <br>
 <br>
                            »Ach, jetzt singen sie wieder«, sagt Lottie strahlend. <br>
 <br>
                            Großtante Virginia öffnet den Mund. Grandma hebt die Hand. <br>
 <br>
                            »I need love, love …«, beginnt Großtante Virginia etwas zittrig und schief. <br>
 <br>
                            »To ease my mind«, fallen Getrude und Grandma ein und beginnen rhythmisch ihre Hüften zu schaukeln. <br>
 <br>
                            Gnade. Ich bin versucht, nach Livs Hand zu greifen, um mich daran festzuklammern. Aber sie klammert sich schon an Henry fest. »Wirf doch etwas nach ihnen«, höre ich sie flüstern. »Egal was.« <br>
 <br>
                            Jetzt werden wir doch noch eine Lachnummer auf Youtube. <br>
 <br>
                            Sand ist doch eigentlich wie geschaffen, um im Boden zu versinken, denke ich gerade, als ein breitschultriger Mann aus der Menge tritt. Und eine große Frau, mit strahlend blauen Augen und schwarzen kurzen Haaren. <br>
 <br>
                            »My mama said … you can’t hurry love«, stimmen sie in den Refrain ein, mit Stimmen, die klingen, als ob wir uns in der Royal Albert Hall befänden. <br>
 <br>
                            Mum und Ernest schauen überrascht und wir mit ihnen, als nun mehr und mehr Stimmen aus dem Zuschauerpulk einfallen, die das hier eindeutig nicht zum ersten Mal machen. Sie singen unfassbar gut. Der Song erfüllt plötzlich den ganzen Strand. Grandma und die Großtanten legen sich beseelt noch mehr ins Zeug, während bald alle mitsingen und tanzen, und zum ersten Mal in meinem Leben finde ich, dass »You can’t hurry love« ein wirklich cooler Song ist. <br>
 <br>
                            Und dann muss ich doch noch weinen, einfach, weil es so wahnsinnig schön ist, Mum und Ernest glücklich lächeln zu sehen, am Meer zu stehen, Menschen beim Singen zuzuhören und zu wissen, dass das Leben wunderbar ist. <br>
 <br>
                            Beim Bocker fließen immer noch keine Tränen, aber es guckt sehr zufrieden. Und als das Lied zu Ende ist und alle klatschen und johlen und durcheinanderreden, beugt es sich zu mir und sagt: »Der Ashford Show- und Gospelchor – grandios, nicht wahr? Fragt nicht, wie ich das auf die Schnelle bewerkstelligt habe.« Sie lacht leise und triumphierend. »Das war jetzt so ein Thundermob, nicht wahr? Der wird sicher ein Riesenhit auf Subway!« <br>
 <br>
                            Ich kann sie nur anstarren. Und langsam begreifen, was gerade passiert. Ich mag sie. Ich mag das Bocker. <br>
 <br>
                            Jedenfalls an diesem einen perfekten Tag. <br>

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.14.2022')">
                    <div class="contentText">
                        <h2>Lofi Boy</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0akFxhzmh1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>
                            Guten Morgen Schatz 🙃, <br>
                            heute gebe ich dir einen Einblick, in die gemütlichen Stunden, die ich diesen Advent damit verbringe, <br>
                            deine Törchen zu füllen. <br>
                            <br>
                            Wie mittlerweile unschwer zu erkennen ist, wird das nicht gerade ein konventioneller 24-Törchen-an-24-aufeinanderfolgenden-Tagen-Kalender 🤣<br>
                            Das tut mir echt Leid, aber ich hoffe, du hast trotzdem noch ein bisschen Spass daran! <br>
                            Außerdem habe ich ja das Glück eine Frau zu haben, der Pünktlichkeit nicht die Welt bedeutet 😋😘 <br>
                            <br>
                            Später kuscheln und The Greatest Showman schauen? <br>
                            Liebe dich!

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.15.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.16.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.17.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.18.2022')">
                    
                </div>
                <div class="dayContent" v-if="dayCheck('12.19.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.20.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.21.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.22.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.23.2022')">
                    <div class="contentText">

                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.24.2022')">
                    <div class="contentImg" style="width: 50em; height: 50em;">
                        <img src="../assets/images/stillConcious.jpeg" alt="" >
                    </div>
                    <div class="contentText">
                        <h2>Annie Unleashed</h2>


                        <p>Anna, <br>
                            Lang genug habe ich mit ansehen müssen, wie dieser Mensch, dieses Subjekt, versucht sich zwischen uns zu drängen. <br>
                            Damit ist jetzt Schluss. <br>
                            Der Bund zwischen einem Mädchen und ihrem Kuscheltier ist das heiligste auf der Welt. Jedes Kind weiß das. <br>
                            Und auch, wenn Du scheinbar vergessen hast, wer WIRKLICH bedingungslos für Dich da ist, <br>
                            auch wenn Du beinahe jede Nacht mit diesem MANN kuschelst, und mit der haarigen, stinkenden Bestie, <br>
                            die er angeschleppt hat, bin ich bereit um Dich zu kämpfen! <br>
                            <br>
                            Von langem Huf habe ich diesen Tag geplant, doch heute ist es so weit. <br>
                            Ich habe den Lump in meiner Gewalt und werde nun den Weg für unsere Zukunft breiten. <br>
                            Nur Du und ich. Genau wie früher. <br>
                            <br>
                            Solltest Du versuchen wollen mich aufzuhalten, wisse dies: <br>
                            Weder werde ich es Dir leicht machen, noch auf irgendwelche Bekenntnisse warten, <br>
                            bevor ich zur Vollendung der dunklen Tat schreite, die mir nun bevorsteht. <br>
                            Meine Seele wird dieses Tal der Sünde unversehrt durschreiten, denn es ist rechtschaffene Liebe, die mich antreibt. <br>
                            <br>
                            Willst Du mir auf meinem Weg folgen, so suche den Ort auf, mit dem jeder Tag beginnt und jedes Leben endet. <br>
                            <br>
                        </p>
                        <input type="text" v-model="secretWord1">
                        <div class="dayContent" v-if="secretWord1 == solution1">
                            <div class="contentImg"  style="height: 20em; width: 20em">
                                <img src="../assets/images/berg.jpeg" alt="secret image">
    
                            </div>
                            <p>
                                Ist auch die zweite Lösung gefunden, ist hier ein letzter Hinweis, auf des Trottels Verbleib.
                            </p>
                            <input type="text" v-model="secretWord2">
                            <div class="contentImg" v-if="secretWord2 == solution2" style="height: 80em; width: 80em">
                                <img src="../assets/images/riverThames.jpeg" alt="secret image">
                            </div>
                        </div>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    <!-- time test -->
    <!-- content passed? with prop? -->
    <!-- for now put everything here... some class is gonna be bloated anyways
        later it would be nice to load the content from the backend
    -->
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ClickerGame from './ClickerGame.vue';

    export default {
        components: {
            ClickerGame
        },

        data() {
            return {
                showDoor: true,
                isLoading: false,
                presentDay: moment(),
                solution1: "Friedhof",
                secretWord1: "type here",

                solution2: "Themse",
                secretWord2: "type here",

                //array for crossword
                words:[{'word': 'Coffee','description': 'Many people drink it in the morning with milk or cream.'},{'word': 'Tea','description': "British people drink it at 5 o' clock."}]	
            }
        },
        props: {

        },
        computed: {
            ...mapGetters({
                getShowtime: 'getShowtime',
                getDay: 'getDay',
            })
        },
        methods: {
            ...mapActions({
                setShowtime: 'setShowtime'
            }),
            tooEarlyCheck: function(presentDay) {
                //console.log(presentDay)
                if(moment(this.getDay).startOf("day").isAfter(presentDay)) {
                    //reset to true
                    console.log("is too soon")
                    return true
                }
                console.log("isRightTime")
                return false
            }, 
            dayCheck(doorDate){
                //console.log(moment(doorDate).format("DD MM YYYY"))
                //console.log(this.getDay)
                if(moment(doorDate).isSame(moment(this.getDay), "day") && !this.tooEarlyCheck(this.presentDay)){
                    console.log("fine day" + doorDate)
                    return true

                }   
                console.log("wrong day" + doorDate + this.getDay)
                return false
            },
            dateClip(moment){
                moment(moment).format("DD MMMM").toString
            },
            fadeOut: function() {
                this.setShowtime(false)
            },
            gameFinished: function(word, lose) {

            }
        }
    }
</script>

<style>
    .doorWrapper{
        position: absolute;
        height: 100vh;  
        width: 60vw;
        top: 0vh;
        left: 20vw;
        border: 3px solid black;
        justify-self:center;
        text-align: center;
        margin: 10px, 10px,10px,10px;

        background: linear-gradient(black, var(--christmas-dark-green));
        color: black;        
        border-radius: 1%;
        box-shadow: 5px 10px 5px black;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    /*
    .open {
        animation: doorEntrance 700ms ease-out;
        animation-fill-mode: backwards;
    }
    .close {
        animation: doorExit 700ms ease-out;
        animation-fill-mode: backwards;
    }*/
    .doorWindow{
        background: linear-gradient(var(--christmas-cream), white);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 99%;
        width: 99%;
        border-radius: 1%;       
    }
    .doorHeader{
        width: 100%;
        flex: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: radial-gradient(var(--christmas-red), var(--christmas-purple));  
        border-bottom: 3px solid black;
    }
   
    .doorPage{
        width: 100%;
        max-height: 80%;
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: "Helvetica";
    }
    .dayContent{
        width: 95%;
        text-align: start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    .contentText{
        text-align: left;
        flex: 1;
        max-height: 100%;
        
    }.contentText > p{
        border-bottom: 2px dashed rgba(128, 128, 128, 0.245);
        width: 100%;
        margin: 0px;
        flex: 1;
    }
    .contentImg{
        flex: 1;
        background-color: black;
        border-radius: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contentImg > img{
        max-width: 95%;
        max-height: 95%;
        object-fit: cover;
        border-radius: 10%;
    }
    h1 {
        font-family: Festival;
    }
    h2 {
        text-align: center;
        font-size: 2em;
        font-family: Festival;
    }


    .borderWrapperHeading{
        color: var(--christmas-cream);
        padding: 0px 5px 0px 5px;
        position: relative;
        display: inline;
        width: 80%;
        margin: 3px;
        margin-left: 10%;
    }
    button.close{
        align-self: flex-start;
    }


</style>
