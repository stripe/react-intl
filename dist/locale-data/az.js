!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.az=a())}(this,function(){"use strict";var e=[{locale:"az",pluralRuleFunction:function(e,a){var t=String(e).split("."),n=t[0],r=n.slice(-1),i=n.slice(-2),o=n.slice(-3);return a?1==r||2==r||5==r||7==r||8==r||20==i||50==i||70==i||80==i?"one":3==r||4==r||100==o||200==o||300==o||400==o||500==o||600==o||700==o||800==o||900==o?"few":0==n||6==r||40==i||60==i||90==i?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"İl",relative:{0:"bu il",1:"gələn il","-1":"keçən il"},relativeTime:{future:{one:"{0} il ərzində",other:"{0} il ərzində"},past:{one:"{0} il öncə",other:"{0} il öncə"}}},month:{displayName:"Ay",relative:{0:"bu ay",1:"gələn ay","-1":"keçən ay"},relativeTime:{future:{one:"{0} ay ərzində",other:"{0} ay ərzində"},past:{one:"{0} ay öncə",other:"{0} ay öncə"}}},day:{displayName:"Gün",relative:{0:"bu gün",1:"sabah","-1":"dünən"},relativeTime:{future:{one:"{0} gün ərzində",other:"{0} gün ərzində"},past:{one:"{0} gün öncə",other:"{0} gün öncə"}}},hour:{displayName:"Saat",relativeTime:{future:{one:"{0} saat ərzində",other:"{0} saat ərzində"},past:{one:"{0} saat öncə",other:"{0} saat öncə"}}},minute:{displayName:"Dəqiqə",relativeTime:{future:{one:"{0} dəqiqə ərzində",other:"{0} dəqiqə ərzində"},past:{one:"{0} dəqiqə öncə",other:"{0} dəqiqə öncə"}}},second:{displayName:"Saniyə",relative:{0:"indi"},relativeTime:{future:{one:"{0} saniyə ərzində",other:"{0} saniyə ərzində"},past:{one:"{0} saniyə öncə",other:"{0} saniyə öncə"}}}}},{locale:"az-Cyrl",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"az-Cyrl-AZ",parentLocale:"az-Cyrl"},{locale:"az-Latn",parentLocale:"az"},{locale:"az-Latn-AZ",parentLocale:"az-Latn"}];return e});