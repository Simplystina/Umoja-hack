// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Struct([['blog', ctc2], ['title', ctc4], ['blogger', ctc6], ['index', ctc7], ['likes', ctc7], ['dislikes', ctc7]]);
  return {
    notify: {
      created: [ctc8],
      edited: [ctc7, ctc8]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc6 = stdlib.T_Data({
    None: ctc2,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc8 = stdlib.T_Struct([['blog', ctc4], ['title', ctc6], ['blogger', ctc7], ['index', ctc1], ['likes', ctc1], ['dislikes', ctc1]]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc10;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc1, ctc9, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc3, ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc5]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Data({
    blogger_createblog0_257: ctc4,
    blogger_edit0_257: ctc6,
    end0_257: ctc7,
    reader_likeOrDislike0_257: ctc9,
    reader_tip0_257: ctc10,
    reader_view0_257: ctc11
    });
  const ctc13 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc14 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc15 = stdlib.T_Address;
  const ctc16 = stdlib.T_Data({
    None: ctc0,
    Some: ctc15
    });
  const ctc17 = stdlib.T_Struct([['blog', ctc13], ['title', ctc14], ['blogger', ctc16], ['index', ctc5], ['likes', ctc5], ['dislikes', ctc5]]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v879, time: v878, didSend: v27, from: v877 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v879, time: v878, didSend: v27, from: v877 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:64:19:application',
    fs: ['at ./index.rsh:64:19:application call to [unknown function] (defined at: ./index.rsh:64:19:function exp)', 'at ./index.rsh:64:19:application call to "liftedInteract" (defined at: ./index.rsh:64:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v877],
    evt_cnt: 0,
    funcNum: 1,
    lct: v878,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v883, time: v882, didSend: v36, from: v881 } = txn2;
      
      ;
      const v886 = ['None', null];
      const v887 = ['None', null];
      const v888 = ['None', null];
      const v889 = {
        blog: v886,
        blogger: v888,
        dislikes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        likes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        title: v887
        };
      const v974 = [v889, v889, v889, v889, v889, v889, v889, v889, v889, v889, v889];
      const v1065 = stdlib.checkedBigNumberify('./index.rsh:68:61:decimal', stdlib.UInt_max, '0');
      const v1066 = v974;
      const v1067 = stdlib.checkedBigNumberify('./index.rsh:68:64:decimal', stdlib.UInt_max, '0');
      const v1068 = true;
      const v1069 = v882;
      const v1076 = stdlib.checkedBigNumberify('./index.rsh:60:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v1068;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v877,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v883, time: v882, didSend: v36, from: v881 } = txn2;
  ;
  const v884 = stdlib.addressEq(v877, v881);
  stdlib.assert(v884, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v886 = ['None', null];
  const v887 = ['None', null];
  const v888 = ['None', null];
  const v889 = {
    blog: v886,
    blogger: v888,
    dislikes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    likes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    title: v887
    };
  const v974 = [v889, v889, v889, v889, v889, v889, v889, v889, v889, v889, v889];
  let v1065 = stdlib.checkedBigNumberify('./index.rsh:68:61:decimal', stdlib.UInt_max, '0');
  let v1066 = v974;
  let v1067 = stdlib.checkedBigNumberify('./index.rsh:68:64:decimal', stdlib.UInt_max, '0');
  let v1068 = true;
  let v1069 = v882;
  let v1076 = stdlib.checkedBigNumberify('./index.rsh:60:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v1068;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn3;
    switch (v1184[0]) {
      case 'blogger_createblog0_257': {
        const v1187 = v1184[1];
        undefined /* setApiDetails */;
        const v1194 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1183), null);
        const v1195 = {
          None: 0,
          Some: 1
          }[v1194[0]];
        const v1196 = stdlib.eq(v1195, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1197 = v1196 ? stdlib.checkedBigNumberify('./index.rsh:78:45:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:78:49:decimal', stdlib.UInt_max, '100000');
        const v1212 = stdlib.add(v1076, v1197);
        ;
        const v1214 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '0')];
        const v1215 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '1')];
        await txn3.getOutput('blogger_createblog', 'v1067', ctc5, v1067);
        const v1227 = ['Some', v1214];
        const v1228 = ['Some', v1215];
        const v1229 = ['Some', v1183];
        const v1230 = {
          blog: v1227,
          blogger: v1229,
          dislikes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          index: v1067,
          likes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          title: v1228
          };
        null;
        const v1231 = stdlib.safeMod(v1067, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
        const v1237 = stdlib.Array_set(v1066, v1231, v1230);
        const v1238 = stdlib.safeAdd(v1065, v1197);
        const v1239 = stdlib.safeAdd(v1067, stdlib.checkedBigNumberify('./index.rsh:97:53:decimal', stdlib.UInt_max, '1'));
        const cv1065 = v1238;
        const cv1066 = v1237;
        const cv1067 = v1239;
        const cv1068 = true;
        const cv1069 = v1185;
        const cv1076 = v1212;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      case 'blogger_edit0_257': {
        const v1363 = v1184[1];
        undefined /* setApiDetails */;
        ;
        const v1418 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
        const v1419 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '1')];
        const v1420 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '2')];
        const v1421 = stdlib.safeMod(v1420, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
        const v1423 = v1066[v1421];
        const v1426 = v1423.dislikes;
        const v1427 = v1423.index;
        const v1428 = v1423.likes;
        const v1430 = stdlib.safeMod(v1427, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
        const v1431 = ['Some', v1418];
        const v1432 = ['Some', v1419];
        const v1433 = ['Some', v1183];
        const v1434 = {
          blog: v1431,
          blogger: v1433,
          dislikes: v1426,
          index: v1427,
          likes: v1428,
          title: v1432
          };
        const v1436 = stdlib.Array_set(v1066, v1430, v1434);
        const v1437 = null;
        await txn3.getOutput('blogger_edit', 'v1437', ctc0, v1437);
        null;
        const cv1065 = v1065;
        const cv1066 = v1436;
        const cv1067 = v1067;
        const cv1068 = true;
        const cv1069 = v1185;
        const cv1076 = v1076;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      case 'end0_257': {
        const v1539 = v1184[1];
        undefined /* setApiDetails */;
        ;
        const v1628 = true;
        await txn3.getOutput('end', 'v1628', ctc8, v1628);
        const cv1065 = v1065;
        const cv1066 = v1066;
        const cv1067 = v1067;
        const cv1068 = false;
        const cv1069 = v1185;
        const cv1076 = v1076;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      case 'reader_likeOrDislike0_257': {
        const v1715 = v1184[1];
        undefined /* setApiDetails */;
        ;
        const v1832 = null;
        await txn3.getOutput('reader_likeOrDislike', 'v1832', ctc0, v1832);
        const cv1065 = v1065;
        const cv1066 = v1066;
        const cv1067 = v1067;
        const cv1068 = true;
        const cv1069 = v1185;
        const cv1076 = v1076;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      case 'reader_tip0_257': {
        const v1891 = v1184[1];
        undefined /* setApiDetails */;
        const v1911 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '0')];
        const v1916 = stdlib.add(v1076, v1911);
        ;
        const v2019 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '1')];
        const v2020 = stdlib.safeMod(v2019, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
        const v2022 = v1066[v2020];
        const v2024 = v2022.blogger;
        const v2029 = stdlib.fromSome(v2024, v1183);
        const v2033 = stdlib.sub(v1916, v1911);
        ;
        const v2034 = null;
        await txn3.getOutput('reader_tip', 'v2034', ctc0, v2034);
        const cv1065 = v1065;
        const cv1066 = v1066;
        const cv1067 = v1067;
        const cv1068 = true;
        const cv1069 = v1185;
        const cv1076 = v2033;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      case 'reader_view0_257': {
        const v2067 = v1184[1];
        undefined /* setApiDetails */;
        ;
        const v2220 = v2067[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
        const v2221 = stdlib.safeMod(v2220, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
        const v2223 = v1066[v2221];
        await txn3.getOutput('reader_view', 'v2223', ctc17, v2223);
        const cv1065 = v1065;
        const cv1066 = v1066;
        const cv1067 = v1067;
        const cv1068 = true;
        const cv1069 = v1185;
        const cv1076 = v1076;
        
        v1065 = cv1065;
        v1066 = cv1066;
        v1067 = cv1067;
        v1068 = cv1068;
        v1069 = cv1069;
        v1076 = cv1076;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _blogger_createblog4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _blogger_createblog4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _blogger_createblog4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc14, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc11,
    blogger_edit0_257: ctc12,
    end0_257: ctc13,
    reader_likeOrDislike0_257: ctc15,
    reader_tip0_257: ctc16,
    reader_view0_257: ctc17
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1079 = ctc.selfAddress();
  const v1081 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:75:14:application call to [unknown function] (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:69:55:application call to "runblogger_createblog0_257" (defined at: ./index.rsh:73:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'blogger_createblog'
    });
  const v1092 = ['blogger_createblog0_257', v1081];
  
  const v1166 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1079), null);
  const v1167 = {
    None: 0,
    Some: 1
    }[v1166[0]];
  const v1168 = stdlib.eq(v1167, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1169 = v1168 ? stdlib.checkedBigNumberify('./index.rsh:78:45:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:78:49:decimal', stdlib.UInt_max, '100000');
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1092],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v1169, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "blogger_createblog"
            });
          const v1194 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1183), null);
          const v1195 = {
            None: 0,
            Some: 1
            }[v1194[0]];
          const v1196 = stdlib.eq(v1195, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1197 = v1196 ? stdlib.checkedBigNumberify('./index.rsh:78:45:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:78:49:decimal', stdlib.UInt_max, '100000');
          const v1212 = stdlib.add(v1076, v1197);
          sim_r.txns.push({
            amt: v1197,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1214 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '0')];
          const v1215 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '1')];
          const v1216 = await txn1.getOutput('blogger_createblog', 'v1067', ctc3, v1067);
          
          const v1227 = ['Some', v1214];
          const v1228 = ['Some', v1215];
          const v1229 = ['Some', v1183];
          const v1230 = {
            blog: v1227,
            blogger: v1229,
            dislikes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            index: v1067,
            likes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            title: v1228
            };
          null;
          const v1231 = stdlib.safeMod(v1067, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
          const v1237 = stdlib.Array_set(v1066, v1231, v1230);
          const v1238 = stdlib.safeAdd(v1065, v1197);
          const v1239 = stdlib.safeAdd(v1067, stdlib.checkedBigNumberify('./index.rsh:97:53:decimal', stdlib.UInt_max, '1'));
          const v3371 = v1238;
          const v3372 = v1237;
          const v3373 = v1239;
          const v3376 = v1212;
          sim_r.isHalt = false;
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      undefined /* setApiDetails */;
      const v1194 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1183), null);
      const v1195 = {
        None: 0,
        Some: 1
        }[v1194[0]];
      const v1196 = stdlib.eq(v1195, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1197 = v1196 ? stdlib.checkedBigNumberify('./index.rsh:78:45:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:78:49:decimal', stdlib.UInt_max, '100000');
      const v1212 = stdlib.add(v1076, v1197);
      ;
      const v1214 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '0')];
      const v1215 = v1187[stdlib.checkedBigNumberify('./index.rsh:73:9:spread', stdlib.UInt_max, '1')];
      const v1216 = await txn1.getOutput('blogger_createblog', 'v1067', ctc3, v1067);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v1187, v1216), {
          at: './index.rsh:74:7:application',
          fs: ['at ./index.rsh:74:7:application call to [unknown function] (defined at: ./index.rsh:74:7:function exp)', 'at ./index.rsh:80:10:application call to "k" (defined at: ./index.rsh:79:23:function exp)', 'at ./index.rsh:79:23:application call to [unknown function] (defined at: ./index.rsh:79:23:function exp)'],
          msg: 'out',
          who: 'blogger_createblog'
          });
        }
      else {
        }
      
      const v1227 = ['Some', v1214];
      const v1228 = ['Some', v1215];
      const v1229 = ['Some', v1183];
      const v1230 = {
        blog: v1227,
        blogger: v1229,
        dislikes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        index: v1067,
        likes: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        title: v1228
        };
      null;
      const v1231 = stdlib.safeMod(v1067, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
      const v1237 = stdlib.Array_set(v1066, v1231, v1230);
      const v1238 = stdlib.safeAdd(v1065, v1197);
      const v1239 = stdlib.safeAdd(v1067, stdlib.checkedBigNumberify('./index.rsh:97:53:decimal', stdlib.UInt_max, '1'));
      const v3371 = v1238;
      const v3372 = v1237;
      const v3373 = v1239;
      const v3376 = v1212;
      return;
      
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      return;
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      return;
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      return;
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      return;
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      return;
      break;
      }
    }
  
  
  };
