(function(){
var ex=document.getElementById('_gaiadash');if(ex){ex.remove();return;}
var o=document.createElement('div');
o.id='_gaiadash';
o.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#F4F7FE;font-family:Calibri,Arial,sans-serif;overflow:hidden;display:flex;flex-direction:column;';
o.innerHTML=`<style>
#_gaiadash *{box-sizing:border-box;margin:0;padding:0;}
#_gaiadash header{background:#1E2761;padding:12px 24px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
#_gaiadash .logo{font-size:22px;font-weight:900;color:#E8B84B;letter-spacing:3px;}
#_gaiadash .sub{color:#CADCFC;font-size:12px;}
#_gaiadash .cls{margin-left:auto;background:rgba(255,255,255,.15);border:1px solid #CADCFC;color:#fff;border-radius:6px;padding:6px 16px;cursor:pointer;font-size:14px;font-weight:bold;}
#_gaiadash .cls:hover{background:rgba(255,255,255,.28);}
#_gaiadash .flt{background:#fff;border-bottom:2px solid #DDE4F0;padding:12px 24px;display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end;flex-shrink:0;}
#_gaiadash .fg{display:flex;flex-direction:column;gap:3px;}
#_gaiadash .fg label{font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;}
#_gaiadash .fg select{border:1.5px solid #DDE4F0;border-radius:5px;padding:6px 8px;font-size:13px;color:#1E2761;background:#F4F7FE;min-width:130px;outline:none;height:33px;}
#_gaiadash .gcb{display:flex;flex-wrap:wrap;gap:4px;margin-top:2px;}
#_gaiadash .gcb button{border:1.5px solid #DDE4F0;border-radius:4px;padding:3px 7px;font-size:11px;font-weight:700;color:#1E2761;background:#F4F7FE;cursor:pointer;line-height:1.4;}
#_gaiadash .gcb button:hover{border-color:#1E2761;background:#E8EDF8;}
#_gaiadash .gcb button.gca{background:#1E2761;color:#fff;border-color:#1E2761;}
#_gaiadash .fg input[type=date]{border:1.5px solid #DDE4F0;border-radius:5px;padding:5px 8px;font-size:13px;color:#1E2761;background:#F4F7FE;outline:none;height:33px;min-width:130px;}
#_gaiadash .dg{display:flex;gap:6px;align-items:center;}
#_gaiadash .dg span{font-size:12px;color:#94A3B8;font-weight:600;}
#_gaiadash .ms-wrap{position:relative;}
#_gaiadash .ms-btn{border:1.5px solid #DDE4F0;border-radius:5px;padding:0 8px;font-size:13px;color:#1E2761;background:#F4F7FE;min-width:160px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:6px;user-select:none;height:33px;white-space:nowrap;}
#_gaiadash .ms-btn:hover{border-color:#1E2761;}
#_gaiadash .ms-arr{font-size:10px;color:#94A3B8;flex-shrink:0;}
#_gaiadash .ms-lbl{overflow:hidden;text-overflow:ellipsis;max-width:130px;}
#_gaiadash .ms-drop{position:absolute;top:calc(100% + 2px);left:0;z-index:9999;background:#fff;border:1.5px solid #DDE4F0;border-radius:6px;box-shadow:0 4px 16px rgba(30,39,97,.15);min-width:240px;max-height:480px;overflow-y:auto;display:none;}
#_gaiadash #_da{min-width:300px;}
#_gaiadash .ms-drop.open{display:block;}
#_gaiadash .ms-item{display:flex;align-items:center;gap:8px;padding:7px 12px;cursor:pointer;font-size:13px;color:#374151;line-height:1.3;}
#_gaiadash .ms-item:hover{background:#EEF3FB;}
#_gaiadash .ms-item input[type=checkbox]{width:14px;height:14px;cursor:pointer;accent-color:#1E2761;flex-shrink:0;}
#_gaiadash .ms-all{border-bottom:1px solid #EEF3FB;font-weight:700;color:#1E2761;background:#F4F7FE;}
#_gaiadash .bsr{background:#1E2761;color:#fff;border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:700;cursor:pointer;height:33px;}
#_gaiadash .bsr:hover{background:#2E3D78;}
#_gaiadash .bsr:disabled{background:#aaa;cursor:not-allowed;}
#_gaiadash .bex{background:transparent;color:#1E2761;border:1.5px solid #1E2761;border-radius:6px;padding:5px 14px;font-size:13px;font-weight:700;cursor:pointer;height:33px;margin-left:auto;}
#_gaiadash .bex:hover{background:#1E2761;color:#fff;}
#_gaiadash .stats{background:#EEF3FB;border-bottom:1px solid #DDE4F0;padding:10px 24px;display:flex;gap:18px;flex-wrap:wrap;flex-shrink:0;}
#_gaiadash .sv{font-size:19px;font-weight:800;color:#1E2761;}
#_gaiadash .sv.gd{color:#B8860B;}
#_gaiadash .sl{font-size:11px;color:#64748B;text-transform:uppercase;}
#_gaiadash .sep{width:1px;background:#DDE4F0;margin:3px 0;}
#_gaiadash .tw{flex:1;overflow-y:auto;padding:14px 24px;}
#_gaiadash table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(30,39,97,.08);font-size:13px;}
#_gaiadash thead tr{background:#1E2761;color:#fff;}
#_gaiadash th{padding:9px 11px;text-align:left;font-size:11px;font-weight:700;white-space:nowrap;}
#_gaiadash th.r,#_gaiadash td.r{text-align:right;}
#_gaiadash th.c,#_gaiadash td.c{text-align:center;}
#_gaiadash tbody tr{border-bottom:1px solid #EEF3FB;}
#_gaiadash tbody tr:nth-child(even){background:#F9FAFF;}
#_gaiadash tbody tr:hover{background:#EEF3FB;}
#_gaiadash td{padding:8px 11px;vertical-align:middle;}
#_gaiadash .cod{font-weight:700;font-family:monospace;font-size:12px;background:#EEF3FB;padding:2px 6px;border-radius:3px;}
#_gaiadash .av{display:inline-block;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:700;white-space:nowrap;}
#_gaiadash .a0{background:#F1F5F9;color:#64748B;}
#_gaiadash .a10{background:#DBEAFE;color:#1D4ED8;}
#_gaiadash .a20{background:#DBEAFE;color:#1D4ED8;}
#_gaiadash .a30{background:#E0F2FE;color:#0369A1;}
#_gaiadash .a40{background:#D1FAE5;color:#065F46;}
#_gaiadash .a50{background:#D1FAE5;color:#065F46;}
#_gaiadash .a70{background:#A7F3D0;color:#064E3B;}
#_gaiadash .a80{background:#FEF3C7;color:#92400E;}
#_gaiadash .a85{background:#FDE68A;color:#92400E;}
#_gaiadash .a86{background:#FEE2E2;color:#991B1B;}
#_gaiadash .a90{background:#E5E7EB;color:#374151;}
#_gaiadash .fpok{font-weight:700;color:#1E7A45;}
#_gaiadash .fpno{color:#94A3B8;font-style:italic;}
#_gaiadash .spn{display:inline-block;width:13px;height:13px;border:2px solid #DDE4F0;border-top-color:#1E2761;border-radius:50%;animation:_spi .7s linear infinite;vertical-align:middle;}
@keyframes _spi{to{transform:rotate(360deg);}}
#_gaiadash .msg{text-align:center;padding:50px 20px;color:#64748B;}
#_gaiadash .msg .ic{font-size:38px;margin-bottom:10px;}
#_gaiadash .pag{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;border-top:1px solid #DDE4F0;flex-shrink:0;}
#_gaiadash .pb{border:1.5px solid #DDE4F0;background:#fff;color:#1E2761;border-radius:5px;padding:4px 12px;cursor:pointer;font-size:13px;font-weight:600;}
#_gaiadash .pb:hover{background:#1E2761;color:#fff;}
#_gaiadash .pb:disabled{opacity:.4;cursor:not-allowed;}
#_gaiadash .pi{font-size:13px;color:#64748B;}
#_gaiadash .err{background:#FEE2E2;color:#991B1B;padding:8px 16px;border-left:3px solid #DC2626;font-size:13px;margin:0 24px 6px;border-radius:4px;}
#_gaiadash .conn{font-size:12px;padding:3px 12px;border-radius:20px;border:1px solid #CADCFC;color:#CADCFC;}
#_gaiadash .lp{text-align:center;padding:30px 20px;color:#64748B;font-size:13px;}
</style>
<header>
  <div><div class="logo">GAÏA</div><div class="sub">Tableau de bord — Délégation Internationale / AGIR</div></div>
  <div class="conn" id="_gc">⏳ Vérification…</div>
  <button class="cls" onclick="document.getElementById('_gaiadash').remove()">✕ Fermer</button>
</header>
<div class="flt">
  <div class="fg"><label>Période</label>
    <div class="dg">
      <input type="date" id="_gd1" placeholder="Du">
      <span>→</span>
      <input type="date" id="_gd2" placeholder="Au">
    </div>
  </div>
  <div class="fg"><label>Pays</label>
    <div class="ms-wrap" id="_wp">
      <div class="ms-btn" onclick="_msT('p')"><span class="ms-lbl" id="_lp">Tous</span><span class="ms-arr">▼</span></div>
      <div class="ms-drop" id="_dp">
        <label class="ms-item ms-all"><input type="checkbox" id="_ap" onchange="_msA('p',this)"> Tous les pays</label>
      </div>
    </div>
  </div>
  <div class="fg"><label>Type</label><select id="_gn"><option value="">Tous</option></select></div>
  <div class="fg"><label>Domaine</label>
    <div class="ms-wrap" id="_wa">
      <div class="ms-btn" onclick="_msT('a')"><span class="ms-lbl" id="_la">Tous</span><span class="ms-arr">▼</span></div>
      <div class="ms-drop" id="_da">
        <div class="gcb" style="padding:6px 10px;gap:4px;border-bottom:1px solid #EEF3FB;flex-wrap:wrap;">
          <button class="gca" onclick="_gcFilt(this,'')">Tous</button>
          <button onclick="_gcFilt(this,'GC1')">GC1</button>
          <button onclick="_gcFilt(this,'GC2')">GC2</button>
          <button onclick="_gcFilt(this,'GC3')">GC3</button>
          <button onclick="_gcFilt(this,'GC4')">GC4</button>
          <button onclick="_gcFilt(this,'GC5')">GC5</button>
          <button onclick="_gcFilt(this,'GC6')">GC6</button>
          <button onclick="_gcFilt(this,'GC7')">GC7</button>
          <button onclick="_gcFilt(this,'D')">D</button>
          <button onclick="_gcFilt(this,'DCSD')">DCSD</button>
          <button onclick="_gcFilt(this,'P')">P</button>
        </div>
        <label class="ms-item ms-all"><input type="checkbox" id="_aa" onchange="_msA('a',this)"> Tous les domaines</label>
      </div>
    </div>
  </div>
  <div class="fg"><label>Situation</label>
    <div class="ms-wrap" id="_ws">
      <div class="ms-btn" onclick="_msT('s')"><span class="ms-lbl" id="_ls">Toutes</span><span class="ms-arr">▼</span></div>
      <div class="ms-drop" id="_ds">
        <label class="ms-item ms-all"><input type="checkbox" id="_as" onchange="_msA('s',this)"> Toutes les situations</label>
        <label class="ms-item"><input type="checkbox" value="0" onchange="_msU('s')"> Brouillon</label>
        <label class="ms-item"><input type="checkbox" value="10" onchange="_msU('s')"> À l'étude</label>
        <label class="ms-item"><input type="checkbox" value="20" onchange="_msU('s')"> Formellement demandée</label>
        <label class="ms-item"><input type="checkbox" value="30" onchange="_msU('s')"> Proposée à des candidats</label>
        <label class="ms-item"><input type="checkbox" value="40" onchange="_msU('s')"> Candidatures transmises</label>
        <label class="ms-item"><input type="checkbox" value="50" onchange="_msU('s')"> Intervenant désigné</label>
        <label class="ms-item"><input type="checkbox" value="70" onchange="_msU('s')"> En cours</label>
        <label class="ms-item"><input type="checkbox" value="80" onchange="_msU('s')"> Terminée</label>
        <label class="ms-item"><input type="checkbox" value="85" onchange="_msU('s')"> Facturation terminée</label>
        <label class="ms-item"><input type="checkbox" value="86" onchange="_msU('s')"> Clôturable</label>
        <label class="ms-item"><input type="checkbox" value="90" onchange="_msU('s')"> Clôturée</label>
      </div>
    </div>
  </div>
  <button class="bsr" id="_gb" onclick="_gdS()">🔍 Rechercher</button>
  <button class="bex" onclick="_gdXL()">📊 Excel</button>
  <button class="bex" onclick="_gdE()" style="border-color:#94A3B8;color:#94A3B8;font-size:11px;">CSV</button>
  <button class="bex" id="_btdb" onclick="_gdTdB()" style="background:#E8B84B;color:#1E2761;border-color:#E8B84B;" title="Tableau de Bord DI 2026 — 6 feuillets">📊 TdB</button>
</div>
<div id="_ge"></div>
<div class="stats" id="_gst" style="display:none">
  <div><div class="sv" id="_sn">—</div><div class="sl">Missions</div></div>
  <div class="sep"></div>
  <div><div class="sv gd" id="_sf">—</div><div class="sl">Total FPA</div></div>
  <div class="sep"></div>
  <div><div class="sv" id="_sm">—</div><div class="sl">FPA moyen</div></div>
  <div class="sep"></div>
  <div><div class="sv" id="_s0">—</div><div class="sl">Sans FPA</div></div>
</div>
<div class="tw" id="_gt"><div class="msg"><div class="ic">🔍</div><p>Sélectionnez vos filtres et cliquez sur <b>Rechercher</b></p></div></div>`;

document.body.appendChild(o);


// ── ZG1 sub-zones (REPARTITION PAYS ZG1) ──────────────────────────────
var _ZG1_SUBZONES={
  ZG1A:['TOGO','BENIN','GHANA','LIBERIA','GUINEE BISSAU','COTE D IVOIRE','GUINEE CONAKRY','BURKINA FASO','NIGERIA','SIERRA LEONE'],
  ZG1B:['MAURITANIE','SENEGAL','GAMBIE','CAP VERT','CAP-VERT','NIGER'],
  ZG1C:['RCA','CENTRAFRIQUE','REPUBLIQUE CENTRAFRICAINE','REP CENTRE AFRICAINE','REP CENTRAFRICAINE','ANGOLA','GABON','RDC','REPUBLIQUE DEMOCRATIQUE DU CONGO','CONGO RDC','CONGO KINSHASA','CONGO','CAMEROUN','TCHAD','AFRIQUE DU SUD','DJIBOUTI','ETHIOPIE','ETHIOPIA','GUINEE EQUATORIALE','GUINEA EQUATORIALE','ZAMBIE','ZAMBI'],
  ZG1D:['RWANDA','BURUNDI','MADAGASCAR','COMORES','MAURICE','ILE MAURICE','MOZAMBIQUE','OUGANDA','UGANDA','TANZANIE','TANZANIA']
};
function _nrm(s){return (s||'').toString().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Z0-9]+/g,' ').trim();}
var _ZG1_MAP={};
Object.keys(_ZG1_SUBZONES).forEach(function(z){
  _ZG1_SUBZONES[z].forEach(function(n){_ZG1_MAP[_nrm(n)]=z;});
});
var _ZG_REMAP_RAW={
  'VIETNAM':'ZG5','VIET NAM':'ZG5',
  'JORDANIE':'ZG2',
  'REPUBLIQUE SLOVAQUE':'ZG5','REP SLOVAQUE':'ZG5','SLOVAQUIE':'ZG5',
  'AFGHANISTAN':'ZG3',
  'ARGENTINE':'ZG4',
  'AUTRICHE':'ZG5',
  'COREE':'ZG3','COREE DU SUD':'ZG3','COREE DU NORD':'ZG3','REPUBLIQUE DE COREE':'ZG3',
  'GEORGIE':'ZG5',
  'GUYANA':'ZG4','GUYANE':'ZG4',
  'INDONESIE':'ZG3',
  'MALAISIE':'ZG3',
  'OMAN':'ZG2','SULTANAT D OMAN':'ZG2',
  'PAKISTAN':'ZG3',
  'SRI LANKA':'ZG3',
  'SURINAM':'ZG4','SURINAME':'ZG4'
};
var _ZG_REMAP={};
Object.keys(_ZG_REMAP_RAW).forEach(function(k){_ZG_REMAP[_nrm(k)]=_ZG_REMAP_RAW[k];});
var _PAYS_ZG={}; // country code -> ZG (e.g. ZG1A, ZG2, ZG3, ZG4, ZG6, ...)

// ── State ──────────────────────────────────────────────────────────────
var _m=[], _f={}, _tn=0;
var _MS={p:[],s:[],a:[]};  // selected values for pays / situation / activite
var _paysLoaded=false, _paysLoading=false;
var _gen=0; // generation counter — prevents stale FPA from previous searches

// ── Close dropdowns on click outside ──────────────────────────────────
o.addEventListener('click',function(e){
  if(!e.target.closest('#_wp'))document.getElementById('_dp').classList.remove('open');
  if(!e.target.closest('#_ws'))document.getElementById('_ds').classList.remove('open');
  if(!e.target.closest('#_wa'))document.getElementById('_da').classList.remove('open');
});

// ── Load pays list (called at init AND lazily on first open) ───────────
async function _loadPays(){
  if(_paysLoaded||_paysLoading)return;
  _paysLoading=true;
  document.getElementById('_lp').textContent='⏳';
  try{
    var pages=await Promise.all([1,2,3].map(function(pg){
      return _gP('/admin/mission/mission/false/recherche.json?nPage='+pg+'&nNbElementsParPage=500','')
        .then(function(r){return r.json();});
    }));
    var cm={};
    pages.forEach(function(d){
      (d.aElements||[]).forEach(function(m){
        if(m.sPays&&m.sLibellePays){
          cm[m.sPays]=m.sLibellePays;
          var _k=_nrm(m.sLibellePays);
          var ov=_ZG1_MAP[_k]||_ZG_REMAP[_k];
          if(ov){_PAYS_ZG[m.sPays]=ov;}
          else if(!_PAYS_ZG[m.sPays]){
            var ref=(m.sCodeComplet||m.sCode||'').toString().trim();
            var parts=ref.split(/\s+/);
            var zg=parts[parts.length-1];
            if(zg&&/^[A-Z0-9]+$/i.test(zg)&&zg!=='INT'&&zg!=='U4')_PAYS_ZG[m.sPays]=zg;
          }
        }
      });
    });
    var pays=Object.keys(cm).map(function(k){return{id:k,text:cm[k]};})
      .sort(function(a,b){return a.text.localeCompare(b.text,'fr');});
    var drop=document.getElementById('_dp');
    // Remove any existing items (keep only "Tous" checkbox at top)
    while(drop.children.length>1)drop.removeChild(drop.lastChild);
    // Build full list of zone selectors: ZG1A-D first, then any other ZG (ZG2, ZG3, …) sorted numerically
    var _zHead=['ZG1A','ZG1B','ZG1C','ZG1D'];
    var _zSet={};Object.keys(_PAYS_ZG).forEach(function(c){var z=_PAYS_ZG[c];if(z&&z!=='INT'&&z!=='U4'&&z.indexOf('ZG1')!==0)_zSet[z]=true;});
    var _zOthers=Object.keys(_zSet).sort(function(a,b){var rx=/^ZG(\d+)$/;var ma=a.match(rx),mb=b.match(rx);if(ma&&mb)return parseInt(ma[1])-parseInt(mb[1]);if(ma)return -1;if(mb)return 1;return a.localeCompare(b);});
    _zHead=_zHead.concat(_zOthers);
    _zHead.forEach(function(z){
      var lbl=document.createElement('label');lbl.className='ms-item ms-zg';
      lbl.style.fontWeight='700';lbl.style.color='#1E2761';
      var cb=document.createElement('input');cb.type='checkbox';cb.className='ms-zghead';cb.id='_zg_'+z;cb.dataset.zg=z;
      cb.addEventListener('change',function(){_msZG(z,this.checked);});
      lbl.appendChild(cb);lbl.appendChild(document.createTextNode(' '+z));
      drop.appendChild(lbl);
    });
    var _sep=document.createElement('div');_sep.style.cssText='border-top:1px solid #E5E7EB;margin:4px 0 0;padding:4px 8px 2px;font-weight:700;color:#1E2761;font-size:11px;text-transform:uppercase;letter-spacing:.04em;';_sep.textContent='Pays';
    drop.appendChild(_sep);
    pays.forEach(function(op){
      var lbl=document.createElement('label');lbl.className='ms-item';
      var cb=document.createElement('input');cb.type='checkbox';cb.value=op.id;
      var zg=_PAYS_ZG[op.id]||'';
      if(zg)cb.dataset.zg=zg;
      cb.addEventListener('change',function(){_msU('p');_syncZG();});
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(' '+op.text+(zg?' — '+zg:'')));
      drop.appendChild(lbl);
    });
    document.getElementById('_lp').textContent='Tous';
    _paysLoaded=true;
  }catch(e){
    document.getElementById('_lp').textContent='Pays';
  }
  _paysLoading=false;
}

