(()=>{"use strict";const e=e=>{var l;const a=e.dataset.id,r=e.querySelector('[name="name"]');let o=null!==(l=r?.value.trim())&&void 0!==l?l:"";r&&(o||(o=`${a}-${Math.floor(1e3*Math.random())}`),r.value=o),e.querySelectorAll(".tag").forEach((l=>{const a=e.querySelector('[name="tagtype"]')?.value||l.name;a&&(l.value=t(a,e))})),e.querySelectorAll("span.mail-tag").forEach((e=>{e.innerText=`[${o}]`})),e.querySelectorAll("input.mail-tag").forEach((e=>{e.value=`[${o}]`}))},t=(e,t)=>{var l,a;const r=null!==(l=t.querySelector('[name="name"]')?.value)&&void 0!==l?l:"",o=null!==(a=t.querySelector(`.scope.${e}`))&&void 0!==a?a:t,n=[];return o.querySelectorAll(".option").forEach((e=>{"checkbox"===e.type?e.checked&&n.push(e.name):"radio"===e.type?e.checked&&!e.classList.contains("default")&&n.push(`${e.name}:${e.value}`):""!==e.value&&(e.classList.contains("filetype")?n.push(`${e.name}:${e.value.split(/[,|\s]+/).join("|")}`):e.classList.contains("color")?n.push(`${e.name}:#${e.value}`):"class"===e.name?e.value.split(" ").forEach((e=>{n.push(`class:${e}`)})):n.push(`${e.name}:${e.value}`))})),"radio"===e&&n.push("default:1"),`[${(e+(t.querySelector('[name="required"]:checked')?"*":"")+" "+r+" "+n.join(" ")).trim()}]`};document.querySelectorAll("#tag-generator-list button").forEach((t=>{t.addEventListener("click",(l=>{const a=document.querySelector(`#${t.dataset.target}`);if(a){const t=a.querySelector("form.tag-generator-panel");t&&"1"===t.dataset.version&&(t=>{e(t),t.querySelectorAll(".control-box").forEach((l=>{l.addEventListener("change",(l=>{l.target,e(t)}))}))})(t),a.showModal()}}))})),document.querySelectorAll("dialog.tag-generator-dialog").forEach((e=>{e.querySelectorAll(".close-modal").forEach((t=>{t.addEventListener("click",(t=>e.close("")))})),e.querySelectorAll(".insert-tag").forEach((t=>{t.addEventListener("click",(t=>{const l=e.querySelector(".tag");e.close(l?.value)}))})),e.addEventListener("close",(t=>{var l;const a=document.querySelector("textarea#wpcf7-form");if(null===a)return;if(""===e.returnValue)return;const r=null!==(l=a.selectionEnd)&&void 0!==l?l:0;0===r&&(e.returnValue+="\n\n"),a.value=a.value.substring(0,r)+e.returnValue+a.value.substring(r),a.selectionStart=r,a.selectionEnd=r+e.returnValue.length,a.focus()}))}))})();