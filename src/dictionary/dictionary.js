var dictonary = [
/* Изначально массив элементов у нас не отсортирован.
 * Сортируем массив для корректной работы алгоритма перевода.
 * Любые правки по словарю языка сначала пишем сюда!
 */
var dictionary = [

			["break", "харэ"]
			, ["case", "лещ"]
			, ["catch", "гоп"]
			, ["continue", "двигай"]
			, ["debugger", "логопед"]
			, ["default", "понятие"]
			, ["delete", "ёбнуть"]
			, ["delete", "ебнуть"]
			, ["do", "крч"]
			, ["else", "иливжопураз"]
			, ["finally", "тюряжка"]
			, ["for", "го"]
			, ["function", "йопта"]
			, ["if", "вилкойвглаз"]
			, ["in", "в"]
			, ["instanceof", "внатуре"]
			, ["new", "гыйбать"]
			, ["return", "отвечаю"]
			, ["switch", "пошерстим"]
			, ["this", "тырыпыры"]
			, ["throw", "пнх"]
			, ["try", "хапнуть"]
			, ["typeof", "чезажижан"]
			, ["var", "гыы"]
			, ["void", "куку"]
			, ["while", "потрещим"]
			, ["with", "хзйопт"]
			, ["Abstract", "говнойбать"]
			, ["Boolean", "пацан"]
			, ["Byte", "семка"]
			, ["Char", "эээ"]
			, ["Class", "клёво"]
			, ["Class", "клево"]
			, ["Const", "ясенХуй"]
			, ["Double", "двойные"]
			, ["Enum", "еээ"]
			, ["export", "излабас"]
			, ["extends", "батя"]
			, ["final", "бачок"]
			, ["Float", "плавник"]
			, ["goto", "ходка"]
			, ["implements", "силикон"]
			, ["import", "спиздить"]
			, ["Int", "хуйня"]
			, ["interface", "хуёво"]
			, ["interface", "хуево"]
			, ["Long", "колонна"]
			, ["native", "чорт"]
			, ["package", "клеёнка"]
			, ["package", "клеенка"]
			, ["private", "мой"]
			, ["protected", "подкрыша"]
			, ["public", "ебанное"]
			, ["Short", "пипин"]
			, ["static", "попонятия"]
			, ["super", "яга"]
			, ["synchronized", "вписон"]
			, ["throws", "плюнуть"]
			, ["transient", "ахз"]
			, ["volatile", "вписос"]
			, ["null", "нуллио"]
			, ["NaN", "нихуя"]
			, ["true", "трулио"]
			, ["false", "нетрулио"]
//            Операторы сравнения и логические операторы
            , ["\\=\\=", "эквалио"]
            , ["\\>\\=", "поцик"]
			, ["\\<\\=", "поц"]
            , ["\\&\\&", "ичо"]
			, ["\\|\\|", "иличо"]
            , ["\\>", "пизже"]
			, ["\\<", "хуёвей"]
			, ["\\<", "хуевей"]
			, ["\\=", "сука"]
			, ["\\;", " нах"]
			, ["\\!", "чобля"]
			, ["\\+\\+", "плюсуюНа"]
			, ["\\-\\-", "слилсяНа"]
//             Document methods
            , ["document", "ксива"]
            , ["captureEvents", "зафотатьШняги"]
            , ["createAttribute", "намутитьЯжку"]
            , ["createDocumentFragment", "намутитьКусокМалявы"]
            , ["createEvent", "намутитьШнягу"]
            , ["createNodeIterator", "намутитьГовнодыратор"]
            , ["createRange", "намутитьОпапа"]
            , ["createTextNode", "намутитьМалявуГовнодскую"]
            , ["createTouch", "намутитьЛеща"]
            , ["createTreeWalker", "намутитьБуратино"]
            , ["elementFromPoint", "терпилаИзПараши"]
            , ["elementsFromPoint", "терпилыИзПараши"]
            , ["enableStyleSheetsForSet", "намутитьСтруйкуДляХабара"]
            , ["getAnimations", "вычислитьДвижуху"]
            , ["getElementsByClassName", "вычислитьТерпилПоКлассу"]
            , ["getElementsByTagName", "вычислитьТерпилПоТегу"]
            , ["importNode", "влабазУзел"]
            , ["registerElement", "зашитьДело"]
            , ["releaseCapture", "зафотатьХуякХуяк"]
            , ["getElementById", "вычислитьЛохаПоНомеру"]
            , ["querySelector", "хулиВыёбываешься"]
            , ["querySelector", "хулиВыебываешься"]
            , ["querySelectorAll", "хулиТутВсеВыёбываются"]
            , ["querySelectorAll", "хулиТутВсеВыебываются"]
            , ["createExpression", "намутитьБазар"]
            , ["evaluate", "заценить"]
            , ["clear", "урыть"]
            , ["close", "завали"]
            , ["execCommand", "идиРаботайБля"]
            , ["getElementsByName", "вычислитьТерпилПоИмени"]
            , ["getSelection", "сестьНаДваСтула"]
            , ["hasFocus", "имеетЧеткость"]
            , ["open", "отрыть"]
            , ["queryCommandEnabled", "хулиЧикаДоступная"]
            , ["queryCommandState", "хулиЧикаОтдыхает"]
            , ["queryCommandSupported", "хулиЧикаБезАйфона"]
            , ["queryCommandIndeterm", "хулиЧикаОйВсё"]
            , ["queryCommandIndeterm", "хулиЧикаОйВсе"]
            , ["queryCommandValue", "хулиЧикаВалио"]
            , ["write", "малява"]
            , ["writeln", "малявагоп"]
//            Document Properties
            , ["async", "ассо"]
            , ["characterSet", "слышТыЧоЁба"]
            , ["characterSet", "слышТыЧоЕба"]
            , ["charset", "слышЁба"]
            , ["charset", "слышЕба"]
            , ["contentType", "ухтыжёптыжТипчик"]
            , ["contentType", "ухтыжептыжТипчик"]
            , ["doctype", "типКсивы"]
            , ["documentElement", "ксиваТерпилы"]
            , ["documentURI", "ксиваНаХате"]
            , ["domConfig", "чоткоДерзко"]
            , ["hidden", "кроить"]
            , ["inputEncoding", "эйтыэтоПиздиш"]
            , ["pointerLockElement", "тырколкуНаАнусТерпилы"]
            , ["scrollingElement", "намазиТерпила"]
            , ["timeline", "всяЖиза"]
            , ["visibilityState", "мутныйСюжет"]
            , ["children", "пездюки"]
            , ["firstElementChild", "первыйПездюкШняги"]
            , ["lastElementChild", "последнийПездюкШняги"]
            , ["childElementCount", "моиШняжныеПездюки"]
            , ["activeElement", "активнаяШняга"]
            , ["alinkColor", "петухЗоныКрасиво"]
            , ["anchors", "якоряЁпт"]
            , ["anchors", "якоряЕпт"]
            , ["bgColor", "охуеннаяЖопа"]
            , ["body", "висяк"]
            , ["cookie", "семки"]
            , ["defaultView", "моргалаВыколю"]
            , ["designMode", "хуйРисуйМод"]
            , ["dir", "буратино"]
            , ["domain", "домойБлядь"]
            , ["embeds", "мразоты"]
            , ["forms", "еблища"]
            , ["head", "залупка"]
            , ["height", "длинный"]
            , ["images", "мазни"]
            , ["lastModified", "когдаПетухомСтал"]
            , ["linkColor", "зонаКрасиво"]
            , ["links", "зоны"]
            , ["location", "райончик"]
            , ["plugins", "выебоны"]
            , ["readyState", "газуемБля"]
            , ["referrer", "корешСтарый"]
            , ["scripts", "гыебаты"]
            , ["title", "вася"]
            , ["URL", "хата"]
            , ["vlinkColor", "когдаОткинулсяПослеЗоны"]
            , ["width", "жирный"]
            , ["value", "валио"]
//            Document event handlers
            , ["onafterscriptexecute", "послеВыполненияЙопты"]
            , ["onbeforescriptexecute", "доВыполненияЙопты"]
            , ["oncopy", "какВсунул"]
            , ["oncut", "какВысунул"]
            , ["onpaste", "какВставил"]
            , ["onselectionchange", "покаДваСтулаМахнуть"]
            , ["onfullscreenchange", "покаЕбальникПоказал"]
            , ["onwheel", "какНаХуюВертел"]
//            Global event handlers
            , ["onabort", "когдаУронилМыло"]
            , ["onblur", "опаНичотка"]
            , ["onerror", "наПапандос"]
            , ["onfocus", "опаЧотка"]
            , ["oncancel", "покаТруханул"]
            , ["onchange", "опаЧозанахуй"]
            , ["onclick", "какПырну"]
            , ["onclose", "ебалоОфф"]
            , ["oncontextmenu", "какПоЛбуЁбну"]
            , ["oncontextmenu", "какПоЛбуЕбну"]
            , ["ondblclick", "какПырнуДваждыНахуй"]
            , ["ondrag", "опаОчкоДёрнул"]
            , ["ondrag", "опаОчкоДернул"]
            , ["ondragend", "покаХарэОчкоДёргать"]
            , ["ondragend", "покаХарэОчкоДергать"]
            , ["ondragenter", "покаДёргалкаНарисовалась"]
            , ["ondragenter", "покаДергалкаНарисовалась"]
            , ["ondragexit", "анусСебеДёрниПёс"]
            , ["ondragexit", "анусСебеДерниПес"]
            , ["ondragleave", "покаДергунСлинял"]
            , ["ondragover", "покаДёрнулПодошла"]
            , ["ondragover", "покаДернулПодошла"]
            , ["ondragstart", "покаДёрнулКмон"]
            , ["ondragstart", "покаДернулКмон"]
            , ["ondrop", "опаМабилкаЁбнулась"]
            , ["ondrop", "опаМабилкаЕбнулась"]
            , ["oninput", "покаЭйтыэтоПишибля"]
            , ["oninvalid", "гыйбатьИнвалидНахуй"]
            , ["onkeydown", "гыйбатьЛещДаун"]
            , ["onkeypress", "гыйбатьВмялЛеща"]
            , ["onkeyup", "гыйбатьЛещАут"]
            , ["onloadstart", "покаНесуСемки"]
            , ["onmousedown", "всунулНаРайоне"]
            , ["onmouseenter", "вошёлНаРайон"]
            , ["onmouseenter", "вошелНаРайон"]
            , ["onmouseleave", "съебалсяИзРайона"]
            , ["onmousemove", "хожуПоРайону"]
            , ["onmouseout", "покаТырколкаСъебала"]
            , ["onmouseover", "покаТырколкаПодошла"]
            , ["onmouseup", "вынулНаРайоне"]
            , ["onmousewheel", "вертелНаРайоне"]
            , ["onpause", "покаСтопэ"]
            , ["onplay", "покаЖиви"]
            , ["onplaying", "покаЖивой"]
            , ["onpointerdown", "покаТыркнулДауна"]
            , ["onpointermove", "покаХожуТырколйПоРайону"]
            , ["onpointerup", "покаТыркнулАута"]
            , ["onpointercancel", "покаСтрелаТруханула"]
            , ["onpointerover", "покаСтрелаПодошла"]
            , ["onpointerout", "покаСтрелаСъебала"]
            , ["onpointerenter", "покаСрелкаНарисовалась"]
            , ["onpointerleave", "покаСтрелаСлиняла"]
            , ["onprogress", "покаМатаетсяСрок"]
            , ["onreset", "покаПравим"]
            , ["onscroll", "покаКолесим"]
            , ["onseeked", "когдаОбоссал"]
            , ["onseeking", "когдаОбоссался"]
            , ["onselect", "опаДваСтула"]
            , ["onshow", "опаТуса"]
            , ["onsort", "опаСидор"]
            , ["onstalled", "опаНефартануло"]
            , ["onsubmit", "опаХуйВГовне"]
            , ["onsuspend", "опаПодфартило"]
            , ["ontimeupdate", "опаНуЭтоКогдаЭто"]
            , ["onvolumechange", "покаТишеБудь"]
            , ["ontouchcancel", "покаЛещТруханул"]
            , ["ontouchend", "покаЛещКончил"]
            , ["ontouchmove", "опаДвигайОтСюдаЛещ"]
            , ["ontouchstart", "опаЩаЛещаПоЩамДам"]
            , ["onwaiting", "покаМотаюСрок"]
//            Window properties
            , ["window", "ебало"]
            , ["closed", "завалено"]
            , ["console", "красноглазое"]
            , ["controllers", "мусора"]
            , ["crypto", "пиздишбля"]
            , ["devicePixelRatio", "типАйфона"]
            , ["dialogArguments", "тыэтаТавоэта"]
            , ["frameElement", "кадрОпущенный"]
            , ["frames", "кадры"]
            , ["fullScreen", "воВсёЕбало"]
            , ["fullScreen", "воВсеЕбало"]
            , ["history", "фон"]
            , ["innerHeight", "внутриДлинный"]
            , ["innerWidth", "внутриЖирный"]
            , ["length", "писькомер"]
            , ["location", "белыйЛебедь"]
            , ["name", "погоняло"]
            , ["navigator", "главпетух"]
            , ["opener", "открывашка"]
            , ["outerHeight", "вокругДлинные"]
            , ["outerWidth", "вокругЖирные"]
            , ["pageXOffset", "статьяПоЭксу"]
            , ["pageYOffset", "статьяПоУгам"]
            , ["sessionStorage", "хабрИзОтсидки"]
            , ["parent", "родаки"]
            , ["returnValue", "ответитьЗаВалио"]
            , ["performance", "сестьНахуй"]
            , ["screen", "всёЕбало"]
            , ["screen", "всеЕбало"]
            , ["screenX", "всёЕбалоПоЭксу"]
            , ["screenX", "всеЕбалоПоЭксу"]
            , ["screenY", "всёЕбалоПоУгам"]
            , ["screenY", "всеЕбалоПоУгам"]
            , ["scrollbars", "колеситьПоПивларькам"]
            , ["scrollMaxX", "колеситьПоГлавЭксу"]
            , ["scrollMaxY", "колеситьПоГлавУгам"]
            , ["scrollX", "колеситьПоЭксу"]
            , ["scrollY", "колеситьПоУгам"]
            , ["self", "пельмень"]
            , ["sidebar", "стенкаЙбать"]
            , ["top", "КрышаЙбать"]
//            Window methods
            , ["addEventListener", "добавитьВертухай"]
            , ["alert", "шухер"]
            , ["blur", "размытьЕбало"]
            , ["cancelIdleCallback", "харэПиздеть"]
            , ["clearInterval", "отсидетьСизо"]
            , ["clearTimeout", "отсидетьСрок"]
            , ["confirm", "канает"]
            , ["dispatchEvent", "послатьНахуйШнягу"]
            , ["dump", "мусорка"]
            , ["find", "сигиЕсть"]
            , ["focus", "хуёкус"]
            , ["focus", "хуекус"]
            , ["getAttention", "посвистеть"]
            , ["getComputedStyle", "нассыМнеВалиоСтруйкой"]
            , ["matchMedia", "феняНаШару"]
            , ["maximize", "распидорась"]
            , ["minimize", "спидорась"]
            , ["moveBy", "щаТяПодвину"]
            , ["moveTo", "нахуйЭтоТуда"]
            , ["openDialog", "побазарить"]
            , ["postMessage", "намутитьКсиву"]
            , ["print", "наПечать"]
            , ["prompt", "поясниЗаБазар"]
            , ["removeEventListener", "урытьВертухая"]
            , ["resizeBy", "распидораситьПоХуйне"]
            , ["resizeTo", "распидораситьОтносительно"]
            , ["scroll", "колесить"]
            , ["scrollBy", "колеситьНа"]
            , ["scrollByLines", "колеситьНаЛинии"]
            , ["scrollByPages", "колеситьНаМалявах"]
            , ["scrollTo", "колеситьНахуйНа"]
            , ["setInterval", "посетитьСизо"]
            , ["setResizable", "датьПопидорасить"]
            , ["setTimeout", "получитьСрок"]
            , ["sizeToContent", "ухтыжёптыжбляПодгони"]
            , ["sizeToContent", "ухтыжептыжбляПодгони"]
            , ["stop", "стопээ"]
            , ["updateCommands", "новыйАйфонДляЧики"]
//            Window event handlers
            , ["onbeforeunload", "покаСемкиКрутятся"]
            , ["ondevicelight", "покаХуйДлинный"]
            , ["onhashchange", "покаШнягаИзменяет"]
            , ["oninstall", "покаХуйСтоитКакКолонна"]
            , ["onload", "опаСемкиНесу"]
            , ["onoffline", "покаОффнусь"]
            , ["ononline", "опаТутачки"]
            , ["onpagehide", "покаКсиваНаМалине"]
            , ["onpageshow", "опаКсивуПоказал"]
            , ["onpaint", "опаНарисовался"]
            , ["onpopstate", "покаИсторияМаляется"]
            , ["onstorage", "опаХабар"]
            , ["onunload", "опаСемкиКрутятся"]
//            Node properties
            , ["baseURI", "наХатеТип"]
            , ["baseURIObject", "мразотыНаХатеКрч"]
            , ["childNodes", "пездюкГовнод"]
            , ["firstChild", "первыйПездюк"]
            , ["lastChild", "последнийПездюк"]
            , ["nextSibling", "следующийПездюк"]
            , ["nodeName", "погонялоПездюка"]
            , ["nodeType", "типичныйПездюк"]
            , ["nodeValue", "валиоПездюка"]
            , ["ownerDocument", "главныйАвторитет"]
            , ["parentNode", "братишка"]
            , ["parentElement", "братишкаЭлемент"]
            , ["previousSibling", "старыйПездюк"]
            , ["textContent", "ухтыжёптыжМалява"]
            , ["textContent", "ухтыжептыжМалява"]
//            Node methods
            , ["appendChild", "заделатьПездюка"]
            , ["cloneNode", "клонГовнод"]
            , ["compareDocumentPosition", "сравниСтатусМалявы"]
            , ["contains", "яТвойОтецЕбуОвец"]
            , ["getRootNode", "дайБатеГовнод"]
            , ["hasChildNodes", "батяИмеетПездюков"]
            , ["insertBefore", "вставитьПездюкаДо"]
            , ["isDefaultNamespace", "деткаТыПростоКосмос"]
            , ["isEqualNode", "эквалиоГовнод"]
            , ["normalize", "нормандэ"]
            , ["removeChild", "уебатьПездюка"]
            , ["replaceChild", "сделатьАборт"]
//            String properties
            , ["prototype", "проточелик"]
//            String methods
            , ["fromCharCode", "хуйняИзЁба"]
            , ["fromCharCode", "хуйняИзЕба"]
            , ["fromCodePoint", "хуйняИзЭтоТуданахНутыпоэл"]
            , ["raw", "полоса"]
            , ["charAt", "обаЁба"]
            , ["charAt", "обаЕба"]
            , ["charCodeAt", "обаЁбаХуйня"]
            , ["charCodeAt", "обаЕбаХуйня"]
            , ["codePointAt", "хуйняНутыпоэлОткуда"]
            , ["concat", "заебеньВсе"]
            , ["includes", "лучшеНетВлагалищаЧемОчкоТоварища"]
            , ["endsWith", "отЗалупки"]
            , ["indexOf", "поТюряге"]
            , ["lastIndexOf", "последняяОтсидка"]
            , ["localeCompare", "сравнитьГовор"]
            , ["match", "футбик"]
            , ["padEnd", "залупныйПадик"]
            , ["padStart", "начальныйПадик"]
            , ["repeat", "непоэлПовтори"]
            , ["replace", "пивасПодмени"]
            , ["search", "семкиЕсть"]
            , ["slice", "поделитьСемки"]
            , ["split", "поделитьЯгу"]
            , ["startsWith", "начатьЗалупку"]
            , ["substr", "спиздитьМеждуБукв"]
            , ["substring", "спиздитьМеждуСтрок"]
            , ["toLocaleLowerCase", "поРайонуНеКапсом"]
            , ["toLocaleUpperCase", "поРайонуКапсом"]
            , ["toLowerCase", "неКапсом"]
            , ["toString", "поПацански"]
            , ["toUpperCase", "капсомБля"]
            , ["trim", "вырезатьОчко"]
            , ["trimLeft", "вырезатьОчкоСлева"]
            , ["trimRight", "вырезатьОчкоСправа"]
            , ["valueOf", "валиоОф"]
//            String HTML wrapper methods
            , ["anchor", "якорьЁпт"]
            , ["anchor", "якорьЕпт"]
            , ["big", "большойЁпт"]
            , ["big", "большойЕпт"]
            , ["bold", "жирныйЁпт"]
            , ["bold", "жирныйЕпт"]
            , ["fixed", "ПМС"]
            , ["fontcolor", "говномПоСтенеКрасиво"]
            , ["fontsize", "говномПоСтенеСочно"]
            , ["italics", "понаехавший"]
            , ["link", "зона"]
            , ["small", "малорик"]
            , ["strike", "въебиОчко"]
//            Canvas properties
            , ["currentTransform", "этотЕбальник"]
            , ["direction", "лесТам"]
            , ["filter", "фильтруй"]
            , ["font", "говномПоСтене"]
            , ["fillStyle", "кончитьСтруйкой"]
            , ["globalAlpha", "главныйАльфач"]
            , ["imageSmoothingEnabled", "включитьРазмытиеЕбала"]
            , ["lineCap", "выбратьКонец"]
            , ["lineDashOffset", "пятнистыйХуй"]
            , ["lineJoin", "формаШишкана"]
            , ["lineWidth", "толщинаХуя"]
            , ["miterLimit", "скрестимСтруйки"]
            , ["shadowBlur", "наняРазмытьЕбало"]
            , ["shadowColor", "наняКрасиво"]
            , ["shadowOffsetX", "наняХатаПоЭксу"]
            , ["shadowOffsetY", "наняХатаПоУгам"]
            , ["strokeStyle", "стильНаколок"]
            , ["textAlign", "выровнитьБазар"]
            , ["textBaseline", "поставитьБазар"]
//            Canvas methods 
            , ["addHitRegion", "создатьПроблемы"]
            , ["getContext", "снятьСкальп"]
            , ["arc", "прогиб"]
            , ["arcTo", "прогибНа"]
            , ["bezierCurveTo", "кривоНахуй"]
            , ["clearHitRegions", "убитьПроблему"]
            , ["clearRect", "урытьШкаф"]
            , ["clip", "запретка"]
            , ["closePath", "тупикНахуй"]
            , ["createImageData", "намутитьМазнюЙопта"]
            , ["createLinearGradient", "намутитьЧоткуюМазнюПодливой"]
            , ["createPattern", "намутитьТипчика"]
            , ["createRadialGradient", "намутитьПоКругуМазнюПодливой"]
            , ["ellipse", "очко"]
            , ["fill", "обкончать"]
            , ["fillRect", "обкончатьДоску"]
            , ["fillText", "обкончатьБуквы"]
            , ["getImageData", "чоТутНамалёвано"]
            , ["getImageData", "чоТутНамалевано"]
            , ["getLineDash", "сококПятен"]
            , ["isPointInPath", "естьЛиКуполаНаГруди"]
            , ["isPointInStroke", "естьЛиКуполаНаНаколках"]
            , ["lineTo", "прямоНахуй"]
            , ["measureText", "вместитьБазар"]
            , ["moveTo", "щемитьНа"]
            , ["putImageData", "намалюйЧоТут"]
            , ["quadraticCurveTo", "криваяЗавелаНахуй"]
            , ["rect", "доска"]
            , ["removeHitRegion", "избавитьсяОтПроблемы"]
            , ["resetTransform", "поправитьЕбальник"]
            , ["restore", "выздоравливай"]
            , ["rotate", "вертетьНаХую"]
            , ["save", "схоронить"]
            , ["scale", "чотчеНа"]
            , ["scrollPathIntoView", "колеситьПоДорогеНахуй"]
            , ["setLineDash", "заебенитьПятнистыйХуй"]
            , ["setTransform", "перекоситьЕбальник"]
            , ["stroke", "наколка"]
            , ["strokeText", "текстНаколки"]
            , ["transform", "перекосить"]
            , ["translate", "дисюдаПиксел"]
//            Number properties
            , ["EPSILON", "ХУЕПСИЛОН"]
            , ["MAX_SAFE_INTEGER", "ЛУЧШИЙ_ГАНДОН"]
            , ["MAX_VALUE", "ОХУЕННОЕ_ВАЛИО"]
            , ["MIN_SAFE_INTEGER", "ХУЁВЫЙ_ГАНДОН"]
            , ["MIN_SAFE_INTEGER", "ХУЕВЫЙ_ГАНДОН"]
            , ["MIN_VALUE", "ХУЁВОЕ_ВАЛИО"]
            , ["MIN_VALUE", "ХУЕВОЕ_ВАЛИО"]
            , ["NEGATIVE_INFINITY", "НИХУЯ_ДОХУЯ"]
            , ["POSITIVE_INFINITY", "ОХУЕТЬ_ДОХУЯ"]
//            Number methods
            , ["isFinite", "оноКонченое"]
            , ["isInteger", "этоХуйня"]
            , ["isNaN", "этоНихуя"]
            , ["isSafeInteger", "этоОхуеннаяХуйня"]
            , ["parseFloat", "шнырятьПоПлавникам"]
            , ["parseInt", "шнырятьПоКарманам"]
            , ["toExponential", "наХуекспоненту"]
            , ["toFixed", "наПМС"]
            , ["toLocaleString", "кПацанамНаРайоне"]
            , ["toPrecision", "кЧоткости"]
//            Console methods
            , ["assert", "найтиСтукача"]
            , ["count", "которыйСрок"]
            , ["dirxml", "йбатьБуратиноНахуй"]
            , ["error", "папандос"]
            , ["group", "банда"]
            , ["groupCollapsed", "свернутьБанду"]
            , ["groupEnd", "съебатьсяИзБанды"]
            , ["info", "инфо"]
            , ["log", "чмо"]
            , ["profile", "личка"]
            , ["profileEnd", "вЛичкуПрописали"]
            , ["table", "таблом"]
            , ["time", "срок"]
            , ["timeEnd", "конецСрока"]
            , ["timeStamp", "началоСрока"]
            , ["trace", "складЧмошников"]
            , ["warn", "тыЭтоНуЭто"]
//            XMLHttpRequest properties
            , ["XMLHttpRequest", "запросПоЩам"]
            , ["onreadystatechange", "опаГотовЙоптЧозанахуй"]
            , ["readyState", "готовностьЙопт"]
            , ["timeout", "длительностьСрока"]
            , ["upload", "заебенить"]
            , ["withCredentials", "зашкварить"]
//            XMLHttpRequest methods
            , ["abort", "уронилМыло"]
            , ["getResponseHeader", "дайКепарикПолосатого"]
            , ["send", "всёПиздуй"]
            , ["send", "всеПиздуй"]
//            XMLHttpRequest Inheritance
            , ["XMLHttpRequestEventTarget", "запросСоШнягойПоЩам"]
            , ["EventTarget", "очкоНаПрицеле"]
//            XMLHttpRequest events
            , ["loadstart", "началТаскатьСемки"]
            , ["progress", "сколькоСемокДонёс"]
            , ["progress", "сколькоСемокДонес"]
            , ["load", "нестиСемки"]
            , ["loadend", "семкиДонёс"]
            , ["loadend", "семкиДонес"]
            , ["readystatechange", "готовЙоптЧозанахуй"]
//            Arrays properties
            , ["Array", "Помойка"]
//            Arrays methods 
            , ["from", "спиздитьИз"]
            , ["isArray", "этоПомойка"]
            , ["of", "сашаГрей"]
            , ["copyWithin", "вынестиГовно"]
            , ["entries", "вычислитьЛохов"]
            , ["every", "естьЧо"]
            , ["findIndex", "найдиБомжа"]
            , ["forEach", "пероПодРебро"]
            , ["join", "вписаться"]
            , ["keys", "отмычки"]
            , ["map", "засратьВсё"]
            , ["map", "засратьВсе"]
            , ["pop", "попка"]
            , ["push", "пупок"]
            , ["reduce", "редиска"]
            , ["reduceRight", "редискаПравая"]
            , ["reverse", "шухильмеМухильме"]
            , ["shift", "первыйБачок"]
            , ["splice", "въебатьГовна"]
            , ["sort", "сидор"]
            , ["some", "нарываешься"]
            , ["unshift", "верниБачок"]
            , ["values", "валиоси"]
//            Math properties
            , ["Math", "Гопец"]
            , ["E", "ГОПСПАНЕНТА"]
            , ["LN10", "ГОПОРИФМ10"]
            , ["LN2", "ГОПОРИФМ2"]
            , ["LOG10E", "СЛОЖНЫЙ_ГОПОРИФМ10"]
            , ["LOG2E", "СЛОЖНЫЙ_ГОПОРИФМ2"]
            , ["PI", "ПИЗДЕЦ"]
            , ["SQRT1_2", "сквиртНаПолшишечки"]
            , ["SQRT2", "двойнойСквирт"]
//            Math methods
            , ["abs", "абсолютли"]
            , ["acos", "агопосинус"]
            , ["acosh", "агопосинусКупчинский"]
            , ["asin", "агопинус"]
            , ["asinh", "агопинусКупчинский"]
            , ["atan", "агопангенс"]
            , ["atan2", "агопангенсПо2"]
            , ["atanh", "агопангенсКупчинский"]
            , ["cbrt", "кубоСквирт"]
            , ["ceil", "чирикГони"]
            , ["clz32", "поводырь32петухов"]
            , ["cos", "гопосинос"]
            , ["cosh", "гопосиносКолпинский"]
            , ["exp", "гопспанента"]
            , ["expm1", "топГопспонента"]
            , ["floor", "бабкиГони"]
            , ["fround", "мелочьТожеГони"]
            , ["hypot", "вКореньЗыришь"]
            , ["imul", "петухПетухаВидитИздалека"]
            , ["log10", "гопорифмПо10"]
            , ["log1p", "чистыйГопорифмПо1"]
            , ["log2", "гопорифмПо2"]
            , ["max", "хуйло"]
            , ["min", "хуйчик"]
            , ["pow", "гопень"]
            , ["random", "шара"]
            , ["round", "подрезать"]
            , ["sign", "сиськи"]
            , ["sin", "гопинус"]
            , ["sinh", "гопинусКолпинский"]
            , ["sqrt", "сквирт"]
            , ["tan", "гопангенс"]
            , ["tanh", "гопангенсКолпинский"]
            , ["trunc", "верниЧирик"]
//            RegExp properties
            , ["RegExp", "фильтруйБазар"]
            , ["input", "тыЭтоПишибля"]
            , ["flags", "флагМнеВанус"]
            , ["global", "глобалкаЙопта"]
            , ["ignoreCase", "игнорщикЕбаный"]
            , ["multiline", "стулБезПик"]
            , ["source", "чоТыБляСказал"]
            , ["sticky", "петухОпущенный"]
            , ["unicode", "хуйняНахуй"]
            , ["lastIndex", "доКонцаОтсидки"]
//            RegExp methods
            , ["exec", "работайМразь"]
            , ["test", "ответыБудутЭээ"]
];

//Для сортировки по количеству символов
dictionary.sort(function (a, b) {
    if (a[1].length < b[1].length) return 1;
    else if (a[1].length > b[1].length) return -1;
    else return 0;
});
console.log(JSON.stringify(dictionary, null, '\t'));
//END
