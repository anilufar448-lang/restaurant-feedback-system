import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import {
  LayoutDashboard, MessageSquare, AlertTriangle, Users, Building2,
  QrCode, Settings, Menu, X, Search, Filter, Download, Plus, Star,
  TrendingUp, TrendingDown, ChevronRight, ChevronLeft, Check, Clock,
  ArrowUpRight, ArrowDownRight, Smile, Meh, Frown, Copy, Globe,
  BarChart3, Bell, Home, MoreHorizontal, Utensils, Sparkles, Edit2, Trash2,
} from "lucide-react";

/* ---------------------------------------------------------------- */
/* Real QR encoder (Kazuhiko Arase, MIT license), embedded standalone */
/* ---------------------------------------------------------------- */
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(o*r,n*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)};

/* ---------------------------------------------------------------- */
/* THEME                                                             */
/* ---------------------------------------------------------------- */
const T = {
  ink: "#231F1A",
  paper: "#FFFDF9",
  canvas: "#F3EEE4",
  card: "#FFFFFF",
  amber: "#B8791F",
  amberDeep: "#7A4E10",
  amberSoft: "#F3E2C4",
  sage: "#3F6B4E",
  sageSoft: "#DDEBE0",
  rose: "#A1414C",
  roseSoft: "#F3DEDF",
  slate: "#79726A",
  line: "#E6DFD1",
  lineStrong: "#D5CBB5",
};

const FONTS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
`;

/* ---------------------------------------------------------------- */
/* i18n                                                              */
/* ---------------------------------------------------------------- */
const DICT = {
  uz: {
    dashboard: "Boshqaruv", feedback: "Fikrlar", complaints: "Shikoyatlar",
    employees: "Xodimlar", restaurants: "Restoranlar", qr: "QR kodlar",
    settings: "Sozlamalar", more: "Yana", search: "Qidirish...",
    todayFeedback: "Bugungi fikrlar", avgRating: "O'rtacha reyting",
    weeklyRating: "Haftalik reyting", monthlyRating: "Oylik reyting",
    totalComplaints: "Jami shikoyatlar", resolved: "Yechilgan",
    unresolved: "Javobsiz", bestRestaurant: "Eng yaxshi restoran",
    worstRestaurant: "Eng past reytingli", bestEmployee: "Eng yaxshi xodim",
    worstEmployee: "E'tibor talab", exportData: "Eksport", newComplaint: "Yangi shikoyat",
    table: "Stol", rating: "Reyting", issue: "Muammo", allRestaurants: "Barcha restoranlar",
    allEmployees: "Barcha xodimlar", allStatuses: "Barcha statuslar",
    aiInsight: "AI tahlili", dailyReport: "Kunlik hisobot", topIssue: "Asosiy muammo",
    recommendation: "Tavsiya", addEmployee: "Xodim qo'shish", addRestaurant: "Restoran qo'shish",
    generateQr: "QR yaratish", viewAll: "Barchasini ko'rish", status: "Status",
    assignedTo: "Mas'ul", resolution: "Yechim", customerFeedbackTitle: "Fikringiz biz uchun muhim",
    serviceQ: "Xizmat ko'rsatish sifatini qanday baholaysiz?",
    employeeQ: "Xizmat ko'rsatgan xodimni qanday baholaysiz?",
    foodQ: "Taom sifatini qanday baholaysiz?", speedQ: "Xizmat ko'rsatish tezligi qanday edi?",
    cleanQ: "Restoran tozaligini qanday baholaysiz?", priceQ: "Narx va sifat nisbatidan mamnunmisiz?",
    whoServed: "Kim sizga xizmat ko'rsatdi?", skip: "Belgilamayman",
    leaveComment: "Fikringizni qoldiring", overallQ: "Bu tashrifingizdan umuman mamnun bo'ldingizmi?",
    submit: "Yuborish", thanks: "Rahmat! Fikringiz qabul qilindi.", newFeedback: "Yana fikr qoldirish",
    whatWrong: "Muammo nimada edi?", positive: "Ijobiy", neutral: "Neytral", negative: "Salbiy",
    ownerView: "Egasi paneli", customerView: "Mijoz sahifasi", selectTable: "Restoran va stolni tanlang",
    reviews: "sharh", satisfaction: "mamnunlik", topEmployees: "TOP xodimlar", attentionRequired: "E'tibor talab qiladi",
    compareRestaurants: "Restoranlarni solishtirish", filterBy: "Filtrlash", date: "Sana",
    last7: "So'nggi 7 kun", last30: "So'nggi 30 kun", allTime: "Barcha vaqt",
    complaintStatus_new: "Yangi", complaintStatus_review: "Ko'rib chiqilmoqda",
    complaintStatus_progress: "Jarayonda", complaintStatus_resolved: "Yechildi", complaintStatus_closed: "Yopilgan",
    qrManage: "QR boshqaruv", downloadQr: "Yuklab olish", copyLink: "Havolani nusxalash", linkCopied: "Nusxalandi",
    role_owner: "OWNER", role_manager: "MANAGER", trend: "Tendensiya", overview: "Umumiy ko'rinish",
    sentimentBreakdown: "Fikrlar taqsimoti", dailyTrend: "Kunlik dinamika", ratingByRestaurant: "Restoranlar bo'yicha reyting",
    performanceProfile: "Ishlash profili", totalReviews: "Jami sharhlar", note: "Bu — real backendsiz ishlaydigan interaktiv namoyish. Ma'lumotlar saqlanadi va yangilanadi.",
    nameLabel: "Ism", roleLabel: "Lavozim", restaurantLabel: "Restoran", tableCountLabel: "Stollar soni",
    save: "Saqlash", cancel: "Bekor qilish", nameRequired: "Ismni kiriting",
    edit: "Tahrirlash", delete: "O'chirish", confirmDelete: "Rostdan ham o'chirilsinmi?", yes: "Ha", no: "Yo'q", employeesCount: "xodim",
  },
  ru: {
    dashboard: "Панель", feedback: "Отзывы", complaints: "Жалобы", employees: "Сотрудники",
    restaurants: "Рестораны", qr: "QR-коды", settings: "Настройки", more: "Ещё",
    search: "Поиск...", todayFeedback: "Отзывы сегодня", avgRating: "Средний рейтинг",
    weeklyRating: "Недельный рейтинг", monthlyRating: "Месячный рейтинг", totalComplaints: "Всего жалоб",
    resolved: "Решено", unresolved: "Без ответа", bestRestaurant: "Лучший ресторан",
    worstRestaurant: "Худший ресторан", bestEmployee: "Лучший сотрудник", worstEmployee: "Требует внимания",
    exportData: "Экспорт", newComplaint: "Новая жалоба", table: "Стол", rating: "Рейтинг",
    issue: "Проблема", allRestaurants: "Все рестораны", allEmployees: "Все сотрудники",
    allStatuses: "Все статусы", aiInsight: "AI анализ", dailyReport: "Дневной отчёт",
    topIssue: "Главная проблема", recommendation: "Рекомендация", addEmployee: "Добавить сотрудника",
    addRestaurant: "Добавить ресторан", generateQr: "Создать QR", viewAll: "Смотреть все",
    status: "Статус", assignedTo: "Ответственный", resolution: "Решение",
    customerFeedbackTitle: "Ваше мнение важно для нас", serviceQ: "Как вы оцениваете качество обслуживания?",
    employeeQ: "Как вы оцениваете сотрудника?", foodQ: "Как вы оцениваете качество блюд?",
    speedQ: "Какова была скорость обслуживания?", cleanQ: "Как вы оцениваете чистоту ресторана?",
    priceQ: "Довольны ли вы соотношением цены и качества?", whoServed: "Кто вас обслуживал?",
    skip: "Не указывать", leaveComment: "Оставьте свой отзыв", overallQ: "Остались ли вы довольны визитом в целом?",
    submit: "Отправить", thanks: "Спасибо! Ваш отзыв принят.", newFeedback: "Оставить ещё отзыв",
    whatWrong: "В чём была проблема?", positive: "Позитивный", neutral: "Нейтральный", negative: "Негативный",
    ownerView: "Панель владельца", customerView: "Страница клиента", selectTable: "Выберите ресторан и стол",
    reviews: "отзывов", satisfaction: "удовлетворённость", topEmployees: "ТОП сотрудники",
    attentionRequired: "Требует внимания", compareRestaurants: "Сравнить рестораны", filterBy: "Фильтр",
    date: "Дата", last7: "Последние 7 дней", last30: "Последние 30 дней", allTime: "Всё время",
    complaintStatus_new: "Новая", complaintStatus_review: "На рассмотрении", complaintStatus_progress: "В процессе",
    complaintStatus_resolved: "Решена", complaintStatus_closed: "Закрыта", qrManage: "Управление QR",
    downloadQr: "Скачать", copyLink: "Копировать ссылку", linkCopied: "Скопировано",
    role_owner: "ВЛАДЕЛЕЦ", role_manager: "МЕНЕДЖЕР", trend: "Тренд", overview: "Обзор",
    sentimentBreakdown: "Распределение отзывов", dailyTrend: "Дневная динамика",
    ratingByRestaurant: "Рейтинг по ресторанам", performanceProfile: "Профиль работы",
    totalReviews: "Всего отзывов", note: "Это интерактивный прототип без реального сервера. Данные сохраняются и обновляются.",
    nameLabel: "Имя", roleLabel: "Должность", restaurantLabel: "Ресторан", tableCountLabel: "Количество столов",
    save: "Сохранить", cancel: "Отмена", nameRequired: "Введите имя",
    edit: "Изменить", delete: "Удалить", confirmDelete: "Действительно удалить?", yes: "Да", no: "Нет", employeesCount: "сотрудников",
  },
  en: {
    dashboard: "Dashboard", feedback: "Feedback", complaints: "Complaints", employees: "Employees",
    restaurants: "Restaurants", qr: "QR codes", settings: "Settings", more: "More",
    search: "Search...", todayFeedback: "Today's feedback", avgRating: "Average rating",
    weeklyRating: "Weekly rating", monthlyRating: "Monthly rating", totalComplaints: "Total complaints",
    resolved: "Resolved", unresolved: "Unresolved", bestRestaurant: "Best restaurant",
    worstRestaurant: "Lowest rated", bestEmployee: "Best employee", worstEmployee: "Needs attention",
    exportData: "Export", newComplaint: "New complaint", table: "Table", rating: "Rating",
    issue: "Issue", allRestaurants: "All restaurants", allEmployees: "All employees",
    allStatuses: "All statuses", aiInsight: "AI insight", dailyReport: "Daily report",
    topIssue: "Top issue", recommendation: "Recommendation", addEmployee: "Add employee",
    addRestaurant: "Add restaurant", generateQr: "Generate QR", viewAll: "View all",
    status: "Status", assignedTo: "Assigned to", resolution: "Resolution",
    customerFeedbackTitle: "Your feedback matters to us", serviceQ: "How do you rate the service?",
    employeeQ: "How do you rate the staff member?", foodQ: "How do you rate the food?",
    speedQ: "How was the speed of service?", cleanQ: "How do you rate cleanliness?",
    priceQ: "Are you satisfied with the price to quality ratio?", whoServed: "Who served you?",
    skip: "Skip", leaveComment: "Leave your comment", overallQ: "Overall, were you satisfied with your visit?",
    submit: "Submit", thanks: "Thank you! Your feedback was received.", newFeedback: "Leave another",
    whatWrong: "What went wrong?", positive: "Positive", neutral: "Neutral", negative: "Negative",
    ownerView: "Owner panel", customerView: "Customer page", selectTable: "Select restaurant and table",
    reviews: "reviews", satisfaction: "satisfaction", topEmployees: "TOP employees",
    attentionRequired: "Attention required", compareRestaurants: "Compare restaurants", filterBy: "Filter",
    date: "Date", last7: "Last 7 days", last30: "Last 30 days", allTime: "All time",
    complaintStatus_new: "New", complaintStatus_review: "In review", complaintStatus_progress: "In progress",
    complaintStatus_resolved: "Resolved", complaintStatus_closed: "Closed", qrManage: "QR management",
    downloadQr: "Download", copyLink: "Copy link", linkCopied: "Copied", role_owner: "OWNER",
    role_manager: "MANAGER", trend: "Trend", overview: "Overview", sentimentBreakdown: "Sentiment breakdown",
    dailyTrend: "Daily trend", ratingByRestaurant: "Rating by restaurant", performanceProfile: "Performance profile",
    totalReviews: "Total reviews", note: "This is an interactive prototype with no real server. Data persists and updates live.",
    nameLabel: "Name", roleLabel: "Role", restaurantLabel: "Restaurant", tableCountLabel: "Number of tables",
    save: "Save", cancel: "Cancel", nameRequired: "Enter a name",
    edit: "Edit", delete: "Delete", confirmDelete: "Delete this?", yes: "Yes", no: "No", employeesCount: "employees",
  },
};

/* ---------------------------------------------------------------- */
/* DEMO DATA GENERATION                                              */
/* ---------------------------------------------------------------- */
const RESTAURANTS = [
  { id: "r1", name: "Bahor Osh Markazi", tables: 24 },
  { id: "r2", name: "Chorsu Grill House", tables: 30 },
  { id: "r3", name: "Registon Terrace", tables: 20 },
];

const NAMES = ["Ali","Vali","Sardor","Aziz","Madina","Dilnoza","Jasur","Kamola",
  "Otabek","Nilufar","Shoxrux","Gulnora","Bekzod","Zarina","Ulug'bek","Sevara",
  "Farrux","Malika","Islom","Nodira","Sherzod","Umida","Javlon","Feruza"];
const ROLES = ["Waiter","Waiter","Waiter","Host","Barista","Chef Assist."];
const ISSUES = ["Xizmat sekin bo'ldi","Xodim muomalasi yoqmadi","Ovqat sifati","Ovqat kech keldi","Tozalik","Narx","Buyurtma xatosi","Boshqa"];
const POS_COMMENTS = ["Ajoyib xizmat, rahmat!","Ovqat juda mazali edi.","Xodimlar juda samimiy.","Hammasi a'lo darajada.","Yana albatta qaytamiz.","Tez va sifatli xizmat.","Interyer juda chiroyli."];
const NEU_COMMENTS = ["Yaxshi, lekin yaxshilash mumkin.","O'rtacha tajriba.","Odatiy xizmat.","Ba'zi narsalar yaxshi edi."];
const NEG_COMMENTS = ["Buyurtmamiz juda kech keldi.","Xodim beparvo munosabatda bo'ldi.","Ovqat sovuq keldi.","Stol tozalanmagan edi.","Narxlar biroz qimmat.","Kutish vaqti uzoq bo'ldi."];

function seedRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildSeedData() {
  const rnd = seedRandom(42);
  const employees = [];
  RESTAURANTS.forEach((r, ri) => {
    for (let i = 0; i < 6; i++) {
      const name = NAMES[(ri * 6 + i) % NAMES.length];
      employees.push({
        id: `e-${r.id}-${i}`,
        name,
        role: ROLES[i % ROLES.length],
        restaurantId: r.id,
      });
    }
  });

  const feedback = [];
  const days = 30;
  let fid = 0;
  for (let d = days; d >= 0; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    const perDay = 3 + Math.floor(rnd() * 6);
    for (let i = 0; i < perDay; i++) {
      const r = RESTAURANTS[Math.floor(rnd() * RESTAURANTS.length)];
      const empPool = employees.filter((e) => e.restaurantId === r.id);
      const emp = rnd() > 0.08 ? empPool[Math.floor(rnd() * empPool.length)] : null;
      const bias = r.id === "r3" ? 0.9 : r.id === "r2" ? 0.55 : 0.72;
      const base = () => {
        const x = rnd();
        if (x < bias) return 4 + Math.round(rnd());
        if (x < bias + 0.2) return 3;
        return 1 + Math.floor(rnd() * 2);
      };
      const service = base(), foodR = base(), speed = base(), clean = base(), price = base();
      const empRating = emp ? Math.min(5, Math.max(1, base())) : null;
      const vals = [service, foodR, speed, clean, price, empRating].filter((v) => v !== null);
      const overall = +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
      let sentiment = "neutral";
      let comment = "";
      let issue = null;
      if (overall >= 4.2) { sentiment = "positive"; comment = POS_COMMENTS[Math.floor(rnd() * POS_COMMENTS.length)]; }
      else if (overall >= 3.2) { sentiment = "neutral"; comment = rnd() > 0.4 ? NEU_COMMENTS[Math.floor(rnd() * NEU_COMMENTS.length)] : ""; }
      else { sentiment = "negative"; comment = NEG_COMMENTS[Math.floor(rnd() * NEG_COMMENTS.length)]; issue = ISSUES[Math.floor(rnd() * ISSUES.length)]; }

      fid++;
      feedback.push({
        id: `f-${fid}`,
        restaurantId: r.id,
        tableId: 1 + Math.floor(rnd() * r.tables),
        employeeId: emp ? emp.id : null,
        service, food: foodR, speed, cleanliness: clean, price,
        employeeRating: empRating,
        overall,
        comment,
        sentiment,
        issue,
        satisfaction: overall >= 4.2 ? "happy" : overall >= 3.2 ? "meh" : "sad",
        createdAt: date.toISOString(),
      });
    }
  }

  const complaints = {};
  feedback.filter((f) => f.overall <= 3).forEach((f) => {
    const statuses = ["new", "review", "progress", "resolved", "closed"];
    const w = [0.15, 0.15, 0.15, 0.35, 0.2];
    let x = rnd(), acc = 0, chosen = "new";
    for (let i = 0; i < statuses.length; i++) { acc += w[i]; if (x <= acc) { chosen = statuses[i]; break; } }
    complaints[f.id] = {
      feedbackId: f.id,
      status: chosen,
      assignedTo: employees[Math.floor(rnd() * employees.length)].name,
      note: chosen === "resolved" || chosen === "closed" ? "Mijoz bilan bog'lanildi, muammo hal qilindi." : "",
      updatedAt: f.createdAt,
    };
  });

  const users = [{
    id: "u-admin", username: OWNER_CREDENTIALS.username, password: OWNER_CREDENTIALS.password,
    role: "admin", permissions: Object.fromEntries(PERMISSION_TABS.map((k) => [k, true])),
  }];

  return { employees, feedback, complaints, restaurants: RESTAURANTS, users };
}

/* ---------------------------------------------------------------- */
/* STORAGE HELPERS — Supabase orqali (barcha qurilmalarda umumiy)     */
/* ---------------------------------------------------------------- */
const STORE_KEY = "rfs-data-v1";
const AUTH_SESSION_KEY = "rfs-auth-v1";

/* Supabase loyihangiz ma'lumotlari */
const SUPABASE_URL = "https://ludrtyuklmxslptksidu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_1OgsBL-caVxZ5dN1GxpH8w_jddisAxG";

/* Egasi paneliga kirish uchun login va parol. Faqat bazada hali "users" bo'lmasa, birinchi marta shu qiymatlar bilan admin yaratiladi. */
const OWNER_CREDENTIALS = {
  username: "admin",
  password: "restoran2026",
};

const PERMISSION_TABS = ["dashboard", "feedback", "complaints", "employees", "restaurants", "qr"];
const MAX_USERS = 5;

function ensureUsers(parsed) {
  if (!parsed.users || !parsed.users.length) {
    parsed.users = [{
      id: "u-admin", username: OWNER_CREDENTIALS.username, password: OWNER_CREDENTIALS.password,
      role: "admin", permissions: Object.fromEntries(PERMISSION_TABS.map((k) => [k, true])),
    }];
  }
  return parsed;
}

async function loadData() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/app_data?id=eq.main&select=data`, {
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    });
    if (res.ok) {
      const rows = await res.json();
      if (rows && rows[0] && rows[0].data) {
        const parsed = ensureUsers(rows[0].data);
        saveData(parsed);
        return parsed;
      }
    }
  } catch (e) { /* tarmoq xatosi yoki jadval hali yo'q */ }
  const seed = buildSeedData();
  saveData(seed);
  return seed;
}

