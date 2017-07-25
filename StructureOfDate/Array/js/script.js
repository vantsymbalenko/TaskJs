/* function which make first Letter toUpperCase*/
function ucFirst (str) {
	if(str.length==0){
		return str;
	}
	return (str.charAt(0)).toUpperCase()+str.slice(1);
}

/*function which check string to worlds "viagra" and "XXX"*/
function checkSpam (str) {
	str=str.toLowerCase();
	if((str.indexOf("xxx")>0) || (str.indexOf("viagra")>0)){
		return true;
	} else{
		return false;
	}
}
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

/*function which truncate string */
function truncate (str,maxlength) {
	if(str.length<=maxlength){
		return str;
	}else{
		return str.slice(0,maxlength-3)+"...";
	}
}
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 4));

/*function which extract number from string*/
function extractCurrencyValue(str) {
	return +str.slice(1);
}
alert(extractCurrencyValue("$120"));