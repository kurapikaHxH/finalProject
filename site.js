let result=document.getElementsByClassName("result")[0];
let backF=document.getElementsByClassName("back-fon")[0];
let base=document.getElementsByClassName("new")[0];
let exit=document.getElementsByClassName("exit")[0];
let pic1=document.getElementsByClassName("chek1")[0];
let pic2=document.getElementsByClassName("chek2")[0];
let pic3=document.getElementsByClassName("chek3")[0];
let pic4=document.getElementsByClassName("chek4")[0];
let pic5=document.getElementsByClassName("chek5")[0];
let pic6=document.getElementsByClassName("chek6")[0];
let pic7=document.getElementsByClassName("chek7")[0];
let pic8=document.getElementsByClassName("chek8")[0];
let pic9=document.getElementsByClassName("chek9")[0];
let pic10=document.getElementsByClassName("chek10")[0];
let pic11=document.getElementsByClassName("chek11")[0];
let pic12=document.getElementsByClassName("chek12")[0];
let pic13=document.getElementsByClassName("chek13")[0];
let pic14=document.getElementsByClassName("chek14")[0];
let pic15=document.getElementsByClassName("chek15")[0];
let pic16=document.getElementsByClassName("chek16")[0];
let pic17=document.getElementsByClassName("chek17")[0];
let pic18=document.getElementsByClassName("chek18")[0];
let pic19=document.getElementsByClassName("chek19")[0];
let pic20=document.getElementsByClassName("chek20")[0];
let pic21=document.getElementsByClassName("chek21")[0];
let pic22=document.getElementsByClassName("chek22")[0];
let pic23=document.getElementsByClassName("chek23")[0];
let pic24=document.getElementsByClassName("chek24")[0];
let pic25=document.getElementsByClassName("chek25")[0];
let pic26=document.getElementsByClassName("chek26")[0];
let pic27=document.getElementsByClassName("chek27")[0];
let pic28=document.getElementsByClassName("chek28")[0];
let pic29=document.getElementsByClassName("chek29")[0];
let pic30=document.getElementsByClassName("chek30")[0];
let holst=document.getElementsByClassName("canvas")[0].getContext("2d");
let t=document.getElementsByClassName("rec")[0];
let img=new Image();
img.src="https://ya.ru/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F4580879%2FWZoUP225mxvf352elPt1WA2311%2Forig&img_url=https%3A%2F%2Fi0.wp.com%2Fst.depositphotos.com%2F5466018%2F56475%2Fv%2F1600%2Fdepositphotos_564753550-stock-illustration-hexagon-radar-template-spider-mesh.jpg%3Fssl%3D1&cbir_id=4580879%2FWZoUP225mxvf352elPt1WA2311&cbird=188&lr=54&rpt=imageview&cbir_page=similar";

