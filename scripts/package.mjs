import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,dirname} from 'node:path';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
const read=name=>readFile(join(root,'dist',name),'utf8');
const icon='data:image/svg+xml;base64,'+Buffer.from(await read('icon.svg')).toString('base64');
const css=await read('style.css');
const sources=await Promise.all(['seed.js','engine.js','store.js','app.js'].map(read));
const script=sources.map(source=>source.replace(/^import[^\n]*\n/gm,'').replace(/^export /gm,'')).join('\n');
let html=await read('index.html');
html=html.replace('<link rel="stylesheet" href="./style.css">',()=>`<style>${css}</style>`)
  .replace('<script type="module" src="./app.js"></script>',()=>`<script type="module">${script.replace(/<\/script/gi,'<\\/script')}</script>`)
  .replaceAll('./icon.svg',icon);
await writeFile(join(root,'CLASSCODE_DEMO.html'),html);
console.log('Created CLASSCODE_DEMO.html (self-contained, no external assets).');
