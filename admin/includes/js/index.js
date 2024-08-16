(()=>{"use strict";const e=e=>{var t;const l=e.dataset.id,r=e.querySelector('[name="name"]');let n=null!==(t=r?.value.trim())&&void 0!==t?t:"";r&&(n||(n=`${l}-${Math.floor(1e3*Math.random())}`),r.value=n),e.querySelectorAll(".tag").forEach((t=>{const l=e.querySelector('[name="tagtype"]')?.value||t.name;l&&(t.value=a(l,e))})),e.querySelectorAll("span.mail-tag").forEach((e=>{e.innerText=`[${n}]`})),e.querySelectorAll("input.mail-tag").forEach((e=>{e.value=`[${n}]`}))},a=(e,a)=>{var t,l,r;const n=null!==(t=a.querySelector(`.scope.${e}`))&&void 0!==t?t:a,o=e+(a.querySelector('[name="required"]:checked')?"*":""),c=null!==(l=a.querySelector('[name="name"]')?.value)&&void 0!==l?l:"",u=[];n.querySelectorAll(".option").forEach((e=>{"checkbox"===e.type?e.checked&&u.push(e.name):"radio"===e.type?e.checked&&!e.classList.contains("default")&&u.push(`${e.name}:${e.value}`):""!==e.value&&(e.classList.contains("filetype")?u.push(`${e.name}:${e.value.split(/[,|\s]+/).join("|")}`):e.classList.contains("color")?u.push(`${e.name}:#${e.value}`):"class"===e.name?e.value.split(" ").forEach((e=>{u.push(`class:${e}`)})):u.push(`${e.name}:${e.value}`))})),"radio"===e&&u.push("default:1");const s=null!==(r=n.querySelector('[name="values"]')?.value.split("\n").map((e=>e.trim())).filter((e=>""!==e)).map((e=>`"${e.replace(/["]/g,"&quot;")}"`)))&&void 0!==r?r:[],i=[o,c,u.join(" "),s.join(" ")].map((e=>e.trim())).filter((e=>""!==e)),v=n.querySelector('[name="content"]')?.value.trim();return v?`[${i.join(" ")}] ${v} [/${o}]`:`[${i.join(" ")}]`},t=e=>{e.querySelectorAll('[data-tag-part="tag"]').forEach((a=>{a.value=l(e)}))},l=e=>{var a,t;const l=e.querySelector('[data-tag-part="basetype"]')?.value.trim();if(!l)return;let r=l;const n=e.querySelector('[data-tag-part="type-suffix"]');n&&(["checkbox","radio"].includes(n?.type)?r+=n.checked?n.value.trim():"":r+=n.value.trim());const o=e.querySelector('[data-tag-part="name"]');let c=null!==(a=o?.value.trim())&&void 0!==a?a:"";o&&(c||(c=`${l}-${Math.floor(1e3*Math.random())}`),o.value=c);const u=[];e.querySelectorAll('[data-tag-part="option"]').forEach((e=>{const a=e.dataset.tagOption?.trim();if(a&&(!["checkbox","radio"].includes(e?.type)||e.checked))if("class:"===a)e.value?.split(" ").forEach((e=>{(e=e.trim())&&u.push(a+e)}));else if(a.endsWith(":")){let t=e.value?.trim();t&&u.push(a+t)}else u.push(a)}));const s=null!==(t=e.querySelector('[data-tag-part="value"]')?.value.split("\n").map((e=>e.trim())).filter((e=>""!==e)).map((e=>`"${e.replace(/["]/g,"&quot;")}"`)))&&void 0!==t?t:[];return`[${[r,c,u.join(" "),s.join(" ")].map((e=>e.trim())).filter((e=>""!==e)).join(" ")}]`};document.querySelectorAll('[data-taggen="open-dialog"]').forEach((a=>{a.addEventListener("click",(l=>{const r=document.querySelector(`#${a.dataset.target}`);if(r){const a=r.querySelector("form.tag-generator-panel");a&&("1"===a.dataset.version?(a=>{e(a),a.querySelectorAll(".control-box").forEach((t=>{t.addEventListener("change",(t=>{var l;"name"===(l=t.target).name&&(l.value=l.value.replace(/[^0-9a-zA-Z:._-]/g,"").replace(/^[^a-zA-Z]+/,"")),l.classList.contains("numeric")&&(l.value=l.value.replace(/[^0-9.-]/g,"")),l.classList.contains("idvalue")&&(l.value=l.value.replace(/[^-0-9a-zA-Z_]/g,"")),l.classList.contains("classvalue")&&(l.value=l.value.split(" ").map((e=>e.replace(/[^-0-9a-zA-Z_]/g,""))).join(" ").replace(/\s+/g," ").trim()),l.classList.contains("color")&&(l.value=l.value.replace(/[^0-9a-fA-F]/g,"")),l.classList.contains("filesize")&&(l.value=l.value.replace(/[^0-9kKmMbB]/g,"")),l.classList.contains("filetype")&&(l.value=l.value.replace(/[^0-9a-zA-Z.,|\s]/g,"")),l.classList.contains("date")&&(l.value.match(/^\d{4}-\d{2}-\d{2}$/)||(l.value="")),"values"===l.name&&(l.value=l.value.trim()),e(a)}))}))})(a):"2"===a.dataset.version&&(e=>{var a;null!==(a=e.reset())&&void 0!==a||t(e),e.querySelectorAll(".control-box").forEach((a=>{a.addEventListener("change",(a=>{t(e)})),a.addEventListener("keyup",(a=>{var l;"text"===(null!==(l=a.target.type)&&void 0!==l?l:"")&&t(e)}))}))})(a)),r.showModal()}}))})),document.querySelectorAll("dialog.tag-generator-dialog").forEach((e=>{e.querySelectorAll('[data-taggen="close-dialog"]').forEach((a=>{a.addEventListener("click",(a=>e.close("")))})),e.querySelectorAll('[data-taggen="insert-tag"], .insert-tag').forEach((a=>{a.addEventListener("click",(a=>{const t=e.querySelector('[data-tag-part="tag"], .tag');e.close(t?.value)}))})),e.addEventListener("close",(a=>{var t;const l=document.querySelector("textarea#wpcf7-form");if(null===l)return;if(""===e.returnValue)return;const r=null!==(t=l.selectionEnd)&&void 0!==t?t:0;0===r&&(e.returnValue+="\n\n"),l.value=l.value.substring(0,r)+e.returnValue+l.value.substring(r),l.selectionStart=r,l.selectionEnd=r+e.returnValue.length,l.focus()}))}))})();