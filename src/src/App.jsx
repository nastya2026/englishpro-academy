import { useState, useCallback } from "react";
const VOCABULARY = [
  { word: "Ambitious", translation: "Амбициозный", example: "She is very ambitious.", level: "B1" },
  { word: "Eloquent", translation: "Красноречивый", example: "He gave an eloquent speech.", level: "B2" },
  { word: "Persevere", translation: "Настойчиво продолжать", example: "You must persevere.", level: "B2" },
  { word: "Diligent", translation: "Прилежный", example: "A diligent student always studies.", level: "B1" },
  { word: "Flourish", translation: "Процветать", example: "Plants flourish in sunlight.", level: "B2" },
  { word: "Innovative", translation: "Инновационный", example: "They have innovative ideas.", level: "B1" },
  { word: "Curious", translation: "Любопытный", example: "Children are naturally curious.", level: "A2" },
  { word: "Resilient", translation: "Стойкий", example: "She is resilient under pressure.", level: "C1" },
  { word: "Venture", translation: "Предприятие", example: "It was a risky venture.", level: "B2" },
  { word: "Profound", translation: "Глубокий", example: "A profound change occurred.", level: "C1" },
];
export default function App() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a1a",color:"#f0c060",fontFamily:"Georgia,serif",fontSize:24,textAlign:"center",padding:20}}>
      🇬🇧 EnglishPro Academy<br/>
      <span style={{fontSize:14,color:"rgba(255,180,50,0.5)",display:"block",marginTop:10}}>Загрузка приложения...</span>
    </div>
  );
}
