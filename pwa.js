(() => {
  let deferredPrompt = null;
  function showInstall() {
    if (document.getElementById('tornx-install-app')) return;
    const b = document.createElement('button');
    b.id='tornx-install-app'; b.type='button'; b.textContent='Install App';
    Object.assign(b.style,{position:'fixed',right:'14px',bottom:'14px',zIndex:'2147483647',padding:'10px 14px',border:'1px solid rgba(255,45,60,.45)',borderRadius:'12px',background:'#101010',color:'#fff',font:'700 12px Inter,sans-serif',boxShadow:'0 10px 30px rgba(0,0,0,.45)'});
    b.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;b.remove()};
    document.body.appendChild(b);
  }
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;showInstall()});
  addEventListener('appinstalled',()=>document.getElementById('tornx-install-app')?.remove());
  if('serviceWorker' in navigator && location.protocol !== 'file:') addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}));
})();