export async function _blogger_edit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _blogger_edit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _blogger_edit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc14, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc12,
    blogger_edit0_257: ctc11,
    end0_257: ctc13,
    reader_likeOrDislike0_257: ctc15,
    reader_tip0_257: ctc16,
    reader_view0_257: ctc17
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1096 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)', 'at ./index.rsh:69:55:application call to "runblogger_edit0_257" (defined at: ./index.rsh:100:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'blogger_edit'
    });
  const v1110 = ['blogger_edit0_257', v1096];
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1110],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "blogger_edit"
            });
          ;
          const v1418 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
          const v1419 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '1')];
          const v1420 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '2')];
          const v1421 = stdlib.safeMod(v1420, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
          const v1423 = v1066[v1421];
          const v1426 = v1423.dislikes;
          const v1427 = v1423.index;
          const v1428 = v1423.likes;
          const v1430 = stdlib.safeMod(v1427, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
          const v1431 = ['Some', v1418];
          const v1432 = ['Some', v1419];
          const v1433 = ['Some', v1183];
          const v1434 = {
            blog: v1431,
            blogger: v1433,
            dislikes: v1426,
            index: v1427,
            likes: v1428,
            title: v1432
            };
          const v1436 = stdlib.Array_set(v1066, v1430, v1434);
          const v1437 = null;
          const v1438 = await txn1.getOutput('blogger_edit', 'v1437', ctc0, v1437);
          
          null;
          const v3413 = v1065;
          const v3414 = v1436;
          const v3415 = v1067;
          const v3418 = v1076;
          sim_r.isHalt = false;
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      return;
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      undefined /* setApiDetails */;
      ;
      const v1418 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
      const v1419 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '1')];
      const v1420 = v1363[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '2')];
      const v1421 = stdlib.safeMod(v1420, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
      const v1423 = v1066[v1421];
      const v1426 = v1423.dislikes;
      const v1427 = v1423.index;
      const v1428 = v1423.likes;
      const v1430 = stdlib.safeMod(v1427, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
      const v1431 = ['Some', v1418];
      const v1432 = ['Some', v1419];
      const v1433 = ['Some', v1183];
      const v1434 = {
        blog: v1431,
        blogger: v1433,
        dislikes: v1426,
        index: v1427,
        likes: v1428,
        title: v1432
        };
      const v1436 = stdlib.Array_set(v1066, v1430, v1434);
      const v1437 = null;
      const v1438 = await txn1.getOutput('blogger_edit', 'v1437', ctc0, v1437);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v1363, v1438), {
          at: './index.rsh:101:7:application',
          fs: ['at ./index.rsh:101:7:application call to [unknown function] (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:120:10:application call to "k" (defined at: ./index.rsh:106:28:function exp)', 'at ./index.rsh:106:28:application call to [unknown function] (defined at: ./index.rsh:106:28:function exp)'],
          msg: 'out',
          who: 'blogger_edit'
          });
        }
      else {
        }
      
      null;
      const v3413 = v1065;
      const v3414 = v1436;
      const v3415 = v1067;
      const v3418 = v1076;
      return;
      
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      return;
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      return;
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      return;
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      return;
      break;
      }
    }
  
  
  };
