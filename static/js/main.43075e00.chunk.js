(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{122:function(e,t,a){e.exports=a(156)},127:function(e,t,a){},128:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),i=(a(127),a(128),a(41)),l=a(165),u=a(86),s=a(95),m=a.n(s),d=a(110),p=a(79),f=a(78),h=Object(p.b)({name:"weather",initialState:{city:"",loading:!1,weatherList:[],error:{}},reducers:{citySubmitted:function(e,t){var a=t.payload;e.city=a},requestWeatherSuccess:function(e,t){var a=t.payload;e.weatherList=a,e.loading=!1},requestWeather:function(e){e.loading=!0},requestWeatherFail:function(e,t){var a=t.payload;e.weatherList=[],e.loading=!1,e.error=a}}}),b=h.actions,y=b.citySubmitted,w=b.requestWeatherSuccess,g=b.requestWeather,E=b.requestWeatherFail;function v(e){var t=e.value,a=e.onSuccess;return function(){var e=Object(d.a)(m.a.mark((function e(n){var r,c,o,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("05ec36f5239e419fffc1d5fbe32d7984","&units=metric"));case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 7:return e.next=9,r.json();case 9:return c=e.sent,e.next=12,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c.coord.lat,"&lon=").concat(c.coord.lon,"&exclude=current,minutely,hourly&appid=").concat("05ec36f5239e419fffc1d5fbe32d7984","&units=metric"));case 12:if((o=e.sent).ok){e.next=15;break}throw new Error("".concat(o.status," - ").concat(o.statusText));case 15:return e.next=17,o.json();case 17:i=e.sent,n(w(i.daily)),a&&a(),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),n(E(e.t0.message)),f.b.error("Nie znaleziono miasta");case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}()}var k=h.reducer,x=a(164),O=a(163),S=a(162),j=a(120),W=Object(j.a)({cityInput:{width:150,margin:20,backgroundColor:"transparent",border:0,borderBottom:"4px solid #fff4de",outline:0,"&:-webkit-autofill":{transition:"background-color 5000s"}},cityError:{color:"red"},submitButton:{width:120,height:120,borderRadius:"100%",margin:20,backgroundColor:"#fff4de",border:"4px solid white",whiteSpace:"normal",outline:0},weatherList:{"& >*":{display:"inline-block",margin:20,padding:10,border:"4px solid #fff4de",backgroundColor:"rgba(255,255,255,0.8)"}},temperature:{fontSize:30,fontWeight:"100",padding:10},loading:{fontSize:34}}),N=function(e){var t=e.weather,a=W(),n=Object(O.a)(Object(S.a)(t.dt),"dd.MM.yyyy"),c=Math.round(t.temp.day),o="http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png");return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement("p",null,n),r.a.createElement("img",{src:o,alt:""}),r.a.createElement("p",null,"Temperatura:",r.a.createElement("span",{className:a.temperature},c,"\xb0C")),r.a.createElement("div",null,"Zachmurzenie: "," ",r.a.createElement(x.a,{type:"circle",status:"normal",percent:t.clouds}))))},q=function(e){return e.city},z=function(e){return e.loading},L=function(e){return e.weatherList},B=a(101),M=B.a().shape({city:B.b().required("Wpisz miasto")}),C=a(4),F=function(){var e=W(),t=Object(i.b)(),a=Object(i.c)(q),n=Object(i.c)(z),c=Object(i.c)(L),o=Object(C.d)(),s=Object(C.e)().pathname.replace("/","");r.a.useEffect((function(){s&&(t(y(s)),t(v({value:s,onSuccess:m(s)})))}),[]);var m=function(e){return function(){o.push("/".concat(e))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{initialValues:{city:s},onSubmit:function(e){t(y(e.city)),t(v({value:e.city,onSuccess:m(e.city)}))},validationSchema:M},(function(t){return r.a.createElement(u.b,null,r.a.createElement("label",{htmlFor:"city"},"Miasto:",r.a.createElement(u.a,{id:"city",className:e.cityInput,type:"text",name:"city"}),r.a.createElement("p",{className:e.cityError},t.errors.city)),r.a.createElement("div",null,r.a.createElement("button",{className:e.submitButton,type:"submit"},"POKA\u017b PROGNOZ\u0118 POGODY")))})),r.a.createElement("p",null,"Wybrane miasto: ",a),n&&r.a.createElement(l.a,{className:e.loading,spin:!0}),r.a.createElement("div",{className:e.weatherList},c.map((function(e){return r.a.createElement(N,{key:e.dt.toString(),weather:e})}))))},I=k,P=Object(p.a)({reducer:I}),T=a(93),A=(a(155),function(){return r.a.createElement(i.a,{store:P},r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null),r.a.createElement(F,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.43075e00.chunk.js.map