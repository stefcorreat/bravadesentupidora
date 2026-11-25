import {spawn} from "node:child_process";

const port="36051";
const origin=`http://127.0.0.1:${port}`;
const server=spawn("pnpm",["exec","next","start","-H","127.0.0.1","-p",port],{stdio:["ignore","pipe","pipe"]});
let serverLog="";
server.stdout.on("data",chunk=>serverLog+=chunk);
server.stderr.on("data",chunk=>serverLog+=chunk);

try{
  for(let attempt=0;attempt<40;attempt++){
    try{const response=await fetch(origin);if(response.ok)break}catch{}
    await new Promise(resolve=>setTimeout(resolve,250));
    if(attempt===39)throw new Error(`Servidor não iniciou.\n${serverLog}`);
  }
  const audit=spawn("node",["scripts/audit-live.mjs"],{stdio:"inherit",env:{...process.env,AUDIT_ORIGIN:origin}});
  const exitCode=await new Promise(resolve=>audit.on("exit",resolve));
  if(exitCode!==0)process.exitCode=exitCode||1;
}finally{
  server.kill("SIGTERM");
}