export async function _end4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _end4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _end4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc14, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc12,
    blogger_edit0_257: ctc13,
    end0_257: ctc11,
    reader_likeOrDislike0_257: ctc15,
    reader_tip0_257: ctc16,
    reader_view0_257: ctc17
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1156 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:188:10:application call to [unknown function] (defined at: ./index.rsh:188:10:function exp)', 'at ./index.rsh:69:55:application call to "runend0_257" (defined at: ./index.rsh:186:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'end'
    });
  const v1161 = ['end0_257', v1156];
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1161],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "end"
            });
          ;
          const v1628 = true;
          const v1629 = await txn1.getOutput('end', 'v1628', ctc14, v1628);
          
          sim_r.txns.push({
            kind: 'from',
            to: v877,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      return;
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      return;
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      undefined /* setApiDetails */;
      ;
      const v1628 = true;
      const v1629 = await txn1.getOutput('end', 'v1628', ctc14, v1628);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v1539, v1629), {
          at: './index.rsh:187:7:application',
          fs: ['at ./index.rsh:187:7:application call to [unknown function] (defined at: ./index.rsh:187:7:function exp)', 'at ./index.rsh:194:10:application call to "k" (defined at: ./index.rsh:193:12:function exp)', 'at ./index.rsh:193:12:application call to [unknown function] (defined at: ./index.rsh:193:12:function exp)'],
          msg: 'out',
          who: 'end'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      return;
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      return;
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      return;
      break;
      }
    }
  
  
  };
