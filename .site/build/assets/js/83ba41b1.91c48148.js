"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[625],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_position:1,sidebar_label:"Using Drive Member Variables"},l="Using Drive Member Variables",i={unversionedId:"advanced-tutorials/using-drive-member-variables",id:"advanced-tutorials/using-drive-member-variables",title:"Using Drive Member Variables",description:"While coding, it is likely that you will wish to pass different drive constants to the chassis at different times in the run. Here, drive constants just refers to max voltage, kp, ki, kd, etc.",source:"@site/docs/advanced-tutorials/using-drive-member-variables.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/using-drive-member-variables",permalink:"/JAR-Template/advanced-tutorials/using-drive-member-variables",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Using Drive Member Variables"},sidebar:"tutorialSidebar",previous:{title:"Advanced Tutorials",permalink:"/JAR-Template/advanced-tutorials/"}},s={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"using-drive-member-variables"},"Using Drive Member Variables"),(0,a.yg)("p",null,"While coding, it is likely that you will wish to pass different drive constants to the chassis at different times in the run. Here, drive constants just refers to max voltage, kp, ki, kd, etc."),(0,a.yg)("p",null,"One way to do this is with the overloaded methods defined in src/JAR-Template/drive.cpp. For example, these are the overloaded methods for turning to a given angle:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void Drive::turn_to_angle(float angle){\n  turn_to_angle(angle, turn_max_voltage, turn_settle_error, turn_settle_time, turn_timeout, turn_kp, turn_ki, turn_kd, turn_starti);\n}\n\nvoid Drive::turn_to_angle(float angle, float turn_max_voltage){\n  turn_to_angle(angle, turn_max_voltage, turn_settle_error, turn_settle_time, turn_timeout, turn_kp, turn_ki, turn_kd, turn_starti);\n}\n\nvoid Drive::turn_to_angle(float angle, float turn_max_voltage, float turn_settle_error, float turn_settle_time, float turn_timeout){\n  turn_to_angle(angle, turn_max_voltage, turn_settle_error, turn_settle_time, turn_timeout, turn_kp, turn_ki, turn_kd, turn_starti);\n}\n\nvoid Drive::turn_to_angle(float angle, float turn_max_voltage, float turn_settle_error, float turn_settle_time, float turn_timeout, float turn_kp, float turn_ki, float turn_kd, float turn_starti){\n  desired_heading = angle;\n  PID turnPID(reduce_negative_180_to_180(angle - get_absolute_heading()), turn_kp, turn_ki, turn_kd, turn_starti, turn_settle_error, turn_settle_time, turn_timeout);\n  while(turnPID.is_settled() == false){\n    float error = reduce_negative_180_to_180(angle - get_absolute_heading());\n    float output = turnPID.compute(error);\n    output = clamp(output, -turn_max_voltage, turn_max_voltage);\n    drive_with_voltage(output, -output);\n    task::sleep(10);\n  }\n  DriveL.stop(hold);\n  DriveR.stop(hold);\n}\n")),(0,a.yg)("p",null,"In your autons, you can pass just the angle argument, like "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_to_angle(90);\n")),(0,a.yg)("p",null,"which is expected to be the most common usage. But imagine that you wanted the turn to be slower, or faster. You can use the overloaded method to specify the turn_max_voltage, from 0 to 12. If you wanted to turn to an angle of 90 degrees, but with a max voltage of 3, you could do it with this code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_to_angle(90, 3);\n")),(0,a.yg)("p",null,"The problem with these overloaded methods is that they're really long. If you want to specify the turn_timeout parameter as 10000ms, you still have to type through all the parameters you want to leave at default, so your code ends up looking like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_to_angle(90, 10, 1, 200, 10000);\n")),(0,a.yg)("p",null,"This code is hard to read ",(0,a.yg)("em",{parentName:"p"},"and")," write. We can get around this issue by using member variables. If I want the turn_timeout parameter to be 10000ms, I can do it as shown above. But this code is equivalent:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_timeout = 10000;\nchassis.turn_to_angle(90);\n")),(0,a.yg)("p",null,"See how that's both easier to read ",(0,a.yg)("em",{parentName:"p"},"and")," to write?"),(0,a.yg)("p",null,"One major difference between the overloaded method and setting member variables is that the member variables carry over. So if you want to turn to angle 90 with a max voltage of 3, and then to angle 0 with a max voltage of 3, this code works:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_max_voltage = 3;\nchassis.turn_to_angle(90);\nchassis.turn_to_angle(0);\n")),(0,a.yg)("p",null,"If you don't like this behavior, then you can just call default_constants() to reset every parameter. So this code will turn to angle 90 at a voltage of 3, and then to 0 at whatever the default is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.turn_max_voltage = 3;\nchassis.turn_to_angle(90);\ndefault_constants();\nchassis.turn_to_angle(0);\n")),(0,a.yg)("p",null,"This system of setting the drive class member variables is a pretty readable and on-the-fly way to make your functions do what you want when you want them to."),(0,a.yg)("p",null,"The left and right drive motor groups are also accessible through the drive class. So if, for example, you wanted to spin the right side of the drive forward at 12 volts, you could do it like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"chassis.DriveR.spin(fwd, 12, volt);\n")))}p.isMDXComponent=!0}}]);