// ── Multi-select helpers ───────────────────────────────────────────────
window._msT=function(k){
  var _did={p:'_dp',s:'_ds',a:'_da'};
  var od=document.getElementById(_did[k]);
  Object.keys(_did).forEach(function(kk){if(kk!==k)document.getElementById(_did[kk]).classList.remove('open');});
  od.classList.toggle('open');
  if(k==='p'&&!_paysLoaded)_loadPays();
};

window._msA=function(k,cb){
  var _did={p:'_dp',s:'_ds',a:'_da'};
  var drop=document.getElementById(_did[k]);
  drop.querySelectorAll('input[type=checkbox]:not(#_a'+k+'):not(.ms-zghead)').forEach(function(b){b.checked=cb.checked;});
  _msU(k);
  if(k==='p')_syncZG();
};

window._msU=function(k){
  var _did={p:'_dp',s:'_ds',a:'_da'};
  var drop=document.getElementById(_did[k]);
  var allId='_a'+k, lblId='_l'+k;
  var boxes=Array.from(drop.querySelectorAll('input[type=checkbox]:not(#'+allId+'):not(.ms-zghead)'));
  var checked=boxes.filter(function(b){return b.checked;});
  _MS[k]=checked.map(function(b){return b.value;});
  var allCb=document.getElementById(allId);
  allCb.checked=checked.length===boxes.length;
  allCb.indeterminate=checked.length>0&&checked.length<boxes.length;
  var lbl=document.getElementById(lblId);
  if(checked.length===0||checked.length===boxes.length){
    lbl.textContent='Tous';
  }else if(checked.length===1){
    lbl.textContent=checked[0].closest('.ms-item').textContent.trim();
  }else{
    lbl.textContent=checked.length+' sélectionnés';
  }
};


function _msZG(zg,check){
  var drop=document.getElementById('_dp');
  drop.querySelectorAll('input[type=checkbox][data-zg="'+zg+'"]').forEach(function(cb){
    if(cb.classList.contains('ms-zghead'))return;
    cb.checked=check;
  });
  _msU('p');
  _syncZG();
}
function _syncZG(){
  var drop=document.getElementById('_dp');
  drop.querySelectorAll('input.ms-zghead').forEach(function(head){
    var z=head.dataset.zg;if(!z)return;
    var boxes=Array.from(drop.querySelectorAll('input[type=checkbox][data-zg="'+z+'"]')).filter(function(b){return !b.classList.contains('ms-zghead');});
    if(boxes.length===0){head.checked=false;head.indeterminate=false;return;}
    var n=boxes.filter(function(b){return b.checked;}).length;
    head.checked=n===boxes.length;
    head.indeterminate=n>0&&n<boxes.length;
  });
}

// ── Populate simple select ─────────────────────────────────────────────
var _gcAll=[];
var _gcMap={
  'Enseignement':'GC1','Soutien scolaire':'GC1',
  'Sant\u00e9':'GC2',
  'Gestion de l\u2019environnement':'GC3','Gestion de l\'environnement':'GC3',
  'Activit\u00e9s agricoles et rurales':'GC4','Agro alimentaire':'GC4',
  'Bois':'GC4','Cultures':'GC4','Elevage':'GC4',
  'Etudes - Conseil - Assistance':'GC6',
  'Formation - Transfert d\'exp\u00e9rience':'GC6',
  'Formation - Transfert d\u2019exp\u00e9rience':'GC6',
  'Hotellerie - Restauration \u2013 Tourisme':'GC7',
  'Hotellerie - Restauration - Tourisme':'GC7',
  'Activit\u00e9s de service':'D','Activit\u00e9s diverses':'D',
  'Activit\u00e9s industrielles diverses':'D','Activit\u00e9s juridiques':'D',
  'Caoutchouc et Mati\u00e8res plastiques':'D','Chimie':'D',
  'Commerce de d\u00e9tail alimentaire':'D','Commerce de d\u00e9tail non alimentaire':'D',
  'Construction - B\u00e2timent':'D','Culture et Communication':'D',
  'Distribution et commerce en gros':'D','Electricit\u00e9':'D','Electronique':'D',
  'Equipements thermiques et frigorifiques':'D',
  'Finances \u2013 Assurances':'D','Fluides':'D',
  'G\u00e9nie civil - Travaux public':'D','Imprimerie - Edition':'D',
  'Industrie du cuir':'D','Industrie textile':'D','Informatique':'D',
  'Mat\u00e9riaux de contructions - c\u00e9ramique - Verre':'D',
  'M\u00e9canique : fabrication et maintenance':'D',
  'M\u00e9taux non ferreux':'D','Mines - Carri\u00e8res':'D',
  'Papiers et cartons':'D','P\u00e9trole \u2013 Gaz':'D','Recherche':'D',
  'Services publics et organisations professionnelles':'D','Sid\u00e9rurgie':'D',
  'Transformation de l\'acier - Travail des m\u00e9taux ferreux':'D',
  'Transports':'D',
  'Enseignement acad\u00e9mies militaires (missions courte dur\u00e9e)':'DCSD',
  'Polyvalence':'D',
  'Pêche':'GC4',
  'Enseignement académies militaires (missions longue durée)':'DCSD'
};
var _gcN={};Object.keys(_gcMap).forEach(function(k){_gcN[k.replace(/\s+/g,' ').replace(/[\u2013\u2014]/g,'-').trim()]=_gcMap[k];});
function _gcLk(t){if(!t)return '';var tt=t.trim();if(_gcMap[tt]!==undefined)return _gcMap[tt];var k=tt.replace(/\s+/g,' ').replace(/[\u2013\u2014]/g,'-').trim();return _gcN[k]||'';}
window._gcFilt=function(btn,code){
  document.querySelectorAll('#_da .gcb button').forEach(function(b){b.classList.remove('gca');});
  btn.classList.add('gca');
  var drop=document.getElementById('_da');
  drop.querySelectorAll('label.ms-item:not(.ms-all)').forEach(function(lbl){
    var show=!code||lbl.getAttribute('data-gc')===code;
    lbl.style.display=show?'':'none';
    if(!show)lbl.querySelector('input').checked=false;
  });
  _msU('a');
};
function _gF(id,opts){
  if(id==='_ga'){
    _gcAll=opts.slice();
    var drop=document.getElementById('_da');
    opts.sort(function(a,b){return a.text.localeCompare(b.text,'fr');}).forEach(function(op){
      var c=_gcLk(op.text);
      var lbl=document.createElement('label');
      lbl.className='ms-item';
      lbl.setAttribute('data-gc',c);
      var cb=document.createElement('input');
      cb.type='checkbox';cb.value=op.id;
      cb.addEventListener('change',function(){_msU('a');});
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(' '+(c?c+' · ':'')+op.text));
      drop.appendChild(lbl);
    });
    return;
  }
  var s=document.getElementById(id);
  opts.forEach(function(op){var el=document.createElement('option');el.value=op.id;el.textContent=op.text;s.appendChild(el);});
}

// ── Init: check connection & load filter options ───────────────────────
(async function(){
  try{
    // 1. Connection check + get Nature/Activite selects
    var r=await _gP('/admin/mission/mission/false/recherche.json?nPage=1&nNbElementsParPage=1','');
    var d=await r.json();
    if(!d.aSelects)throw'no selects';
    var gc=document.getElementById('_gc');
    gc.textContent='✅ Connecté';gc.style.color='#A7F3D0';gc.style.borderColor='#27AE60';
    _gF('_gn',d.aSelects.sNature||[]);
    _gF('_ga',(d.aSelects.sActivite||[]).sort(function(a,b){return a.text.localeCompare(b.text,'fr');}));
    // 2. Load countries in background
    _loadPays();
  }catch(e){
    var gc=document.getElementById('_gc');
    gc.textContent='❌ Non connecté';gc.style.color='#FCA5A5';gc.style.borderColor='#DC2626';
    document.getElementById('_lp').textContent='Tous';
  }

})();

