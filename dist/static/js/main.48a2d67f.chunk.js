(this["webpackJsonpfrontend-hiring-test"]=this["webpackJsonpfrontend-hiring-test"]||[]).push([[0],{24:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),s=a.n(i),n=a(15),r=a.n(n),d=(a(24),a(2)),o=s.a.createContext({mainHeadquarterForecast:null,loadingMainHeadquarterForecast:null,headquartersForecast:null,loadingHeadquartersForecast:!1,citiesForecast:null,loadingCities:!1}),l=a(16),j=a(17),u=a(18),m=a.n(u),h="https://run.mocky.io/v3/",b=function(){function e(t){Object(l.a)(this,e),this.http=m.a.create({baseURL:h})}return Object(j.a)(e,[{key:"headquartersForecast",value:function(){return this.http.get("818d0158-727b-461e-9f76-06734ed7e582").then((function(e){return{places:e.data.places}}))}},{key:"mainHeadquarterExtendedForecast",value:function(){return this.http.get("73c29128-d158-40db-aeae-ea78a0d762b7").then((function(e){return{forecastList:e.data.list,city:e.data.city}}))}},{key:"cities",value:function(){return this.http.get("f8926877-849a-416f-8226-9fd9d9fc5e07").then((function(e){return{citiesForecast:e.data.result}}))}}]),e}();var O=function(e){var t=e.children,a=function(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(null),n=Object(d.a)(s,2),r=n[0],o=n[1],l=new b;return Object(i.useEffect)((function(){c(!0),l.mainHeadquarterExtendedForecast().then((function(e){var t=e.forecastList,a=e.city;c(!1),o({forecastList:t,city:a})})).catch((function(e){console.log(e)}))}),[]),{mainHeadquarterForecast:r,loading:a}}(),s=a.mainHeadquarterForecast,n=a.loading,r=function(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(null),n=Object(d.a)(s,2),r=n[0],o=n[1],l=new b;return Object(i.useEffect)((function(){c(!0),l.headquartersForecast().then((function(e){var t=e.places;c(!1),o({places:t,mainHeadquarter:t.find((function(e){return e.main_headquarter}))})})).catch((function(e){console.log(e)}))}),[]),{headquartersForecast:r,loading:a}}(),l=r.headquartersForecast,j=r.loading,u=function(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(null),n=Object(d.a)(s,2),r=n[0],o=n[1],l=new b;return Object(i.useEffect)((function(){c(!0),l.cities().then((function(e){var t=e.citiesForecast;c(!1),o(t)})).catch((function(e){console.log(e)}))}),[]),{citiesForecast:r,loading:a}}(),m=u.citiesForecast,h=u.loading;return Object(c.jsx)(o.Provider,{value:{mainHeadquarterForecast:s,loadingMainHeadquarterForecast:n,headquartersForecast:l,loadingHeadquartersForecast:j,citiesForecast:m,loadingCities:h},children:t})},g=a(5),f=a.n(g);function x(e){return e&&Math.round(e-273.15)}function w(){var e=f()().hour();return e>=4&&e<12?"Good morning":e>=12&&e<18?"Good afternoon":e>=18&&e<=22?"Good evening":"Good night"}a(44);var v=function(){var e=s.a.useContext(o).headquartersForecast,t=e&&e.mainHeadquarter||{},a=t.image,i=t.name,n=t.main,r=t.wind,d=t.weather,l=d&&d[0].icon;return Object(c.jsx)("div",{id:"widget-header",style:{backgroundImage:"url(".concat(a,")")},children:Object(c.jsxs)("div",{className:"widget-content",children:[Object(c.jsxs)("div",{className:"widget-data-container",children:[Object(c.jsx)("div",{className:"widget-headquarter-container",children:Object(c.jsxs)("div",{className:"widget-headquarter",children:[Object(c.jsx)("i",{className:"fa fa-map-marker"}),i]})}),Object(c.jsxs)("div",{className:"widget-weather-info",children:[Object(c.jsxs)("div",{className:"widget-temperature",children:[x(n&&n.temp),"\xb0 C"]}),Object(c.jsxs)("div",{className:"widget-humidity-wind",children:[Object(c.jsxs)("span",{className:"widget-humidity",children:[Object(c.jsx)("i",{className:"fa fa-circle"})," ",d&&"".concat(n.humidity," %")]}),Object(c.jsxs)("span",{className:"widget-wind",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),r&&"".concat(r.speed," m/s")]})]}),Object(c.jsx)("div",{className:"widget-greetings",children:Object(c.jsxs)("span",{children:[w(),", ",Object(c.jsx)("strong",{children:"Condor!"})]})})]})]}),Object(c.jsx)("div",{className:"widget-icon-container",children:Object(c.jsx)("i",{className:"widget-icon wi wi-day-".concat(l)})})]})})};var N=function(e){var t=e.show,a=e.day,i=e.temperature,s=e.humidity,n=e.windSpeed;return Object(c.jsxs)("div",{className:"widget-carousel-item".concat(t?"":" hidden"),children:[Object(c.jsx)("div",{className:"widget-day",children:a}),Object(c.jsxs)("div",{className:"widget-temperature",children:[i,"\xb0 C"]}),Object(c.jsxs)("div",{className:"widget-carousel-item-humidity-wind",children:[Object(c.jsxs)("span",{className:"widget-humidity",children:[Object(c.jsx)("i",{className:"fa fa-circle"})," ",s," %"]}),Object(c.jsxs)("span",{className:"widget-wind",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),n," m/s"]})]})]})};a(45);var p=function(){var e=s.a.useContext(o).mainHeadquarterForecast,t=s.a.useState(1),a=Object(d.a)(t,2),i=a[0],n=a[1],r=s.a.useState(1),l=Object(d.a)(r,2),j=l[0],u=l[1];return s.a.useEffect((function(){e&&u(Math.ceil(e.forecastList.length/3))}),[e]),Object(c.jsxs)("div",{id:"widget-carousel",children:[Object(c.jsx)("div",{className:"widget-carousel-title",children:"FORECAST EXTENDED"}),Object(c.jsx)("div",{className:"widget-carousel-controls",children:Object(c.jsxs)("div",{className:"widget-carousel-controls-container",children:[Object(c.jsx)("span",{className:1===i?"disabled":null,onClick:function(){return i>1&&m("prev")},children:Object(c.jsx)("i",{className:"fa fa-arrow-left"})}),Object(c.jsx)("span",{className:i===j?"disabled":null,onClick:function(){return i<j&&m("next")},children:Object(c.jsx)("i",{className:"fa fa-arrow-right"})})]})}),Object(c.jsx)("div",{className:"widget-carousel-item-container",children:e&&e.forecastList.map((function(e,t){var a=e.main,s=a.temp,n=a.humidity,r=e.wind.speed,d=e.date,o=x(s),l=f()(d,"YYYY-MM-DD").format("dddd"),j=3*i,u=j-2,m=t+1;return Object(c.jsx)(N,{show:m>=u&&m<=j,day:l,temperature:o,humidity:n,windSpeed:r},t)}))})]});function m(e){"next"===e&&i+1<=j?n(i+1):"prev"===e&&i-1>=1&&n(i-1)}};var y=function(e){var t=e.image,a=e.name,i=e.description,s=e.weatherInfo;return Object(c.jsxs)("div",{className:"widget-card",children:[Object(c.jsxs)("div",{className:"widget-card-main-content",children:[Object(c.jsx)("div",{className:"widget-card-image-container",children:Object(c.jsx)("div",{className:"widget-card-image",style:{backgroundImage:"url(".concat(t,")")}})}),Object(c.jsxs)("div",{className:"widget-card-data",children:[Object(c.jsxs)("div",{className:"widget-headquarter-name",children:[Object(c.jsx)("i",{className:"fa fa-map-marker"}),a]}),Object(c.jsx)("div",{className:"widget-headquarter-description",children:i}),Object(c.jsxs)("div",{className:"widget-headquarter-weather-info",children:[Object(c.jsxs)("span",{className:"widget-temperature",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),s?x(s.temperature):" - ","\xb0 C"]}),Object(c.jsxs)("span",{className:"widget-humidity",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),s?s.humidity:" - "," %"]}),Object(c.jsxs)("span",{className:"widget-wind",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),s?s.windSpeed:" - "," m/s"]})]})]})]}),Object(c.jsx)("div",{className:"widget-icon",children:Object(c.jsx)("i",{className:"widget-icon wi wi-day-".concat(s.icon)})})]})};a(46);var F=function(){var e=s.a.useContext(o).headquartersForecast;return Object(c.jsxs)("div",{id:"widget-favorite",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("strong",{children:"OUR FAVORITE"})," PLACES"]}),Object(c.jsx)("div",{className:"widget-card-container",children:e&&e.places.filter((function(e){return!e.main_headquarter})).map((function(e,t){var a=e.image,i=e.name,s=e.description,n=e.wind.speed,r=e.sys.country,d=e.main,o=d.temp,l=d.humidity,j=e.weather,u="".concat(i," - ").concat(r),m={temperature:o,humidity:l,windSpeed:n,icon:j&&j[0].icon};return Object(c.jsx)(y,{name:u,image:a,description:s,weatherInfo:m},t)}))})]})},q=a(4);a(47);var C=function(){var e=s.a.useContext(o).mainHeadquarterForecast,t=Object(i.useState)(null),a=Object(d.a)(t,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){if(e){var t=e.city;e.forecastList.map((function(e){var a=x(e.main.temp);n?a<=25&&a<=28&&e.main.humidity<n.main.humidity&&r(Object(q.a)(Object(q.a)({city:t},e),{},{main:Object(q.a)(Object(q.a)({},e.main),{},{temp:a})})):r(Object(q.a)(Object(q.a)({city:t},e),{},{main:Object(q.a)(Object(q.a)({},e.main),{},{temp:a})}))}))}}),[e]),Object(c.jsxs)("div",{id:"widget-suggest",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("strong",{children:"HEADQUARTER"})," SUGGESTED"]}),Object(c.jsxs)("div",{className:"widget-suggest-content",children:[Object(c.jsxs)("div",{className:"widget-suggest-weather-data",children:[Object(c.jsxs)("div",{className:"widget-headquarter",children:[Object(c.jsx)("i",{className:"fa fa-map-marker"}),n&&n.city.name," -"," ",n&&n.city.country]}),Object(c.jsxs)("div",{className:"widget-temperature",children:[n?n.main.temp:" - ","\xb0 C"]}),Object(c.jsxs)("div",{className:"widget-suggest-humidity-wind",children:[Object(c.jsxs)("span",{className:"widget-humidity",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),n?n.main.humidity:" - "," %"]}),Object(c.jsxs)("span",{className:"widget-wind",children:[Object(c.jsx)("i",{className:"fa fa-circle"}),n?n.wind.speed:" - "," m/s"]})]})]}),Object(c.jsxs)("div",{className:"widget-suggest-weather-extra",children:[Object(c.jsx)("div",{className:"widget-icon",children:Object(c.jsx)("i",{className:"widget-icon wi wi-day-".concat(n&&n.weather[0].icon)})}),Object(c.jsx)("div",{className:"widget-day",children:n&&f()(n.date,"YYYY-MM-DD").format("dddd")})]})]})]})};var S=function(e){var t=e.image,a=e.name;return Object(c.jsxs)("div",{className:"widget-card",style:{backgroundImage:"url(".concat(t,")")},children:[Object(c.jsx)("div",{className:"widget-city-name-container",children:Object(c.jsx)("div",{className:"widget-city-name",children:a})}),Object(c.jsx)("div",{className:"widget-city-link-container",children:Object(c.jsx)("a",{target:"_blank",href:"https://www.google.com/search?q=".concat(a,"&oq=").concat(a),children:"VISIT PLACE"})})]})};a(48);var E=function(){var e=s.a.useContext(o).citiesForecast;return Object(c.jsxs)("div",{id:"widget-cities",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("strong",{children:"PLACE TO"})," VISIT"]}),Object(c.jsx)("div",{className:"widget-card-container",children:e&&e.map((function(e,t){var a=x(e.main.temp);if(a>=24&&a<=30)return Object(c.jsx)(S,{image:e.image,name:"".concat(e.name," - ").concat(a," ")},t)})).filter((function(e){return e})).slice(0,3)})]})},H=a.p+"static/media/condor.c733be3e.svg";a(49);var k=function(){var e=s.a.useContext(o),t=e.loadingMainHeadquarterForecast,a=e.loadingHeadquartersForecast,i=e.loadingCities,n=s.a.useState(!1),r=Object(d.a)(n,2),l=r[0],j=r[1];return s.a.useEffect((function(){t||a||i||setTimeout((function(){j(!0),document.body.style.overflow="auto"}),1500)}),[t,a,i]),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("div",{className:"loading-splash".concat(l?" hidden":""),children:Object(c.jsx)("img",{src:H})}),Object(c.jsx)("div",{className:"main-widget-container".concat(l?"show":""),children:Object(c.jsxs)(O,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(p,{}),Object(c.jsx)(F,{}),Object(c.jsx)(C,{}),Object(c.jsx)(E,{})]})})]})};a(50);var I=function(){return document.body.style.overflow="hidden",Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(k,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),L()}},[[51,1,2]]]);
//# sourceMappingURL=main.48a2d67f.chunk.js.map