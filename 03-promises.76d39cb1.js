function e(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{timeoutId=setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(o=>{o.preventDefault();const{delay:t,step:n,amount:l}=o.target.elements;let i=Number(l.value),m=Number(t.value),r=Number(n.value);for(let o=1;o<=i;o+=1)e(o,m).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),m+=r}));
//# sourceMappingURL=03-promises.76d39cb1.js.map