async function saveData(data) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/app_data`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({ id: "main", data, updated_at: new Date().toISOString() }),
    });
  } catch (e) { /* tarmoq xatosi */ }
}

/* ---------------------------------------------------------------- */
/* SMALL HELPERS                                                     */
/* ---------------------------------------------------------------- */
const fmt1 = (n) => (Number.isFinite(n) ? n.toFixed(2) : "—");
const daysAgo = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return d; };
const isWithinDays = (iso, n) => new Date(iso) >= daysAgo(n);
const sameDay = (iso, d) => new Date(iso).toDateString() === d.toDateString();

/* ---------------------------------------------------------------- */
/* LOGIN SCREEN (owner panel uchun)                                   */
/* ---------------------------------------------------------------- */
const LOGIN_TXT = {
  uz: { title: "Buharski Bulvar", subtitle: "Kirish uchun login va parolni kiriting", username: "Login", password: "Parol", submit: "Kirish", error: "Login yoki parol noto'g'ri", back: "← Fikr qoldirish sahifasiga qaytish" },
  ru: { title: "Buharski Bulvar", subtitle: "Введите логин и пароль для входа", username: "Логин", password: "Пароль", submit: "Войти", error: "Неверный логин или пароль", back: "← Вернуться на страницу отзывов" },
  en: { title: "Buharski Bulvar", subtitle: "Enter your login and password", username: "Username", password: "Password", submit: "Sign in", error: "Incorrect username or password", back: "← Back to feedback page" },
};

function LoginScreen({ lang, users, onSuccess }) {
  const lt = LOGIN_TXT[lang] || LOGIN_TXT.uz;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const match = (users || []).find((u) => u.username === username && u.password === password);
    if (match) {
      try { sessionStorage.setItem(AUTH_SESSION_KEY, match.id); } catch (e) {}
      setError("");
      onSuccess(match);
    } else {
      setError(lt.error);
    }
  };

  return (
    <div style={{ minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", fontFamily: "'Inter', sans-serif", padding: 20 }}>
      <style>{FONTS_CSS}</style>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 340, background: T.paper, border: `1px solid ${T.line}`, borderRadius: 16, padding: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: T.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={15} color={T.amber} />
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 16, color: T.ink }}>{lt.title}</div>
        </div>
        <div style={{ fontSize: 12.5, color: T.slate, marginBottom: 20 }}>{lt.subtitle}</div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: T.slate, display: "block", marginBottom: 6 }}>{lt.username}</label>
          <input
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${T.line}`, fontSize: 14, boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: T.slate, display: "block", marginBottom: 6 }}>{lt.password}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${T.line}`, fontSize: 14, boxSizing: "border-box" }}
          />
        </div>

        {error && <div style={{ color: "#c0392b", fontSize: 12.5, marginBottom: 10 }}>{error}</div>}

        <button type="submit" style={{ width: "100%", padding: "11px 0", borderRadius: 9, border: "none", background: T.ink, color: T.paper, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 6 }}>
          {lt.submit}
        </button>
      </form>
    </div>
  );
}

function StarRow({ value, onChange, size = 22 }) {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}
          aria-label={`${n} star`}
        >
          <Star
            size={size}
            color={n <= value ? T.amber : T.lineStrong}
            fill={n <= value ? T.amber : "none"}
            strokeWidth={1.6}
          />
        </button>
      ))}
    </div>
  );
}

function Pill({ children, tone = "neutral" }) {
  const tones = {
    neutral: { bg: T.canvas, color: T.slate },
    positive: { bg: T.sageSoft, color: T.sage },
    negative: { bg: T.roseSoft, color: T.rose },
    amber: { bg: T.amberSoft, color: T.amberDeep },
  };
  const s = tones[tone] || tones.neutral;
  return (
    <span style={{
      background: s.bg, color: s.color, fontSize: 12, fontWeight: 600,
      padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

const STATUS_TONE = { new: "negative", review: "amber", progress: "amber", resolved: "positive", closed: "neutral" };
const SENT_COLOR = { positive: T.sage, neutral: "#B8A968", negative: T.rose };

/* ---------------------------------------------------------------- */
/* CUSTOMER FEEDBACK FLOW                                            */
/* ---------------------------------------------------------------- */
function CustomerFlow({ t, restaurants, employees, restaurantId, tableId, onSubmit, onSwitchToOwner }) {
  const [step, setStep] = useState(0);
  const [ratings, setRatings] = useState({ service: 0, food: 0, speed: 0, cleanliness: 0, price: 0 });
  const [empId, setEmpId] = useState(null);
  const [empRating, setEmpRating] = useState(0);
  const [comment, setComment] = useState("");
  const [satisfaction, setSatisfaction] = useState(null);
  const [issue, setIssue] = useState(null);
  const [done, setDone] = useState(false);

  const restaurant = restaurants.find((r) => r.id === restaurantId) || restaurants[0];
  const restEmployees = employees.filter((e) => e.restaurantId === restaurant.id);

  const overallSoFar = () => {
    const vals = [ratings.service, ratings.food, ratings.speed, ratings.cleanliness, ratings.price, empRating]
      .filter((v) => v > 0);
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 5;
  };
  const isNegative = overallSoFar() > 0 && overallSoFar() <= 3;

  const steps = ["ratings", "employee", "comment", issueNeeded() ? "issue" : null, "done"].filter(Boolean);
  function issueNeeded() { return isNegative; }

  const canContinueRatings = ratings.service && ratings.food && ratings.speed && ratings.cleanliness && ratings.price;

  const questions = [
    ["service", t.serviceQ], ["food", t.foodQ], ["speed", t.speedQ],
    ["cleanliness", t.cleanQ], ["price", t.priceQ],
  ];

  const submit = () => {
    const vals = [ratings.service, ratings.food, ratings.speed, ratings.cleanliness, ratings.price, empRating || null]
      .filter((v) => v !== null && v > 0);
    const overall = +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
    const sentiment = overall >= 4.2 ? "positive" : overall >= 3.2 ? "neutral" : "negative";
    onSubmit({
      id: `f-${Date.now()}`,
      restaurantId: restaurant.id,
      tableId,
      employeeId: empId,
      ...ratings,
      employeeRating: empRating || null,
      overall,
      comment,
      sentiment,
      issue: sentiment === "negative" ? issue : null,
      satisfaction: satisfaction || (overall >= 4.2 ? "happy" : overall >= 3.2 ? "meh" : "sad"),
      createdAt: new Date().toISOString(),
    });
    setDone(true);
  };

  const wrap = { minHeight: 560, display: "flex", flexDirection: "column", background: T.paper };
  const header = (
    <div style={{ padding: "20px 20px 14px", borderBottom: `1px solid ${T.line}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: T.amberDeep, fontSize: 13, fontWeight: 600 }}>
        <Utensils size={15} /> {restaurant.name}
      </div>
      <div style={{ color: T.slate, fontSize: 12, marginTop: 2 }}>{t.table} {tableId}</div>
    </div>
  );

  if (done) {
    return (
      <div style={wrap}>
        {header}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.sageSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
            <Check size={30} color={T.sage} />
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, color: T.ink, marginBottom: 8 }}>{t.thanks}</div>
          <button onClick={() => {
            setStep(0); setRatings({ service: 0, food: 0, speed: 0, cleanliness: 0, price: 0 });
            setEmpId(null); setEmpRating(0); setComment(""); setSatisfaction(null); setIssue(null); setDone(false);
          }} style={{ marginTop: 20, padding: "10px 20px", borderRadius: 10, border: "none", background: T.ink, color: T.paper, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            {t.newFeedback}
          </button>
        
        </div>
      </div>
    );
  }

  const stepName = steps[step];

  return (
    <div style={wrap}>
      {header}
      <div style={{ display: "flex", gap: 4, padding: "12px 20px 0" }}>
        {steps.slice(0, -1).map((s, i) => (
          <div key={s} style={{ flex: 1, height: 3, borderRadius: 3, background: i <= step ? T.amber : T.line }} />
        ))}
      </div>
      <div style={{ flex: 1, padding: "20px 20px 12px", overflowY: "auto" }}>
        {stepName === "ratings" && (
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 500, color: T.ink, marginBottom: 16 }}>
              {t.customerFeedbackTitle}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {questions.map(([key, label]) => (
                <div key={key}>
                  <div style={{ fontSize: 14, color: T.ink, marginBottom: 8 }}>{label}</div>
                  <StarRow value={ratings[key]} onChange={(v) => setRatings((r) => ({ ...r, [key]: v }))} />
                </div>
              ))}
            </div>
          </div>
        )}
        {stepName === "employee" && (
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 500, color: T.ink, marginBottom: 16 }}>{t.whoServed}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
              {restEmployees.map((e) => (
                <button key={e.id} onClick={() => setEmpId(e.id === empId ? null : e.id)}
                  style={{
                    padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13.5, fontWeight: 500,
                    border: `1px solid ${empId === e.id ? T.amber : T.line}`,
                    background: empId === e.id ? T.amberSoft : T.card, color: empId === e.id ? T.amberDeep : T.ink,
                  }}>{e.name}</button>
              ))}
              <button onClick={() => setEmpId(null)} style={{ padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13.5, border: `1px dashed ${T.lineStrong}`, background: "none", color: T.slate }}>
                {t.skip}
              </button>
            </div>
            {empId && (
              <div>
                <div style={{ fontSize: 14, color: T.ink, marginBottom: 8 }}>{t.employeeQ}</div>
                <StarRow value={empRating} onChange={setEmpRating} />
              </div>
            )}
          </div>
        )}
        {stepName === "comment" && (
          <div>
            <div style={{ fontSize: 14, color: T.ink, marginBottom: 8 }}>{t.overallQ}</div>
            <div style={{ display: "flex", gap: 14, marginBottom: 22 }}>
              {[["happy", Smile, T.sage], ["meh", Meh, "#B8A968"], ["sad", Frown, T.rose]].map(([key, Icon, color]) => (
                <button key={key} onClick={() => setSatisfaction(key)}
                  style={{
                    width: 56, height: 56, borderRadius: "50%", cursor: "pointer",
                    border: `2px solid ${satisfaction === key ? color : T.line}`,
                    background: satisfaction === key ? `${color}22` : T.card,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                  <Icon size={26} color={color} />
                </button>
              ))}
            </div>
            <div style={{ fontSize: 14, color: T.ink, marginBottom: 8 }}>{t.leaveComment}</div>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={4}
              style={{ width: "100%", borderRadius: 10, border: `1px solid ${T.line}`, padding: 12, fontSize: 14, fontFamily: "inherit", resize: "none", boxSizing: "border-box", background: T.card }} />
          </div>
        )}
        {stepName === "issue" && (
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 500, color: T.ink, marginBottom: 16 }}>{t.whatWrong}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {ISSUES.map((i) => (
                <button key={i} onClick={() => setIssue(i === issue ? null : i)}
                  style={{
                    padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13.5,
                    border: `1px solid ${issue === i ? T.rose : T.line}`,
                    background: issue === i ? T.roseSoft : T.card, color: issue === i ? T.rose : T.ink,
                  }}>{i}</button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "14px 20px 22px", borderTop: `1px solid ${T.line}`, display: "flex", gap: 10 }}>
        {step > 0 && (
          <button onClick={() => setStep((s) => s - 1)} style={{ padding: "12px 16px", borderRadius: 10, border: `1px solid ${T.line}`, background: T.card, cursor: "pointer" }}>
            <ChevronLeft size={18} color={T.ink} />
          </button>
        )}
        <button
          disabled={stepName === "ratings" && !canContinueRatings}
          onClick={() => {
            if (step === steps.length - 2) submit();
            else setStep((s) => s + 1);
          }}
          style={{
            flex: 1, padding: "12px 16px", borderRadius: 10, border: "none", cursor: "pointer",
            background: (stepName === "ratings" && !canContinueRatings) ? T.line : T.ink,
            color: (stepName === "ratings" && !canContinueRatings) ? T.slate : T.paper,
            fontSize: 15, fontWeight: 600,
          }}>
          {step === steps.length - 2 ? t.submit : "→"}
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* OWNER DASHBOARD — building blocks                                 */
/* ---------------------------------------------------------------- */
function Kpi({ icon: Icon, label, value, sub, tone = "neutral" }) {
  const toneColor = tone === "positive" ? T.sage : tone === "negative" ? T.rose : T.amberDeep;
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "16px 18px", minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: T.amberSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={15} color={T.amberDeep} />
        </div>
        <div style={{ fontSize: 12.5, color: T.slate, fontWeight: 500 }}>{label}</div>
      </div>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 500, color: T.ink }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: toneColor, marginTop: 4, fontWeight: 600 }}>{sub}</div>}
    </div>
  );
}

