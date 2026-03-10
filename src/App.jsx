import{useState,useCallback}from"react";
const V=[{word:"Ambitious",translation:"Амбициозный",example:"She is very ambitious.",level:"B1"},{word:"Eloquent",translation:"Красноречивый",example:"He gave an eloquent speech.",level:"B2"},{word:"Persevere",translation:"Настойчиво продолжать",example:"You must persevere.",level:"B2"},{word:"Diligent",translation:"Прилежный",example:"A diligent student always studies.",level:"B1"},{word:"Flourish",translation:"Процветать",example:"Plants flourish in sunlight.",level:"B2"},{word:"Innovative",translation:"Инновационный",example:"They have innovative ideas.",level:"B1"},{word:"Curious",translation:"Любопытный",example:"Children are naturally curious.",level:"A2"},{word:"Resilient",translation:"Стойкий",example:"She is resilient under pressure.",level:"C1"},{word:"Venture",translation:"Предприятие",example:"It was a risky venture.",level:"B2"},{word:"Profound",translation:"Глубокий",example:"A profound change occurred.",level:"C1"}];
const GL=[{id:1,title:"Present Simple",icon:"⚡",level:"A1",theory:"Present Simple используется для регулярных действий и фактов.",examples:["I work every day.","She plays tennis.","The sun rises in the east."],exercises:[{q:"She ___ (work) at a hospital.",answer:"works",options:["work","works","worked","working"]},{q:"They ___ (play) football every weekend.",answer:"play",options:["plays","play","played","playing"]},{q:"He ___ (read) books in the evening.",answer:"reads",options:["read","reads","reading","readed"]}]},{id:2,title:"Past Simple",icon:"⏪",level:"A2",theory:"Past Simple для завершённых действий в прошлом.",examples:["I worked yesterday.","She played tennis last week.","They visited Paris in 2022."],exercises:[{q:"I ___ (visit) my grandmother yesterday.",answer:"visited",options:["visit","visits","visited","visiting"]},{q:"She ___ (study) hard for the exam.",answer:"studied",options:["study","studies","studied","studying"]},{q:"They ___ (travel) to Italy last summer.",answer:"travelled",options:["travel","travels","travelled","travelling"]}]},{id:3,title:"Present Perfect",icon:"✅",level:"B1",theory:"Present Perfect связывает прошлое с настоящим. Структура: have/has + V3",examples:["I have just finished my work.","She has never been to London.","They have lived here for 10 years."],exercises:[{q:"I ___ (finish) my homework.",answer:"have finished",options:["finished","have finished","has finished","finish"]},{q:"She ___ (never/see) the ocean.",answer:"has never seen",options:["never saw","has never seen","have never seen","never sees"]},{q:"We ___ (live) here since 2015.",answer:"have lived",options:["lived","live","has lived","have lived"]}]},{id:4,title:"Conditionals",icon:"🔀",level:"B2",theory:"Условные предложения. 1st: If + Present Simple, will + V1.",examples:["If it rains, I will stay home.","If I were rich, I would travel.","If you study, you will pass."],exercises:[{q:"If I ___ (have) time, I will call you.",answer:"have",options:["have","had","has","having"]},{q:"If she ___ (be) taller, she would be a model.",answer:"were",options:["is","was","were","be"]},{q:"I would travel if I ___ (have) more money.",answer:"had",options:["have","has","had","having"]}]}];
const ACH=[{id:"first_lesson",icon:"🎯",title:"Первый урок",desc:"Завершите первый урок",xp:50},{id:"vocab_10",icon:"📚",title:"Словарник",desc:"Выучите 10 слов",xp:100},{id:"streak_3",icon:"🔥",title:"На огне!",desc:"3 дня подряд",xp:150},{id:"perfect_quiz",icon:"⭐",title:"Перфекционист",desc:"100% в тесте",xp:200},{id:"all_grammar",icon:"🏆",title:"Мастер грамматики",desc:"Все уроки",xp:500}];
function Btn({onClick,children}){return<button onClick={onClick} style={{background:"linear-gradient(135deg,rgba(255,180,50,0.25),rgba(255,100,0,0.2))",border:"1px solid rgba(255,180,50,0.5)",borderRadius:14,padding:"16px",color:"#f0c060",fontSize:15,fontWeight:"bold",cursor:"pointer",fontFamily:"Georgia,serif",width:"100%"}}>{children}</button>}
function Back({onClick}){return<button onClick={onClick} style={{background:"transparent",border:"none",color:"rgba(255,180,50,0.5)",cursor:"pointer",fontSize:13,padding:"0 0 16px"}}>← Назад</button>}
export default function App(){
const[screen,setScreen]=useState("home");
const[xp,setXp]=useState(320);
const[streak]=useState(5);
const[level]=useState("B1");
const[notif,setNotif]=useState(null);
const[completed,setCompleted]=useState([1]);
const[learned,setLearned]=useState([0,1,2]);
const[unlocked,setUnlocked]=useState(["first_lesson"]);
const userLvl=Math.floor(xp/500)+1;
const addXp=useCallback(n=>{setXp(p=>{setNotif({msg:`+${n} XP! 🎉`});setTimeout(()=>setNotif(null),2000);return p+n;});},[]);
const unlock=useCallback(id=>{if(!unlocked.includes(id)){setUnlocked(p=>[...p,id]);const a=ACH.find(x=>x.id===id);if(a){setNotif({msg:`🏆 ${a.title}!`});setTimeout(()=>setNotif(null),2000);}}},[unlocked]);
const xpPct=(xp%500)/500*100;
return(
<div style={{fontFamily:"Georgia,serif",background:"linear-gradient(135deg,#0a0a1a,#0d1b2e)",minHeight:"100vh",color:"#e8e0d0",maxWidth:480,margin:"0 auto",position:"relative"}}>
{notif&&<div style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",background:"#1a3a1a",border:"1px solid rgba(255,180,50,0.4)",borderRadius:12,padding:"12px 24px",color:"#f0c060",fontWeight:"bold",fontSize:14,zIndex:9999,whiteSpace:"nowrap"}}>{notif.msg}</div>}
<div style={{position:"sticky",top:0,zIndex:100,background:"rgba(10,10,26,0.95)",borderBottom:"1px solid rgba(255,180,50,0.15)",padding:"12px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:24}}>🇬🇧</span><div><div style={{fontSize:16,fontWeight:"bold",color:"#f0c060"}}>EnglishPro</div><div style={{fontSize:10,color:"rgba(255,180,50,0.5)"}}>ACADEMY</div></div></div>
<div style={{display:"flex",alignItems:"center",gap:12}}><span>🔥<b style={{color:"#ff8040"}}>{streak}</b></span><span>⚡<b style={{color:"#f0c060"}}>{xp}</b></span><div style={{background:"rgba(255,180,50,0.2)",border:"1px solid rgba(255,180,50,0.4)",borderRadius:20,padding:"3px 10px",fontSize:12,color:"#f0c060",fontWeight:"bold"}}>{level}</div></div>
</div>
<div style={{padding:"8px 20px 0",background:"rgba(10,10,26,0.95)"}}><div style={{height:4,background:"rgba(255,180,50,0.1)",borderRadius:2}}><div style={{height:"100%",width:`${xpPct}%`,background:"linear-gradient(90deg,#f0c060,#ff8040)",borderRadius:2,transition:"width 0.5s"}}/></div></div>
<div style={{paddingBottom:80}}>
{screen==="home"&&<Home setScreen={setScreen} completed={completed} level={level} streak={streak}/>}
{screen==="grammar"&&<Grammar setScreen={setScreen} addXp={addXp} completed={completed} setCompleted={setCompleted} unlock={unlock}/>}
{screen==="vocab"&&<Vocab setScreen={setScreen} addXp={addXp} learned={learned} setLearned={setLearned} unlock={unlock}/>}
{screen==="profile"&&<Profile xp={xp} streak={streak} level={level} userLvl={userLvl} unlocked={unlocked} completed={completed} learned={learned}/>}
</div>
<nav style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:"rgba(10,10,26,0.97)",borderTop:"1px solid rgba(255,180,50,0.12)",display:"flex",justifyContent:"space-around",padding:"8px 0 12px",zIndex:200}}>
{[["home","🏠","Главная"],["grammar","📖","Грамматика"],["vocab","🗂️","Слова"],["profile","👤","Профиль"]].map(([id,icon,label])=>(
<button key={id} onClick={()=>setScreen(id)} style={{background:"transparent",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"4px 10px"}}>
<span style={{fontSize:20,filter:screen===id?"none":"grayscale(0.8) opacity(0.5)"}}>{icon}</span>
<span style={{fontSize:9,color:screen===id?"#f0c060":"rgba(232,224,208,0.3)"}}>{label}</span>
{screen===id&&<div style={{width:4,height:4,borderRadius:"50%",background:"#f0c060"}}/>}
</button>))}
</nav>
</div>);}
function Home({setScreen,completed,level,streak}){return(<div style={{padding:20}}>
<div style={{marginBottom:28}}><div style={{fontSize:13,color:"rgba(255,180,50,0.5)",letterSpacing:3,marginBottom:6}}>ДОБРО ПОЖАЛОВАТЬ</div><div style={{fontSize:24,fontWeight:"bold",color:"#e8e0d0"}}>Учите <span style={{color:"#f0c060"}}>английский</span> каждый день 🇬🇧</div></div>
<div style={{background:"rgba(255,80,0,0.15)",border:"1px solid rgba(255,120,0,0.3)",borderRadius:16,padding:"16px 20px",marginBottom:24}}><div style={{fontSize:13,color:"rgba(255,150,80,0.7)",marginBottom:4}}>Серия дней</div><div style={{fontSize:28,fontWeight:"bold",color:"#ff8040"}}>🔥 {streak} дней</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
{[["grammar","📖","Грамматика",`${completed.length}/4 уроков`,"#e8a040"],["vocab","🗂️","Словарь","10 слов · Карточки","#6ab04c"],["profile","👤","Профиль","Достижения и XP","#a855f7"],["grammar","🎯","Тест уровня",level,"#4a90d9"]].map(([id,icon,title,desc,color],i)=>(
<button key={i} onClick={()=>setScreen(id)} style={{background:`rgba(255,255,255,0.03)`,border:`1px solid ${color}40`,borderRadius:16,padding:"18px 16px",textAlign:"left",cursor:"pointer",color:"#e8e0d0"}}>
<div style={{fontSize:28,marginBottom:8}}>{icon}</div>
<div style={{fontSize:14,fontWeight:"bold",color}}>{title}</div>
<div style={{fontSize:11,color:"rgba(232,224,208,0.5)"}}>{desc}</div>
</button>))}
</div></div>);}
function Grammar({setScreen,addXp,completed,setCompleted,unlock}){
const[lesson,setLesson]=useState(null);
const[stage,setStage]=useState("theory");
const[idx,setIdx]=useState(0);
const[sel,setSel]=useState(null);
const[fb,setFb]=useState(false);
const[score,setScore]=useState(0);
const[done,setDone]=useState(false);
if(!lesson)return(<div style={{padding:20}}><Back onClick={()=>setScreen("home")}/><div style={{fontSize:13,color:"rgba(255,180,50,0.5)",marginBottom:20}}>ГРАММАТИКА</div>
{GL.map(l=>{const ok=completed.includes(l.id);return(<button key={l.id} onClick={()=>{setLesson(l);setStage("theory");setIdx(0);setScore(0);setDone(false);setSel(null);}} style={{background:ok?"rgba(100,200,100,0.08)":"rgba(255,180,50,0.06)",border:`1px solid ${ok?"rgba(100,200,100,0.3)":"rgba(255,180,50,0.15)"}`,borderRadius:16,padding:"18px 20px",textAlign:"left",cursor:"pointer",color:"#e8e0d0",display:"flex",alignItems:"center",gap:16,width:"100%",marginBottom:12}}>
<span style={{fontSize:32}}>{l.icon}</span><div style={{flex:1}}><div style={{fontSize:15,fontWeight:"bold",color:ok?"#80e080":"#f0c060"}}>{l.title}</div><div style={{fontSize:12,color:"rgba(232,224,208,0.4)"}}>Уровень {l.level}</div></div><span>{ok?"✅":"▶️"}</span></button>);})}</div>);
if(done)return(<div style={{padding:20,textAlign:"center"}}><div style={{fontSize:72,marginBottom:16}}>{score===lesson.exercises.length?"🏆":"👏"}</div><div style={{fontSize:22,fontWeight:"bold",color:"#f0c060",marginBottom:8}}>{score===lesson.exercises.length?"Отлично!":"Хорошая работа!"}</div><div style={{fontSize:15,color:"rgba(232,224,208,0.6)",marginBottom:24}}>Результат: {score}/{lesson.exercises.length}</div><Btn onClick={()=>setLesson(null)}>← К урокам</Btn></div>);
if(stage==="theory")return(<div style={{padding:20}}><Back onClick={()=>setLesson(null)}/><div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}><span style={{fontSize:36}}>{lesson.icon}</span><div><div style={{fontSize:20,fontWeight:"bold",color:"#f0c060"}}>{lesson.title}</div></div></div><div style={{background:"rgba(100,180,255,0.06)",border:"1px solid rgba(100,180,255,0.15)",borderRadius:16,padding:20,marginBottom:20}}><div style={{fontSize:14,color:"#e8e0d0",lineHeight:1.7}}>{lesson.theory}</div></div><div style={{marginBottom:24}}>{lesson.examples.map((ex,i)=><div key={i} style={{background:"rgba(255,180,50,0.06)",borderRadius:10,padding:"12px 16px",marginBottom:8,fontSize:14,color:"#e8e0d0",fontStyle:"italic"}}>"{ex}"</div>)}</div><Btn onClick={()=>setStage("exercise")}>Начать упражнения →</Btn></div>);
const ex=lesson.exercises[idx];
return(<div style={{padding:20}}><Back onClick={()=>setStage("theory")}/><div style={{fontSize:13,color:"rgba(255,180,50,0.5)",marginBottom:16}}>УПРАЖНЕНИЕ {idx+1}/{lesson.exercises.length}</div>
<div style={{height:4,background:"rgba(255,180,50,0.1)",borderRadius:2,marginBottom:20}}><div style={{height:"100%",width:`${(idx/lesson.exercises.length)*100}%`,background:"linear-gradient(90deg,#f0c060,#ff8040)",borderRadius:2}}/></div>
<div style={{background:"rgba(255,180,50,0.06)",border:"1px solid rgba(255,180,50,0.15)",borderRadius:16,padding:24,marginBottom:20,textAlign:"center"}}><div style={{fontSize:17,color:"#e8e0d0"}}>{ex.q}</div></div>
<div style={{display:"grid",gap:10}}>{ex.options.map(opt=>{let bg="rgba(255,180,50,0.06)",border="rgba(255,180,50,0.15)",color="#e8e0d0";if(fb&&sel===opt){if(opt===ex.answer){bg="rgba(100,200,100,0.15)";border="rgba(100,200,100,0.5)";color="#80e080";}else{bg="rgba(200,80,80,0.15)";border="rgba(200,80,80,0.5)";color="#e08080";}}if(fb&&opt===ex.answer&&sel!==opt){bg="rgba(100,200,100,0.08)";border="rgba(100,200,100,0.3)";}return(<button key={opt} onClick={()=>{if(fb)return;setSel(opt);setFb(true);const ok=opt===ex.answer;if(ok)setScore(s=>s+1);setTimeout(()=>{setFb(false);setSel(null);if(idx+1<lesson.exercises.length){setIdx(i=>i+1);}else{const fs=score+(ok?1:0);setDone(true);if(!completed.includes(lesson.id)){setCompleted(p=>[...p,lesson.id]);unlock("first_lesson");}addXp(fs===lesson.exercises.length?100:60);if(fs===lesson.exercises.length)unlock("perfect_quiz");}},900);}} style={{background:bg,border:`1px solid ${border}`,borderRadius:12,padding:"14px 20px",textAlign:"left",cursor:"pointer",color,fontSize:15}}>{opt}</button>);})}</div></div>);}
function Vocab({setScreen,addXp,learned,setLearned,unlock}){
const[mode,setMode]=useState("list");
const[ci,setCi]=useState(0);
const[flip,setFlip]=useState(false);
if(mode==="flashcard"){const w=V[ci];return(<div style={{padding:20}}><Back onClick={()=>setMode("list")}/><div style={{fontSize:13,color:"rgba(100,180,255,0.5)",marginBottom:20}}>КАРТОЧКИ · {ci+1}/{V.length}</div>
<div onClick={()=>setFlip(f=>!f)} style={{background:flip?"rgba(100,200,100,0.1)":"rgba(100,180,255,0.1)",border:`1px solid ${flip?"rgba(100,200,100,0.3)":"rgba(100,180,255,0.3)"}`,borderRadius:24,padding:"60px 30px",textAlign:"center",cursor:"pointer",minHeight:220,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:24}}>
{!flip?<><div style={{fontSize:36,fontWeight:"bold",color:"#60b0ff"}}>{w.word}</div><div style={{fontSize:12,color:"rgba(100,180,255,0.4)",marginTop:8}}>НАЖМИТЕ ДЛЯ ПЕРЕВОДА</div></>:<><div style={{fontSize:28,color:"#80e080"}}>{w.translation}</div><div style={{fontSize:14,color:"rgba(232,224,208,0.5)",marginTop:8,fontStyle:"italic"}}>{w.example}</div></>}
</div>
<div style={{display:"flex",gap:12}}><button onClick={()=>{if(ci>0){setCi(i=>i-1);setFlip(false);}}} style={{flex:1,background:"rgba(255,180,50,0.06)",border:"1px solid rgba(255,180,50,0.15)",borderRadius:12,padding:14,color:"#f0c060",cursor:"pointer"}}>← Назад</button><button onClick={()=>{if(ci<V.length-1){setCi(i=>i+1);setFlip(false);}else{setMode("list");addXp(30);}}} style={{flex:2,background:"rgba(100,180,255,0.15)",border:"1px solid rgba(100,180,255,0.4)",borderRadius:12,padding:14,color:"#60b0ff",cursor:"pointer",fontWeight:"bold"}}>{ci<V.length-1?"Следующее →":"✓ Готово!"}</button></div></div>);}
return(<div style={{padding:20}}><Back onClick={()=>setScreen("home")}/><div style={{fontSize:13,color:"rgba(255,180,50,0.5)",marginBottom:6}}>СЛОВАРНЫЙ ЗАПАС</div><div style={{fontSize:12,color:"rgba(232,224,208,0.4)",marginBottom:16}}>Выучено: {learned.length}/{V.length}</div>
<button onClick={()=>{setMode("flashcard");setCi(0);setFlip(false);}} style={{width:"100%",background:"rgba(100,180,255,0.1)",border:"1px solid rgba(100,180,255,0.3)",borderRadius:12,padding:12,color:"#60b0ff",cursor:"pointer",marginBottom:16}}>🃏 Открыть карточки</button>
{V.map((w,i)=>{const ok=learned.includes(i);return(<div key={i} style={{background:ok?"rgba(100,200,100,0.06)":"rgba(255,180,50,0.04)",border:`1px solid ${ok?"rgba(100,200,100,0.2)":"rgba(255,180,50,0.1)"}`,borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
<div><div style={{fontSize:15,color:"#f0c060",fontWeight:"bold"}}>{w.word}</div><div style={{fontSize:13,color:"rgba(232,224,208,0.5)"}}>{w.translation}</div></div>
<button onClick={()=>{if(!ok){const nl=[...learned,i];setLearned(nl);addXp(10);if(nl.length>=10)unlock("vocab_10");}}} style={{background:ok?"rgba(100,200,100,0.15)":"rgba(255,180,50,0.08)",border:`1px solid ${ok?"rgba(100,200,100,0.3)":"rgba(255,180,50,0.2)"}`,borderRadius:8,padding:"4px 10px",fontSize:11,color:ok?"#80e080":"#f0c060",cursor:"pointer"}}>{ok?"✓ Знаю":"Выучить"}</button>
</div>);})}
</div>);}
function Profile({xp,streak,level,userLvl,unlocked,completed,learned}){return(<div style={{padding:20}}>
<div style={{textAlign:"center",padding:"20px 0 28px"}}><div style={{width:80,height:80,borderRadius:"50%",margin:"0 auto 12px",background:"rgba(255,180,50,0.2)",border:"2px solid rgba(255,180,50,0.5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36}}>👤</div><div style={{fontSize:20,fontWeight:"bold",color:"#f0c060"}}>Мой профиль</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:24}}>
{[["🎓",level,"Уровень"],["⚡",xp,"XP"],["🔥",streak+"д","Серия"],["📖",completed.length,"Уроков"],["🗂️",learned.length,"Слов"],["⭐",userLvl,"Ур."]].map(([icon,val,label],i)=>(<div key={i} style={{background:"rgba(255,180,50,0.06)",border:"1px solid rgba(255,180,50,0.12)",borderRadius:12,padding:"14px 10px",textAlign:"center"}}><div style={{fontSize:20,marginBottom:4}}>{icon}</div><div style={{fontSize:16,fontWeight:"bold",color:"#f0c060"}}>{val}</div><div style={{fontSize:10,color:"rgba(255,180,50,0.4)"}}>{label}</div></div>))}
</div>
<div style={{fontSize:13,color:"rgba(255,180,50,0.5)",marginBottom:14}}>ДОСТИЖЕНИЯ</div>
{ACH.map(a=>{const ok=unlocked.includes(a.id);return(<div key={a.id} style={{background:ok?"rgba(255,180,50,0.08)":"rgba(255,255,255,0.02)",border:`1px solid ${ok?"rgba(255,180,50,0.3)":"rgba(255,255,255,0.06)"}`,borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:14,opacity:ok?1:0.45,marginBottom:8}}><span style={{fontSize:28}}>{a.icon}</span><div style={{flex:1}}><div style={{fontSize:14,fontWeight:"bold",color:ok?"#f0c060":"rgba(232,224,208,0.4)"}}>{a.title}</div><div style={{fontSize:12,color:"rgba(232,224,208,0.3)"}}>{a.desc}</div></div><div style={{fontSize:11,color:ok?"#f0c060":"rgba(232,224,208,0.2)"}}>+{a.xp}XP</div></div>);})}
</div>);}


  

