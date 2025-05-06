JavaScript
function operator(proxies) {
  const targetIP = "113.108.90.36";
  
  return proxies.map(proxy => {
    // 只处理 Shadowsocks 节点
    if (proxy.type === "trojan") {
      // 检查节点名称是否包含 "IPLC" 或 "移动"
      if (proxy.server.includes("guangzhou")) 
   {
        // 替换 IP 地址
        proxy.server = targetIP;
      }
    }
    return proxy;
  });
}
