var g=Object.create,n=Object.defineProperty,A=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,E=Object.getOwnPropertyNames,u=Object.getOwnPropertyDescriptor;var v=s=>n(s,"__esModule",{value:!0});var I=(s,e,c)=>{if(v(s),e&&typeof e=="object"||typeof e=="function")for(let o of E(e))!h.call(s,o)&&o!=="default"&&n(s,o,{get:()=>e[o],enumerable:!(c=u(e,o))||c.enumerable});return s},S=s=>s&&s.__esModule?s:I(n(s!=null?g(A(s)):{},"default",{value:s,enumerable:!0}),s);var d=S(require("net")),f=S(require("child_process")),l=process.env.VSCODE_SSH_ASKPASS_HANDLE;l||(console.error("VSCODE_SSH_ASKPASS_HANDLE not set."),process.exit(1));var m=process.argv.slice(2),i=process.env.VSCODE_SSH_ASKPASS_COUNTER;if(process.platform==="win32"){let e=f.execSync('wmic process where (commandline like "%ssh-askpass.bat%") get processid,parentprocessid /format:csv').toString().split(/\r?\n/).map(r=>r.trim()).filter(r=>!!r).map(r=>r.split(",")),c=e.shift(),p=e.map(r=>r.reduce((a,P,_)=>(a[c[_]]=P,a),{})).find(r=>r.ProcessId===String(process.ppid));p&&(i=p.ParentProcessId)}else i=m.shift();var t=d.connect(l,()=>{t.write(JSON.stringify({prompt:m.join(" "),counter:i})+`
`,s=>{s&&(console.error(s),process.exit(1))})});t.setEncoding("utf8");t.on("data",s=>{process.stdout.write(s)});t.on("error",s=>{console.error(s),process.exit(1)});t.on("end",()=>{process.exit(0)});
//# sourceMappingURL=sshAskpass.js.map