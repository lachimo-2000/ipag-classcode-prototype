import {seed} from './seed.js';
export const uid=()=>{if(globalThis.crypto.randomUUID)return globalThis.crypto.randomUUID();const a=globalThis.crypto.getRandomValues(new Uint8Array(16));a[6]=(a[6]&15)|64;a[8]=(a[8]&63)|128;const x=[...a].map(v=>v.toString(16).padStart(2,'0')).join('');return `${x.slice(0,8)}-${x.slice(8,12)}-${x.slice(12,16)}-${x.slice(16,20)}-${x.slice(20)}`};
export const pad=(v,n)=>String(v).padStart(n,'0');
export const norm=v=>String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').trim().toLowerCase().replace(/\s+/g,' ');
const must=(ok,msg)=>{if(!ok)throw new Error(msg)};
export function initialState(){
 const s={version:1,owners:structuredClone(seed.owners),categories:structuredClone(seed.categories),contents:[],classes:[],requests:{},counters:{},nextContent:1,audit:[]};
 const samples=[['IPAG','ORG','Văn hóa và cách làm việc chung'],['IPAG','SKL','Giao tiếp và phối hợp hiệu quả'],['IPAG','LEAD','Phản hồi phát triển đội ngũ'],['VNDS','INVP','Tìm hiểu sản phẩm đầu tư'],['VNDS','INVA','Thực hành phân tích doanh nghiệp'],['PTI','INSF','Nhập môn sản phẩm bảo hiểm'],['PTI','INSC','Quy trình tiếp nhận bồi thường'],['IPAS','DATA','Ứng dụng AI trong công việc'],['HOMEFOOD','NUT','Xây dựng bữa ăn cân bằng'],['GSF','FNB','Thực hành dịch vụ nhà hàng']];
 samples.forEach(([owner,cat,title])=>createContent(s,{owner,categoryId:'cat-'+cat,title}));
 [[0,'OF','2026-10-05'],[1,'ON','2026-10-12'],[3,'EL','2026-10-15'],[5,'BL','2026-10-20'],[0,'ON','2026-10-23']].forEach(([i,mode,date],j)=>issue(s,{contentId:s.contents[i].id,mode,date,label:'Lớp minh họa '+(j+1),requestId:'seed-'+j}));
 s.audit=[];return s;
}
function log(s,action,detail){s.audit.unshift({id:uid(),time:new Date().toISOString(),action,detail});s.audit=s.audit.slice(0,300)}
export function categoryFor(s,c){return s.categories.find(x=>x.id===c.categoryId)}
export function codeFor(s,c,mode,year,run){return `${c.owner}_${categoryFor(s,c).code}_${pad(c.number,4)}_${mode}_${year}_${pad(run,3)}`}
export function preview(s,contentId,mode,date){
 const c=s.contents.find(x=>x.id===contentId);if(!c||!mode||!/^\d{4}-\d{2}-\d{2}$/.test(date))return null;
 const year=Number(date.slice(0,4));return codeFor(s,c,mode,year,(s.counters[`${c.id}|${year}`]||0)+1);
}
export function createContent(s,{title,owner,categoryId}){
 title=String(title||'').trim();must(title.length>=4&&title.length<=160,'Tên nội dung cần từ 4 đến 160 ký tự.');must(s.owners.some(o=>o.code===owner),'Chọn đơn vị sở hữu hợp lệ.');must(s.categories.some(c=>c.id===categoryId&&c.active),'Chọn CAT đang hoạt động.');must(!s.contents.some(c=>norm(c.title)===norm(title)&&c.owner===owner),'Đã có nội dung cùng tên trong đơn vị này. Hãy chọn nội dung đã có.');must(s.nextContent<=9999,'Đã hết dải KKKK. Cần điều chỉnh quy tắc.');
 const c={id:uid(),number:s.nextContent++,title,owner,categoryId};s.contents.push(c);log(s,'Đăng ký nội dung',`${pad(c.number,4)} · ${title}`);return c;
}
export function issue(s,input){
 const {contentId,mode,date,requestId}=input;must(typeof requestId==='string'&&requestId.length>0,'Thiếu ID yêu cầu.');if(Object.hasOwn(s.requests,requestId))return {record:s.classes.find(c=>c.id===s.requests[requestId]),reused:true};
 const c=s.contents.find(c=>c.id===contentId);must(c,'Chọn nội dung lớp.');must(categoryFor(s,c)?.active,'CAT đã ngừng sử dụng. Hãy chuyển nội dung sang nhóm còn hiệu lực.');must(['OF','ON','EL','BL'].includes(mode),'Chọn hình thức học.');
 must(/^\d{4}-\d{2}-\d{2}$/.test(date||''),'Nhập ngày mở lớp.');const parsed=new Date(date+'T00:00:00Z');must(!isNaN(parsed)&&parsed.toISOString().slice(0,10)===date,'Ngày mở lớp không hợp lệ.');const year=parsed.getUTCFullYear();must(year>=1900&&year<=2199,'Năm phải từ 1900 đến 2199.');
 const key=`${c.id}|${year}`,run=(s.counters[key]||0)+1;must(run<=999,'Đã hết dải DDD cho nội dung trong năm này.');const code=codeFor(s,c,mode,year,run);must(!s.classes.some(x=>x.code===code||x.aliases.includes(code)),'Mã đã tồn tại.');
 const record={id:uid(),contentId,mode,date,year,run,code,aliases:[],label:String(input.label||'').trim().slice(0,120),status:'active',createdAt:new Date().toISOString()};s.counters[key]=run;s.classes.unshift(record);s.requests[requestId]=record.id;log(s,'Cấp mã lớp',code);return {record,reused:false};
}
export function addCategory(s,{code,name,include,exclude}){
 code=String(code||'').trim().toUpperCase();name=String(name||'').trim();must(/^[A-Z][A-Z0-9]{1,7}$/.test(code),'CAT cần 2–8 ký tự A–Z, 0–9, bắt đầu bằng chữ.');must(!s.categories.some(c=>c.code===code),'Mã CAT đã tồn tại, kể cả CAT đã ngừng.');must(name.length>=4&&name.length<=100,'Tên nhóm cần 4–100 ký tự.');must(!s.categories.some(c=>norm(c.name)===norm(name)),'Tên nhóm đã tồn tại.');must(String(include||'').trim().length>=8,'Mô tả nội dung bao gồm để người dùng chọn đúng.');
 const c={id:uid(),code,name,include:String(include).trim().slice(0,500),exclude:String(exclude||'').trim().slice(0,500),active:true};s.categories.push(c);log(s,'Thêm CAT',`${code} · ${name}`);return c;
}
export function setCategoryActive(s,id,active){const c=s.categories.find(c=>c.id===id);must(c,'Không tìm thấy CAT.');c.active=active;log(s,active?'Kích hoạt CAT':'Ngừng CAT',c.code);return c}
function recode(s,content){for(const r of s.classes.filter(x=>x.contentId===content.id)){const next=codeFor(s,content,r.mode,r.year,r.run);if(next!==r.code){must(!s.classes.some(x=>x.id!==r.id&&(x.code===next||x.aliases.includes(next))),'Mã mới trùng với mã đã lưu.');r.aliases=[...new Set([...r.aliases,r.code])].filter(x=>x!==next);r.code=next}}}
export function editContent(s,id,{title,owner,categoryId,reason}){
 const c=s.contents.find(x=>x.id===id);must(c,'Không tìm thấy nội dung.');must(String(reason||'').trim().length>=5,'Ghi lý do thay đổi (ít nhất 5 ký tự).');must(s.owners.some(x=>x.code===owner),'Đơn vị không hợp lệ.');must(s.categories.some(x=>x.id===categoryId&&x.active),'CAT không hoạt động.');must(String(title||'').trim().length>=4&&String(title).trim().length<=160,'Tên cần 4–160 ký tự.');must(!s.contents.some(x=>x.id!==id&&x.owner===owner&&norm(x.title)===norm(title)),'Tên trùng với nội dung đã có.');const old=`${c.owner}/${categoryFor(s,c).code}`;Object.assign(c,{title:title.trim(),owner,categoryId});recode(s,c);log(s,'Chuyển / sửa nội dung',`${pad(c.number,4)}: ${old} → ${owner}/${categoryFor(s,c).code}. ${reason}`);return c;
}
export function renameCategory(s,id,{name,code,reason}){
 const c=s.categories.find(x=>x.id===id);must(c,'Không tìm thấy CAT.');code=String(code).trim().toUpperCase();must(/^[A-Z][A-Z0-9]{1,7}$/.test(code),'Mã CAT không hợp lệ.');must(!s.categories.some(x=>x.id!==id&&x.code===code),'Mã CAT đã tồn tại.');must(String(name).trim().length>=4&&String(name).trim().length<=100,'Tên nhóm cần 4–100 ký tự.');must(!s.categories.some(x=>x.id!==id&&norm(x.name)===norm(name)),'Tên nhóm đã tồn tại.');must(String(reason||'').trim().length>=5,'Ghi lý do thay đổi.');const old=c.code;c.code=code;c.name=name.trim();s.contents.filter(x=>x.categoryId===id).forEach(x=>recode(s,x));log(s,'Sửa CAT',`${old} → ${code}. ${reason}`);return c;
}
export function cancelClass(s,id){const c=s.classes.find(c=>c.id===id);must(c,'Không tìm thấy lớp.');must(c.status!=='cancelled','Lớp đã hủy.');c.status='cancelled';log(s,'Hủy lớp, giữ mã',c.code);return c}
export function csvCell(v){let x=String(v??'');if(/^[=+@\-\t\r]/.test(x))x="'"+x;return '"'+x.replaceAll('"','""')+'"'}