function ChartCard({ title, children, height = 240 }) {
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "18px 18px 8px" }}>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: T.ink, marginBottom: 12 }}>{title}</div>
      <div style={{ height }}>{children}</div>
    </div>
  );
}

function EmployeeCard({ e, stats, t }) {
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: T.ink }}>{e.name}</div>
          <div style={{ fontSize: 12, color: T.slate }}>{e.role}</div>
        </div>
        <Pill tone={stats.avg >= 4.3 ? "positive" : stats.avg < 3.6 ? "negative" : "amber"}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={11} fill="currentColor" />{fmt1(stats.avg)}</span>
        </Pill>
      </div>
      <div style={{ fontSize: 12, color: T.slate, marginBottom: 8 }}>{stats.count} {t.reviews}</div>
      <div style={{ display: "flex", gap: 6, height: 6, borderRadius: 4, overflow: "hidden", background: T.canvas }}>
        <div style={{ width: `${(stats.pos / Math.max(1, stats.count)) * 100}%`, background: T.sage }} />
        <div style={{ width: `${(stats.neu / Math.max(1, stats.count)) * 100}%`, background: "#D9CE9A" }} />
        <div style={{ width: `${(stats.neg / Math.max(1, stats.count)) * 100}%`, background: T.rose }} />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* MAIN APP                                                          */