function painter(){
	holst.drawImage(img,100,0,300,230);
	holst.font="bold 12pt Math";
	holst.fillText("Естественно-научное направление",0,20);
	holst.fillText("Искусство",50,120);
	holst.fillText("Трудовая деятельность",365,120);
	holst.fillText("Политическая деятельность",300,20);
	holst.fillText("Информационная деятельность",0,220);
	holst.fillText("Социальная деятельность",300,220);
	holst.lineWidth=3;
	holst.strokeStyle="red";
	if(science==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+="Вы обладаете плохим уровнем знаний в естественно-научной сфере, рекомендуем выбрать профессию не связанную с данной областью знаний. ";
	}
	else if(science==1){
		holst.moveTo(249,115);
		holst.lineTo(239,101);
		holst.stroke();
		t.innerHTML+="Вы обладаете средними знаниями в естественно-научной сфере, рекомендуем выбрать профессию, где данная сфера играет маловажную роль. ";
	}
	else if(science==2){
		holst.moveTo(249,115);
		holst.lineTo(230,89);
		holst.stroke();
		t.innerHTML+="Вы обладаете средними знаниями в естественно-научной сфере, рекомендуем выбрать профессию, где данная сфера играет маловажную роль. ";
	}
	else if(science==3){
		holst.moveTo(249,115);
		holst.lineTo(221,78);
		holst.stroke();
		t.innerHTML+="Вы обладаете хорошими знаниями в естественно-научной сфере, рекомендуем выбрать профессию, где данная сфера играет второстепенную роль. ";
	}
	else if(science==4){
		holst.moveTo(249,115);
		holst.lineTo(212,66);
		holst.stroke();
		t.innerHTML+="Вы обладаете хорошими знаниями в естественно-научной сфере, рекомендуем выбрать профессию, где данная сфера играет второстепенную роль. ";
	}
	else if(science==5){
		holst.moveTo(249,115);
		holst.lineTo(203,54);
		holst.stroke();
		t.innerHTML+="Вы обладаете отличными знаниями в естественно-научной сфере, рекомендуем выбрать профессию напрямую связанную с данной сферой. Например: биолог, врач, зоолог, геолог и тому подобные.";
	}
	else if(science>=6){
		holst.moveTo(249,115);
		holst.lineTo(194,42);
		holst.stroke();
		t.innerHTML+="Вы обладаете замечательными знаниями в естественно-научной сфере, рекомендуем выбрать профессию напрямую связанную с данной сферой. Например: биолог, врач, зоолог, геолог и тому подобные.";
	}

	if(politic==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+="Вы плохо разбираетесь в политике. Рекомендуем не выбирать профессию, где политические знания играют ключевую роль.";
	}
	else if(politic==1){
		holst.moveTo(249,115);
		holst.lineTo(259,101);
		holst.stroke();
		t.innerHTML+="Вы плохо разбираетесь в политике. Рекомендуем не выбирать профессию, где политические знания играют ключевую роль.";
	}
	else if(politic==2){
		holst.moveTo(249,115);
		holst.lineTo(268,89);
		holst.stroke();
		t.innerHTML+="Вы плохо разбираетесь в политике. Рекомендуем не выбирать профессию, где политические знания играют ключевую роль.";
	}
	else if(politic==3){
		holst.moveTo(249,115);
		holst.lineTo(277,78);
		holst.stroke();
		t.innerHTML+="Вы средне разбираетесь в политике. Рекомендуем выбрать профессию, где политические знания играют второстепенную роль.";
	}
	else if(politic==4){
		holst.moveTo(249,115);
		holst.lineTo(285,66);
		holst.stroke();
		t.innerHTML+="Вы средне разбираетесь в политике. Рекомендуем выбрать профессию, где политические знания играют второстепенную роль.";
	}
	else if(politic==5){
		holst.moveTo(249,115);
		holst.lineTo(293,54);
		holst.stroke();
		t.innerHTML+="Вы хорошо разбираетесь в политике. Вы способны связать Вашу будущую деятельность с политикой.";
	}
	else if(politic>=6){
		holst.moveTo(249,115);
		holst.lineTo(302,42);
		holst.stroke();
		t.innerHTML+="Вы отлично разбираетесь в политике. Вы способны связать Вашу будущую деятельность с политикой.";
	}

	if(trud==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+=" Вы плохо справляетесь с физическим трудом. Физический труд будет тяжел для Вас. Рекомендуем выбрать профессию где физический труд не представляется важным. ";
	}
	else if(trud==1){
		holst.moveTo(249,115);
		holst.lineTo(271,115);
		holst.stroke();
		t.innerHTML+=" Вы средне справляетесь с физическим трудом. Возможно Вам будет несколько тяжел физический труд. Рекомендуем выбрать профессию где физический труд уступает по важности другим навыкам. ";
	}
	else if(trud==2){
		holst.moveTo(249,115);
		holst.lineTo(287,115);
		holst.stroke();
		t.innerHTML+=" Вы средне справляетесь с физическим трудом. Возможно Вам будет несколько тяжел физический труд. Рекомендуем выбрать профессию где физический труд уступает по важности другим навыкам. ";	
		}
	else if(trud==3){
		holst.moveTo(249,115);
		holst.lineTo(306,115);
		holst.stroke();
		t.innerHTML+=" Вы хорошо справляетесь с физическим трудом. Физическая нагрузка для Вас не проблема. Рекомендуем выбрать профессию где физический труд играет первостепенную/второстепенную роль. ";
	}
	else if(trud==4){
		holst.moveTo(249,115);
		holst.lineTo(323,115);
		holst.stroke();
		t.innerHTML+=" Вы хорошо справляетесь с физическим трудом. Физическая нагрузка для Вас не проблема. Рекомендуем выбрать профессию где физический труд играет первостепенную/второстепенную роль. ";
	}
	else if(trud==5){
		holst.moveTo(249,115);
		holst.lineTo(340,115);
		holst.stroke();
		t.innerHTML+=" Вы хорошо справляетесь с физическим трудом. Физическая нагрузка для Вас не проблема. Рекомендуем выбрать профессию где физический труд играет первостепенную/второстепенную роль. ";
	}
	else if(trud>=6){
		holst.moveTo(249,115);
		holst.lineTo(359,115);
		holst.stroke();
		t.innerHTML+=" Вы отлично справляетесь с физическим трудом. У Вас хорошо развито тело, отличная выносливость, что играет важную роль в специальностях где он необходим. Например: каскадер, военный, спасатель, плотник и прочие. ";
	}
	if(creativity==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+="У Вас низко развита креативность, советуем подобрать профессию где креативность играет второстепенную роль. Рекомендуем развить эту черту характера, так как она используется во многих профессиях.  ";
	}
	else if(creativity==1){
		holst.moveTo(249,115);
		holst.lineTo(227,115);
		holst.stroke();
		t.innerHTML+="У Вас неплохо развита креативность, советуем подобрать профессию где креативность играет второстепенную роль. Ваши умения являются хорошим дополнением в профессиях, не связанных с творчеством. ";
	}
	else if(creativity==2){
		holst.moveTo(249,115);
		holst.lineTo(211,115);
		holst.stroke();
		t.innerHTML+="У Вас неплохо развита креативность, советуем подобрать профессию где креативность играет второстепенную роль. Ваши умения являются хорошим дополнением в профессиях, не связанных с творчеством. ";
	}
	else if(creativity==3){
		holst.moveTo(249,115);
		holst.lineTo(196,115);
		holst.stroke();
		t.innerHTML+="У Вас средне развита креативность. Ваши умения являются хорошим дополнением в профессиях, не связанных с творчеством. ";
	}
	else if(creativity==4){
		holst.moveTo(249,115);
		holst.lineTo(178,115);
		holst.stroke();
		t.innerHTML+="У Вас хорошо развита креативность, Вы способны придумывать интересные идеи которые в дальнейшем помогут Вам во всех специальностях. ";
	}
	else if(creativity==5){
		holst.moveTo(249,115);
		holst.lineTo(160,115);
		holst.stroke();
		t.innerHTML+="У Вас хорошо развита креативность, Вы способны придумывать интересные идеи которые в дальнейшем помогут Вам во всех специальностях. ";
	}
	else if(creativity>=6){
		holst.moveTo(249,115);
		holst.lineTo(139,115);
		holst.stroke();
		t.innerHTML+="Вы очень креативный человек, способный придумывать интересные идеи. Вы способны специализироваться в искусстве и творчестве. Вам подойдут такие профессии как художник, музыкант и другие профессии связанные с творчеством. ";
	}
	if(information==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает низкие результаты. Вы можете попробовать себя в профессиях где эта область знаний мало изучается и используется гораздо реже, чем другие. ";
	}
	else if(information==1){
		holst.moveTo(249,115);
		holst.lineTo(240,129);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает результаты чуть ниже среднего. Вы можете попробовать себя в профессиях где эта область знаний изучается менее углубленно и используется реже, чем другие. ";
	}
	else if(information==2){
		holst.moveTo(249,115);
		holst.lineTo(232,141);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает результаты чуть ниже среднего. Вы можете попробовать себя в профессиях где эта область знаний изучается менее углубленно и используется реже, чем другие. ";
	}
	else if(information==3){
		holst.moveTo(249,115);
		holst.lineTo(223,152);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает средние результаты. Вы можете развить себя в профессиях где частично используются информационные знания. ";
	}
	else if(information==4){
		holst.moveTo(249,115);
		holst.lineTo(215,164);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает хорошие результаты. Вы можете развить себя в профессиях где частично используются информационные знания. ";
	}
	else if(information==5){
		holst.moveTo(249,115);
		holst.lineTo(206,176);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает хорошие результаты. Вы можете развить себя в профессиях где частично используются информационные знания. ";
	}
	else if(information>=6){
		holst.moveTo(249,115);
		holst.lineTo(195,191);
		holst.stroke();
		t.innerHTML+="Ваш показатель в сфере информации показывает отличные результаты. Вы можете развить себя в этой области. Вам могут подойти такие профессии как программист, менеджер, экономист и другие. ";
	}
	if(social==0){
		holst.moveTo(249,115);
		holst.lineTo(249,114);
		holst.stroke();
		t.innerHTML+="У Вас низкий показатель навыка общения с людьми. При необходимости на работе скорее всего Вам будет весьма затруднительно вести диалог с собеседником/аудиторией. ";
	}
	else if(social==1){
		holst.moveTo(249,115);
		holst.lineTo(258,129);
		holst.stroke();
		t.innerHTML+="У Вас средние навыки общения с людьми. При необходимости на работе скорее всего Вы будете вести себя довольно скованно и волноваться. Однако Вы можете перебороть волнение, если это будет действительно важно. ";
	}
	else if(social==2){
		holst.moveTo(249,115);
		holst.lineTo(267,141);
		holst.stroke();
		t.innerHTML+="У Вас средние навыки общения с людьми. При необходимости на работе скорее всего Вы будете вести себя довольно скованно и волноваться. Однако Вы можете перебороть волнение, если это будет действительно важно. ";
	}
	else if(social==3){
		holst.moveTo(249,115);
		holst.lineTo(276,152);
		holst.stroke();
		t.innerHTML+="У Вас средние навыки общения с людьми. При необходимости Вам не будет затруднительно поддерживать контакт с человеком, если это потребуется. ";
	}
	else if(social==4){
		holst.moveTo(249,115);
		holst.lineTo(284,164);
		holst.stroke();
		t.innerHTML+="У Вас хорошие навыки общения с людьми. При необходимости Вам не будет затруднительно поддерживать контакт с человеком, если это потребуется. ";
	}
	else if(social==5){
		holst.moveTo(249,115);
		holst.lineTo(293,176);
		holst.stroke();
		t.innerHTML+="У Вас хорошие навыки общения с людьми. При необходимости Вам не будет затруднительно поддерживать контакт с человеком, если это потребуется. ";
	}
	else if(social>=6){
		holst.moveTo(249,115);
		holst.lineTo(304,191);
		holst.stroke();
		t.innerHTML+="У Вас отличные навыки общения с людьми, Вы пригодились бы в профессии где активно используется этот навык. Вы легко смогли бы работать учителем, консультантом, психологом и другими похожими профессиями. ";
	}
}
function backClose(){
	backF.classList.remove("active");
	base.classList.remove("active");
	politic=0;
	science=0;
	social=0;
	creativity=0;
	information=0;
	trud=0;
	t.innerHTML=" ";
}
exit.addEventListener("click", backClose);
backF.addEventListener("click", backClose);
function closer(e){
	if(e.target == backF){
		backClose();
	}
}


