import { useState } from "react";
export default function App() {
  const [screen, setScreen] = useState("home");
  return (
    <div style={{fontFamily:"Georgia,serif",background:"linear-gradient(135deg,#0a0a1a,#0d1b2e)",minHeight:"100vh",color:"#e8e0d0",maxWidth:480,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center",padding:20}}>
      <div style={{fontSize:64}}>🇬🇧</div>
      <div style={{fontSize:28,fontWeight:"bold",color:"#f0c060",marginTop:16}}>EnglishPro Academy</div>
      <div style={{fontSize:14,color:"rgba(255,180,50,0.5)",marginTop:8}}>Онлайн школа английского языка</div>
      <div style={{marginTop:32,padding:20,background:"rgba(255,180,50,0.1)",border:"1px solid rgba(255,180,50,0.3)",borderRadius:16}}>
        <div style={{fontSize:16,color:"#80e080"}}>✅ Сайт работает!</div>
        <div style={{fontSize:13,color:"rgba(232,224,208,0.5)",marginTop:8}}>Полная версия загружается...</div>
      </div>
    </div>
  );
}