// ── Fetch one page ─────────────────────────────────────────────────────
function _gP(path,body){
  return fetch(path,{method:'POST',credentials:'include',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','X-Requested-With':'XMLHttpRequest'},body:body});
}

// ── Fetch ALL pages for a set of server-side filters ──────────────────
async function _safeJSON(req){
  try{var r=await req;var t=await r.text();if(!t)return null;try{return JSON.parse(t);}catch(_){return null;}}
  catch(_){return null;}
}
async function _fetchAll(dMin,dMax,pays,nature,activite,avancement){
  var p=new URLSearchParams();
  if(dMin)p.append('sDateMajIniDebutRch',dMin);
  if(dMax)p.append('sDateMajIniFinRch',dMax);
  if(pays)p.append('sPaysRch',pays);
  if(nature)p.append('sNatureRch',nature);
  if(activite)p.append('sActiviteRch',activite);
  if(avancement)p.append('sAvancementRch',avancement);
  var body=p.toString();
  var d=await _safeJSON(_gP('/admin/mission/mission/false/recherche.json?nPage=1&nNbElementsParPage=50',body));
  if(!d)return [];
  var list=d.aElements||[];
  var nbPages=parseInt((d.aPagination||{}).nNbPages)||1;
  if(nbPages>1){
    var extras=[];
    for(var i=2;i<=nbPages;i++)extras.push(i);
    var others=await Promise.all(extras.map(function(pg){
      return _safeJSON(_gP('/admin/mission/mission/false/recherche.json?nPage='+pg+'&nNbElementsParPage=50',body)).then(function(d){return (d&&d.aElements)||[];});
    }));
    others.forEach(function(arr){list=list.concat(arr);});
  }
  return list;
}

// ── Deduplicate by nIdMission ──────────────────────────────────────────
function _dedup(arr){
  var seen={};
  return arr.filter(function(m){if(seen[m.nIdMission])return false;seen[m.nIdMission]=true;return true;});
}

// ── ZG resolver for any mission (consistent with _loadPays) ──────────
function _getZG(m){
  if(!m)return '';
  var k=_nrm(m.sLibellePays||m.sPays||'');
  var ov=_ZG1_MAP[k]||_ZG_REMAP[k];
  if(ov)return ov;
  var ref=(m.sCodeComplet||m.sCode||'').toString().trim();
  var parts=ref.split(/\s+/);
  var zg=parts[parts.length-1];
  if(zg&&/^[A-Z0-9]+$/i.test(zg)&&zg!=='INT'&&zg!=='U4')return zg;
  return '';
}
function _zgOrder(z){
  if(!z||z==='(Non classé)')return 999;
  if(z.indexOf('ZG1')===0){var s=z.charAt(3)||'';var i='ABCD'.indexOf(s);return 100+(i>=0?i:9);}
  var n=z.match(/^ZG(\d+)$/);if(n)return 200+parseInt(n[1]);
  return 500;
}
function _parseMissionDate(m){
  var d=m.sDateMajIni||m.sDateMajIniFormate||'';
  if(!d)return null;
  var mm;
  if((mm=d.match(/^(\d{4})-(\d{2})-(\d{2})/)))return new Date(parseInt(mm[1]),parseInt(mm[2])-1,parseInt(mm[3]));
  if((mm=d.match(/^(\d{2})\/(\d{2})\/(\d{4})/)))return new Date(parseInt(mm[3]),parseInt(mm[2])-1,parseInt(mm[1]));
  return null;
}

// ── Main search ────────────────────────────────────────────────────────
window._gdS=async function(){
  _f={};
  var btn=document.getElementById('_gb');btn.disabled=true;btn.innerHTML='⏳…';
  document.getElementById('_ge').innerHTML='';
  document.getElementById('_gst').style.display='none';
  document.getElementById('_gt').innerHTML='<div class="lp"><span class="spn"></span> Chargement en cours…</div>';

  var myGen=++_gen; // invalidate all in-flight FPA calls from previous searches

  var dMin=document.getElementById('_gd1').value;
  var dMax=document.getElementById('_gd2').value;
  var nat=document.getElementById('_gn').value;
  var selP=_MS.p;   // selected country codes
  var selS=_MS.s;   // selected situation codes
  var selA=_MS.a;   // selected activity ids

  try{
    var all=[];

    var _actList=selA.length===0?['']:selA;
    for(var _ai=0;_ai<_actList.length;_ai++){
      var act=_actList[_ai];
      var _chunk=[];
      if(selP.length===0&&selS.length===0){
        _chunk=await _fetchAll(dMin,dMax,'',nat,act,'');
      }else if(selP.length===1&&selS.length===0){
        _chunk=await _fetchAll(dMin,dMax,selP[0],nat,act,'');
      }else if(selP.length===0&&selS.length===1){
        _chunk=await _fetchAll(dMin,dMax,'',nat,act,selS[0]);
      }else if(selP.length===1&&selS.length===1){
        _chunk=await _fetchAll(dMin,dMax,selP[0],nat,act,selS[0]);
      }else if(selP.length>1&&selS.length<=1){
        var _sit=selS.length===1?selS[0]:'';
        var _res=await Promise.all(selP.map(function(pays){return _fetchAll(dMin,dMax,pays,nat,act,_sit);}));
        _res.forEach(function(r){_chunk=_chunk.concat(r);});
      }else if(selP.length<=1&&selS.length>1){
        var _pays=selP.length===1?selP[0]:'';
        var _res=await Promise.all(selS.map(function(sit){return _fetchAll(dMin,dMax,_pays,nat,act,sit);}));
        _res.forEach(function(r){_chunk=_chunk.concat(r);});
      }else{
        var _res=await Promise.all(selP.map(function(pays){return _fetchAll(dMin,dMax,pays,nat,act,'');}));
        _res.forEach(function(r){_chunk=_chunk.concat(r);});
        _chunk=_chunk.filter(function(m){return selS.indexOf(String(m.sAvancement))>=0;});
      }
      all=all.concat(_chunk);
    }
    all=_dedup(all);

    // Exclure systématiquement l'activité 700 (Enseignement académies militaires)
    all=all.filter(function(m){return String(m.sActivite)!=='700';});
    all=all.filter(function(m){var c=(m.sLibelleActivite||'').toString().charAt(0);return c!=='a'&&c!=='d';});
    // Missions annulees : reference commencant par 'a' minuscule -> exclues de l'extraction,
    // SEULE exception connue : GAB0303A (facturee malgre le prefixe 'a').
    all=all.filter(function(m){
      var _ref=(m.sCodeComplet||m.sCode||'').toString().replace(/^\s+/,'');
      if(_ref.charAt(0)!=='a')return true;
      var _rUp=_ref.replace(/\s+/g,'').toUpperCase();
      return _rUp.indexOf('GAB0303')>=0;
    });

    // Sort: country alphabetically, then by nIdMission (creation order)
    all.sort(function(a,b){
      var pa=(a.sLibellePays||a.sPays||'').localeCompare(b.sLibellePays||b.sPays||'','fr');
      if(pa!==0)return pa;
      return (parseInt(a.nIdMission)||0)-(parseInt(b.nIdMission)||0);
    });

    _m=all;_tn=all.length;
    _gRT();
    Promise.allSettled(_m.map(function(m){return _gLF(m.nIdMission,myGen,String(m.sAvancement));})).then(function(){
      if(_gen===myGen)_gUS(); // only update stats if this search is still the current one
    });

  }catch(e){
    document.getElementById('_ge').innerHTML='<div class="err">⚠️ Erreur : '+e+'</div>';
    document.getElementById('_gt').innerHTML='<div class="msg"><div class="ic">⚠️</div><p>Erreur de connexion</p></div>';
  }finally{
    btn.disabled=false;btn.innerHTML='🔍 Rechercher';
  }
};

// ── Render table ───────────────────────────────────────────────────────
function _gRT(){
  var tbl=document.getElementById('_gt');
  if(!_m.length){tbl.innerHTML='<div class="msg"><div class="ic">🔎</div><p>Aucune mission trouvée</p></div>';return;}
  var ac={'0':'0','10':'10','20':'20','30':'30','40':'40','50':'50','70':'70','80':'80','85':'85','86':'86','90':'90','4':'40','5':'50'};
  var rows=_m.map(function(m){
    var cls='a'+(ac[String(m.sAvancement)]||'0');
    // Date création: try multiple field names
    var dc=m.sDateMajIniFormate||m.sDateMajIni||'';
    if(dc&&/^\d{4}-\d{2}-\d{2}/.test(dc))dc=dc.slice(8,10)+'/'+dc.slice(5,7)+'/'+dc.slice(0,4);
    return '<tr>'+
      '<td>'+_e(m.sLibellePays||m.sPays)+'</td>'+
      '<td><span class="cod">'+_e(m.sCodeComplet||m.sCode)+'</span></td>'+
      '<td>'+_e(m.sNatureFormate||m.sNature)+'</td>'+
      '<td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+_e(m.sLibelleActivite)+'">'+_e(m.sLibelleActivite)+'</td>'+
      '<td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+_e(m.sBeneficiaire)+'">'+_e(m.sBeneficiaire)+'</td>'+
      '<td class="c">'+_e(dc||'—')+'</td>'+
      '<td class="c"><span class="av '+cls+'">'+_e(m.sAvancementFormate||m.sAvancement)+'</span></td>'+
      '<td class="r" id="_f'+m.nIdMission+'"><span class="spn"></span></td>'+
    '</tr>';
  }).join('');
  tbl.innerHTML='<table><thead><tr>'+
    '<th>Pays</th><th>Code</th><th>Type</th><th>Activité / Domaine</th>'+
    '<th>Bénéficiaire</th><th class="c">Date création</th><th class="c">Situation</th><th class="r">FPA (€)</th>'+
    '</tr></thead><tbody>'+rows+'</tbody></table>';
  document.getElementById('_sn').textContent=_tn.toLocaleString('fr-FR');
  document.getElementById('_sf').textContent='…';
  document.getElementById('_sm').textContent='…';
  document.getElementById('_s0').textContent='…';
  document.getElementById('_gst').style.display='flex';
}

// ── Load FPA per mission ───────────────────────────────────────────────
async function _gLF(id,gen,av){
  try{
    var tot=0;
    if(av==='20'||av==='30'||av==='40'||av==='50'){
      var rf=await _gP('/admin/mission/facturation/'+id+'/get-facturation.json','');
      var df=await rf.json();
      if(_gen!==gen)return; // search was superseded — discard result
      var oe=df.oElement||{};
      tot=parseFloat(oe.nMontant)||0;
      if(tot===0)tot=parseFloat(oe.nMontantUnitaire)||0;
    }else{
      var r=await _gP('/admin/mission/propositionsfpa/'+id+'/recherche-propositionsfpa.json?nPage=1&nNbElementsParPage=50','');
      var d=await r.json();
      if(_gen!==gen)return; // search was superseded — discard result
      tot=(d.aElements||[]).reduce(function(s,fp){return s+(parseFloat(fp.fMontantParticipation)||0);},0);
      // Le montant contractualise (nMontant de la facturation) fait foi : la somme des
      // lignes FPA deja emises peut n'etre qu'un acompte partiel pour une mission encore
      // en cours (ex. MRT0315A : 400 emis sur un total contractualise de 800).
      {
        var rf2=await _gP('/admin/mission/facturation/'+id+'/get-facturation.json','');
        var df2=await rf2.json();
        if(_gen!==gen)return;
        var oe2=df2.oElement||{};
        var totFact2=parseFloat(oe2.nMontant)||0;
        if(totFact2===0)totFact2=parseFloat(oe2.nMontantUnitaire)||0;
        if(totFact2>tot)tot=totFact2;
      }
    }
    _f[id]=tot;
    var c=document.getElementById('_f'+id);
    if(c)c.innerHTML=tot>0?'<span class="fpok">'+_fe(tot)+'</span>':'<span class="fpno">—</span>';
  }catch(e){
    if(_gen!==gen)return;
    _f[id]=0;
    var c=document.getElementById('_f'+id);if(c)c.innerHTML='<span class="fpno">?</span>';
  }
}

// ── Update stats bar ───────────────────────────────────────────────────
function _gUS(){
  var v=Object.values(_f),av=v.filter(function(x){return x>0;});
  var tot=av.reduce(function(s,x){return s+x;},0);
  document.getElementById('_sf').textContent=_fe(tot);
  document.getElementById('_sm').textContent=av.length?_fe(tot/av.length):'—';
  document.getElementById('_s0').textContent=v.length-av.length;
}

// ── CSV export ─────────────────────────────────────────────────────────
// ── Excel export ───────────────────────────────────────────────────────
window._gdXL=function(){
  if(!_m.length){alert('Lancez d\'abord une recherche.');return;}
  var btn=document.querySelector('#_gaiadash button.bex');
  var origTxt=btn?btn.innerHTML:'';if(btn){btn.disabled=true;btn.innerHTML='⏳ Génération…';}
  function _doXL(){
    var EX=window.ExcelJS;
    var wb=new EX.Workbook();
    wb.creator='GAÏA DI/AGIR';wb.created=new Date();
    var ws=wb.addWorksheet('Missions GAÏA');
    // Column widths
    ws.columns=[
      {width:22},{width:13},{width:20},{width:32},
      {width:32},{width:14},{width:26},{width:15}
    ];
    // Helpers
    function _fmtD(iso){if(!iso)return'';var p=iso.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:iso;}
    var date=new Date().toLocaleDateString('fr-FR');
    var totalFPA=Object.values(_f).reduce(function(s,v){return s+(v>0?v:0);},0);
    var nbFPA=Object.values(_f).filter(function(v){return v>0;}).length;
    var d1=_fmtD(document.getElementById('_gd1').value);
    var d2=_fmtD(document.getElementById('_gd2').value);
    var periode=d1&&d2?'Du '+d1+' au '+d2:d1?'À partir du '+d1:d2?'Jusqu\'au '+d2:'Toutes dates';
    // ── Ligne 1 : Titre ────────────────────────────────────────────────
    var r1=ws.addRow(['GAÏA — Tableau de bord Délégation Internationale / AGIR']);
    ws.mergeCells('A1:H1');
    r1.height=30;
    r1.getCell(1).font={bold:true,size:14,color:{argb:'FFFFFFFF'}};
    r1.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    r1.getCell(1).alignment={vertical:'middle',horizontal:'left'};
    // ── Ligne 2 : Stats / Période ──────────────────────────────────────
    var r2=ws.addRow(['Exporté le : '+date,'','Période : '+periode,'','Missions : '+_tn,'','Total FPA :',totalFPA>0?totalFPA:0]);
    r2.height=42;
    r2.eachCell(function(cell){
      cell.font={bold:true,size:10,color:{argb:'FF1E2761'}};
      cell.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
      cell.alignment={wrapText:true,vertical:'middle'};
    });
    r2.getCell(8).numFmt='#,##0\\ "€"';
    r2.getCell(8).font={bold:true,size:11,color:{argb:'FF92400E'}};
    ws.mergeCells('A2:B2');ws.mergeCells('C2:D2');ws.mergeCells('E2:F2');
    // ── Ligne 3 : Vide ─────────────────────────────────────────────────
    ws.addRow([]).height=6;
    // ── Ligne 4 : En-têtes colonnes ────────────────────────────────────
    var r4=ws.addRow(['Pays','Code','Type','Activité / Domaine','Bénéficiaire','Date création','Situation','FPA (€)']);
    r4.height=20;
    r4.eachCell(function(cell){
      cell.font={bold:true,size:11,color:{argb:'FFFFFFFF'}};
      cell.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      cell.alignment={vertical:'middle',horizontal:'left'};
      cell.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });
    // ── Données ────────────────────────────────────────────────────────
    var even=false;
    _m.forEach(function(m){
      var dObj=_parseMissionDate(m);
      var fpa=_f[m.nIdMission];
      var row=ws.addRow([
        m.sLibellePays||m.sPays||'',
        m.sCodeComplet||m.sCode||'',
        m.sNatureFormate||m.sNature||'',
        m.sLibelleActivite||'',
        m.sBeneficiaire||'',
        dObj,
        m.sAvancementFormate||'',
        (fpa!=null&&fpa>0)?parseFloat(fpa.toFixed(0)):null
      ]);
      // Date : objet Date + numFmt pour permettre le tri chronologique
      var dcell=row.getCell(6);
      dcell.numFmt='dd/mm/yyyy';
      dcell.alignment={horizontal:'center'};
      if(even)row.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFF9FAFF'}};});
      even=!even;
      var fpacell=row.getCell(8);
      if(fpacell.value!=null){fpacell.numFmt='#,##0\\ "€"';fpacell.font={bold:true,color:{argb:'FF1E7A45'}};}
    });
    // ── Ligne total ────────────────────────────────────────────────────
    var rT=ws.addRow(['','','','','','','TOTAL',parseFloat(totalFPA.toFixed(0))]);
    rT.eachCell(function(c){
      c.font={bold:true,size:11,color:{argb:'FF1E2761'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFDE68A'}};
      c.border={top:{style:'medium',color:{argb:'FF1E2761'}}};
    });
    rT.getCell(8).numFmt='#,##0\\ "€"';
    rT.getCell(8).font={bold:true,size:12,color:{argb:'FF92400E'}};
    // ── Options feuille ────────────────────────────────────────────────
    ws.views=[{state:'frozen',xSplit:0,ySplit:4,activeCell:'A5'}];
    ws.autoFilter={from:'A4',to:'H4'};
    // ── Téléchargement ─────────────────────────────────────────────────
    wb.xlsx.writeBuffer().then(function(buf){
      var blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      var a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      a.download='GAIA_Missions_'+new Date().toISOString().slice(0,10)+'.xlsx';
      a.click();
      if(btn){btn.disabled=false;btn.innerHTML=origTxt;}
    }).catch(function(e){
      if(btn){btn.disabled=false;btn.innerHTML=origTxt;}
      alert('Erreur génération Excel : '+e);
    });
  }
  if(window.ExcelJS){_doXL();}
  else{
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js';
    s.onload=_doXL;
    s.onerror=function(){
      if(btn){btn.disabled=false;btn.innerHTML=origTxt;}
      alert('Impossible de charger la bibliothèque Excel.\nVérifiez votre connexion internet.');
    };
    document.head.appendChild(s);
  }
};

// ── CSV export ─────────────────────────────────────────────────────────
window._gdE=function(){
  if(!_m.length){alert('Lancez d\'abord une recherche.');return;}
  var h=['Pays','Code','Type','Activité','Bénéficiaire','Date création','Situation','FPA (€)'];
  var rows=_m.map(function(m){
    var dc=m.sDateMajIniFormate||m.sDateMajIni||'';
    if(dc&&/^\d{4}-\d{2}-\d{2}/.test(dc))dc=dc.slice(8,10)+'/'+dc.slice(5,7)+'/'+dc.slice(0,4);
    var fpa=_f[m.nIdMission];
    return [m.sLibellePays||m.sPays,m.sCodeComplet||m.sCode,m.sNatureFormate||m.sNature,
      m.sLibelleActivite,m.sBeneficiaire,dc,m.sAvancementFormate,
      fpa!=null?(fpa>0?fpa.toFixed(0):'0'):''].map(function(v){return'"'+(v||'').replace(/"/g,'""')+'"';}).join(';');
  });
  var csv='\uFEFF'+[h.join(';')].concat(rows).join('\n');
  var a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  a.download='GAIA_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
};

// ── Helpers ────────────────────────────────────────────────────────────
function _e(s){return s?String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):'—';}
function _fe(v){return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',minimumFractionDigits:0,maximumFractionDigits:0}).format(v);}


// ══════════════════════════════════════════════════════════════════════
// TdB — Tableau de Bord DI 2026 (Excel à 3 feuillets)
//   Période : 01/06/2025 → date du jour (date de création des missions)
//   États   : 70 En cours · 80 Terminée · 85 Facturation terminée ·
//             86 Clôturable · 90 Clôturée
// ══════════════════════════════════════════════════════════════════════
var _TDB_M_2025=["ANG0068A M ZG1", "ANG0069A M ZG1", "ANG0070A M ZG1", "ANG0071A M ZG1", "ANG0072A M ZG1", "BUR0096A M ZG1", "CAM1263A M ZG1", "CAM1264A M ZG1", "CAM1266A M ZG1", "CAM1269A M ZG1", "CAM1271A M ZG1", "CAM1277A M ZG1", "CHN2816A M ZG3", "CMB0318A M ZG3", "CMB0319A M ZG3", "CMB0324A M ZG3", "COL0024A M ZG4", "COM0092A M ZG1", "COM0093A M ZG1", "CON0323A M ZG1", "COT0694A M ZG1", "COT0697A M ZG1", "COT0702A M ZG1", "CVE0031A M ZG1", "EGY0356A M ZG2", "EGY0362A M ZG2", "EGY0364A M ZG2", "EQU0022A M ZG4", "EQU0024A M ZG4", "ETH0056A M ZG1", "GAB0288A M ZG1", "GAB0289A M ZG1", "GAB0294A M ZG1", "GAB0295A M ZG1", "GAB0296A M ZG1", "GAB0297A M ZG1", "GAB0299A M ZG1", "GAB0301A M ZG1", "GUB0025A M ZG1", "GUB0026A M ZG1", "GUB0035A M ZG1", "GUI0206A M ZG1", "GUI0207A M ZG1", "GUI0208A M ZG1", "GUI0211A M U1", "HAI0180A M ZG4", "HAI0181A M ZG4", "HAI0181B M ZG4", "HAI0182A M ZG4", "HAI0187A M ZG4", "HAI0189A M ZG4", "HAI0191A M ZG4", "HAI0192A M ZG4", "HAI0193A M ZG4", "HAI0194A M ZG4", "HAI0195A M ZG4", "HAI0198A M ZG4", "IND0125A M ZG3", "JAM0010A M ZG4", "JOR0033A P INT", "MAD1073A M J3", "MAD1075A M J3", "MAD1078A M W2", "MAD1079A M W2", "MAD1084A M ZG1", "MAR2964A M ZG2", "MRT0283A M ZG1", "MRT0284A M ZG1", "MRT0285A M ZG1", "MRT0286A M ZG1", "MRT0288A M ZG1", "MRT0289A M ZG1", "MRT0290A M ZG1", "MRT0291A M ZG1", "MRT0297A M ZG1", "MRT0300A M ZG1", "MRT0302A M ZG1", "MRT0303A M ZG1", "MRT0304A M ZG1", "MRT0305A M ZG1", "MRT0308A M ZG1", "NEP0034A M ZG3", "OUG0036A M ZG1", "PAR0021A M ZG4", "PAR0024A M ZG4", "PER0050A M ZG4", "RCA0778A M ZG1", "RWA0214A M ZG1", "RWA0218A M ZG1", "RWA0235A M ZG1", "RWA0240A M ZG1", "RWA0241A M ZG1", "RWA0242A M ZG1", "RWA0244A M ZG1", "RWA0245A M ZG1", "RWA0248A M ZG1", "RWA0249A M ZG1", "RWA0258A M ZG1", "SIE0017A M ZG1", "SIE0022A M ZG1", "SIE0025A M ZG1", "TOG0286A M ZG1", "VIE0297A M ZG3"];
var _TDB_P_2025=["BEN0380A P ZG1", "BEN0387A P ZG1", "BEN0389A P ZG1", "BEN0391A P ZG1", "BEN0392A P ZG1", "BEN0393A P ZG1", "BEN0394A P ZG1", "BEN0395A P ZG1", "BEN0396A P ZG1", "BEN0397A P ZG1", "BEN0398A P ZG1", "BEN0400A P ZG1", "BEN0401A P ZG1", "BEN0402A P ZG1", "BEN0403A P ZG1", "BEN0404A P ZG1", "BEN0405A P ZG1", "BEN0406A P ZG1", "BEN0407A P ZG1", "BEN0408A P ZG1", "BEN0409A P ZG1", "BEN0410A P ZG1", "BEN0411A P ZG1", "BEN0412A P ZG1", "BEN0413A P ZG1", "BEN0415A P ZG1", "BEN0416A P ZG1", "BEN0417A P ZG1", "BEN0418A P ZG1", "CAM1262A P B2", "CAM1265A P B2", "CAM1276A P B2", "CMB0321A P ZG3", "JOR0036A P INT", "MAD1088A P R2", "MAD1089A P R2", "RCA0775A P ZG1", "SEN0634A P ZG1", "SEN0635A P ZG1", "SEN0637A P ZG1", "SLO0046A P INT", "TOG0289A P ZG1", "TOG0290A P ZG1", "TOG0291A P ZG1", "UZB0132A P ZG6", "UZB0133A P ZG6", "UZB0134A P ZG6", "UZB0136A P ZG6", "UZB0137A P ZG6", "UZB0141A P ZG6", "UZB0142A P ZG6", "UZB0143A P ZG6", "UZB0144A P ZG6", "VIE0303A P INT"];
var _TDB_SM={};_TDB_M_2025.forEach(function(r){_TDB_SM[r]=1;});
var _TDB_SP={};_TDB_P_2025.forEach(function(r){_TDB_SP[r]=1;});
var _TDB_ETATS=[
  {id:'70',lib:'En cours'},
  {id:'80',lib:'Terminée'},
  {id:'85',lib:'Facturation terminée'},
  {id:'86',lib:'Clôturable'},
  {id:'90',lib:'Clôturée'}
];
var _TDB_ETATS_F5=[
  {id:'20',lib:'Formellement demandée'},
  {id:'30',lib:'Proposée à des candidats'},
  {id:'40',lib:'Candidatures transmises'},
  {id:'50',lib:'Intervenant désigné'}
];
var _TDB_ETATS_EARLY=[
  {id:'0',lib:'Brouillon'},
  {id:'10',lib:"À l'étude"}
];
var _TDB_DATE_DEBUT='2025-06-01';

window._gdTdB=function(){
  var btn=document.getElementById('_btdb');
  var origTxt=btn?btn.innerHTML:'';
  if(btn){btn.disabled=true;btn.innerHTML='⏳ TdB…';}
  function _restore(){if(btn){btn.disabled=false;btn.innerHTML=origTxt;}}
  function _go(){_runTdB().then(_restore).catch(function(e){
    _restore();
    console.error('TdB error',e);
    alert('Erreur TdB : '+(e&&e.message?e.message:e));
  });}
  if(window.ExcelJS){_go();}
  else{
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js';
    s.onload=_go;
    s.onerror=function(){_restore();alert('Impossible de charger la bibliothèque Excel.\nVérifiez votre connexion internet.');};
    document.head.appendChild(s);
  }
};

// Petit helper de fetch GAIA avec retry et sans dépendre de _fetchAll
async function _tdbFetchPage(body,page){
  var url='/admin/mission/mission/false/recherche.json?nPage='+page+'&nNbElementsParPage=200';
  var lastErr=null;
  for(var attempt=0;attempt<3;attempt++){
    try{
      var r=await _gP(url,body);
      if(!r.ok)throw new Error('HTTP '+r.status);
      return await r.json();
    }catch(e){
      lastErr=e;
      // Pause progressive : 400 ms, 800 ms
      await new Promise(function(res){setTimeout(res,400*(attempt+1));});
    }
  }
  throw lastErr||new Error('Échec après 3 tentatives');
}

// Récupère TOUTES les missions pour un (avancement) — séquentiellement
async function _tdbFetchEtat(etat,iso){
  var p=new URLSearchParams();
  p.append('sDateMajIniDebutRch',_TDB_DATE_DEBUT);
  p.append('sDateMajIniFinRch',iso);
  p.append('sAvancementRch',etat);
  var body=p.toString();
  var first=await _tdbFetchPage(body,1);
  var list=first.aElements||[];
  var nbPages=parseInt((first.aPagination||{}).nNbPages)||1;
  for(var pg=2;pg<=nbPages;pg++){
    var d=await _tdbFetchPage(body,pg);
    list=list.concat(d.aElements||[]);
  }
  return list;
}

async function _runTdB(){
  var today=new Date();
  var iso=today.toISOString().slice(0,10);
  var dateExtractFR=today.toLocaleDateString('fr-FR');

  var tw=document.getElementById('_gt');
  var save=tw.innerHTML;
  function _msg(t){tw.innerHTML='<div class="msg"><div class="ic">📊</div><p>'+t+'</p></div>';}

  // 1. Récupération SÉQUENTIELLE des 9 états (5 post-exécution + 4 instruction)
  var _ETATS_ALL=_TDB_ETATS.concat(_TDB_ETATS_F5).concat(_TDB_ETATS_EARLY);
  var all=[];
  for(var i=0;i<_ETATS_ALL.length;i++){
    var et=_ETATS_ALL[i];
    _msg('Récupération état '+(i+1)+'/'+_ETATS_ALL.length+' : '+et.lib+'…');
    try{
      var r=await _tdbFetchEtat(et.id,iso);
      all=all.concat(r);
    }catch(err){
      throw new Error('État "'+et.lib+'" : '+(err&&err.message?err.message:err));
    }
  }
  all=_dedup(all);
  // Exclure activité 700 (cohérence)
  all=all.filter(function(m){return String(m.sActivite)!=='700';});
  all=all.filter(function(m){var c=(m.sLibelleActivite||'').toString().charAt(0);return c!=='a'&&c!=='d';});

  // Missions annulees : reference commencant par 'a' minuscule -> exclues du TdB,
  // SEULE exception connue : GAB0303A (facturee malgre le prefixe 'a').
  all=all.filter(function(m){
    var _ref=(m.sCodeComplet||m.sCode||'').toString().replace(/^\s+/,'');
    if(_ref.charAt(0)!=='a')return true;
    var _rUp=_ref.replace(/\s+/g,'').toUpperCase();
    return _rUp.indexOf('GAB0303')>=0;
  });
  // MAR2974A annulee : exclusion totale du TdB (mission annulee)
  all=all.filter(function(m){var _r=(m.sCodeComplet||m.sCode||'').toString().replace(/\s+/g,'').toUpperCase();return _r.indexOf('MAR2974')<0;});
  // MAR2975A : statut force Intervenant designe -> Terminee (FPA 300 EUR)
  all.forEach(function(m){var _r=(m.sCodeComplet||m.sCode||'').toString().replace(/\s+/g,'').toUpperCase();if(_r.indexOf('MAR2975')>=0){m.sAvancement='80';}});

  // 2. Répartition par type + exclusion 2025
  var _POST={'70':1,'80':1,'85':1,'86':1,'90':1};
  var _F5={'20':1,'30':1,'40':1,'50':1};
  var missionsP=[],projets=[],allF5=[];
  var _J2026=new Date(2026,0,1);
  all.forEach(function(m){
    var ref=m.sCodeComplet||m.sCode||'';
    var av=String(m.sAvancement);
    // Exclure le domaine DCSD - Enseignement academies militaires (missions courte duree) - hors TdB, definitivement
    if((m.sLibelleActivite||'').replace(/\s+/g,' ').trim()==='Enseignement acad\u00e9mies militaires (missions courte dur\u00e9e)')return;
    // Une mission n'est consideree comme deja comptee (via la liste figee _TDB_M_2025 /
    // _TDB_P_2025) que si elle est reellement anterieure a 2026 : une reference perimee
    // ou erronee dans cette liste ne doit plus jamais faire disparaitre une mission 2026
    // (cf. MRT0308A, present a tort dans _TDB_M_2025 alors que datee du 12/01/2026).
    var _mDate=_parseMissionDate(m);
    var _dejaComptee=(_TDB_SM[ref]||_TDB_SP[ref])&&(!_mDate||_mDate<_J2026);
    if(_F5[av]){
      if(!_dejaComptee)allF5.push(m);
    }else if(_POST[av]){
      if(/\sM\s/.test(ref)){if(!_dejaComptee)missionsP.push(m);}
      else if(/\sP\s/.test(ref)){if(!_dejaComptee)projets.push(m);}
    }
  });
    // Exclure RUZB0139A et UZB0145A (missions 2025, hors TdB 2026)
  missionsP=missionsP.filter(function(m){var _c=(m.sCodeComplet||m.sCode||'').split(/\s+/)[0].toUpperCase();return _c!=='RUZB0139A'&&_c!=='UZB0145A'&&_c!=='MAR2967A'&&_c!=='COL0025A';});
  // Feuillet 5 : filtrer les missions d'instruction créées depuis le 1er janvier 2026
  var _F5_jan1=new Date(2026,0,1);
  allF5=allF5.filter(function(m){var d=_parseMissionDate(m);return d&&d>=_F5_jan1;});
  // HON0010/HND0010 et EGY0371 retirees de l'instruction (deja classees en prospection)
  allF5=allF5.filter(function(m){var _r=(m.sCodeComplet||m.sCode||'').toString().replace(/\s+/g,'').toUpperCase();return _r.indexOf('HON0010')<0&&_r.indexOf('HND0010')<0&&_r.indexOf('EGY0371')<0;});
  function _trier(arr){
    arr.sort(function(a,b){
      var pa=(a.sLibellePays||a.sPays||'').localeCompare(b.sLibellePays||b.sPays||'','fr');
      if(pa!==0)return pa;
      return (a.sCodeComplet||a.sCode||'').localeCompare(b.sCodeComplet||b.sCode||'');
    });
  }
  _trier(missionsP);_trier(projets);

  _msg(missionsP.length+' missions · '+projets.length+' projets · '+allF5.length+' en instruction — chargement des FPA…');

  // 3. FPA en lots séquentiels (lots de 6, séquentiellement)
  var fpas={};
  var toLoad=missionsP.concat(projets).concat(allF5);
  async function _loadFPA(id){
    try{
      var r=await _gP('/admin/mission/propositionsfpa/'+id+'/recherche-propositionsfpa.json?nPage=1&nNbElementsParPage=200','');
      if(!r.ok)return 0;
      var d=await r.json();
      var els=d.aElements||[];
      var tot=els.reduce(function(s,e){return s+(parseFloat(e.fMontantParticipation)||0);},0);
      // Le montant contractualise (nMontant de la facturation) fait foi : la somme des
      // lignes FPA deja emises peut n'etre qu'un acompte partiel pour une mission encore
      // en cours (ex. MRT0315A : 400 emis sur un total contractualise de 800).
      {
        var rf=await _gP('/admin/mission/facturation/'+id+'/get-facturation.json','');
        if(rf.ok){
          var df=await rf.json();
          var oe=df.oElement||{};
          var totFact=parseFloat(oe.nMontant)||0;
          if(totFact===0)totFact=parseFloat(oe.nMontantUnitaire)||0;
          if(totFact>tot)tot=totFact;
        }
      }
      return tot;
    }catch(e){return 0;}
  }
  async function _loadFPAfact(id){
    try{
      var rf=await _gP('/admin/mission/facturation/'+id+'/get-facturation.json','');
      if(!rf.ok)return 0;
      var df=await rf.json();
      var oe=df.oElement||{};
      var mt=parseFloat(oe.nMontant)||0;
      if(mt===0)mt=parseFloat(oe.nMontantUnitaire)||0;
      return mt;
    }catch(e){return 0;}
  }
  var BATCH=6;
  for(var k=0;k<toLoad.length;k+=BATCH){
    var slice=toLoad.slice(k,k+BATCH);
    var rs=await Promise.all(slice.map(function(m){return (_F5[String(m.sAvancement)]?_loadFPAfact:_loadFPA)(m.nIdMission);}));
    rs.forEach(function(v,idx){fpas[slice[idx].nIdMission]=v;});
    _msg('Chargement FPA : '+Math.min(k+BATCH,toLoad.length)+' / '+toLoad.length);
  }

  // ── Override : BENIN — BEN>=426 (nouveau programme) forcés à 700 €, anciens (<426) à 980 € (TdB uniquement) ──
  projets.forEach(function(p){
    var pays=_nrm(p.sLibellePays||p.sPays||'');
    if(pays==='BENIN'){
      var _bn=parseInt((_firstPart(p)||'').replace(/[^0-9]/g,''),10);fpas[p.nIdMission]=(_bn>=426)?700:980;
      p._fpaOverride=true;
    }
  });

  // ── Override FPA : missions spécifiques (valeurs forcées, affichage bleu foncé) ──
  var _FPA_OVERRIDES={'COL0025A':510,'BEN0420A':704,'BEN0421A':872,'BEN0424A':900,'BEN0427A':1808,'BEN0428A':1354,'BEN0429A':1016,'BEN0430A':1584};
  missionsP.concat(projets).concat(allF5).forEach(function(m){
    var fp=_FPA_OVERRIDES[_firstPart(m)];
    if(fp!==undefined){fpas[m.nIdMission]=fp;m._fpaOverride=true;}
  });

  // MAR2975A : FPA 300 EUR affiche normalement (vert), sans flag override
  missionsP.concat(projets).concat(allF5).forEach(function(m){var _r=(m.sCodeComplet||m.sCode||'').toString().replace(/\s+/g,'').toUpperCase();if(_r.indexOf('MAR2975')>=0){fpas[m.nIdMission]=300;delete m._fpaOverride;}});

  _msg('Construction du fichier Excel…');

  // 4. Construction Excel
  var EX=window.ExcelJS;
  var wb=new EX.Workbook();
  wb.creator='GAÏA DI/AGIR';wb.created=new Date();

  // ── Feuillet 1 : Tableau de Bord — version v14 ──
  // Calculs préalables à partir des données déjà chargées (missionsP, projets, allF5)
  var _nbMR=0,_fpaMR=0,_nbPR=0,_fpaPR=0,_nbCours=0;
  missionsP.forEach(function(m){
    if(String(m.sAvancement)==='70'){_nbCours++;}
    else{_nbMR++;_fpaMR+=(fpas[m.nIdMission]||0);}
  });
  projets.forEach(function(m){
    if(String(m.sAvancement)==='70'){_nbCours++;}
    else{_nbPR++;_fpaPR+=(fpas[m.nIdMission]||0);}
  });
  // Comptages des états d'instruction (feuillet 5)
  var _nbF5_20=0,_nbF5_30=0,_nbF5_40=0,_nbF5_50=0;
  allF5.forEach(function(m){
    var av=String(m.sAvancement);
    if(av==='20')_nbF5_20++;
    else if(av==='30')_nbF5_30++;
    else if(av==='40')_nbF5_40++;
    else if(av==='50')_nbF5_50++;
  });
  var _jan1=new Date(2026,0,1);
  var _daysSinceJan1=Math.floor((new Date(today.getFullYear(),today.getMonth(),today.getDate())-_jan1)/86400000);
  if(_daysSinceJan1<0)_daysSinceJan1=0;
  var _valA=Math.round(48750/365*_daysSinceJan1);
  var _valD=Math.round(63900/365*_daysSinceJan1);
  var _valE=Math.round(97516/365*_daysSinceJan1);
  var _nbZ=_nbMR+_nbPR;
  var _valS=_valA+Math.round(_fpaMR)+Math.round(_fpaPR);
  var _valP=_valD+_valE;
  var _valR=_valS-_valP;

  // Prospection : missions de type R OU activité/nature contient "prospection", depuis 1 janv. 2026
  // Liste des codes mission à inclure d'office (peu importe ref / activité / date)
  // On compare au PREMIER segment de la référence (ex : "BEN0419A R ZG1" → "BEN0419A")
  var _PROSPECTION_FORCE=['BEN0419A'];
  function _firstPart(m){
    var ref=(m.sCodeComplet||m.sCode||'').toString().trim();
    var parts=ref.split(/\s+/);
    return (parts[0]||'').toUpperCase();
  }
  function _isForceProspection(m){return _PROSPECTION_FORCE.indexOf(_firstPart(m))>=0;}
  function _isProspection(m){
    if(_isForceProspection(m))return true;
    var ref=(m.sCodeComplet||m.sCode||'').toString().trim();
    var parts=ref.split(/\s+/);
    if(parts.length>=3 && parts[parts.length-2]==='R')return true;
    var lbl=(m.sLibelleActivite||'').toString().toLowerCase();
    var nat=(m.sNatureFormate||m.sNature||'').toString().toLowerCase();
    return lbl.indexOf('prospection')>=0||nat.indexOf('prospection')>=0;
  }
  var _prospection=all.filter(function(m){
    if(!_isProspection(m))return false;
    // Court-circuit du filtre de date pour les missions forcées (ex : BEN0419A)
    if(_isForceProspection(m))return true;
    var d=_parseMissionDate(m);
    return d&&d>=_jan1;
  });
  _prospection.forEach(function(m){m._zg=_getZG(m)||'(Non classé)';});
  _prospection.sort(function(a,b){
    var oa=_zgOrder(a._zg),ob=_zgOrder(b._zg);
    if(oa!==ob)return oa-ob;
    if(a._zg!==b._zg)return a._zg.localeCompare(b._zg);
    var pa=(a.sLibellePays||a.sPays||'').localeCompare(b.sLibellePays||b.sPays||'','fr');
    if(pa!==0)return pa;
    var da=_parseMissionDate(a),db=_parseMissionDate(b);
    return (da?da.getTime():0)-(db?db.getTime():0);
  });

  var ws1=wb.addWorksheet('Tableau de Bord DI 2026');
  ws1.getColumn('A').width=4;
  ws1.getColumn('B').width=32;
  ws1.getColumn('C').width=14;
  ws1.getColumn('D').width=14;
  ws1.getColumn('E').width=18;
  ws1.getColumn('F').width=14;
  ws1.getColumn('G').width=12;
  ws1.getColumn('H').width=14;
  ws1.getColumn('I').width=18;
  ws1.getColumn('J').width=14;
  ws1.getColumn('K').width=18;

  var _DARK='FF1A3A5C',_BLUE='FF2E74B5',_MED='FF4472C4',_LIGHT='FFE9EDF4',_WHITE='FFFFFFFF';
  function _S(addr,o){
    var c=ws1.getCell(addr);
    if('value' in o)c.value=o.value;
    if(o.fill)c.fill={type:'pattern',pattern:'solid',fgColor:{argb:o.fill}};
    if(o.font)c.font=o.font;
    if(o.align)c.alignment=o.align;
    if(o.numFmt)c.numFmt=o.numFmt;
    if(o.border)c.border=o.border;
    return c;
  }

  // ─── Bloc en-tête général ─────────────────────────────────────────
  // Ligne 3 : Titre général
  ws1.getRow(3).height=32;
  ws1.mergeCells('B3:J3');
  _S('B3',{value:'Tableau de Bord de la DI 2026',fill:_DARK,font:{bold:true,size:18,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});
  // Ligne 4 : date d'extraction
  ws1.getRow(4).height=22;
  ws1.mergeCells('B4:J4');
  _S('B4',{value:'Date d\'extraction : '+dateExtractFR,fill:_DARK,font:{bold:true,size:13,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});

  // ─── Bloc Situation financière (sous-tableau) ────────────────────
  // Ligne 7 : sous-titre + date
  ws1.getRow(7).height=26;
  ws1.mergeCells('B7:D7');
  _S('B7',{value:'Situation financière — '+dateExtractFR,fill:_DARK,font:{bold:true,size:16,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});

  // Ligne 9 : A - PRODUITS
  ws1.getRow(9).height=22;
  ws1.mergeCells('B9:D9');
  _S('B9',{value:'A - PRODUITS',fill:_BLUE,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1}});

  // Ligne 11 : MAE | A
  ws1.mergeCells('B11:C11');
  _S('B11',{value:'MAE',font:{size:14},align:{vertical:'middle',horizontal:'left',indent:1}});
  _S('D11',{value:_valA,numFmt:'#,##0\\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});

  // Ligne 12 : X MISSIONS PONCTUELLES | B
  ws1.mergeCells('B12:C12');
  _S('B12',{value:_nbMR+' MISSIONS PONCTUELLES',font:{size:14},align:{vertical:'middle',horizontal:'left',indent:1}});
  _S('D12',{value:Math.round(_fpaMR),numFmt:'#,##0\\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});

  // Ligne 13 : Y MISSIONS PROJETS ET PROGRAMMES | C
  ws1.mergeCells('B13:C13');
  _S('B13',{value:_nbPR+' MISSIONS PROJETS ET PROGRAMMES',font:{size:14},align:{vertical:'middle',horizontal:'left',indent:1}});
  _S('D13',{value:Math.round(_fpaPR),numFmt:'#,##0\\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});

  // Lignes 15-16 : TOTAL PRODUITS (Z Missions) | S
  ws1.mergeCells('B15:C16');ws1.mergeCells('D15:D16');
  ws1.getRow(15).height=22;ws1.getRow(16).height=8;
  _S('B15',{value:'TOTAL PRODUITS ('+_nbZ+' Missions)',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1},border:{top:{style:'medium',color:{argb:_DARK}}}});
  _S('D15',{value:_valS,numFmt:'#,##0\\ "€"',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right'},border:{top:{style:'medium',color:{argb:_DARK}}}});

  /// ─── Tableau Budget (à droite de Situation financière) ────
  var _Ndays=Math.floor((new Date()-new Date(2026,0,1))/86400000);if(_Ndays<0)_Ndays=0;
  var _bConMAE=Math.round(23750/365*_Ndays);
  var _bConMis=Math.round(95000/365*_Ndays);
  var _bConPP=Math.round(40000/365*_Ndays);
  var _bConTot=_bConMAE+_bConMis+_bConPP;
  // Ligne 7 : titre budget (au niveau de Situation financière) — 2 lignes
  ws1.getRow(7).height=46;
  _S('F7',{value:'Budget',fill:_DARK,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center',wrapText:true}});
  _S('F11',{value:_bConMAE,numFmt:'#,##0\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});
  _S('F12',{value:_bConMis,numFmt:'#,##0\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});
  _S('F13',{value:_bConPP,numFmt:'#,##0\ "€"',font:{size:14,bold:true},align:{vertical:'middle',horizontal:'right'}});
  ws1.mergeCells('F15:F16');
  _S('F15',{value:_bConTot,numFmt:'#,##0\ "€"',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right'},border:{top:{style:'medium',color:{argb:_DARK}}}});
  // Lignes 17-18 : pourcentage d'atteinte (Situation / Budget)
  // Ligne 17 : hors MAE  = (missions ponctuelles + projets/programmes) / (budget mis + budget pp)
  // Ligne 18 : TOTAL     = situation totale / budget total (inclut MAE)
  ws1.getRow(17).height=22;
  ws1.getRow(18).height=22;
  var _sHorsMAE=Math.round(_fpaMR)+Math.round(_fpaPR);
  var _bConHors=_bConMis+_bConPP;
  var _pctConHors=_bConHors>0?(_sHorsMAE/_bConHors):0;
  var _pctCon=_bConTot>0?(_valS/_bConTot):0;
  _S('E17',{value:'hors MAE',fill:'FFFFFF00',font:{bold:true,size:13,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'right',indent:1}});
  _S('F17',{value:_pctConHors,numFmt:'0%',fill:'FFFFFF00',font:{bold:true,size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'right'}});
  _S('E18',{value:'TOTAL',fill:'FFFFFF00',font:{bold:true,size:13,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'right',indent:1}});
  _S('F18',{value:_pctCon,numFmt:'0%',fill:'FFFFFF00',font:{bold:true,size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'right'}});
  function _addBordB(addr,edges){var c=ws1.getCell(addr);var b=Object.assign({},c.border||{});Object.keys(edges).forEach(function(e){b[e]=edges[e];});c.border=b;}
  var _OBB={style:'medium',color:{argb:_DARK}};
  _addBordB('F7',{top:_OBB,left:_OBB,right:_OBB});
  [8,9,10,11,12,13,14].forEach(function(r){_addBordB('F'+r,{left:_OBB,right:_OBB});});
  _addBordB('F15',{left:_OBB,right:_OBB});
  _addBordB('F17',{left:_OBB,right:_OBB,top:{style:'medium',color:{argb:_DARK}}});
  _addBordB('F18',{left:_OBB,right:_OBB,bottom:_OBB});
  // Ligne 19 : B - CHARGES
  ws1.getRow(19).height=22;
  ws1.mergeCells('B19:D19');
  _S('B19',{value:'B - CHARGES',fill:_BLUE,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1}});

  // Ligne 21 : 1. FRAIS GÉNÉRAUX DIRECTS | D
  ws1.mergeCells('B21:C21');
  _S('B21',{value:'1. FRAIS GÉNÉRAUX DIRECTS',fill:_LIGHT,font:{bold:true,size:14},align:{vertical:'middle',horizontal:'left',indent:1}});
  _S('D21',{value:_valD,numFmt:'#,##0\\ "€"',fill:_LIGHT,font:{bold:true,size:14},align:{vertical:'middle',horizontal:'right'}});

  // Ligne 22 : 2. FRAIS GÉNÉRAUX INDIRECTS | E
  ws1.mergeCells('B22:C22');
  _S('B22',{value:'2. FRAIS GÉNÉRAUX INDIRECTS',fill:_LIGHT,font:{bold:true,size:14},align:{vertical:'middle',horizontal:'left',indent:1}});
  _S('D22',{value:_valE,numFmt:'#,##0\\ "€"',fill:_LIGHT,font:{bold:true,size:14},align:{vertical:'middle',horizontal:'right'}});

  // Lignes 24-25 : TOTAL CHARGES | P
  ws1.mergeCells('B24:C25');ws1.mergeCells('D24:D25');
  ws1.getRow(24).height=22;ws1.getRow(25).height=8;
  _S('B24',{value:'TOTAL CHARGES',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1},border:{top:{style:'medium',color:{argb:_DARK}}}});
  _S('D24',{value:_valP,numFmt:'#,##0\\ "€"',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right'},border:{top:{style:'medium',color:{argb:_DARK}}}});

  // ── Encadrement foncé autour du tableau Situation financière ────
  function _addBord(addr,edges){
    var c=ws1.getCell(addr);
    var b=Object.assign({},c.border||{});
    Object.keys(edges).forEach(function(e){b[e]=edges[e];});
    c.border=b;
  }
  var _OB={style:'medium',color:{argb:_DARK}};
  // Top of table
  _addBord('B7',{top:_OB,left:_OB,right:_OB});
  // Rows where B:D entire row is merged (sections A-PRODUITS, B-CHARGES)
  _addBord('B9',{left:_OB,right:_OB});
  _addBord('B19',{left:_OB,right:_OB});
  // Other rows : left on B, right on D — la boîte descend maintenant jusqu'à RÉSULTAT (ligne 28)
  [8,10,11,12,13,14,15,17,18,20,21,22,23,26,27].forEach(function(r){
    _addBord('B'+r,{left:_OB});
    _addBord('D'+r,{right:_OB});
  });
  // Row 24 (merged B24:C25 + D24:D25) — plus de bottom : la boîte se prolonge
  _addBord('B24',{left:_OB});
  _addBord('D24',{right:_OB});
  // Ligne 28 RÉSULTAT — bas de la boîte (merge B28:C28)
  _addBord('B28',{left:_OB,bottom:_OB});
  _addBord('D28',{right:_OB,bottom:_OB});


  // Ligne 27 : (blanc — respiration avant le résultat)
  // Lignes 28-29 : RÉSULTAT — fond bleu foncé sur B, C, D — juste après TOTAL CHARGES
  ws1.getRow(28).height=28;
  ws1.mergeCells('B28:C28');
  _S('B28',{value:'RÉSULTAT',fill:_MED,font:{bold:true,size:16,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'},border:{top:{style:'medium',color:{argb:_DARK}}}});
  _S('D28',{value:_valR,numFmt:'#,##0\\ "€"',fill:_MED,font:{bold:true,size:16,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'},border:{top:{style:'medium',color:{argb:_DARK}}}});

  // ─── Graphique d'évolution Produits 2026 ────────────────────────────────
  function _makeChartPng(){
    var cv=document.createElement('canvas');
    cv.width=800;cv.height=850;
    var ctx=cv.getContext('2d');
    ctx.fillStyle='#ffffff';ctx.fillRect(0,0,cv.width,cv.height);
    // Layout : title line 1, legend line 2, chart area below
    var titleY=20;
    var legY=50;
    var L=80,R=80,T=110,B=55;
    var W=cv.width-L-R,H=cv.height-T-B;
    var months=['05/26','06/26','07/26','08/26','09/26','10/26','11/26','12/26'];
    var N=months.length;
    var bud=months.map(function(_,i){return 65.3+(159-65.3)*i/(N-1);});
    var budH=months.map(function(_,i){return 52.5+(135-52.5)*i/(N-1);});
    var yMax=180,yMin=0;
    function xPx(i){return L+i*W/(N-1);}
    function yPx(v){return T+H-(v-yMin)/(yMax-yMin)*H;}
    // Grille horizontale
    [0,30,60,90,120,150,180].forEach(function(v){
      var y=yPx(v);
      ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;ctx.setLineDash([]);
      ctx.beginPath();ctx.moveTo(L,y);ctx.lineTo(L+W,y);ctx.stroke();
      ctx.fillStyle='#374151';ctx.font='bold 13px Calibri,Arial';ctx.textAlign='right';
      ctx.fillText(v+'K€',L-8,y+5);
    });
    // Grille verticale + labels mois
    months.forEach(function(m,i){
      var x=xPx(i);
      ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;ctx.setLineDash([]);
      ctx.beginPath();ctx.moveTo(x,T);ctx.lineTo(x,T+H);ctx.stroke();
      ctx.fillStyle='#374151';ctx.font='bold 13px Calibri,Arial';ctx.textAlign='center';
      ctx.fillText(m,x,T+H+22);
    });
    // Axes
    ctx.strokeStyle='#374151';ctx.lineWidth=2;ctx.setLineDash([]);
    ctx.beginPath();ctx.moveTo(L,T);ctx.lineTo(L,T+H);ctx.lineTo(L+W,T+H);ctx.stroke();
    // Courbe 1 : Total produits budget (bleu marine, trait plein)
    ctx.strokeStyle='#1e3a8a';ctx.lineWidth=2.5;ctx.setLineDash([]);
    ctx.beginPath();bud.forEach(function(v,i){i===0?ctx.moveTo(xPx(i),yPx(v)):ctx.lineTo(xPx(i),yPx(v));});ctx.stroke();
    // Label 159K€ en décembre
    ctx.fillStyle='#1e3a8a';ctx.font='bold 13px Calibri,Arial';ctx.textAlign='left';
    ctx.fillText('159K€',xPx(N-1)+6,yPx(bud[N-1])+5);
    // Courbe 2 : Budget hors MAE (bleu ciel, trait plein)
    ctx.strokeStyle='#60a5fa';ctx.lineWidth=2.5;ctx.setLineDash([]);
    ctx.beginPath();budH.forEach(function(v,i){i===0?ctx.moveTo(xPx(i),yPx(v)):ctx.lineTo(xPx(i),yPx(v));});ctx.stroke();
    // Label 135K€ en décembre
    ctx.fillStyle='#60a5fa';ctx.font='bold 13px Calibri,Arial';ctx.textAlign='left';
    ctx.fillText('135K€',xPx(N-1)+6,yPx(budH[N-1])+5);
    // Points "Actuel" (Total Produits / hors MAE), mai + juin + juillet + aout — reconduits a chaque
    // extraction ; a completer avec le mois de septembre lors de la prochaine extraction (fin septembre).
    var _actPts=[
      {i:0,tot:42.6,pct:'65%',horsMAE:32.8,pctH:'59%'}, // 05/26 (corrige : prorata MAE 23750/365)
      {i:1,tot:55.2,pct:'70%',horsMAE:43.4,pctH:'65%'}, // 06/26 (corrige : prorata MAE 23750/365)
      {i:2,tot:64.0,pct:'70%',horsMAE:50.2,pctH:'64%'}, // 07/26 (corrige : prorata MAE 23750/365)
      {i:3,tot:87.5,pct:'83%',horsMAE:55.1,pctH:'62%'}  // 08/26
    ];
    // Ligne + points : Total Produits (orange)
    ctx.strokeStyle='#ea580c';ctx.lineWidth=2;ctx.setLineDash([]);
    ctx.beginPath();
    _actPts.forEach(function(p,k){var x=xPx(p.i),y=yPx(p.tot);k===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
    ctx.stroke();
    _actPts.forEach(function(p){
      var x=xPx(p.i),y=yPx(p.tot);
      ctx.fillStyle='#ea580c';ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();
      ctx.font='bold 11px Calibri,Arial';ctx.textAlign='left';
      ctx.fillText(p.tot.toLocaleString('fr-FR',{minimumFractionDigits:1,maximumFractionDigits:1})+'K€  '+p.pct,x+14,y-8);
    });
    // Ligne + points : hors MAE (vert)
    ctx.strokeStyle='#16a34a';ctx.lineWidth=2;ctx.setLineDash([]);
    ctx.beginPath();
    _actPts.forEach(function(p,k){var x=xPx(p.i),y=yPx(p.horsMAE);k===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
    ctx.stroke();
    _actPts.forEach(function(p){
      var x=xPx(p.i),y=yPx(p.horsMAE);
      ctx.fillStyle='#16a34a';ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();
      ctx.font='bold 11px Calibri,Arial';ctx.textAlign='left';
      ctx.fillText(p.horsMAE.toLocaleString('fr-FR',{minimumFractionDigits:1,maximumFractionDigits:1})+'K€  '+p.pctH,x+14,y+20);
    });
    // Titre (au-dessus de la légende)
    ctx.fillStyle='#1e2761';ctx.font='bold 15px Calibri,Arial';ctx.textAlign='center';ctx.setLineDash([]);
    ctx.fillText('Évolution Produits 2026 — Budget vs Réalisé',cv.width/2,titleY);
    // Légende sur 2 lignes
    var legRow1=[
      {color:'#1e3a8a',label:'Total produits budget',x:10},
      {color:'#60a5fa',label:'Total produits budget hors MAE',x:220}
    ];
    var legRow2=[
      {color:'#ea580c',label:'Actuel Total Produits',x:10,circ:true},
      {color:'#16a34a',label:'Actuel Total Produits hors MAE',x:220,circ:true}
    ];
    function _drawLegRow(segs,y){
      segs.forEach(function(s){
        ctx.strokeStyle=s.color;ctx.lineWidth=2.5;ctx.setLineDash([]);
        if(s.circ){
          ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x+10,y,5,0,Math.PI*2);ctx.fill();
        }else{
          ctx.beginPath();ctx.moveTo(s.x,y);ctx.lineTo(s.x+24,y);ctx.stroke();
        }
        ctx.fillStyle='#374151';ctx.font='bold 13px Calibri,Arial';ctx.textAlign='left';
        ctx.fillText(s.label,s.x+(s.circ?20:28),y+5);
      });
    }
    _drawLegRow(legRow1,legY);
    _drawLegRow(legRow2,legY+26);
    return cv.toDataURL('image/png').split(',')[1];
  }
  var _chartPng=_makeChartPng();
  var _chartImgId=wb.addImage({base64:_chartPng,extension:'png'});
  ws1.addImage(_chartImgId,{tl:{col:1,row:30},br:{col:9,row:73},editAs:'oneCell'});

  // ─── Tableau Missions 2026 (col B-D, ligne 51) ─────────────────────
  ws1.getRow(76).height=26;
  ws1.mergeCells('B76:D76');
  _S('B76',{value:'Missions 2026',fill:_DARK,font:{bold:true,size:16,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});

  var _miss2026=[
    {lib:'Missions Ponctuelles réalisées',nb:_nbMR},
    {lib:'Missions Projets et Programmes réalisées',nb:_nbPR},
    {lib:'Missions en cours',nb:_nbCours},
    {lib:'Missions formellement demandées',nb:_nbF5_20},
    {lib:'Missions Proposées à des candidats',nb:_nbF5_30},
    {lib:'Intervenants désignés',nb:_nbF5_50},
    {lib:'Candidatures transmises aux demandeurs',nb:_nbF5_40}
  ];
  var _m2Row=78;
  _miss2026.forEach(function(it,i){
    var r=_m2Row+i;
    ws1.mergeCells('B'+r+':C'+r);
    _S('B'+r,{value:it.lib,fill:_LIGHT,font:{size:14,bold:true,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});
    _S('D'+r,{value:it.nb,fill:_LIGHT,font:{size:14,bold:true,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'center'}});
  });

  // ─── Tableau Prospection (col F-J, même ligne 51) ──────────────────
  var pRow=76;
  ws1.getRow(pRow).height=26;
  ws1.mergeCells('F'+pRow+':J'+pRow);
  _S('F'+pRow,{value:'Missions de Prospection depuis le 1er janvier 2026',fill:_DARK,font:{bold:true,size:13,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});

  if(_prospection.length===0){
    pRow+=2;
    ws1.mergeCells('F'+pRow+':J'+pRow);
    _S('F'+pRow,{value:'Aucune mission de prospection trouvée sur la période',font:{italic:true,size:11,color:{argb:'FF6B7280'}},align:{vertical:'middle',horizontal:'center'}});
  }else{
    pRow+=2;
    ws1.getRow(pRow).height=20;
    [['F','Zone'],['G','Pays'],['H','Référence'],['I','État'],['J','Date de création']].forEach(function(p){
      _S(p[0]+pRow,{value:p[1],fill:_BLUE,font:{bold:true,size:11,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1},border:{bottom:{style:'medium',color:{argb:_DARK}}}});
    });

    var lastZ='',lastP='';
    _prospection.forEach(function(m){
      pRow++;
      var zAff=(m._zg===lastZ)?'':m._zg;lastZ=m._zg;
      var pLib=m.sLibellePays||m.sPays||'';
      var pAff=(pLib===lastP)?'':pLib;lastP=pLib;
      if(zAff)pAff=pLib;
      var dObj=_parseMissionDate(m);
      _S('F'+pRow,{value:zAff,font:{bold:true,size:11,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});
      _S('G'+pRow,{value:pAff,font:{size:11},align:{vertical:'middle',horizontal:'left',indent:1}});
      _S('H'+pRow,{value:m._displayCode||m.sCodeComplet||m.sCode||'',font:{size:11},align:{vertical:'middle',horizontal:'left',indent:1}});
      _S('I'+pRow,{value:m.sAvancementFormate||m.sAvancement||'',font:{size:11},align:{vertical:'middle',horizontal:'left',indent:1}});
      if(dObj)_S('J'+pRow,{value:dObj,numFmt:'dd/mm/yyyy',font:{size:11},align:{vertical:'middle',horizontal:'center'}});
    });

    pRow++;
    _S('F'+pRow,{value:'',fill:_DARK});
    _S('G'+pRow,{value:'',fill:_DARK});
    _S('H'+pRow,{value:'TOTAL Prospection',fill:_DARK,font:{bold:true,size:11,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right',indent:1}});
    _S('I'+pRow,{value:'',fill:_DARK});
    _S('J'+pRow,{value:_prospection.length+' mission'+(_prospection.length>1?'s':''),fill:_DARK,font:{bold:true,size:11,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});
  }

  // ─── Tableau Historique de la DI (2023 → 2026) ─────────────────────
  // Largeur B:F (identique à la table Prospection). Police 14, hauteurs généreuses.
  // 2023 FPA missions : somme GAÏA (mai 2026). FPA projets 2023 : non renseigné dans GAÏA.
  // 2026 = valeurs LIVE (réalisées) depuis _nbMR/_nbPR/_fpaMR/_fpaPR/_valA.
  var _HISTO={
    '2023':{nbPonct:80, fpaPonct:52815, nbProj:11, fpaProj:5880,  mae:113000},   // FPA projets : 6 BEN × 980 € (convention BÉNIN)
    '2024':{nbPonct:82, fpaPonct:72567, nbProj:26, fpaProj:19402, mae:120000},
    '2025':{nbPonct:103,fpaPonct:88689, nbProj:54, fpaProj:44008, mae:71250},
    '2026':{nbPonct:_nbMR, fpaPonct:Math.round(_fpaMR), nbProj:_nbPR, fpaProj:Math.round(_fpaPR), mae:_valA}
  };
  var _HYEARS=['2023','2024','2025','2026'];
  var _HCOL={'2023':'C','2024':'D','2025':'E','2026':'F'};
  pRow+=4;

  function _SH(addr,o){var c=ws1.getCell(addr);if('value' in o)c.value=o.value;if(o.fill)c.fill={type:'pattern',pattern:'solid',fgColor:{argb:o.fill}};if(o.font)c.font=o.font;if(o.align)c.alignment=o.align;if(o.numFmt)c.numFmt=o.numFmt;if(o.border)c.border=o.border;return c;}

  // Titre principal — hauteur généreuse
  ws1.getRow(pRow).height=40;
  ws1.mergeCells('B'+pRow+':F'+pRow);
  _SH('B'+pRow,{value:'Historique de la DI',fill:_DARK,font:{bold:true,size:18,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});

  // Sous-titre
  pRow++;
  ws1.getRow(pRow).height=28;
  ws1.mergeCells('B'+pRow+':F'+pRow);
  _SH('B'+pRow,{value:'Évolution des missions et FPA — 2023 / 2026',font:{italic:true,size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'center'}});

  // En-têtes années
  pRow++;
  ws1.getRow(pRow).height=30;
  _SH('B'+pRow,{value:'',fill:_LIGHT});
  _HYEARS.forEach(function(y){
    _SH(_HCOL[y]+pRow,{value:y,fill:_BLUE,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});
  });

  // Sous-titre "Nombre de missions"
  pRow++;
  ws1.getRow(pRow).height=28;
  ws1.mergeCells('B'+pRow+':F'+pRow);
  _SH('B'+pRow,{value:'Nombre de missions',fill:_LIGHT,font:{bold:true,italic:true,size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});

  // Lignes Nb missions
  [['Missions ponctuelles','nbPonct'],['Missions Projet','nbProj']].forEach(function(pair){
    pRow++;
    ws1.getRow(pRow).height=26;
    _SH('B'+pRow,{value:pair[0],font:{size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});
    _HYEARS.forEach(function(y){
      _SH(_HCOL[y]+pRow,{value:_HISTO[y][pair[1]],font:{size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'center'}});
    });
  });
  // TOTAL Nb missions
  pRow++;
  ws1.getRow(pRow).height=28;
  _SH('B'+pRow,{value:'TOTAL',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1}});
  _HYEARS.forEach(function(y){
    var v=(_HISTO[y].nbPonct||0)+(_HISTO[y].nbProj||0);
    _SH(_HCOL[y]+pRow,{value:v,fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});
  });

  // Sous-titre "Σ FPA (€)"
  pRow++;
  ws1.getRow(pRow).height=28;
  ws1.mergeCells('B'+pRow+':F'+pRow);
  _SH('B'+pRow,{value:'Σ FPA (€)',fill:_LIGHT,font:{bold:true,italic:true,size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});

  // Lignes Σ FPA
  [['Missions ponctuelles','fpaPonct'],['Missions Projet','fpaProj']].forEach(function(pair){
    pRow++;
    ws1.getRow(pRow).height=26;
    _SH('B'+pRow,{value:pair[0],font:{size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'left',indent:1}});
    _HYEARS.forEach(function(y){
      var v=_HISTO[y][pair[1]];
      if(v===null||v===undefined){
        _SH(_HCOL[y]+pRow,{value:'n/d',font:{italic:true,size:14,color:{argb:'FF6B7280'}},align:{vertical:'middle',horizontal:'center'}});
      }else{
        _SH(_HCOL[y]+pRow,{value:v,numFmt:'#,##0\\ "€"',font:{size:14,color:{argb:_DARK}},align:{vertical:'middle',horizontal:'right'}});
      }
    });
  });

  // TOTAL PRODUITS (somme des FPA ponct + projet)
  pRow++;
  ws1.getRow(pRow).height=28;
  _SH('B'+pRow,{value:'TOTAL PRODUITS',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1}});
  _HYEARS.forEach(function(y){
    var p=_HISTO[y].fpaPonct, j=_HISTO[y].fpaProj;
    // Si une des deux valeurs est inconnue, on additionne ce qu'on a (l'autre comptée 0)
    var total = (p||0)+(j||0);
    if((p===null||p===undefined)&&(j===null||j===undefined)){
      _SH(_HCOL[y]+pRow,{value:'n/d',fill:_MED,font:{bold:true,italic:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'center'}});
    }else{
      _SH(_HCOL[y]+pRow,{value:total,numFmt:'#,##0\\ "€"',fill:_MED,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right'}});
    }
  });

  // Ligne SUBVENTION MAE — noir sur blanc (même hauteur que les autres)
  pRow++;
  ws1.getRow(pRow).height=26;
  _SH('B'+pRow,{value:'SUBVENTION MAE',fill:'FFFFFFFF',font:{bold:true,size:14,color:{argb:'FF000000'}},align:{vertical:'middle',horizontal:'left',indent:1}});
  _HYEARS.forEach(function(y){
    var v=_HISTO[y].mae;
    _SH(_HCOL[y]+pRow,{value:v,numFmt:'#,##0\\ "€"',fill:'FFFFFFFF',font:{size:14,color:{argb:'FF000000'}},align:{vertical:'middle',horizontal:'right'}});
  });

  // Ligne TOTAL PRODUITS DI — fond bleu marine, texte blanc
  pRow++;
  ws1.getRow(pRow).height=30;
  _SH('B'+pRow,{value:'TOTAL PRODUITS DI',fill:_DARK,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'left',indent:1}});
  _HYEARS.forEach(function(y){
    var p=_HISTO[y].fpaPonct, j=_HISTO[y].fpaProj, m=_HISTO[y].mae||0;
    var totProd = (p||0)+(j||0);
    var grandTotal = totProd + m;
    _SH(_HCOL[y]+pRow,{value:grandTotal,numFmt:'#,##0\\ "€"',fill:_DARK,font:{bold:true,size:14,color:{argb:_WHITE}},align:{vertical:'middle',horizontal:'right'}});
  });

    var _prorata=Math.round(48750/365*Math.max(0,Math.floor((new Date()-new Date(2026,0,1))/86400000)));
    var _c11=ws1.getCell('D11');_c11.value=_prorata;_c11.numFmt='#,##0\ "€"';_c11.font={size:14,bold:true};_c11.alignment={vertical:'middle',horizontal:'right'};
    ws1.getCell('D15').value={formula:'SUM(D11:D13)',result:_prorata+Math.round(_fpaMR)+Math.round(_fpaPR)};
    ws1.getCell('F15').value={formula:'SUM(F11:F13)',result:_bConMAE+(parseFloat(_bConMis)||0)+(parseFloat(_bConPP)||0)};
    var _cv=function(a){var v=ws1.getCell(a).value;return (v&&typeof v==='object')?(parseFloat(v.result)||0):(parseFloat(v)||0);};
    ws1.getCell('D28').value={formula:'D15-D24',result:_cv('D15')-_cv('D24')};
    ws1.views=[{state:'normal',showGridLines:false}];

  function _buildSheet(ws,titre,missions){
    ws.columns=[
      {width:22},{width:22},{width:32},{width:38},
      {width:22},{width:14},{width:14}
    ];
    // ── Ligne 1 : titre ─────────────────────────────────────────────
    var r1=ws.addRow([titre]);
    ws.mergeCells('A1:G1');
    r1.height=32;
    r1.getCell(1).font={bold:true,size:16,color:{argb:'FFFFFFFF'}};
    r1.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    r1.getCell(1).alignment={vertical:'middle',horizontal:'center'};

    // ── Ligne 2 : extraction + nombre total ─────────────────────────
    var r2=ws.addRow(['Extraction du '+dateExtractFR,'','','Nombre total de missions : '+missions.length]);
    ws.mergeCells('A2:C2');
    ws.mergeCells('D2:G2');
    r2.height=24;
    r2.getCell(1).font={bold:true,size:14,color:{argb:'FF1E2761'}};
    r2.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
    r2.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};
    r2.getCell(4).font={bold:true,size:14,color:{argb:'FF1E2761'}};
    r2.getCell(4).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
    r2.getCell(4).alignment={vertical:'middle',horizontal:'right',indent:1};

    ws.addRow([]);
    // ── Ligne 4 : entêtes ───────────────────────────────────────────
    var rh=ws.addRow(['Pays','Référence','Demandeur','Activité de la mission','Avancement','Date de création','FPA (€)']);
    rh.height=20;
    rh.eachCell(function(c){
      c.font={bold:true,size:11,color:{argb:'FFFFFFFF'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      c.alignment={vertical:'middle',horizontal:'center'};
      c.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });

    // ── Groupement par ZG ───────────────────────────────────────────
    var byZG={};
    missions.forEach(function(m){
      var z=_getZG(m)||'(Non classé)';
      if(!byZG[z])byZG[z]=[];
      byZG[z].push(m);
    });
    var zKeys=Object.keys(byZG).sort(function(a,b){
      var oa=_zgOrder(a),ob=_zgOrder(b);
      if(oa!==ob)return oa-ob;
      return a.localeCompare(b);
    });
    zKeys.forEach(function(z){
      byZG[z].sort(function(a,b){
        var pa=(a.sLibellePays||a.sPays||'').localeCompare(b.sLibellePays||b.sPays||'','fr');
        if(pa!==0)return pa;
        var da=_parseMissionDate(a),db=_parseMissionDate(b);
        var ta=da?da.getTime():0,tb=db?db.getTime():0;
        if(ta!==tb)return ta-tb;
        return (a.sCodeComplet||a.sCode||'').localeCompare(b.sCodeComplet||b.sCode||'');
      });
    });

    // ── Cumuls généraux ─────────────────────────────────────────────
    var gTotalFPA=0,gNbCours=0,gFpaCours=0,gNbReal=0,gFpaReal=0;

    zKeys.forEach(function(z){
      var missionsZ=byZG[z];

      // ── Ligne d'en-tête de zone ────────────────────────────────────
      var rZH=ws.addRow(['Zone '+z+' — '+missionsZ.length+' mission'+(missionsZ.length>1?'s':'')]);
      ws.mergeCells('A'+rZH.number+':G'+rZH.number);
      rZH.height=22;
      rZH.getCell(1).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
      rZH.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF2E3D78'}};
      rZH.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

      // ── Missions de la zone ───────────────────────────────────────
      var zTotalFPA=0,zNbCours=0,zFpaCours=0,zNbReal=0,zFpaReal=0;
      var lastPays='';
      missionsZ.forEach(function(m){
        var dObj=_parseMissionDate(m);
        var _fpaOvCodes={'COL0025A':510};
        var _fpaOvKey=(m.sCodeComplet||m.sCode||'').split(/\s+/)[0].toUpperCase();
        var fpa=(_fpaOvCodes[_fpaOvKey]!==undefined)?_fpaOvCodes[_fpaOvKey]:(fpas[m.nIdMission]||0);
        if(_fpaOvCodes[_fpaOvKey]!==undefined)m._fpaOverride=true;
        zTotalFPA+=fpa;
        var paysLib=m.sLibellePays||m.sPays||'';
        var paysAff=(paysLib===lastPays)?'':paysLib;
        lastPays=paysLib;

        var enCours=String(m.sAvancement)==='70';
        if(enCours){zNbCours++;zFpaCours+=fpa;}
        else{zNbReal++;zFpaReal+=fpa;}

        var row=ws.addRow([
          paysAff,
          m.sCodeComplet||m.sCode||'',
          m.sBeneficiaire||'',
          m.sLibelleActivite||'',
          m.sAvancementFormate||'',
          dObj,
          parseFloat(fpa.toFixed(0))
        ]);
        // Date : numFmt appliqué systématiquement pour fiabiliser le tri chronologique
        var dcell=row.getCell(6);
        dcell.numFmt='dd/mm/yyyy';
        dcell.alignment={horizontal:'center'};

        if(enCours){
          row.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});
        }

        var fpacell=row.getCell(7);
        fpacell.numFmt='#,##0\\ "€"';
        fpacell.font={bold:true,color:{argb:fpa>0?'FF1E7A45':'FFDC2626'}};
        if(m._fpaOverride){
          fpacell.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFFFFF'}};
          fpacell.font={bold:true,color:{argb:'FF1A3A5C'}};
        }
      });

      // ── Sous-totaux de zone : réalisées / en cours / TOTAL ────────
      var rZR=ws.addRow(['','','','','Zone '+z+' — réalisées',zNbReal+' mission'+(zNbReal>1?'s':''),parseFloat(zFpaReal.toFixed(0))]);
      rZR.getCell(5).font={italic:true,bold:true,size:11,color:{argb:'FF1E2761'}};
      rZR.getCell(5).alignment={horizontal:'right'};
      rZR.getCell(6).font={bold:true,size:11,color:{argb:'FF1E2761'}};
      rZR.getCell(6).alignment={horizontal:'center'};
      rZR.getCell(7).numFmt='#,##0\\ "€"';
      rZR.getCell(7).font={bold:true,size:11,color:{argb:'FF1E7A45'}};

      var rZC=ws.addRow(['','','','','Zone '+z+' — en cours',zNbCours+' mission'+(zNbCours>1?'s':''),parseFloat(zFpaCours.toFixed(0))]);
      rZC.getCell(5).font={italic:true,bold:true,size:11,color:{argb:'FF92400E'}};
      rZC.getCell(5).alignment={horizontal:'right'};
      rZC.getCell(6).font={bold:true,size:11,color:{argb:'FF92400E'}};
      rZC.getCell(6).alignment={horizontal:'center'};
      rZC.getCell(7).numFmt='#,##0\\ "€"';
      rZC.getCell(7).font={bold:true,size:11,color:{argb:'FF92400E'}};
      rZC.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});

      var rZT=ws.addRow(['','','','','Zone '+z+' — TOTAL',missionsZ.length+' mission'+(missionsZ.length>1?'s':''),parseFloat(zTotalFPA.toFixed(0))]);
      rZT.eachCell(function(c){
        c.font={bold:true,size:11,color:{argb:'FF1E2761'}};
        c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFDE68A'}};
        c.border={top:{style:'thin',color:{argb:'FF1E2761'}}};
      });
      rZT.getCell(7).numFmt='#,##0\\ "€"';
      rZT.getCell(7).font={bold:true,size:12,color:{argb:'FF92400E'}};

      ws.addRow([]); // séparateur entre zones

      gTotalFPA+=zTotalFPA;gNbCours+=zNbCours;gFpaCours+=zFpaCours;gNbReal+=zNbReal;gFpaReal+=zFpaReal;
    });

    // ── Totaux généraux en bas de tableau ──────────────────────────
    var rGR=ws.addRow(['','','','','TOTAL réalisées',gNbReal+' mission'+(gNbReal>1?'s':''),parseFloat(gFpaReal.toFixed(0))]);
    rGR.eachCell(function(c){c.font={bold:true,size:12,color:{argb:'FFFFFFFF'}};c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}};c.border={top:{style:'medium',color:{argb:'FFE8B84B'}},bottom:{style:'medium',color:{argb:'FFE8B84B'}}};});
    rGR.getCell(5).alignment={horizontal:'right'};
    rGR.getCell(6).alignment={horizontal:'center'};
    rGR.getCell(7).numFmt='#,##0\\ "€"';

    var rGC=ws.addRow(['','','','','TOTAL en cours',gNbCours+' mission'+(gNbCours>1?'s':''),parseFloat(gFpaCours.toFixed(0))]);
    rGC.eachCell(function(c){c.font={bold:true,size:11,color:{argb:'FF92400E'}};c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});
    rGC.getCell(5).alignment={horizontal:'right'};
    rGC.getCell(6).alignment={horizontal:'center'};
    rGC.getCell(7).numFmt='#,##0\\ "€"';

    var rGT=ws.addRow(['','','','','TOTAL GÉNÉRAL',missions.length+' mission'+(missions.length>1?'s':''),parseFloat(gTotalFPA.toFixed(0))]);
    rGT.eachCell(function(c){
      c.font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      c.border={top:{style:'medium',color:{argb:'FFE8B84B'}},bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });
    rGT.getCell(7).numFmt='#,##0\\ "€"';

    // Légende si certaines FPA ont été surchargées (bleu foncé sur fond blanc, taille 14)
    if(missions.some(function(m){return m._fpaOverride;})){
      ws.addRow([]);
      var rLeg=ws.addRow(['','','','','','','']);
      var legCell=rLeg.getCell(1);
      ws.mergeCells('A'+rLeg.number+':G'+rLeg.number);
      legCell.value='FPA en bleu foncé : calculés en fonction de la valeur du programme.';
      legCell.font={bold:true,size:14,color:{argb:'FF1A3A5C'}};
      legCell.alignment={vertical:'middle',horizontal:'left',indent:1};
      rLeg.height=22;
    }

    ws.views=[{state:'frozen',xSplit:0,ySplit:4,activeCell:'A5'}];
    return gTotalFPA;
  }

  // ── Feuillet 4 : synthèse — colonnes Missions / Projets / Total ──
  function _buildSheet4(ws,titre,missionsArr,projetsArr){
    // A=Pays | B=Réf M | C=FPA M | D=Réf P | E=FPA P | F=Total FPA
    ws.columns=[{width:26},{width:22},{width:14},{width:22},{width:14},{width:16}];

    var r1=ws.addRow([titre]);
    ws.mergeCells('A1:F1');
    r1.height=32;
    r1.getCell(1).font={bold:true,size:16,color:{argb:'FFFFFFFF'}};
    r1.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    r1.getCell(1).alignment={vertical:'middle',horizontal:'center'};

    var r2=ws.addRow(['Extraction du '+dateExtractFR,'','','Nombre total : '+(missionsArr.length+projetsArr.length)]);
    ws.mergeCells('A2:C2');ws.mergeCells('D2:F2');
    r2.height=24;
    r2.getCell(1).font={bold:true,size:14,color:{argb:'FF1E2761'}};
    r2.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
    r2.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};
    r2.getCell(4).font={bold:true,size:14,color:{argb:'FF1E2761'}};
    r2.getCell(4).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
    r2.getCell(4).alignment={vertical:'middle',horizontal:'right',indent:1};

    ws.addRow([]);

    // Ligne 4 : en-têtes groupés (Missions / Projets et Programmes / Total)
    var rh1=ws.addRow(['Pays','Missions','','Projets et Programmes','','Total']);
    ws.mergeCells('A4:A5');
    ws.mergeCells('B4:C4');
    ws.mergeCells('D4:E4');
    ws.mergeCells('F4:F5');
    rh1.height=22;
    rh1.getCell(1).value='Pays';
    rh1.getCell(2).value='Missions';
    rh1.getCell(4).value='Projets et Programmes';
    rh1.getCell(6).value='Total';
    [1,2,4,6].forEach(function(i){
      var c=rh1.getCell(i);
      c.font={bold:true,size:11,color:{argb:'FFFFFFFF'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      c.alignment={vertical:'middle',horizontal:'center'};
      c.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });

    // Ligne 5 : sous-entêtes (Référence / FPA par section)
    var rh2=ws.addRow(['','Référence','FPA (€)','Référence','FPA (€)','']);
    rh2.height=20;
    [2,3,4,5].forEach(function(i){
      var c=rh2.getCell(i);
      c.font={bold:true,size:11,color:{argb:'FFFFFFFF'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      c.alignment={vertical:'middle',horizontal:'center'};
      c.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });
    [1,6].forEach(function(i){
      var c=rh2.getCell(i);
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
      c.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });

    // Marquer type
    missionsArr.forEach(function(m){m._type='M';});
    projetsArr.forEach(function(m){m._type='P';});
    var allItems=missionsArr.concat(projetsArr);

    // Regroupement ZG / Pays (identique aux feuillets 2/3)
    var byZG={};
    allItems.forEach(function(m){var z=_getZG(m)||'(Non classé)';if(!byZG[z])byZG[z]=[];byZG[z].push(m);});
    var zKeys=Object.keys(byZG).sort(function(a,b){var oa=_zgOrder(a),ob=_zgOrder(b);if(oa!==ob)return oa-ob;return a.localeCompare(b);});

    // Tri intra-zone : en cours d'abord, puis réalisés ; pays asc, Missions avant Projets, ref
    zKeys.forEach(function(z){
      byZG[z].sort(function(a,b){
        var aCours=String(a.sAvancement)==='70'?0:1;
        var bCours=String(b.sAvancement)==='70'?0:1;
        if(aCours!==bCours)return aCours-bCours;
        var pa=(a.sLibellePays||a.sPays||'').localeCompare(b.sLibellePays||b.sPays||'','fr');
        if(pa!==0)return pa;
        if(a._type!==b._type)return a._type==='M'?-1:1;
        return (a.sCodeComplet||a.sCode||'').localeCompare(b.sCodeComplet||b.sCode||'');
      });
    });

    var gFpaM=0,gFpaP=0,gNbM=0,gNbP=0;
    var gFpaCours=0,gNbCours=0,gFpaReal=0,gNbReal=0;
    var gFpaMReal=0,gFpaPReal=0,gFpaMCours=0,gFpaPCours=0,gNbMReal=0,gNbPReal=0;

    zKeys.forEach(function(z){
      var arr=byZG[z];
      var rZH=ws.addRow(['Zone '+z+' — '+arr.length+' ligne'+(arr.length>1?'s':'')]);
      ws.mergeCells('A'+rZH.number+':F'+rZH.number);
      rZH.height=22;
      rZH.getCell(1).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
      rZH.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF2E3D78'}};
      rZH.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

      var zFpaM=0,zFpaP=0,zNbM=0,zNbP=0;
      var zFpaCours=0,zNbCours=0,zFpaReal=0,zNbReal=0;
      var zFpaMReal=0,zFpaPReal=0,zFpaMCours=0,zFpaPCours=0,zNbMReal=0,zNbPReal=0;
      var lastPays='';
      arr.forEach(function(m){
        var _fpaOvCodes={'COL0025A':510};
        var _fpaOvKey=(m.sCodeComplet||m.sCode||'').split(/\s+/)[0].toUpperCase();
        var fpa=(_fpaOvCodes[_fpaOvKey]!==undefined)?_fpaOvCodes[_fpaOvKey]:(fpas[m.nIdMission]||0);
        if(_fpaOvCodes[_fpaOvKey]!==undefined)m._fpaOverride=true;
        var paysLib=m.sLibellePays||m.sPays||'';
        var paysAff=(paysLib===lastPays)?'':paysLib;
        lastPays=paysLib;
        var ref=m.sCodeComplet||m.sCode||'';
        var enCours=String(m.sAvancement)==='70';
        var row;
        if(m._type==='M'){
          row=ws.addRow([paysAff,ref,parseFloat(fpa.toFixed(0)),'','',parseFloat(fpa.toFixed(0))]);
          zFpaM+=fpa;zNbM++;
          if(enCours){zFpaMCours+=fpa;}else{zFpaMReal+=fpa;zNbMReal++;}
        }else{
          row=ws.addRow([paysAff,'','',ref,parseFloat(fpa.toFixed(0)),parseFloat(fpa.toFixed(0))]);
          zFpaP+=fpa;zNbP++;
          if(enCours){zFpaPCours+=fpa;}else{zFpaPReal+=fpa;zNbPReal++;}
        }
        if(enCours){zFpaCours+=fpa;zNbCours++;row.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});}
        else{zFpaReal+=fpa;zNbReal++;}
        [3,5,6].forEach(function(i){
          var c=row.getCell(i);
          c.numFmt='#,##0\ "€"';
          if(c.value){
            if(m._fpaOverride){
              c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFFFFF'}};
              c.font={bold:true,color:{argb:'FF1A3A5C'}};
            }else{
              c.font={bold:(i===6),color:{argb:fpa>0?'FF1E7A45':'FFDC2626'}};
            }
          }
        });
      });

      // Sous-totaux de zone : réalisées / en cours / TOTAL (identique aux feuillets 2 et 3)
      var zTot=zFpaM+zFpaP;
      var rZR=ws.addRow(['','Zone '+z+' — réalisées',parseFloat(zFpaMReal.toFixed(0)),'',parseFloat(zFpaPReal.toFixed(0)),parseFloat(zFpaReal.toFixed(0))]);
      rZR.getCell(2).font={italic:true,bold:true,size:11,color:{argb:'FF1E2761'}};
      rZR.getCell(2).alignment={horizontal:'right'};
      [3,5,6].forEach(function(i){rZR.getCell(i).numFmt='#,##0\ "€"';rZR.getCell(i).font={bold:true,size:11,color:{argb:'FF1E7A45'}};});

      var rZC=ws.addRow(['','Zone '+z+' — en cours',parseFloat(zFpaMCours.toFixed(0)),'',parseFloat(zFpaPCours.toFixed(0)),parseFloat(zFpaCours.toFixed(0))]);
      rZC.getCell(2).font={italic:true,bold:true,size:11,color:{argb:'FF92400E'}};
      rZC.getCell(2).alignment={horizontal:'right'};
      [3,5,6].forEach(function(i){rZC.getCell(i).numFmt='#,##0\ "€"';rZC.getCell(i).font={bold:true,size:11,color:{argb:'FF92400E'}};});
      rZC.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});

      var rZT=ws.addRow(['','Zone '+z+' — Missions ('+zNbM+')',parseFloat(zFpaM.toFixed(0)),'Zone '+z+' — Projets ('+zNbP+')',parseFloat(zFpaP.toFixed(0)),parseFloat(zTot.toFixed(0))]);
      rZT.getCell(2).font={italic:true,bold:true,size:11,color:{argb:'FF1E2761'}};
      rZT.getCell(2).alignment={horizontal:'right'};
      rZT.getCell(4).font={italic:true,bold:true,size:11,color:{argb:'FF1E2761'}};
      rZT.getCell(4).alignment={horizontal:'right'};
      [2,3,4,5,6].forEach(function(i){
        rZT.getCell(i).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFDE68A'}};
        rZT.getCell(i).border={top:{style:'thin',color:{argb:'FF1E2761'}}};
      });
      [3,5].forEach(function(i){rZT.getCell(i).numFmt='#,##0\ "€"';rZT.getCell(i).font={bold:true,size:11,color:{argb:'FF1E7A45'}};});
      rZT.getCell(6).numFmt='#,##0\ "€"';
      rZT.getCell(6).font={bold:true,size:12,color:{argb:'FF92400E'}};

      ws.addRow([]);
      gFpaM+=zFpaM;gFpaP+=zFpaP;gNbM+=zNbM;gNbP+=zNbP;
      gFpaCours+=zFpaCours;gNbCours+=zNbCours;gFpaReal+=zFpaReal;gNbReal+=zNbReal;
      gFpaMReal+=zFpaMReal;gFpaPReal+=zFpaPReal;gFpaMCours+=zFpaMCours;gFpaPCours+=zFpaPCours;gNbMReal+=zNbMReal;gNbPReal+=zNbPReal;
    });

    // Totaux généraux
    var rGR=ws.addRow(['','TOTAL réalisées ('+gNbMReal+')',parseFloat(gFpaMReal.toFixed(0)),'TOTAL réalisés ('+gNbPReal+')',parseFloat(gFpaPReal.toFixed(0)),parseFloat(gFpaReal.toFixed(0))]);
    rGR.getCell(2).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};rGR.getCell(2).alignment={horizontal:'right'};rGR.getCell(4).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};rGR.getCell(4).alignment={horizontal:'right'};
    [3,5,6].forEach(function(idx){rGR.getCell(idx).numFmt='#,##0\ "€"';rGR.getCell(idx).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};});
    [2,3,4,5,6].forEach(function(idx){rGR.getCell(idx).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}};rGR.getCell(idx).border={top:{style:'medium',color:{argb:'FFE8B84B'}},bottom:{style:'medium',color:{argb:'FFE8B84B'}}};});

    var rGC=ws.addRow(['','TOTAL en cours ('+gNbCours+')',parseFloat(gFpaMCours.toFixed(0)),'',parseFloat(gFpaPCours.toFixed(0)),parseFloat(gFpaCours.toFixed(0))]);
    rGC.getCell(2).font={bold:true,size:11,color:{argb:'FF92400E'}};rGC.getCell(2).alignment={horizontal:'right'};
    [3,5,6].forEach(function(i){rGC.getCell(i).numFmt='#,##0\ "€"';rGC.getCell(i).font={bold:true,size:11,color:{argb:'FF92400E'}};});
    [2,3,4,5,6].forEach(function(i){rGC.getCell(i).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFE5B4'}};});

    var rGM=ws.addRow(['','TOTAL GÉNÉRAL — Missions ('+gNbM+')',parseFloat(gFpaM.toFixed(0)),'TOTAL Projets ('+gNbP+')',parseFloat(gFpaP.toFixed(0)),parseFloat((gFpaM+gFpaP).toFixed(0))]);
    rGM.getCell(2).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};rGM.getCell(2).alignment={horizontal:'right'};
    rGM.getCell(4).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};rGM.getCell(4).alignment={horizontal:'right'};
    [3,5,6].forEach(function(i){rGM.getCell(i).numFmt='#,##0\ "€"';rGM.getCell(i).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};});
    [2,3,4,5,6].forEach(function(i){rGM.getCell(i).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};rGM.getCell(i).border={top:{style:'medium',color:{argb:'FFE8B84B'}},bottom:{style:'medium',color:{argb:'FFE8B84B'}}};});

    ws.views=[{state:'frozen',xSplit:0,ySplit:5,activeCell:'A6'}];
    return gFpaM+gFpaP;
  }

  // ── Feuillet 5 : 4 tableaux d'instruction (sans FPA, violet clair) ──
  function _buildSheet5(ws,titre,missions){
    ws.columns=[{width:24},{width:22},{width:30},{width:38},{width:18},{width:14}];
    var r1=ws.addRow([titre]);
    ws.mergeCells('A1:F1');
    r1.height=32;
    r1.getCell(1).font={bold:true,size:16,color:{argb:'FFFFFFFF'}};
    r1.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    r1.getCell(1).alignment={vertical:'middle',horizontal:'center'};
    var r2=ws.addRow(['Extraction du '+dateExtractFR,'','','Total général : '+missions.length+' mission'+(missions.length>1?'s':'')]);
    ws.mergeCells('A2:C2');ws.mergeCells('D2:F2');
    r2.height=24;
    r2.getCell(1).font={bold:true,size:14,color:{argb:'FF1E2761'}};r2.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};r2.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};
    r2.getCell(4).font={bold:true,size:14,color:{argb:'FF1E2761'}};r2.getCell(4).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};r2.getCell(4).alignment={vertical:'middle',horizontal:'right',indent:1};
    var rL=ws.addRow(['Légende : lignes surlignées en violet clair = date de création remontant à plus de 3 mois.']);
    ws.mergeCells('A'+rL.number+':F'+rL.number);
    rL.height=22;
    rL.getCell(1).font={bold:true,size:14,color:{argb:'FF6B21A8'}};
    rL.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFF0E6FA'}};
    rL.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

    var threshold=new Date();threshold.setMonth(threshold.getMonth()-3);
    function _isOld(dcStr){
      var mm=dcStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if(!mm)return false;
      var d=new Date(parseInt(mm[3]),parseInt(mm[2])-1,parseInt(mm[1]));
      return d<threshold;
    }
    function _parseDateMs(m){
      var d=m.sDateMajIni||m.sDateMajIniFormate||'';
      if(!d)return 0;
      if(/^\d{4}-\d{2}-\d{2}/.test(d))return new Date(d.slice(0,10)).getTime();
      var mm=d.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
      if(mm)return new Date(parseInt(mm[3]),parseInt(mm[2])-1,parseInt(mm[1])).getTime();
      return 0;
    }

    var TABLES=[
      {id:'20',lib:'Missions formellement demandées'},
      {id:'30',lib:'Missions proposées à des candidats'},
      {id:'50',lib:'Intervenants désignés'},
      {id:'40',lib:'Candidatures transmises aux demandeurs'}
    ];

    var grandNb=0,grandFpa=0;

    TABLES.forEach(function(T){
      var arr=missions.filter(function(m){return String(m.sAvancement)===T.id;});
      arr.sort(function(a,b){return _parseDateMs(a)-_parseDateMs(b);});

      var rT=ws.addRow([T.lib+' — '+arr.length+' mission'+(arr.length>1?'s':'')]);
      ws.mergeCells('A'+rT.number+':F'+rT.number);
      rT.height=24;
      rT.getCell(1).font={bold:true,size:13,color:{argb:'FFFFFFFF'}};
      rT.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF2E3D78'}};
      rT.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

      var rh=ws.addRow(['Pays','Référence','Demandeur','Activité / Domaine','Date de création','FPA (€)']);
      rh.height=20;
      rh.eachCell(function(c){
        c.font={bold:true,size:11,color:{argb:'FFFFFFFF'}};
        c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
        c.alignment={vertical:'middle',horizontal:'left'};
        c.border={bottom:{style:'thin',color:{argb:'FFE8B84B'}}};
      });

      var nb=0,zFpa=0;
      arr.forEach(function(m){
        var dObj=_parseMissionDate(m);
        nb++;
        var _fpaOvCodes={'COL0025A':510};
        var _fpaOvKey=(m.sCodeComplet||m.sCode||'').split(/\s+/)[0].toUpperCase();
        var fpa=(_fpaOvCodes[_fpaOvKey]!==undefined)?_fpaOvCodes[_fpaOvKey]:(fpas[m.nIdMission]||0);
        if(_fpaOvCodes[_fpaOvKey]!==undefined)m._fpaOverride=true;
        var row=ws.addRow([
          m.sLibellePays||m.sPays||'',
          m.sCodeComplet||m.sCode||'',
          m.sBeneficiaire||'',
          m.sLibelleActivite||'',
          dObj,
          fpa>0?parseFloat(fpa.toFixed(0)):null
        ]);
        var dcell=row.getCell(5);
        dcell.numFmt='dd/mm/yyyy';
        dcell.alignment={horizontal:'center'};
        if(dObj && dObj<threshold){
          row.eachCell(function(c){c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFF0E6FA'}};});
        }
        var fpacell=row.getCell(6);
        if(fpa>0){
          zFpa+=fpa;
          fpacell.numFmt='#,##0\ "€"';
          fpacell.font={bold:true,color:{argb:'FF1E7A45'}};
          fpacell.alignment={horizontal:'right',vertical:'middle'};
        }else{
          fpacell.value='—';
          fpacell.font={bold:true,size:16,color:{argb:'FF1E2761'}};
          fpacell.alignment={horizontal:'center',vertical:'middle'};
        }
      });

      var rTot=ws.addRow(['','','','TOTAL '+T.lib,nb+' mission'+(nb>1?'s':''),parseFloat(zFpa.toFixed(0))]);
      rTot.eachCell(function(c){c.font={bold:true,size:11,color:{argb:'FF1E2761'}};c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFDE68A'}};c.border={top:{style:'thin',color:{argb:'FF1E2761'}}};});
      rTot.getCell(4).alignment={horizontal:'right'};
      rTot.getCell(5).alignment={horizontal:'center'};
      rTot.getCell(6).numFmt='#,##0\ "€"';
      rTot.getCell(6).font={bold:true,size:11,color:{argb:'FF92400E'}};
      rTot.getCell(6).alignment={horizontal:'right'};

      ws.addRow([]);
      ws.addRow([]);
      grandNb+=nb;grandFpa+=zFpa;
    });

    var rG=ws.addRow(['','','','TOTAL GÉNÉRAL',grandNb+' mission'+(grandNb>1?'s':''),parseFloat(grandFpa.toFixed(0))]);
    rG.eachCell(function(c){c.font={bold:true,size:12,color:{argb:'FFFFFFFF'}};c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};c.border={top:{style:'medium',color:{argb:'FFE8B84B'}},bottom:{style:'medium',color:{argb:'FFE8B84B'}}};});
    rG.getCell(4).alignment={horizontal:'right'};
    rG.getCell(5).alignment={horizontal:'center'};
    rG.getCell(6).numFmt='#,##0\ "€"';
    rG.getCell(6).font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
    rG.getCell(6).alignment={horizontal:'right'};

    ws.views=[{state:'frozen',xSplit:0,ySplit:3,activeCell:'A4'}];
    return grandNb;
  }


  var ws2=wb.addWorksheet('Activités Missions DI 2026');
  var totM=_buildSheet(ws2,'Activités Missions de la Délégation Internationale 2026',missionsP);
  var ws3=wb.addWorksheet('Activités Projets DI 2026');
  var totP=_buildSheet(ws3,'Activités Projets et Programmes de la Délégation Internationale 2026',projets);
  var ws4=wb.addWorksheet('Synthèse Missions+Projets');
  var totMP=_buildSheet4(ws4,'Synthèse Missions et Projets DI 2026',missionsP,projets);
  var ws5=wb.addWorksheet('Missions en instruction');
  var totF5=_buildSheet5(ws5,'Missions en cours d\'instruction DI 2026',allF5);

  var wsGC=wb.addWorksheet('GC');
  var _gcResult='';
  try{
    _gcResult=_buildSheetGC(wsGC,missionsP.concat(projets),dateExtractFR);
  }catch(eGC){
    _gcResult='ERREUR: '+(eGC&&eGC.message?eGC.message:eGC);
  }

  // ── Fonction _buildSheet6 : Projets GAÏA (onglet Projet) ──────────────
  // Colonnes (9) : Pays | Titre | Référence | Statut | Chef | Délégation | Date | Budget | Commentaires
  // API : /admin/projet/projet/recherche.json (POST, sans filtre serveur)
  // Filtre client : sIndice='P' ET référence "XXX P NNN" (lettre P au milieu) — exclut tous les marchés
  // Filtre statut : "Validé" + "En cours de réalisation"
  async function _buildSheet6(ws,titre,dateExtFR){
    ws.columns=[
      {width:20},{width:44},{width:20},{width:20},
      {width:30},{width:28},{width:16},{width:16},{width:52}
    ];

    // ── En-tête ────────────────────────────────────────────────────────
    var r1=ws.addRow([titre]);
    ws.mergeCells('A1:I1');r1.height=32;
    r1.getCell(1).font={bold:true,size:16,color:{argb:'FFFFFFFF'}};
    r1.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    r1.getCell(1).alignment={vertical:'middle',horizontal:'center'};

    var r2=ws.addRow(['Extraction du '+dateExtFR]);
    ws.mergeCells('A2:I2');r2.height=22;
    r2.getCell(1).font={bold:true,size:13,color:{argb:'FF1E2761'}};
    r2.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
    r2.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

    var r3=ws.addRow(['Légende : Orange clair = Clos en 2026  |  Bleu clair = En cours  |  Vert clair = Validé  |  Blanc = autre statut (affiché pour debug)']);
    ws.mergeCells('A3:I3');r3.height=20;
    r3.getCell(1).font={bold:true,size:11,color:{argb:'FF1E2761'}};
    r3.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFD6E4F0'}};
    r3.getCell(1).alignment={vertical:'middle',horizontal:'left',indent:1};

    ws.addRow([]);

    var rh=ws.addRow(['Pays','Titre du projet','Référence','Statut','Chef de projet','Délégation en charge','Date de création','Budget (€)','Commentaires']);
    rh.height=22;
    rh.eachCell(function(c){
      c.font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
      c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}};
      c.alignment={vertical:'middle',horizontal:'center',wrapText:true};
      c.border={bottom:{style:'medium',color:{argb:'FFE8B84B'}}};
    });

    // ── Récupération de TOUS les projets (sans filtre statut) ──────────
    var projetsAll=[];
    try{
      // API : /admin/projet/projet/recherche.json — récupère TOUT (le filtre sIndice
      // n'est pas appliqué côté serveur sur recherche.json) ; filtrage Projet/Marché côté client.
      // Pagination robuste (corrigé le 30/07/2026 — le champ aPagination.nNbPages
      // s'est révélé peu fiable et faisait perdre des projets en silence) :
      // on pagine tant qu'une page pleine revient, sans dépendre de la métadonnée
      // de pagination renvoyée par l'API, avec un garde-fou de sécurité.
      var _PAGE_SIZE=200;
      var _fetchProjPage=async function(pg){
        var r=await fetch('/admin/projet/projet/recherche.json?nPage='+pg+'&nNbElementsParPage='+_PAGE_SIZE,
          {method:'POST',credentials:'include',
           headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','X-Requested-With':'XMLHttpRequest'},
           body:''});
        if(!r.ok)throw new Error('HTTP '+r.status);
        return r.json();
      };
      var d1=await _fetchProjPage(1);
      var _els1=d1.aElements||[];
      projetsAll=_els1.slice();
      var _lastLen=_els1.length;
      var _pg=1;
      while(_lastLen===_PAGE_SIZE && _pg<300){
        _pg++;
        var dp=await _fetchProjPage(_pg);
        var _els=dp.aElements||[];
        _lastLen=_els.length;
        if(_lastLen>0)projetsAll=projetsAll.concat(_els);
      }
      // Dédoublonnage de sécurité (au cas où la pagination chevaucherait des
      // éléments si de nouvelles entrées sont créées côté GAÏA pendant l'extraction).
      (function(){
        var _seen={};
        projetsAll=projetsAll.filter(function(p){
          var _k=p.nIdMission||p.nIdProjet||p.sRefProjet||JSON.stringify(p);
          if(_seen[_k])return false;
          _seen[_k]=true;
          return true;
        });
      })();
    }catch(err){
      var rErr=ws.addRow(['⚠️ Erreur API : '+err.message,'','','','','','','','URL : /admin/projet/projet/recherche.json (sIndice=P)']);
      ws.mergeCells('A6:H6');
      rErr.getCell(1).font={bold:true,size:12,color:{argb:'FFDC2626'}};
      rErr.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFEF2F2'}};
      return;
    }

    if(projetsAll.length===0){
      var r0=ws.addRow(['Aucun projet retourné par l\'API. URL testée : /admin/projet/projet/recherche.json']);
      ws.mergeCells('A6:I6');
      r0.getCell(1).font={italic:true,size:12,color:{argb:'FF64748B'}};
      r0.getCell(1).alignment={horizontal:'center'};
      return;
    }

    // ── Helpers statut + filtre Projet (sIndice='P' ET ref ' P ' au milieu) ─
    function _getSt(p){return (p.sSituation||p.sStatut||p.sEtat||'').toString();}
    function _isEC(p){var s=_getSt(p).toLowerCase();return s.indexOf('en cours de r')>=0;}
    function _isV(p){var s=_getSt(p).toLowerCase();return s==='validé'||s==='valide'||s.indexOf('validé')===0;}
    // Un VRAI projet : sIndice='P' ET la référence contient ' P ' au milieu (ex : "CMB P 911").
    // Les entrées dont la réf contient ' M ' (marchés/missions) sont systématiquement exclues.
    function _isProjet(p){
      if(String(p.sIndice||'').toUpperCase()!=='P')return false;
      var ref=(p.sRefProjet||'').toString().trim();
      var parts=ref.split(/\s+/);
      if(parts.length<3)return false;
      if(parts[parts.length-2].toUpperCase()!=='P')return false;
      // Exclusion : projet "France FONJEP"
      var titre=(p.sLibProjet||p.sLibelle||'').toString().toUpperCase();
      var pays=(p.sPaysProjetFormate||p.sPaysProjet||'').toString().toUpperCase();
      if(titre.indexOf('FONJEP')>=0 && pays.indexOf('FRANCE')>=0)return false;
      return true;
    }

    // Listes figees des projets DI suivis par Andre (30/07/2026), reprenant la
    // repartition bleu/vert du dernier export correct du 21/07 : ces projets
    // restent affiches dans leur groupe d'origine meme si Gaia les marque
    // desormais "Clos"/"Abandonne"/etc. cote admin - leur statut reel GAIA est
    // quand meme affiche en colonne Statut, et le commentaire de suivi (colonne
    // Commentaires) precise leur situation concrete.
    var _refsSuivisClos=['MAD P 183','SEN P 206','SEN P 194','TOG P 180','TOG P 211'];
    var _refsSuivisEC=['CAM P 196','MAD P 159','TOG P 214','TOG P 212'];
    var _refsSuivisV=['MAD P 216','SEN P 209','TOG P 210','TOG P 213'];
    function _refNorm(p){return (p.sRefProjet||'').toString().replace(/\s+/g,' ').trim().toUpperCase();}
    function _estSuiviClos(p){return _refsSuivisClos.indexOf(_refNorm(p))>=0;}
    function _estSuiviEC(p){return _refsSuivisEC.indexOf(_refNorm(p))>=0;}
    function _estSuiviV(p){return _refsSuivisV.indexOf(_refNorm(p))>=0;}

    // 1) Garde uniquement les VRAIS projets (sIndice='P' + référence "XXX P NNN")
    // 2) Puis filtre statut "en cours de réalisation" + "validé" + projets suivis (toujours inclus)
    var projetsP=projetsAll.filter(_isProjet);
    var filtered=projetsP.filter(function(p){return _isEC(p)||_isV(p)||_estSuiviClos(p)||_estSuiviEC(p)||_estSuiviV(p);});
    var showAll=(filtered.length===0);
    var toShow=showAll?projetsP:filtered;

    if(showAll){
      var rW=ws.addRow(['⚠️ Filtre "en cours"/"validé" sans résultat — affichage des '+projetsP.length+' projets (sIndice=P, réf " P ") pour identifier le champ de statut.']);
      ws.mergeCells('A6:I6');
      rW.getCell(1).font={bold:true,size:11,color:{argb:'FF92400E'}};
      rW.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFEF3C7'}};
    }

    // Tri : groupe "bleu" d'abord (0 : en cours reel OU projet suivi), puis
    //       "Validés non suivis" (1), puis autres (2) — à l'intérieur : pays puis titre
    function _bucket(p){if(_estSuiviClos(p))return 0;if(_estSuiviEC(p)||_isEC(p))return 1;if(_estSuiviV(p)||_isV(p))return 2;return 3;}
    toShow.sort(function(a,b){
      var oa=_bucket(a),ob=_bucket(b);
      if(oa!==ob)return oa-ob;
      var pa=(a.sPaysProjetFormate||a.sPaysProjet||a.sLibellePays||'').localeCompare(b.sPaysProjetFormate||b.sPaysProjet||b.sLibellePays||'','fr');
      if(pa!==0)return pa;
      return (a.sLibProjet||a.sLibelle||'').localeCompare(b.sLibProjet||b.sLibelle||'','fr');
    });

    // ── Fetch détail pour chaque projet ───────────────────────────────
    var details={};
    // Pas de fetch détail nécessaire — recherche.json retourne déjà tous les champs requis
    // (sLibProjet, sRefProjet, sSituation, sChefProj, sInitiateurFormate, dtDateCreateFormate, fMontant, etc.)

    // ── Construction des lignes avec sous-totaux par statut ───────────
    var _closCount=0,_closBudget=0,_ecCount=0,_ecBudget=0,_vCount=0,_vBudget=0;
    var _currentGroup=null; // 'CLOS' | 'EC' | 'V' | 'OTHER'
    function _flushGroup(g){
      if(g==='CLOS'&&_closCount>0)_addSubtotal('TOTAL Clos en 2026',_closCount,_closBudget,'FFD9730D');
      else if(g==='EC'&&_ecCount>0)_addSubtotal('TOTAL En cours',_ecCount,_ecBudget,'FF2E74B5');
      else if(g==='V'&&_vCount>0)_addSubtotal('TOTAL Validés',_vCount,_vBudget,'FF22A06B');
    }
    function _addSubtotal(label,count,total,fill){
      var rST=ws.addRow(['','','','',label,(count+' projet'+(count>1?'s':'')),'',total,'']);
      rST.height=22;
      rST.eachCell(function(c){
        c.font={bold:true,size:12,color:{argb:'FFFFFFFF'}};
        c.fill={type:'pattern',pattern:'solid',fgColor:{argb:fill}};
        c.alignment={vertical:'middle',horizontal:'center'};
        c.border={top:{style:'medium',color:{argb:'FF1A3A5C'}},bottom:{style:'medium',color:{argb:'FF1A3A5C'}}};
      });
      rST.getCell(5).alignment={vertical:'middle',horizontal:'right',indent:1};
      rST.getCell(8).numFmt='#,##0\\ "€"';
      rST.getCell(8).alignment={vertical:'middle',horizontal:'right',indent:1};
    }
    // Helper : convertit "YYYY-MM-DD HH:MM:SS" ou "YYYY-MM-DD" en Date (sans heure)
    function _parseRawDate(s){
      if(!s)return null;
      var m=String(s).match(/^(\d{4})-(\d{2})-(\d{2})/);
      if(!m)return null;
      return new Date(parseInt(m[1]),parseInt(m[2])-1,parseInt(m[3]));
    }
    // Helper : abréviation du statut pour affichage
    function _stShort(s){
      var sl=(s||'').toLowerCase();
      if(sl.indexOf('en cours de r')>=0)return 'En cours';
      if(sl==='validé'||sl==='valide')return 'Validé';
      return s||'—';
    }
    // Commentaires (col I), indexes par reference projet (mis a jour le 01/07/2026,
    // a la demande d'Andre) — bleu FF0070C0, gras, taille 14.
    var _cmtsByRef={
      'CAM P 196':'FIN DE VIE',
      'MAD P 159':'TERMINÉ',
      'MAD P 183':'CLOS',
      'SEN P 206':'CLOS',
      'SEN P 194':'CLOS',
      'TOG P 180':'CLOS',
      'TOG P 214':'CLOTÛRABLE',
      'TOG P 211':'CLOS',
      'TOG P 212':'CLOTÛRABLE',
      'MAD P 216':'Toujours en rechreche de financement',
      'SEN P 209':"Projet engagé à l'initiative de Thierry Laniesse avec un financment partiel",
      'TOG P 210':'Projet revu à la baise en attente de fiancnement (en bonne voie)',
      'TOG P 213':'ABANDONNÉ'
    };
    toShow.forEach(function(p){
      var merged=p;

      var statut=_stShort(_getSt(merged));
      var valide=_isV(merged);
      var encours=_isEC(merged);
      var pays=merged.sPaysProjetFormate||merged.sPaysProjet||merged.sLibellePays||'';
      var titre=(merged.sLibProjet||merged.sLibelle||merged.sTitre||'').toString()
        .replace(/\s*\([^)]*\)/g,'')   // supprime toute parenthèse (ex : "Projet X (suite)")
        .replace(/\s+/g,' ').trim();
      var ref=merged.sRefProjet||merged.sCodeComplet||merged.sCode||'';
      var chef=merged.sChefProj||merged.sChefProjet||merged.sResponsable||'';
      var deleg=merged.sInitiateurFormate||merged.sInitiateur||merged.sPorteur||'';
      var dc=_parseRawDate(merged.dtDateEnrProjet||merged.dtDateCreate||merged.dtDateMaj);
      var budget=parseFloat(merged.fMontant||merged.fBudgetRealise||merged.fBudget||0)||null;

      var suiviClos=_estSuiviClos(merged),suiviEC=_estSuiviEC(merged),suiviV=_estSuiviV(merged);
      var isOrange=suiviClos;
      var isBlue=(!isOrange)&&(suiviEC||encours);
      var isGreen=(!isOrange)&&(!isBlue)&&(suiviV||valide);
      var grp=isOrange?'CLOS':isBlue?'EC':isGreen?'V':'OTHER';
      // Si on change de groupe, on écrit d'abord le sous-total du groupe précédent
      if(_currentGroup && _currentGroup!==grp){
        _flushGroup(_currentGroup);
      }
      _currentGroup=grp;

      if(isOrange){_closCount++;_closBudget+=(budget||0);}
      else if(isBlue){_ecCount++;_ecBudget+=(budget||0);}
      else if(isGreen){_vCount++;_vBudget+=(budget||0);}

      // Les projets suivis restent dans leur groupe d'origine (orange, bleu ou
      // vert) quel que soit leur statut reel GAIA actuel.
      var fill=isOrange?'FFFCE4C0':isBlue?'FFD6E4F0':isGreen?'FFE8F5E9':'FFFFFFFF';
      var row=ws.addRow([pays,titre,ref,statut,chef,deleg,dc,budget,'']);
      row.height=50;
      row.eachCell(function(c){
        c.fill={type:'pattern',pattern:'solid',fgColor:{argb:fill}};
        c.font={size:14};
        c.alignment={vertical:'middle',wrapText:true};
        c.border={bottom:{style:'thin',color:{argb:'FFCCD0D8'}}};
      });
      if(dc){row.getCell(7).numFmt='dd/mm/yyyy';row.getCell(7).alignment={vertical:'middle',horizontal:'center'};}
      if(budget!==null){
        row.getCell(8).numFmt='#,##0\\ "€"';
        row.getCell(8).font={size:14,bold:true};
      }
      row.getCell(9).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFFFFF'}};
      row.getCell(9).border={bottom:{style:'thin',color:{argb:'FFCCD0D8'}},left:{style:'thin',color:{argb:'FF1A3A5C'}}};
      // Commentaire (col I), indexe par reference projet (et non par ligne) pour rester
      // colle au bon projet meme si l'ordre/nombre de lignes change a une extraction future.
      var _cmtKey=ref.toString().replace(/\s+/g,' ').trim().toUpperCase();
      if(_cmtsByRef[_cmtKey]){
        row.getCell(9).value=_cmtsByRef[_cmtKey];
        row.getCell(9).font={bold:true,size:14,color:{argb:'FF0070C0'}};
        row.getCell(9).alignment={vertical:'middle',horizontal:'center',wrapText:true};
      }
    });
    // Sous-total final : celui du dernier groupe parcouru
    if(_currentGroup){
      _flushGroup(_currentGroup);
    }


    ws.views=[{state:'frozen',xSplit:0,ySplit:5,activeCell:'A6'}];
  }
  // ── Feuillet 6 : Projets GAÏA (onglet Projet — en cours & validés) ──
  // API : /admin/projet/projet/recherche.json (POST, sans filtre serveur)
  // Filtre client : sIndice='P' + référence "XXX P NNN" + statut Validé/En cours
  // Champs : sLibProjet, sRefProjet, sSituation, sChefProj, sInitiateurFormate,
  //          sPaysProjetFormate, dtDateCreateFormate, fMontant, sObservations
  var ws6=wb.addWorksheet('PCD');
  await _buildSheet6(ws6,'Projets de la Délégation Internationale — Clos en 2026, en cours et validés',dateExtractFR);

  var ws8=wb.addWorksheet('Programmes');
  await _buildSheet7(ws8,'Portefeuille des Programmes');

  // 5. Téléchargement
  var buf=await wb.xlsx.writeBuffer();
  var blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='Tableau_de_Bord_DI_2026_'+iso+'.xlsx';
  a.click();

  tw.innerHTML=save;

  setTimeout(function(){
    alert('✅ Tableau Excel généré et téléchargé.');
  },100);
}


function _parseCSV7(text){
  var res=[],row=[],cur='',inQ=false;
  for(var i=0;i<text.length;i++){
    var c=text[i];
    if(c==='"'){
      if(inQ&&text[i+1]==='"'){cur+='"';i++;}
      else inQ=!inQ;
    } else if(c===','&&!inQ){
      row.push(cur);cur='';
    } else if(c==='\r'){
      if(text[i+1]==='\n')i++;
      if(!inQ){row.push(cur);cur='';res.push(row);row=[];}else cur+='\n';
    } else if(c==='\n'&&!inQ){
      row.push(cur);cur='';res.push(row);row=[];
    } else {
      cur+=c;
    }
  }
  if(cur!==''||row.length>0){row.push(cur);res.push(row);}
  return res;
}

// Parse un nombre au format Google Sheets/FR : la virgule peut etre un separateur de
// milliers ("1,300" -> 1300) ou une decimale ("12,5" -> 12.5) selon le contexte -
// contrairement a un simple replace(',','.') qui casse tout total >= 1000.
function _parseNumFR(v){
  var s=String(v==null?'':v).replace(/[\s\u00A0]/g,'');
  if(/^-?\d{1,3}(,\d{3})+$/.test(s)){ s=s.replace(/,/g,''); }
  else { s=s.replace(',','.'); }
  return parseFloat(s);
}


async function _buildSheet7(ws,titre){
  ws.columns=[
    {width:22},{width:16},{width:42},{width:36},
    {width:28},{width:30},{width:14},{width:14},
    {width:18},{width:18},{width:20},{width:18},{width:20},{width:46}
  ];
  var _f7=function(a){return {type:'pattern',pattern:'solid',fgColor:{argb:a}};};
  var _bg7=function(row,a){for(var i=1;i<=14;i++)row.getCell(i).fill=_f7(a);};
  var _border7=function(row,top,bot){
    var tS=top?{style:'thin',color:{argb:'FFAAAAAA'}}:undefined;
    var bS=bot?{style:'thin',color:{argb:'FFAAAAAA'}}:undefined;
    for(var i=1;i<=14;i++){
      var b={left:{style:'thin',color:{argb:'FFAAAAAA'}},right:{style:'thin',color:{argb:'FFAAAAAA'}}};
      if(tS)b.top=tS; if(bS)b.bottom=bS;
      row.getCell(i).border=b;
    }
  };
  var _n7=function(v){var n=_parseNumFR(v);return isNaN(n)?null:n;};
  var CY='FFFEFED1',CC='FFD9FEFF',CG='FFDBDBDB',CW='FFFFFFFF',CBT='FF1E2761';
  var GREEN='FF1E7A45';

  var GSHEET_CSV='https://docs.google.com/spreadsheets/d/1kxt3iCEd6XWJXyiucnC3mzva3-e_sfQkW9SwzJL-kmI/export?format=csv&gid=1214189128';
  var rows=[];
  try{
    var resp=await fetch(GSHEET_CSV);
    if(!resp.ok)throw new Error('HTTP '+resp.status);
    rows=_parseCSV7(await resp.text());
  }catch(e){
    var re=ws.addRow(['Donnees non disponibles : '+e.message]);
    ws.mergeCells('A1:N1');
    re.getCell(1).font={bold:true,color:{argb:'FFFF0000'}};
    return;
  }

  var iS1=-1,iHdr1=-1,iT1=-1,iS2=-1,iTot=-1,iTotP=-1,iTotTot=-1,iTotTotP=-1;
  for(var i=0;i<rows.length;i++){
    var r=rows[i],a0=(r[0]||'').trim(),a5=(r[5]||'').trim();
    if(a0.indexOf('Programmes en cours')===0&&iS1===-1)iS1=i;
    if(iS1!==-1&&iHdr1===-1&&i>iS1&&a0==='Responsable')iHdr1=i;
    if(a0.indexOf('Programmes futurs')===0&&iS2===-1)iS2=i;
    if(a5==='Totaux'&&a0===''&&iS2===-1&&iT1===-1)iT1=i;
    if(a5==='Totaux'&&a0===''&&iS2!==-1&&iTot===-1)iTot=i;
    if(a5.indexOf('Totaux pondér')===0&&a0==='')iTotP=i;
    if(a5.indexOf('Totaux des Totaux')===0)iTotTot=i;
    if(a5.indexOf('T. des T.')===0)iTotTotP=i;
  }

  var data1=[];
  if(iHdr1!==-1){
    var end1=iT1!==-1?iT1:rows.length;
    for(var k=iHdr1+1;k<end1;k++){
      var rk=rows[k];
      if((rk[0]||'').trim()!==''||(rk[2]||'').trim()!=='')data1.push(rk);
    }
  }

  // ── Titre ────────────────────────────────────────────────────────────
  var r1=ws.addRow([titre]);
  ws.mergeCells('A'+r1.number+':N'+r1.number);
  r1.height=44;
  r1.getCell(1).font={bold:true,size:18,color:{argb:'FFFFFFFF'}};
  r1.getCell(1).alignment={vertical:'middle',horizontal:'center'};
  _bg7(r1,CBT);

  // ── Séparateur ───────────────────────────────────────────────────────
  var rSp=ws.addRow([]);rSp.height=8;_bg7(rSp,CG);

  // ── Section 1 header ─────────────────────────────────────────────────
  var rS1=ws.addRow(['Programmes en cours de realisation']);
  ws.mergeCells('A'+rS1.number+':N'+rS1.number);
  rS1.height=32;
  rS1.getCell(1).font={bold:true,size:16,color:{argb:'FF1E2761'}};
  rS1.getCell(1).alignment={vertical:'middle',horizontal:'left'};
  _bg7(rS1,CY);

  // ── En-têtes colonnes ─────────────────────────────────────────────────
  var hdr=iHdr1!==-1?rows[iHdr1].slice(0,14):
    ['Responsable','Pays','Titre','Objet','Bailleur','Beneficiaire',
     'Missions 2026','Missions total','FPA 2026','FPA total',
     'Suite','Avancement','Code','Commentaires'];
  var rH=ws.addRow(hdr);
  rH.height=52;
  rH.eachCell(function(c,n){
    if(n>14)return;
    c.fill=_f7(CY);c.font={bold:true,size:14,color:{argb:'FF1E2761'}};
    c.alignment={vertical:'middle',horizontal:'center',wrapText:true};
    c.border={
      top:{style:'medium',color:{argb:'FF1E2761'}},
      bottom:{style:'medium',color:{argb:'FF1E2761'}},
      left:{style:'thin',color:{argb:'FF9CA3AF'}},
      right:{style:'thin',color:{argb:'FF9CA3AF'}}
    };
  });

  // ── Données ───────────────────────────────────────────────────────────
  data1.forEach(function(dr){
    var v=dr.slice(0,14);
    for(var ci=6;ci<=9;ci++){if(v[ci]!==undefined){var nv=_n7(v[ci]);if(nv!==null)v[ci]=nv;}}
    var rD=ws.addRow(v);
    rD.height=72;
    _bg7(rD,CY);
    rD.eachCell(function(c,n){
      c.alignment={vertical:'middle',wrapText:true};
      c.font={size:14};
      if(n===9||n===10)c.numFmt='#,##0';
    });
    _border7(rD,false,true);
  });

  // ── Totaux S1 ─────────────────────────────────────────────────────────
  var t1=iT1!==-1?rows[iT1]:null;
  var rT1=ws.addRow(t1?[null,null,null,null,null,t1[5]||'Totaux',_n7(t1[6]),_n7(t1[7]),_n7(t1[8]),_n7(t1[9])]:[null,null,null,null,null,'Totaux']);
  rT1.height=30;_bg7(rT1,CY);
  rT1.getCell(6).font={bold:true,size:14,color:{argb:'FF1E2761'}};
  [7,8,9,10].forEach(function(n){rT1.getCell(n).font={bold:true,size:14};});
  rT1.getCell(9).numFmt='#,##0';rT1.getCell(10).numFmt='#,##0';
  _border7(rT1,false,true);

  // ── Séparateur épais jaune → bleu clair ───────────────────────────────
  var rSep2=ws.addRow([]);
  rSep2.height=12;
  _bg7(rSep2,CG);
  for(var i=1;i<=14;i++){
    rSep2.getCell(i).border={
      top:{style:'medium',color:{argb:'FF1E2761'}},
      bottom:{style:'medium',color:{argb:'FF1E2761'}}
    };
  }

  // ── Section 2 header ─────────────────────────────────────────────────
  var rS2=ws.addRow(['Programmes futurs en discussion']);
  ws.mergeCells('A'+rS2.number+':N'+rS2.number);
  rS2.height=32;
  rS2.getCell(1).font={bold:true,size:16,color:{argb:'FF000000'}};
  rS2.getCell(1).alignment={vertical:'middle',horizontal:'left'};
  _bg7(rS2,CC);

  // ── Totaux futurs ──────────────────────────────────────────────────────
  var tr=iTot!==-1?rows[iTot]:null;
  var rTot=ws.addRow(tr?[null,null,null,null,null,tr[5]||'Totaux',_n7(tr[6]),_n7(tr[7]),_n7(tr[8]),_n7(tr[9])]:[null,null,null,null,null,'Totaux']);
  rTot.height=30;_bg7(rTot,CC);
  rTot.getCell(6).font={bold:true,size:14};
  [7,8,9,10].forEach(function(n){rTot.getCell(n).font={bold:true,size:14};});
  rTot.getCell(9).numFmt='#,##0';rTot.getCell(10).numFmt='#,##0';
  _border7(rTot,true,true);

  // ── Totaux pondérés ────────────────────────────────────────────────────
  var trp=iTotP!==-1?rows[iTotP]:null;
  var rTotP=ws.addRow(trp?[null,null,null,null,null,trp[5]||'Totaux ponderes',_n7(trp[6]),_n7(trp[7]),_n7(trp[8]),_n7(trp[9])]:[null,null,null,null,null,'Totaux ponderes']);
  rTotP.height=30;_bg7(rTotP,CC);
  rTotP.getCell(6).font={bold:true,size:14};
  [7,8,9,10].forEach(function(n){rTotP.getCell(n).font={bold:true,size:14};});
  rTotP.getCell(9).numFmt='#,##0';rTotP.getCell(10).numFmt='#,##0';
  _border7(rTotP,false,true);

  // ── Séparateur épais avant Totaux des Totaux ───────────────────────────
  var rSep3=ws.addRow([]);
  rSep3.height=12;
  _bg7(rSep3,CG);
  for(var i=1;i<=14;i++){
    rSep3.getCell(i).border={
      top:{style:'medium',color:{argb:'FF1E2761'}},
      bottom:{style:'medium',color:{argb:'FF1E2761'}}
    };
  }

  // ── Totaux des Totaux — fond blanc, 16 gras ────────────────────────────
  var ttt=iTotTot!==-1?rows[iTotTot]:null;
  var rTT=ws.addRow(ttt?[null,null,null,null,null,ttt[5]||'Totaux des Totaux',_n7(ttt[6]),_n7(ttt[7]),_n7(ttt[8]),_n7(ttt[9])]:[null,null,null,null,null,'Totaux des Totaux']);
  rTT.height=34;_bg7(rTT,CW);
  rTT.getCell(6).font={bold:true,size:16,color:{argb:'FF1E2761'}};
  [7,8,9,10].forEach(function(n){rTT.getCell(n).font={bold:true,size:16};});
  rTT.getCell(9).numFmt='#,##0';rTT.getCell(10).numFmt='#,##0';
  _border7(rTT,false,true);

  // ── T. des T. pondérés — fond blanc, chiffres verts gras ──────────────
  var tttp=iTotTotP!==-1?rows[iTotTotP]:null;
  var rTTP=ws.addRow(tttp?[null,null,null,null,null,tttp[5]||'T. des T. ponderes',_n7(tttp[6]),_n7(tttp[7]),_n7(tttp[8]),_n7(tttp[9])]:[null,null,null,null,null,'T. des T. ponderes']);
  rTTP.height=34;_bg7(rTTP,CW);
  rTTP.getCell(6).font={bold:true,size:16,color:{argb:'FF1E2761'}};
  [7,8,9,10].forEach(function(n){rTTP.getCell(n).font={bold:true,size:16,color:{argb:GREEN}};});
  rTTP.getCell(9).numFmt='#,##0';rTTP.getCell(10).numFmt='#,##0';
  _border7(rTTP,false,true);

  ws.views=[{state:'frozen',xSplit:0,ySplit:1,activeCell:'A2'}];
}

// ── Feuillet GC : Groupes de Compétences ─────────────────────────────
function _buildSheetGC(ws,missions,dateExtFR){
  ws.columns=[{width:15},{width:15},{width:40},{width:22},{width:14}];

  // ── 8 lignes vides ──────────────────────────────────────────────
  ws.addRow([]);ws.addRow([]);ws.addRow([]);ws.addRow([]);
  ws.addRow([]);ws.addRow([]);ws.addRow([]);ws.addRow([]);

  // ── Ligne 9 : titre ─────────────────────────────────────────────
  var r1=ws.addRow([null,null,'Groupes de Compétences',null,null]);
  ws.mergeCells('C9:E9');
  r1.height=38;
  r1.getCell(3).font={bold:true,size:18,color:{argb:'FFFFFFFF'}};
  r1.getCell(3).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
  r1.getCell(3).alignment={vertical:'middle',horizontal:'center'};

  // ── Ligne 10 : date ─────────────────────────────────────────────
  var r2=ws.addRow([null,null,'Extraction du '+dateExtFR,null,null]);
  ws.mergeCells('C10:E10');
  r2.height=26;
  r2.getCell(3).font={bold:true,size:14,color:{argb:'FF1E2761'}};
  r2.getCell(3).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEEF3FB'}};
  r2.getCell(3).alignment={vertical:'middle',horizontal:'left',indent:1};

  // ── Ligne 11 : en-têtes (sans bordure basse pour éviter la ligne) ─
  var rh=ws.addRow([null,null,'Groupe de Compétences','Nombre de missions','%']);
  rh.height=28;
  [3,4,5].forEach(function(i){
    var c=rh.getCell(i);
    c.font={bold:true,size:14,color:{argb:'FFFFFFFF'}};
    c.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF1E2761'}};
    c.alignment={vertical:'middle',horizontal:'center'};
    // Pas de bordure → pas de ligne entre 11 et 12
  });

  // ── Comptage ────────────────────────────────────────────────────
  var cnt={GC1:0,GC2:0,GC3:0,GC4:0,GC5:0,GC6:0,GC7:0,D:0,DCSD:0,P:0};
  missions.forEach(function(m){
    var lbl=(m.sLibelleActivite||'').trim();
    var code=_gcLk(lbl);
    if(cnt.hasOwnProperty(code))cnt[code]++;
    else cnt.D++;
  });
  var totGen=cnt.GC1+cnt.GC2+cnt.GC3+cnt.GC4+cnt.GC5+cnt.GC6+cnt.GC7+cnt.D+cnt.DCSD;

  // ── Helper % ────────────────────────────────────────────────────
  function _pct(val){
    if(!totGen)return '';
    return Math.round(val/totGen*100)+'%';
  }

  // ── Helper ligne (bordure bas + côtés seulement, pas de top) ────
  var BD={style:'thin',color:{argb:'FFDDE4F0'}};
  var brd={bottom:BD,left:BD,right:BD};
  function _row(label,val,bold,bg){
    var r=ws.addRow([null,null,label,val,_pct(val)]);
    r.height=24;
    var fc=bg==='FF1E2761'?'FFFFFFFF':'FF1E2761';
    [3,4,5].forEach(function(i){
      var c=r.getCell(i);
      c.font={bold:!!bold,size:14,color:{argb:fc}};
      if(bg)c.fill={type:'pattern',pattern:'solid',fgColor:{argb:bg}};
      c.border=brd;
    });
    r.getCell(4).alignment={horizontal:'center',vertical:'middle'};
    r.getCell(5).alignment={horizontal:'center',vertical:'middle'};
    return r;
  }

  // ── Lignes GC ───────────────────────────────────────────────────
  [
    ['GC1','GC1 – Enseignement'],
    ['GC2','GC2 – Santé'],
    ['GC3','GC3 – Eau assainissement'],
    ['GC4','GC4 – Développement rural'],
    ['GC5','GC5 – ACDE'],
    ['GC6','GC6 – Formation professionnelle'],
    ['GC7','GC7 – Tourisme – Hôtellerie-Restauration'],
  ].forEach(function(gc){_row(gc[1],cnt[gc[0]],false,null);});

  // ── Total GC ────────────────────────────────────────────────────
  var totGC=['GC1','GC2','GC3','GC4','GC5','GC6','GC7'].reduce(function(s,c){return s+cnt[c];},0);
  _row('Total GC',totGC,true,'FFD5E8F0');

  // ── Divers ──────────────────────────────────────────────────────
  _row('Divers',cnt.D,false,null);

  // ── DCSD missions courtes ────────────────────────────────────────
  _row('DCSD missions courtes',cnt.DCSD,false,null);

  // ── Total général ────────────────────────────────────────────────
  var rTot=_row('Total général',totGen,true,'FF1E2761');
  rTot.getCell(5).value='100%';

  // ── Ligne vide ──────────────────────────────────────────────────
  ws.addRow([]);

  // ── Commentaire : texte bleu foncé sur fond blanc ───────────────
  var rc=ws.addRow([null,null,'Le tableau comprend les missions réalisées et les missions en cours',null,null]);
  var rn=rc.number;
  ws.mergeCells('C'+rn+':E'+rn);
  rc.height=26;
  var cc=rc.getCell(3);
  cc.font={bold:false,size:16,color:{argb:'FF1E2761'}};
  cc.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFFFFFFF'}};
  cc.alignment={vertical:'middle',horizontal:'left',indent:1};

  // Pas de freeze colonne (xSplit:0) → supprime la ligne B|C
  // activeCell sur A1 (cellule vide) → aucune cellule de données sélectionnée
  ws.views=[{showGridLines:false}];
  return totGen;
}
})();