export async function _reader_likeOrDislike4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _reader_likeOrDislike4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _reader_likeOrDislike4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc13,
    blogger_edit0_257: ctc14,
    end0_257: ctc15,
    reader_likeOrDislike0_257: ctc12,
    reader_tip0_257: ctc16,
    reader_view0_257: ctc17
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1129 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:143:14:application call to [unknown function] (defined at: ./index.rsh:143:14:function exp)', 'at ./index.rsh:69:55:application call to "runreader_likeOrDislike0_257" (defined at: ./index.rsh:141:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'reader_likeOrDislike'
    });
  const v1140 = ['reader_likeOrDislike0_257', v1129];
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1140],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "reader_likeOrDislike"
            });
          ;
          const v1832 = null;
          const v1833 = await txn1.getOutput('reader_likeOrDislike', 'v1832', ctc0, v1832);
          
          const v3497 = v1065;
          const v3498 = v1066;
          const v3499 = v1067;
          const v3502 = v1076;
          sim_r.isHalt = false;
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      return;
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      return;
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      return;
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      undefined /* setApiDetails */;
      ;
      const v1832 = null;
      const v1833 = await txn1.getOutput('reader_likeOrDislike', 'v1832', ctc0, v1832);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v1715, v1833), {
          at: './index.rsh:142:7:application',
          fs: ['at ./index.rsh:142:7:application call to [unknown function] (defined at: ./index.rsh:142:7:function exp)', 'at ./index.rsh:167:10:application call to "k" (defined at: ./index.rsh:148:22:function exp)', 'at ./index.rsh:148:22:application call to [unknown function] (defined at: ./index.rsh:148:22:function exp)'],
          msg: 'out',
          who: 'reader_likeOrDislike'
          });
        }
      else {
        }
      
      const v3497 = v1065;
      const v3498 = v1066;
      const v3499 = v1067;
      const v3502 = v1076;
      return;
      
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      return;
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      return;
      break;
      }
    }
  
  
  };