let politic=0;
let science=0;
let social=0;
let creativity=0;
let information=0;
let trud=0;
function backOpen(){
		
			backF.classList.add("active");
			base.classList.add("active");
		}
document.addEventListener("click", closer);


function checkForm(e){
let isCheck1 = true;
let isCheck2 = true;
let isCheck3 = true;
let isCheck4 = true;
let isCheck5 = true;
let isCheck6 = true;
let isCheck7= true;
let isCheck8 = true;
let isCheck9 = true;
let isCheck10 = true;
let isCheck11 = true;
let isCheck12 = true;
let isCheck13 = true;
let isCheck14 = true;
let isCheck15 = true;
let isCheck16 = true;
let isCheck17 = true;
let isCheck18 = true;
let isCheck19 = true;
let isCheck20 = true;
let isCheck21 = true;
let isCheck22 = true;
let isCheck23 = true;
let isCheck24 = true;
let isCheck25 = true;
let isCheck26 = true;
let isCheck27 = true;
let isCheck28= true;
let isCheck29 = true;
let isCheck30 = true;

    if (document.getElementsByName("people")[0].value == ''){
		isCheck1 = false;
		pic1.style.display="none";
		document.getElementsByName("people")[0].style.border="2px solid red";
		}
	else if(document.getElementsByName("people")[0].value == 'да'){
		isCheck1 = true;
		pic1.style.display="block";
		document.getElementsByName("people")[0].style.border="2px solid black";
		social+=1;
		politic+=1;
	}
	else if(document.getElementsByName("people")[0].value == 'средне'){
		isCheck1 = true;
		pic1.style.display="block";
		document.getElementsByName("people")[0].style.border="2px solid black";
		social+=1;
	}
	else if(document.getElementsByName("people")[0].value == 'нет'){
		isCheck1 = true;
		pic1.style.display="block";
		document.getElementsByName("people")[0].style.border="2px solid black";
		social-=1;
	}
	
    if (document.getElementsByName("help")[0].value == ''){
		isCheck2 = false;
		pic2.style.display="none";
		document.getElementsByName("help")[0].style.border="2px solid red";
		}
	else if(document.getElementsByName("help")[0].value == 'да'){
		social+=1;
		trud+=1;
		pic2.style.display="block";
		isCheck2 = true;
		document.getElementsByName("help")[0].style.border="2px solid black";
	}
	else if(document.getElementsByName("help")[0].value == 'средне'){
		pic2.style.display="block";
		isCheck2 = true;
		social+=1;
		document.getElementsByName("help")[0].style.border="2px solid black";
	}
	else if(document.getElementsByName("help")[0].value == 'нет'){
		pic2.style.display="block";
		isCheck2 = true;
		document.getElementsByName("help")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("mind")[0].value == ''){
		isCheck3 = false;
		pic3.style.display="none";
		document.getElementsByName("mind")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("mind")[0].value == 'да'){
		pic3.style.display="block";
		isCheck3 = true;
		creativity+=1;
		document.getElementsByName("mind")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("mind")[0].value == 'средне'){
		pic3.style.display="block";
		isCheck3 = true;
		document.getElementsByName("mind")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("mind")[0].value == 'нет'){
		pic3.style.display="block";
		isCheck3 = true;
		document.getElementsByName("mind")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("street")[0].value == ''){
		isCheck4 = false;
		pic4.style.display="none";
		document.getElementsByName("street")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("street")[0].value == 'да'){
		pic4.style.display="block";
		isCheck4 = true;
		science+=1;
		social+=1;
		document.getElementsByName("street")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("street")[0].value == 'средне'){
		pic4.style.display="block";
		isCheck4 = true;
		science+=1;
		document.getElementsByName("street")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("street")[0].value == 'нет'){
		pic4.style.display="block";
		isCheck4 = true;
		science-=1;
		social-=1;
		document.getElementsByName("street")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("animals")[0].value == ''){
		isCheck5 = false;
		pic5.style.display="none";
		document.getElementsByName("animals")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("animals")[0].value == 'да'){
		pic5.style.display="block";
		isCheck5 = true;
		science+=1;
		document.getElementsByName("animals")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("animals")[0].value == 'средне'){
		pic5.style.display="block";
		isCheck5 = true;
		document.getElementsByName("animals")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("animals")[0].value == 'нет'){
		pic5.style.display="block";
		isCheck5 = true;
		science-=1;
		document.getElementsByName("animals")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("camp")[0].value == ''){
		isCheck6 = false;
		pic6.style.display="none";
		document.getElementsByName("camp")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("camp")[0].value == 'да'){
		pic6.style.display="block";
		isCheck6 = true;
		science+=2;
		document.getElementsByName("camp")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("camp")[0].value == 'средне'){
		pic6.style.display="block";
		isCheck6 = true;
		science+=1;
		document.getElementsByName("camp")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("camp")[0].value == 'нет'){
		pic6.style.display="block";
		isCheck6 = true;
		document.getElementsByName("camp")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("remove")[0].value == ''){
		isCheck7 = false;
		pic7.style.display="none";
		document.getElementsByName("remove")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("remove")[0].value == 'да'){
		pic7.style.display="block";
		isCheck7 = true;
		trud+=1;
		document.getElementsByName("remove")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("remove")[0].value == 'средне'){
		pic7.style.display="block";
		isCheck7 = true;
		trud+=1;
		document.getElementsByName("remove")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("remove")[0].value == 'нет'){
		pic7.style.display="block";
		isCheck7 = true;
		trud-=1;
		document.getElementsByName("remove")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("activity")[0].value == ''){
		isCheck8 = false;
		pic8.style.display="none";
		document.getElementsByName("activity")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("activity")[0].value == 'да'){
		pic8.style.display="block";
		isCheck8 = true;
		trud+=1;
		document.getElementsByName("activity")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("activity")[0].value == 'средне'){
		pic8.style.display="block";
		isCheck8 = true;
		trud+=1;
		document.getElementsByName("activity")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("activity")[0].value == 'нет'){
		pic8.style.display="block";
		isCheck8 = true;
		trud-=1;
		document.getElementsByName("activity")[0].style.border="2px solid black";
	}
	  if (document.getElementsByName("home")[0].value == ''){
		isCheck9 = false;
		pic9.style.display="none";
		document.getElementsByName("home")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("home")[0].value == 'да'){
		pic9.style.display="block";
		isCheck9= true;
		social-=1;
		information+=1;
		document.getElementsByName("home")[0].style.border="2px solid black";
		}
	else if (document.getElementsByName("home")[0].value == 'средне'){
		pic9.style.display="block";
		isCheck9= true;
		information+=1;
		document.getElementsByName("home")[0].style.border="2px solid black";
		}
	else if (document.getElementsByName("home")[0].value == 'нет'){
		pic9.style.display="block";
		social+=1;
		isCheck9= true;
		document.getElementsByName("home")[0].style.border="2px solid black";
		}
    if (document.getElementsByName("talk")[0].value == ''){
		isCheck10 = false;
		pic10.style.display="none";
		document.getElementsByName("talk")[0].style.border="2px solid red";
		}
		
	else if (document.getElementsByName("talk")[0].value == 'да'){
		pic10.style.display="block";
		isCheck10= true;
		social+=1;
		politic+=1;
		document.getElementsByName("talk")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("talk")[0].value == 'средне'){
		pic10.style.display="block";
		isCheck10= true;
		social+=1;
		document.getElementsByName("talk")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("talk")[0].value == 'нет'){
		pic10.style.display="block";
		isCheck10= true;
		politic-=1;
		social-=1;
		document.getElementsByName("talk")[0].style.border="2px solid black";
	}

    if (document.getElementsByName("machine")[0].value == ''){
		pic11.style.display="none";
		isCheck11 = false;
		document.getElementsByName("machine")[0].style.border="2px solid red";
		}

	else if (document.getElementsByName("machine")[0].value == 'да'){
		pic11.style.display="block";
		isCheck11= true;
		trud+=1;
		information+=1;
		document.getElementsByName("machine")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("machine")[0].value == 'средне'){
		pic11.style.display="block";
		isCheck11= true;
		trud+=1;
		document.getElementsByName("machine")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("machine")[0].value == 'нет'){
		pic11.style.display="block";
		isCheck11= true;
		trud-=1;
		document.getElementsByName("machine")[0].style.border="2px solid black";
	}
	if (document.getElementsByName("iss")[0].value == ''){
		isCheck12= false;
		pic12.style.display="none";
		document.getElementsByName("iss")[0].style.border="2px solid red";
		}
	else if(document.getElementsByName("iss")[0].value == 'да'){
		pic12.style.display="block";
		isCheck12= true;
		creativity+=1;
		document.getElementsByName("iss")[0].style.border="2px solid black";
	}
	else if(document.getElementsByName("iss")[0].value == 'средне'){
		pic12.style.display="block";
		isCheck12= true;
		document.getElementsByName("iss")[0].style.border="2px solid black";
	}
	else if(document.getElementsByName("iss")[0].value == 'нет'){
		pic12.style.display="block";
		isCheck12= true;
		creativity-=1;
		document.getElementsByName("iss")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("hobby")[0].value == ''){
		isCheck13= false;
		pic13.style.display="none";
		document.getElementsByName("hobby")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("hobby")[0].value == 'да'){
		pic13.style.display="block";
		creativity+=2;
		isCheck13= true;
		document.getElementsByName("hobby")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("hobby")[0].value == 'средне'){
		pic13.style.display="block";
		isCheck13= true;
		document.getElementsByName("hobby")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("hobby")[0].value == 'нет'){
		pic13.style.display="block";
		isCheck13= true;
		creativity-=2;
		document.getElementsByName("hobby")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("math")[0].value == ''){
		isCheck14 = false;
		pic14.style.display="none";
		document.getElementsByName("math")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("math")[0].value == 'да'){
		pic14.style.display="block";
		isCheck14= true;
		information+=1;
		document.getElementsByName("math")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("math")[0].value == 'средне'){
		pic14.style.display="block";
		isCheck14= true;
		information+=1;
		document.getElementsByName("math")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("math")[0].value == 'нет'){
		pic14.style.display="block";
		isCheck14= true;
		information-=1;
		document.getElementsByName("math")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("teen")[0].value == ''){
		isCheck15= false;
		pic15.style.display="none";
		document.getElementsByName("teen")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("teen")[0].value == 'да'){
		pic15.style.display="block";
		isCheck15 = true;
		politic+=1;
		social+=1;
		document.getElementsByName("teen")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("teen")[0].value == 'средне'){
		pic15.style.display="block";
		isCheck15 = true;
		social+=1;
		document.getElementsByName("teen")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("teen")[0].value == 'нет'){
		pic15.style.display="block";
		isCheck15 = true;
		social-=1;
		document.getElementsByName("teen")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("phil")[0].value == ''){
		isCheck16= false;
		pic16.style.display="none";
		document.getElementsByName("phil")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("phil")[0].value == 'да'){
		pic16.style.display="block";
		isCheck16 = true;
		politic+=1;
		information+=1;
		document.getElementsByName("phil")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("phil")[0].value == 'средне'){
		pic16.style.display="block";
		isCheck16 = true;
		information+=1;
		document.getElementsByName("phil")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("phil")[0].value == 'нет'){
		pic16.style.display="block";
		isCheck16 = true;
		information-=1;
		politic-=1;
		document.getElementsByName("phil")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("make")[0].value == ''){
		isCheck17= false;
		pic17.style.display="none";
		document.getElementsByName("make")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("make")[0].value == 'да'){
		pic17.style.display="block";
		isCheck17= true;
		trud+=1;
		document.getElementsByName("make")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("make")[0].value == 'средне'){
		pic17.style.display="block";
		isCheck17= true;
		document.getElementsByName("make")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("make")[0].value == 'нет'){
		pic17.style.display="block";
		isCheck17= true;
		trud-=1;
		document.getElementsByName("make")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("pub")[0].value == ''){
		isCheck18= false;
		pic18.style.display="none";
		document.getElementsByName("pub")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("pub")[0].value == 'да'){
		pic18.style.display="block";
		isCheck8= true;
		social+=1;
		politic+=1;
		document.getElementsByName("pub")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("pub")[0].value == 'средне'){
		pic18.style.display="block";
		isCheck8= true;
		social+=1;
		document.getElementsByName("pub")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("pub")[0].value == 'нет'){
		pic18.style.display="block";
		isCheck8= true;
		social-=1;
		politic-=1;
		document.getElementsByName("pub")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("an")[0].value == ''){
		isCheck19= false;
		pic19.style.display="none";
		document.getElementsByName("an")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("an")[0].value == 'да'){
		pic19.style.display="block";
		isCheck19 = true;
		information+=2;
		document.getElementsByName("an")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("an")[0].value == 'средне'){
		pic19.style.display="block";
		isCheck19 = true;
		information+=1;
		document.getElementsByName("an")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("an")[0].value == 'нет'){
		pic19.style.display="block";
		isCheck19 = true;
		information-=1;
		document.getElementsByName("an")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("stress")[0].value == ''){
		isCheck20 = false;
		pic17.style.display="none";
		document.getElementsByName("stress")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("stress")[0].value == 'да'){
		pic20.style.display="block";
		isCheck20 = true;
		trud+=1;
		science+=1;
		document.getElementsByName("stress")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("stress")[0].value == 'средне'){
		pic20.style.display="block";
		isCheck20 = true;
		document.getElementsByName("stress")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("stress")[0].value == 'нет'){
		pic20.style.display="block";
		isCheck20 = true;
		politic-=1;
		trud-=1;
		document.getElementsByName("stress")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("PE")[0].value == ''){
		isCheck21 = false;
		pic21.style.display="none";
		document.getElementsByName("PE")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("PE")[0].value == 'да'){
		pic21.style.display="block";
		isCheck21 = true;
		trud+=1;
		document.getElementsByName("PE")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("PE")[0].value == 'средне'){
		pic21.style.display="block";
		isCheck21 = true;
		document.getElementsByName("PE")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("PE")[0].value == 'нет'){
		pic21.style.display="block";
		isCheck21 = true;
		trud-=1;
		document.getElementsByName("PE")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("spor")[0].value == ''){
		isCheck22 = false;
		pic22.style.display="none";
		document.getElementsByName("spor")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("spor")[0].value == 'да'){
		pic22.style.display="block";
		isCheck22 = true;
		social+=1;
		politic+=1;
		document.getElementsByName("spor")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("spor")[0].value == 'средне'){
		pic22.style.display="block";
		isCheck22 = true;
		politic+=1;
		document.getElementsByName("spor")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("spor")[0].value == 'нет'){
		pic22.style.display="block";
		isCheck22 = true;
		social-=1;
		document.getElementsByName("spor")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("otv")[0].value == ''){
		isCheck23 = false;
		pic23.style.display="none";
		document.getElementsByName("otv")[0].style.border="2px solid red";
		}  
	else if (document.getElementsByName("otv")[0].value == 'да'){
		pic23.style.display="block";
		isCheck23 = true;
		science+=1;
		politic+=1;
		document.getElementsByName("otv")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("otv")[0].value == 'средне'){
		pic23.style.display="block";
		isCheck23 = true;
		document.getElementsByName("otv")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("otv")[0].value == 'нет'){
		pic23.style.display="block";
		isCheck23 = true;
		politic-=1;
		document.getElementsByName("otv")[0].style.border="2px solid black";
	}
	if (document.getElementsByName("lid")[0].value == ''){
		isCheck24 = false;
		pic24.style.display="none";
		document.getElementsByName("lid")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("lid")[0].value == 'да'){
		pic24.style.display="block";
		isCheck24 = true;
		politic+=1;
		document.getElementsByName("lid")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("lid")[0].value == 'средне'){
		pic24.style.display="block";
		isCheck24 = true;
		document.getElementsByName("lid")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("lid")[0].value == 'нет'){
		pic24.style.display="block";
		isCheck24 = true;
		politic-=1;
		document.getElementsByName("lid")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("econom")[0].value == ''){
		isCheck25= false;
		pic25.style.display="none";
		document.getElementsByName("econom")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("econom")[0].value == 'да'){
		pic25.style.display="block";
		isCheck25 = true;
		information+=1;
		document.getElementsByName("econom")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("econom")[0].value == 'средне'){
		pic25.style.display="block";
		isCheck25 = true;
		document.getElementsByName("econom")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("econom")[0].value == 'нет'){
		pic25.style.display="block";
		isCheck25 = true;
		information-=1;
		document.getElementsByName("econom")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("ruk")[0].value == ''){
		isCheck26 = false;
		pic26.style.display="none";
		document.getElementsByName("ruk")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("ruk")[0].value == 'да'){
		pic26.style.display="block";
		isCheck26 = true;
		creativity+=1;
		document.getElementsByName("ruk")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("ruk")[0].value == 'средне'){
		pic26.style.display="block";
		isCheck26 = true;
		document.getElementsByName("ruk")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("ruk")[0].value == 'нет'){
		pic26.style.display="block";
		isCheck26 = true;
		creativity-=1;
		document.getElementsByName("ruk")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("usid")[0].value == ''){
		isCheck27= false;
		pic27.style.display="none";
		document.getElementsByName("usid")[0].style.border="2px solid red";
		}
	else  if (document.getElementsByName("usid")[0].value == 'да'){
		pic27.style.display="block";
		isCheck27= true;
		trud+=1;
		science+=1;
		document.getElementsByName("usid")[0].style.border="2px solid black";
	}
	else  if (document.getElementsByName("usid")[0].value == 'средне'){
		pic27.style.display="block";
		isCheck27= true;
		trud+=1;
		document.getElementsByName("usid")[0].style.border="2px solid black";
	}
	else  if (document.getElementsByName("usid")[0].value == 'нет'){
		pic27.style.display="block";
		isCheck27= true;
		science-=1;
		document.getElementsByName("usid")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("politic")[0].value == ''){
		isCheck28 = false;
		pic28.style.display="none";
		document.getElementsByName("politic")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("politic")[0].value == 'да'){
		pic28.style.display="block";
		isCheck28 = true;
		politic+=1;
		document.getElementsByName("politic")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("politic")[0].value == 'средне'){
		pic28.style.display="block";
		isCheck28 = true;
		document.getElementsByName("politic")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("politic")[0].value == 'нет'){
		pic28.style.display="block";
		isCheck28 = true;
		politic-=1;
		document.getElementsByName("politic")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("math2")[0].value == ''){
		isCheck29 = false;
		pic29.style.display="none";
		document.getElementsByName("math2")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("math2")[0].value == 'да'){
		pic29.style.display="block";
		isCheck29 = true;
		information+=1;
		document.getElementsByName("math2")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("math2")[0].value == 'средне'){
		pic29.style.display="block";
		isCheck29 = true;
		document.getElementsByName("math2")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("math2")[0].value == 'нет'){
		pic29.style.display="block";
		isCheck29 = true;
		information-=1;
		document.getElementsByName("math2")[0].style.border="2px solid black";
	}
    if (document.getElementsByName("razn")[0].value == ''){
		isCheck30 = false;
		pic30.style.display="none";
		document.getElementsByName("razn")[0].style.border="2px solid red";
		}
	else if (document.getElementsByName("razn")[0].value == 'да'){
		pic30.style.display="block";
		isCheck30 = true;
		social+=1;
		document.getElementsByName("razn")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("razn")[0].value == 'средне'){
		pic30.style.display="block";
		isCheck30 = true;
		document.getElementsByName("razn")[0].style.border="2px solid black";
	}
	else if (document.getElementsByName("razn")[0].value == 'нет'){
		pic30.style.display="block";
		isCheck30 = true;
		social-=1;
		document.getElementsByName("razn")[0].style.border="2px solid black";
	}
	if(isCheck1==true&&isCheck2==true&&isCheck3==true&&isCheck4==true&&isCheck5==true&&isCheck6==true&&isCheck7==true&&isCheck8==true&&isCheck9==true&&isCheck10==true&&isCheck11==true&&isCheck12==true&&isCheck13==true&&isCheck14==true&&isCheck15==true&&isCheck16==true&&isCheck17==true&&isCheck18==true&&isCheck19==true&&isCheck20==true&&isCheck21==true&&isCheck22==true&&isCheck23==true&&isCheck24==true&&isCheck25==true&&isCheck26==true&&isCheck27==true&&isCheck28==true&&isCheck29==true&&isCheck30==true){
		backOpen();
		painter();
		console.log('social'+social, 'information'+information, 'politic'+politic, 'creativity'+information,'science'+science, 'trud'+trud)
	}
}

result.addEventListener("click", checkForm);
