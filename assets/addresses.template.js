(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{318:function(n,e,o){"use strict";o.r(e);o(72);for(var t=new(o(225).a)(window.slateplus.allCountryOptionTags),s=$('form[id^="address_form_"]'),d=0;d<s.length;d++){var i=$(s[d]).find('[id^="AddressCountry_"]')[0],r=$(s[d]).find('[id^="AddressProvince_"]')[0];t.build(i,r,{onCountryChange:function(){for(var n=0;n<s.length;n++){var e=$(s[n]).find('[id^="AddressProvince_"]');$(s[n]).find('[id^="AddressProvinceContainer_"]').toggleClass("d-none",!e.find("option").length)}}})}$("#AddressCountry_New").on("change",(function(n){0!==n.target.selectedIndex&&n.target.classList.contains("has-default-option")&&n.target.classList.remove("has-default-option")})),$(".edit-address-btn").on("click",(function(n){return $("#FooterButtons > a").toggleClass("d-none",n.target.classList.contains("collapsed"))})),$(".edit-address-container .cancel-link").on("click",(function(){return $("#FooterButtons > a").removeClass("d-none")}))}},[[318,0,1]]]);