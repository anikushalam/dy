import{r as N,c as B,g as mt,j as d,L as M,a as ft}from"./index-934vg0al.js";const gt="_slide_kr6ph_1",vt="_slideImg_kr6ph_4",yt="_aboutInsContainer_kr6ph_9",St="_aboutIns_kr6ph_9",_t="_aboutLeft_kr6ph_18",bt="_aboutRight_kr6ph_23",Tt="_aboutRightbox_kr6ph_27",wt="_aboutRightboxh5_kr6ph_42",Ct="_aboutRightboxp_kr6ph_60",xt="_readmorebtn_kr6ph_68",Pt="_viewmorebtn_kr6ph_82",It="_linksContainer_kr6ph_96",jt="_linkswrap_kr6ph_104",Dt="_eventswrap_kr6ph_105",kt="_links_kr6ph_96",Mt="_linkbrochures_kr6ph_112",Rt="_implinkitem_kr6ph_119",Et="_impbrocureitem_kr6ph_132",Nt="_insevents_kr6ph_139",Ot="_inseventsh3_kr6ph_146",At="_inseventsbox_kr6ph_163",Lt="_scrollList_kr6ph_169",Wt="_scrollAnimation_kr6ph_1",Vt="_uevent_kr6ph_182",Yt="_ueventdate_kr6ph_186",Bt="_ueventtext_kr6ph_204",Ft="_ueventhead_kr6ph_208",Gt="_ueventddate_kr6ph_215",$t="_ueventPlace_kr6ph_220",Ut="_eventreadmore_kr6ph_227",Ht="_inseventcard_kr6ph_231",Xt="_videogalery_kr6ph_242",Kt="_galerybox_kr6ph_250",zt="_galeryItem_kr6ph_256",Jt="_accreditationContainer_kr6ph_275",Qt="_accreditationWrap_kr6ph_283",qt="_accreditationImg_kr6ph_287",Zt="_testimonialsContainer_kr6ph_290",te="_testimonials_kr6ph_290",ee="_testimonialsh5_kr6ph_303",ie="_testimonial_kr6ph_290",oe="_ourInsContainer_kr6ph_349",ne="_ourIns_kr6ph_349",se="_insCard_kr6ph_362",re="_ourInsh5_kr6ph_385",p={slide:gt,slideImg:vt,aboutInsContainer:yt,aboutIns:St,aboutLeft:_t,aboutRight:bt,aboutRightbox:Tt,aboutRightboxh5:wt,aboutRightboxp:Ct,readmorebtn:xt,viewmorebtn:Pt,linksContainer:It,linkswrap:jt,eventswrap:Dt,links:kt,linkbrochures:Mt,implinkitem:Rt,impbrocureitem:Et,insevents:Nt,inseventsh3:Ot,inseventsbox:At,scrollList:Lt,scrollAnimation:Wt,uevent:Vt,ueventdate:Yt,ueventtext:Bt,ueventhead:Ft,ueventddate:Gt,ueventPlace:$t,eventreadmore:Ut,inseventcard:Ht,videogalery:Xt,galerybox:Kt,galeryItem:zt,accreditationContainer:Jt,accreditationWrap:Qt,accreditationImg:qt,testimonialsContainer:Zt,testimonials:te,testimonialsh5:ee,testimonial:ie,ourInsContainer:oe,ourIns:ne,insCard:se,ourInsh5:re};var z={},J={},v={},G={};(function(o){function e(a,s,l){var u=s.slidesToShow,h=s.currentSlide;return l.length>2*u?a+2*u:h>=l.length?l.length+a:a}function t(a,s){if(s.length>2*a){for(var l={},u=s.length-2*a,h=s.length-u,m=u,c=0;c<h;c++)l[c]=m,m++;var f=s.length+h,g=f+s.slice(0,2*a).length,y=0;for(c=f;c<=g;c++)l[c]=y,y++;var w=f,C=0;for(c=h;c<w;c++)l[c]=C,C++;return l}l={};var x=3*s.length,S=0;for(c=0;c<x;c++)l[c]=S,++S===s.length&&(S=0);return l}function i(a,s){return s.length<a?s:s.length>2*a?s.slice(s.length-2*a,s.length).concat(s,s.slice(0,2*a)):s.concat(s,s)}function n(a,s){return s.length>2*a?2*a:s.length}function r(a,s,l){var u,h=a.currentSlide,m=a.slidesToShow,c=a.itemWidth,f=a.totalItems,g=0,y=0,w=h===0,C=s.length-(s.length-2*m);return s.length<m?(y=g=0,w=u=!1):s.length>2*m?((u=h>=C+s.length)&&(y=-c*(g=h-s.length)),w&&(y=-c*(g=C+(s.length-2*m)))):((u=h>=2*s.length)&&(y=-c*(g=h-s.length)),w&&(y=l.showDots?-c*(g=s.length):-c*(g=f/3))),{isReachingTheEnd:u,isReachingTheStart:w,nextSlide:g,nextPosition:y}}Object.defineProperty(o,"__esModule",{value:!0}),o.getOriginalCounterPart=e,o.getOriginalIndexLookupTableByClones=t,o.getClones=i,o.getInitialSlideInInfiniteMode=n,o.checkClonesPosition=r})(G);var E={};Object.defineProperty(E,"__esModule",{value:!0});function ae(o,e,t,i){var n=0,r=i||t;return e&&r&&(n=o[r].partialVisibilityGutter||o[r].paritialVisibilityGutter),n}function le(o,e){var t;return e[o]&&(t=(100/e[o].items).toFixed(1)),t}function de(o,e,t){return Math.round(t/(e+(o.centerMode?1:0)))}E.getPartialVisibilityGutter=ae,E.getWidthFromDeviceType=le,E.getItemClientSideWidth=de;var b={};Object.defineProperty(b,"__esModule",{value:!0});var K=E;function Q(o){var e=o.slidesToShow;return o.totalItems<e}function ue(o,e){var t,i=o.domLoaded,n=o.slidesToShow,r=o.containerWidth,a=o.itemWidth,s=e.deviceType,l=e.responsive,u=e.ssr,h=e.partialVisbile,m=e.partialVisible,c=!!(i&&n&&r&&a);u&&s&&!c&&(t=K.getWidthFromDeviceType(s,l));var f=!!(u&&s&&!c&&t);return{shouldRenderOnSSR:f,flexBisis:t,domFullyLoaded:c,partialVisibilityGutter:K.getPartialVisibilityGutter(l,h||m,s,o.deviceType),shouldRenderAtAll:f||c}}function he(o,e){var t=e.currentSlide,i=e.slidesToShow;return t<=o&&o<t+i}function at(o,e,t){var i=t||o.transform;return!e.infinite&&o.currentSlide===0||Q(o)?i:i+o.itemWidth/2}function ce(o){return!(0<o.currentSlide)}function lt(o){var e=o.currentSlide,t=o.totalItems;return!(e+o.slidesToShow<t)}function dt(o,e,t,i){e===void 0&&(e=0);var n=o.currentSlide,r=o.slidesToShow,a=lt(o),s=!t.infinite&&a,l=i||o.transform;if(Q(o))return l;var u=l+n*e;return s?u+(o.containerWidth-(o.itemWidth-e)*r):u}function ut(o,e){return o.rtl?-1*e:e}function pe(o,e,t){var i=e.partialVisbile,n=e.partialVisible,r=e.responsive,a=e.deviceType,s=e.centerMode,l=t||o.transform,u=K.getPartialVisibilityGutter(r,i||n,a,o.deviceType);return ut(e,n||i?dt(o,u,e,t):s?at(o,e,t):l)}function me(o,e){var t=o.domLoaded,i=o.slidesToShow,n=o.containerWidth,r=o.itemWidth,a=e.deviceType,s=e.responsive,l=e.slidesToSlide||1,u=!!(t&&i&&n&&r);return e.ssr&&e.deviceType&&!u&&Object.keys(s).forEach(function(h){var m=s[h].slidesToSlide;a===h&&m&&(l=m)}),u&&Object.keys(s).forEach(function(h){var m=s[h],c=m.breakpoint,f=m.slidesToSlide,g=c.max,y=c.min;f&&window.innerWidth>=y&&window.innerWidth<=g&&(l=f)}),l}b.notEnoughChildren=Q,b.getInitialState=ue,b.getIfSlideIsVisbile=he,b.getTransformForCenterMode=at,b.isInLeftEnd=ce,b.isInRightEnd=lt,b.getTransformForPartialVsibile=dt,b.parsePosition=ut,b.getTransform=pe,b.getSlidesToSlide=me;var q={};Object.defineProperty(q,"__esModule",{value:!0});var fe=function(o,e,t){var i;return function(){var n=arguments;i||(o.apply(this,n),i=!0,typeof t=="function"&&t(!0),setTimeout(function(){i=!1,typeof t=="function"&&t(!1)},e))}};q.default=fe;var ht={};(function(o){function e(t,i){var n=i.partialVisbile,r=i.partialVisible,a=i.centerMode,s=i.ssr,l=i.responsive;if((n||r)&&a)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw s?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(o,"__esModule",{value:!0}),o.default=e})(ht);var Z={};Object.defineProperty(Z,"__esModule",{value:!0});var ge=b;function ve(o,e,t){t===void 0&&(t=0);var i,n,r=o.slidesToShow,a=o.currentSlide,s=o.itemWidth,l=o.totalItems,u=ge.getSlidesToSlide(o,e),h=a+1+t+r+(0<t?0:u);return n=h<=l?-s*(i=a+t+(0<t?0:u)):l<h&&a!==l-r?-s*(i=l-r):i=void 0,{nextSlides:i,nextPosition:n}}Z.populateNextSlides=ve;var tt={};Object.defineProperty(tt,"__esModule",{value:!0});var ye=N,Se=b,_e=b;function be(o,e,t){t===void 0&&(t=0);var i,n,r=o.currentSlide,a=o.itemWidth,s=o.slidesToShow,l=e.children,u=e.showDots,h=e.infinite,m=Se.getSlidesToSlide(o,e),c=r-t-(0<t?0:m),f=(ye.Children.toArray(l).length-s)%m;return n=0<=c?(i=c,u&&!h&&0<f&&_e.isInRightEnd(o)&&(i=r-f),-a*i):i=c<0&&r!==0?0:void 0,{nextSlides:i,nextPosition:n}}tt.populatePreviousSlides=be;var ct={};(function(o){function e(t,i,n,r,a,s){var l,u,h=t.itemWidth,m=t.slidesToShow,c=t.totalItems,f=t.currentSlide,g=i.infinite,y=!1,w=Math.round((n-r)/h),C=Math.round((r-n)/h),x=n<a;if(a<n&&w<=m){l="right";var S=Math.abs(-h*(c-m)),I=s-(r-a),P=f===c-m;(Math.abs(I)<=S||P&&g)&&(u=I,y=!0)}return x&&C<=m&&(l="left",((I=s+(a-r))<=0||f===0&&g)&&(y=!0,u=I)),{direction:l,nextPosition:u,canContinue:y}}Object.defineProperty(o,"__esModule",{value:!0}),o.populateSlidesOnMouseTouchMove=e})(ct);Object.defineProperty(v,"__esModule",{value:!0});var W=G;v.getOriginalCounterPart=W.getOriginalCounterPart,v.getClones=W.getClones,v.checkClonesPosition=W.checkClonesPosition,v.getInitialSlideInInfiniteMode=W.getInitialSlideInInfiniteMode;var H=E;v.getWidthFromDeviceType=H.getWidthFromDeviceType,v.getPartialVisibilityGutter=H.getPartialVisibilityGutter,v.getItemClientSideWidth=H.getItemClientSideWidth;var D=b;v.getInitialState=D.getInitialState,v.getIfSlideIsVisbile=D.getIfSlideIsVisbile,v.getTransformForCenterMode=D.getTransformForCenterMode,v.getTransformForPartialVsibile=D.getTransformForPartialVsibile,v.isInLeftEnd=D.isInLeftEnd,v.isInRightEnd=D.isInRightEnd,v.notEnoughChildren=D.notEnoughChildren,v.getSlidesToSlide=D.getSlidesToSlide;var Te=q;v.throttle=Te.default;var we=ht;v.throwError=we.default;var Ce=Z;v.populateNextSlides=Ce.populateNextSlides;var xe=tt;v.populatePreviousSlides=xe.populatePreviousSlides;var Pe=ct;v.populateSlidesOnMouseTouchMove=Pe.populateSlidesOnMouseTouchMove;var $={},Ie=B&&B.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var r in n)n.hasOwnProperty(r)&&(i[r]=n[r])})(e,t)};return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty($,"__esModule",{value:!0});var je=N;function De(o){return"clientY"in o}$.isMouseMoveEvent=De;var ke=function(o){function e(){return o!==null&&o.apply(this,arguments)||this}return Ie(e,o),e}(je.Component);$.default=ke;var et={},it={};Object.defineProperty(it,"__esModule",{value:!0});var Me=G,Re=b;function Ee(o,e,t,i){var n={},r=Re.getSlidesToSlide(e,t);return Array(o).fill(0).forEach(function(a,s){var l=Me.getOriginalCounterPart(s,e,i);if(s===0)n[0]=l;else{var u=n[s-1]+r;n[s]=u}}),n}it.getLookupTableForNextSlides=Ee;Object.defineProperty(et,"__esModule",{value:!0});var A=N,Ne=G,Oe=it,nt=b,Ae=function(o){var e=o.props,t=o.state,i=o.goToSlide,n=o.getState,r=e.showDots,a=e.customDot,s=e.dotListClass,l=e.infinite,u=e.children;if(!r||nt.notEnoughChildren(t))return null;var h,m=t.currentSlide,c=t.slidesToShow,f=nt.getSlidesToSlide(t,e),g=A.Children.toArray(u);h=l?Math.ceil(g.length/f):Math.ceil((g.length-c)/f)+1;var y=Oe.getLookupTableForNextSlides(h,t,e,g),w=Ne.getOriginalIndexLookupTableByClones(c,g),C=w[m];return A.createElement("ul",{className:"react-multi-carousel-dot-list "+s},Array(h).fill(0).map(function(x,S){var I,P;if(l){P=y[S];var R=w[P];I=C===R||R<=C&&C<R+f}else{var O=g.length-c,L=S*f;I=(P=O<L?O:L)===m||P<m&&m<P+f&&m<g.length-c}return a?A.cloneElement(a,{index:S,active:I,key:S,onClick:function(){return i(P)},carouselState:n()}):A.createElement("li",{"data-index":S,key:S,className:"react-multi-carousel-dot "+(I?"react-multi-carousel-dot--active":"")},A.createElement("button",{"aria-label":"Go to slide "+(S+1),onClick:function(){return i(P)}}))}))};et.default=Ae;var U={};Object.defineProperty(U,"__esModule",{value:!0});var F=N,Le=function(o){var e=o.customLeftArrow,t=o.getState,i=o.previous,n=o.disabled,r=o.rtl;if(e)return F.cloneElement(e,{onClick:function(){return i()},carouselState:t(),disabled:n,rtl:r});var a=r?"rtl":"";return F.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+a,onClick:function(){return i()},type:"button",disabled:n})};U.LeftArrow=Le;var We=function(o){var e=o.customRightArrow,t=o.getState,i=o.next,n=o.disabled,r=o.rtl;if(e)return F.cloneElement(e,{onClick:function(){return i()},carouselState:t(),disabled:n,rtl:r});var a=r?"rtl":"";return F.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+a,onClick:function(){return i()},type:"button",disabled:n})};U.RightArrow=We;var ot={};Object.defineProperty(ot,"__esModule",{value:!0});var V=N,X=v,Ve=function(o){var e=o.props,t=o.state,i=o.goToSlide,n=o.clones,r=o.notEnoughChildren,a=t.itemWidth,s=e.children,l=e.infinite,u=e.itemClass,h=e.itemAriaLabel,m=e.partialVisbile,c=e.partialVisible,f=X.getInitialState(t,e),g=f.flexBisis,y=f.shouldRenderOnSSR,w=f.domFullyLoaded,C=f.partialVisibilityGutter;return f.shouldRenderAtAll?(m&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),V.createElement(V.Fragment,null,(l?n:V.Children.toArray(s)).map(function(x,S){return V.createElement("li",{key:S,"data-index":S,onClick:function(){e.focusOnSelect&&i(S)},"aria-hidden":X.getIfSlideIsVisbile(S,t)?"false":"true","aria-label":h||(x.props.ariaLabel?x.props.ariaLabel:null),style:{flex:y?"1 0 "+g+"%":"auto",position:"relative",width:w?((m||c)&&C&&!r?a-C:a)+"px":"auto"},className:"react-multi-carousel-item "+(X.getIfSlideIsVisbile(S,t)?"react-multi-carousel-item--active":"")+" "+u},x)}))):null};ot.default=Ve;var Ye=B&&B.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var r in n)n.hasOwnProperty(r)&&(i[r]=n[r])})(e,t)};return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(J,"__esModule",{value:!0});var T=N,_=v,k=$,Be=et,st=U,Fe=ot,Y=b,j=400,rt="transform 400ms ease-in-out",Ge=function(o){function e(t){var i=o.call(this,t)||this;return i.containerRef=T.createRef(),i.listRef=T.createRef(),i.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:T.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},i.onResize=i.onResize.bind(i),i.handleDown=i.handleDown.bind(i),i.handleMove=i.handleMove.bind(i),i.handleOut=i.handleOut.bind(i),i.onKeyUp=i.onKeyUp.bind(i),i.handleEnter=i.handleEnter.bind(i),i.setIsInThrottle=i.setIsInThrottle.bind(i),i.next=_.throttle(i.next.bind(i),t.transitionDuration||j,i.setIsInThrottle),i.previous=_.throttle(i.previous.bind(i),t.transitionDuration||j,i.setIsInThrottle),i.goToSlide=_.throttle(i.goToSlide.bind(i),t.transitionDuration||j,i.setIsInThrottle),i.onMove=!1,i.initialX=0,i.lastX=0,i.isAnimationAllowed=!1,i.direction="",i.initialY=0,i.isInThrottle=!1,i.transformPlaceHolder=0,i}return Ye(e,o),e.prototype.resetTotalItems=function(){var t=this,i=T.Children.count(this.props.children),n=_.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,i));this.setState({totalItems:i,currentSlide:n},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},e.prototype.setTransformDirectly=function(t,i){var n=this.props.additionalTransfrom;this.transformPlaceHolder=t;var r=Y.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(i),this.listRef.current.style.transform="translate3d("+(r+n)+"px,0,0)")},e.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||rt:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(t,i,n,r){var a=this;r===void 0&&(r=!1),this.isAnimationAllowed=!1;var s=T.Children.toArray(this.props.children),l=_.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,s),u=_.getClones(this.state.slidesToShow,s),h=s.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:n&&!r?h:l},function(){a.correctItemsPosition(i||a.state.itemWidth)})},e.prototype.setItemsToShow=function(t,i){var n=this,r=this.props.responsive;Object.keys(r).forEach(function(a){var s=r[a],l=s.breakpoint,u=s.items,h=l.max,m=l.min,c=[window.innerWidth];window.screen&&window.screen.width&&c.push(window.screen.width);var f=Math.min.apply(Math,c);m<=f&&f<=h&&(n.setState({slidesToShow:u,deviceType:a}),n.setContainerAndItemWidth(u,t,i))})},e.prototype.setContainerAndItemWidth=function(t,i,n){var r=this;if(this.containerRef&&this.containerRef.current){var a=this.containerRef.current.offsetWidth,s=_.getItemClientSideWidth(this.props,t,a);this.setState({containerWidth:a,itemWidth:s},function(){r.props.infinite&&r.setClones(t,s,i,n)}),i&&this.correctItemsPosition(s)}},e.prototype.correctItemsPosition=function(t,i,n){i&&(this.isAnimationAllowed=!0),!i&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var r=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;n&&this.setTransformDirectly(r,!0),this.setState({transform:r})},e.prototype.onResize=function(t){var i;i=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(i)},e.prototype.componentDidUpdate=function(t,i){var n=this,r=t.keyBoardControl,a=t.autoPlay,s=t.children,l=i.containerWidth,u=i.domLoaded,h=i.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){n.setItemsToShow(!0)},this.props.transitionDuration||j)),r&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!r&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),a&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),a||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),s.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){n.props.infinite?n.setClones(n.state.slidesToShow,n.state.itemWidth,!0,!0):n.resetTotalItems()},this.props.transitionDuration||j):this.props.infinite&&this.state.currentSlide!==h&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&_.isInRightEnd(this.state)){var m=this.props.transitionDuration||j;e.isInThrottleTimeout=setTimeout(function(){n.setIsInThrottle(!1),n.resetAutoplayInterval(),n.goToSlide(0,void 0,!!n.props.rewindWithAnimation)},m+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(t){var i=this,n=t.domLoaded,r=T.Children.toArray(this.props.children),a=_.checkClonesPosition(this.state,r,this.props),s=a.isReachingTheEnd,l=a.isReachingTheStart,u=a.nextSlide,h=a.nextPosition;this.state.domLoaded&&n&&(s||l)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){i.setState({transform:h,currentSlide:u})},this.props.transitionDuration||j))},e.prototype.next=function(t){var i=this;t===void 0&&(t=0);var n=this.props,r=n.afterChange,a=n.beforeChange;if(!_.notEnoughChildren(this.state)){var s=_.populateNextSlides(this.state,this.props,t),l=s.nextSlides,u=s.nextPosition,h=this.state.currentSlide;l!==void 0&&u!==void 0&&(typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof r=="function"&&(e.afterChangeTimeout=setTimeout(function(){r(h,i.getState())},i.props.transitionDuration||j))}))}},e.prototype.previous=function(t){var i=this;t===void 0&&(t=0);var n=this.props,r=n.afterChange,a=n.beforeChange;if(!_.notEnoughChildren(this.state)){var s=_.populatePreviousSlides(this.state,this.props,t),l=s.nextSlides,u=s.nextPosition;if(l!==void 0&&u!==void 0){var h=this.state.currentSlide;typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof r=="function"&&(e.afterChangeTimeout2=setTimeout(function(){r(h,i.getState())},i.props.transitionDuration||j))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(t){var i=t.clientX,n=t.clientY;return{clientX:Y.parsePosition(this.props,i),clientY:Y.parsePosition(this.props,n)}},e.prototype.handleDown=function(t){if(!(!k.isMouseMoveEvent(t)&&!this.props.swipeable||k.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var i=this.getCords(k.isMouseMoveEvent(t)?t:t.touches[0]),n=i.clientX,r=i.clientY;this.onMove=!0,this.initialX=n,this.initialY=r,this.lastX=n,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(t){if(!(!k.isMouseMoveEvent(t)&&!this.props.swipeable||k.isMouseMoveEvent(t)&&!this.props.draggable||_.notEnoughChildren(this.state))){var i=this.getCords(k.isMouseMoveEvent(t)?t:t.touches[0]),n=i.clientX,r=i.clientY,a=this.initialX-n,s=this.initialY-r;if(this.onMove){if(!(Math.abs(a)>Math.abs(s)))return;var l=_.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,n,this.transformPlaceHolder),u=l.direction,h=l.nextPosition,m=l.canContinue;u&&(this.direction=u,m&&h!==void 0&&this.setTransformDirectly(h)),this.lastX=n}}},e.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var i=t.type==="touchend"&&!this.props.swipeable,n=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!i&&!n&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var r=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(r)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(r=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(r)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(t){var i=t.getBoundingClientRect(),n=i.top,r=n===void 0?0:n,a=i.left,s=a===void 0?0:a,l=i.bottom,u=l===void 0?0:l,h=i.right,m=h===void 0?0:h;return 0<=r&&0<=s&&u<=(window.innerHeight||document.documentElement.clientHeight)&&m<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},e.prototype.onKeyUp=function(t){var i=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(i))return this.previous();break;case 39:if(this.isChildOfCarousel(i))return this.next();break;case 9:if(this.isChildOfCarousel(i)&&i instanceof HTMLInputElement&&this.isInViewport(i))return this.next()}},e.prototype.handleEnter=function(t){k.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(t,i,n){var r=this;if(n===void 0&&(n=!0),!this.isInThrottle){var a=this.state.itemWidth,s=this.props,l=s.afterChange,u=s.beforeChange,h=this.state.currentSlide;typeof u!="function"||i&&(typeof i!="object"||i.skipBeforeChange)||u(t,this.getState()),this.isAnimationAllowed=n,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-a*t},function(){r.props.infinite&&r.correctClonesPosition({domLoaded:!0}),typeof l!="function"||i&&(typeof i!="object"||i.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){l(h,r.getState())},r.props.transitionDuration||j))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(t){var i=this,n=this.props,r=n.customLeftArrow,a=n.rtl;return T.createElement(st.LeftArrow,{customLeftArrow:r,getState:function(){return i.getState()},previous:this.previous,disabled:t,rtl:a})},e.prototype.renderRightArrow=function(t){var i=this,n=this.props,r=n.customRightArrow,a=n.rtl;return T.createElement(st.RightArrow,{customRightArrow:r,getState:function(){return i.getState()},next:this.next,disabled:t,rtl:a})},e.prototype.renderButtonGroups=function(){var t=this,i=this.props.customButtonGroup;return i?T.cloneElement(i,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(n,r){return t.goToSlide(n,r)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var t=this;return T.createElement(Be.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},e.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var i=T.Children.toArray(this.props.children);t=_.getClones(this.state.slidesToShow,i)}return T.createElement(Fe.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:_.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var t=this.props,i=t.deviceType,n=t.arrows,r=t.renderArrowsWhenDisabled,a=t.removeArrowOnDeviceType,s=t.infinite,l=t.containerClass,u=t.sliderClass,h=t.customTransition,m=t.additionalTransfrom,c=t.renderDotsOutside,f=t.renderButtonGroupOutside,g=t.className,y=t.rtl,w=_.getInitialState(this.state,this.props),C=w.shouldRenderOnSSR,x=w.shouldRenderAtAll,S=_.isInLeftEnd(this.state),I=_.isInRightEnd(this.state),P=n&&!(a&&(i&&-1<a.indexOf(i)||this.state.deviceType&&-1<a.indexOf(this.state.deviceType)))&&!_.notEnoughChildren(this.state)&&x,R=!s&&S,O=!s&&I,L=Y.getTransform(this.state,this.props);return T.createElement(T.Fragment,null,T.createElement("div",{className:"react-multi-carousel-list "+l+" "+g,dir:y?"rtl":"ltr",ref:this.containerRef},T.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?h||rt:"none",overflow:C?"hidden":"unset",transform:"translate3d("+(L+m)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),P&&(!R||r)&&this.renderLeftArrow(R),P&&(!O||r)&&this.renderRightArrow(O),x&&!f&&this.renderButtonGroups(),x&&!c&&this.renderDotsList()),x&&c&&this.renderDotsList(),x&&f&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(T.Component);J.default=Ge;Object.defineProperty(z,"__esModule",{value:!0});var $e=J;z.default=$e.default;var Ue=z;const pt=mt(Ue);function He(){return d.jsx("div",{className:p.aboutInsContainer,children:d.jsxs("div",{className:p.aboutIns,children:[d.jsx("img",{src:"https://dpu.edu.in/img/compression/buildings3.jpg",className:p.aboutLeft}),d.jsx("div",{className:p.aboutRight,children:d.jsxs("div",{className:p.aboutRightbox,children:[d.jsx("h5",{className:p.aboutRightboxh5,children:"About Institute"}),d.jsx("p",{className:p.aboutRightboxp,children:"Dr. D. Y. Patil Vidyapeeth (DPU), Pune, sponsored by Dr. D. Y. Patil Vidyapeeth Society, Pune, was declared as “Deemed-to-be-University” under Section 3 of UGC Act 1956 in 2003. From a humble beginning with one constituent unit i.e. Dr. D. Y. Patil Medical College, Hospital and Research Centre, Pune; DPU over the last 16 years has grown exponentially with addition of eight more constituent units under its ambit. The Government of India, MHRD, on the advice of UGC, declared Dr. D. Y. Patil Vidyapeeth, Pune as Deemed-to-be University comprising of Dr. D. Y. Patil Medical College, Hospital and Research Centre, Pimpri, Pune vide its notification dated 11th January 2003."}),d.jsx("div",{className:p.readmorebtn,children:d.jsx(M,{to:"/institute-profile",children:"Read More"})})]})})]})})}function Xe(){const o=[{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"},{heading:"Oral Health & Prosthodontics for the Elderly",date:"19/Jan/2024 ",place:"Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune"}],e=[{img:"https://dpu.edu.in/img/physiodrom-img.jpg",url:"https://physiotherapy.dpu.edu.in/physiodrome/"}];return d.jsxs("div",{className:p.eventswrap,children:[d.jsxs("div",{className:p.insevents,children:[d.jsx("h3",{className:p.inseventsh3,children:"Events"}),d.jsx("div",{className:p.inseventsbox,children:d.jsx("div",{className:p.scrollList,children:o.map((t,i)=>{var n,r,a,s,l,u;return d.jsxs("div",{className:p.uevent,children:[d.jsxs("div",{className:p.ueventdate,children:[d.jsx("p",{children:(r=(n=t==null?void 0:t.date)==null?void 0:n.split("/"))==null?void 0:r[1]}),d.jsx("h6",{children:(s=(a=t==null?void 0:t.date)==null?void 0:a.split("/"))==null?void 0:s[0]}),d.jsx("p",{children:(u=(l=t==null?void 0:t.date)==null?void 0:l.split("/"))==null?void 0:u[2]})]},i),d.jsxs("div",{className:p.ueventtext,children:[d.jsx("h5",{className:p.ueventhead,children:t==null?void 0:t.heading}),d.jsx("p",{className:p.ueventddate,children:t==null?void 0:t.date}),d.jsx("h5",{className:p.ueventPlace,children:t==null?void 0:t.place}),d.jsx(M,{to:"/upcoming-event-details",className:p.eventreadmore,children:"Read More"})]},i)]},i)})})})]}),d.jsxs("div",{className:p.inseventcard,children:[d.jsx("h3",{className:p.inseventsh3,children:"Upcoming Events"}),d.jsx("img",{src:e[0].img,alt:""})]})]})}function Ke(){const o=[{name:"Convocation Notification",url:"/",pdf:"https://dpu.edu.in/Documents/2024/notification/notification-15th-convocation.pdf"},{name:"Awareness about ABC Scheme",url:"abc-awareness"},{name:"Examination Timetable",url:"examination-time-table"}],e=[{img:"https://dpu.edu.in/img/convocation.jpg",url:"convocation",pdf:"https://dpu.edu.in/Documents/2024/notification/notification-15th-convocation.pdf"},{img:"https://dpu.edu.in/img/international-admission.jpg",url:"registration"}];return d.jsxs("div",{className:p.linksContainer,children:[d.jsx("div",{className:p.linkswrap,children:d.jsx("div",{className:p.links,children:o==null?void 0:o.map((t,i)=>d.jsx(d.Fragment,{children:t!=null&&t.pdf?d.jsx("a",{className:p.implinkitem,href:t==null?void 0:t.pdf,target:"_blank",rel:"noopener noreferrer",children:t==null?void 0:t.name}):d.jsx(M,{to:`/${t==null?void 0:t.url}`,className:p.implinkitem,children:t==null?void 0:t.name},i)}))})}),d.jsx("div",{className:p.linkswrap,children:d.jsx("div",{className:p.linkbrochures,children:e==null?void 0:e.map((t,i)=>d.jsx(d.Fragment,{children:t!=null&&t.pdf?d.jsx("a",{className:p.impbrocureitem,href:t==null?void 0:t.pdf,target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:t==null?void 0:t.img,alt:""})}):d.jsx(M,{to:`/${t==null?void 0:t.url}`,className:p.impbrocureitem,children:d.jsx("img",{src:t==null?void 0:t.img,alt:""})},i)}))})}),d.jsx(Xe,{})]})}function ze(){var e;const o=[{thumbnail:"https://dpu.edu.in/img/compression/smu-visit.jpg",link:"https://www.youtube.com/watch?v=8WSGm84Pbm4&ab_channel=DPU",desc:"Honorable Chancellor Dr. P D Patil Sir Visit to Semey Medical University, Kazakhstan"},{thumbnail:"https://dpu.edu.in/img/compression/dr-sebastiano-andreana.jpg",link:"https://www.youtube.com/embed/N6yfDbNf_AQ?rel=0",desc:"Visit to DPU Dental Implant Centre by Dr. Sebastiano Andreana, NY, USA"},{thumbnail:"https://dpu.edu.in/img/compression/dr-vijay-bhatkar.jpg",link:"https://www.youtube.com/watch?v=AeXjynxLeck",desc:"Padma Bhushan Dr. Vijay P Bhatkar, Indian Computer Scientist, Visits Dr. D Y Patil Vidyapeeth, Pune"}];return d.jsxs("div",{className:p.videogalery,children:[d.jsx("div",{className:p.galerybox,children:(e=o==null?void 0:o.slice(0,3))==null?void 0:e.map((t,i)=>d.jsxs(M,{className:p.galeryItem,to:t==null?void 0:t.link,children:[d.jsx("img",{src:t==null?void 0:t.thumbnail,alt:"thumbnail"}),d.jsx("p",{children:t==null?void 0:t.desc})]},i))}),d.jsx("div",{className:p.viewmorebtn,children:d.jsx(M,{to:"/video-gallery",children:"View More"})})]})}const Je={desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:680},items:3},mobile:{breakpoint:{max:680,min:0},items:2}};function Qe(){const o=["https://dpu.edu.in/images/approval/association-of-india.png","https://dpu.edu.in/images/approval/naac.png","https://dpu.edu.in/images/approval/iso-2015-blue.png","https://dpu.edu.in/images/approval/commonwealth.png"];return d.jsx("div",{className:p.accreditationContainer,children:d.jsx("div",{className:p.accreditationWrap,children:d.jsx(pt,{swipeable:!1,draggable:!1,responsive:Je,ssr:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:2e3,slidesToSlide:1,keyBoardControl:!0,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:o==null?void 0:o.map((e,t)=>d.jsx("img",{className:p.accreditationImg,src:e,alt:"accreditation"},t))})})})}function qe(){const o=[{img:"https://dpu.edu.in/images/testimonials/dr-k-kasturirangan.jpg",name:"Dr. K. Kasturirangan",text:"DPU is an Academic Model Worth Emulating"},{img:"https://dpu.edu.in/images/testimonials/dr-apj-abdul-kalam.jpg",name:"Dr. APJ Abdul Kalam",text:"DPU is an Academic Model Worth Emulating"},{img:"https://dpu.edu.in/images/testimonials/dr-raghunath-mashekar.jpg",name:"Dr. Raghunath Mashelkar",text:"DPU is Setting New Standards of Excellence & New Benchmarks"}];return d.jsxs("div",{className:p.testimonialsContainer,children:[d.jsx("h5",{className:p.testimonialsh5,children:"Testimonials"}),d.jsx("div",{className:p.testimonials,children:o==null?void 0:o.map((e,t)=>d.jsxs("div",{className:p.testimonial,children:[d.jsx("img",{src:e==null?void 0:e.img,alt:"testimonial"}),d.jsx("h6",{children:e==null?void 0:e.name}),d.jsx("p",{children:e==null?void 0:e.text})]},t))})]})}function Ze(){const o=[{img:"https://dpu.edu.in/img/compression/medical-clg.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/dental.jpg",name:"Dr. D. Y. Patil Dental College & Hospital",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/biotech-building.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/gbsrc-building.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/nursing-build.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/optometry.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/physio-build1.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"},{img:"https://dpu.edu.in/img/compression/sod.jpg",name:"Dr. D. Y. Patil Medical College, Hospital & Research Centre",link:"/medical-profile"}];return d.jsxs("div",{className:p.ourInsContainer,children:[d.jsx("h5",{className:`${p.testimonialsh5} ${p.ourInsh5}`,children:"Our Institutes"}),d.jsx("div",{className:p.ourIns,children:o==null?void 0:o.map((e,t)=>d.jsxs(M,{className:p.insCard,to:e==null?void 0:e.link,children:[d.jsx("img",{src:e==null?void 0:e.img,alt:e==null?void 0:e.name}),d.jsx("p",{children:e==null?void 0:e.name})]},t))})]})}const ti={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}};function ii(){const o=[{id:1,url:"/images/pexel-1.jpg"},{id:2,url:"/images/pexel-2.jpg"},{id:3,url:"/images/pexel-3.jpg"}];return d.jsx(d.Fragment,{children:d.jsxs(ft,{children:[d.jsx("div",{className:p.slide,children:d.jsx(pt,{swipeable:!1,draggable:!1,responsive:ti,ssr:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:2e3,slidesToSlide:1,keyBoardControl:!0,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:o==null?void 0:o.map(e=>d.jsx("img",{className:p.slideImg,src:e.url,alt:""},e==null?void 0:e.id))})}),d.jsx(He,{}),d.jsx(Ke,{}),d.jsx(ze,{}),d.jsx(Qe,{}),d.jsx(qe,{}),d.jsx(Ze,{})]})})}export{ii as default};