export async function _reader_tip4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _reader_tip4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _reader_tip4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc12,
    blogger_edit0_257: ctc13,
    end0_257: ctc14,
    reader_likeOrDislike0_257: ctc16,
    reader_tip0_257: ctc11,
    reader_view0_257: ctc17
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1114 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:127:18:application call to [unknown function] (defined at: ./index.rsh:127:18:function exp)', 'at ./index.rsh:69:55:application call to "runreader_tip0_257" (defined at: ./index.rsh:125:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'reader_tip'
    });
  const v1115 = v1114[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1125 = ['reader_tip0_257', v1114];
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1125],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v1115, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "reader_tip"
            });
          const v1911 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '0')];
          const v1916 = stdlib.add(v1076, v1911);
          sim_r.txns.push({
            amt: v1911,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v2019 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '1')];
          const v2020 = stdlib.safeMod(v2019, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
          const v2022 = v1066[v2020];
          const v2024 = v2022.blogger;
          const v2029 = stdlib.fromSome(v2024, v1183);
          const v2033 = stdlib.sub(v1916, v1911);
          sim_r.txns.push({
            kind: 'from',
            to: v2029,
            tok: undefined /* Nothing */
            });
          const v2034 = null;
          const v2035 = await txn1.getOutput('reader_tip', 'v2034', ctc0, v2034);
          
          const v3539 = v1065;
          const v3540 = v1066;
          const v3541 = v1067;
          const v3544 = v2033;
          sim_r.isHalt = false;
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      return;
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      return;
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      return;
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      return;
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      undefined /* setApiDetails */;
      const v1911 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '0')];
      const v1916 = stdlib.add(v1076, v1911);
      ;
      const v2019 = v1891[stdlib.checkedBigNumberify('./index.rsh:125:9:spread', stdlib.UInt_max, '1')];
      const v2020 = stdlib.safeMod(v2019, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
      const v2022 = v1066[v2020];
      const v2024 = v2022.blogger;
      const v2029 = stdlib.fromSome(v2024, v1183);
      const v2033 = stdlib.sub(v1916, v1911);
      ;
      const v2034 = null;
      const v2035 = await txn1.getOutput('reader_tip', 'v2034', ctc0, v2034);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v1891, v2035), {
          at: './index.rsh:126:7:application',
          fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:7:function exp)', 'at ./index.rsh:137:10:application call to "k" (defined at: ./index.rsh:132:21:function exp)', 'at ./index.rsh:132:21:application call to [unknown function] (defined at: ./index.rsh:132:21:function exp)'],
          msg: 'out',
          who: 'reader_tip'
          });
        }
      else {
        }
      
      const v3539 = v1065;
      const v3540 = v1066;
      const v3541 = v1067;
      const v3544 = v2033;
      return;
      
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      return;
      break;
      }
    }
  
  
  };
