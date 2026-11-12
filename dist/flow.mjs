import {ACTIONS,allowed} from './engine.mjs';
export function flowFor(s){if(s.done)return {phase:'finished',canPick:false,title:'Veja o resultado das suas escolhas.',instruction:'A partida terminou. Abra o balanço final.',button:'Ver balanço final'};
 const affordable=s.tiles.some(t=>ACTIONS.some(a=>a.id!=='keep'&&a.cost<=s.budget&&allowed(s,t.id,a)));
 if(s.actions<=0||!affordable)return {phase:'advance',canPick:false,title:'Agora avance o ciclo.',instruction:s.actions<=0?'As decisões deste ciclo terminaram. Veja como a paisagem responde.':'Os recursos disponíveis não permitem outro manejo. Veja como a paisagem responde.',button:s.round===5?'Concluir a partida':'Avançar o ciclo'};
 return {phase:'choose',canPick:true,title:'Clique em uma paisagem.',instruction:s.actions===1?'Você pode aplicar mais 1 manejo neste ciclo.':`Você pode aplicar até ${s.actions} manejos neste ciclo.`,button:null};}