/* ---------------------------------------------------------------- */
/* Parse "/restId/table-N" from the URL so a scanned QR opens straight
   into the customer feedback flow for that table. */
function parseUrlTarget() {
  if (typeof window === "undefined") return null;
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (parts.length >= 2) {
    const restId = decodeURIComponent(parts[0]);
    const tableMatch = parts[1].match(/^table-(\d+)$/);
    if (tableMatch) {
      return { restId, table: parseInt(tableMatch[1], 10) };
    }
  }
  return null;
}

export default function App() {
  const urlTarget = useMemo(() => parseUrlTarget(), []);
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("uz");
  const [mode, setMode] = useState(urlTarget ? "customer" : "owner"); // owner | customer
  const [custRestaurant, setCustRestaurant] = useState(urlTarget ? urlTarget.restId : "r1");
  const [custTable, setCustTable] = useState(urlTarget ? urlTarget.table : 7);
  const [tab, setTab] = useState("dashboard");
  const [authUserId, setAuthUserId] = useState(() => {
    try { return sessionStorage.getItem(AUTH_SESSION_KEY) || null; } catch (e) { return null; }
  });
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 860 : false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // filters
  const [fRestaurant, setFRestaurant] = useState("all");
  const [fEmployee, setFEmployee] = useState("all");
  const [fRange, setFRange] = useState(30);
  const [fSentiment, setFSentiment] = useState("all");
  const [fComplaintStatus, setFComplaintStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const t = DICT[lang];

  useEffect(() => {
    loadData().then(setData);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 860);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const persist = useCallback((next) => {
    setData(next);
    saveData(next);
  }, []);

  const addFeedback = useCallback((fb) => {
    setData((prev) => {
      const next = { ...prev, feedback: [...prev.feedback, fb] };
      if (fb.overall <= 3) {
        next.complaints = { ...prev.complaints, [fb.id]: {
          feedbackId: fb.id, status: "new", assignedTo: null, note: "", updatedAt: fb.createdAt,
        } };
      }
      saveData(next);
      return next;
    });
  }, []);

  const addRestaurant = useCallback((name, tables) => {
    setData((prev) => {
      const id = `r-${Date.now()}`;
      const next = { ...prev, restaurants: [...prev.restaurants, { id, name, tables: tables || 20 }] };
      saveData(next);
      return next;
    });
  }, []);

  const addEmployee = useCallback((name, role, restaurantId) => {
    setData((prev) => {
      const id = `e-${Date.now()}`;
      const next = { ...prev, employees: [...prev.employees, { id, name, role, restaurantId }] };
      saveData(next);
      return next;
    });
  }, []);

  const editRestaurant = useCallback((id, patch) => {
    setData((prev) => {
      const next = { ...prev, restaurants: prev.restaurants.map((r) => (r.id === id ? { ...r, ...patch } : r)) };
      saveData(next);
      return next;
    });
  }, []);

  const deleteRestaurant = useCallback((id) => {
    setData((prev) => {
      const next = {
        ...prev,
        restaurants: prev.restaurants.filter((r) => r.id !== id),
        employees: prev.employees.filter((e) => e.restaurantId !== id),
      };
      saveData(next);
      return next;
    });
  }, []);

  const editEmployee = useCallback((id, patch) => {
    setData((prev) => {
      const next = { ...prev, employees: prev.employees.map((e) => (e.id === id ? { ...e, ...patch } : e)) };
      saveData(next);
      return next;
    });
  }, []);

  const deleteEmployee = useCallback((id) => {
    setData((prev) => {
      const next = { ...prev, employees: prev.employees.filter((e) => e.id !== id) };
      saveData(next);
      return next;
    });
  }, []);

  const updateComplaint = useCallback((feedbackId, patch) => {
    setData((prev) => {
      const next = {
        ...prev,
        complaints: {
          ...prev.complaints,
          [feedbackId]: { ...prev.complaints[feedbackId], ...patch, updatedAt: new Date().toISOString() },
        },
      };
      saveData(next);
      return next;
    });
  }, []);

  const clearFeedback = useCallback(() => {
    setData((prev) => {
      const next = { ...prev, feedback: [], complaints: {} };
      saveData(next);
      return next;
    });
  }, []);

  const addUser = useCallback((username, password, permissions) => {
    setData((prev) => {
      if ((prev.users || []).length >= MAX_USERS) return prev;
      const id = `u-${Date.now()}`;
      const next = { ...prev, users: [...(prev.users || []), { id, username, password, role: "staff", permissions }] };
      saveData(next);
      return next;
    });
  }, []);

  const editUser = useCallback((id, patch) => {
    setData((prev) => {
      const next = { ...prev, users: (prev.users || []).map((u) => (u.id === id ? { ...u, ...patch } : u)) };
      saveData(next);
      return next;
    });
  }, []);

  const deleteUser = useCallback((id) => {
    setData((prev) => {
      const next = { ...prev, users: (prev.users || []).filter((u) => u.id !== id) };
      saveData(next);
      return next;
    });
  }, []);

  if (!data) {
    return <div style={{ padding: 60, textAlign: "center", color: T.slate, fontFamily: "Inter, sans-serif" }}>Loading…</div>;
  }

  const currentUser = (data.users || []).find((u) => u.id === authUserId) || null;
  const isAuthed = !!currentUser;

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif", color: T.ink, minHeight: 600,
      backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover",
      backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed",
    }}>
      <style>{FONTS_CSS}</style>
      {mode === "customer" ? (
        <div style={{ maxWidth: 480, margin: "0 auto", background: T.paper, minHeight: 600, boxShadow: `0 0 0 1px ${T.line}` }}>
          <div style={{ padding: "10px 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", background: T.ink, gap: 8 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {["uz", "ru", "en"].map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ padding: "3px 6px", borderRadius: 6, border: `1px solid ${lang === l ? T.amber : "rgba(255,255,255,0.25)"}`, background: lang === l ? T.amberSoft : "transparent", color: lang === l ? T.amberDeep : T.paper, fontSize: 10.5, fontWeight: 700, cursor: "pointer", textTransform: "uppercase" }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <CustomerFlow
            t={t}
            restaurants={data.restaurants}
            employees={data.employees}
            restaurantId={custRestaurant}
            tableId={custTable}
            onSubmit={addFeedback}
            onSwitchToOwner={() => setMode("owner")}
          />
        </div>
      ) : !isAuthed ? (
        <LoginScreen lang={lang} users={data.users} onSuccess={(user) => setAuthUserId(user.id)} />
      ) : (
        <OwnerShell
          t={t} lang={lang} setLang={setLang} data={data} tab={tab} setTab={setTab}
          isMobile={isMobile} moreOpen={moreOpen} setMoreOpen={setMoreOpen}
          sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
          fRestaurant={fRestaurant} setFRestaurant={setFRestaurant}
          fEmployee={fEmployee} setFEmployee={setFEmployee}
          fRange={fRange} setFRange={setFRange}
          fSentiment={fSentiment} setFSentiment={setFSentiment}
          fComplaintStatus={fComplaintStatus} setFComplaintStatus={setFComplaintStatus}
          search={search} setSearch={setSearch}
          updateComplaint={updateComplaint}
          addRestaurant={addRestaurant}
          addEmployee={addEmployee}
          editRestaurant={editRestaurant}
          deleteRestaurant={deleteRestaurant}
          editEmployee={editEmployee}
          deleteEmployee={deleteEmployee}
          clearFeedback={clearFeedback}
          currentUser={currentUser}
          addUser={addUser}
          editUser={editUser}
          deleteUser={deleteUser}
          onSwitchToCustomer={() => setMode("customer")}
          onLogout={() => {
            try { sessionStorage.removeItem(AUTH_SESSION_KEY); } catch (e) {}
            setAuthUserId(null);
          }}
          copiedId={copiedId} setCopiedId={setCopiedId}
        />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* OWNER SHELL (nav + routing)                                       */
/* ---------------------------------------------------------------- */
function OwnerShell(props) {
  const { t, lang, setLang, data, tab, setTab, isMobile, moreOpen, setMoreOpen,
    sidebarOpen, setSidebarOpen, onSwitchToCustomer, onLogout, currentUser } = props;

  const ALL_NAV = [
    { id: "dashboard", label: t.dashboard, icon: LayoutDashboard },
    { id: "feedback", label: t.feedback, icon: MessageSquare },
    { id: "complaints", label: t.complaints, icon: AlertTriangle },
    { id: "employees", label: t.employees, icon: Users },
    { id: "restaurants", label: t.restaurants, icon: Building2 },
    { id: "qr", label: t.qr, icon: QrCode },
    { id: "settings", label: t.settings, icon: Settings },
  ];
  const canSee = (id) => id === "settings" || !currentUser || currentUser.role === "admin" || (currentUser.permissions && currentUser.permissions[id]);
  const NAV = ALL_NAV.filter((n) => canSee(n.id));
  const mobilePrimary = ["dashboard", "feedback", "complaints", "employees"].filter((id) => canSee(id));
  const mobileMore = NAV.filter((n) => !mobilePrimary.includes(n.id));

  return (
    <div style={{ display: "flex", minHeight: 600 }}>
      {!isMobile && (
        <div style={{ width: 220, borderRight: `1px solid ${T.line}`, background: T.paper, padding: "20px 14px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 8px 22px" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: T.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={15} color={T.amber} />
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 15, color: T.ink }}>TableTalk</div>
          </div>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => setTab(n.id)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 10px",
                borderRadius: 9, border: "none", cursor: "pointer", marginBottom: 2, textAlign: "left",
                background: tab === n.id ? T.amberSoft : "transparent",
                color: tab === n.id ? T.amberDeep : T.slate, fontSize: 13.5, fontWeight: 500,
              }}>
              <n.icon size={16} /> {n.label}
            </button>
          ))}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${T.line}` }}>
            <button onClick={onSwitchToCustomer} style={{ width: "100%", textAlign: "left", padding: "9px 10px", borderRadius: 9, border: "none", background: "transparent", color: T.slate, fontSize: 12.5, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <QrCode size={14} /> {t.customerView}
            </button>
            {onLogout && (
              <button onClick={onLogout} style={{ width: "100%", textAlign: "left", padding: "9px 10px", borderRadius: 9, border: "none", background: "transparent", color: T.slate, fontSize: 12.5, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <X size={14} /> {lang === "ru" ? "Выйти" : lang === "en" ? "Log out" : "Chiqish"}
              </button>
            )}
          </div>
        </div>
      )}

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar t={t} lang={lang} setLang={setLang} isMobile={isMobile} data={data} tab={tab} navLabel={NAV.find(n=>n.id===tab)?.label} />
        <div style={{ flex: 1, padding: isMobile ? "14px 14px 90px" : "22px 26px 40px", overflow: "auto" }}>
          {tab === "dashboard" && <DashboardTab t={t} data={data} isMobile={isMobile} />}
          {tab === "feedback" && <FeedbackTab t={t} data={data} isMobile={isMobile} {...props} />}
          {tab === "complaints" && <ComplaintsTab t={t} data={data} isMobile={isMobile} {...props} />}
          {tab === "employees" && <EmployeesTab t={t} data={data} isMobile={isMobile} {...props} />}
          {tab === "restaurants" && <RestaurantsTab t={t} data={data} isMobile={isMobile} {...props} />}
          {tab === "qr" && <QrTab t={t} data={data} {...props} />}
          {tab === "settings" && <SettingsTab t={t} lang={lang} setLang={setLang} currentUser={currentUser} data={data} {...props} />}
        </div>
      </div>

      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: T.paper, borderTop: `1px solid ${T.line}`, display: "flex", padding: "6px 4px 10px", zIndex: 20 }}>
          {mobilePrimary.map((id) => {
            const n = NAV.find((x) => x.id === id);
            return (
              <button key={id} onClick={() => { setTab(id); setMoreOpen(false); }}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: "6px 0", color: tab === id ? T.amberDeep : T.slate }}>
                <n.icon size={19} />
                <span style={{ fontSize: 10, fontWeight: 500 }}>{n.label}</span>
              </button>
            );
          })}
          <button onClick={() => setMoreOpen((o) => !o)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: "6px 0", color: mobileMore.some(n=>n.id===tab) ? T.amberDeep : T.slate }}>
            <MoreHorizontal size={19} />
            <span style={{ fontSize: 10, fontWeight: 500 }}>{t.more}</span>
          </button>
        </div>
      )}

      {isMobile && moreOpen && (
        <div onClick={() => setMoreOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(35,31,26,0.4)", zIndex: 30, display: "flex", alignItems: "flex-end" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: T.paper, width: "100%", borderRadius: "18px 18px 0 0", padding: "18px 16px 26px" }}>
            {mobileMore.map((n) => (
              <button key={n.id} onClick={() => { setTab(n.id); setMoreOpen(false); }}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "13px 10px", borderRadius: 10, border: "none", background: tab === n.id ? T.amberSoft : "transparent", color: T.ink, fontSize: 15, cursor: "pointer", marginBottom: 4 }}>
                <n.icon size={18} /> {n.label}
              </button>
            ))}
            <button onClick={() => { onSwitchToCustomer(); setMoreOpen(false); }}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "13px 10px", borderRadius: 10, border: "none", background: "transparent", color: T.amberDeep, fontSize: 15, cursor: "pointer", marginTop: 6 }}>
              <QrCode size={18} /> {t.customerView}
            </button>
            {onLogout && (
              <button onClick={() => { onLogout(); setMoreOpen(false); }}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "13px 10px", borderRadius: 10, border: "none", background: "transparent", color: T.slate, fontSize: 15, cursor: "pointer", marginTop: 2 }}>
                <X size={18} /> {lang === "ru" ? "Выйти" : lang === "en" ? "Log out" : "Chiqish"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function LiveClock({ lang, isMobile }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const localeMap = { uz: "uz-UZ", ru: "ru-RU", en: "en-US" };
  const locale = localeMap[lang] || "uz-UZ";
  const dateStr = now.toLocaleDateString(locale, { day: "2-digit", month: "long", year: "numeric" });
  const timeStr = now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, color: T.slate, fontSize: isMobile ? 11.5 : 12.5, fontWeight: 500 }}>
      <Clock size={14} />
      <span>{dateStr}</span>
      <span style={{ color: T.ink, fontWeight: 700 }}>{timeStr}</span>
    </div>
  );
}

function TopBar({ t, lang, setLang, isMobile, navLabel }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "16px 16px 8px" : "18px 26px", borderBottom: `1px solid ${T.line}`, background: T.paper, flexWrap: "wrap", gap: 8 }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: isMobile ? 19 : 21, fontWeight: 500 }}>{navLabel}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {!isMobile && <LiveClock lang={lang} isMobile={isMobile} />}
        <div style={{ display: "flex", gap: 6 }}>
          {["uz", "ru", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)}
              style={{
                padding: "5px 9px", borderRadius: 7, border: `1px solid ${lang === l ? T.amber : T.line}`,
                background: lang === l ? T.amberSoft : "transparent", color: lang === l ? T.amberDeep : T.slate,
                fontSize: 11.5, fontWeight: 700, cursor: "pointer", textTransform: "uppercase",
              }}>{l}</button>
          ))}
        </div>
      </div>
      {isMobile && <LiveClock lang={lang} isMobile={isMobile} />}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* AGGREGATION HELPERS                                                */
/* ---------------------------------------------------------------- */
function useAggregates(data) {
  return useMemo(() => {
    const { feedback, employees, restaurants, complaints } = data;
    const byRestaurant = {};
    restaurants.forEach((r) => (byRestaurant[r.id] = { ...r, feedback: [] }));
    feedback.forEach((f) => byRestaurant[f.restaurantId]?.feedback.push(f));
    Object.values(byRestaurant).forEach((r) => {
      r.count = r.feedback.length;
      r.avg = r.count ? +(r.feedback.reduce((a, f) => a + f.overall, 0) / r.count).toFixed(2) : 0;
      r.satisfaction = r.count ? Math.round((r.feedback.filter((f) => f.sentiment !== "negative").length / r.count) * 100) : 0;
      r.complaintsCount = r.feedback.filter((f) => f.overall <= 3).length;
    });

    const byEmployee = {};
    employees.forEach((e) => (byEmployee[e.id] = { ...e, ratings: [] }));
    feedback.forEach((f) => { if (f.employeeId && f.employeeRating) byEmployee[f.employeeId]?.ratings.push(f); });
    Object.values(byEmployee).forEach((e) => {
      e.count = e.ratings.length;
      e.avg = e.count ? +(e.ratings.reduce((a, f) => a + f.employeeRating, 0) / e.count).toFixed(2) : 0;
      e.pos = e.ratings.filter((f) => f.sentiment === "positive").length;
      e.neu = e.ratings.filter((f) => f.sentiment === "neutral").length;
      e.neg = e.ratings.filter((f) => f.sentiment === "negative").length;
    });

    const today = new Date();
    const todayFeedback = feedback.filter((f) => sameDay(f.createdAt, today));
    const weekFeedback = feedback.filter((f) => isWithinDays(f.createdAt, 7));
    const monthFeedback = feedback.filter((f) => isWithinDays(f.createdAt, 30));
    const avgOf = (arr) => arr.length ? +(arr.reduce((a, f) => a + f.overall, 0) / arr.length).toFixed(2) : 0;

    const restList = Object.values(byRestaurant).sort((a, b) => b.avg - a.avg);
    const empList = Object.values(byEmployee).filter((e) => e.count >= 3).sort((a, b) => b.avg - a.avg);

    const allComplaints = Object.values(complaints).map((c) => ({ ...c, feedback: feedback.find((f) => f.id === c.feedbackId) })).filter((c) => c.feedback);

    const issueCounts = {};
    feedback.filter((f) => f.issue).forEach((f) => { issueCounts[f.issue] = (issueCounts[f.issue] || 0) + 1; });
    const topIssue = Object.entries(issueCounts).sort((a, b) => b[1] - a[1])[0];

    const dailySeries = Array.from({ length: 14 }, (_, i) => {
      const d = daysAgo(13 - i);
      const dayFb = feedback.filter((f) => sameDay(f.createdAt, d));
      return { label: `${d.getDate()}/${d.getMonth() + 1}`, count: dayFb.length, avg: avgOf(dayFb) };
    });

    const sentimentCounts = [
      { name: "positive", value: feedback.filter((f) => f.sentiment === "positive").length },
      { name: "neutral", value: feedback.filter((f) => f.sentiment === "neutral").length },
      { name: "negative", value: feedback.filter((f) => f.sentiment === "negative").length },
    ];

    return {
      byRestaurant, byEmployee, restList, empList, allComplaints, topIssue,
      dailySeries, sentimentCounts,
      todayCount: todayFeedback.length, weekAvg: avgOf(weekFeedback), monthAvg: avgOf(monthFeedback),
      totalComplaints: allComplaints.length,
      resolvedComplaints: allComplaints.filter((c) => c.status === "resolved" || c.status === "closed").length,
      unresolvedComplaints: allComplaints.filter((c) => c.status === "new" || c.status === "review" || c.status === "progress").length,
      bestRestaurant: restList[0], worstRestaurant: restList[restList.length - 1],
      bestEmployee: empList[0], worstEmployee: [...empList].reverse().find((e) => e.avg < 4) || empList[empList.length - 1],
    };
  }, [data]);
}

/* ---------------------------------------------------------------- */
/* DASHBOARD TAB                                                     */
/* ---------------------------------------------------------------- */
function DashboardTab({ t, data, isMobile }) {
  const A = useAggregates(data);
  const gridCols = isMobile ? "repeat(2, 1fr)" : "repeat(6, 1fr)";

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols, gap: 12, marginBottom: 20 }}>
        <Kpi icon={MessageSquare} label={t.todayFeedback} value={A.todayCount} />
        <Kpi icon={Star} label={t.weeklyRating} value={fmt1(A.weekAvg)} tone="positive" />
        <Kpi icon={TrendingUp} label={t.monthlyRating} value={fmt1(A.monthAvg)} tone="positive" />
        <Kpi icon={AlertTriangle} label={t.totalComplaints} value={A.totalComplaints} tone="negative" />
        <Kpi icon={Check} label={t.resolved} value={A.resolvedComplaints} tone="positive" />
        <Kpi icon={Clock} label={t.unresolved} value={A.unresolvedComplaints} tone="negative" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
        <MiniStat label={t.bestRestaurant} name={A.bestRestaurant?.name} value={fmt1(A.bestRestaurant?.avg)} tone="positive" />
        <MiniStat label={t.worstRestaurant} name={A.worstRestaurant?.name} value={fmt1(A.worstRestaurant?.avg)} tone="negative" />
        <MiniStat label={t.bestEmployee} name={A.bestEmployee?.name} value={fmt1(A.bestEmployee?.avg)} tone="positive" />
        <MiniStat label={t.worstEmployee} name={A.worstEmployee?.name} value={fmt1(A.worstEmployee?.avg)} tone="negative" />
      </div>

      <AiInsightCard t={t} A={data} agg={A} isMobile={isMobile} />

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: 14, marginTop: 20 }}>
        <ChartCard title={t.dailyTrend}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={A.dailySeries} margin={{ left: -20, top: 6 }}>
              <CartesianGrid stroke={T.line} vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: T.slate }} />
              <YAxis tick={{ fontSize: 10, fill: T.slate }} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${T.line}` }} />
              <Line type="monotone" dataKey="count" stroke={T.amber} strokeWidth={2.4} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title={t.sentimentBreakdown}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={A.sentimentCounts} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75} paddingAngle={2}>
                {A.sentimentCounts.map((s) => <Cell key={s.name} fill={SENT_COLOR[s.name]} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${T.line}` }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginTop: 14 }}>
        <ChartCard title={t.ratingByRestaurant} height={220}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={A.restList} margin={{ left: -20, top: 6 }}>
              <CartesianGrid stroke={T.line} vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: T.slate }} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 10, fill: T.slate }} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${T.line}` }} />
              <Bar dataKey="avg" radius={[6, 6, 0, 0]} fill={T.amber} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginTop: 16, fontSize: 11.5, color: T.slate, background: T.amberSoft, borderRadius: 10, padding: "10px 14px" }}>
        {t.note}
      </div>
    </div>
  );
}