export async function _reader_view4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _reader_view4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _reader_view4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Struct([['blog', ctc5], ['title', ctc7], ['blogger', ctc8], ['index', ctc3], ['likes', ctc3], ['dislikes', ctc3]]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'));
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc6, ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Data({
    blogger_createblog0_257: ctc12,
    blogger_edit0_257: ctc13,
    end0_257: ctc14,
    reader_likeOrDislike0_257: ctc16,
    reader_tip0_257: ctc17,
    reader_view0_257: ctc11
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v877, v1065, v1066, v1067, v1076] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc10, ctc3, ctc3]);
  const v1144 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:69:55:application call to "runreader_view0_257" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:69:55:application call to [unknown function] (defined at: ./index.rsh:69:55:function exp)'],
    msg: 'in',
    who: 'reader_view'
    });
  const v1152 = ['reader_view0_257', v1144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v877, v1065, v1066, v1067, v1076, v1152],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:177:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
      
      switch (v1184[0]) {
        case 'blogger_createblog0_257': {
          const v1187 = v1184[1];
          
          break;
          }
        case 'blogger_edit0_257': {
          const v1363 = v1184[1];
          
          break;
          }
        case 'end0_257': {
          const v1539 = v1184[1];
          
          break;
          }
        case 'reader_likeOrDislike0_257': {
          const v1715 = v1184[1];
          
          break;
          }
        case 'reader_tip0_257': {
          const v1891 = v1184[1];
          
          break;
          }
        case 'reader_view0_257': {
          const v2067 = v1184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "reader_view"
            });
          ;
          const v2220 = v2067[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
          const v2221 = stdlib.safeMod(v2220, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
          const v2223 = v1066[v2221];
          const v2224 = await txn1.getOutput('reader_view', 'v2223', ctc9, v2223);
          
          const v3581 = v1065;
          const v3582 = v1066;
          const v3583 = v1067;
          const v3586 = v1076;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc10, ctc3, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v686, from: v1183 } = txn1;
  switch (v1184[0]) {
    case 'blogger_createblog0_257': {
      const v1187 = v1184[1];
      return;
      break;
      }
    case 'blogger_edit0_257': {
      const v1363 = v1184[1];
      return;
      break;
      }
    case 'end0_257': {
      const v1539 = v1184[1];
      return;
      break;
      }
    case 'reader_likeOrDislike0_257': {
      const v1715 = v1184[1];
      return;
      break;
      }
    case 'reader_tip0_257': {
      const v1891 = v1184[1];
      return;
      break;
      }
    case 'reader_view0_257': {
      const v2067 = v1184[1];
      undefined /* setApiDetails */;
      ;
      const v2220 = v2067[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
      const v2221 = stdlib.safeMod(v2220, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '11'));
      const v2223 = v1066[v2221];
      const v2224 = await txn1.getOutput('reader_view', 'v2223', ctc9, v2223);
      if (v686) {
        stdlib.protect(ctc0, await interact.out(v2067, v2224), {
          at: './index.rsh:172:7:application',
          fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)', 'at ./index.rsh:182:10:application call to "k" (defined at: ./index.rsh:178:16:function exp)', 'at ./index.rsh:178:16:application call to [unknown function] (defined at: ./index.rsh:178:16:function exp)'],
          msg: 'out',
          who: 'reader_view'
          });
        }
      else {
        }
      
      const v3581 = v1065;
      const v3582 = v1066;
      const v3583 = v1067;
      const v3586 = v1076;
      return;
      
      break;
      }
    }
  
  
  };
