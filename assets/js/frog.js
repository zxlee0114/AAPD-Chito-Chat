//回上頁
const backButtons = document.querySelectorAll('.back-button');

backButton.forEach(button =>{
    button.addEventListener('click', function(event){
        event.preventDefault(); // 防止默認的導航行為
        window.history.back();
    });
});

//文章翻譯切換（失敗）
const translate = document.querySelector('.article-translate');
const frogContent = document.querySelector('.frog-content');

const contentChinese = `「蛙化現象」一開始由心理學家藤澤伸介提出，從童話《青蛙王子》衍生而來，指的是當女生得知喜歡的人也喜歡自己後，就變得不喜歡對方了，這樣的現象可能來自女性的自卑感，「他怎麼會喜歡這麼普通的我？」，而對對方感到幻滅，又或者女生只是享受著單戀的過程，喜歡保持距離的曖昧戀愛感，但並不想實際和對方談戀愛。<br>
但根據日本媒體《TBS NEWS DIG》街訪調查， 「蛙化現象」一詞在年輕人間有了新的解釋，指的是「喜歡的男生讓人感到幻滅的行為」，即使女生原本對該男性抱持好感，也可能因某些生活小細節，戀愛感就突然冷卻，眼中的王子突然變成青蛙。`;
const contentJapanese = `「カエル化現象」は、心理学者の藤沢伸介氏が提唱した概念で、童話『青い蛙の王子様』から派生しています。これは、女性が自分の好きな相手も自分のことを好きだと知った後、その相手が急に好きにならなくなる現象を指します。このような現象は女性の自己卑下感から来る可能性があり、「どうして彼がこんな普通の私を好きになるの？」と自問し、相手に幻滅してしまうこともあるでしょう。また、女性が片思いの過程を楽しんでいるだけで、曖昧な恋愛感を維持したいだけで、実際には相手と恋愛関係を持ちたくない場合もあります。<br>
しかし、日本のメディア『TBS NEWS DIG』によると、若者の間で「カエル化現象」には新しい解釈が広がっています。それは「好きだった男性が、生活の些細な面で幻滅させられる行動」を指し、女性が元々その男性に好意を抱いていた場合でも、突然恋愛感情が冷めてしまうことがあるというものです。彼らの目には王子様だった男性が突如としてカエルに変わってしまうのです。`;

let isContentJapanese = false;

function setContent(content) {
    frogContent.innerHTML = content;
}

function getCurrentContent() {
    return frogContent.innerHTML;
}

translate.addEventListener('click', () =>{
    if (isContentJapanese){
        setContent(contentChinese);
        translate.textContent='中翻日';
        isContentJapanese = false;
    } else{
        setContent(contentJapanese)
        translate.textContent = '日本語訳';
        isContentJapanese = true;
    }
});

setContent(contentChinese);