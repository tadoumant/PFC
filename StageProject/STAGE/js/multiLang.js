const headerLang={
    en:{
        textACCUEIL:'HOME',
        textPROPOS:'ABOUT',
        textCONTACT:'CONTACT',
        textSECONNECTER:'LOG IN'
    },
    ar:{
        textACCUEIL:'رئيسية',
        textPROPOS:'حول البوابة',
        textCONTACT:'اتصل بنا',
        textSECONNECTER:'تسجيل الدخول'
    },
    fr:{
        textACCUEIL:'ACCUEIL',
        textPROPOS:'A PROPOS',
        textCONTACT:'CONTACT',
        textSECONNECTER:'SE CONNECTER'
    }
};
const footerLang={
    en:{
        textCopyright:'Copyright 2023 ',
        textSelectLang:'Select a language',
        english:'English',
        arabic:'Arabic',
        fransh:'Fransh',
        aDEANSUPMTI:'DEAN SUPMTI'
    },
    ar:{
        textCopyright:'حقوق الطبع والنشر 2023',
        textSelectLang:'اختر لغة',
        english:'إنجليزي',
        arabic:'عربي',
        fransh:'فرنسي',
        aDEANSUPMTI:'DEAN SUPMTI'
    },
    fr:{
        textCopyright:'Copyright 2023 ',
        textSelectLang:'Sélectionnez une langue',
        english:'Anglais',
        arabic:'arabe',
        fransh:'Français',
        aDEANSUPMTI:'DEAN SUPMTI'
    }
    
}
const index01={
    en:{
        body2_01h1:'Welcome to the National Portal',
        body2_01P:'For the claim of regional problems',
        body2_01buttonA:'keep on going',
        body03h1:'SOME NUMBERS',
        body30001_details00Reclamationsdep:'Claims filed',
        body30001_details00Reclamationstrai:'Complaints processed',
        body30001_details00toutStat:'All statistics',
        body3_0textbody3_0H1:'Problems'
    },
    ar:{
        body2_01h1:'أهلا بكم في البوابة الوطنية',
        body2_01P:'لمطالبة المشاكل الإقليمية',
        body2_01buttonA:'استمر',
        body03h1:'بعض الأرقام',
        body30001_details00Reclamationsdep:'تم رفع المطالبات',
        body30001_details00Reclamationstrai:'معالجة الشكاوى',
        body30001_details00toutStat:'كل الإحصائيات',
        body3_0textbody3_0H1:'مشاكل'
    },
    fr:{
        body2_01h1:'Bienvenue au Portail National',
        body2_01P:'Pour la reclamation des problèmes régionaux',
        body2_01buttonA:'Continue',
        body03h1:'QUELQUES CHIFFRES',
        body30001_details00Reclamationsdep:'Réclamations déposées',
        body30001_details00Reclamationstrai:'Réclamations traitées',
        body30001_details00toutStat:'Toutes les statistiques',
        body3_0textbody3_0H1:'Problèmes'
    }
}




// 
const languageSelector=document.querySelector('.footer01 .lang select');
languageSelector.addEventListener('change',(e)=>{
    localStorage.setItem('lang',e.target.value);
    if(e.target.value === 'en'){
        document.querySelector('body').style.direction='ltr';
        document.querySelector('.body2').style.backgroundImage="url(./images/search-bg.jpeg)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["en"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["en"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["en"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["en"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["en"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["en"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["en"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["en"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["en"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["en"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["en"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["en"]["body3_0textbody3_0H1"];


    }else if(e.target.value === 'ar'){
        document.querySelector('body').style.direction='rtl';
        document.querySelector('.body2').style.backgroundImage="url(./images/BG2.png)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["ar"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["ar"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["ar"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["ar"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["ar"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["ar"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["ar"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["ar"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["ar"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["ar"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["ar"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["ar"]["body3_0textbody3_0H1"];

        
    }else if(e.target.value === 'fr'){
        document.querySelector('body').style.direction='ltr';
        document.querySelector('.body2').style.backgroundImage="url(./images/search-bg.jpeg)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["fr"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["fr"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["fr"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["fr"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["fr"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["fr"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["fr"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["fr"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["fr"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["fr"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["fr"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["fr"]["body3_0textbody3_0H1"];

    }
})
document.addEventListener('DOMContentLoaded',()=>{
    const langs=localStorage.getItem('lang');
    if(langs=== 'en'){
        document.querySelector('body').style.direction='ltr';
        document.querySelector('.body2').style.backgroundImage="url(./images/search-bg.jpeg)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["en"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["en"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["en"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["en"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["en"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["en"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["en"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["en"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["en"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["en"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["en"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["en"]["body3_0textbody3_0H1"];

       

    }else if(langs=== 'ar'){
        document.querySelector('body').style.direction='rtl';
        document.querySelector('.body2').style.backgroundImage="url(./images/BG2.png)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["ar"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["ar"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["ar"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["ar"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["ar"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["ar"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["ar"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["ar"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["ar"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["ar"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["ar"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["ar"]["body3_0textbody3_0H1"];

    }else if(langs=== 'fr'){
        document.querySelector('body').style.direction='ltr';
        document.querySelector('.body2').style.backgroundImage="url(./images/search-bg.jpeg)";
        // HEADER
        document.querySelector('.textACCUEIL').textContent=headerLang["fr"]["textACCUEIL"];
        document.querySelector('.textPROPOS').textContent=headerLang["fr"]["textPROPOS"];
        document.querySelector('.textCONTACT').textContent=headerLang["fr"]["textCONTACT"];
        document.querySelector('.textSECONNECTER').textContent=headerLang["fr"]["textSECONNECTER"];
        // index01
        document.querySelector('.body2 .body2_01 h1').textContent=index01["fr"]["body2_01h1"];
        document.querySelector('.body2 .body2_01 p').textContent=index01["fr"]["body2_01P"];
        document.querySelector('.body2 .body2_01 button a').textContent=index01["fr"]["body2_01buttonA"];
        document.querySelector('.body03 .textQchi').textContent=index01["fr"]["body03h1"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationsdep').textContent=index01["fr"]["body30001_details00Reclamationsdep"];
        document.querySelector('.body03 .body30001 .body30001_details0 .body30001_details00 .Reclamationstrai').textContent=index01["fr"]["body30001_details00Reclamationstrai"];
        document.querySelector('.body03 .body30001 .body30001_details0 .toutStat').textContent=index01["fr"]["body30001_details00toutStat"];
        document.querySelector('.body3_0 .textbody3_0H1').textContent=index01["fr"]["body3_0textbody3_0H1"];

       
    }

})