function MiniStat({ label, name, value, tone }) {
  const color = tone === "positive" ? T.sage : T.rose;
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "14px 16px" }}>
      <div style={{ fontSize: 11.5, color: T.slate, marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 600, fontSize: 14, color: T.ink, marginBottom: 2 }}>{name || "—"}</div>
      <div style={{ fontSize: 13, color, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
        <Star size={12} fill="currentColor" /> {value}
      </div>
    </div>
  );
}

function AiInsightCard({ t, agg, isMobile }) {
  const A = agg;
  const posShare = A.sentimentCounts.find((s) => s.name === "positive")?.value || 0;
  const neuShare = A.sentimentCounts.find((s) => s.name === "neutral")?.value || 0;
  const negShare = A.sentimentCounts.find((s) => s.name === "negative")?.value || 0;
  const total = posShare + neuShare + negShare || 1;
  const worstHourNote = A.topIssue && A.topIssue[0] === "Xizmat sekin bo'ldi"
    ? "20:00–22:00 oralig'ida qo'shimcha xodim ajratish tavsiya qilinadi."
    : "Aniqlangan muammo yo'nalishi bo'yicha jamoa bilan qisqa brifing o'tkazish tavsiya qilinadi.";
  return (
    <div style={{ background: T.ink, borderRadius: 14, padding: isMobile ? 16 : "18px 20px", color: T.paper }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <Sparkles size={16} color={T.amber} />
        <div style={{ fontWeight: 600, fontSize: 14 }}>{t.aiInsight} — {t.dailyReport}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 14, fontSize: 13 }}>
        <div>
          <div style={{ color: "#C9C2B4", fontSize: 11.5, marginBottom: 4 }}>{t.sentimentBreakdown}</div>
          <div>{t.positive} {Math.round((posShare / total) * 100)}% · {t.neutral} {Math.round((neuShare / total) * 100)}% · {t.negative} {Math.round((negShare / total) * 100)}%</div>
        </div>
        <div>
          <div style={{ color: "#C9C2B4", fontSize: 11.5, marginBottom: 4 }}>{t.topIssue}</div>
          <div>{A.topIssue ? `${A.topIssue[0]} (${A.topIssue[1]})` : "—"}</div>
        </div>
        <div>
          <div style={{ color: "#C9C2B4", fontSize: 11.5, marginBottom: 4 }}>{t.recommendation}</div>
          <div>{worstHourNote}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* FEEDBACK TAB                                                      */
/* ---------------------------------------------------------------- */
function FilterBar({ t, data, isMobile, fRestaurant, setFRestaurant, fEmployee, setFEmployee, fRange, setFRange, fSentiment, setFSentiment, search, setSearch, showEmployee = true, showSentiment = true }) {
  const selStyle = { padding: "8px 10px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5, color: T.ink };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
      <div style={{ position: "relative", flex: isMobile ? "1 1 100%" : "0 0 220px" }}>
        <Search size={14} color={T.slate} style={{ position: "absolute", left: 10, top: 10 }} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.search}
          style={{ ...selStyle, width: "100%", paddingLeft: 30, boxSizing: "border-box" }} />
      </div>
      <select value={fRestaurant} onChange={(e) => setFRestaurant(e.target.value)} style={selStyle}>
        <option value="all">{t.allRestaurants}</option>
        {data.restaurants.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
      </select>
      {showEmployee && (
        <select value={fEmployee} onChange={(e) => setFEmployee(e.target.value)} style={selStyle}>
          <option value="all">{t.allEmployees}</option>
          {data.employees.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
      )}
      {showSentiment && (
        <select value={fSentiment} onChange={(e) => setFSentiment(e.target.value)} style={selStyle}>
          <option value="all">{t.allStatuses}</option>
          <option value="positive">{t.positive}</option>
          <option value="neutral">{t.neutral}</option>
          <option value="negative">{t.negative}</option>
        </select>
      )}
      <select value={fRange} onChange={(e) => setFRange(+e.target.value)} style={selStyle}>
        <option value={7}>{t.last7}</option>
        <option value={30}>{t.last30}</option>
        <option value={99999}>{t.allTime}</option>
      </select>
    </div>
  );
}

function exportCsv(rows, filename) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(",")].concat(
    rows.map((r) => headers.map((h) => `"${String(r[h] ?? "").replace(/"/g, '""')}"`).join(","))
  ).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function FeedbackTab(props) {
  const { t, data, isMobile, fRestaurant, setFRestaurant, fEmployee, setFEmployee, fRange, setFRange, fSentiment, setFSentiment, search, setSearch, lang, clearFeedback } = props;
  const empName = (id) => data.employees.find((e) => e.id === id)?.name || "—";
  const restName = (id) => data.restaurants.find((r) => r.id === id)?.name || "—";
  const clearLabel = lang === "ru" ? "Очистить всё" : lang === "en" ? "Clear all" : "Barchasini tozalash";
  const confirmMsg = lang === "ru" ? "Удалить все отзывы и жалобы? Это действие необратимо." : lang === "en" ? "Delete all feedback and complaints? This cannot be undone." : "Barcha fikr va shikoyatlar o'chirilsinmi? Bu amalni qaytarib bo'lmaydi.";

  const filtered = useMemo(() => {
    return data.feedback
      .filter((f) => fRestaurant === "all" || f.restaurantId === fRestaurant)
      .filter((f) => fEmployee === "all" || f.employeeId === fEmployee)
      .filter((f) => fSentiment === "all" || f.sentiment === fSentiment)
      .filter((f) => isWithinDays(f.createdAt, fRange))
      .filter((f) => !search || (f.comment || "").toLowerCase().includes(search.toLowerCase()) || empName(f.employeeId).toLowerCase().includes(search.toLowerCase()) || restName(f.restaurantId).toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [data, fRestaurant, fEmployee, fSentiment, fRange, search]);

  return (
    <div>
      <FilterBar {...props} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, gap: 8, flexWrap: "wrap" }}>
        <div style={{ fontSize: 12.5, color: T.slate }}>{filtered.length} {t.reviews}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => exportCsv(filtered.map((f) => ({
            date: f.createdAt, restaurant: restName(f.restaurantId), table: f.tableId, employee: empName(f.employeeId),
            overall: f.overall, sentiment: f.sentiment, comment: f.comment,
          })), "feedback.csv")}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5, cursor: "pointer" }}>
            <Download size={13} /> {t.exportData}
          </button>
          {clearFeedback && (
            <button onClick={() => { if (window.confirm(confirmMsg)) clearFeedback(); }}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 9, border: `1px solid ${T.roseSoft}`, background: T.roseSoft, color: T.rose, fontSize: 12.5, cursor: "pointer", fontWeight: 600 }}>
              <Trash2 size={13} /> {clearLabel}
            </button>
          )}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.slice(0, 60).map((f) => (
          <div key={f.id} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{restName(f.restaurantId)} · {t.table} {f.tableId}</div>
                <div style={{ fontSize: 12, color: T.slate, marginTop: 2 }}>{empName(f.employeeId)} · {new Date(f.createdAt).toLocaleDateString()} · {new Date(f.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Pill tone={f.sentiment === "positive" ? "positive" : f.sentiment === "negative" ? "negative" : "amber"}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={11} fill="currentColor" />{fmt1(f.overall)}</span>
                </Pill>
              </div>
            </div>
            {f.comment && <div style={{ fontSize: 13, color: T.ink, marginTop: 8, lineHeight: 1.5 }}>{f.comment}</div>}
            {f.issue && <div style={{ marginTop: 8 }}><Pill tone="negative">{f.issue}</Pill></div>}
          </div>
        ))}
        {filtered.length === 0 && <div style={{ color: T.slate, fontSize: 13, padding: 20, textAlign: "center" }}>—</div>}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* COMPLAINTS TAB                                                    */
/* ---------------------------------------------------------------- */
function ComplaintsTab(props) {
  const { t, data, isMobile, fComplaintStatus, setFComplaintStatus, fRestaurant, setFRestaurant, updateComplaint, search, setSearch, lang, clearFeedback } = props;
  const A = useAggregates(data);
  const empName = (id) => data.employees.find((e) => e.id === id)?.name || "—";
  const restName = (id) => data.restaurants.find((r) => r.id === id)?.name || "—";
  const clearLabel = lang === "ru" ? "Очистить всё" : lang === "en" ? "Clear all" : "Barchasini tozalash";
  const confirmMsg = lang === "ru" ? "Удалить все отзывы и жалобы? Это действие необратимо." : lang === "en" ? "Delete all feedback and complaints? This cannot be undone." : "Barcha fikr va shikoyatlar o'chirilsinmi? Bu amalni qaytarib bo'lmaydi.";

  const filtered = A.allComplaints
    .filter((c) => fComplaintStatus === "all" || c.status === fComplaintStatus)
    .filter((c) => fRestaurant === "all" || c.feedback.restaurantId === fRestaurant)
    .filter((c) => !search || (c.feedback.comment || "").toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(b.feedback.createdAt) - new Date(a.feedback.createdAt));

  const statuses = ["new", "review", "progress", "resolved", "closed"];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <div style={{ position: "relative", flex: isMobile ? "1 1 100%" : "0 0 220px" }}>
            <Search size={14} color={T.slate} style={{ position: "absolute", left: 10, top: 10 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.search}
              style={{ padding: "8px 10px 8px 30px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5, width: "100%", boxSizing: "border-box" }} />
          </div>
          <select value={fRestaurant} onChange={(e) => setFRestaurant(e.target.value)} style={{ padding: "8px 10px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5 }}>
            <option value="all">{t.allRestaurants}</option>
            {data.restaurants.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
          <select value={fComplaintStatus} onChange={(e) => setFComplaintStatus(e.target.value)} style={{ padding: "8px 10px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5 }}>
            <option value="all">{t.allStatuses}</option>
            {statuses.map((s) => <option key={s} value={s}>{t[`complaintStatus_${s}`]}</option>)}
          </select>
        </div>
        {clearFeedback && (
          <button onClick={() => { if (window.confirm(confirmMsg)) clearFeedback(); }}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 9, border: `1px solid ${T.roseSoft}`, background: T.roseSoft, color: T.rose, fontSize: 12.5, cursor: "pointer", fontWeight: 600 }}>
            <Trash2 size={13} /> {clearLabel}
          </button>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((c) => (
          <div key={c.feedbackId} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{restName(c.feedback.restaurantId)} · {t.table} {c.feedback.tableId}</div>
                <div style={{ fontSize: 12, color: T.slate, marginTop: 2 }}>{empName(c.feedback.employeeId)} · {new Date(c.feedback.createdAt).toLocaleDateString()} · {new Date(c.feedback.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} · {new Date(c.feedback.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
              </div>
              <Pill tone={STATUS_TONE[c.status]}>{t[`complaintStatus_${c.status}`]}</Pill>
            </div>
            {c.feedback.issue && <div style={{ marginTop: 8 }}><Pill tone="negative">{c.feedback.issue}</Pill></div>}
            {c.feedback.comment && <div style={{ fontSize: 13, color: T.ink, marginTop: 8, lineHeight: 1.5 }}>{c.feedback.comment}</div>}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
              {statuses.map((s) => (
                <button key={s} onClick={() => updateComplaint(c.feedbackId, { status: s })}
                  style={{
                    padding: "6px 10px", borderRadius: 8, fontSize: 11.5, cursor: "pointer",
                    border: `1px solid ${c.status === s ? T.amber : T.line}`,
                    background: c.status === s ? T.amberSoft : "transparent",
                    color: c.status === s ? T.amberDeep : T.slate, fontWeight: 500,
                  }}>{t[`complaintStatus_${s}`]}</button>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div style={{ color: T.slate, fontSize: 13, padding: 20, textAlign: "center" }}>—</div>}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* EMPLOYEES TAB                                                     */
/* ---------------------------------------------------------------- */
function EmployeesTab({ t, data, isMobile, addEmployee, editEmployee, deleteEmployee }) {
  const A = useAggregates(data);
  const top = A.empList.slice(0, 10);
  const attention = [...A.empList].reverse().filter((e) => e.avg < 4).slice(0, 6);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [restaurantId, setRestaurantId] = useState(data.restaurants[0]?.id);
  const [err, setErr] = useState("");
  const [confirmId, setConfirmId] = useState(null);
  const inputStyle = { padding: "9px 11px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 13, width: "100%", boxSizing: "border-box" };

  const startAdd = () => { setEditingId(null); setName(""); setRole(ROLES[0]); setRestaurantId(data.restaurants[0]?.id); setErr(""); setOpen(true); };
  const startEdit = (e) => { setEditingId(e.id); setName(e.name); setRole(e.role); setRestaurantId(e.restaurantId); setErr(""); setOpen(true); };

  const submit = () => {
    if (!name.trim()) { setErr(t.nameRequired); return; }
    if (editingId) editEmployee(editingId, { name: name.trim(), role, restaurantId });
    else addEmployee(name.trim(), role, restaurantId);
    setOpen(false); setEditingId(null); setErr("");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button onClick={startAdd}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 14px", borderRadius: 9, border: "none", background: T.ink, color: T.paper, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>
          <Plus size={14} /> {t.addEmployee}
        </button>
      </div>

      {open && (
        <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: 16, marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-end" }}>
          <div style={{ flex: "1 1 160px" }}>
            <div style={{ fontSize: 12, color: T.slate, marginBottom: 5 }}>{t.nameLabel}</div>
            <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <div style={{ fontSize: 12, color: T.slate, marginBottom: 5 }}>{t.roleLabel}</div>
            <select value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle}>
              {[...new Set(ROLES)].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div style={{ flex: "1 1 160px" }}>
            <div style={{ fontSize: 12, color: T.slate, marginBottom: 5 }}>{t.restaurantLabel}</div>
            <select value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} style={inputStyle}>
              {data.restaurants.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
          </div>
          <button onClick={submit} style={{ padding: "9px 16px", borderRadius: 9, border: "none", background: T.amber, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{t.save}</button>
          <button onClick={() => { setOpen(false); setEditingId(null); setErr(""); }} style={{ padding: "9px 16px", borderRadius: 9, border: `1px solid ${T.line}`, background: "transparent", fontSize: 13, cursor: "pointer" }}>{t.cancel}</button>
          {err && <div style={{ color: T.rose, fontSize: 12, flexBasis: "100%" }}>{err}</div>}
        </div>
      )}

      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, marginBottom: 10 }}>{t.topEmployees}</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 10 }}>
          {top.map((e, i) => (
            <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 10, background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: "10px 14px" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: i < 3 ? T.amberSoft : T.canvas, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: i < 3 ? T.amberDeep : T.slate }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{e.name}</div>
                <div style={{ fontSize: 11.5, color: T.slate }}>{data.restaurants.find(r=>r.id===e.restaurantId)?.name}</div>
              </div>
              <Pill tone="positive"><span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={11} fill="currentColor" />{fmt1(e.avg)}</span></Pill>
            </div>
          ))}
        </div>
      </div>

      {attention.length > 0 && (
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, marginBottom: 10 }}>{t.attentionRequired}</div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 10 }}>
            {attention.map((e) => (
              <div key={e.id} style={{ background: T.roseSoft, borderRadius: 12, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 600, fontSize: 13.5, color: T.rose }}>{e.name}</div>
                <Pill tone="negative">{fmt1(e.avg)} ⭐</Pill>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, marginBottom: 10 }}>{t.performanceProfile}</div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12, marginBottom: 26 }}>
        {A.empList.map((e) => <EmployeeCard key={e.id} e={e} stats={e} t={t} />)}
      </div>

      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, marginBottom: 10 }}>{t.employees}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.employees.map((e) => (
          <div key={e.id} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13.5 }}>{e.name}</div>
              <div style={{ fontSize: 11.5, color: T.slate }}>{e.role} · {data.restaurants.find(r => r.id === e.restaurantId)?.name || "—"}</div>
            </div>
            {confirmId === e.id ? (
              <div style={{ background: T.roseSoft, borderRadius: 9, padding: "6px 10px", fontSize: 12, color: T.rose, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{t.confirmDelete}</span>
                <button onClick={() => { deleteEmployee(e.id); setConfirmId(null); }} style={{ background: T.rose, color: "#fff", border: "none", borderRadius: 6, padding: "3px 9px", fontSize: 11.5, cursor: "pointer" }}>{t.yes}</button>
                <button onClick={() => setConfirmId(null)} style={{ background: "transparent", border: `1px solid ${T.rose}`, color: T.rose, borderRadius: 6, padding: "3px 9px", fontSize: 11.5, cursor: "pointer" }}>{t.no}</button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 4 }}>
                <button onClick={() => startEdit(e)} aria-label={t.edit} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: T.slate }}><Edit2 size={14} /></button>
                <button onClick={() => setConfirmId(e.id)} aria-label={t.delete} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: T.rose }}><Trash2 size={14} /></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* RESTAURANTS TAB                                                   */
/* ---------------------------------------------------------------- */
function RestaurantsTab({ t, data, isMobile, addRestaurant, editRestaurant, deleteRestaurant }) {
  const A = useAggregates(data);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [tables, setTables] = useState(20);
  const [err, setErr] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  const inputStyle = { padding: "9px 11px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 13, width: "100%", boxSizing: "border-box" };

  const startAdd = () => { setEditingId(null); setName(""); setTables(20); setErr(""); setOpen(true); };
  const startEdit = (r) => { setEditingId(r.id); setName(r.name); setTables(r.tables || 20); setErr(""); setOpen(true); };

  const submit = () => {
    if (!name.trim()) { setErr(t.nameRequired); return; }
    if (editingId) editRestaurant(editingId, { name: name.trim(), tables: +tables || 20 });
    else addRestaurant(name.trim(), +tables || 20);
    setOpen(false); setEditingId(null); setErr("");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16 }}>{t.compareRestaurants}</div>
        <button onClick={startAdd}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 14px", borderRadius: 9, border: "none", background: T.ink, color: T.paper, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>
          <Plus size={14} /> {t.addRestaurant}
        </button>
      </div>

      {open && (
        <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: 16, marginBottom: 16, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-end" }}>
          <div style={{ flex: "1 1 200px" }}>
            <div style={{ fontSize: 12, color: T.slate, marginBottom: 5 }}>{t.nameLabel}</div>
            <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ flex: "0 1 140px" }}>
            <div style={{ fontSize: 12, color: T.slate, marginBottom: 5 }}>{t.tableCountLabel}</div>
            <input type="number" min={1} value={tables} onChange={(e) => setTables(e.target.value)} style={inputStyle} />
          </div>
          <button onClick={submit} style={{ padding: "9px 16px", borderRadius: 9, border: "none", background: T.amber, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{t.save}</button>
          <button onClick={() => { setOpen(false); setEditingId(null); setErr(""); }} style={{ padding: "9px 16px", borderRadius: 9, border: `1px solid ${T.line}`, background: "transparent", fontSize: 13, cursor: "pointer" }}>{t.cancel}</button>
          {err && <div style={{ color: T.rose, fontSize: 12, flexBasis: "100%" }}>{err}</div>}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
        {A.restList.map((r) => (
          <div key={r.id} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{r.name}</div>
              <div style={{ display: "flex", gap: 4 }}>
                <button onClick={() => startEdit(r)} aria-label={t.edit} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: T.slate }}><Edit2 size={14} /></button>
                <button onClick={() => setConfirmId(confirmId === r.id ? null : r.id)} aria-label={t.delete} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: T.rose }}><Trash2 size={14} /></button>
              </div>
            </div>
            {confirmId === r.id && (
              <div style={{ background: T.roseSoft, borderRadius: 9, padding: "8px 10px", marginBottom: 10, fontSize: 12, color: T.rose, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <span>{t.confirmDelete}</span>
                <span style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => { deleteRestaurant(r.id); setConfirmId(null); }} style={{ background: T.rose, color: "#fff", border: "none", borderRadius: 6, padding: "3px 9px", fontSize: 11.5, cursor: "pointer" }}>{t.yes}</button>
                  <button onClick={() => setConfirmId(null)} style={{ background: "transparent", border: `1px solid ${T.rose}`, color: T.rose, borderRadius: 6, padding: "3px 9px", fontSize: 11.5, cursor: "pointer" }}>{t.no}</button>
                </span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: 28 }}>{fmt1(r.avg)}</span>
              <Star size={16} color={T.amber} fill={T.amber} />
            </div>
            <div style={{ fontSize: 12.5, color: T.slate, marginBottom: 4 }}>{r.count} {t.reviews}</div>
            <div style={{ fontSize: 12.5, color: T.slate, marginBottom: 4 }}>{t.satisfaction}: {r.satisfaction}%</div>
            <div style={{ fontSize: 12.5, color: T.rose }}>{t.complaints}: {r.complaintsCount}</div>
          </div>
        ))}
      </div>
      <ChartCard title={t.ratingByRestaurant} height={240}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={A.restList} margin={{ left: -20, top: 6 }}>
            <CartesianGrid stroke={T.line} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: T.slate }} />
            <YAxis domain={[0, 5]} tick={{ fontSize: 10, fill: T.slate }} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${T.line}` }} />
            <Bar dataKey="avg" radius={[6, 6, 0, 0]} fill={T.amber} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* QR TAB                                                             */
/* ---------------------------------------------------------------- */
function QrPattern({ url }) {
  let matrix = null;
  try {
    const qr = qrcode(0, "M");
    qr.addData(url);
    qr.make();
    const n = qr.getModuleCount();
    matrix = Array.from({ length: n }, (_, row) => Array.from({ length: n }, (_, col) => qr.isDark(row, col)));
  } catch (e) {
    matrix = null;
  }
  if (!matrix) return null;
  const n = matrix.length;
  const quiet = 2;
  const size = n + quiet * 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" shapeRendering="crispEdges">
      <rect width={size} height={size} fill="#fff" />
      {matrix.map((rowArr, row) =>
        rowArr.map((dark, col) =>
          dark ? <rect key={`${row}-${col}`} x={col + quiet} y={row + quiet} width="1" height="1" fill={T.ink} /> : null
        )
      )}
    </svg>
  );
}

function QrTab({ t, data, copiedId, setCopiedId }) {
  const [restId, setRestId] = useState(data.restaurants[0].id);
  const restaurant = data.restaurants.find((r) => r.id === restId);
  const tables = Array.from({ length: Math.min(restaurant.tables, 24) }, (_, i) => i + 1);

  const copyLink = (id, table) => {
    const url = `https://restaurant-feedback-system-zeta.vercel.app/${id}/table-${table}`;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    setCopiedId(`${id}-${table}`);
    setTimeout(() => setCopiedId(null), 1400);
  };

  return (
    <div>
      <select value={restId} onChange={(e) => setRestId(e.target.value)} style={{ padding: "8px 10px", borderRadius: 9, border: `1px solid ${T.line}`, background: T.card, fontSize: 12.5, marginBottom: 16 }}>
        {data.restaurants.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
      </select>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
        {tables.map((n) => (
          <div key={n} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: 12, textAlign: "center" }}>
            <div style={{ width: "100%", aspectRatio: "1", marginBottom: 8 }}><QrPattern url={`https://restaurant-feedback-system-zeta.vercel.app/${restId}/table-${n}`} /></div>
            <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>{t.table} {n}</div>
            <button onClick={() => copyLink(restId, n)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "6px 8px", borderRadius: 8, border: `1px solid ${T.line}`, background: "transparent", fontSize: 11.5, cursor: "pointer" }}>
              <Copy size={11} /> {copiedId === `${restId}-${n}` ? t.linkCopied : t.copyLink}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* SETTINGS TAB                                                      */
/* ---------------------------------------------------------------- */
const SETTINGS_TXT = {
  uz: {
    myAccount: "Mening hisobim", currentPassword: "Joriy parol", newPassword: "Yangi parol",
    confirmPassword: "Yangi parolni takrorlang", changePassword: "Parolni o'zgartirish",
    passwordChanged: "Parol muvaffaqiyatli o'zgartirildi", wrongCurrent: "Joriy parol noto'g'ri",
    mismatch: "Yangi parollar mos kelmadi", tooShort: "Parol kamida 4 belgidan iborat bo'lsin",
    users: "Foydalanuvchilar", addUser: "Foydalanuvchi qo'shish", username: "Login", password: "Parol",
    permissions: "Ruxsatlar", save: "Saqlash", delete: "O'chirish", admin: "Bosh admin",
    maxReached: "Ko'pi bilan 5 ta foydalanuvchi qo'shish mumkin", cancel: "Bekor qilish",
    deleteConfirm: "Bu foydalanuvchini o'chirasizmi?", edit: "Tahrirlash",
  },
  ru: {
    myAccount: "Мой аккаунт", currentPassword: "Текущий пароль", newPassword: "Новый пароль",
    confirmPassword: "Повторите новый пароль", changePassword: "Изменить пароль",
    passwordChanged: "Пароль успешно изменён", wrongCurrent: "Текущий пароль неверен",
    mismatch: "Новые пароли не совпадают", tooShort: "Пароль должен быть не менее 4 символов",
    users: "Пользователи", addUser: "Добавить пользователя", username: "Логин", password: "Пароль",
    permissions: "Права доступа", save: "Сохранить", delete: "Удалить", admin: "Гл. админ",
    maxReached: "Можно добавить не более 5 пользователей", cancel: "Отмена",
    deleteConfirm: "Удалить этого пользователя?", edit: "Изменить",
  },
  en: {
    myAccount: "My account", currentPassword: "Current password", newPassword: "New password",
    confirmPassword: "Confirm new password", changePassword: "Change password",
    passwordChanged: "Password changed successfully", wrongCurrent: "Current password is incorrect",
    mismatch: "New passwords do not match", tooShort: "Password must be at least 4 characters",
    users: "Users", addUser: "Add user", username: "Username", password: "Password",
    permissions: "Permissions", save: "Save", delete: "Delete", admin: "Main admin",
    maxReached: "You can add up to 5 users", cancel: "Cancel",
    deleteConfirm: "Delete this user?", edit: "Edit",
  },
};

function ChangePasswordCard({ st, lang, currentUser, editUser }) {
  const [cur, setCur] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!currentUser || cur !== currentUser.password) { setMsg({ type: "error", text: st.wrongCurrent }); return; }
    if (next.length < 4) { setMsg({ type: "error", text: st.tooShort }); return; }
    if (next !== confirm) { setMsg({ type: "error", text: st.mismatch }); return; }
    editUser(currentUser.id, { password: next });
    setCur(""); setNext(""); setConfirm("");
    setMsg({ type: "ok", text: st.passwordChanged });
  };

  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18, marginBottom: 14 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 12 }}>{st.myAccount} — {currentUser?.username}</div>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 320 }}>
        <input type="password" placeholder={st.currentPassword} value={cur} onChange={(e) => setCur(e.target.value)}
          style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${T.line}`, fontSize: 13.5 }} />
        <input type="password" placeholder={st.newPassword} value={next} onChange={(e) => setNext(e.target.value)}
          style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${T.line}`, fontSize: 13.5 }} />
        <input type="password" placeholder={st.confirmPassword} value={confirm} onChange={(e) => setConfirm(e.target.value)}
          style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${T.line}`, fontSize: 13.5 }} />
        {msg && <div style={{ fontSize: 12.5, color: msg.type === "error" ? T.rose : T.sage }}>{msg.text}</div>}
        <button type="submit" style={{ padding: "10px 0", borderRadius: 9, border: "none", background: T.ink, color: T.paper, fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>
          {st.changePassword}
        </button>
      </form>
    </div>
  );
}

function UserRow({ u, st, isSelf, addUser, editUser, deleteUser }) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(u.username);
  const [password, setPassword] = useState(u.password);
  const [perms, setPerms] = useState(u.permissions || {});

  const togglePerm = (id) => setPerms((p) => ({ ...p, [id]: !p[id] }));
  const save = () => { editUser(u.id, { username, password, permissions: perms }); setEditing(false); };

  return (
    <div style={{ border: `1px solid ${T.line}`, borderRadius: 12, padding: 14, marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontWeight: 600, fontSize: 13.5 }}>
          {u.username} {u.role === "admin" && <span style={{ marginLeft: 6, fontSize: 10.5, color: T.amberDeep, background: T.amberSoft, padding: "2px 7px", borderRadius: 6 }}>{st.admin}</span>}
        </div>
        {u.role !== "admin" && (
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setEditing((v) => !v)} style={{ fontSize: 12, color: T.amberDeep, background: "none", border: "none", cursor: "pointer" }}>{st.edit}</button>
            <button onClick={() => { if (window.confirm(st.deleteConfirm)) deleteUser(u.id); }} style={{ fontSize: 12, color: T.rose, background: "none", border: "none", cursor: "pointer" }}>{st.delete}</button>
          </div>
        )}
      </div>
      {editing && (
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={st.username}
              style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${T.line}`, fontSize: 13 }} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={st.password}
              style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${T.line}`, fontSize: 13 }} />
          </div>
          <div style={{ fontSize: 12, color: T.slate, marginBottom: 6 }}>{st.permissions}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
            {PERMISSION_TABS.map((id) => (
              <label key={id} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, cursor: "pointer" }}>
                <input type="checkbox" checked={!!perms[id]} onChange={() => togglePerm(id)} /> {id}
              </label>
            ))}
          </div>
          <button onClick={save} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: T.ink, color: T.paper, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>
            {st.save}
          </button>
        </div>
      )}
    </div>
  );
}

function UsersManager({ st, data, addUser, editUser, deleteUser }) {
  const [adding, setAdding] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [perms, setPerms] = useState(Object.fromEntries(PERMISSION_TABS.map((k) => [k, true])));
  const users = data.users || [];
  const canAdd = users.length < MAX_USERS;

  const submit = () => {
    if (!username || !password) return;
    addUser(username, password, perms);
    setUsername(""); setPassword(""); setPerms(Object.fromEntries(PERMISSION_TABS.map((k) => [k, true])));
    setAdding(false);
  };

  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18, marginBottom: 14 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <Users size={15} /> {st.users} ({users.length}/{MAX_USERS})
      </div>
      {users.map((u) => (
        <UserRow key={u.id} u={u} st={st} addUser={addUser} editUser={editUser} deleteUser={deleteUser} />
      ))}
      {!adding && canAdd && (
        <button onClick={() => setAdding(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 14px", borderRadius: 9, border: `1px dashed ${T.lineStrong}`, background: "none", color: T.amberDeep, fontSize: 13, cursor: "pointer", marginTop: 6 }}>
          <Plus size={14} /> {st.addUser}
        </button>
      )}
      {!canAdd && <div style={{ fontSize: 12, color: T.slate, marginTop: 6 }}>{st.maxReached}</div>}
      {adding && (
        <div style={{ border: `1px solid ${T.line}`, borderRadius: 12, padding: 14, marginTop: 8 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={st.username}
              style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${T.line}`, fontSize: 13 }} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={st.password}
              style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${T.line}`, fontSize: 13 }} />
          </div>
          <div style={{ fontSize: 12, color: T.slate, marginBottom: 6 }}>{st.permissions}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
            {PERMISSION_TABS.map((id) => (
              <label key={id} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, cursor: "pointer" }}>
                <input type="checkbox" checked={!!perms[id]} onChange={() => setPerms((p) => ({ ...p, [id]: !p[id] }))} /> {id}
              </label>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={submit} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: T.ink, color: T.paper, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>{st.save}</button>
            <button onClick={() => setAdding(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${T.line}`, background: "none", fontSize: 12.5, cursor: "pointer" }}>{st.cancel}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SettingsTab({ t, lang, setLang, currentUser, data, addUser, editUser, deleteUser }) {
  const st = SETTINGS_TXT[lang] || SETTINGS_TXT.uz;
  return (
    <div style={{ maxWidth: 480 }}>
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18, marginBottom: 14 }}>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}><Globe size={15} /> Til / Язык / Language</div>
        <div style={{ display: "flex", gap: 8 }}>
          {["uz", "ru", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)}
              style={{ padding: "8px 16px", borderRadius: 9, border: `1px solid ${lang === l ? T.amber : T.line}`, background: lang === l ? T.amberSoft : "transparent", color: lang === l ? T.amberDeep : T.ink, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              {l === "uz" ? "O'zbek" : l === "ru" ? "Русский" : "English"}
            </button>
          ))}
        </div>
      </div>

      {currentUser && <ChangePasswordCard st={st} lang={lang} currentUser={currentUser} editUser={editUser} />}

      {currentUser && currentUser.role === "admin" && (
        <UsersManager st={st} data={data} addUser={addUser} editUser={editUser} deleteUser={deleteUser} />
      )}

      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18 }}>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{t.role_owner}</div>
        <div style={{ fontSize: 12.5, color: T.slate, lineHeight: 1.6 }}>{t.note}</div>
      </div>
    </div>
  );
}