export async function blogger_createblog(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for blogger_createblog expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for blogger_createblog expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _blogger_createblog4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function blogger_edit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for blogger_edit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for blogger_edit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _blogger_edit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _end4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function reader_likeOrDislike(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for reader_likeOrDislike expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for reader_likeOrDislike expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _reader_likeOrDislike4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function reader_tip(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for reader_tip expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for reader_tip expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _reader_tip4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function reader_view(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for reader_view expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for reader_view expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _reader_view4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`blogger_createblog(byte[280],byte[9])uint64`, `blogger_edit(byte[280],byte[9],uint64)byte[0]`, `end()byte`, `reader_likeOrDislike(byte,uint64)byte[0]`, `reader_tip(uint64,uint64)byte[0]`, `reader_view(uint64)((byte,byte[280]),(byte,byte[9]),(byte,byte[32]),uint64,uint64,uint64)`],
    pure: [],
    sigs: [`blogger_createblog(byte[280],byte[9])uint64`, `blogger_edit(byte[280],byte[9],uint64)byte[0]`, `end()byte`, `reader_likeOrDislike(byte,uint64)byte[0]`, `reader_tip(uint64,uint64)byte[0]`, `reader_view(uint64)((byte,byte[280]),(byte,byte[9]),(byte,byte[32]),uint64,uint64,uint64)`]
    },
  appApproval: `BiAVAH8B3AILCJgCoQIDBPQdBeTlqYwKsMT94Avk7Lj3DITR88cF6dPu2wWpAiAJoI0GJiABAQEAAAEDAQQBAgEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4iNQAxGEEGNCpkSSJbNQEhBVs1AjEZJBJBAAgxACkpZkIGAjYaABdJQQC4IjUEJDUGSSEMDEAAWUkhDQxAADhJIQ4MQAAZIQ4SRDYaATYaAlA1/ys0/1CBoAKvUEIAoiENEkQ2GgE2GgJQNhoDUDX/KDT/UEIAiiEMEkQ2GgE2GgJQNf8nBDT/UIGZAq9QQgBwSSEPDEAAL0khEAxAABMhEBJEKjX/JwU0/1AhEa9QQgBPIQ8SRDYaATX/JwY0/1AhB69QQgA6gfj+vu0BEkQ2GgE2GgJQNf8pNP9QIQWvUEIAHjYaAhc1BDYaAzYaARdJJAxAA1RJIQgMQAL4IQgSRCEJNAESRDQESSISTDQCEhFEKWQoZFAnBWRQK2RQJwRkUCcGZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQJxpkUCcbZFAnHGRQJx1kUCceZFAnH2RQSTUDSUpJVwAgNf8hEls1/oEoIQpYNf2BnB5bNfyBpB5bNftJNQU1+oAEMcNkazT6ULA0+iJVSSEIDEAA1EkhCQxAAK5JIQsMQABBIQsSRDT6VwEINfmACAAAAAAAAAivNP0lNPkXIQQYCyVYULA0/SU0+RchBBgLJVg1BzT/NP40/TT8JDIGNPtCAmVINPpXARA1+TT5Ils1+DT4iAQ+sSKyATT4sggkshAxADT9JTT5IQVbIQQYCyVYgaMCgSFYSTX3VwEgNPciVU2yB7OACAAAAAAAAAfysCo1BzT/NP40/TT8JDIGNPs0+Ag0+AlCAf9IgAgAAAAAAAAHKLAqNQc0/zT+NP00/CQyBjT7QgHgSSQMQADBSYECDEAAIEiACQAAAAAAAAZcAbAoNQc0/zT+NP00/CIyBjT7QgGzSDT6JCERWDX5NPkhB1s1+DT9JTT4IQQYCyVYSTX3gcQCWzX2KDT5IiEGWFAoNPkhBiETWFBQKDEAUFA09hZQNPeBzAIhBVhQNPeB1AIhBVhQNfWACAAAAAAAAAWdsCo1B4AEur7gHTT4FlA09VCwNP80/jT9IiU09iEEGAtSNPVQNP0lSTT2IQQYCwghClJQNPwkMgY0+0IBGUg0+iQhB1g1+SEUIjEAiALnIlUkEk01+DT4iALogAgAAAAAAAAEKzT8FlCwNPwWNQcoNPkiIQZYUCg0+SEGIRNYUFAoMQBQUDT8FlAhBa9QIQWvUDX3gARKy6rJNPdQsDT/NP40+Ag0/SIlNPwhBBgLUjT3UDT9JUk0/CEEGAsIIQpSUDT8JAgkMgY0+zT4CEIAhiQSRCQ0ARJENARJIhJMNAISEUQpZEk1AzX/gASai5F0sDT/MQASRCWvNf40/yI0/klQNP5QNP5QNP5QNP5QNP5QNP5QNP5QNP5QNP5QIiQyBiJCADFIIRSIAhciNAESRDQESSISTDQCEhFEgARfDav6sDEAKUsBVwAgZ0gkNQEyBjUCQgGNNf81/jX9Nfw1+zX6Nfk0/UEBSzT5NPoWUDT7UDT8FlA0/xZQKUsBVwB/ZyhLAVd/f2cnBUsBV/5/ZytLAYH9AiNYZycESwGB/AMjWGcnBksBgfsEI1hnJwdLAYH6BSNYZycISwGB+QYjWGcnCUsBgfgHI1hnJwpLAYH3CCNYZycLSwGB9gkjWGcnDEsBgfUKI1hnJw1LAYH0CyNYZycOSwGB8wwjWGcnD0sBgfINI1hnJxBLAYHxDiNYZycRSwGB8A8jWGcnEksBge8QI1hnJxNLAYHuESNYZycUSwGB7RIjWGcnFUsBgewTI1hnJxZLAYHrFCNYZycXSwGB6hUjWGcnGEsBgekWI1hnJxlLAYHoFyNYZycaSwGB5xgjWGcnG0sBgeYZI1hnJxxLAYHlGiNYZycdSwGB5BsjWGcnHksBgeMcI1hnJx9LAYHiHYFKWGdIIQk1ATIGNQJCAC+xIrIBNP+yCCSyEDT5sgezQgAAMRkhCxJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCESMTUSRCIxNhJEJDE3EkQiNQEiNQJC/65JMRhhQAADSCmJKWKJNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 31,
  stateSize: 3884,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:63:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:202:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:55:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "blogger_createblog": blogger_createblog,
  "blogger_edit": blogger_edit,
  "end": end,
  "reader_likeOrDislike": reader_likeOrDislike,
  "reader_tip": reader_tip,
  "reader_view": reader_view
  };
export const _APIs = {
  blogger: {
    createblog: blogger_createblog,
    edit: blogger_edit
    },
  end: end,
  reader: {
    likeOrDislike: reader_likeOrDislike,
    tip: reader_tip,
    view: reader_view
    }
  };
